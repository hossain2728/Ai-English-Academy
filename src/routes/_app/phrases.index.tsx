import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Volume2 } from "lucide-react";
import { SITUATIONS } from "@/data/phrases";
import { speak } from "@/lib/speech";

export const Route = createFileRoute("/_app/phrases/")({
  head: () => ({
    meta: [
      { title: "Phrase Book — দৈনন্দিন ইংরেজি বাক্য | AI" },
      {
        name: "description",
        content:
          "দোকান, ডাক্তার, ফোন, ভ্রমণ, রেস্টুরেন্ট, ইন্টারভিউ — সব পরিস্থিতির ইংরেজি বাক্য বাংলা অর্থ সহ। শুনতে পারবেন।",
      },
    ],
  }),
  component: PhrasesPage,
});

function PhrasesPage() {
  const [active, setActive] = useState(SITUATIONS[0].slug);
  const situation = SITUATIONS.find((s) => s.slug === active)!;

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Phrase Book
          </div>
          <h1 className="font-display text-4xl md:text-6xl mt-3">দৈনন্দিন বাক্য</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            যে পরিস্থিতির বাক্য দরকার সেটা বেছে নিন। স্পিকার আইকনে চাপ দিলে উচ্চারণ শুনতে পারবেন।
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {SITUATIONS.map((s) => (
            <button
              key={s.slug}
              onClick={() => setActive(s.slug)}
              className={`px-4 py-2 rounded-xl text-sm border transition ${
                active === s.slug
                  ? "bg-primary text-primary-foreground border-primary shadow-soft"
                  : "bg-card border-border hover:border-primary/40"
              }`}
            >
              <span className="mr-1.5">{s.emoji}</span>
              {s.title}
            </button>
          ))}
        </div>

        <div className="mb-4">
          <h2 className="font-display text-3xl">
            {situation.emoji} {situation.title}
          </h2>
          <p className="text-sm text-muted-foreground">{situation.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {situation.phrases.map((p, i) => (
            <div
              key={i}
              className="group flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-soft transition"
            >
              <button
                onClick={() => speak(p.en)}
                className="shrink-0 mt-0.5 size-9 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground grid place-items-center transition"
                aria-label={`Listen: ${p.en}`}
              >
                <Volume2 className="size-4" />
              </button>
              <div className="min-w-0">
                <div className="font-medium text-lg leading-snug">{p.en}</div>
                <div className="text-sm text-muted-foreground mt-1 font-bangla">{p.bn}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
