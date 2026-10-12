import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, CheckCircle2, ArrowRight, BookOpen, Headphones, Zap, Search } from "lucide-react";
import {
  CEFR_LEVELS,
  TIMELINE_TABLE,
  FOUR_STRANDS,
  ROADMAP_24,
  VOCAB_GOALS,
  EVIDENCE,
  STAGES,
  STAGE_2_MODULES,
  STAGE_3_MODULES,
  OXFORD_MAPPING,
  OXFORD_ACTUAL_TOTAL,
  JOURNEY_TOTAL_WEEKS,
  type WeekPlan,
} from "@/data/roadmap";

export const Route = createFileRoute("/_app/roadmap/")({
  head: () => ({
    meta: [
      {
        title: "রোডম্যাপ — A0 থেকে B2 (প্রফেশনাল) পর্যন্ত সম্পূর্ণ পথ | GurujiGuide",
      },
      {
        name: "description",
        content:
          "শূন্য থেকে B2 পর্যন্ত ৩ ধাপে বাস্তবসম্মত রোডম্যাপ। Cambridge English, CEFR, Paul Nation, Krashen-এর গবেষণা-ভিত্তিক। Oxford ২,৯১৩ শব্দ কোন ধাপে কীভাবে শেখানো হয়, সপ্তাহ-ভিত্তিক প্ল্যান, প্রতিটা milestone-এর সময় ও ঘণ্টা — সব এক জায়গায়।",
      },
      { property: "og:title", content: "রোডম্যাপ — A0 থেকে B2 সম্পূর্ণ পথ" },
      {
        property: "og:description",
        content: "৩ ধাপ · ৭৬ সপ্তাহ · ~৫৭০ ঘণ্টা · ২,৯১৩ Oxford শব্দ — সৎ সময়সূচী।",
      },
    ],
  }),
  component: RoadmapPage,
});

function RoadmapPage() {
  return (
    <main className="flex-1 overflow-y-auto">
      {/* ============ HERO ============ */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <div className="text-[11px] uppercase tracking-[0.28em] text-primary font-semibold">
            🗺️ প্রমাণ-ভিত্তিক রোডম্যাপ
          </div>
          <h1 className="font-display text-4xl md:text-6xl mt-3 leading-[1.05]">
            শূন্য থেকে <em className="italic text-primary">B2</em> — <br />
            সম্পূর্ণ পথ, ৩ ধাপে।
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl font-bangla leading-relaxed text-[1.05rem]">
            দিনে ১ ঘণ্টা থেকে শুরু করে, ধাপে ধাপে ৯০ মিনিট — মোট{" "}
            <strong>~৭৬ সপ্তাহ (১.৫ বছর)</strong> ও <strong>~৫৭০ ঘণ্টা</strong>। শেষে ইনশাআল্লাহ
            ইন্টারভিউ, মিটিং, professional email, BBC/podcast — সব সামলাতে পারবেন। এটা আমাদের বানানো
            নয় —{" "}
            <strong className="text-foreground">
              Cambridge English, Council of Europe (CEFR), Paul Nation, Krashen
            </strong>{" "}
            ও বাংলাদেশের গবেষণার ভিত্তিতে সাজানো।
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <HeroStat n="৩" label="ধাপ" />
            <HeroStat n={numBn(JOURNEY_TOTAL_WEEKS)} label="সপ্তাহ" />
            <HeroStat n="৫৭০" label="মোট ঘণ্টা" />
            <HeroStat n={numBn(OXFORD_ACTUAL_TOTAL)} label="Oxford শব্দ" />
          </div>

          <p className="mt-6 text-xs text-muted-foreground font-bangla leading-relaxed max-w-2xl">
            <strong>সৎ কথা:</strong> এটা "৩ মাসে ইংরেজি" ধরনের প্রতিশ্রুতি নয়। Cambridge-এর হিসাব
            অনুযায়ী প্রতি CEFR level উঠতে ~২০০ ঘণ্টা লাগে; বাংলাভাষীর জন্য ৩০–৫০% বেশি — সেটাই
            এখানে দেখানো।
          </p>
        </div>
      </section>

      {/* ============ 3-STAGE OVERVIEW ============ */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <SectionHeader
          eyebrow="সম্পূর্ণ পথ এক নজরে"
          title="৩ ধাপ, A0 → B2"
          sub="প্রতি ধাপে দৈনিক সময় একটু বাড়বে, কিন্তু গতি কখনোই আপনাকে overwhelm করবে না। ধাপ শেষ হলেই পরের ধাপ, আগে না।"
        />
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {STAGES.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-border bg-card p-5 flex flex-col"
              style={{
                borderTopWidth: "3px",
                borderTopColor: `var(--color-${s.color})`,
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`size-9 rounded-lg grid place-items-center font-display-en font-bold text-${s.color} text-lg leading-none`}
                  style={{
                    background: `color-mix(in oklch, var(--color-${s.color}) 15%, transparent)`,
                  }}
                >
                  {s.n}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Stage {s.n} · {s.codeEn}
                  </div>
                  <div className="font-semibold text-sm font-bangla">{s.codeBn}</div>
                </div>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {s.fromCefr}
                </span>
                <ArrowRight className="size-3 text-muted-foreground" />
                <span className={`text-sm font-bold text-${s.color}`}>{s.toCefr}</span>
              </div>
              <dl className="mt-4 space-y-2 text-xs font-bangla">
                <MetaRow k="সময়কাল" v={`${numBn(s.weeks)} সপ্তাহ`} />
                <MetaRow k="মোট ঘণ্টা" v={s.hoursTotal} />
                <MetaRow k="দৈনিক" v={s.dailyPlan} />
                <MetaRow k="Oxford শব্দ" v={s.oxfordSlice} />
              </dl>
              <p className="mt-4 text-sm font-bangla text-muted-foreground leading-relaxed">
                {s.goalBn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ TIMELINE TABLE ============ */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <SectionHeader
          eyebrow="বাস্তব সময়ের হিসাব"
          title="দিনে কত সময় দিলে কতদিনে B2?"
          sub="Cambridge English (২০০ ঘণ্টা / level) × বাংলাভাষীর জন্য ১.৩৫× stretch = বাস্তব সময়।"
        />
        <div className="mt-6 rounded-2xl border border-border overflow-hidden bg-card">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr className="text-left">
                <th className="p-3 font-semibold">দৈনিক সময়</th>
                <th className="p-3 font-semibold">B1 (স্বাধীন) পর্যন্ত</th>
                <th className="p-3 font-semibold">B2 (professional) পর্যন্ত</th>
                <th className="p-3 font-semibold font-bangla">নোট</th>
              </tr>
            </thead>
            <tbody>
              {TIMELINE_TABLE.map((r) => (
                <tr
                  key={r.daily}
                  className={`border-t border-border ${r.recommended ? "bg-primary/5" : ""}`}
                >
                  <td className="p-3 font-semibold">
                    {r.daily}
                    {r.recommended && (
                      <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-primary text-primary-foreground uppercase tracking-wider">
                        Recommended
                      </span>
                    )}
                  </td>
                  <td className="p-3">{r.toB1}</td>
                  <td className="p-3">{r.toB2}</td>
                  <td className="p-3 text-muted-foreground font-bangla">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground font-bangla">
          সূত্র: Cambridge English (guided learning hours); US FSI বাংলা → English professional
          working proficiency ~১,১০০ ঘণ্টা।
        </p>
      </section>

      {/* ============ OXFORD WORD MAPPING ============ */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <SectionHeader
          eyebrow={`Oxford ${numBn(OXFORD_ACTUAL_TOTAL)} শব্দ — কোথায় কীভাবে`}
          title="প্রতিটা শব্দ কোন ধাপে শিখবেন?"
          sub="Oxford-এর অফিসিয়াল CEFR-ভিত্তিক তালিকা (Oxford Learner's Dictionaries)। প্রতিটার বাংলা অর্থ, উচ্চারণ, উদাহরণ ও synonyms — সব আছে vocabulary পেজে।"
        />
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {OXFORD_MAPPING.map((m) => {
            const pct = Math.round((m.count / OXFORD_ACTUAL_TOTAL) * 100);
            return (
              <div
                key={m.level}
                className="rounded-2xl border border-border bg-card p-5 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`px-2.5 py-1 rounded-md font-display font-bold text-${m.color}`}
                    style={{
                      background: `color-mix(in oklch, var(--color-${m.color}) 15%, transparent)`,
                    }}
                  >
                    {m.level}
                  </div>
                  <div className="text-xs text-muted-foreground">{pct}%</div>
                </div>
                <div className="mt-3 font-display text-3xl">{numBn(m.count)}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  শব্দ
                </div>
                <div className="mt-3 text-[11px] font-bangla text-primary font-semibold">
                  {m.stage}
                </div>
                <p className="mt-2 text-xs font-bangla text-muted-foreground leading-relaxed">
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Total bar */}
        <div className="mt-6 rounded-2xl border border-border bg-card p-5 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
              সর্বমোট
            </div>
            <div className="font-display text-3xl">{numBn(OXFORD_ACTUAL_TOTAL)} শব্দ</div>
            <p className="text-xs text-muted-foreground font-bangla mt-1">
              সব শব্দে ইতিমধ্যেই বাংলা অর্থ, IPA উচ্চারণ, POS, উদাহরণ ও synonyms যোগ করা আছে।
            </p>
          </div>
          <Link
            to="/vocabulary"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition text-sm shrink-0"
          >
            <Search className="size-4" /> সব শব্দ ব্রাউজ করুন
          </Link>
        </div>
      </section>

      {/* ============ CEFR LADDER ============ */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <SectionHeader
          eyebrow="আপনি এখন কোথায়?"
          title="CEFR সিঁড়ি — বিশ্বজুড়ে ভাষার মান"
          sub={'Council of Europe-এর ৬টি স্তর। প্রতিটার নিজস্ব "can-do" বেঞ্চমার্ক আছে।'}
        />
        <div className="mt-6 space-y-2.5">
          {CEFR_LEVELS.map((lvl) => (
            <div
              key={lvl.code}
              className="rounded-xl border border-border bg-card p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex items-center gap-3 md:w-48 shrink-0">
                <div
                  className={`size-12 rounded-lg grid place-items-center font-display text-xl font-bold text-${lvl.color}`}
                  style={{
                    background: `color-mix(in oklch, var(--color-${lvl.color}) 15%, transparent)`,
                  }}
                >
                  {lvl.code}
                </div>
                <div>
                  <div className="font-semibold text-sm font-bangla">{lvl.labelBn}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {lvl.labelEn}
                  </div>
                </div>
              </div>
              <div className="flex-1 font-bangla text-sm leading-relaxed text-muted-foreground">
                {lvl.canDoBn}
              </div>
              <div className="md:w-40 shrink-0 md:text-right">
                <div className="text-xs text-muted-foreground font-bangla">এই স্তরে যেতে</div>
                <div className="font-semibold text-sm">{lvl.hoursBengali}</div>
                <div className="text-[10px] text-muted-foreground/70 mt-0.5">
                  cumulative: {lvl.cumulativeHours}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FOUR STRANDS ============ */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <SectionHeader
          eyebrow="পড়ানোর বৈজ্ঞানিক পদ্ধতি"
          title="Paul Nation-এর চার-স্তম্ভ পদ্ধতি"
          sub="একটা ভালো course-এ চারটা অংশ সমান ভাগে থাকতে হবে — না হলে শেখা এক-পাক্ষিক হয়ে যায়।"
        />
        <div className="mt-6 grid md:grid-cols-2 gap-3">
          {FOUR_STRANDS.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <div className="text-3xl">{s.emoji}</div>
                <div className="text-[10px] px-2 py-1 rounded bg-primary/10 text-primary uppercase tracking-wider font-semibold">
                  {s.percent}%
                </div>
              </div>
              <div className="mt-3 font-display text-xl">{s.titleBn}</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">
                {s.titleEn}
              </div>
              <p className="mt-3 font-bangla text-sm leading-relaxed text-muted-foreground">
                {s.descBn}
              </p>
              <ul className="mt-4 space-y-1">
                {s.examples.map((ex) => (
                  <li
                    key={ex}
                    className="text-xs text-muted-foreground flex items-start gap-1.5 font-bangla"
                  >
                    <span className="text-primary mt-0.5">•</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ============ VOCAB GOALS TABLE ============ */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <SectionHeader
          eyebrow="শব্দভাণ্ডার লক্ষ্য"
          title="কতগুলো শব্দ শিখলে কী পারবেন?"
          sub="Paul Nation (2006) — Cambridge University Press-এর সবচেয়ে বেশি cited গবেষণা।"
        />
        <div className="mt-6 rounded-2xl border border-border overflow-hidden bg-card">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr className="text-left">
                <th className="p-3 font-semibold">শব্দ</th>
                <th className="p-3 font-semibold font-bangla">লক্ষ্য</th>
                <th className="p-3 font-semibold">Coverage</th>
                <th className="p-3 font-semibold font-bangla">নোট</th>
              </tr>
            </thead>
            <tbody>
              {VOCAB_GOALS.map((v) => (
                <tr
                  key={v.size}
                  className={`border-t border-border ${v.isCurrent ? "bg-primary/5" : ""}`}
                >
                  <td className="p-3 font-semibold">
                    {v.size}
                    {v.isCurrent && (
                      <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-primary text-primary-foreground uppercase tracking-wider">
                        আমাদের লক্ষ্য
                      </span>
                    )}
                  </td>
                  <td className="p-3 font-bangla">
                    {v.goalBn}
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
                      {v.goalEn}
                    </div>
                  </td>
                  <td className="p-3">{v.coverage}</td>
                  <td className="p-3 text-muted-foreground font-bangla text-xs">{v.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ============ STAGE 1: SAMPLE WEEKS + LINK ============ */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <div
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] font-bold px-3 py-1.5 rounded-full text-a1"
          style={{ background: "color-mix(in oklch, var(--color-a1) 15%, transparent)" }}
        >
          <span>Stage 1 · Foundation</span>
        </div>
        <SectionHeader
          eyebrow="সপ্তাহ-ভিত্তিক প্ল্যানের নমুনা"
          title="প্রথম ৩ সপ্তাহ দেখে নিন — কীভাবে সাজানো"
          sub="প্রতিটা সপ্তাহে ঠিক কতগুলো শব্দ, কত মিনিট listening, কোন grammar, কোন speaking task — সব আগে থেকেই ঠিক করা। পুরো ২৪ সপ্তাহের বিস্তারিত পাবেন পাঠ পেজে।"
        />

        <div className="mt-8 grid gap-2.5">
          {ROADMAP_24.slice(0, 3).map((w) => (
            <WeekCard key={w.week} w={w} />
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card p-5 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
              সম্পূর্ণ curriculum
            </div>
            <div className="font-display text-xl mt-1">
              বাকি ২১ সপ্তাহ + প্রতিদিনের পাঠ পাঠ পেজে
            </div>
            <p className="text-xs text-muted-foreground font-bangla mt-1 leading-relaxed">
              সপ্তাহ ৪ থেকে ২৪ পর্যন্ত প্রতিটার বিস্তারিত plan, দিন-ভিত্তিক activity, audio ও
              practice — সব পাঠ পেজে।
            </p>
          </div>
          <Link
            to="/grammar"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition text-sm shrink-0"
          >
            সম্পূর্ণ curriculum দেখুন <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* ============ STAGE 2: B1 MASTERY ============ */}
      <StageModulesSection
        stageN={2}
        stageEn="B1 Mastery"
        stageBn="স্বাধীন ব্যবহারকারী"
        color="b1"
        eyebrow="সপ্তাহ ২৫–৪৮ — মাস ৭ থেকে ১২"
        title="Stage 2 — B1-এ শক্ত ভিত্তি"
        sub="Stage 1 শেষ করে পরের ৬ মাস। দৈনিক সময় ৭৫ মিনিট। প্রতি মাসের একটা focus আছে — জোর করে না, সহজভাবে।"
        modules={STAGE_2_MODULES}
      />

      {/* ============ STAGE 3: B2 PROFESSIONAL ============ */}
      <StageModulesSection
        stageN={3}
        stageEn="B2 Professional"
        stageBn="প্রফেশনাল দক্ষতা"
        color="b2"
        eyebrow="সপ্তাহ ৪৯–৭৬ — মাস ১৩ থেকে ২১"
        title="Stage 3 — Professional B2"
        sub="Stage 2 শেষে যারা IELTS ৬.৫+ / Cambridge FCE / অফিসিয়াল English professional job লক্ষ্য করছেন — এই ধাপ। দৈনিক ৯০ মিনিট।"
        modules={STAGE_3_MODULES}
      />

      {/* ============ EVIDENCE ============ */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <SectionHeader
          eyebrow="উৎস ও প্রমাণ"
          title="আমরা কোথা থেকে এই তথ্য নিলাম?"
          sub="প্রতিটা সংখ্যা, প্রতিটা নিয়ম — নিচের কোনো না কোনো গবেষণা থেকে। মিথ্যা তথ্য দেব না, ইনশাআল্লাহ।"
        />
        <ul className="mt-6 space-y-2">
          {EVIDENCE.map((e) => (
            <li
              key={e.who}
              className="rounded-xl border border-border bg-card p-4 flex flex-col md:flex-row md:items-start gap-2 md:gap-4"
            >
              <div className="md:w-56 shrink-0 font-semibold text-sm">{e.who}</div>
              <div className="flex-1 font-bangla text-sm text-muted-foreground leading-relaxed">
                {e.what}
              </div>
              <a
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-primary hover:underline shrink-0"
              >
                উৎস দেখুন →
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ CTA ============ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12">
          <div className="text-[11px] uppercase tracking-[0.28em] opacity-70">শুরু করুন এখনই</div>
          <h3 className="font-display text-3xl md:text-4xl mt-3">
            আজ Stage 1 · সপ্তাহ ১ · দিন ১ — <br />
            মাত্র ১০ মিনিটের listening।
          </h3>
          <p className="mt-4 max-w-xl opacity-90 font-bangla">
            আল্লাহর নামে শুরু করুন। পুরো ১.৫ বছরের পথ প্রস্তুত — শুধু প্রতিদিন এক পাতা করে হাঁটুন,
            ইনশাআল্লাহ পৌঁছাবেন।
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/pronunciation"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-foreground text-primary font-medium hover:opacity-90 transition"
            >
              সাউন্ড দিয়ে শুরু করি <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/vocabulary"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-primary-foreground/30 hover:bg-primary-foreground/10 transition"
            >
              <Search className="size-4" /> Oxford শব্দ ব্রাউজ
            </Link>
            <Link
              to="/grammar"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-primary-foreground/30 hover:bg-primary-foreground/10 transition"
            >
              <Zap className="size-4" /> ৩০টি ফর্মুলা
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// ============ HELPERS ============

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.28em] text-primary font-semibold">
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl md:text-4xl mt-2 leading-tight">{title}</h2>
      <p className="text-muted-foreground mt-3 font-bangla leading-relaxed max-w-2xl">{sub}</p>
    </div>
  );
}

function HeroStat({ n, label }: { n: string; label: string }) {
  return (
    <div className="p-4 rounded-2xl bg-card border border-border">
      <div className="font-display text-3xl text-primary">{n}</div>
      <div className="text-xs text-muted-foreground mt-1 font-bangla">{label}</div>
    </div>
  );
}

function MetaRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-muted-foreground shrink-0">{k}</dt>
      <dd className="text-right font-medium">{v}</dd>
    </div>
  );
}

function StageModulesSection({
  stageN,
  stageEn,
  stageBn,
  color,
  eyebrow,
  title,
  sub,
  modules,
}: {
  stageN: number;
  stageEn: string;
  stageBn: string;
  color: "b1" | "b2";
  eyebrow: string;
  title: string;
  sub: string;
  modules: readonly {
    month: string;
    focus: string;
    milestone: string;
    isCheckpoint?: boolean;
  }[];
}) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-14">
      <div
        className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] font-bold px-3 py-1.5 rounded-full text-${color}`}
        style={{
          background: `color-mix(in oklch, var(--color-${color}) 15%, transparent)`,
        }}
      >
        <span>
          Stage {stageN} · {stageEn}
        </span>
        <span className="opacity-60">•</span>
        <span className="font-bangla normal-case tracking-normal">{stageBn}</span>
      </div>
      <SectionHeader eyebrow={eyebrow} title={title} sub={sub} />
      <div className="mt-6 grid gap-2.5">
        {modules.map((m) => (
          <div
            key={m.month}
            className={`rounded-xl border p-4 md:p-5 grid md:grid-cols-[auto_1fr_auto] gap-3 md:gap-5 items-start ${
              m.isCheckpoint ? "bg-primary/5 border-primary/30" : "bg-card border-border"
            }`}
          >
            <div
              className={`inline-flex items-center px-3 py-1.5 rounded-lg font-display font-semibold text-sm text-${color} shrink-0`}
              style={{
                background: `color-mix(in oklch, var(--color-${color}) 12%, transparent)`,
              }}
            >
              <span className="font-bangla">{m.month}</span>
            </div>
            <div className="font-bangla text-sm">
              <span className="text-muted-foreground">Focus: </span>
              {m.focus}
            </div>
            <div
              className={`flex items-start gap-1.5 text-sm font-bangla font-medium ${
                m.isCheckpoint ? "text-primary" : ""
              }`}
            >
              {m.isCheckpoint ? (
                <CheckCircle2 className="size-4 mt-0.5 shrink-0" />
              ) : (
                <Target className="size-3.5 mt-0.5 shrink-0 text-muted-foreground" />
              )}
              <span>{m.milestone}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WeekCard({ w }: { w: WeekPlan }) {
  return (
    <div
      className={`rounded-xl border p-4 md:p-5 grid md:grid-cols-[auto_1fr_auto] gap-3 md:gap-5 items-start ${
        w.isCheckpoint ? "bg-primary/5 border-primary/30" : "bg-card border-border"
      }`}
    >
      <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-1">
        <div
          className={`size-12 rounded-lg grid place-items-center font-display text-lg font-bold ${
            w.isCheckpoint ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
          }`}
        >
          {w.week}
        </div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
          সপ্তাহ · {w.cefr}
        </div>
      </div>
      <div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
          <span className="inline-flex items-center gap-1 text-primary font-semibold">
            <BookOpen className="size-3" /> {w.vocabTarget} শব্দ
          </span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Headphones className="size-3" /> {w.listeningMin} মিনিট
          </span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Zap className="size-3" /> {w.grammarFocus}
          </span>
        </div>
        <div className="mt-2 font-bangla text-sm">
          <span className="text-muted-foreground">Speaking task: </span>
          {w.speakingTaskBn}
        </div>
        {w.milestoneBn && (
          <div
            className={`mt-2 flex items-start gap-1.5 text-sm font-bangla font-medium ${
              w.isCheckpoint ? "text-primary" : ""
            }`}
          >
            {w.isCheckpoint ? (
              <CheckCircle2 className="size-4 mt-0.5 shrink-0" />
            ) : (
              <Target className="size-3.5 mt-0.5 shrink-0 text-muted-foreground" />
            )}
            <span>{w.milestoneBn}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// English digits → Bangla digits
function numBn(n: number | string): string {
  const map: Record<string, string> = {
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
  };
  return String(n)
    .split("")
    .map((c) => map[c] ?? c)
    .join("")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"); // no-op for Bangla but safe
}
