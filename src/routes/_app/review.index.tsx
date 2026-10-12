import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, Volume2, Sparkles, ArrowRight, RotateCcw } from "lucide-react";
import { dueCards, answer, stats, seed, type SRSCard } from "@/lib/srs";
import { THEMES } from "@/data/vocab-themes";
import { addXp } from "@/lib/progress";
import { speak } from "@/lib/speech";

export const Route = createFileRoute("/_app/review/")({
  head: () => ({
    meta: [
      { title: "Spaced Repetition — AI" },
      {
        name: "description",
        content:
          "Leitner Box পদ্ধতিতে শব্দ পুনরায় দেখো। মস্তিষ্ক যখন প্রায় ভুলে যাচ্ছে ঠিক তখনই দেখলে সবচেয়ে ভালো মনে থাকে।",
      },
    ],
  }),
  component: ReviewPage,
});

function ReviewPage() {
  const [queue, setQueue] = useState<SRSCard[]>([]);
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const [done, setDone] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setQueue(dueCards());
    setReady(true);
  }, []);

  const card = queue[i];

  const grade = (correct: boolean) => {
    if (!card) return;
    answer(card.id, correct);
    if (correct) addXp(2);
    setDone((d) => d + 1);
    setFlip(false);
    setI((x) => x + 1);
  };

  const seedMore = () => {
    // Seed 2 more themes into SRS
    for (const t of THEMES.slice(0, 3)) {
      seed(t.words.map((w) => ({ id: `${t.id}:${w.w}`, w: w.w, bn: w.bn, ex: w.ex })));
    }
    setQueue(dueCards());
    setI(0);
  };

  if (!ready) return <div className="p-10 text-center opacity-60">লোড হচ্ছে…</div>;

  if (queue.length === 0) {
    return (
      <main className="max-w-xl mx-auto px-5 py-20 text-center">
        <Sparkles className="size-12 text-primary mx-auto" />
        <h1 className="font-display text-3xl mt-4">এখন কোনো শব্দ বাকি নেই!</h1>
        <p className="mt-3 font-bangla text-foreground/70">
          চমৎকার! নতুন থিম শিখতে যাও, অথবা এক ক্লিকে কিছু শব্দ যোগ করে অনুশীলন শুরু করো।
        </p>
        <div className="mt-8 flex gap-3 justify-center flex-wrap">
          <Link
            to="/vocab-plan"
            className="px-5 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-primary transition"
          >
            নতুন থিম শিখি
          </Link>
          <button
            onClick={seedMore}
            className="px-5 py-3 rounded-full border border-border bg-card text-sm font-medium hover:border-primary/50"
          >
            + ৩টি থিম SRS-এ যোগ করি
          </button>
        </div>
      </main>
    );
  }

  if (i >= queue.length) {
    const s = stats();
    return (
      <main className="max-w-lg mx-auto px-5 py-20 text-center">
        <div className="text-6xl">🎉</div>
        <h1 className="font-display text-4xl mt-4">শেষ! মাশাআল্লাহ।</h1>
        <p className="mt-3 font-bangla text-foreground/70">
          আজ {done}টি শব্দ পুনরায় দেখেছ। +{done * 2} XP।
        </p>
        <div className="mt-6 rounded-2xl border border-border bg-card p-4 text-left">
          <div className="text-xs opacity-60 uppercase tracking-wider mb-2">এখনকার অবস্থা</div>
          <div className="grid grid-cols-5 gap-2">
            {s.boxes.map((n, idx) => (
              <div
                key={idx}
                className={`p-2 rounded text-center text-sm ${idx === 4 ? "bg-primary/10 text-primary" : "bg-accent/40"}`}
              >
                <div className="font-display text-lg">{n}</div>
                <div className="text-[9px] opacity-60">B{idx + 1}</div>
              </div>
            ))}
          </div>
        </div>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-primary transition"
        >
          হোম-এ ফিরি <ArrowRight className="size-4" />
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-xl mx-auto px-5 py-10">
      {/* progress */}
      <div className="flex items-center justify-between text-xs opacity-70 mb-4">
        <span>
          {i + 1} / {queue.length}
        </span>
        <span className="font-bangla">
          Box {card.box} · {card.seen} বার দেখা
        </span>
      </div>
      <div className="h-1 rounded-full bg-border overflow-hidden mb-8">
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${(i / queue.length) * 100}%` }}
        />
      </div>

      {/* Card */}
      <div className="rounded-3xl border border-border bg-card p-10 shadow-elevated text-center">
        <button
          onClick={() => speak(card.w)}
          className="mx-auto mb-6 size-12 rounded-full bg-primary/10 text-primary grid place-items-center hover:bg-primary hover:text-primary-foreground transition"
          aria-label="Listen"
        >
          <Volume2 className="size-5" />
        </button>
        <div className="font-display text-5xl">{card.w}</div>
        {flip ? (
          <>
            <div className="mt-4 font-bangla text-2xl text-primary">{card.bn}</div>
            {card.ex && (
              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-sm italic">"{card.ex}"</div>
                <button
                  onClick={() => speak(card.ex!)}
                  className="text-xs text-primary mt-2 hover:underline"
                >
                  ▶ শুনি
                </button>
              </div>
            )}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <button
                onClick={() => grade(false)}
                className="py-3 rounded-xl border border-destructive/40 bg-destructive/5 text-destructive font-semibold hover:bg-destructive/10 transition flex items-center justify-center gap-2"
              >
                <XCircle className="size-4" /> কঠিন
              </button>
              <button
                onClick={() => grade(true)}
                className="py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="size-4" /> সহজ
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={() => setFlip(true)}
            className="mt-8 px-8 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-primary transition inline-flex items-center gap-2"
          >
            <RotateCcw className="size-4" /> বাংলা অর্থ দেখি
          </button>
        )}
      </div>

      <p className="text-center text-[11px] opacity-60 mt-6 font-bangla">
        "সহজ" = অনেক দিন পর দেখব · "কঠিন" = আবার Box ১-এ ফিরে যাবে
      </p>
    </main>
  );
}
