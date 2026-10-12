import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, CheckCircle2, XCircle, Lightbulb } from "lucide-react";
import { useMemo, useState } from "react";
import { MISTAKES, MISTAKE_CATEGORIES, type Mistake } from "@/data/mistakes";

export const Route = createFileRoute("/_app/mistakes/")({
  head: () => ({
    meta: [
      { title: "বাঙালিদের ২০টি সাধারণ ইংরেজি ভুল — AI" },
      {
        name: "description",
        content:
          "গবেষণা-ভিত্তিক তালিকা: Bengali speakers-রা কোন ভুল বেশি করে, কেন করে, এবং কীভাবে ঠিক করবে। উদাহরণসহ।",
      },
    ],
  }),
  component: MistakesPage,
});

function MistakesPage() {
  const [active, setActive] = useState<Mistake["category"] | "all">("all");
  const filtered = useMemo(
    () => (active === "all" ? MISTAKES : MISTAKES.filter((m) => m.category === active)),
    [active],
  );

  return (
    <main className="flex-1 overflow-y-auto">
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-medium text-primary/80 mb-4">
          <AlertTriangle className="size-3.5" />
          গবেষণা-ভিত্তিক
        </div>
        <h1 className="font-display text-4xl md:text-5xl leading-tight">
          বাঙালি হয়ে ইংরেজি বললে <br />
          <span className="italic text-primary">এই ২০টা ভুল</span> সবচেয়ে বেশি হয়।
        </h1>
        <p className="mt-5 text-muted-foreground font-bangla leading-relaxed max-w-2xl">
          Cambridge Learner Corpus, চট্টগ্রাম বিশ্ববিদ্যালয় ও ISU-এর গবেষণা, আর Robin Upton-এর
          BD-শিক্ষকদের উপর করা field study — সব মিলিয়ে যে ভুলগুলো বারবার আসে। প্রত্যেকটার সাথে
          দেখুন: <b>কেন হয়</b>, <b>নিয়মটা কী</b>, আর <b>কীভাবে মনে রাখবেন</b>।
        </p>

        {/* Filter chips */}
        <div className="mt-8 flex flex-wrap gap-2">
          <Chip active={active === "all"} onClick={() => setActive("all")}>
            সব ({MISTAKES.length})
          </Chip>
          {MISTAKE_CATEGORIES.map((c) => {
            const count = MISTAKES.filter((m) => m.category === c.id).length;
            if (count === 0) return null;
            return (
              <Chip key={c.id} active={active === c.id} onClick={() => setActive(c.id)}>
                {c.bangla} ({count})
              </Chip>
            );
          })}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20 space-y-5">
        {filtered.map((m, i) => (
          <MistakeCard key={m.id} m={m} n={i + 1} />
        ))}
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <Link
          to="/grammar"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <ArrowLeft className="size-4" /> ৩০টি গ্রামার ফর্মুলায় ফিরে যাই
        </Link>
      </section>
    </main>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
        active
          ? "bg-primary text-primary-foreground shadow-soft"
          : "bg-card border border-border text-muted-foreground hover:border-primary/40"
      }`}
    >
      {children}
    </button>
  );
}

function MistakeCard({ m, n }: { m: Mistake; n: number }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 md:p-7 shadow-soft">
      <div className="flex items-start gap-4">
        <div className="font-display text-3xl text-primary/25 leading-none w-10 shrink-0">
          {String(n).padStart(2, "0")}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-wider text-primary/70 font-semibold mb-1">
            {m.categoryLabel}
          </div>

          <div className="grid md:grid-cols-2 gap-3 mt-2">
            <div className="p-3.5 rounded-xl bg-destructive/8 border border-destructive/20">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-destructive mb-1.5">
                <XCircle className="size-3.5" /> ভুল
              </div>
              <div className="font-medium">{m.wrong}</div>
            </div>
            <div className="p-3.5 rounded-xl bg-primary/8 border border-primary/20">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary mb-1.5">
                <CheckCircle2 className="size-3.5" /> ঠিক
              </div>
              <div className="font-medium">{m.right}</div>
            </div>
          </div>

          <div className="mt-4 text-sm font-bangla text-muted-foreground">
            <b className="text-foreground">বাংলায় আমরা ভাবি:</b> {m.banglaThought}
          </div>

          <div className="mt-3 text-sm leading-relaxed font-bangla">
            <b>কেন ভুল:</b> {m.whyWrong}
          </div>

          <div className="mt-3 p-3 rounded-lg bg-background/70 border border-border text-sm font-bangla">
            <b>নিয়ম:</b> {m.rule}
          </div>

          <div className="mt-3 flex items-start gap-2 text-sm font-bangla p-3 rounded-lg bg-gold/10 border border-gold/25">
            <Lightbulb className="size-4 text-gold-foreground shrink-0 mt-0.5" />
            <div>
              <b>মনে রাখার টিপ:</b> {m.fix}
            </div>
          </div>

          {m.moreExamples.length > 0 && (
            <div className="mt-4">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                আরও উদাহরণ
              </div>
              <div className="space-y-1.5">
                {m.moreExamples.map((ex, i) => (
                  <div key={i} className="text-sm flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-destructive/80 line-through">{ex.wrong}</span>
                    <span className="text-muted-foreground text-xs">→</span>
                    <span className="text-primary font-medium">{ex.right}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
