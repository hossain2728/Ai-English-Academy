import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  GraduationCap,
  Globe2,
  Brain,
  Coins,
  Heart,
  Quote,
  ShieldAlert,
} from "lucide-react";

export const Route = createFileRoute("/_app/why-english/")({
  head: () => ({
    meta: [
      { title: "কেন ইংরেজি শিখব — গবেষণা যা বলে | AI" },
      {
        name: "description",
        content:
          "ইংরেজি জানলে বাংলাদেশে গড়ে ~৩০% বেশি বেতন (Euromonitor/British Council)। বিশ্বের ~৮০% গবেষণা ইংরেজিতে (Scopus)। Bilingualism দেয় dementia-র ৪-৫ বছর সুরক্ষা (Bialystok 2007)। সব দাবি — যাচাইযোগ্য উৎসসহ।",
      },
      { property: "og:title", content: "কেন ইংরেজি শিখব — গবেষণা যা বলে" },
      {
        property: "og:description",
        content: "৬টি কারণ, সব যাচাইযোগ্য উৎসসহ। কোনো অতিরঞ্জন নেই — শুধু গবেষণা।",
      },
    ],
  }),
  component: WhyEnglishPage,
});

// ============================================================
// CEFR ladder — realistic hours (Cambridge English guided-study
// benchmark, adjusted ~1.3× for Bengali L1 as per FSI category
// difficulty). Aligned with src/data/roadmap.ts to avoid mixed
// signals across pages.
// ============================================================
const CEFR = [
  {
    level: "A1",
    label: "প্রাথমিক পরিচয়",
    labelEn: "Beginner",
    hours: "~২৫০–৩০০ ঘণ্টা",
    can: "নিজের পরিচয়, পরিবার, প্রিয় খাবার — সহজ পরিচিত বাক্যে বলতে পারবেন। ধীরে বললে বুঝবেন।",
    example: '"Hello, my name is Rashed. I am from Dhaka."',
  },
  {
    level: "A2",
    label: "দৈনন্দিন কাজ চালানো",
    labelEn: "Elementary",
    hours: "~৩০০–৩৫০ ঘণ্টা",
    can: "দোকান, রিকশা, রেস্টুরেন্টে চালিয়ে নিতে পারবেন। ছোট ইমেইল/মেসেজ লিখতে পারবেন।",
    example: '"How much is this? Can you give me a discount?"',
  },
  {
    level: "B1",
    label: "স্বাধীন ব্যবহারকারী",
    labelEn: "Intermediate",
    hours: "~৩০০–৪০০ ঘণ্টা",
    can: "নিজের মতামত, স্বপ্ন, অভিজ্ঞতা গুছিয়ে বলতে পারবেন। বিদেশি বন্ধুর সাথে সহজে গল্প।",
    example: '"I think renewable energy is very important for Bangladesh because…"',
  },
  {
    level: "B2",
    label: "প্রফেশনাল কাজ",
    labelEn: "Upper-Intermediate",
    hours: "~৩৫০–৪৫০ ঘণ্টা",
    can: "চাকরির ইন্টারভিউ, মিটিং, প্রেজেন্টেশন। জটিল বিষয়ে যুক্তি দিতে পারবেন। IELTS ~৬.৫।",
    example: '"While cost is a concern, the long-term benefits clearly outweigh it."',
  },
  {
    level: "C1",
    label: "উন্নত",
    labelEn: "Advanced",
    hours: "~৪৫০+ ঘণ্টা",
    can: "বিদেশের বিশ্ববিদ্যালয়, MNC-তে সাবলীল। সূক্ষ্ম রসিকতা, ব্যঙ্গ — সব ধরতে পারবেন। IELTS ~৭.০–৭.৫।",
    example: "\"That's a compelling argument, but let me play devil's advocate for a moment…\"",
  },
  {
    level: "C2",
    label: "দক্ষ",
    labelEn: "Proficient",
    hours: "নিয়মিত ব্যবহারে বছর পেরিয়ে",
    can: "কার্যত native-এর মতো। প্রায় কোনো শব্দই নতুন লাগবে না।",
    example: '"The nuance you\'re alluding to is precisely why the policy backfired."',
  },
];

// ============================================================
// Benefits — every claim has a real, checkable citation.
// No fabricated "reports". No inflated ranges.
// ============================================================
const BENEFITS = [
  {
    icon: Coins,
    title: "গড়ে ~৩০% বেশি আয়",
    body: "Euromonitor International-এর গবেষণা (British Council-এর জন্য, ২০১২): বাংলাদেশে ইংরেজি জানা কর্মীরা একই পদে গড়ে প্রায় ৩০% বেশি বেতন পান। MNC ও রপ্তানি খাতে পার্থক্য আরও বেশি।",
    source: "Euromonitor / British Council — English Effect (2012)",
    sourceUrl:
      "https://www.britishcouncil.org/research-policy-insight/policy-reports/english-effect",
  },
  {
    icon: Briefcase,
    title: "চাকরির বাজারে বাড়তি সুবিধা",
    body: "বাংলাদেশে corporate, NGO, IT, রপ্তানি ও পর্যটন — প্রায় প্রতিটি ভালো চাকরিতে English communication চাওয়া হয়। ইংরেজি জানলে যেসব চাকরিতে apply করাই যেত না, সেসব দরজা খুলে যায়।",
    source: "British Council BD — English Effect report",
    sourceUrl: "https://www.britishcouncil.org.bd/en/programmes/english/english-effect",
  },
  {
    icon: GraduationCap,
    title: "উচ্চশিক্ষার সুযোগ",
    body: "USA, UK, Canada, Australia, Germany — বিশ্বের প্রায় প্রতিটি scholarship ও admission-এ IELTS/TOEFL লাগে। B2 (IELTS ৬.৫) পৌঁছালে বেশিরভাগ scholarship-এর ন্যূনতম ভাষা-শর্ত পূরণ হয়ে যায়।",
    source: "IELTS / IDP — official minimum score requirements",
    sourceUrl: "https://www.ielts.org/for-organisations/setting-ielts-scores",
  },
  {
    icon: Globe2,
    title: "বিশ্বের জ্ঞানের দরজা",
    body: "Scopus-এর data অনুযায়ী বিশ্বের ~৮০% peer-reviewed গবেষণা ইংরেজিতে প্রকাশিত হয় (Van Weijen, 2012)। ইন্টারনেটের top-১০ million ওয়েবসাইটের প্রায় অর্ধেক (~৪৯%) English-এ (W3Techs, 2024)।",
    source: "Van Weijen (2012), Research Trends · W3Techs (2024)",
    sourceUrl: "https://www.researchtrends.com/researchtrends/vol1/iss31/7/",
  },
  {
    icon: Brain,
    title: "মস্তিষ্কের জন্য জিম",
    body: "Bialystok, Craik ও Freedman-এর গবেষণা (Neuropsychologia, ২০০৭): নিয়মিত দুই ভাষা ব্যবহার করা মানুষদের dementia-র লক্ষণ গড়ে ৪.১ বছর পরে দেখা যায়। নতুন ভাষা শেখা = brain-এ নতুন highway তৈরি।",
    source: "Bialystok et al., Neuropsychologia (2007)",
    sourceUrl: "https://doi.org/10.1016/j.neuropsychologia.2006.10.009",
  },
  {
    icon: Heart,
    title: "আত্মবিশ্বাস",
    body: "সবচেয়ে বড় লাভটা কোনো গবেষণায় নেই — বিদেশি এলে লজ্জায় সরে যেতে হবে না, ছেলে-মেয়েকে ইংরেজি হোমওয়ার্কে সাহায্য করতে পারবেন, বিদেশে আত্মীয়ের সাথে ভিডিও কলে গর্বে বলতে পারবেন।",
    source: "আপনার নিজের অভিজ্ঞতা",
    sourceUrl: null,
  },
];

function WhyEnglishPage() {
  return (
    <main className="flex-1 overflow-y-auto paper-grain">
      {/* ===== Hero ===== */}
      <section className="relative">
        <div className="absolute -top-24 -right-24 size-96 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-14 md:pt-24 relative">
          <div className="eyebrow font-bangla inline-flex items-center gap-2">
            <BadgeCheck className="size-3.5" />
            গবেষণা যা বলে — অনুমান নয়
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] mt-6">
            ইংরেজি শেখা মানে <br />
            <span className="italic text-primary">শুধু ভাষা না —</span> <br />
            নতুন একটা জীবন।
          </h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl font-bangla leading-relaxed">
            "কেন শিখব?" — এই প্রশ্নের উত্তর যদি স্পষ্ট না থাকে, শেখা মাঝপথে থেমে যায়। নিচের ৬টি
            কারণ — প্রতিটির পাশে যাচাইযোগ্য উৎস দেওয়া। কিছু বানানো নেই।
          </p>
        </div>
      </section>

      {/* ===== Benefits — 6 grid ===== */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-4">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <article
                key={b.title}
                className="p-6 rounded-2xl bg-card border border-border shadow-soft"
              >
                <div className="flex items-start gap-4">
                  <div className="size-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl leading-tight">{b.title}</h3>
                    <p className="text-sm text-foreground/75 mt-2 font-bangla leading-relaxed">
                      {b.body}
                    </p>
                    <div className="mt-3 text-[11px] uppercase tracking-wider text-primary/70 font-semibold">
                      {b.sourceUrl ? (
                        <a
                          href={b.sourceUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1 hover:underline underline-offset-4"
                        >
                          উৎস: {b.source}
                          <ArrowUpRight className="size-3" />
                        </a>
                      ) : (
                        <>উৎস: {b.source}</>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ===== Honest expectations ===== */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="rounded-3xl border-2 border-dashed border-primary/30 bg-card p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="size-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
              <ShieldAlert className="size-5" />
            </div>
            <div>
              <div className="eyebrow font-bangla">সৎ প্রত্যাশা</div>
              <h2 className="font-display text-2xl md:text-3xl mt-2 leading-tight">
                "৩০ দিনে ইংরেজি" — এটা মিথ্যা। আমরা সেটা বলব না।
              </h2>
              <p className="mt-4 font-bangla text-foreground/75 leading-relaxed text-[15px]">
                Cambridge English-এর গবেষণা অনুযায়ী প্রতিটি CEFR ধাপ উঠতে গড়ে ~২০০ ঘণ্টা guided
                study লাগে। বাংলাভাষীর জন্য (বাংলা ও ইংরেজির কাঠামোগত পার্থক্যের কারণে) সেটা
                ১.৩×–১.৫× বেশি ধরাই বাস্তবসম্মত। অর্থাৎ:
              </p>
              <ul className="mt-4 space-y-2 font-bangla text-sm text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  দিনে ১ ঘণ্টা দিলে <b>শক্ত A2</b> ও B1-এ প্রবেশ ~৬ মাসে
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  পূর্ণ B1 (স্বাধীন কথোপকথন) — আরও ১–১.৫ বছর
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  B2 (প্রফেশনাল, IELTS ৬.৫) — মোট ২.৫–৩ বছর, ধারাবাহিকভাবে
                </li>
              </ul>
              <p className="mt-4 font-bangla text-sm text-foreground/70 leading-relaxed">
                কম সময়ে এটা কেউ দিলে হয় সে জানে না, নয়তো মিথ্যা বলছে। আমরা কোনোটাই করি না।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CEFR ladder ===== */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="text-center mb-10">
          <div className="eyebrow font-bangla">আপনি এখন কোথায়, যাবেন কোথায়?</div>
          <h2 className="font-display text-3xl md:text-5xl mt-3 leading-tight">
            CEFR-এর <span className="italic text-primary">৬টা</span> ধাপ
          </h2>
          <p className="text-sm text-foreground/70 mt-4 font-bangla max-w-xl mx-auto leading-relaxed">
            Council of Europe-এর স্বীকৃত ৬-স্তরের ভাষাদক্ষতা মাপকাঠি। বিশ্বের সব বড় পরীক্ষা (IELTS,
            TOEFL, Cambridge) এখান থেকেই আসে। ঘণ্টার হিসাব — Cambridge English-এর guided-study
            benchmark (বাংলাভাষীর জন্য ~১.৩× stretch)।
          </p>
        </div>

        <div className="space-y-3">
          {CEFR.map((c, i) => (
            <article
              key={c.level}
              className="p-5 rounded-2xl bg-card border border-border flex items-start gap-4"
            >
              <div className="text-center shrink-0 w-16">
                <div className="font-display text-3xl text-primary">{c.level}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                  ধাপ {i + 1}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-display text-lg leading-tight">
                    {c.label}
                    <span className="text-xs text-muted-foreground font-sans font-normal ml-2">
                      · {c.labelEn}
                    </span>
                  </h3>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium font-bangla">
                    {c.hours}
                  </span>
                </div>
                <p className="text-sm mt-2 font-bangla text-foreground/75 leading-relaxed">
                  {c.can}
                </p>
                <div className="mt-2 text-sm italic text-foreground/80 border-l-2 border-primary/30 pl-3">
                  {c.example}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Learning science — dark editorial band ===== */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="gradient-ink text-background rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 size-64 rounded-full bg-primary/25 blur-3xl pointer-events-none" />
          <Quote className="size-8 text-primary opacity-70" />
          <blockquote className="font-display text-3xl md:text-4xl mt-4 leading-tight italic">
            "একদিনে ৩ ঘণ্টা"-এর চেয়ে <br />
            <span className="not-italic text-primary">"প্রতিদিন ২০ মিনিট"</span> বহুগুণ ভালো।
          </blockquote>
          <div className="mt-6 space-y-4 opacity-90 font-bangla leading-relaxed text-[15px]">
            <p>
              <b className="text-primary not-italic">Spacing effect</b> (Ebbinghaus, ১৮৮৫) —
              মস্তিষ্ক তথ্য ভুলে যায় ঘণ্টায়-দিনে। বারবার মনে করালে সেটা "long-term memory"-তে বসে।
              প্রতিদিন অল্প-অল্প রিভিশন = সেরা কৌশল।
            </p>
            <p>
              <b className="text-primary not-italic">Input hypothesis</b> (Krashen, ১৯৮৫) — নিয়ম
              মুখস্থ করে নয়, <em>কথা শুনে-শুনে</em> এবং <em>বই-গল্প পড়ে-পড়ে</em> ভাষা আসে।
            </p>
            <p>
              <b className="text-primary not-italic">Output hypothesis</b> (Swain, ১৯৮৫) — না বললে
              ভাষা জীবন্ত হয় না। দিনে ৫টা বাক্য নিজে তৈরি করে বলুন — আয়নার সামনে, একা ঘরে — লজ্জা
              করার কেউ নেই।
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-background text-foreground font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition"
            >
              ২৪-সপ্তাহের বিস্তারিত রোডম্যাপ
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/scenarios"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-background/30 font-semibold text-sm hover:bg-background/10 transition"
            >
              বাস্তব পরিস্থিতি দেখি
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Bangladesh reality ===== */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="rounded-2xl bg-card border border-border p-6 md:p-8">
          <div className="eyebrow font-bangla">শেষ কথা</div>
          <h3 className="font-display text-2xl md:text-3xl mt-3">বাংলাদেশের বাস্তবতা</h3>
          <p className="mt-4 font-bangla leading-relaxed text-foreground/75">
            EF English Proficiency Index ২০২৩ অনুযায়ী বাংলাদেশ ১১৩টি দেশের মধ্যে{" "}
            <b className="text-foreground">৬০তম</b> — "Moderate Proficiency"। ভারত (৩৫তম) ও নেপাল
            (৫৩তম) আমাদের চেয়ে এগিয়ে। এর অর্থ — যে-ই B1 লেভেলে পৌঁছাবে, সে-ই দেশের গড়ের অনেক উপরে
            থাকবে। আর সেটাই আপনাকে আলাদা করবে চাকরির বাজারে, বিদেশে, জীবনে।
          </p>
          <div className="mt-4 text-[11px] uppercase tracking-wider text-primary/70 font-semibold">
            <a
              href="https://www.ef.com/wwen/epi/regions/asia/bangladesh/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 hover:underline underline-offset-4"
            >
              উৎস: EF EPI 2023
              <ArrowUpRight className="size-3" />
            </a>
          </div>
          <p className="mt-6 font-bangla text-sm text-primary font-semibold">
            শুরুটাই সবচেয়ে কঠিন। কিন্তু আপনি এখানে এসেছেন — মানে আপনি শুরু করেই ফেলেছেন। 🌱
          </p>
        </div>
      </section>
    </main>
  );
}
