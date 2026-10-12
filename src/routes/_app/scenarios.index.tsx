import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight, Volume2, Lightbulb, XCircle } from "lucide-react";
import { useState } from "react";
import { SCENARIOS, type Scenario } from "@/data/scenarios";
import { speak } from "@/lib/speech";

export const Route = createFileRoute("/_app/scenarios/")({
  head: () => ({
    meta: [
      { title: "বাংলাদেশি জীবনের ইংরেজি — ৮টা বাস্তব পরিস্থিতি | AI" },
      {
        name: "description",
        content:
          "চা-দোকান, রিকশা, ডাক্তার, ইন্টারভিউ, ফোন কল, ইমেইল — বাংলাদেশে যেসব পরিস্থিতিতে ইংরেজি সত্যিই লাগে।",
      },
    ],
  }),
  component: ScenariosPage,
});

function ScenariosPage() {
  const [active, setActive] = useState<Scenario>(SCENARIOS[0]);
  return (
    <main className="flex-1 overflow-y-auto">
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-medium text-primary/80 mb-4">
          <MapPin className="size-3.5" />
          বাস্তব পরিস্থিতি
        </div>
        <h1 className="font-display text-4xl md:text-5xl leading-tight max-w-3xl">
          বইয়ের ইংরেজি না — <br />
          <span className="italic text-primary">আপনার জীবনের ইংরেজি।</span>
        </h1>
        <p className="mt-5 text-muted-foreground font-bangla leading-relaxed max-w-2xl">
          চা-দোকান থেকে ইন্টারভিউ, রিকশা থেকে এয়ারপোর্ট — বাংলাদেশে বসবাস করলে যে ৮টা পরিস্থিতিতে
          ইংরেজি সত্যিই কাজে লাগে। প্রত্যেকটার জন্য কী বলবেন, কী এড়াবেন, আর সংস্কৃতির কোথায়
          পার্থক্য — সব একসাথে।
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-[280px_1fr] gap-6">
        {/* Scenario list */}
        <aside className="space-y-2">
          {SCENARIOS.map((s) => {
            const isActive = active.id === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s)}
                className={`w-full text-left flex items-center gap-3 p-3 rounded-xl border transition ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-soft"
                    : "bg-card border-border hover:border-primary/40"
                }`}
              >
                <span className="text-2xl">{s.emoji}</span>
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-semibold truncate font-bangla">
                    {s.title}
                  </span>
                  <span
                    className={`block text-[11px] ${
                      isActive ? "opacity-80" : "text-muted-foreground"
                    }`}
                  >
                    {s.titleEn}
                  </span>
                </span>
                <ArrowRight className={`size-4 ${isActive ? "" : "opacity-40"}`} />
              </button>
            );
          })}
        </aside>

        {/* Active scenario detail */}
        <article className="min-w-0 space-y-6">
          <div className="rounded-2xl bg-card border border-border p-6 md:p-8 shadow-soft">
            <div className="flex items-start gap-4">
              <span className="text-5xl">{active.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] uppercase tracking-wider text-primary/70 font-semibold">
                  {active.titleEn}
                </div>
                <h2 className="font-display text-3xl mt-1 leading-tight">{active.title}</h2>
                <p className="text-sm text-muted-foreground mt-2 font-bangla">{active.context}</p>
              </div>
            </div>

            <div className="mt-5 p-4 rounded-xl bg-primary/6 border border-primary/15">
              <div className="text-[11px] uppercase tracking-wider font-semibold text-primary mb-1">
                লক্ষ্য
              </div>
              <p className="text-sm font-bangla">{active.goal}</p>
            </div>
          </div>

          {/* Key phrases */}
          <div className="rounded-2xl bg-card border border-border p-6 shadow-soft">
            <h3 className="font-display text-xl mb-4">মূল বাক্য</h3>
            <div className="space-y-2.5">
              {active.keyPhrases.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-background/60 border border-border"
                >
                  <button
                    onClick={() => speak(p.en)}
                    className="size-8 rounded-lg bg-primary/10 text-primary grid place-items-center hover:bg-primary/20 transition shrink-0"
                    aria-label="Play"
                  >
                    <Volume2 className="size-3.5" />
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{p.en}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 font-bangla">{p.bn}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dialogue */}
          <div className="rounded-2xl bg-card border border-border p-6 shadow-soft">
            <h3 className="font-display text-xl mb-4">পুরো কথোপকথন</h3>
            <div className="space-y-3">
              {active.dialogue.map((line, i) => {
                const mine = line.who === "you";
                return (
                  <div key={i} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] ${mine ? "text-right" : ""}`}>
                      <div
                        className={`text-[10px] uppercase tracking-wider mb-1 font-semibold ${
                          mine ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {line.whoLabel}
                      </div>
                      <button
                        onClick={() => speak(line.en)}
                        className={`inline-block text-left p-3 rounded-2xl border transition hover:shadow-soft ${
                          mine
                            ? "bg-primary text-primary-foreground border-primary rounded-br-sm"
                            : "bg-background border-border rounded-bl-sm"
                        }`}
                      >
                        <div className="text-sm font-medium">{line.en}</div>
                        <div
                          className={`text-[11px] mt-1 font-bangla ${
                            mine ? "opacity-80" : "text-muted-foreground"
                          }`}
                        >
                          {line.bn}
                        </div>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cultural tip */}
          <div className="rounded-2xl border border-gold/25 bg-gold/8 p-5">
            <div className="flex items-start gap-3">
              <Lightbulb className="size-5 text-gold-foreground shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold mb-1">সংস্কৃতির টিপ</div>
                <p className="text-sm font-bangla leading-relaxed">{active.culturalTip}</p>
              </div>
            </div>
          </div>

          {/* Avoid */}
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="size-4 text-destructive" />
              <div className="font-semibold">এগুলো এড়িয়ে চলুন</div>
            </div>
            <ul className="space-y-2.5">
              {active.avoid.map((a, i) => (
                <li key={i} className="text-sm">
                  <span className="text-destructive/80 line-through font-medium">{a.wrong}</span>
                  <span className="block text-xs text-muted-foreground mt-0.5 font-bangla">
                    {a.why}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-14">
        <Link
          to="/mistakes"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          পরের ধাপ: সাধারণ ভুল দেখি <ArrowRight className="size-4" />
        </Link>
      </div>
    </main>
  );
}
