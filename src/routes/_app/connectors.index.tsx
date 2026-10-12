import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Volume2, Link2, ArrowRight } from "lucide-react";
import { CONNECTORS, type ConnectorWord } from "@/data/grammar";
import { speak } from "@/lib/speech";

export const Route = createFileRoute("/_app/connectors/")({
  head: () => ({
    meta: [
      { title: "১৪টি আঠা-শব্দ — বাক্য জোড়া দেওয়ার পূর্ণ Connector তালিকা" },
      {
        name: "description",
        content:
          "COCA Corpus ও Cambridge B2 curriculum থেকে বাছাই করা ১৪টি সবচেয়ে জরুরি connector — ৮টি core (দৈনন্দিন) + ৬টি extra (গল্প বলা ও fluency)। বাংলায় ব্যাখ্যা, উদাহরণ, উচ্চারণ।",
      },
    ],
  }),
  component: ConnectorsPage,
});

function ConnectorCard({ c, i }: { c: ConnectorWord; i: number }) {
  return (
    <div className="p-5 md:p-6 rounded-2xl bg-card border border-border">
      <div className="flex items-baseline gap-3 flex-wrap">
        <div className="font-display text-3xl text-primary/40 leading-none">
          {String(i + 1).padStart(2, "0")}
        </div>
        <div className="font-display text-3xl md:text-4xl">{c.word}</div>
        {c.rank && (
          <div className="text-[10px] uppercase tracking-wider text-primary bg-primary/10 rounded-full px-2 py-0.5 font-semibold">
            {c.rank}
          </div>
        )}
      </div>
      <div className="mt-2 font-bangla text-[0.98rem]">
        <span className="text-muted-foreground text-xs uppercase tracking-wider mr-2">অর্থ</span>
        {c.meaning}
      </div>
      {c.note && (
        <div className="mt-2 text-sm p-3 rounded-lg bg-primary/5 border border-primary/15 font-bangla text-primary">
          💡 {c.note}
        </div>
      )}
      <ul className="mt-4 space-y-2">
        {c.examples.map((ex, j) => (
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
              <div className="text-sm text-muted-foreground font-bangla mt-0.5">{ex.bn}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConnectorsPage() {
  const core = CONNECTORS.filter((c) => c.tier === "core");
  const extra = CONNECTORS.filter((c) => c.tier === "extra");

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          to="/grammar"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6"
        >
          <ArrowLeft className="size-4" /> ৩০টি ফর্মুলায় ফিরে যান
        </Link>

        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-primary font-semibold bg-primary/8 border border-primary/15 rounded-full px-3 py-1">
          <Link2 className="size-3.5" /> বাক্যের আঠা
        </div>
        <h1 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
          মাত্র ১৪টি Connector — <span className="italic text-primary">সব বাক্যের জোড়া</span>।
        </h1>
        <p className="text-muted-foreground mt-5 font-bangla leading-relaxed max-w-2xl">
          Connector হলো সেই শব্দ যেগুলো <strong>বাক্যের সাথে বাক্য</strong> জোড়া দেয়। এদের বাদে
          কেউ বেশি লম্বা কথা বলতে পারে না — "and, but, so" ছাড়া গল্পই হয় না। নিচের ১৪টাই দৈনন্দিন
          থেকে B2 পর্যন্ত সব জোড়া কভার করে।
        </p>

        <div className="mt-5 p-4 rounded-xl bg-card border border-border text-sm font-bangla leading-relaxed">
          🔬 <strong>উৎস:</strong> COCA Corpus (Corpus of Contemporary American English, ১ বিলিয়ন
          শব্দ) + Cambridge English Grammar Profile + British Council A2–B1 curriculum। এর বাইরের
          connector দৈনন্দিন কথায় ১%-এরও কম।
        </div>

        {/* Where they sit */}
        <div className="mt-6 rounded-2xl bg-foreground text-background p-6">
          <div className="text-[11px] uppercase tracking-[0.24em] opacity-70 font-semibold">
            🧱 এরা কোথায় বসে?
          </div>
          <p className="mt-3 font-bangla leading-relaxed opacity-90">
            Connector দুইটা বাক্যের মাঝে <strong>সেতু</strong> হয়ে বসে —<strong> S+V+O</strong>{" "}
            ফর্মুলা ভাঙে না, বরং দুটো S+V+O কে জোড়া দেয়।
          </p>
          <div className="mt-4 font-mono text-sm bg-background/10 rounded-lg p-3">
            I went home <span className="text-gold">because</span> it was raining.
          </div>
        </div>

        {/* CORE section */}
        <div className="mt-10">
          <div className="flex items-baseline gap-3 flex-wrap">
            <div className="text-[11px] uppercase tracking-[0.24em] text-primary font-semibold">
              অংশ ১
            </div>
            <h2 className="font-display text-2xl md:text-3xl">৮টি Core Connector</h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground font-bangla">
            দৈনন্দিন কথ্য ইংরেজির <strong>৮০%+</strong> জোড়া এই ৮টা দিয়েই হয়। এগুলো ছাড়া এক
            বাক্যের বেশি বলা যায় না।
          </p>
          <div className="mt-5 space-y-3">
            {core.map((c, i) => (
              <ConnectorCard key={c.word} c={c} i={i} />
            ))}
          </div>
        </div>

        {/* EXTRA section */}
        <div className="mt-10">
          <div className="flex items-baseline gap-3 flex-wrap">
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold font-semibold">
              অংশ ২
            </div>
            <h2 className="font-display text-2xl md:text-3xl">৬টি Extra Connector — B2 Fluency</h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground font-bangla">
            গল্প বলা, ইমেইল লেখা, ভদ্রভাবে মতামত দেওয়া — এই ৬টা যোগ হলে আপনি{" "}
            <strong>উপরের স্তরে</strong> চলে যাবেন।
          </p>
          <div className="mt-5 space-y-3">
            {extra.map((c, i) => (
              <ConnectorCard key={c.word} c={c} i={core.length + i} />
            ))}
          </div>
        </div>

        {/* Link to prepositions */}
        <Link
          to="/prepositions"
          className="mt-10 block p-5 md:p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition group"
        >
          <div className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground font-semibold">
            পরের ধাপ
          </div>
          <div className="mt-2 flex items-center justify-between gap-4">
            <div>
              <div className="font-display text-xl md:text-2xl">
                ৯টি Preposition — of, in, at, to…
              </div>
              <div className="text-sm text-muted-foreground font-bangla mt-1">
                Connector আর preposition আলাদা জিনিস। Preposition বাক্যের ভেতরে noun-এর সাথে সম্পর্ক
                দেখায়। এই ৯টাই যথেষ্ট।
              </div>
            </div>
            <ArrowRight className="size-5 text-primary shrink-0 group-hover:translate-x-1 transition" />
          </div>
        </Link>

        {/* Peace-of-mind */}
        <div className="mt-10 p-6 md:p-8 rounded-2xl bg-primary text-primary-foreground">
          <div className="text-[11px] uppercase tracking-[0.24em] opacity-80 font-semibold">
            🕊️ এবার মনটাকে হালকা করে দিন
          </div>
          <p className="mt-3 font-bangla leading-relaxed opacity-95">
            এই ১৪টির বাইরে কোনো "লুকানো connector" আপনাকে চমকে দেবে না। আপনার হাতে এখন{" "}
            <strong>৩০টি ফর্মুলা</strong> + <strong>১৪টি Connector</strong> +{" "}
            <strong>৯টি Preposition</strong> + Oxford 3000 শব্দ — B2 পর্যন্ত পূর্ণ ম্যাপ চোখের
            সামনে। আল্লাহর নাম নিয়ে শুরু করে দিন।
          </p>
        </div>
      </div>
    </main>
  );
}
