import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Pencil,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Eye,
  EyeOff,
  RotateCcw,
  Volume2,
  Lightbulb,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { WRITE_SETS, type WriteSet, type WritePrompt } from "@/data/write-sets";
import { speak } from "@/lib/speech";
import { addXp } from "@/lib/progress";
import { getBYOK } from "@/lib/settings";

export const Route = createFileRoute("/_app/write/")({
  head: () => ({
    meta: [
      { title: "Writing Practice — AI English Academy" },
      {
        name: "description",
        content:
          "লেখার চর্চা — বাংলা বাক্য দেখে ইংরেজিতে লিখুন। প্রতিটা শব্দ ধরিয়ে দেওয়া হবে। AI feedback অপশনাল (BYOK)।",
      },
    ],
  }),
  component: WritePage,
});

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[.,!?;:'"()–—-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const tokens = (s: string) => norm(s).split(" ").filter(Boolean);

// Levenshtein — used to allow small typos
function lev(a: string, b: string): number {
  if (a === b) return 0;
  const m = a.length,
    n = b.length;
  if (!m) return n;
  if (!n) return m;
  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
  return dp[m][n];
}

type WordStatus = "ok" | "close" | "extra" | "missing";
type WordMark = { word: string; status: WordStatus };

type LocalScore = {
  percent: number;
  bestAnswer: string;
  marks: WordMark[]; // marks on user's tokens
  missing: string[]; // key words from bestAnswer user didn't type
};

function scoreLocal(user: string, prompt: WritePrompt): LocalScore {
  const userT = tokens(user);
  // pick best-matching acceptable answer
  let best = prompt.answers[0];
  let bestOverlap = -1;
  for (const a of prompt.answers) {
    const at = tokens(a);
    const overlap = at.filter((w) => userT.includes(w)).length;
    if (overlap > bestOverlap) {
      bestOverlap = overlap;
      best = a;
    }
  }
  const bestT = tokens(best);
  const bestSet = new Set(bestT);
  const marks: WordMark[] = userT.map((w) => {
    if (bestSet.has(w)) return { word: w, status: "ok" };
    // typo tolerance
    const close = bestT.find((b) => b.length > 3 && lev(w, b) <= 1);
    if (close) return { word: w, status: "close" };
    return { word: w, status: "extra" };
  });
  const usedSet = new Set(userT);
  const missing = bestT.filter(
    (w) => !usedSet.has(w) && !userT.some((u) => u.length > 3 && lev(u, w) <= 1),
  );
  const okCount = marks.filter((m) => m.status === "ok" || m.status === "close").length;
  const percent = bestT.length ? Math.round((okCount / bestT.length) * 100) : 0;
  return { percent, bestAnswer: best, marks, missing };
}

function WritePage() {
  const [setId, setSetId] = useState(WRITE_SETS[0].id);
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [scored, setScored] = useState<LocalScore | null>(null);
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const set = useMemo<WriteSet>(
    () => WRITE_SETS.find((s) => s.id === setId) ?? WRITE_SETS[0],
    [setId],
  );
  const prompt = set.prompts[idx];
  const total = set.prompts.length;

  function reset() {
    setText("");
    setShowAnswer(false);
    setShowHints(false);
    setScored(null);
    setAiFeedback(null);
    setAiError(null);
  }

  function selectSet(id: string) {
    setSetId(id);
    setIdx(0);
    reset();
  }

  function go(delta: number) {
    const next = (idx + delta + total) % total;
    setIdx(next);
    reset();
  }

  function check() {
    if (!text.trim()) return;
    const s = scoreLocal(text, prompt);
    setScored(s);
    if (s.percent >= 70) addXp(6);
    else if (s.percent >= 40) addXp(3);
  }

  async function askAi() {
    setAiError(null);
    const byok = getBYOK();
    if (!byok?.key) {
      setAiError("AI feedback পেতে Settings → API Key যোগ করুন।");
      return;
    }
    setAiLoading(true);
    setAiFeedback(null);
    try {
      const sys =
        "You are a kind Bangla-medium English teacher. The learner translated a Bangla sentence into English. " +
        "Reply in short Bangla (3-5 lines). First say if the meaning is correct. Then list up to 2 fixes (grammar/word choice) briefly. " +
        "End with the best natural English version on its own line, prefixed with '✅ '. Be encouraging.";
      const user = `Bangla: ${prompt.bn}\nLearner's English: ${text}\nAcceptable answers: ${prompt.answers.join(" | ")}`;
      let reply = "";
      {
        const r = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${byok.key}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              systemInstruction: { parts: [{ text: sys }] },
              contents: [{ role: "user", parts: [{ text: user }] }],
            }),
          },
        );
        if (!r.ok) throw new Error(`Gemini ${r.status}`);
        const j = await r.json();
        reply = j.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
      }
      setAiFeedback(reply.trim() || "কোনো ফিডব্যাক পাওয়া যায়নি।");
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "AI call failed";
      setAiError(msg);
    } finally {
      setAiLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* ===== Hero ===== */}
      <section className="border-b border-border/60 bg-gradient-to-br from-primary/8 via-background to-gold/8">
        <div className="max-w-5xl mx-auto px-5 py-10">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-primary/80 font-bold">
            <Pencil className="size-3.5" />
            Writing Practice
          </div>
          <h1 className="font-display text-4xl md:text-5xl mt-3 leading-tight">
            <span className="font-bangla">লেখার চর্চা</span>
            <span className="italic text-muted-foreground"> — write it out</span>
          </h1>
          <p className="mt-3 font-bangla text-muted-foreground max-w-2xl leading-relaxed">
            বাংলা বাক্য পড়ুন → নিজে ইংরেজিতে লিখুন → সাথে সাথে প্রতিটা শব্দে ফিডব্যাক পান। AI
            সাহেবের বিস্তারিত মতামত চাইলে Settings-এ API Key যোগ করলেই হবে (অপশনাল)।
          </p>
        </div>
      </section>

      {/* ===== Set picker ===== */}
      <section className="max-w-5xl mx-auto px-5 pt-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {WRITE_SETS.map((s) => (
            <button
              key={s.id}
              onClick={() => selectSet(s.id)}
              className={`text-left rounded-xl border p-3 transition ${
                s.id === setId
                  ? "border-primary bg-primary/8 shadow-soft"
                  : "border-border hover:border-primary/40 hover:bg-accent/40"
              }`}
            >
              <div className="font-bangla text-sm font-semibold">{s.title}</div>
              <div className="text-[10px] uppercase tracking-wider opacity-60 mt-0.5">
                {s.titleEn}
              </div>
              <div className="text-[10px] font-bangla mt-1 text-primary/80">
                {s.level} • {s.prompts.length}টি
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ===== Main prompt ===== */}
      <section className="max-w-3xl mx-auto px-5 py-8">
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-muted-foreground">
            <span>{set.titleEn}</span>
            <span>
              {idx + 1} / {total}
            </span>
          </div>

          <div className="mt-3 font-bangla text-2xl md:text-3xl leading-snug text-foreground">
            {prompt.bn}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowHints((v) => !v)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-accent/60 hover:bg-accent transition"
            >
              <Lightbulb className="size-3.5" />
              <span className="font-bangla">{showHints ? "হিন্ট লুকাও" : "হিন্ট দাও"}</span>
            </button>
            {showHints && (
              <div className="flex flex-wrap gap-1.5">
                {prompt.hints.map((h) => (
                  <span
                    key={h}
                    className="px-2 py-0.5 rounded-md text-xs bg-primary/10 text-primary font-medium"
                  >
                    {h}
                  </span>
                ))}
              </div>
            )}
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your English here…"
            className="mt-5 w-full min-h-28 rounded-xl border border-border bg-background p-4 text-base leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary/40"
          />

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={check}
              disabled={!text.trim()}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 disabled:opacity-40 flex items-center gap-1.5"
            >
              <CheckCircle2 className="size-4" />
              <span className="font-bangla">যাচাই করো</span>
            </button>
            <button
              onClick={askAi}
              disabled={!text.trim() || aiLoading}
              className="px-4 py-2 rounded-lg border border-primary/40 text-primary font-semibold text-sm hover:bg-primary/8 disabled:opacity-40 flex items-center gap-1.5"
            >
              <Sparkles className="size-4" />
              {aiLoading ? "..." : <span className="font-bangla">AI মতামত</span>}
            </button>
            <button
              onClick={() => setShowAnswer((v) => !v)}
              className="px-4 py-2 rounded-lg bg-accent/60 hover:bg-accent text-sm flex items-center gap-1.5"
            >
              {showAnswer ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              <span className="font-bangla">উত্তর দেখো</span>
            </button>
            <button
              onClick={reset}
              className="px-4 py-2 rounded-lg bg-accent/60 hover:bg-accent text-sm flex items-center gap-1.5"
            >
              <RotateCcw className="size-4" />
              <span className="font-bangla">রিসেট</span>
            </button>
          </div>

          {aiError && (
            <div className="mt-3 rounded-lg border border-destructive/30 bg-destructive/8 p-3 text-sm text-destructive font-bangla">
              {aiError}
            </div>
          )}

          {/* ===== Local score ===== */}
          {scored && (
            <div className="mt-6 rounded-xl border border-border bg-accent/30 p-5">
              <div className="flex items-center justify-between">
                <div className="font-bangla text-sm text-muted-foreground">আপনার score</div>
                <div
                  className={`text-2xl font-display font-bold ${
                    scored.percent >= 70
                      ? "text-primary"
                      : scored.percent >= 40
                        ? "text-gold-foreground"
                        : "text-destructive"
                  }`}
                >
                  {scored.percent}%
                </div>
              </div>

              <div className="mt-4">
                <div className="text-[11px] uppercase tracking-wider opacity-60 mb-1.5">
                  Your words
                </div>
                <div className="flex flex-wrap gap-1.5 text-sm">
                  {scored.marks.length === 0 ? (
                    <span className="text-muted-foreground italic">কিছু লিখুন…</span>
                  ) : (
                    scored.marks.map((m, i) => (
                      <span
                        key={i}
                        className={`px-2 py-0.5 rounded-md font-medium ${
                          m.status === "ok"
                            ? "bg-primary/15 text-primary"
                            : m.status === "close"
                              ? "bg-gold/25 text-gold-foreground"
                              : "bg-destructive/12 text-destructive line-through"
                        }`}
                      >
                        {m.word}
                      </span>
                    ))
                  )}
                </div>
              </div>

              {scored.missing.length > 0 && (
                <div className="mt-4">
                  <div className="text-[11px] uppercase tracking-wider opacity-60 mb-1.5 flex items-center gap-1.5">
                    <XCircle className="size-3.5" /> Missing key words
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-sm">
                    {scored.missing.map((w) => (
                      <span
                        key={w}
                        className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4 rounded-lg bg-background border border-border p-3 flex items-start gap-2">
                <button
                  onClick={() => speak(scored.bestAnswer)}
                  className="p-1.5 rounded-md hover:bg-accent shrink-0"
                  aria-label="Listen"
                >
                  <Volume2 className="size-4" />
                </button>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-primary/80 font-bold">
                    ✅ Best answer
                  </div>
                  <div className="text-base mt-0.5">{scored.bestAnswer}</div>
                </div>
              </div>
            </div>
          )}

          {/* ===== AI feedback ===== */}
          {aiFeedback && (
            <div className="mt-4 rounded-xl border border-primary/25 bg-primary/6 p-5">
              <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-primary font-bold mb-2">
                <Sparkles className="size-3.5" /> AI সাহেবের মতামত
              </div>
              <div className="whitespace-pre-wrap font-bangla text-sm leading-relaxed">
                {aiFeedback}
              </div>
            </div>
          )}

          {/* ===== Answer reveal ===== */}
          {showAnswer && (
            <div className="mt-4 rounded-xl border border-border bg-background p-4">
              <div className="text-[11px] uppercase tracking-wider opacity-60 mb-2">
                Acceptable answers
              </div>
              <ul className="space-y-1.5">
                {prompt.answers.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm">
                    <button
                      onClick={() => speak(a)}
                      className="p-1 rounded hover:bg-accent shrink-0"
                    >
                      <Volume2 className="size-3.5" />
                    </button>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
              {prompt.note && (
                <div className="mt-3 pt-3 border-t border-border text-xs font-bangla text-muted-foreground">
                  💡 {prompt.note}
                </div>
              )}
            </div>
          )}
        </div>

        {/* ===== Nav ===== */}
        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={() => go(-1)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border hover:bg-accent text-sm"
          >
            <ChevronLeft className="size-4" />
            <span className="font-bangla">আগের</span>
          </button>
          <div className="text-xs text-muted-foreground font-bangla">
            প্রশ্ন {idx + 1} / {total}
          </div>
          <button
            onClick={() => go(1)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-foreground text-background text-sm"
          >
            <span className="font-bangla">পরের</span>
            <ChevronRight className="size-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
