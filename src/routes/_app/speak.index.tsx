import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Mic,
  Square,
  Volume2,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  AlertTriangle,
  RotateCcw,
} from "lucide-react";
import { SPEAK_SETS, type SpeakSet } from "@/data/speak-sets";
import { speak } from "@/lib/speech";
import { createRecognizer, recognitionSupported } from "@/lib/recognition";
import { scorePronunciation, type PronunciationScore } from "@/lib/score";
import { addXp } from "@/lib/progress";

export const Route = createFileRoute("/_app/speak/")({
  head: () => ({
    meta: [
      { title: "Speaking Practice — AI English Academy" },
      {
        name: "description",
        content:
          "আপনি বলবেন, system শুনবে ও score দেবে — একদম ফ্রি। Web Speech Recognition দিয়ে প্রতিটা শব্দে feedback পাবেন। বাস্তব জীবনের ৫টা পরিস্থিতিতে ইংরেজি বলা অভ্যাস করুন।",
      },
    ],
  }),
  component: SpeakPage,
});

function SpeakPage() {
  const [supported, setSupported] = useState(true);
  const [setId, setSetId] = useState(SPEAK_SETS[0].id);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setSupported(recognitionSupported());
  }, []);

  const set = useMemo<SpeakSet>(
    () => SPEAK_SETS.find((s) => s.id === setId) ?? SPEAK_SETS[0],
    [setId],
  );

  const sentence = set.sentences[idx];

  const changeSet = (id: string) => {
    setSetId(id);
    setIdx(0);
  };

  return (
    <main className="flex-1 overflow-y-auto">
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-medium text-primary/80 mb-4">
          <Sparkles className="size-3.5" />
          Speaking Practice — 100% Free
        </div>
        <h1 className="font-display text-4xl md:text-5xl leading-tight">
          আপনি বলুন — <span className="italic text-primary">system score দেবে</span>
        </h1>
        <p className="mt-5 text-muted-foreground font-bangla leading-relaxed max-w-2xl">
          Browser-এর নিজের Speech Recognition ব্যবহার করে — কোনো subscription নেই। বাক্য দেখুন → 🔊
          শুনুন → 🎤 নিজে বলুন → প্রতিটা শব্দে সবুজ / হলুদ / লাল feedback পাবেন। এভাবেই ধীরে ধীরে{" "}
          <b>উচ্চারণ ঠিক হবে</b>।
        </p>

        {!supported && (
          <div className="mt-6 p-4 rounded-xl border border-destructive/30 bg-destructive/10 flex gap-3 text-sm">
            <AlertTriangle className="size-5 text-destructive shrink-0" />
            <div className="font-bangla">
              দুঃখিত, আপনার browser-এ Speech Recognition নেই। <b>Chrome, Edge, বা Safari</b> ব্যবহার
              করলে এই feature কাজ করবে। Firefox-এ এখনো এই সুবিধা নেই।
            </div>
          </div>
        )}

        {/* Category tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {SPEAK_SETS.map((s) => (
            <button
              key={s.id}
              onClick={() => changeSet(s.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
                s.id === setId
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/40"
              }`}
            >
              <span className="mr-1">{s.emoji}</span>
              <span className="font-bangla">{s.titleBn}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        {/* Progress dots */}
        <div className="flex items-center justify-center gap-1.5 mb-6">
          {set.sentences.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-8 bg-primary" : i < idx ? "w-1.5 bg-primary/40" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>

        <SentenceCard
          key={`${set.id}-${idx}`}
          en={sentence.en}
          bn={sentence.bn}
          supported={supported}
        />

        {/* Nav buttons */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => setIdx((i) => Math.max(0, i - 1))}
            disabled={idx === 0}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed bg-card border border-border hover:border-primary/40 transition"
          >
            <ChevronLeft className="size-4" /> আগের
          </button>
          <div className="text-xs text-muted-foreground font-bangla">
            {idx + 1} / {set.sentences.length}
          </div>
          <button
            onClick={() => setIdx((i) => Math.min(set.sentences.length - 1, i + 1))}
            disabled={idx === set.sentences.length - 1}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold bg-foreground text-background hover:bg-primary transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            পরের <ChevronRight className="size-4" />
          </button>
        </div>
      </section>
    </main>
  );
}

/* ================= Sentence Card ================= */
function SentenceCard({ en, bn, supported }: { en: string; bn: string; supported: boolean }) {
  const [listening, setListening] = useState(false);
  const [interim, setInterim] = useState("");
  const [score, setScore] = useState<PronunciationScore | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const recRef = useRef<ReturnType<typeof createRecognizer> | null>(null);

  const reset = () => {
    setInterim("");
    setScore(null);
    setErr(null);
  };

  const startListening = () => {
    if (!supported) return;
    reset();
    const rec = createRecognizer({
      lang: "en-US",
      onPartial: (t) => setInterim(t),
      onFinal: (r) => {
        const s = scorePronunciation(en, r.transcript);
        setScore(s);
        setInterim("");
        // XP proportional
        if (s.percent >= 60) addXp(Math.round(s.percent / 20));
      },
      onError: (e) => {
        setListening(false);
        if (e === "no-speech") setErr("কিছু শোনা যায়নি। আরেকবার চেষ্টা করো।");
        else if (e === "not-allowed" || e === "service-not-allowed")
          setErr("Microphone-এ access দিতে হবে। Browser settings চেক করো।");
        else setErr(`ত্রুটি: ${e}`);
      },
      onEnd: () => setListening(false),
      onStart: () => setListening(true),
    });
    if (!rec) {
      setErr("Speech Recognition সাপোর্ট করে না।");
      return;
    }
    recRef.current = rec;
    rec.start();
  };

  const stopListening = () => {
    recRef.current?.stop();
    setListening(false);
  };

  return (
    <article className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elevated">
      {/* Sentence to read */}
      <div className="text-center">
        <div className="text-[10px] uppercase tracking-[0.24em] text-primary/70 font-bold mb-3">
          এই বাক্যটি বলুন
        </div>
        <div className="font-display text-3xl md:text-4xl leading-snug">
          {score ? <ColoredSentence score={score} /> : en}
        </div>
        <div className="mt-3 font-bangla text-sm text-muted-foreground">{bn}</div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            onClick={() => speak(en, { rate: 0.9 })}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition"
          >
            <Volume2 className="size-4" /> শুনি
          </button>
          <button
            onClick={() => speak(en, { rate: 0.6 })}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-accent border border-border hover:border-primary/40 transition"
          >
            <Volume2 className="size-4" /> ধীরে
          </button>
        </div>
      </div>

      {/* Mic button */}
      <div className="mt-10 flex flex-col items-center">
        {!listening ? (
          <button
            onClick={startListening}
            disabled={!supported}
            className="size-24 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground grid place-items-center shadow-elevated hover:scale-105 active:scale-95 transition disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Start speaking"
          >
            <Mic className="size-10" />
          </button>
        ) : (
          <button
            onClick={stopListening}
            className="size-24 rounded-full bg-destructive text-destructive-foreground grid place-items-center shadow-elevated animate-pulse"
            aria-label="Stop"
          >
            <Square className="size-8" />
          </button>
        )}
        <div className="mt-3 text-xs font-bangla text-muted-foreground">
          {listening
            ? "শুনছি… এবার আপনি বলুন"
            : score
              ? "আবার চেষ্টা করবেন?"
              : "🎤 বোতাম চেপে বলুন"}
        </div>

        {interim && (
          <div className="mt-4 px-4 py-2 rounded-full bg-accent text-sm italic max-w-full truncate">
            "{interim}"
          </div>
        )}
      </div>

      {/* Error */}
      {err && (
        <div className="mt-6 p-3 rounded-xl bg-destructive/10 border border-destructive/25 text-sm font-bangla text-destructive-foreground/90 flex items-start gap-2">
          <AlertTriangle className="size-4 text-destructive shrink-0 mt-0.5" />
          {err}
        </div>
      )}

      {/* Score */}
      {score && (
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex items-center gap-4">
            <ScoreRing pct={score.percent} />
            <div className="flex-1 min-w-0">
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                আপনি বললেন
              </div>
              <div className="text-base italic mt-0.5 truncate">"{score.spoken || "…"}"</div>
              <div className="text-xs font-bangla text-foreground/80 mt-2">{score.feedback}</div>
            </div>
          </div>

          <button
            onClick={startListening}
            className="mt-5 w-full py-3 rounded-xl bg-foreground text-background text-sm font-semibold hover:bg-primary transition inline-flex items-center justify-center gap-2"
          >
            <RotateCcw className="size-4" /> আবার বলি
          </button>
        </div>
      )}

      {/* Legend */}
      {score && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-[10px] uppercase tracking-wider text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <span className="size-2 rounded-full bg-green-500" /> সঠিক
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="size-2 rounded-full bg-yellow-500" /> কাছাকাছি
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="size-2 rounded-full bg-destructive" /> মিস
          </span>
        </div>
      )}
    </article>
  );
}

function ColoredSentence({ score }: { score: PronunciationScore }) {
  return (
    <span>
      {score.words.map((w, i) => {
        const color =
          w.status === "correct"
            ? "text-green-600"
            : w.status === "close"
              ? "text-yellow-600"
              : "text-destructive line-through decoration-2 decoration-destructive/60";
        return (
          <span key={i} className={color}>
            {w.target}
            {i < score.words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </span>
  );
}

function ScoreRing({ pct }: { pct: number }) {
  const r = 32;
  const c = 2 * Math.PI * r;
  const off = c - (c * pct) / 100;
  const color = pct >= 75 ? "text-green-500" : pct >= 50 ? "text-yellow-500" : "text-destructive";
  return (
    <div className="relative shrink-0 size-20">
      <svg viewBox="0 0 80 80" className="size-20 -rotate-90">
        <circle cx="40" cy="40" r={r} fill="none" strokeWidth="7" className="stroke-border" />
        <circle
          cx="40"
          cy="40"
          r={r}
          fill="none"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={off}
          className={`${color} transition-all duration-700`}
          stroke="currentColor"
        />
      </svg>
      <div className={`absolute inset-0 grid place-items-center font-display text-2xl ${color}`}>
        {pct}
      </div>
    </div>
  );
}
