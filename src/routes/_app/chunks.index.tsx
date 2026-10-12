import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Volume2, Sparkles, Copy, Check } from "lucide-react";
import { CHUNK_GROUPS } from "@/data/chunks";
import { speak } from "@/lib/speech";

export const Route = createFileRoute("/_app/chunks/")({
  head: () => ({
    meta: [
      { title: "Chunks & Collocations — AI English Academy" },
      {
        name: "description",
        content:
          "Michael Lewis-এর Lexical Approach — native-রা এভাবে ready-made 'শব্দগুচ্ছ' ব্যবহার করে। 'take a decision', 'make sense' — এগুলো মুখস্থ করলেই ইংরেজি প্রাণবন্ত।",
      },
    ],
  }),
  component: ChunksPage,
});

function ChunksPage() {
  const [active, setActive] = useState<string>(CHUNK_GROUPS[0].id);
  const group = useMemo(
    () => CHUNK_GROUPS.find((g) => g.id === active) ?? CHUNK_GROUPS[0],
    [active],
  );

  return (
    <main className="flex-1 overflow-y-auto">
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-medium text-primary/80 mb-4">
          <Sparkles className="size-3.5" />
          Lexical Approach — Michael Lewis
        </div>
        <h1 className="font-display text-4xl md:text-5xl leading-tight">
          Chunks — native-রা কথা বলে <span className="italic text-primary">শব্দগুচ্ছে</span>, শব্দে
          নয়
        </h1>
        <p className="mt-5 text-muted-foreground font-bangla leading-relaxed max-w-3xl">
          "I would <b>take a decision</b>" — এটা bookish English। Native বলে "I'll{" "}
          <b>make a decision</b>"। প্রতিটা ভাষায় কিছু ready-made শব্দগুচ্ছ থাকে — এগুলো একসাথে
          ব্যবহার হয়। এগুলো মুখস্থ করলে তোমার ইংরেজি হঠাৎ natural শোনাবে। 🎯
        </p>

        {/* Group tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CHUNK_GROUPS.map((g) => (
            <button
              key={g.id}
              onClick={() => setActive(g.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
                g.id === active
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/40"
              }`}
            >
              <span className="mr-1">{g.emoji}</span>
              <span className="font-bangla">{g.titleBn}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-6">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 text-sm font-bangla leading-relaxed">
          <div className="text-xs uppercase tracking-wider font-bold text-primary mb-1.5">
            {group.emoji} {group.title}
          </div>
          {group.intro}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20 grid gap-4 md:grid-cols-2">
        {group.chunks.map((c, i) => (
          <ChunkCard key={i} {...c} />
        ))}
      </section>
    </main>
  );
}

function ChunkCard({
  en,
  bn,
  when,
  example,
  exampleBn,
}: {
  en: string;
  bn: string;
  when: string;
  example: string;
  exampleBn: string;
}) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(en);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-elevated hover:border-primary/30 transition">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="font-display text-xl md:text-2xl leading-tight text-primary">{en}</div>
          <div className="mt-1 font-bangla text-sm">{bn}</div>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={() => speak(en)}
            aria-label="শুনি"
            className="size-8 rounded-full bg-primary/10 text-primary grid place-items-center hover:bg-primary hover:text-primary-foreground transition"
          >
            <Volume2 className="size-3.5" />
          </button>
          <button
            onClick={copy}
            aria-label="Copy"
            className="size-8 rounded-full bg-accent text-foreground/70 grid place-items-center hover:bg-primary/10 hover:text-primary transition"
          >
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          </button>
        </div>
      </div>

      <div className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
        কখন ব্যবহার
      </div>
      <div className="text-xs font-bangla text-foreground/85">{when}</div>

      <div className="mt-4 pt-3 border-t border-border/70">
        <div className="text-[11px] uppercase tracking-wider text-primary/70 font-semibold mb-1.5 flex items-center gap-2">
          Example
          <button
            onClick={() => speak(example)}
            aria-label="Play example"
            className="size-5 rounded-full bg-primary/10 text-primary grid place-items-center hover:bg-primary hover:text-primary-foreground transition"
          >
            <Volume2 className="size-2.5" />
          </button>
        </div>
        <div className="text-sm italic">"{example}"</div>
        <div className="text-xs font-bangla text-muted-foreground mt-1">→ {exampleBn}</div>
      </div>
    </article>
  );
}
