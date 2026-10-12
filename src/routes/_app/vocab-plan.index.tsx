import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
  Volume2,
  BookMarked,
  Lightbulb,
  List,
} from "lucide-react";

import { OXFORD_3000, OXFORD_TOTAL, buildDailyPlan, type Ox3Word } from "@/data/oxford3000";

const OXFORD_WORD_SET = new Set(OXFORD_3000.map((w) => w.w.toLowerCase()));

// word (lowercase) → { level, all POS entries from Oxford }
// একই শব্দের একাধিক pos (verb/noun ইত্যাদি) থাকলে সব একসাথে জমা হয়
const OXFORD_INFO = (() => {
  const m = new Map<string, { level: Ox3Word["level"]; pos: string[] }>();
  for (const w of OXFORD_3000) {
    const k = w.w.toLowerCase();
    const e = m.get(k);
    if (e) {
      if (!e.pos.includes(w.pos)) e.pos.push(w.pos);
    } else {
      m.set(k, { level: w.level, pos: [w.pos] });
    }
  }
  return m;
})();
import { speak } from "@/lib/speech";
import { buildFormulaExample } from "@/lib/word-example";
import { THEMES, type VocabTheme, type VocabWord } from "@/data/vocab-themes";
import { THEME_STORIES } from "@/data/vocab-theme-stories";

export const Route = createFileRoute("/_app/vocab-plan/")({
  head: () => ({
    meta: [
      { title: "Oxford 3000 প্ল্যান — ৩০/৪০/৫০ দিনে সম্পূর্ণ শব্দভাণ্ডার" },
      {
        name: "description",
        content:
          "Oxford 3000 (CEFR A1→B2) শব্দগুলো ৩০/৪০/৫০ দিনে সাজানো — প্রতিদিন ছোট ছোট সেকশন, বাংলা অর্থ, উচ্চারণ, অগ্রগতি সংরক্ষণ।",
      },
      { property: "og:title", content: "Oxford 3000 প্ল্যান — গুরুজি" },
      {
        property: "og:description",
        content:
          "৩০/৪০/৫০ দিনে সম্পূর্ণ Oxford 3000। প্রতিদিন ২০-২৫ শব্দের সেকশন, বাংলা অর্থ, ফ্রি উচ্চারণ।",
      },
    ],
  }),
  component: VocabPlanPage,
});

type Plan = 30 | 40 | 50;
const PLAN_LABEL: Record<Plan, string> = {
  30: "৩০ দিন",
  40: "৪০ দিন",
  50: "৫০ দিন",
};

const STORAGE_PLAN = "vp:plan";
const STORAGE_DAY = "vp:day";
const STORAGE_DONE = "vp:done";
const STORAGE_DONE_THEMES = "vp:done:themes";
const STORAGE_MODE = "vp:mode";

type Mode = "story" | "serial";

const LEVEL_COLOR: Record<Ox3Word["level"], string> = {
  A1: "bg-emerald-100 text-emerald-800 border-emerald-200",
  A2: "bg-sky-100 text-sky-800 border-sky-200",
  B1: "bg-amber-100 text-amber-800 border-amber-200",
  B2: "bg-rose-100 text-rose-800 border-rose-200",
};

const LEVEL_LABEL: Record<Ox3Word["level"], string> = {
  A1: "শুরু (A1)",
  A2: "সহজ (A2)",
  B1: "মাঝারি (B1)",
  B2: "উপরের ধাপ (B2)",
};

function VocabPlanPage() {
  const [plan, setPlan] = useState<Plan>(30);
  const [day, setDay] = useState(1);
  const [done, setDone] = useState<Record<string, boolean>>({});
  // থিম সেকশনের টিক আলাদা — দুইটা সেকশন একে অপরকে প্রভাবিত করবে না
  const [doneThemes, setDoneThemes] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState<Mode>("story");

  // Restore from localStorage
  useEffect(() => {
    try {
      const m = localStorage.getItem(STORAGE_MODE);
      if (m === "story" || m === "serial") setMode(m);
      const p = localStorage.getItem(STORAGE_PLAN);
      if (p === "30" || p === "40" || p === "50") setPlan(Number(p) as Plan);
      const d = localStorage.getItem(STORAGE_DAY);
      if (d) setDay(Math.max(1, parseInt(d, 10)) || 1);
      const dn = localStorage.getItem(STORAGE_DONE);
      if (dn) setDone(JSON.parse(dn));
      const dt = localStorage.getItem(STORAGE_DONE_THEMES);
      if (dt) setDoneThemes(JSON.parse(dt));
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_PLAN, String(plan));
    } catch {
      /* ignore */
    }
  }, [plan, ready]);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_DAY, String(day));
    } catch {
      /* ignore */
    }
  }, [day, ready]);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_DONE, JSON.stringify(done));
    } catch {
      /* ignore */
    }
  }, [done, ready]);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_DONE_THEMES, JSON.stringify(doneThemes));
    } catch {
      /* ignore */
    }
  }, [doneThemes, ready]);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_MODE, mode);
    } catch {
      /* ignore */
    }
  }, [mode, ready]);

  const days = useMemo(() => buildDailyPlan(plan, 20), [plan]);
  const currentDay = days[Math.min(day - 1, days.length - 1)];
  const perDay = Math.round(OXFORD_TOTAL / plan);

  // সামগ্রিক Oxford অগ্রগতি — দিন বদলালেও একই থাকবে (motivation)
  const oxfordDoneTotal = useMemo(
    () => OXFORD_3000.reduce((n, w) => (done[w.w] ? n + 1 : n), 0),
    [done],
  );
  const oxfordPctTotal = (oxfordDoneTotal / OXFORD_TOTAL) * 100;

  // Lookup: word → Bangla meaning (from themes)
  const wordMeaning = useMemo(() => {
    const map = new Map<string, string>();
    for (const t of THEMES) for (const w of t.words) if (!map.has(w.w)) map.set(w.w, w.bn);
    return map;
  }, []);

  // Revision: cycle through learned OR all words, 6 per batch, mixed direction (EN↔BN)
  type RevCard = { w: string; dir: "en2bn" | "bn2en" };
  const REV_BATCH = 6;
  const [revPool, setRevPool] = useState<"learned" | "all">("learned");
  const [revQueue, setRevQueue] = useState<string[]>([]);
  const [revisionCards, setRevisionCards] = useState<RevCard[]>([]);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const buildBatch = (queue: string[]): { batch: RevCard[]; rest: string[] } => {
    const batch = queue.slice(0, REV_BATCH).map((w, i) => ({
      w,
      dir: (i % 2 === 0 ? "en2bn" : "bn2en") as "en2bn" | "bn2en",
    }));
    batch.sort(() => Math.random() - 0.5);
    return { batch, rest: queue.slice(REV_BATCH) };
  };

  const nextRevisionBatch = (poolOverride?: "learned" | "all") => {
    const pool = poolOverride || revPool;
    let queue = revQueue;
    if (queue.length < REV_BATCH || poolOverride) {
      const source =
        pool === "all"
          ? Array.from(wordMeaning.keys())
          : Array.from(
              new Set([
                ...Object.keys(done).filter((k) => done[k]),
                ...Object.keys(doneThemes).filter((k) => doneThemes[k]),
              ]),
            ).filter((k) => wordMeaning.has(k));
      queue = [...source].sort(() => Math.random() - 0.5);
    }
    const { batch, rest } = buildBatch(queue);
    setRevisionCards(batch);
    setRevQueue(rest);
    setRevealed({});
  };

  const switchPool = (p: "learned" | "all") => {
    setRevPool(p);
    nextRevisionBatch(p);
  };

  useEffect(() => {
    if (!ready) return;
    if (revisionCards.length === 0) nextRevisionBatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  const toggle = (w: string) => setDone((prev) => ({ ...prev, [w]: !prev[w] }));
  const toggleThemes = (w: string) => setDoneThemes((prev) => ({ ...prev, [w]: !prev[w] }));

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-10">
        {/* Header — সহজ, ভয় নেই */}
        <div className="mb-8">
          <div className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold">
            শব্দভাণ্ডার
          </div>
          <h1 className="font-display text-4xl md:text-6xl mt-3 leading-[1.05]">
            প্রতিদিন <em className="text-primary">২০টি শব্দ</em> — গল্পের সাথে
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
            ভয় পাওয়ার কিছু নেই। একটা থিম খুলুন, ২০টি শব্দ দেখুন, ছোট গল্পটা শুনুন — ব্যাস। মাথায়
            বসে যাবে।
          </p>
        </div>

        {/* কী শিখব? কেন? — সহজ ভাষায় ব্যাখ্যা */}
        <section className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="rounded-2xl bg-card border border-border p-5 shadow-soft">
            <div className="text-2xl mb-2">📚</div>
            <div className="font-display text-lg mb-1.5">কী শিখব?</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ইংরেজি ভাষার{" "}
              <strong className="text-foreground">সবচেয়ে জরুরি {OXFORD_TOTAL}টি শব্দ</strong> —
              যেগুলো ছাড়া দৈনিক জীবনে কথা বলা, বই পড়া, খবর দেখা কোনো কিছুই চলে না।
              <span className="block mt-2 text-xs opacity-75">
                📖 সূত্র: Oxford University Press-এর অফিশিয়াল{" "}
                <a
                  href="https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-primary"
                >
                  Oxford 3000™
                </a>{" "}
                তালিকা।
              </span>
            </p>
          </div>

          <div className="rounded-2xl bg-card border border-border p-5 shadow-soft">
            <div className="text-2xl mb-2">🎯</div>
            <div className="font-display text-lg mb-1.5">কী লাভ হবে?</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              এই শব্দগুলো জানলে ইংরেজি লেখা-পড়ার{" "}
              <strong className="text-foreground">প্রায় ৮৫%</strong> বুঝে ফেলবেন। কথা বলার সাহস
              আসবে, ভয় কেটে যাবে।
            </p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-5 shadow-soft">
            <div className="text-2xl mb-2">⏰</div>
            <div className="font-display text-lg mb-1.5">কত সময়?</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              এটা <strong className="text-foreground">আপনার ইচ্ছা</strong>। দিনে ১০ মিনিটও দিতে
              পারেন, ১ ঘণ্টাও। যত সময় দেবেন, তত তাড়াতাড়ি শেষ হবে। কোনো তাড়া নেই।
            </p>
          </div>
        </section>

        {/* কীভাবে ব্যবহার করবেন? — ৪ ধাপের সহজ গাইড */}
        <section className="mb-8 rounded-2xl bg-gradient-to-br from-primary/5 via-card to-emerald-500/5 border border-primary/20 p-5 md:p-6 shadow-soft">
          <div className="font-display text-lg md:text-xl mb-1 flex items-center gap-2">
            <span>🗺️</span> কীভাবে ব্যবহার করবেন?
          </div>
          <p className="text-xs md:text-sm text-muted-foreground mb-4">
            মাত্র ৪টা ধাপ — সবার জন্য সহজ, কোনো ভয় নেই।
          </p>
          <ol className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <li className="rounded-xl bg-background/70 border border-border p-3 md:p-4">
              <div className="text-2xl mb-1.5">১️⃣</div>
              <div className="font-semibold text-sm mb-1">থিম বেছে নিন</div>
              <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">
                নিচের তালিকা থেকে যেকোনো একটা — "পরিবার", "খাবার", যেটা মন চায়।
              </p>
            </li>
            <li className="rounded-xl bg-background/70 border border-border p-3 md:p-4">
              <div className="text-2xl mb-1.5">২️⃣</div>
              <div className="font-semibold text-sm mb-1">শব্দ শুনুন</div>
              <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">
                প্রতিটা শব্দের পাশে 🔊 বাটনে চাপ দিয়ে সঠিক উচ্চারণ শুনুন।
              </p>
            </li>
            <li className="rounded-xl bg-background/70 border border-border p-3 md:p-4">
              <div className="text-2xl mb-1.5">৩️⃣</div>
              <div className="font-semibold text-sm mb-1">গল্প পড়ুন</div>
              <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">
                <span className="inline-block px-1 rounded bg-primary/15 text-primary font-semibold">
                  নীল
                </span>{" "}
                = Oxford,{" "}
                <span className="inline-block px-1 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-semibold">
                  সবুজ
                </span>{" "}
                = দৈনন্দিন। গল্পে দেখলেই মনে থাকে।
              </p>
            </li>
            <li className="rounded-xl bg-background/70 border border-border p-3 md:p-4">
              <div className="text-2xl mb-1.5">৪️⃣</div>
              <div className="font-semibold text-sm mb-1">✓ টিক দিন</div>
              <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">
                যে শব্দ মনে আছে, তার পাশে টিক দিন। অগ্রগতি নিজে নিজেই সেভ হবে।
              </p>
            </li>
          </ol>
        </section>

        {/* মনে আছে? — শব্দ ভাণ্ডার থেকে রিভিশন (দুই দিকে) */}
        <section className="mb-8 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 p-5">
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <div>
              <div className="font-display text-base md:text-lg text-amber-900 dark:text-amber-100 flex items-center gap-2">
                <span>🧠</span> মনে আছে?{" "}
                <span className="text-xs font-normal opacity-70">({REV_BATCH}টি করে)</span>
              </div>
              <p className="text-xs text-amber-800/80 dark:text-amber-200/70 mt-0.5">
                🔵 ইংরেজি দেখে বাংলা মনে করুন · 🟢 বাংলা দেখে ইংরেজি মনে করুন। সব শব্দ পালাক্রমে
                আসবে।
              </p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="inline-flex rounded-lg border border-amber-300 dark:border-amber-800 overflow-hidden text-xs font-semibold">
                <button
                  onClick={() => switchPool("learned")}
                  className={`px-2.5 py-1.5 transition ${revPool === "learned" ? "bg-amber-500 text-white" : "bg-background/50 text-amber-900 dark:text-amber-100 hover:bg-amber-100 dark:hover:bg-amber-900/40"}`}
                >
                  শুধু শেখা
                </button>
                <button
                  onClick={() => switchPool("all")}
                  className={`px-2.5 py-1.5 transition border-l border-amber-300 dark:border-amber-800 ${revPool === "all" ? "bg-amber-500 text-white" : "bg-background/50 text-amber-900 dark:text-amber-100 hover:bg-amber-100 dark:hover:bg-amber-900/40"}`}
                >
                  সব {wordMeaning.size}টি
                </button>
              </div>
              <button
                onClick={() => nextRevisionBatch()}
                className="px-3 py-1.5 rounded-lg bg-amber-200/60 dark:bg-amber-900/40 text-amber-900 dark:text-amber-100 text-xs font-semibold hover:bg-amber-300/60 dark:hover:bg-amber-800/40 transition"
              >
                🔄 পরের {REV_BATCH}টি
              </button>
            </div>
          </div>
          {revisionCards.length === 0 ? (
            <div className="text-sm text-amber-800/80 dark:text-amber-200/70 font-bangla text-center py-6">
              {revPool === "learned"
                ? 'এখনো কোনো শব্দে ✓ টিক দেননি। উপরের "সব" বাটন চাপুন — যেকোনো শব্দ দিয়ে অনুশীলন শুরু করুন।'
                : "লোড হচ্ছে..."}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {revisionCards.map((card) => {
                const isEn = card.dir === "en2bn";
                const bn = wordMeaning.get(card.w) || "";
                const front = isEn ? card.w : bn;
                const back = isEn ? bn : card.w;
                return (
                  <div
                    key={card.w + card.dir}
                    className={`rounded-lg border p-3 flex flex-col items-center text-center min-h-[110px] justify-between ${
                      isEn
                        ? "bg-primary/5 border-primary/30"
                        : "bg-emerald-500/5 border-emerald-500/30"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      {isEn && (
                        <button
                          onClick={() => speak(card.w)}
                          className="text-primary hover:opacity-70 transition"
                          aria-label={`Say ${card.w}`}
                        >
                          <Volume2 className="size-3.5" />
                        </button>
                      )}
                      <span className={`font-semibold text-sm ${!isEn ? "font-bangla" : ""}`}>
                        {front}
                      </span>
                    </div>
                    {revealed[card.w + card.dir] ? (
                      <div className="flex items-center gap-1.5">
                        {!isEn && (
                          <button
                            onClick={() => speak(card.w)}
                            className="text-primary hover:opacity-70 transition"
                            aria-label={`Say ${card.w}`}
                          >
                            <Volume2 className="size-3.5" />
                          </button>
                        )}
                        <span
                          className={`text-xs ${isEn ? "font-bangla text-emerald-700 dark:text-emerald-400" : "font-semibold text-primary"}`}
                        >
                          {back}
                        </span>
                      </div>
                    ) : (
                      <button
                        onClick={() => setRevealed((p) => ({ ...p, [card.w + card.dir]: true }))}
                        className="text-[11px] px-2 py-0.5 rounded bg-amber-200/60 dark:bg-amber-900/40 text-amber-900 dark:text-amber-100 hover:bg-amber-300/60 transition"
                      >
                        দেখাও
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
          {/* সবার জন্য সবসময় নিচে ছোট্ট ব্যাখ্যা */}
          <div className="mt-3 pt-3 border-t border-amber-200/60 dark:border-amber-900/40 text-[11px] text-amber-800/80 dark:text-amber-200/70 font-bangla leading-relaxed">
            💡 <strong>"শুধু শেখা"</strong> মোডে সেই শব্দগুলোই আসবে যেগুলোতে আপনি নিচের থিমে ✓ টিক
            দিয়েছেন।
            <strong>"সব"</strong> মোডে পুরো {wordMeaning.size}টি শব্দ থেকে অনুশীলন হবে।
          </div>
        </section>

        {/* উন্নত সেটিংস — লুকানো, চাইলে খুলবে */}
        <details className="mb-8 rounded-xl border border-border bg-card/60">
          <summary className="cursor-pointer select-none px-4 py-3 text-sm font-semibold flex items-center gap-2 hover:bg-accent/40 rounded-xl transition">
            <Lightbulb className="size-4 text-primary" />
            শেখার পদ্ধতি বদলাতে চান?{" "}
            <span className="text-muted-foreground font-normal">(চাইলেই)</span>
          </summary>
          <div className="px-4 pb-4 pt-1">
            <div className="flex gap-1 p-1 rounded-xl bg-accent/60 border border-border w-fit">
              <button
                onClick={() => setMode("story")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-1.5 ${
                  mode === "story"
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "hover:bg-background text-muted-foreground"
                }`}
              >
                <BookMarked className="size-4" /> গল্প-মোড
              </button>
              <button
                onClick={() => setMode("serial")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-1.5 ${
                  mode === "serial"
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "hover:bg-background text-muted-foreground"
                }`}
              >
                <List className="size-4" /> পুরো তালিকা
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed max-w-2xl">
              {mode === "story" ? (
                <>
                  <strong className="text-foreground">গল্প-মোড (সাধারণ):</strong> ২০টি থিমে ভাগ করা
                  ৪০০টি সবচেয়ে দরকারি শব্দ। প্রতিটা থিমের নিচে একটা ছোট গল্প — সব শব্দ গল্পে বাঁধা।
                  গল্পে শেখা শব্দ অনেক বেশি মনে থাকে।
                </>
              ) : (
                <>
                  <strong className="text-foreground">পুরো তালিকা (উন্নত):</strong> সম্পূর্ণ{" "}
                  {OXFORD_TOTAL}টি শব্দ, সহজ থেকে কঠিন সাজানো। দিনে দিনে অগ্রগতি দেখতে চাইলে এটা —
                  এখানে ৩০/৪০/৫০ দিনের গতিও বেছে নিতে পারবেন।
                </>
              )}
            </p>
          </div>
        </details>

        {mode === "story" && <ThemeStoryMode done={doneThemes} onToggle={toggleThemes} />}

        {mode === "serial" && (
          <>
            {/* Plan picker */}
            <section className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft mb-8">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
                    তোমার গতি বেছে নাও
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl mt-2">
                    প্ল্যান — {PLAN_LABEL[plan]}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-2 max-w-md">
                    {plan === 30
                      ? `দ্রুত গতি — প্রতিদিন প্রায় ${perDay} শব্দ। এক মাসেই পুরো Oxford 3000 শেষ, তবে দৈনিক ৪৫-৬০ মিনিট চাই।`
                      : plan === 40
                        ? `মাঝারি গতি — প্রতিদিন প্রায় ${perDay} শব্দ। কাজ-স্কুলের ফাঁকে সামলানো সহজ, ~৩০-৪৫ মিনিট।`
                        : `আরামদায়ক গতি — প্রতিদিন প্রায় ${perDay} শব্দ। ~২০-৩০ মিনিট, রিভিশনের জন্য অনেক সময়।`}
                  </p>
                </div>
                <div className="flex gap-2">
                  {([30, 40, 50] as Plan[]).map((p) => (
                    <button
                      key={p}
                      onClick={() => {
                        setPlan(p);
                        setDay(1);
                      }}
                      className={`px-4 py-2.5 rounded-xl font-semibold text-sm border transition ${
                        plan === p
                          ? "bg-primary text-primary-foreground border-primary shadow-soft"
                          : "bg-background border-border hover:border-primary/40"
                      }`}
                    >
                      {PLAN_LABEL[p]}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Day navigator */}
            <section className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setDay((d) => Math.max(1, d - 1))}
                disabled={day <= 1}
                className="p-2.5 rounded-full border border-border bg-card hover:border-primary/40 disabled:opacity-40 transition"
                aria-label="Previous day"
              >
                <ChevronLeft className="size-4" />
              </button>
              <div className="flex-1 overflow-x-auto">
                <div className="flex gap-1.5 min-w-max py-1">
                  {days.map((d) => {
                    const isCurrent = d.day === day;
                    return (
                      <button
                        key={d.day}
                        onClick={() => setDay(d.day)}
                        className={`min-w-[44px] h-11 rounded-lg text-sm font-semibold border transition ${
                          isCurrent
                            ? "bg-primary text-primary-foreground border-primary shadow-soft"
                            : "bg-card border-border hover:border-primary/40 text-muted-foreground"
                        }`}
                      >
                        {d.day}
                      </button>
                    );
                  })}
                </div>
              </div>
              <button
                onClick={() => setDay((d) => Math.min(days.length, d + 1))}
                disabled={day >= days.length}
                className="p-2.5 rounded-full border border-border bg-card hover:border-primary/40 disabled:opacity-40 transition"
                aria-label="Next day"
              >
                <ChevronRight className="size-4" />
              </button>
            </section>

            {/* Today's sections */}
            <section>
              <div className="mb-6 flex items-center gap-3">
                <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <BookOpen className="size-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
                    Day {day} of {plan}
                  </div>
                  <div className="font-display text-2xl md:text-3xl">
                    আজকের শব্দ · {currentDay?.total ?? 0}টি · {currentDay?.sections.length ?? 0}টি
                    সেকশন
                  </div>
                </div>
              </div>

              {/* সামগ্রিক Oxford যাত্রা — motivation bar (দিন বদলালেও একই) */}
              <div className="mb-6 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-emerald-500/5 p-5 md:p-6">
                <div className="flex items-end justify-between gap-4 mb-3 flex-wrap">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
                      Oxford 3000 যাত্রা
                    </div>
                    <div className="font-display text-xl md:text-2xl mt-1 font-bangla">
                      মোট শেখা হয়েছে{" "}
                      <span className="text-primary">
                        {oxfordDoneTotal.toLocaleString("bn-BD")}
                      </span>{" "}
                      <span className="text-muted-foreground text-base">
                        / {OXFORD_TOTAL.toLocaleString("bn-BD")} শব্দ
                      </span>
                    </div>
                  </div>
                  <div className="font-display text-3xl md:text-4xl text-primary">
                    {Math.round(oxfordPctTotal)}%
                  </div>
                </div>
                <div className="h-3 rounded-full bg-background/70 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-emerald-500 transition-all duration-500"
                    style={{ width: `${oxfordPctTotal}%` }}
                  />
                </div>
                <div className="mt-2 text-[11px] text-muted-foreground font-bangla">
                  💪 প্রতিদিন একটু একটু করে — একদিন পুরো ২,৯৭৯ শব্দ ইনশাআল্লাহ শেষ হবে।
                </div>
              </div>

              {!currentDay || currentDay.sections.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
                  এই দিনে কোনো শব্দ নেই।
                </div>
              ) : (
                <div className="space-y-6">
                  {currentDay.sections.map((section, idx) => (
                    <SectionBlock
                      key={idx}
                      index={idx + 1}
                      totalSections={currentDay.sections.length}
                      words={section}
                      done={done}
                      onToggle={toggle}
                    />
                  ))}
                </div>
              )}
            </section>
          </>
        )}

        {/* Study routine */}
        <section className="mt-14 rounded-2xl border border-border bg-primary text-primary-foreground p-8 md:p-10">
          <div className="text-[11px] uppercase tracking-[0.3em] opacity-80 font-semibold">
            প্রতিটি সেকশনের জন্য ৫-৭ মিনিট
          </div>
          <h3 className="font-display text-2xl md:text-3xl mt-2 mb-6">
            চার ধাপ — ইনশাআল্লাহ ভুলবে না
          </h3>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <Step n="১" title="শোনো" body="প্রতিটা শব্দের 🔊 চাপো, উচ্চস্বরে ৩ বার রিপিট কর।" />
            <Step n="২" title="বোঝ" body="বাংলা অর্থ পড়ো, মনে মনে ছবি বানাও।" />
            <Step
              n="৩"
              title="ব্যবহার"
              body="প্রতিটা শব্দ দিয়ে একটা ছোট বাক্য বানাও (মনে মনে বা লিখে)।"
            />
            <Step n="৪" title="টিক দাও" body="মাথায় গেঁথে গেছে যেগুলো, সেগুলোর পাশে ✓ দাও।" />
          </div>
        </section>
      </div>
    </main>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 p-4">
      <div className="font-display text-3xl leading-none opacity-70">{n}</div>
      <div className="font-semibold mt-2">{title}</div>
      <p className="text-xs mt-1 opacity-85 leading-relaxed">{body}</p>
    </div>
  );
}

function SectionBlock({
  index,
  totalSections,
  words,
  done,
  onToggle,
}: {
  index: number;
  totalSections: number;
  words: Ox3Word[];
  done: Record<string, boolean>;
  onToggle: (w: string) => void;
}) {
  const secDone = words.filter((w) => done[w.w]).length;
  // Level range shown for this section (usually all same, but might cross A1→A2)
  const levels = Array.from(new Set(words.map((w) => w.level)));
  // ১ম section ডিফল্ট খোলা, বাকিগুলো ছোট — পেজ হালকা রাখতে
  const [open, setOpen] = useState(index === 1);
  return (
    <article className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full text-left p-5 md:p-6 border-b border-border bg-gradient-to-br from-primary/5 to-transparent flex items-center gap-4 flex-wrap hover:bg-primary/5 transition"
      >
        <div className="size-11 rounded-xl bg-primary text-primary-foreground font-display text-lg flex items-center justify-center shrink-0">
          {index}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold">
            Section {index} / {totalSections}
          </div>
          <div className="font-display text-xl mt-0.5">
            {words.length}টি শব্দ · {levels.map((l) => LEVEL_LABEL[l]).join(", ")}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {levels.map((l) => (
            <span
              key={l}
              className={`text-[10px] font-bold px-2 py-1 rounded-full border ${LEVEL_COLOR[l]}`}
            >
              {l}
            </span>
          ))}
        </div>
        <div className="text-right shrink-0 text-xs text-muted-foreground">
          <div className="font-semibold text-foreground text-base">
            {secDone}/{words.length}
          </div>
          শেষ
        </div>
        <ChevronDown
          className={`size-5 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* এই সেকশনের নিজস্ব progress bar — বন্ধ অবস্থায়ও দেখা যাবে */}
      <div className="px-5 md:px-6 pt-4">
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-emerald-500 transition-all duration-500"
            style={{
              width: `${words.length ? (secDone / words.length) * 100 : 0}%`,
            }}
          />
        </div>
        <div className="mt-1.5 flex items-center justify-between text-[11px] text-muted-foreground font-bangla">
          <span>এই সেকশনের অগ্রগতি</span>
          <span>{words.length ? Math.round((secDone / words.length) * 100) : 0}%</span>
        </div>
      </div>

      {open && (
        <ul className="grid sm:grid-cols-2 divide-y sm:divide-y-0 divide-border mt-4">
          {words.map((w) => (
            <WordRow key={w.w} w={w} checked={!!done[w.w]} onToggle={() => onToggle(w.w)} />
          ))}
        </ul>
      )}
    </article>
  );
}

function WordRow({ w, checked, onToggle }: { w: Ox3Word; checked: boolean; onToggle: () => void }) {
  const [open, setOpen] = useState(false);
  const example = useMemo(() => buildFormulaExample(w), [w]);
  return (
    <li
      className={`group p-4 border-b sm:border-b-0 sm:[&:nth-child(odd)]:border-r border-border transition ${
        checked ? "bg-emerald-50/40" : "hover:bg-accent/30"
      }`}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={onToggle}
          aria-label={checked ? "Mark not done" : "Mark done"}
          className="mt-1 shrink-0"
        >
          {checked ? (
            <CheckCircle2 className="size-5 text-emerald-600" />
          ) : (
            <Circle className="size-5 text-muted-foreground group-hover:text-primary transition" />
          )}
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => {
                speak(w.w);
                setOpen((o) => !o);
              }}
              className="flex items-center gap-1.5 text-lg font-display leading-none hover:text-primary transition"
              aria-label={`Play ${w.w} and toggle example`}
            >
              {w.w}
              <Volume2 className="size-3.5 text-muted-foreground group-hover:text-primary transition" />
              <ChevronDown
                className={`size-3.5 text-muted-foreground transition-transform ${
                  open ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
              {w.pos}
            </span>
            <span
              className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${LEVEL_COLOR[w.level]}`}
            >
              {w.level}
            </span>
          </div>
          <div className="font-bangla text-[15px] text-foreground/85 mt-1.5">{w.bn}</div>

          {open && example && (
            <div className="mt-3 rounded-lg border border-primary/20 bg-primary/5 p-3 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="text-[10px] uppercase tracking-wider text-primary font-bold">
                  {example.formulaNo > 0
                    ? `Formula ${example.formulaNo} · ${example.formulaName}`
                    : example.formulaName}
                </div>
                <button
                  onClick={() => speak(example.en)}
                  className="p-1 rounded hover:bg-primary/10 text-primary"
                  aria-label="Play example"
                >
                  <Volume2 className="size-3.5" />
                </button>
              </div>
              <div className="text-[15px] font-medium text-foreground leading-snug">
                “{example.en}”
              </div>
              <div className="font-bangla text-sm text-foreground/75 leading-snug">
                অর্থ: {example.bn}
              </div>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

/* ================================================================
   THEME + STORY MODE — মস্তিষ্কে গেঁথে দেওয়ার পদ্ধতি
   ২০ থিম × ২০ শব্দ + প্রতি থিমে একটা ছোট গল্প
   ================================================================ */

function ThemeStoryMode({
  done,
  onToggle,
}: {
  done: Record<string, boolean>;
  onToggle: (w: string) => void;
}) {
  const [openId, setOpenId] = useState<string | null>(THEMES[0]?.id ?? null);
  const filteredThemes = THEMES;

  const uniqueWords = useMemo(() => {
    const s = new Set<string>();
    for (const t of THEMES) for (const w of t.words) s.add(w.w.toLowerCase());
    return s.size;
  }, []);

  // মোট কতগুলো থিম "সম্পূর্ণ শেষ" (সব ২০ শব্দে টিক)
  const sectionsDone = useMemo(
    () => THEMES.filter((t) => t.words.every((w) => done[w.w])).length,
    [done],
  );
  const sectionsPct = (sectionsDone / THEMES.length) * 100;

  return (
    <div>
      {/* কৌশল টিপ */}
      <section className="rounded-2xl border border-border bg-card p-5 shadow-soft mb-6">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">কৌশল:</strong> ২০টি শব্দ পড়ুন → গল্পটা ৩ বার শুনুন →
          নিজে জোরে পড়ুন → বাংলা দেখে English মনে করার চেষ্টা করুন। প্রতিটা থিম শেষে ৫ মিনিট বিরতি
          নিন।
          <span className="block mt-2 text-xs opacity-80">
            মোট <strong>{THEMES.length}টি থিম</strong> ·{" "}
            <strong>{uniqueWords.toLocaleString("bn-BD")}টি স্বতন্ত্র শব্দ</strong> (প্রায় সবই
            Oxford 3000-এর মধ্যে; সাথে অল্প কিছু দৈনিক জীবনের জরুরি শব্দ যেমন rickshaw, mosque,
            wifi)। একই শব্দ একাধিক থিমে থাকলে বারবার চর্চা হয় — এতে বেশি মনে থাকে।
          </span>
        </p>
      </section>

      {/* সামগ্রিক প্রগ্রেস — কতগুলো সেকশন শেষ */}
      <section className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-emerald-500/10 p-5 mb-6 font-bangla">
        <div className="flex items-end justify-between mb-2 flex-wrap gap-2">
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
              সামগ্রিক অগ্রগতি
            </div>
            <div className="font-display text-xl md:text-2xl text-foreground mt-1">
              {sectionsDone} / {THEMES.length}{" "}
              <span className="text-sm text-muted-foreground font-normal">সেকশন শেষ</span>
            </div>
          </div>
          <div className="text-right">
            <div className="font-display text-3xl md:text-4xl text-primary">
              {Math.round(sectionsPct)}%
            </div>
          </div>
        </div>
        <div className="h-3 rounded-full bg-background/60 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-emerald-500 transition-all duration-500"
            style={{ width: `${sectionsPct}%` }}
          />
        </div>
        <div className="mt-2 text-[11px] text-muted-foreground">
          একটা সেকশন "শেষ" হবে যখন তার সব ২০টা শব্দে ✓ টিক দেবেন।
        </div>
      </section>

      {/* Theme list */}
      <div className="space-y-4">
        {filteredThemes.length === 0 ? (
          <div className="rounded-xl border border-border bg-card p-8 text-center font-bangla text-muted-foreground">
            কোনো সেকশন পাওয়া যায়নি। অন্য শব্দ দিয়ে খুঁজে দেখুন।
          </div>
        ) : (
          filteredThemes.map((theme) => {
            const idx = THEMES.indexOf(theme);
            return (
              <ThemeBlock
                key={theme.id}
                index={idx + 1}
                theme={theme}
                done={done}
                onToggle={onToggle}
                open={openId === theme.id}
                onOpen={() => setOpenId((cur) => (cur === theme.id ? null : theme.id))}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

function ThemeBlock({
  index,
  theme,
  done,
  onToggle,
  open,
  onOpen,
}: {
  index: number;
  theme: VocabTheme;
  done: Record<string, boolean>;
  onToggle: (w: string) => void;
  open: boolean;
  onOpen: () => void;
}) {
  const story = THEME_STORIES[theme.id];
  const oxfordWords = theme.words.filter((w) => OXFORD_WORD_SET.has(w.w.toLowerCase()));
  const extraWords = theme.words.filter((w) => !OXFORD_WORD_SET.has(w.w.toLowerCase()));
  const oxfordDone = oxfordWords.filter((w) => done[w.w]).length;
  const extraDone = extraWords.filter((w) => done[w.w]).length;
  const oxfordPct = oxfordWords.length ? (oxfordDone / oxfordWords.length) * 100 : 0;
  const extraPct = extraWords.length ? (extraDone / extraWords.length) * 100 : 0;

  return (
    <article className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
      <button
        onClick={onOpen}
        className="w-full p-5 md:p-6 border-b border-border bg-gradient-to-br from-primary/5 to-transparent text-left hover:bg-primary/5 transition"
      >
        <div className="flex items-center gap-4 flex-wrap">
          <div className="size-11 rounded-xl bg-primary text-primary-foreground font-display text-lg flex items-center justify-center shrink-0">
            {index}
          </div>
          <div className="text-2xl">{theme.emoji}</div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold">
              থিম {index} / {THEMES.length}
            </div>
            <div className="font-display text-xl mt-0.5">
              <span className="font-bangla">{theme.title}</span>{" "}
              <span className="text-muted-foreground text-base">· {theme.titleEn}</span>
            </div>
          </div>
          <div className="text-right shrink-0 font-bangla">
            <div className="font-display text-2xl leading-none text-foreground">
              {oxfordDone + extraDone}
              <span className="text-muted-foreground text-lg">/{theme.words.length}</span>
            </div>
            <div className="text-[10px] text-muted-foreground mt-0.5">মোট শব্দ</div>
          </div>
          <ChevronDown
            className={`size-5 text-muted-foreground transition-transform ${
              open ? "rotate-180 text-primary" : ""
            }`}
          />
        </div>

        {/* একটাই প্রগ্রেস বার — ভেতরে দুই রঙে ভাগ (Oxford + দৈনন্দিন) */}
        <div className="mt-4 font-bangla">
          <div className="h-2 rounded-full bg-muted overflow-hidden flex">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${(oxfordDone / theme.words.length) * 100}%` }}
            />
            <div
              className="h-full bg-emerald-500 transition-all duration-500"
              style={{ width: `${(extraDone / theme.words.length) * 100}%` }}
            />
          </div>
          <div className="mt-1.5 flex items-center justify-between text-[11px] text-muted-foreground flex-wrap gap-x-3 gap-y-0.5">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-primary" />
              Oxford {oxfordDone}/{oxfordWords.length}
              {extraWords.length > 0 && (
                <>
                  <span className="mx-1">·</span>
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                  দৈনন্দিন {extraDone}/{extraWords.length}
                </>
              )}
            </span>
          </div>
        </div>
      </button>

      {open && (
        <div className="p-5 md:p-6 space-y-6">
          {/* Memory hook */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm font-bangla leading-relaxed">
            <div className="text-[10px] uppercase tracking-wider text-primary font-bold mb-1.5">
              🧠 মেমরি হুক
            </div>
            {theme.hook}
          </div>

          {/* Words grid — অর্ধেক, বিরতি, বাকি অর্ধেক */}
          {(() => {
            const half = Math.ceil(theme.words.length / 2);
            const first = theme.words.slice(0, half);
            const second = theme.words.slice(half);
            const renderList = (list: typeof theme.words) => (
              <ul className="grid sm:grid-cols-2 divide-y sm:divide-y-0 divide-border border border-border rounded-xl overflow-hidden">
                {list.map((w) => (
                  <ThemeWordRow
                    key={w.w}
                    w={w}
                    checked={!!done[w.w]}
                    onToggle={() => onToggle(w.w)}
                  />
                ))}
              </ul>
            );
            return (
              <>
                {renderList(first)}
                {second.length > 0 && (
                  <>
                    <div className="my-1 flex items-center gap-3 text-xs text-muted-foreground font-bangla">
                      <div className="flex-1 h-px bg-border" />
                      <span className="shrink-0 px-3 py-1 rounded-full bg-accent/60 border border-border">
                        ☕ একটু বিরতি নিন — পানি খান, ৩ মিনিট
                      </span>
                      <div className="flex-1 h-px bg-border" />
                    </div>
                    {renderList(second)}
                  </>
                )}
              </>
            );
          })()}

          {/* Story */}
          {story && (
            <div className="rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent p-5 md:p-6">
              <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-primary font-bold">
                    📖 গল্প · Formula 1-5 · Oxford 3000
                  </div>
                  <div className="font-display text-lg mt-0.5">
                    <span className="font-bangla">{story.title}</span>{" "}
                    <span className="text-muted-foreground text-sm">· {story.titleEn}</span>
                  </div>
                </div>
                <button
                  onClick={() => speak(story.en)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition"
                >
                  <Volume2 className="size-3.5" /> গল্পটা শোনো
                </button>
              </div>
              <p className="text-[15px] md:text-base leading-relaxed text-foreground">
                <HighlightedStory
                  text={story.en}
                  oxfordTargets={theme.words
                    .filter((w) => OXFORD_WORD_SET.has(w.w.toLowerCase()))
                    .map((w) => w.w)}
                  extraTargets={theme.words
                    .filter((w) => !OXFORD_WORD_SET.has(w.w.toLowerCase()))
                    .map((w) => w.w)}
                />
              </p>
              <div className="mt-1 text-[10px] text-muted-foreground font-bangla flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block w-2.5 h-2.5 rounded bg-primary/15 border border-primary/30" />
                  নীল = Oxford 3000
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block w-2.5 h-2.5 rounded bg-emerald-500/15 border border-emerald-500/40" />
                  সবুজ = বাংলাদেশি দৈনন্দিন শব্দ
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-border/60 font-bangla text-[15px] leading-relaxed text-foreground/85">
                {story.bn}
              </div>
              <div className="mt-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 p-3 text-xs font-bangla text-amber-900 dark:text-amber-100 leading-relaxed">
                💡 <strong>টিপ:</strong> {story.tip}
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

function ThemeWordRow({
  w,
  checked,
  onToggle,
}: {
  w: VocabWord;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <li
      className={`group p-4 border-b sm:border-b-0 sm:[&:nth-child(odd)]:border-r border-border transition ${
        checked ? "bg-emerald-50/40" : "hover:bg-accent/30"
      }`}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={onToggle}
          aria-label={checked ? "Mark not done" : "Mark done"}
          className="mt-1 shrink-0"
        >
          {checked ? (
            <CheckCircle2 className="size-5 text-emerald-600" />
          ) : (
            <Circle className="size-5 text-muted-foreground group-hover:text-primary transition" />
          )}
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => speak(w.w)}
              className="flex items-center gap-1.5 text-lg font-display leading-none hover:text-primary transition"
              aria-label={`Play ${w.w}`}
            >
              {w.w}
              <Volume2 className="size-3.5 text-muted-foreground group-hover:text-primary transition" />
            </button>
            {(() => {
              const info = OXFORD_INFO.get(w.w.toLowerCase());
              // Oxford শব্দ হলে Oxford-এর সব pos দেখাও (verb, noun ইত্যাদি একসাথে)।
              // extra/দৈনন্দিন শব্দ হলে শুধু theme-এর নিজস্ব pos।
              const posText = info ? info.pos.join(" · ") : w.pos;
              return (
                <>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                    {posText}
                  </span>
                  {info && (
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${LEVEL_COLOR[info.level]}`}
                      title={LEVEL_LABEL[info.level]}
                    >
                      {info.level}
                    </span>
                  )}
                </>
              );
            })()}
          </div>

          <div className="font-bangla text-[14px] text-foreground/85 mt-1">{w.bn}</div>
          {w.ex && <div className="text-xs italic text-muted-foreground mt-1">"{w.ex}"</div>}
        </div>
      </div>
    </li>
  );
}

/**
 * Highlights target vocabulary words inside a story paragraph.
 * - English: matches whole words case-insensitively (also handles trailing s/es/ed/ing).
 * - Bangla: matches the primary meaning (before comma / slash) as a substring.
 * Longer targets are matched first so multi-word entries win over single words.
 */
function HighlightedStory({
  text,
  oxfordTargets,
  extraTargets,
}: {
  text: string;
  oxfordTargets: string[];
  extraTargets: string[];
}) {
  const oxSet = new Set(
    oxfordTargets.map((t) => t.trim().toLowerCase()).filter((t) => t.length > 1),
  );
  const exSet = new Set(
    extraTargets.map((t) => t.trim().toLowerCase()).filter((t) => t.length > 1),
  );
  const cleaned = Array.from(new Set([...oxSet, ...exSet])).sort((a, b) => b.length - a.length);

  if (cleaned.length === 0) return <>{text}</>;

  const escaped = cleaned.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`\\b(${escaped.join("|")})(s|es|ed|ing)?\\b`, "gi");

  const parts: React.ReactNode[] = [];
  let lastIdx = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > lastIdx) parts.push(text.slice(lastIdx, m.index));
    const base = m[1].toLowerCase();
    const isExtra = exSet.has(base) && !oxSet.has(base);
    parts.push(
      <mark
        key={key++}
        className={
          isExtra
            ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-semibold rounded px-0.5 not-italic no-underline"
            : "bg-primary/15 text-primary font-semibold rounded px-0.5 not-italic no-underline"
        }
      >
        {m[0]}
      </mark>,
    );
    lastIdx = m.index + m[0].length;
    if (m[0].length === 0) pattern.lastIndex++;
  }
  if (lastIdx < text.length) parts.push(text.slice(lastIdx));
  return <>{parts}</>;
}

// Re-export for potential future use
export { OXFORD_3000 };
