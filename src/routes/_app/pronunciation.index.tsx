import { createFileRoute, Link } from "@tanstack/react-router";
import { Volume2, ArrowRight, Sparkles } from "lucide-react";
import { MISSING_FRICATIVES } from "@/data/pronunciation";
import { speak } from "@/lib/speech";

// Friendly Bangla labels for each sound — no IPA, no jargon.
// Order matches MISSING_FRICATIVES: /f/, /v/, /θ/, /ð/, /z/, /ʒ/.
const FRIENDLY: Record<string, { letter: string; titleBn: string; tipBn: string }> = {
  f: {
    letter: "F",
    titleBn: "F — ‘ফ’ নয়",
    tipBn: "উপরের দাঁত হালকা করে নিচের ঠোঁটে রাখুন, তারপর হাওয়া বের করুন। ঠোঁট দুইটা মিলাবেন না।",
  },
  v: {
    letter: "V",
    titleBn: "V — ‘ভ’ নয়",
    tipBn: "F-এর মতোই দাঁত-ঠোঁট, কিন্তু গলা একটু কাঁপবে (হাত দিয়ে গলা ছুঁয়ে দেখুন)।",
  },
  "th-voiceless": {
    letter: "Th",
    titleBn: "Think-এর Th — ‘থ’ নয়",
    tipBn: "জিভের ডগা দাঁতের মাঝে হালকা রেখে হাওয়া বের করুন। জিভটা একটু বাইরে দেখা যাবে।",
  },
  "th-voiced": {
    letter: "Th",
    titleBn: "This-এর Th — ‘দ’ নয়",
    tipBn: "উপরের মতোই জিভ দাঁতের মাঝে, কিন্তু এবার গলা কাঁপবে।",
  },
  z: {
    letter: "Z",
    titleBn: "Z — ‘জ’ নয়",
    tipBn: "S-এর মতোই জিভের অবস্থান, কিন্তু গলা কাঁপবে (মৌমাছির মতো ‘zzz’ শব্দ)।",
  },
  zh: {
    letter: "Zh",
    titleBn: "Measure-এর s — ‘স’ নয়",
    tipBn: "‘শ’ বলার সময় গলা কাঁপালে যে সাউন্ড হয় — measure, vision-এ এটাই।",
  },
};

export const Route = createFileRoute("/_app/pronunciation/")({
  head: () => ({
    meta: [
      { title: "উচ্চারণ — ৬টা নতুন সাউন্ড | GuruJi" },
      {
        name: "description",
        content:
          "বাংলায় নেই এমন ৬টা English সাউন্ড — সহজ ভাষায়, ছবির মতো। শুনুন, বলুন, চর্চা করুন। ভয় পাওয়ার কিছু নেই।",
      },
    ],
  }),
  component: PronunciationPage,
});

function PronunciationPage() {
  return (
    <main className="flex-1 overflow-y-auto paper-grain">
      {/* ===== Hero — সহজ, কোনো IPA নেই ===== */}
      <section className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-14 md:py-20 text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-primary font-semibold">
            🗣️ ৬টা নতুন সাউন্ড
          </div>
          <h1 className="font-display text-4xl md:text-6xl mt-4 leading-[1.05]">
            মাত্র <em className="italic text-primary">৬টা</em> নতুন সাউন্ড —
            <br />
            <em className="italic">বেশি না।</em>
          </h1>
          <p className="text-foreground/75 mt-6 max-w-xl mx-auto font-bangla leading-relaxed text-[1.05rem]">
            English-এ কিছু সাউন্ড আছে যেগুলো বাংলায় নেই। এই ৬টা চিনে নিলে আপনার English অনেক
            পরিষ্কার শোনাবে। ভয় পাওয়ার কিছু নেই — নিচে একটা একটা করে দেখুন, বোতাম চেপে শুনুন।
          </p>
        </div>
      </section>

      {/* ===== 6 বন্ধুত্বপূর্ণ কার্ড ===== */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid gap-5">
          {MISSING_FRICATIVES.map((s) => {
            const f = FRIENDLY[s.slug] ?? {
              letter: s.slug.toUpperCase(),
              titleBn: s.english,
              tipBn: s.bnHint,
            };
            return (
              <div
                key={s.slug}
                className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-soft"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* বড় অক্ষর */}
                  <div className="shrink-0">
                    <div className="size-24 md:size-28 rounded-3xl bg-primary text-primary-foreground grid place-items-center font-display text-5xl md:text-6xl font-bold shadow-elevated">
                      {f.letter}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h2 className="font-display text-2xl md:text-3xl leading-tight font-bangla">
                      {f.titleBn}
                    </h2>
                    <p className="mt-3 font-bangla text-foreground/80 leading-relaxed">{f.tipBn}</p>

                    {/* ৩টা শব্দ — শুনি */}
                    <div className="mt-5">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-bold font-bangla mb-2">
                        শুনি ও বলি
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {s.examples.slice(0, 3).map((ex) => (
                          <button
                            key={ex.word}
                            onClick={() => speak(ex.word)}
                            className="group flex items-center justify-center gap-2 p-3 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition"
                            aria-label={`Listen to ${ex.word}`}
                          >
                            <Volume2 className="size-4 text-primary shrink-0" />
                            <span className="font-semibold text-base">{ex.word}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== CTA — চর্চার জায়গায় পাঠাই ===== */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-foreground text-background p-8 md:p-12 text-center shadow-elevated">
          <Sparkles className="size-8 text-primary mx-auto" />
          <h3 className="font-display text-3xl md:text-4xl mt-4 leading-tight">
            পড়েছেন — <em className="italic text-primary">এবার বলুন।</em>
          </h3>
          <p className="mt-4 max-w-md mx-auto opacity-85 font-bangla leading-relaxed">
            শুধু পড়ে সাউন্ড শেখা যায় না — নেটিভের সাথে বলে বলে শিখতে হয়। রোজ ৫ মিনিট Shadowing
            করুন, ৬ সপ্তাহে ফল দেখবেন ইনশাআল্লাহ।
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/shadowing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition"
            >
              Shadowing শুরু করি
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/speak"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-background/30 hover:bg-background/10 transition text-sm font-medium"
            >
              বলার চর্চা
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
