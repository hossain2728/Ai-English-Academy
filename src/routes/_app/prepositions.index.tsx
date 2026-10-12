import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Volume2, Anchor } from "lucide-react";
import { PREPOSITIONS } from "@/data/grammar";
import { speak } from "@/lib/speech";

export const Route = createFileRoute("/_app/prepositions/")({
  head: () => ({
    meta: [
      { title: "৯টি Preposition — of, in, at, to… বাংলায় সম্পূর্ণ ব্যাখ্যা" },
      {
        name: "description",
        content:
          "COCA Corpus-এর top-25 থেকে বাছাই করা ৯টি সবচেয়ে জরুরি preposition — of, in, to, for, on, with, at, by, from। বাংলাভাষীদের সবচেয়ে বেশি ভুল হয় এখানে।",
      },
    ],
  }),
  component: PrepositionsPage,
});

function PrepositionsPage() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          to="/connectors"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6"
        >
          <ArrowLeft className="size-4" /> Connector-এ ফিরে যান
        </Link>

        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-gold font-semibold bg-gold/10 border border-gold/25 rounded-full px-3 py-1">
          <Anchor className="size-3.5" /> শব্দের সম্পর্ক
        </div>
        <h1 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
          মাত্র ৯টি Preposition — <span className="italic text-primary">সব সম্পর্কের চাবি</span>।
        </h1>
        <p className="text-muted-foreground mt-5 font-bangla leading-relaxed max-w-2xl">
          Preposition = noun-এর <strong>সাথে</strong> বসে সম্পর্ক দেখায় — কোথায়, কখন, কীভাবে, কার।
          বাংলাভাষীদের ইংরেজিতে সবচেয়ে বেশি ভুল হয় এই preposition-এ (Chittagong University-র
          গবেষণা)। এই ৯টাই দৈনন্দিন কাজের প্রায় সব।
        </p>

        <div className="mt-5 p-4 rounded-xl bg-card border border-border text-sm font-bangla leading-relaxed">
          🔬 <strong>উৎস:</strong> COCA Corpus top-25 frequency list। ইংরেজির সবচেয়ে বেশি ব্যবহৃত
          ২৫টি শব্দের মধ্যে এই ৯টা preposition আছে — বাকিগুলো ১%-এরও কম।
        </div>

        <div className="mt-6 rounded-2xl bg-foreground text-background p-6">
          <div className="text-[11px] uppercase tracking-[0.24em] opacity-70 font-semibold">
            ❓ Connector আর Preposition — পার্থক্য কী?
          </div>
          <p className="mt-3 font-bangla leading-relaxed opacity-90">
            <strong>Connector</strong> = দুইটা বাক্য জোড়া দেয় (and, but, because…)।
            <br />
            <strong>Preposition</strong> = একটা noun-এর সাথে অন্য শব্দের সম্পর্ক দেখায় (in Dhaka,
            on the table, at 5 pm)।
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {PREPOSITIONS.map((p, i) => (
            <div key={p.word} className="p-5 md:p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-baseline gap-3 flex-wrap">
                <div className="font-display text-3xl text-gold/40 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display text-3xl md:text-4xl">{p.word}</div>
                {p.rank && (
                  <div className="text-[10px] uppercase tracking-wider text-gold bg-gold/10 rounded-full px-2 py-0.5 font-semibold">
                    {p.rank}
                  </div>
                )}
              </div>
              <div className="mt-2 font-bangla text-[0.98rem]">
                <span className="text-muted-foreground text-xs uppercase tracking-wider mr-2">
                  অর্থ
                </span>
                {p.meaning}
              </div>
              {p.note && (
                <div className="mt-2 text-sm p-3 rounded-lg bg-gold/5 border border-gold/20 font-bangla">
                  💡 {p.note}
                </div>
              )}
              <ul className="mt-4 space-y-2">
                {p.examples.map((ex, j) => (
                  <li key={j} className="flex items-start gap-3 p-3 rounded-lg bg-background/60">
                    <button
                      onClick={() => speak(ex.en)}
                      className="mt-0.5 shrink-0 size-9 rounded-md bg-primary/10 text-primary grid place-items-center hover:bg-primary hover:text-primary-foreground transition"
                      aria-label="Listen"
                    >
                      <Volume2 className="size-4" />
                    </button>
                    <div className="min-w-0">
                      <div className="font-medium">{ex.en}</div>
                      <div className="text-sm text-muted-foreground font-bangla mt-0.5">
                        {ex.bn}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
