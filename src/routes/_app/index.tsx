import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  MessageCircle,
  Compass,
  Map as MapIcon,
  MapPin,
  Mic,
  Target,
  MessagesSquare,
  Baby,
  AlertTriangle,
  Quote,
  Link2,
} from "lucide-react";

import logo from "@/assets/tutor-logo.png";

export const Route = createFileRoute("/_app/")({
  head: () => ({
    meta: [
      { title: "AI — বাংলায় শিখো ইংরেজি, শূন্য থেকে প্রফেশনাল" },
      {
        name: "description",
        content:
          "বাংলা মাধ্যমের প্রতিটি মানুষের জন্য — ২৪ সপ্তাহের রোডম্যাপ, ৩০টি গ্রামার ফর্মুলা, বাস্তব পরিস্থিতির কথোপকথন, সাধারণ ভুল, উচ্চারণ, AI টিচার। সম্পূর্ণ ফ্রি।",
      },
    ],
  }),
  component: Home,
});

// Memory-psychology cornerstone: 3-item primary paths (Miller 7±2, chunked)
const PATHS = [
  {
    n: "01",
    to: "/why-english",
    en: "Why",
    kicker: "শুরু",
    title: "আগে বুঝি — কেন শিখব?",
    desc: "স্পষ্ট 'কেন' না থাকলে শেখা মাঝপথে থামে। CEFR-এর ৬ ধাপ, চাকরিতে ৩০-৫০% বেশি বেতন, brain-এর জন্য জিম।",
    icon: Compass,
  },
  {
    n: "02",
    to: "/roadmap",
    en: "Plan",
    kicker: "পরিকল্পনা",
    title: "২৪ সপ্তাহের সরল রোডম্যাপ।",
    desc: "Cambridge ও British Council-এর কাঠামো মেনে ৬টি ধাপ — সপ্তাহে সপ্তাহে কী শিখব, কতটুকু শিখব, সব লেখা।",
    icon: MapIcon,
    featured: true,
  },
  {
    n: "03",
    to: "/scenarios",
    en: "Practice",
    kicker: "বাস্তব",
    title: "চা-দোকান থেকে ইন্টারভিউ।",
    desc: "৮টা বাংলাদেশি পরিস্থিতি — রিকশা, ডাক্তার, ফোন, ইমেইল — audio-সহ পুরো কথোপকথন।",
    icon: MapPin,
  },
];

// The library — 6 grid, Von Restorff highlighted one
const LIBRARY = [
  {
    to: "/grammar",
    icon: Sparkles,
    title: "৩০ গ্রামার ফর্মুলা",
    en: "Grammar Toolkit",
    desc: "যতটুকু শিখলে জীবন চলে।",
  },
  {
    to: "/connectors",
    icon: Link2,
    title: "১৪টি Connector",
    en: "Connectors",
    desc: "বাক্যের সাথে বাক্য জোড়া দেয়।",
  },
  {
    to: "/vocab-plan",
    icon: Target,
    title: "৩০ দিনে শব্দ",
    en: "Vocab Plan",
    desc: "থিমে গোছানো, মেমোরি সাইকোলজি দিয়ে সাজানো।",
    accent: true,
  },
  {
    to: "/vocabulary",
    icon: BookOpen,
    title: "Oxford ৩০০০",
    en: "Vocabulary",
    desc: "বাংলা অর্থ ও উচ্চারণ।",
  },
  {
    to: "/mistakes",
    icon: AlertTriangle,
    title: "২০টি সাধারণ ভুল",
    en: "Common Mistakes",
    desc: "বাঙালিরা যেগুলো বেশি করে।",
  },
  {
    to: "/pronunciation",
    icon: Mic,
    title: "উচ্চারণ",
    en: "Pronunciation",
    desc: "বাংলায় নেই এমন ৬টি সাউন্ড।",
  },
  {
    to: "/phrases",
    icon: MessagesSquare,
    title: "দৈনন্দিন বাক্য",
    en: "Phrases",
    desc: "দোকান, ভ্রমণ, ফোন।",
  },
];

function Home() {
  return (
    <main className="paper-grain">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        {/* subtle decor */}
        <div className="absolute -top-32 -right-32 size-[420px] rounded-full bg-primary/8 blur-3xl pointer-events-none" />
        <div className="absolute top-40 -left-32 size-[380px] rounded-full bg-gold/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-28 relative">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8 rise-in">
              <div className="eyebrow font-bangla">
                <span className="inline-block size-1.5 rounded-full bg-primary mr-2 align-middle" />
                বাংলা থেকে ইংরেজি • Vol. 01
              </div>

              <h1 className="mt-6 font-display leading-[0.95] text-[3.4rem] sm:text-7xl md:text-[6rem] tracking-tight">
                বাংলায় ভাবো,
                <br />
                <span className="italic text-primary">ইংরেজিতে</span>{" "}
                <span className="italic">বলো।</span>
              </h1>

              <p className="mt-8 max-w-xl text-lg md:text-xl text-foreground/70 font-bangla leading-relaxed">
                যিনি A B C-ও শোনেননি — তিনি থেকে শুরু করে বহুজাতিক অফিসের ইন্টারভিউ পর্যন্ত। কোনো
                লগইন, কোনো টাকা, কোনো বিজ্ঞাপন নেই। ইনশাআল্লাহ।
              </p>

              <div className="mt-10 flex flex-wrap gap-3 items-center">
                <Link
                  to="/roadmap"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-primary transition shadow-elevated"
                >
                  বিসমিল্লাহ — রোডম্যাপ দেখি
                  <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </Link>

                <Link
                  to="/why-english"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card hover:border-primary/50 transition text-sm font-medium"
                >
                  আগে বুঝি — কেন শিখব
                </Link>
                <Link
                  to="/chat"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm text-primary hover:underline underline-offset-4"
                >
                  <MessageCircle className="size-3.5" />
                  অথবা এখনই AI-কে প্রশ্ন করি
                </Link>
              </div>
            </div>

            {/* Editorial info card — top-right, magazine-style */}
            <aside className="md:col-span-4 rise-in-slow">
              <div className="relative">
                <div className="absolute -inset-8 bg-primary/6 blur-2xl rounded-full pointer-events-none" />
                <div className="relative rounded-3xl border border-border bg-card p-6 shadow-elevated">
                  <img
                    src={logo}
                    alt=""
                    width={64}
                    height={64}
                    className="rounded-2xl bg-secondary shadow-soft"
                  />
                  <div className="eyebrow mt-5">Issue No. 01</div>
                  <div className="font-display text-3xl leading-tight mt-1">
                    A quiet <span className="italic text-primary">revolution</span> in Bengali
                    English.
                  </div>
                  <div className="mt-5 rule-line" />
                  <dl className="mt-5 grid grid-cols-3 gap-3 text-center">
                    {[
                      { n: "23", l: "গ্রামার" },
                      { n: "3000", l: "শব্দ" },
                      { n: "24/7", l: "AI" },
                    ].map((s) => (
                      <div key={s.l}>
                        <dt className="font-display text-2xl text-primary leading-none">{s.n}</dt>
                        <dd className="text-[10px] uppercase tracking-widest mt-1 opacity-60 font-bangla">
                          {s.l}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </aside>
          </div>

          {/* editorial byline strip */}
          <div className="mt-16 grid md:grid-cols-3 gap-x-8 gap-y-4 text-xs text-muted-foreground border-y border-border py-4">
            <div className="font-bangla">
              <b className="text-foreground font-semibold">সম্পাদনা —</b> Cambridge, British
              Council, COCA Corpus-এর উপর ভিত্তি করে।
            </div>
            <div className="font-bangla">
              <b className="text-foreground font-semibold">সময় —</b> দিনে ১ ঘণ্টা × ৭৬ সপ্তাহে A0 →
              B2 (প্রফেশনাল, IELTS ~৬.৫)।
            </div>
            <div className="font-bangla">
              <b className="text-foreground font-semibold">দর্শন —</b> কম শেখো, ভালো শেখো, বারবার
              শেখো।
            </div>
          </div>
        </div>
      </section>

      {/* ============ THREE PATHS — memory chunk (3) ============ */}
      <section className="max-w-7xl mx-auto px-5 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="md:col-span-7">
            <div className="eyebrow font-bangla">যেভাবে এগোবেন</div>
            <h2 className="font-display text-4xl md:text-6xl mt-3 leading-[1.02]">
              তিনটা ধাপ। <span className="italic text-primary">তিনটাই যথেষ্ট।</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-foreground/70 font-bangla leading-relaxed">
            মস্তিষ্ক একসাথে ৭টার বেশি জিনিস মনে রাখতে পারে না (Miller's Law)। তাই আমরা পুরো পথটাকে
            ভাগ করেছি মাত্র <b className="text-foreground">তিন ধাপে</b> — বুঝি, পরিকল্পনা, অনুশীলন।
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {PATHS.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.to}
                to={p.to}
                className={`group relative flex flex-col p-7 md:p-8 rounded-3xl border transition min-h-[320px] ${
                  p.featured
                    ? "gradient-ink text-background border-transparent shadow-elevated"
                    : "bg-card border-border hover:border-primary/50 hover:shadow-soft"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`size-11 rounded-2xl grid place-items-center ${
                      p.featured ? "bg-background/12 text-background" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span
                    className={`font-display text-6xl leading-none italic ${
                      p.featured ? "text-background/25" : "text-primary/15"
                    }`}
                  >
                    {p.n}
                  </span>
                </div>

                <div className="mt-auto">
                  <div
                    className={`text-[10px] uppercase tracking-[0.24em] font-bold font-bangla ${
                      p.featured ? "text-background/70" : "text-primary/70"
                    }`}
                  >
                    {p.kicker} · {p.en}
                  </div>
                  <h3
                    className={`font-display text-3xl md:text-[2rem] mt-2 leading-tight ${
                      p.featured ? "" : ""
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed font-bangla ${
                      p.featured ? "opacity-80" : "text-muted-foreground"
                    }`}
                  >
                    {p.desc}
                  </p>
                  <div
                    className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium ${
                      p.featured ? "" : "text-primary"
                    }`}
                  >
                    এগোই <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ============ FEATURED — dark editorial band, big serif quote ============ */}
      <section className="gradient-ink text-background py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-10 left-10 size-96 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute bottom-10 right-10 size-96 rounded-full bg-gold/15 blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-5 relative">
          <Quote className="size-10 text-primary opacity-70" />
          <blockquote className="mt-6 font-display text-3xl md:text-5xl italic leading-tight">
            "মস্তিষ্ক ভাষা শেখে <span className="text-primary not-italic">বারবার শুনে</span>, নিয়ম
            মুখস্থ করে না। তাই প্রতিদিন ২০ মিনিট শোনা এক দিনে ৩ ঘণ্টা পড়ার চেয়ে ১০ গুণ ভালো।"
          </blockquote>
          <div className="mt-8 flex items-center gap-3 text-sm opacity-75">
            <div className="h-px w-10 bg-background/40" />
            <span className="font-bangla">
              Krashen's Input Hypothesis · Spacing Effect (Ebbinghaus)
            </span>
          </div>

          <div className="mt-14 grid sm:grid-cols-3 gap-4">
            {[
              { n: "20 min", l: "প্রতিদিন যথেষ্ট" },
              { n: "24 wk", l: "শুরু → B2 লেভেল" },
              { n: "100%", l: "ফ্রি, কোনো লগইন নেই" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-background/15 bg-background/5 backdrop-blur-sm p-5"
              >
                <div className="font-display text-4xl text-primary">{s.n}</div>
                <div className="text-xs opacity-70 mt-1 font-bangla">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LIBRARY — bento grid, Von Restorff highlight ============ */}
      <section className="max-w-7xl mx-auto px-5 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="md:col-span-8">
            <div className="eyebrow font-bangla">সমস্ত লাইব্রেরি</div>
            <h2 className="font-display text-4xl md:text-6xl mt-3 leading-[1.02]">
              যা যা <span className="italic text-primary">প্রয়োজন</span> — সব এক ছাদের নিচে।
            </h2>
          </div>
          <p className="md:col-span-4 text-foreground/70 font-bangla leading-relaxed">
            বই কিনতে হবে না, কোর্স করতে হবে না, ইউটিউবে খুঁজতে হবে না। যা লাগে — এক ক্লিকে।
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {LIBRARY.map((it) => {
            const Icon = it.icon;
            return (
              <Link
                key={it.to}
                to={it.to}
                className={`group flex flex-col p-6 rounded-2xl border transition min-h-[180px] ${
                  it.accent
                    ? "bg-primary text-primary-foreground border-primary shadow-warm hover:shadow-elevated"
                    : "bg-card border-border hover:border-primary/45 hover:shadow-soft"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`size-10 rounded-xl grid place-items-center ${
                      it.accent ? "bg-primary-foreground/15" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="size-4" />
                  </span>
                  <ArrowUpRight
                    className={`size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      it.accent ? "opacity-70" : "opacity-40"
                    }`}
                  />
                </div>
                <div className="mt-auto pt-6">
                  <div
                    className={`text-[10px] uppercase tracking-[0.2em] font-bold ${
                      it.accent ? "opacity-75" : "text-primary/70"
                    }`}
                  >
                    {it.en}
                  </div>
                  <h3 className="font-display text-2xl mt-1.5 leading-tight">{it.title}</h3>
                  <p
                    className={`text-sm mt-2 font-bangla ${
                      it.accent ? "opacity-85" : "text-muted-foreground"
                    }`}
                  >
                    {it.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* secondary row */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {[
            { to: "/practice", icon: Target, en: "Daily Quiz", label: "দৈনিক কুইজ" },
            { to: "/vocab-plan", icon: BookOpen, en: "Vocab Plan", label: "৩০ দিনে শব্দ" },
            { to: "/kids", icon: Baby, en: "Kids Mode", label: "বাচ্চাদের মোড" },
            { to: "/chat", icon: MessageCircle, en: "AI Tutor", label: "AI-কে জিজ্ঞাসা" },
          ].map((it) => {
            const Icon = it.icon;
            return (
              <Link
                key={it.to}
                to={it.to}
                className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/45 transition"
              >
                <span className="size-9 rounded-lg bg-secondary text-foreground/80 grid place-items-center shrink-0">
                  <Icon className="size-4" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] uppercase tracking-[0.22em] font-bold text-primary/70">
                    {it.en}
                  </div>
                  <div className="font-bangla text-sm font-semibold truncate">{it.label}</div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* ============ CLOSING — invitation ============ */}
      <section className="max-w-4xl mx-auto px-5 pb-24 text-center">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-16 shadow-soft">
          <div className="eyebrow font-bangla">শেষ কথা</div>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.05]">
            আজকের একটাই কাজ — <br />
            <span className="italic text-primary">শুরু করুন।</span>
          </h2>
          <p className="mt-6 text-foreground/70 font-bangla leading-relaxed max-w-xl mx-auto">
            শুরুটাই সবচেয়ে কঠিন। কিন্তু আপনি এই লেখাটা পড়ছেন — মানে অর্ধেক পথ হেঁটে ফেলেছেন। 🌱
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/why-english"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-primary transition shadow-soft"
            >
              কেন শিখব — দেখি
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background hover:border-primary/50 transition text-sm font-semibold"
            >
              রোডম্যাপ ধরে হাঁটি
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
