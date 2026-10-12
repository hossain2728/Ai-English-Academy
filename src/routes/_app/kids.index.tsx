import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Volume2, Sparkles, Music } from "lucide-react";
import { ALPHABET, NUMBERS, COLORS, ANIMALS, FAMILY } from "@/data/kids";
import { speak } from "@/lib/speech";

export const Route = createFileRoute("/_app/kids/")({
  head: () => ({
    meta: [
      { title: "বাচ্চাদের ইংরেজি — Kids Mode | AI" },
      {
        name: "description",
        content:
          "Alphabet, সংখ্যা, রঙ, পশু-পাখি — বাচ্চাদের জন্য মজার ইংরেজি শেখার জায়গা। বড় ফন্ট, রঙিন কার্ড, উচ্চারণ শোনা।",
      },
    ],
  }),
  component: KidsPage,
});

type Tab = "alphabet" | "numbers" | "colors" | "animals" | "family";

function KidsPage() {
  const [tab, setTab] = useState<Tab>("alphabet");

  return (
    <main className="flex-1 overflow-y-auto bg-gradient-to-b from-amber-50/60 via-transparent to-transparent">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="size-6 text-gold" />
          <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Kids Mode • বাচ্চাদের জন্য
          </div>
        </div>
        <h1 className="font-display text-5xl md:text-7xl">মজায় মজায় শিখি!</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">
          প্রতিটি কার্ডে চাপ দিলে ইংরেজি উচ্চারণ শোনা যাবে। বাবা-মা পাশে থাকুন — বাচ্চাদের সাথে
          বলুন।
        </p>

        <div className="flex flex-wrap gap-2 mt-8 mb-8">
          {(
            [
              ["alphabet", "🔤 Alphabet"],
              ["numbers", "🔢 Numbers"],
              ["colors", "🎨 Colors"],
              ["animals", "🐾 Animals"],
              ["family", "👨‍👩‍👧 Family"],
            ] as const
          ).map(([k, label]) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`px-5 py-2.5 rounded-2xl text-base font-medium border-2 transition ${
                tab === k
                  ? "bg-primary text-primary-foreground border-primary shadow-elevated"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "alphabet" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {ALPHABET.map((a) => (
              <button
                key={a.letter}
                onClick={() => speak(`${a.letter}. ${a.word}`)}
                className="group aspect-square rounded-3xl bg-card border-2 border-border hover:border-primary hover:shadow-elevated p-4 flex flex-col items-center justify-center transition"
              >
                <div className="text-6xl mb-1">{a.emoji}</div>
                <div className="font-display text-4xl text-primary">{a.letter}a</div>
                <div className="font-semibold text-sm mt-1">{a.word}</div>
                <div className="text-xs text-muted-foreground font-bangla">{a.bn}</div>
                <Music className="size-3 mt-1 text-gold opacity-0 group-hover:opacity-100 transition" />
              </button>
            ))}
          </div>
        )}

        {tab === "numbers" && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {NUMBERS.map((n) => (
              <button
                key={n.n}
                onClick={() => speak(n.en)}
                className="aspect-square rounded-2xl bg-card border-2 border-border hover:border-primary hover:shadow-soft p-3 flex flex-col items-center justify-center transition"
              >
                <div className="font-display text-4xl text-primary">{n.n}</div>
                <div className="font-semibold text-sm mt-1">{n.en}</div>
                <div className="text-xs text-muted-foreground font-bangla">{n.bn}</div>
              </button>
            ))}
          </div>
        )}

        {tab === "colors" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {COLORS.map((c) => (
              <button
                key={c.en}
                onClick={() => speak(c.en)}
                className="rounded-2xl border-2 border-border hover:border-primary p-1 hover:shadow-elevated transition overflow-hidden"
              >
                <div className="h-24 rounded-xl" style={{ background: c.hex }} />
                <div className="py-3">
                  <div className="font-semibold">{c.en}</div>
                  <div className="text-xs text-muted-foreground font-bangla">{c.bn}</div>
                </div>
              </button>
            ))}
          </div>
        )}

        {tab === "animals" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {ANIMALS.map((a) => (
              <button
                key={a.en}
                onClick={() => speak(a.en)}
                className="rounded-2xl bg-card border-2 border-border hover:border-primary p-5 hover:shadow-soft transition flex flex-col items-center"
              >
                <div className="text-6xl">{a.emoji}</div>
                <div className="font-semibold text-lg mt-2">{a.en}</div>
                <div className="text-sm text-muted-foreground font-bangla">{a.bn}</div>
              </button>
            ))}
          </div>
        )}

        {tab === "family" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {FAMILY.map((f) => (
              <button
                key={f.en}
                onClick={() => speak(f.en)}
                className="p-5 rounded-2xl bg-card border-2 border-border hover:border-primary hover:shadow-soft transition text-left flex items-center justify-between"
              >
                <div>
                  <div className="font-semibold text-lg">{f.en}</div>
                  <div className="text-sm text-muted-foreground font-bangla">{f.bn}</div>
                </div>
                <Volume2 className="size-4 text-primary" />
              </button>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
