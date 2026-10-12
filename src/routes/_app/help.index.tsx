import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Mic,
  MessageCircle,
  Sparkles,
  Volume2,
  Key,
  Shield,
  Clock,
  Target,
  HelpCircle,
  ArrowRight,
  Compass,
  PenLine,
  Ear,
  Trophy,
  Smartphone,
  Wifi,
  Link2,
  Map,
  Layers,
  Repeat,
  Headphones,
  Users,
  AlertTriangle,
  MessagesSquare,
  Baby,
  Heart,
} from "lucide-react";

export const Route = createFileRoute("/_app/help/")({
  head: () => ({
    meta: [
      { title: "কিভাবে ব্যবহার করব — AI Guide" },
      {
        name: "description",
        content:
          "AI কী, কিভাবে শিখবেন, কোন ফিচার কখন কাজে লাগে — সম্পূর্ণ বাংলা গাইড। নতুন হলে এখান থেকে শুরু।",
      },
    ],
  }),
  component: HelpPage,
});

function HelpPage() {
  return (
    <main className="flex-1 overflow-y-auto paper-grain">
      <div className="max-w-4xl mx-auto px-5 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="size-3.5" />
            Guide
          </div>
          <h1 className="font-display text-4xl md:text-6xl mt-5 leading-[1.05]">
            AI <span className="italic text-primary">কিভাবে</span> ব্যবহার করব?
          </h1>
          <p className="mt-5 text-foreground/70 font-bangla max-w-2xl mx-auto leading-relaxed">
            নতুন হলে এই পেজটা একবার পড়ে নিন — ৩ মিনিট। সব প্রশ্নের উত্তর এখানেই আছে।
          </p>
        </div>

        {/* Quick start */}
        <Section title="দ্রুত শুরু (৩ ধাপে)" eyebrow="Quick Start">
          <ol className="space-y-4">
            {[
              {
                n: "১",
                title: "রোডম্যাপ দেখো",
                desc: "২৪ সপ্তাহের গোছানো প্ল্যান — কোথা থেকে শুরু, কোথায় শেষ।",
                to: "/roadmap",
                cta: "রোডম্যাপ",
              },
              {
                n: "২",
                title: "উচ্চারণ ও শব্দ",
                desc: "বাংলায় নেই এমন ৬টি সাউন্ড + Oxford ৩০০০ থেকে শুরু।",
                to: "/pronunciation",
                cta: "উচ্চারণ",
              },
              {
                n: "৩",
                title: "সপ্তাহে ২-৩ বার চর্চা",
                desc: "বলার/লেখার চর্চা, quiz, গল্প — যেটা ভালো লাগে।",
                to: "/practice",
                cta: "কুইজ",
              },
            ].map((s) => (
              <li key={s.n}>
                <Link
                  to={s.to}
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-soft transition"
                >
                  <div className="size-12 rounded-2xl bg-primary text-primary-foreground grid place-items-center font-display text-2xl font-bold shrink-0">
                    {s.n}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-xl leading-tight">{s.title}</div>
                    <div className="text-sm text-muted-foreground mt-1 font-bangla">{s.desc}</div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-sm text-primary font-medium shrink-0">
                    {s.cta}
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </Section>

        {/* Feature guide — সাইটের navigation-এর সাথে মিলিয়ে ৩ গ্রুপে */}
        <Section title="প্রতিটা পেজ কী কাজে লাগে" eyebrow="Features">
          <p className="text-sm font-bangla text-muted-foreground -mt-2 mb-6 leading-relaxed">
            উপরের মেনু ৩টা ভাগে সাজানো — <b>শুরু</b> (কোথা থেকে শুরু), <b>শেখো</b> (theory ও
            reference), <b>চর্চা</b> (হাতে-কলমে practice)। নিচে সব পেজের সংক্ষিপ্ত পরিচয়।
          </p>

          {/* গ্রুপ ১ — শুরু */}
          <SubGroup label="শুরু" caption="Start Here">
            <FeatureCard
              icon={<Heart className="size-5" />}
              title="কেন ইংরেজি?"
              desc="প্রেরণা ও লক্ষ্য পরিষ্কার — কেন শিখবেন, কী পাল্টাবে।"
              to="/why-english"
            />
            <FeatureCard
              icon={<Map className="size-5" />}
              title="২৪ সপ্তাহের রোডম্যাপ"
              desc="Cambridge ও British Council কাঠামো — কোন সপ্তাহে কী শিখবেন, সব লেখা।"
              to="/roadmap"
            />
            <FeatureCard
              icon={<HelpCircle className="size-5" />}
              title="সহায়িকা (এই পেজ)"
              desc="সব ফিচারের গাইড, FAQ, টিপস — কনফিউজড হলে ফিরে আসুন।"
              to="/help"
            />
          </SubGroup>

          {/* গ্রুপ ২ — শেখো */}
          <SubGroup label="শেখো" caption="Learn (Theory & Reference)">
            <FeatureCard
              icon={<Mic className="size-5" />}
              title="উচ্চারণ (Pronunciation)"
              desc="বাংলায় নেই এমন ৬টি সাউন্ড — এগুলো ঠিক করলে accent অনেকটা বদলে যাবে।"
              to="/pronunciation"
            />
            <FeatureCard
              icon={<Sparkles className="size-5" />}
              title="৩০টি গ্রামার ফর্মুলা"
              desc="সব grammar রুল না — শুধু যেগুলো ৯৯% বাক্যে লাগে।"
              to="/grammar"
            />
            <FeatureCard
              icon={<Link2 className="size-5" />}
              title="জোড়া-শব্দ (Connectors)"
              desc="and, but, because, so… বাক্যকে জোড়ার শব্দ — ছোট বাক্য থেকে fluent কথা।"
              to="/connectors"
            />
            <FeatureCard
              icon={<Compass className="size-5" />}
              title="সম্পর্ক-শব্দ (Prepositions)"
              desc="in, on, at, of… বাংলা-ইংরেজির সবচেয়ে বড় বিভ্রান্তি — একবারে পরিষ্কার।"
              to="/prepositions"
            />
            <FeatureCard
              icon={<Target className="size-5" />}
              title="৩০ দিনে শব্দ (Vocab Plan)"
              desc="থিমে সাজানো — পরিবার, খাবার, ভ্রমণ… একটা একটা theme শেষ করো।"
              to="/vocab-plan"
            />
            <FeatureCard
              icon={<BookOpen className="size-5" />}
              title="Oxford ৩০০০ শব্দ ঘাঁটি"
              desc="সম্পূর্ণ Oxford তালিকা — বাংলা অর্থ, উচ্চারণ, উদাহরণ। প্রায় ৮৫% দৈনন্দিন ইংরেজি এই ৩০০০ শব্দ দিয়েই।"
              to="/vocabulary"
            />
          </SubGroup>

          {/* গ্রুপ ৩ — চর্চা */}
          <SubGroup label="চর্চা" caption="Practice (Hands-on)">
            <FeatureCard
              icon={<Mic className="size-5" />}
              title="বলার চর্চা (Speak) 🎤"
              desc="মাইক্রোফোনে বলো — AI স্কোর দেবে। ভয় কাটানোর সেরা উপায়।"
              to="/speak"
            />
            <FeatureCard
              icon={<PenLine className="size-5" />}
              title="লেখার চর্চা (Write) ✍️"
              desc="বাংলা বাক্য → নিজে ইংরেজিতে লেখো → সাথে সাথে ফিডব্যাক। (AI Key দরকার)"
              to="/write"
            />
            <FeatureCard
              icon={<Ear className="size-5" />}
              title="Shadowing"
              desc="নেটিভের কথা শুনে সাথে সাথে বলা — fluent হওয়ার এক নম্বর কৌশল।"
              to="/shadowing"
            />
            <FeatureCard
              icon={<BookOpen className="size-5" />}
              title="গল্প পড়ি (Stories)"
              desc="সহজ ইংরেজিতে গল্প — Oxford 3000-এর মধ্যেই, বাংলা অর্থ inline।"
              to="/stories"
            />
            <FeatureCard
              icon={<Layers className="size-5" />}
              title="শব্দগুচ্ছ (Chunks)"
              desc="একক শব্দ না — ready-made phrase (‘how about…’, ‘I’d rather…’)। নেটিভরা এভাবেই বলে।"
              to="/chunks"
            />
            <FeatureCard
              icon={<Repeat className="size-5" />}
              title="রিভিউ — SRS"
              desc="Spaced Repetition — যা শিখেছেন, ঠিক সময়ে ফিরে এসে ঝালাই। ভুলে যাওয়া ঠেকায়।"
              to="/review"
            />
            <FeatureCard
              icon={<Headphones className="size-5" />}
              title="শোনার চর্চা (Listen)"
              desc="কান তৈরি করার জন্য — ধীরে-দ্রুত দুই গতিতে শুনে বোঝা।"
              to="/listen"
            />
            <FeatureCard
              icon={<Users className="size-5" />}
              title="বাস্তব পরিস্থিতি (Scenarios)"
              desc="দোকান, হাসপাতাল, ইন্টারভিউ, ভিসা… role-play করে শেখা।"
              to="/scenarios"
            />
            <FeatureCard
              icon={<AlertTriangle className="size-5" />}
              title="সাধারণ ভুল (Mistakes)"
              desc="বাংলাভাষীরা যেসব ভুল সবচেয়ে বেশি করে — আগে থেকেই সাবধান।"
              to="/mistakes"
            />
            <FeatureCard
              icon={<Trophy className="size-5" />}
              title="দৈনিক Quiz + XP"
              desc="১০টা প্রশ্ন → XP, streak, level। প্রতিদিন খেলার মতো।"
              to="/practice"
            />
            <FeatureCard
              icon={<MessagesSquare className="size-5" />}
              title="দৈনন্দিন বাক্য (Phrases)"
              desc="সালাম-দোয়া থেকে দর-দাম — মুখস্থ না, চিনে রাখার জন্য।"
              to="/phrases"
            />
            <FeatureCard
              icon={<Baby className="size-5" />}
              title="বাচ্চাদের (Kids Mode)"
              desc="ছড়া, ছবি ও সহজ শব্দ — বাচ্চাদের উপযোগী।"
              to="/kids"
            />
          </SubGroup>

          {/* গ্রুপ ৪ — AI Tutor আলাদা */}
          <SubGroup label="AI টিচার" caption="Bonus — Needs API Key">
            <FeatureCard
              icon={<MessageCircle className="size-5" />}
              title="AI টিচার (Chat)"
              desc="যেকোনো প্রশ্ন বাংলায় — grammar, translation, ভুল ধরানো। (Gemini API Key দরকার)"
              to="/chat"
            />
          </SubGroup>
        </Section>

        {/* API Key section */}
        <Section title="AI ফিচার চালু করতে — API Key" eyebrow="Setup">
          <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-2xl bg-primary text-primary-foreground grid place-items-center shrink-0">
                <Key className="size-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-2xl leading-tight">
                  AI টিচার / লেখা যাচাই ফিচার ব্যবহার করতে চাইলে
                </h3>
                <p className="mt-3 text-sm font-bangla text-foreground/80 leading-relaxed">
                  AI-ভিত্তিক ফিচার (Chat, লেখা যাচাই) চালাতে <b>Google Gemini</b>-এর একটা{" "}
                  <b>ফ্রি API Key</b> দরকার (ক্রেডিট কার্ড ছাড়াই পাওয়া যায়)। এটা{" "}
                  <b>আপনার নিজের key</b> — শুধু আপনার browser-এ localStorage-এ সংরক্ষিত থাকে, আমাদের
                  সার্ভারে যায় না।
                </p>
                <div className="mt-5">
                  <a
                    href="https://aistudio.google.com/apikey"
                    target="_blank"
                    rel="noreferrer"
                    className="block p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition"
                  >
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      Google Gemini (ফ্রি tier আছে)
                    </div>
                    <div className="text-sm font-semibold mt-1">aistudio.google.com/apikey →</div>
                  </a>
                </div>
                <Link
                  to="/settings"
                  className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-primary transition shadow-soft"
                >
                  Settings-এ Key যোগ করি
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section title="সাধারণ প্রশ্ন" eyebrow="FAQ">
          <div className="space-y-3">
            <Faq q="সত্যিই কি সম্পূর্ণ ফ্রি? কোনো লুকানো খরচ নেই?">
              হ্যাঁ। AI-এর সব content, quiz, উচ্চারণ, গল্প সম্পূর্ণ ফ্রি। কোনো login লাগে না, কোনো
              বিজ্ঞাপন নেই। শুধু AI টিচার (Chat) এর জন্য আপনার নিজের API Key দরকার — সেটাও আপনি
              চাইলেই ব্যবহার করবেন, না চাইলে নয়।
            </Faq>
            <Faq q="আমার progress কি save থাকবে? লগইন করব কিভাবে?">
              AI-তে login নেই — আপনার XP, streak, learned words সব আপনার browser-এ (localStorage)
              save হয়। ভালো দিক: privacy পুরো, কেউ জানবে না। খারাপ দিক: browser cache clear করলে বা
              অন্য device-এ গেলে data থাকবে না। তাই একই device-এ ব্যবহার করাই ভালো।
            </Faq>
            <Faq q="মাইক্রোফোন / উচ্চারণ কাজ করছে না — কী করব?">
              বলার চর্চা ও উচ্চারণ ফিচার browser-এর Web Speech API ব্যবহার করে — এটা{" "}
              <b>Chrome/Edge</b>-এ সবচেয়ে ভালো কাজ করে। Firefox বা Safari-তে কিছু সীমাবদ্ধতা আছে।
              আর mic permission "Allow" দিতে হবে।
            </Faq>
            <Faq q="প্রতিদিন কত সময় দিতে হবে?">
              শুরুতে <b>দৈনিক ১ ঘণ্টা × সপ্তাহে ৬ দিন</b> — Stage 1-এর জন্য যথেষ্ট। পরের ধাপে ৭৫–৯০
              মিনিট। ১ ঘণ্টা এক দিন করার চেয়ে অল্প-অল্প প্রতিদিন করলে অনেক ভালো ফল আসে (spacing
              effect)। ব্যস্ত থাকলে ২০ মিনিটও চলবে — শুধু ছাড়বেন না, কিন্তু তাহলে সময়ও প্রপোরশনালি
              বেশি লাগবে।
            </Faq>
            <Faq q="কতদিনে ফলাফল দেখব?">
              <b>২ সপ্তাহে</b> আত্মবিশ্বাস বদলাবে। <b>৬ মাসে</b> (Stage 1 শেষে) — শক্ত A2 + B1-এ
              প্রবেশ, দৈনন্দিন কথা সামলাতে পারবেন। <b>১ বছরে</b> পূর্ণ B1 (স্বাধীন কথা)।{" "}
              <b>১.৫ বছরে</b> B2 (প্রফেশনাল, IELTS ~৬.৫) — Cambridge-এর হিসাব, দৈনিক ১ ঘণ্টা ধরে।
              বিস্তারিত রোডম্যাপে।
            </Faq>
            <Faq q="Oxford 3000 শব্দ কি সত্যিই যথেষ্ট?">
              দৈনন্দিন কাজের জন্য — <b>হ্যাঁ</b>। ভাষাবিজ্ঞানী Paul Nation-এর গবেষণা অনুযায়ী, ৩০০০
              core শব্দ দিয়ে দৈনন্দিন কথা, খবর ও অফিসের প্রায় <b>৮৫%</b> ইংরেজি বোঝা ও বলা যায়।
              উপন্যাস, academic paper বা IELTS 8+ এর জন্য আরও ২-৫ হাজার শব্দ লাগবে — কিন্তু চাকরি,
              ইন্টারভিউ, দৈনন্দিন জীবনের জন্য এটাই যথেষ্ট।
            </Faq>
            <Faq q="আমি একদম শূন্য — কোথা থেকে শুরু করব?">
              প্রথমে{" "}
              <Link to="/roadmap" className="text-primary underline">
                রোডম্যাপ
              </Link>{" "}
              একবার দেখুন — তারপর{" "}
              <Link to="/pronunciation" className="text-primary underline">
                উচ্চারণ
              </Link>{" "}
              পেজ থেকে শুরু করুন (ABC ও সাউন্ড এখানেই)। এরপর{" "}
              <Link to="/grammar" className="text-primary underline">
                ৩০টি ফর্মুলা
              </Link>{" "}
              — ভয় নেই, একদম ধীরে ধীরে।
            </Faq>
            <Faq q="SRS Review কী? এটা কি রোজ করতে হবে?">
              <b>SRS = Spaced Repetition System</b>। যা শিখেছেন, ঠিক সময়ে ফিরে এসে ঝালাই করলে ভুলে
              যান না — এই বৈজ্ঞানিক পদ্ধতি ব্যবহার করে{" "}
              <Link to="/review" className="text-primary underline">
                রিভিউ পেজ
              </Link>{" "}
              প্রতিদিন দেখায় আজ কোন শব্দ/বাক্য ঝালাই দরকার। রোজ ৫ মিনিট দিলেই যথেষ্ট — নতুন কিছু না
              শিখলেও এটা করলে ভুলে যাওয়া বন্ধ।
            </Faq>
            <Faq q="বাচ্চাদের জন্যও কি আছে?">
              হ্যাঁ —{" "}
              <Link to="/kids" className="text-primary underline">
                Kids Mode
              </Link>
              -এ বাচ্চাদের উপযোগী ছড়া, ছবি ও সহজ শব্দ আছে।
            </Faq>
            <Faq q="বাংলাভাষীদের সবচেয়ে সাধারণ ভুল কোথায় দেখব?">
              <Link to="/mistakes" className="text-primary underline">
                সাধারণ ভুল
              </Link>{" "}
              পেজে বাংলাভাষীরা যেসব ভুল সবচেয়ে বেশি করে (‘I am agree’, ‘he go’, wrong preposition…)
              — সব একজায়গায়। শুরুতেই একবার দেখে নিলে নিজে সাবধান থাকা সহজ।
            </Faq>
          </div>
        </Section>

        {/* Tips */}
        <Section title="সেরা ফল পেতে ৫টা টিপস" eyebrow="Pro Tips">
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Clock className="size-5" />,
                title: "প্রতিদিন — অল্প হলেও",
                desc: "ধারাবাহিকতাই আসল। ১০ মিনিটও অনেক।",
              },
              {
                icon: <Volume2 className="size-5" />,
                title: "শব্দ শুনে মুখে বলুন",
                desc: "শুধু চোখে না — কানে ও জিভে যেন যায়।",
              },
              {
                icon: <PenLine className="size-5" />,
                title: "নিজে বাক্য বানান",
                desc: "মুখস্থ না — নতুন বাক্যে ব্যবহার করলে আটকে থাকে।",
              },
              {
                icon: <Smartphone className="size-5" />,
                title: "ফোনেই যথেষ্ট",
                desc: "কম্পিউটার লাগবে না — bus-এ, চায়ের দোকানে চলবে।",
              },
              {
                icon: <Trophy className="size-5" />,
                title: "Streak না ভাঙুন",
                desc: "৭ দিন streak = অভ্যাস তৈরি। এরপর সহজ।",
              },
              {
                icon: <Wifi className="size-5" />,
                title: "Internet না থাকলেও",
                desc: "সব text-based ফিচার offline চলবে (একবার load হলে)।",
              },
            ].map((t) => (
              <div
                key={t.title}
                className="flex gap-4 p-5 rounded-2xl border border-border bg-card"
              >
                <div className="size-10 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                  {t.icon}
                </div>
                <div>
                  <div className="font-display text-lg leading-tight">{t.title}</div>
                  <div className="text-sm text-muted-foreground mt-1 font-bangla">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Privacy note */}
        <Section title="গোপনীয়তা" eyebrow="Privacy">
          <div className="rounded-2xl border border-border bg-card p-6 flex items-start gap-4">
            <div className="size-10 rounded-xl bg-emerald-500/10 text-emerald-600 grid place-items-center shrink-0">
              <Shield className="size-5" />
            </div>
            <div className="text-sm font-bangla leading-relaxed text-foreground/80">
              AI কোনো account, email, phone নাম্বার সংগ্রহ করে না। আপনার সব data আপনার browser-এ
              থাকে — আমাদের server-এ কিছু যায় না। API Key দিলে সেটা সরাসরি আপনার browser থেকে
              Google Gemini-তে যায়, AI শুধু forward করে। কোনো tracker, কোনো বিজ্ঞাপন নেই।
            </div>
          </div>
        </Section>

        {/* Final CTA */}
        <section className="mt-16 text-center">
          <div className="rounded-3xl border border-border bg-card p-10 md:p-14 shadow-soft">
            <div className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
              এবার শুরু
            </div>
            <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">
              এতটুকু জানলেই <span className="italic text-primary">যথেষ্ট</span>।
            </h2>
            <p className="mt-4 text-foreground/70 font-bangla max-w-lg mx-auto">
              বাকিটা করতে করতে শিখবেন। প্রশ্ন এলে এই page-এ ফিরে আসুন।
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/roadmap"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-primary transition shadow-elevated"
              >
                বিসমিল্লাহ — রোডম্যাপ দেখি
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-background hover:border-primary/50 transition text-sm font-medium"
              >
                হোম-এ ফিরি
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function SubGroup({
  label,
  caption,
  children,
}: {
  label: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 first:mt-0">
      <div className="flex items-baseline gap-3 mb-3">
        <div className="font-display text-xl leading-tight">{label}</div>
        <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-bold">
          {caption}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}

function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <div className="mb-6">
        <div className="text-[10px] uppercase tracking-[0.28em] text-primary font-bold">
          {eyebrow}
        </div>
        <h2 className="font-display text-3xl md:text-4xl mt-2 leading-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
  to,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="group flex gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-soft transition"
    >
      <div className="size-10 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-display text-lg leading-tight group-hover:text-primary transition">
          {title}
        </div>
        <div className="text-sm text-muted-foreground mt-1 font-bangla">{desc}</div>
      </div>
    </Link>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-2xl border border-border bg-card overflow-hidden">
      <summary className="flex items-center justify-between gap-3 p-5 cursor-pointer hover:bg-accent/40 transition list-none">
        <span className="font-display text-lg leading-tight font-bangla">{q}</span>
        <span className="size-6 rounded-full bg-primary/10 text-primary grid place-items-center shrink-0 group-open:rotate-45 transition text-lg font-bold">
          +
        </span>
      </summary>
      <div className="px-5 pb-5 text-sm font-bangla text-foreground/80 leading-relaxed">
        {children}
      </div>
    </details>
  );
}
