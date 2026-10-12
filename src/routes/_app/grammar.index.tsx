import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Link2, ExternalLink, BookOpen, Map, Sparkles } from "lucide-react";
import {
  GRAMMAR,
  CATEGORIES,
  EVIDENCE_SOURCES,
  LEARNING_ROADMAP,
  VOCAB_TIERS,
  type GrammarCategory,
} from "@/data/grammar";

export const Route = createFileRoute("/_app/grammar/")({
  head: () => ({
    meta: [
      { title: "৩০টি মাস্টার ফর্মুলা — পূর্ণ B2 কভারেজ | GuruJi" },
      {
        name: "description",
        content:
          "Cambridge, British Council, COCA ও NGSL গবেষণার ভিত্তিতে বাংলাভাষীর জন্য বাছাই করা ৩০টি গ্রামার ফর্মুলা। প্রমাণ, উৎস, শেখার রোডম্যাপ সহ।",
      },
    ],
  }),
  component: GrammarPage,
});

function GrammarPage() {
  const cats = Object.keys(CATEGORIES) as GrammarCategory[];

  return (
    <main className="flex-1 overflow-y-auto">
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <div className="text-[11px] uppercase tracking-[0.28em] text-primary font-semibold">
            ⚔️ আপনার ইংরেজি টুলকিট
          </div>
          <h1 className="font-display text-4xl md:text-6xl mt-3 leading-[1.05]">
            মাত্র <span className="text-primary">৩০টি ফর্মুলা</span> — <br />
            ইংরেজির <em className="italic">সম্পূর্ণ</em> অস্ত্র।
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl font-bangla leading-relaxed text-[1.05rem]">
            ইংরেজির মূল নিয়ম একটাই —{" "}
            <strong className="text-foreground">চালক (S) + ইঞ্জিন (V) + গন্তব্য (O)</strong>। এই
            ৩০টা ফর্মুলা তারই বিভিন্ন রূপ। আমরা এগুলো নিজে থেকে বানাইনি — Cambridge, British
            Council, COCA Corpus ও বাংলাদেশের বিশ্ববিদ্যালয়ের গবেষণা থেকে বাছাই করা। প্রতিটার নিচে
            "কেন এটা দরকার" ব্যাখ্যা করা আছে।
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <ToolkitCard n="৩০" label="ফর্মুলা" sub="বাক্যের ছাঁচ" active />
            <ToolkitCard n="১৪" label="Connector" sub="বাক্যের জোড়া" linkTo="/connectors" />
            <ToolkitCard n="৯" label="Preposition" sub="শব্দের সম্পর্ক" linkTo="/prepositions" />
            <ToolkitCard n="৩০০০" label="Oxford শব্দ" sub="বাক্যের ইট" linkTo="/vocabulary" />
          </div>
        </div>
      </section>

      {/* Anatomy */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="rounded-2xl border border-border p-6 md:p-8 bg-card">
          <div className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold">
            🛠 আগে ভিত্তি: বাক্যের তিনটি ঘর
          </div>
          <h2 className="font-display text-2xl md:text-3xl mt-3">Subject → Verb → Object</h2>
          <div className="mt-5 grid md:grid-cols-3 gap-3">
            <AnatomyBox
              tag="S · চালক"
              question="কে করছে?"
              body="যে কাজটা করে। I, You, We, She, The buyer…"
            />
            <AnatomyBox
              tag="V · ইঞ্জিন"
              question="কী করছে?"
              body="কাজ নিজেই — go, eat, send, learn, calculate…"
            />
            <AnatomyBox
              tag="O · গন্তব্য"
              question="কী বা কাকে?"
              body="কাজের প্রভাব যার ওপর পড়ছে — the file, English, tea…"
            />
          </div>
          <p className="mt-5 text-sm text-muted-foreground font-bangla leading-relaxed">
            বাংলা: "আমি ভাত খাই" (কর্তা-কর্ম-ক্রিয়া)। ইংরেজি: "I eat rice" (কর্তা-ক্রিয়া-কর্ম)। এই{" "}
            <em>একটাই</em> পার্থক্য বাংলাভাষীর সবচেয়ে বড় ভুলের উৎস (সূত্র: IIUC Studies 2026)।
          </p>
        </div>
      </section>

      {/* Categories with formulas */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        {cats.map((catKey) => {
          const cat = CATEGORIES[catKey];
          const items = GRAMMAR.filter((g) => g.category === catKey);
          const isPriority = catKey === "bangla-priority";
          return (
            <div key={catKey} className="mb-12">
              <div
                className={`rounded-2xl p-5 mb-4 ${
                  isPriority ? "bg-primary/8 border border-primary/20" : ""
                }`}
              >
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-2xl">{cat.emoji}</span>
                  <h2 className="font-display text-2xl md:text-3xl">{cat.title}</h2>
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-2">
                  {cat.subtitle} · {items.length}টি ফর্মুলা
                </div>
                <p className="text-sm text-foreground/80 font-bangla max-w-2xl leading-relaxed">
                  {cat.blurb}
                </p>
              </div>

              <div className="space-y-2.5">
                {items.map((t) => (
                  <Link
                    key={t.slug}
                    to="/grammar/$slug"
                    params={{ slug: t.slug }}
                    className="group flex items-start gap-4 p-4 md:p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-soft transition"
                  >
                    <div className="shrink-0 w-11 md:w-14 pt-1">
                      <div className="font-display text-3xl md:text-4xl text-primary/40 group-hover:text-primary transition leading-none">
                        {String(t.number).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-mono text-[13px] md:text-sm bg-foreground text-background inline-block px-2.5 py-1 rounded-md font-semibold">
                        {t.formula}
                      </div>
                      <div className="font-display text-lg md:text-xl leading-snug mt-2">
                        {t.title}
                        <span className="text-muted-foreground text-sm ml-2 font-normal italic">
                          {t.titleEn}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1 font-bangla">
                        {t.short}
                      </div>
                    </div>
                    <ArrowRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition self-center shrink-0 hidden sm:block" />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Connectors CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <Link
          to="/connectors"
          className="group block rounded-2xl p-6 md:p-8 bg-foreground text-background hover:opacity-95 transition"
        >
          <div className="flex items-center gap-3">
            <Link2 className="size-5 opacity-80" />
            <div className="text-[11px] uppercase tracking-[0.28em] opacity-70">পরবর্তী অস্ত্র</div>
          </div>
          <div className="mt-3 font-display text-2xl md:text-3xl">
            ১৪টি Connector + ৯টি Preposition
          </div>
          <p className="mt-2 opacity-80 font-bangla text-sm max-w-2xl">
            COCA Corpus + Cambridge B2 curriculum থেকে বাছাই — ৮টি Core Connector দিয়ে ৮০% জোড়া,
            ৬টি Extra যোগ করলে B2 fluency।
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all">
            দেখুন <ArrowRight className="size-4" />
          </div>
        </Link>
      </section>

      {/* Learning Roadmap — evidence-based */}
      <section className="border-t border-border bg-card/40">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-primary font-semibold">
            <Map className="size-3.5" /> শেখার রোডম্যাপ
          </div>
          <h2 className="font-display text-2xl md:text-3xl mt-2">
            কোনটা আগে, কোনটা পরে — গবেষণার ভিত্তিতে
          </h2>
          <p className="mt-3 font-bangla text-muted-foreground max-w-2xl leading-relaxed">
            British Council A1→A2 সিলেবাস, BBC Learning English ধারাবাহিকতা, এবং বাংলাভাষীদের সাধারণ
            ভুলের গবেষণা — এই তিনটার আলোকে সাজানো। হুড়োহুড়ি নয়, ধাপে ধাপে।
          </p>

          <div className="mt-8 space-y-4">
            {LEARNING_ROADMAP.map((s) => (
              <div key={s.stage} className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-baseline gap-3">
                  <div className="font-display text-3xl text-primary">
                    {String(s.stage).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {s.weeks}
                    </div>
                    <div className="font-display text-xl mt-0.5">{s.title}</div>
                  </div>
                </div>
                <div className="mt-3 text-sm font-bangla text-foreground/80">
                  🎯 <strong>লক্ষ্য:</strong> {s.goal}
                </div>
                <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm">
                  {s.items.map((it, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-background/60 font-bangla"
                    >
                      <span className="text-primary shrink-0">▸</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vocabulary tiers */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-primary font-semibold">
          <BookOpen className="size-3.5" /> শব্দভাণ্ডার — কতটা যথেষ্ট?
        </div>
        <h2 className="font-display text-2xl md:text-3xl mt-2">"কত শব্দ শিখলে ইংরেজি বলা যাবে?"</h2>
        <p className="mt-3 font-bangla text-muted-foreground max-w-2xl leading-relaxed">
          গবেষণার সোজা উত্তর — অনেক কম যতটা আপনি ভাবছেন। ৩টি ধাপে ভাগ করে দেখুন:
        </p>

        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {VOCAB_TIERS.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-card border border-border">
              <div className="font-display text-2xl text-primary">{t.words}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                {t.goal}
              </div>
              <div className="mt-3 text-sm font-bangla leading-relaxed">{t.coverage}</div>
              <div className="mt-3 text-[11px] text-muted-foreground italic">{t.source}</div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link
            to="/vocabulary"
            className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:gap-3 transition-all"
          >
            Oxford 3000 তালিকা দেখুন <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Evidence & Sources */}
      <section className="border-t border-border bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <div className="text-[11px] uppercase tracking-[0.28em] opacity-70 font-semibold">
            📚 প্রমাণ ও উৎস
          </div>
          <h2 className="font-display text-2xl md:text-3xl mt-2">আমরা কেন এই কথাগুলো বলছি</h2>
          <p className="mt-3 font-bangla opacity-80 max-w-2xl leading-relaxed">
            ইংরেজি শেখানোর ব্যাপারে অনেকে অনেক কথা বলে। আমরা কিছুই নিজে থেকে দাবি করছি না। প্রতিটি
            সিদ্ধান্তের পেছনে আন্তর্জাতিক প্রতিষ্ঠান বা গবেষণার প্রমাণ আছে। নিচে সেগুলোর তালিকা —
            নিজেই যাচাই করুন।
          </p>

          <div className="mt-8 space-y-3">
            {EVIDENCE_SOURCES.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded-2xl bg-background/5 hover:bg-background/10 border border-background/10 transition"
              >
                <div className="flex items-start gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="font-display text-lg group-hover:text-gold transition">
                      {s.name}
                    </div>
                    <div className="mt-2 text-sm font-bangla opacity-85 leading-relaxed">
                      {s.fact}
                    </div>
                  </div>
                  <ExternalLink className="size-4 opacity-60 shrink-0 mt-1.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why enough section */}
      <section className="border-t border-border bg-card/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-[11px] uppercase tracking-[0.28em] text-primary font-semibold">
            🧐 একদম শেষ সত্য
          </div>
          <h2 className="font-display text-2xl md:text-3xl mt-2">
            "ভাই, এই ৩০টাই কি সত্যিই যথেষ্ট?"
          </h2>
          <p className="mt-4 font-bangla leading-relaxed text-[1.02rem] max-w-3xl">
            ইংরেজিতে কোটি কোটি শব্দ ও হাজার হাজার গ্রামারের নিয়ম আছে।
            <strong className="text-foreground"> কিন্তু</strong> পরীক্ষায় লিখতে, বায়ারের সাথে
            চ্যাট করতে বা মিটিংয়ে কথা বলতে ওই কোটি কোটি নিয়মের <strong>১%-ও</strong> লাগবে না। এই
            ৩০টা ফর্মুলা + ১৪টি Connector + ৯টি Preposition + প্রতিদিন কয়েকটা নতুন শব্দ — এতেই
            দৈনন্দিন কথার প্রায় সবটা কভার হয়ে যায়, ইনশাআল্লাহ।
          </p>
          <p className="mt-3 font-bangla leading-relaxed text-muted-foreground max-w-3xl">
            ওপরের "প্রমাণ ও উৎস" অংশে দেখুন — Cambridge, British Council, EF, NGSL, BBC — সবাই এই
            একই সিদ্ধান্তে পৌঁছেছে। বাকি নিয়মগুলো academic writing বা advanced conversation-এর
            জন্য; সেগুলো এখন শিখলে বরং এই ৩০টাই কাঁচা থাকবে।
          </p>
        </div>
      </section>

      {/* B2 Complete callout */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-gold/10 border border-primary/25">
          <div className="text-[11px] uppercase tracking-[0.28em] text-primary font-semibold">
            🏆 পূর্ণ B2 কভারেজ
          </div>
          <h2 className="font-display text-2xl md:text-3xl mt-2">
            আর কিছু নেই — এই ৩০টাই পূর্ণ B2
          </h2>
          <p className="mt-3 font-bangla leading-relaxed text-[1.02rem] max-w-3xl">
            আগে "পরবর্তী ধাপ" বলে যেগুলো আলাদা রেখেছিলাম (Passive, Reported Speech, Relative
            Clauses, Conditionals, Phrasal Verbs) — সেগুলো সব এখন ২৬-৩০ নম্বর ফর্মুলায় যুক্ত। মানে
            দৈনন্দিন কথা থেকে অফিস, ইন্টারভিউ, বিদেশে চাকরি — সব জায়গার জন্য যা লাগে সব হাতে আছে।
            <br />
            <br />
            <strong>Oxford 3000-এর বাইরে একটাও নতুন শব্দ লাগেনি।</strong> সব উদাহরণ পরিচিত শব্দের
            ভেতরেই — আপনার মূল নিয়ম অক্ষত।
          </p>
        </div>
      </section>
    </main>
  );
}

function ToolkitCard({
  n,
  label,
  sub,
  active,
  linkTo,
}: {
  n: string;
  label: string;
  sub: string;
  active?: boolean;
  linkTo?: string;
}) {
  const inner = (
    <div
      className={`rounded-2xl p-5 border transition ${
        active
          ? "bg-primary text-primary-foreground border-primary shadow-soft"
          : "bg-card border-border hover:border-primary/40"
      }`}
    >
      <div className="flex items-baseline gap-2">
        <span className="font-display text-4xl leading-none">{n}</span>
        <span className={active ? "opacity-90" : "text-muted-foreground"}>{label}</span>
      </div>
      <div
        className={`text-xs font-bangla mt-2 ${active ? "opacity-80" : "text-muted-foreground"}`}
      >
        {sub}
      </div>
    </div>
  );
  if (linkTo) return <Link to={linkTo}>{inner}</Link>;
  return inner;
}

function AnatomyBox({ tag, question, body }: { tag: string; question: string; body: string }) {
  return (
    <div className="p-4 rounded-xl bg-background border border-border">
      <div className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold">
        {tag}
      </div>
      <div className="font-display text-lg mt-2">{question}</div>
      <div className="text-sm text-muted-foreground font-bangla mt-1 leading-relaxed">{body}</div>
    </div>
  );
}

void Sparkles;
