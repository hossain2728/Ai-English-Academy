import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, ArrowRight } from "lucide-react";
import { LESSONS } from "@/data/lessons";

export const Route = createFileRoute("/_app/lessons/")({
  head: () => ({
    meta: [
      { title: "পাঠসমূহ — AI English Academy" },
      {
        name: "description",
        content:
          "একদম শূন্য থেকে শুরু — Alphabet, সংখ্যা, Grammar, Tense, Conversation। বাংলায় ব্যাখ্যা সহ ধাপে ধাপে ইংরেজি পাঠ।",
      },
    ],
  }),
  component: LessonsIndex,
});

function LessonsIndex() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Curriculum
          </div>
          <h1 className="font-display text-4xl md:text-6xl mt-3">পাঠসমূহ</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            ধাপে ধাপে এগোও। উপরের পাঠ শেষ না করে নিচেরটায় ঝাঁপ দিওনা — ইংরেজি ধারাবাহিক ভাষা।
          </p>
        </div>

        <ol className="space-y-3">
          {LESSONS.map((l) => (
            <li key={l.slug}>
              <Link
                to="/lessons/$slug"
                params={{ slug: l.slug }}
                className="group flex items-start gap-5 p-5 rounded-2xl border border-border bg-card hover:border-primary/40 shadow-soft hover:shadow-elevated transition"
              >
                <div className="shrink-0 size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-display text-2xl">
                  {l.order.toString().padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded level-badge-${l.level}`}
                    >
                      {l.level}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="size-3" /> {l.minutes} মিনিট
                    </span>
                  </div>
                  <h3 className="font-display text-2xl leading-tight">{l.title}</h3>
                  <div className="text-xs text-muted-foreground italic">{l.titleEn}</div>
                  <p className="text-sm text-muted-foreground mt-2">{l.description}</p>
                </div>
                <ArrowRight className="shrink-0 size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition mt-4" />
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-12 p-6 rounded-2xl bg-primary text-primary-foreground shadow-elevated">
          <div className="font-display text-2xl">সব পাঠ শেষ?</div>
          <p className="mt-1 opacity-90 text-sm">
            AI-কে বলো: "আমি সব বেসিক পাঠ শেষ করেছি, এখন কী শিখব?" — সে তোমার পরবর্তী লেভেলের পাঠ
            শুরু করবে।
          </p>
          <Link
            to="/chat"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold text-gold-foreground font-medium hover:opacity-90 transition"
          >
            AI-এর কাছে যাই <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
