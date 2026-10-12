import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Volume2, RotateCcw, CheckCircle2, Ear, ArrowRight, Eye } from "lucide-react";
import { speak } from "@/lib/speech";
import { addXp } from "@/lib/progress";

export const Route = createFileRoute("/_app/listen/")({
  head: () => ({
    meta: [
      { title: "Listening Dictation — AI" },
      {
        name: "description",
        content:
          "শুনে বাংলা মনে করি বা টাইপ করি। কান ট্রেনিং সবচেয়ে গুরুত্বপূর্ণ ধাপ — Krashen's Input Hypothesis।",
      },
    ],
  }),
  component: ListenPage,
});

// Simple, high-frequency English sentences with Bangla — daily life.
const BANK = [
  { en: "Good morning. How are you?", bn: "সুপ্রভাত। তুমি কেমন আছো?" },
  { en: "My name is Rafiq.", bn: "আমার নাম রফিক।" },
  { en: "I am a student.", bn: "আমি একজন ছাত্র।" },
  { en: "Where do you live?", bn: "তুমি কোথায় থাকো?" },
  { en: "I live in Dhaka.", bn: "আমি ঢাকায় থাকি।" },
  { en: "How much does it cost?", bn: "এর দাম কত?" },
  { en: "Please give me a glass of water.", bn: "আমাকে এক গ্লাস পানি দাও দয়া করে।" },
  { en: "I don't understand.", bn: "আমি বুঝতে পারছি না।" },
  { en: "Can you help me?", bn: "তুমি কি আমাকে সাহায্য করতে পারবে?" },
  { en: "What time is it?", bn: "এখন কয়টা বাজে?" },
  { en: "I am going home now.", bn: "আমি এখন বাড়ি যাচ্ছি।" },
  { en: "Thank you very much.", bn: "অনেক ধন্যবাদ।" },
  { en: "I will come tomorrow.", bn: "আমি আগামীকাল আসব।" },
  { en: "This food is delicious.", bn: "এই খাবারটা খুব সুস্বাদু।" },
  { en: "I need to see the doctor.", bn: "আমাকে ডাক্তারের সাথে দেখা করতে হবে।" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function ListenPage() {
  const queue = useMemo(() => shuffle(BANK).slice(0, 8), []);
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState("");
  const [reveal, setReveal] = useState(false);
  const [correct, setCorrect] = useState(0);
  const c = queue[i];

  useEffect(() => {
    if (c) speak(c.en, { rate: 0.85 });
  }, [c]);

  if (!c) {
    return (
      <main className="max-w-lg mx-auto px-5 py-20 text-center">
        <div className="text-6xl">🎧</div>
        <h1 className="font-display text-4xl mt-4">শেষ! মাশাআল্লাহ।</h1>
        <p className="mt-3 font-bangla text-foreground/70">
          তুমি {correct} / {queue.length} সঠিকভাবে বুঝেছ। +{correct * 3} XP।
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-primary transition"
        >
          আবার শুরু করি <ArrowRight className="size-4" />
        </button>
      </main>
    );
  }

  const next = (wasRight: boolean) => {
    if (wasRight) {
      addXp(3);
      setCorrect((x) => x + 1);
    }
    setTyped("");
    setReveal(false);
    setI((x) => x + 1);
  };

  return (
    <main className="max-w-xl mx-auto px-5 py-10">
      <div className="flex items-center justify-between text-xs opacity-70 mb-4">
        <span className="flex items-center gap-1.5">
          <Ear className="size-3.5" /> Listening
        </span>
        <span>
          {i + 1} / {queue.length}
        </span>
      </div>
      <div className="h-1 rounded-full bg-border overflow-hidden mb-8">
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${(i / queue.length) * 100}%` }}
        />
      </div>

      <div className="rounded-3xl border border-border bg-card p-8 shadow-elevated">
        <div className="text-center">
          <button
            onClick={() => speak(c.en, { rate: 0.85 })}
            className="mx-auto size-16 rounded-full bg-primary text-primary-foreground grid place-items-center hover:opacity-90 transition shadow-elevated"
            aria-label="Play"
          >
            <Volume2 className="size-6" />
          </button>
          <div className="mt-3 text-xs opacity-60 font-bangla">▶ আবার শুনতে ক্লিক করো</div>
          <button
            onClick={() => speak(c.en, { rate: 0.6 })}
            className="mt-2 text-xs text-primary hover:underline"
          >
            <RotateCcw className="size-3 inline mr-1" /> ধীরে শুনি
          </button>
        </div>

        <div className="mt-8">
          <label className="text-xs uppercase tracking-wider opacity-70 font-bangla">
            যা শুনেছ, বাংলায় লেখো (বা মনে মনে বলো)
          </label>
          <textarea
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            rows={3}
            placeholder="বাংলায় লিখো..."
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary resize-none"
          />
        </div>

        {!reveal ? (
          <button
            onClick={() => setReveal(true)}
            className="mt-4 w-full py-3 rounded-xl border border-border bg-card hover:border-primary/50 font-semibold text-sm transition inline-flex items-center justify-center gap-2"
          >
            <Eye className="size-4" /> উত্তর দেখি
          </button>
        ) : (
          <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-5">
            <div className="text-xs opacity-70 uppercase tracking-wider">English</div>
            <div className="text-lg mt-1">{c.en}</div>
            <div className="text-xs opacity-70 uppercase tracking-wider mt-3">বাংলা</div>
            <div className="text-lg font-bangla text-primary mt-1">{c.bn}</div>
            <div className="mt-6 grid grid-cols-2 gap-2">
              <button
                onClick={() => next(false)}
                className="py-2.5 rounded-lg border border-border bg-card text-sm hover:border-destructive/40 hover:text-destructive transition"
              >
                ভুল হয়েছিল
              </button>
              <button
                onClick={() => next(true)}
                className="py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition inline-flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 className="size-4" /> ঠিক ছিল
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="text-center text-[11px] opacity-60 mt-6 font-bangla">
        💡 প্রতিদিন ৫টা বাক্য শুনলেই ১ মাসে ১৫০টা — কান সম্পূর্ণ বদলে যাবে।
      </p>
    </main>
  );
}
