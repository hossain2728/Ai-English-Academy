import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CheckCircle2, XCircle, Volume2, RefreshCw, Trophy, Flame } from "lucide-react";
import { OXFORD_3000 } from "@/data/oxford3000";
import { addXp, getProgress, levelFromXp } from "@/lib/progress";
import { speak } from "@/lib/speech";

export const Route = createFileRoute("/_app/practice/")({
  head: () => ({
    meta: [
      { title: "প্রতিদিনের প্র্যাকটিস — Quiz | AI" },
      {
        name: "description",
        content:
          "প্রতিদিন ১০টি প্রশ্ন — শব্দ, অর্থ, বাক্য। XP জমান, streak বাড়ান, ইংরেজিতে দক্ষ হয়ে উঠুন।",
      },
    ],
  }),
  component: PracticePage,
});

type OxWord = { word: string; bn?: string; ex?: string; pos?: string };

const OX: OxWord[] = OXFORD_3000.filter((w) => w.bn && w.bn.trim().length > 0).map((w) => ({
  word: w.w,
  bn: w.bn,
  ex: w.ex,
  pos: w.pos,
}));

type Q = {
  word: OxWord;
  options: string[];
  answer: string;
};

function pickRandom<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  const out: T[] = [];
  for (let i = 0; i < n && copy.length; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(idx, 1)[0]);
  }
  return out;
}

function buildQuiz(count = 10): Q[] {
  const chosen = pickRandom(OX, count);
  return chosen.map((w) => {
    const wrongs = pickRandom(
      OX.filter((x) => x.word !== w.word),
      3,
    ).map((x) => x.bn!);
    const options = [...wrongs, w.bn!].sort(() => Math.random() - 0.5);
    return { word: w, options, answer: w.bn! };
  });
}

function PracticePage() {
  const [quiz, setQuiz] = useState<Q[]>(() => buildQuiz());
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [prog, setProg] = useState(() => getProgress());

  const q = quiz[idx];
  const total = quiz.length;

  const level = useMemo(() => levelFromXp(prog.xp), [prog.xp]);

  function choose(opt: string) {
    if (picked) return;
    setPicked(opt);
    if (opt === q.answer) setScore((s) => s + 1);
  }

  function next() {
    if (idx + 1 >= total) {
      const gained = score * 10;
      const updated = addXp(gained, {
        quizzesTaken: prog.quizzesTaken + 1,
        wordsLearned: prog.wordsLearned + score,
      });
      setProg(updated);
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setPicked(null);
    }
  }

  function restart() {
    setQuiz(buildQuiz());
    setIdx(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              Daily Practice
            </div>
            <h1 className="font-display text-4xl md:text-5xl mt-2">আজকের কুইজ</h1>
          </div>
          <div className="flex gap-2 text-sm">
            <Stat icon={<Trophy className="size-4" />} label="Level" value={level} />
            <Stat icon={<Flame className="size-4" />} label="Streak" value={prog.streak} />
            <Stat label="XP" value={prog.xp} />
          </div>
        </div>

        {!done && q && (
          <div className="rounded-3xl bg-card border border-border shadow-soft p-8">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <span>
                প্রশ্ন {idx + 1} / {total}
              </span>
              <span>স্কোর: {score}</span>
            </div>
            <div className="h-1 bg-muted rounded-full mb-6 overflow-hidden">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${((idx + (picked ? 1 : 0)) / total) * 100}%` }}
              />
            </div>

            <div className="text-center py-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                এই শব্দের বাংলা অর্থ কী?
              </div>
              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="font-display text-5xl md:text-6xl">{q.word.word}</span>
                <button
                  onClick={() => speak(q.word.word)}
                  className="size-10 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground grid place-items-center transition"
                  aria-label="Listen"
                >
                  <Volume2 className="size-4" />
                </button>
              </div>
              {q.word.pos && (
                <div className="text-xs mt-2 text-muted-foreground italic">{q.word.pos}</div>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {q.options.map((opt) => {
                const isRight = picked && opt === q.answer;
                const isWrongPick = picked === opt && opt !== q.answer;
                return (
                  <button
                    key={opt}
                    onClick={() => choose(opt)}
                    disabled={!!picked}
                    className={`p-4 rounded-xl border-2 text-left font-bangla transition ${
                      isRight
                        ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                        : isWrongPick
                          ? "border-red-500 bg-red-50 text-red-900"
                          : "border-border bg-background hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span>{opt}</span>
                      {isRight && <CheckCircle2 className="size-5 text-emerald-600" />}
                      {isWrongPick && <XCircle className="size-5 text-red-600" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {picked && q.word.ex && (
              <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-border">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  উদাহরণ বাক্য
                </div>
                <div className="italic">{q.word.ex}</div>
              </div>
            )}

            {picked && (
              <button
                onClick={next}
                className="mt-6 w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-elevated transition"
              >
                {idx + 1 >= total ? "রেজাল্ট দেখুন →" : "পরের প্রশ্ন →"}
              </button>
            )}
          </div>
        )}

        {done && (
          <div className="rounded-3xl bg-card border border-border shadow-elevated p-10 text-center">
            <div className="text-6xl mb-4">
              {score === total ? "🏆" : score >= total / 2 ? "🎉" : "💪"}
            </div>
            <h2 className="font-display text-4xl">
              {score} / {total} সঠিক
            </h2>
            <p className="text-muted-foreground mt-2">
              +{score * 10} XP অর্জন হয়েছে! মোট XP: {prog.xp}
            </p>
            <p className="text-sm mt-1 text-muted-foreground">🔥 Streak: {prog.streak} দিন</p>
            <button
              onClick={restart}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground shadow-soft hover:shadow-elevated transition"
            >
              <RefreshCw className="size-4" /> আরেকটা কুইজ
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  value: number | string;
}) {
  return (
    <div className="px-3 py-2 rounded-lg bg-card border border-border flex items-center gap-2">
      {icon}
      <div className="text-xs">
        <div className="text-muted-foreground">{label}</div>
        <div className="font-semibold text-sm">{value}</div>
      </div>
    </div>
  );
}
