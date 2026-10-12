import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Volume2,
  Check,
  X,
  Lightbulb,
  AlertTriangle,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { GRAMMAR, CATEGORIES } from "@/data/grammar";
import { speak } from "@/lib/speech";

export const Route = createFileRoute("/_app/grammar/$slug")({
  head: ({ params }) => {
    const t = GRAMMAR.find((g) => g.slug === params.slug);
    return {
      meta: [
        {
          title: `${t?.number}. ${t?.title} (${t?.formula}) — AI`,
        },
        {
          name: "description",
          content: t?.short ?? "গ্রামার ফর্মুলা — বাংলায় ব্যাখ্যা, উদাহরণ, কখন ব্যবহার।",
        },
      ],
    };
  },
  component: GrammarDetail,
  notFoundComponent: () => (
    <div className="p-12 text-center">
      <p className="text-muted-foreground">ফর্মুলাটি পাওয়া যায়নি।</p>
      <Link to="/grammar" className="text-primary underline mt-2 inline-block">
        সব ফর্মুলায় ফিরে যান
      </Link>
    </div>
  ),
});

function GrammarDetail() {
  const { slug } = Route.useParams();
  const idx = GRAMMAR.findIndex((g) => g.slug === slug);
  const topic = GRAMMAR[idx];
  if (!topic) throw notFound();
  const cat = CATEGORIES[topic.category];
  const prev = idx > 0 ? GRAMMAR[idx - 1] : null;
  const next = idx < GRAMMAR.length - 1 ? GRAMMAR[idx + 1] : null;

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <Link
          to="/grammar"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6"
        >
          <ArrowLeft className="size-4" /> সব ফর্মুলা
        </Link>

        {/* Category chip */}
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-primary font-semibold bg-primary/8 border border-primary/15 rounded-full px-3 py-1">
          <span>{cat.emoji}</span>
          <span>বিভাগ · {cat.subtitle}</span>
        </div>

        <div className="mt-4 flex items-baseline gap-3">
          <div className="font-display text-5xl md:text-6xl text-primary/30 leading-none">
            {String(topic.number).padStart(2, "0")}
          </div>
          <div>
            <h1 className="font-display text-3xl md:text-4xl leading-tight">{topic.title}</h1>
            <p className="text-sm text-muted-foreground italic">{topic.titleEn}</p>
          </div>
        </div>

        {/* THE FORMULA — hero card */}
        <div className="mt-6 rounded-2xl bg-foreground text-background p-6 shadow-lg">
          <div className="text-[10.5px] uppercase tracking-[0.28em] opacity-60 font-semibold">
            ⚔️ মূল ফর্মুলা
          </div>
          <div className="mt-3 font-display text-2xl md:text-3xl font-bold tracking-tight break-words">
            {topic.formula}
          </div>
          <p className="mt-4 font-bangla text-[0.98rem] leading-relaxed opacity-90">
            {topic.short}
          </p>
        </div>

        {/* Trigger words — "কী শুনলে এটা ব্যবহার করবেন" */}
        <div className="mt-4 rounded-2xl bg-gold/10 border border-gold/30 p-5">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-gold-foreground">
            <Zap className="size-3.5" /> Trigger — এই কথাগুলো শুনলে এটাই ব্যবহার করুন
          </div>
          <div className="mt-2 font-bangla text-base font-semibold">{topic.trigger}</div>
        </div>

        {/* Mechanism + When to pocket-out */}
        <div className="mt-4 grid md:grid-cols-2 gap-3">
          <div className="p-5 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-2 text-primary text-[11px] uppercase tracking-[0.22em] font-semibold">
              <Sparkles className="size-3.5" /> ভেতরের মেকানিজম
            </div>
            <p className="mt-3 font-bangla leading-relaxed text-[0.97rem]">{topic.mechanism}</p>
          </div>
          <div className="p-5 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-2 text-primary text-[11px] uppercase tracking-[0.22em] font-semibold">
              <Target className="size-3.5" /> কখন পকেট থেকে বের করবেন
            </div>
            <p className="mt-3 font-bangla leading-relaxed text-[0.97rem]">{topic.pocketWhen}</p>
          </div>
        </div>

        {/* Hero example */}
        <div className="mt-6 rounded-2xl bg-primary/5 border border-primary/15 p-6">
          <div className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold">
            🎯 বাস্তব উদাহরণ
          </div>
          <div className="mt-3 font-bangla text-lg">{topic.heroExample.bn}</div>
          <div className="mt-2 flex items-center gap-3">
            <button
              onClick={() => speak(topic.heroExample.en)}
              className="shrink-0 size-10 rounded-lg bg-primary text-primary-foreground grid place-items-center hover:opacity-90 transition"
              aria-label="Listen"
            >
              <Volume2 className="size-4" />
            </button>
            <div className="font-display text-2xl">{topic.heroExample.en}</div>
          </div>
          <div className="mt-4 pt-4 border-t border-primary/15 text-sm text-muted-foreground font-mono">
            {topic.heroExample.breakdown}
          </div>
        </div>

        {/* More examples */}
        <div className="mt-6">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-muted-foreground mb-3">
            আরো উদাহরণ — শুনে অনুশীলন করুন
          </div>
          <ul className="space-y-2.5">
            {topic.moreExamples.map((ex, j) => (
              <li
                key={j}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-card border border-border"
              >
                <button
                  onClick={() => speak(ex.en)}
                  className="mt-0.5 shrink-0 size-9 rounded-md bg-primary/10 text-primary grid place-items-center hover:bg-primary hover:text-primary-foreground transition"
                  aria-label="Listen"
                >
                  <Volume2 className="size-4" />
                </button>
                <div className="min-w-0">
                  <div className="font-medium">{ex.en}</div>
                  <div className="text-sm text-muted-foreground font-bangla mt-0.5">{ex.bn}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Common Mistakes */}
        <div className="mt-6 p-6 rounded-2xl bg-amber-500/5 border border-amber-500/25">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 text-[11px] uppercase tracking-[0.22em] font-semibold">
            <AlertTriangle className="size-3.5" /> সাধারণ ভুল — এড়িয়ে চলুন
          </div>
          <ul className="mt-3 space-y-2">
            {topic.commonMistakes.map((m, i) => (
              <li key={i} className="flex items-start gap-2 text-sm font-bangla leading-relaxed">
                <X className="size-3.5 text-amber-600 mt-1 shrink-0" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pro tip */}
        <div className="mt-4 p-6 rounded-2xl bg-card border border-border">
          <div className="flex items-center gap-2 text-primary text-[11px] uppercase tracking-[0.22em] font-semibold">
            <Lightbulb className="size-3.5" /> মনে রাখার সহজ কৌশল
          </div>
          <p className="mt-3 font-bangla leading-relaxed">{topic.proTip}</p>
        </div>

        {/* Enough */}
        <div className="mt-4 p-6 rounded-2xl bg-primary text-primary-foreground">
          <div className="flex items-center gap-2 text-primary-foreground/80 text-[11px] uppercase tracking-[0.22em] font-semibold">
            <Check className="size-3.5" /> এটুকু জানলেই কেন যথেষ্ট
          </div>
          <p className="mt-3 font-bangla leading-relaxed opacity-95">{topic.enough}</p>
        </div>

        {/* Prev / Next */}
        <div className="mt-10 grid grid-cols-2 gap-3">
          {prev ? (
            <Link
              to="/grammar/$slug"
              params={{ slug: prev.slug }}
              className="group p-4 rounded-xl border border-border hover:border-primary/40 transition"
            >
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                ← ফর্মুলা {prev.number}
              </div>
              <div className="font-display text-lg mt-1 group-hover:text-primary transition">
                {prev.title}
              </div>
              <div className="text-xs text-muted-foreground font-mono mt-1">{prev.formula}</div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to="/grammar/$slug"
              params={{ slug: next.slug }}
              className="group p-4 rounded-xl border border-border hover:border-primary/40 transition text-right"
            >
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                ফর্মুলা {next.number} →
              </div>
              <div className="font-display text-lg mt-1 group-hover:text-primary transition">
                {next.title}
              </div>
              <div className="text-xs text-muted-foreground font-mono mt-1">{next.formula}</div>
            </Link>
          ) : (
            <Link
              to="/connectors"
              className="group p-4 rounded-xl bg-primary/8 border border-primary/25 hover:border-primary transition text-right inline-flex flex-col items-end"
            >
              <div className="text-[11px] uppercase tracking-[0.2em] text-primary/80">
                পরবর্তী অস্ত্র →
              </div>
              <div className="font-display text-lg mt-1 text-primary inline-flex items-center gap-1">
                ১৪টি Connector <ArrowRight className="size-4" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
