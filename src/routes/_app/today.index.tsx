import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Flame,
  Trophy,
  Target,
  BookOpen,
  Ear,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Sunrise,
  User,
  Zap,
} from "lucide-react";
import { getProgress, levelFromXp, addXp } from "@/lib/progress";
import { getOnboarding, saveOnboarding, type OnboardingProfile } from "@/lib/settings";
import { seed, stats, dueCards } from "@/lib/srs";
import { THEMES } from "@/data/vocab-themes";

export const Route = createFileRoute("/_app/today/")({
  head: () => ({
    meta: [
      { title: "আজকের পাঠ — AI" },
      {
        name: "description",
        content:
          "প্রতিদিন ২০ মিনিট — নতুন শব্দ, পুরানো রিভিশন, শোনা, একটি বাক্য। শৃঙ্খলা মানেই ইনশাআল্লাহ সফলতা।",
      },
    ],
  }),
  component: TodayPage,
});

function TodayPage() {
  const [profile, setProfile] = useState<OnboardingProfile | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setProfile(getOnboarding());
    setReady(true);
  }, []);

  if (!ready) return <div className="p-10 text-center opacity-60">লোড হচ্ছে…</div>;
  if (!profile) return <Onboarding onDone={(p) => setProfile(p)} />;
  return (
    <Dashboard
      profile={profile}
      onReset={() => {
        localStorage.removeItem("guruji_onboarding_v1");
        setProfile(null);
      }}
    />
  );
}

/* ============ ONBOARDING ============ */
function Onboarding({ onDone }: { onDone: (p: OnboardingProfile) => void }) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [level, setLevel] = useState<OnboardingProfile["level"]>("zero");
  const [goal, setGoal] = useState<OnboardingProfile["goal"]>("general");
  const [minutes, setMinutes] = useState(20);
  const navigate = useNavigate();

  const finish = () => {
    const p: OnboardingProfile = {
      name: name.trim() || "বন্ধু",
      level,
      goal,
      minutes,
      createdAt: new Date().toISOString(),
    };
    saveOnboarding(p);
    // Seed first theme into SRS to give an immediate "due queue"
    const first = THEMES[0];
    if (first) {
      seed(
        first.words.map((w) => ({
          id: `${first.id}:${w.w}`,
          w: w.w,
          bn: w.bn,
          ex: w.ex,
        })),
      );
    }
    onDone(p);
    navigate({ to: "/today" });
  };

  const steps = [
    {
      title: "আসসালামু আলাইকুম 🌸",
      body: "শুরু করার আগে ছোট্ট কয়েকটা প্রশ্ন — তোমার জন্য পথ সাজিয়ে দিতে। মাত্র ৩০ সেকেন্ড।",
      field: (
        <div>
          <label className="text-xs uppercase tracking-wider opacity-70">তোমার নাম</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            placeholder="যেমন: রফিক"
            className="mt-2 w-full text-lg rounded-xl border border-border bg-card px-4 py-3 outline-none focus:border-primary"
          />
        </div>
      ),
    },
    {
      title: "এখন কোন লেভেলে আছো?",
      body: "সৎভাবে বেছে নাও — কেউ দেখছে না। ঠিক জায়গা থেকে শুরু করলেই আনন্দ পাবে।",
      field: (
        <div className="grid gap-2">
          {[
            { v: "zero", t: "একদম শূন্য", d: "A B C থেকে শুরু" },
            { v: "beginner", t: "কিছু জানি", d: "শব্দ চিনি, বাক্য বানাতে পারি না" },
            { v: "intermediate", t: "মাঝারি", d: "কথা বলি কিন্তু ভুল হয়" },
          ].map((o) => (
            <button
              key={o.v}
              onClick={() => setLevel(o.v as OnboardingProfile["level"])}
              className={`text-left p-4 rounded-xl border transition ${level === o.v ? "border-primary bg-primary/8" : "border-border hover:border-primary/40"}`}
            >
              <div className="font-bangla font-semibold">{o.t}</div>
              <div className="text-xs opacity-70 mt-0.5 font-bangla">{o.d}</div>
            </button>
          ))}
        </div>
      ),
    },
    {
      title: "কেন শিখতে চাও?",
      body: "লক্ষ্য থাকলে পথ দেখা যায়।",
      field: (
        <div className="grid grid-cols-2 gap-2">
          {[
            { v: "conversation", t: "কথা বলতে" },
            { v: "job", t: "চাকরি / ইন্টারভিউ" },
            { v: "study", t: "পড়াশোনা / IELTS" },
            { v: "travel", t: "ভ্রমণ" },
            { v: "general", t: "সাধারণ উন্নতি" },
          ].map((o) => (
            <button
              key={o.v}
              onClick={() => setGoal(o.v as OnboardingProfile["goal"])}
              className={`p-3 rounded-xl border font-bangla text-sm transition ${goal === o.v ? "border-primary bg-primary/8" : "border-border hover:border-primary/40"}`}
            >
              {o.t}
            </button>
          ))}
        </div>
      ),
    },
    {
      title: "প্রতিদিন কত মিনিট দিতে পারবে?",
      body: "কম হোক, কিন্তু প্রতিদিন হোক। এটাই মূল রহস্য।",
      field: (
        <div>
          <div className="flex items-baseline gap-2">
            <div className="font-display text-6xl text-primary">{minutes}</div>
            <div className="font-bangla opacity-70">মিনিট / দিন</div>
          </div>
          <input
            type="range"
            min={10}
            max={60}
            step={5}
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            className="w-full mt-4 accent-primary"
          />
          <div className="flex justify-between text-xs opacity-60 mt-1">
            <span>১০</span>
            <span>৬০</span>
          </div>
        </div>
      ),
    },
  ];

  const s = steps[step];
  const isLast = step === steps.length - 1;

  return (
    <main className="min-h-[80vh] max-w-xl mx-auto px-5 py-14">
      <div className="mb-8 flex gap-1.5">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition ${i <= step ? "bg-primary" : "bg-border"}`}
          />
        ))}
      </div>
      <div className="rounded-3xl border border-border bg-card p-8 shadow-elevated">
        <div className="eyebrow font-bangla">
          ধাপ {step + 1} / {steps.length}
        </div>
        <h1 className="font-display text-4xl mt-2 leading-tight">{s.title}</h1>
        <p className="mt-3 text-foreground/70 font-bangla">{s.body}</p>
        <div className="mt-8">{s.field}</div>
        <div className="mt-10 flex justify-between">
          <button
            onClick={() => setStep((x) => Math.max(0, x - 1))}
            disabled={step === 0}
            className="text-sm opacity-60 hover:opacity-100 disabled:opacity-30 font-bangla"
          >
            ← আগের
          </button>
          <button
            onClick={() => (isLast ? finish() : setStep((x) => x + 1))}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-primary transition"
          >
            {isLast ? "বিসমিল্লাহ — শুরু করি" : "এগোই"} <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </main>
  );
}

/* ============ DASHBOARD ============ */
function Dashboard({ profile, onReset }: { profile: OnboardingProfile; onReset: () => void }) {
  const [progress, setProgress] = useState(() => getProgress());
  const [srs, setSrs] = useState(() => stats());
  const [checkedIn, setCheckedIn] = useState(false);

  useEffect(() => {
    setProgress(getProgress());
    setSrs(stats());
  }, []);

  const level = levelFromXp(progress.xp);
  const due = srs.due;

  const checkin = () => {
    const p = addXp(5);
    setProgress(p);
    setCheckedIn(true);
  };

  // Today's theme = pick based on day-of-year for variety
  const themeToday = useMemo(() => {
    const day = Math.floor(Date.now() / 86400000);
    return THEMES[day % THEMES.length];
  }, []);

  return (
    <main className="paper-grain">
      <section className="max-w-5xl mx-auto px-5 py-10">
        {/* Greeting */}
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <div className="eyebrow font-bangla flex items-center gap-2">
              <Sunrise className="size-3.5" /> আজকের পাঠ
            </div>
            <h1 className="font-display text-4xl md:text-5xl mt-2 leading-tight">
              আসসালামু আলাইকুম, <span className="italic text-primary">{profile.name}</span>
            </h1>
            <p className="mt-3 text-foreground/70 font-bangla">
              আজ মাত্র <b>{profile.minutes} মিনিট</b>। ইনশাআল্লাহ, প্রতিদিন এতটুকুই যথেষ্ট।
            </p>
          </div>
          <button
            onClick={onReset}
            className="text-[11px] uppercase tracking-wider opacity-40 hover:opacity-70"
          >
            <User className="size-3 inline mr-1" /> reset
          </button>
        </div>

        {/* Streak + XP band */}
        <div className="mt-8 grid sm:grid-cols-4 gap-3">
          <StatCard icon={Flame} label="Streak" value={`${progress.streak} দিন`} accent />
          <StatCard icon={Trophy} label="Level" value={String(level)} />
          <StatCard icon={Zap} label="XP" value={String(progress.xp)} />
          <StatCard icon={Target} label="রিভিউ বাকি" value={String(due)} />
        </div>

        {/* Daily routine */}
        <div className="mt-10">
          <h2 className="font-display text-2xl mb-4">আজকের রুটিন</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <RoutineCard
              n="01"
              to="/vocab-plan"
              icon={BookOpen}
              title={`নতুন থিম — ${themeToday.title}`}
              desc={`${themeToday.words.length}টি রিলেটেড শব্দ, একসাথে গাঁথা।`}
              time="৭ মিনিট"
            />
            <RoutineCard
              n="02"
              to="/review"
              icon={Sparkles}
              title="Spaced Repetition"
              desc={
                due > 0 ? `${due}টি শব্দ পুনরায় দেখতে হবে।` : "সব শব্দ এখন সুস্থ! নতুন যোগ করো।"
              }
              time="৫ মিনিট"
              highlight={due > 0}
            />
            <RoutineCard
              n="03"
              to="/listen"
              icon={Ear}
              title="Listening — ডিক্টেশন"
              desc="শুনে বাংলায় লিখো — কান তৈরি হবে।"
              time="৫ মিনিট"
            />
            <RoutineCard
              n="04"
              to="/practice"
              icon={CheckCircle2}
              title="ছোট্ট কুইজ"
              desc="আজ যা শিখেছ, তার ৫টা প্রশ্ন।"
              time="৩ মিনিট"
            />
          </div>
        </div>

        {/* Check-in */}
        <div className="mt-10 rounded-3xl border border-border bg-card p-6 flex items-center justify-between gap-6 flex-wrap shadow-soft">
          <div>
            <div className="font-display text-2xl">আজকের চেক-ইন</div>
            <p className="text-sm text-foreground/70 font-bangla mt-1">
              এক ট্যাপে streak চালু রাখো। +৫ XP।
            </p>
          </div>
          <button
            disabled={checkedIn}
            onClick={checkin}
            className={`px-6 py-3 rounded-full font-semibold text-sm transition ${
              checkedIn
                ? "bg-primary/15 text-primary"
                : "bg-foreground text-background hover:bg-primary"
            }`}
          >
            {checkedIn ? "✓ আজ হয়েছে!" : "চেক-ইন করি"}
          </button>
        </div>

        {/* Progress bar under SRS boxes */}
        <div className="mt-8 rounded-3xl border border-border bg-card p-6">
          <div className="flex items-baseline justify-between">
            <div className="font-display text-xl">স্মৃতির বাক্স (Leitner)</div>
            <div className="text-xs opacity-60">
              {srs.mastered} / {srs.total} মুখস্থ
            </div>
          </div>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {srs.boxes.map((n, i) => (
              <div key={i} className="text-center">
                <div
                  className={`h-16 rounded-lg border flex items-end justify-center pb-1 font-display text-lg ${
                    i === 4
                      ? "bg-primary/10 border-primary/40 text-primary"
                      : "bg-accent/40 border-border"
                  }`}
                >
                  {n}
                </div>
                <div className="text-[10px] opacity-60 mt-1">Box {i + 1}</div>
              </div>
            ))}
          </div>
          <div className="text-[11px] font-bangla opacity-60 mt-3">
            Box ১ = আজ, ২ = কাল, ৩ = ৩ দিন পর, ৪ = ১ সপ্তাহ, ৫ = ২ সপ্তাহ। বিজ্ঞানসম্মত forgetting
            curve মেনে।
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 ${accent ? "bg-gold/10 border-gold/30" : "bg-card border-border"}`}
    >
      <div className="flex items-center gap-2 text-xs opacity-70 uppercase tracking-wider">
        <Icon className="size-3.5" /> {label}
      </div>
      <div className="font-display text-2xl mt-1">{value}</div>
    </div>
  );
}

function RoutineCard({
  n,
  to,
  icon: Icon,
  title,
  desc,
  time,
  highlight,
}: {
  n: string;
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  time: string;
  highlight?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`group flex gap-4 p-5 rounded-2xl border transition ${
        highlight
          ? "border-primary bg-primary/6 hover:bg-primary/10"
          : "border-border bg-card hover:border-primary/40"
      }`}
    >
      <div className="font-display text-4xl italic text-primary/40 leading-none">{n}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <Icon className="size-4 text-primary" />
          <div className="font-semibold font-bangla">{title}</div>
        </div>
        <p className="text-sm text-foreground/70 mt-1 font-bangla">{desc}</p>
        <div className="mt-2 text-[10px] uppercase tracking-wider opacity-60">⏱ {time}</div>
      </div>
      <ArrowRight className="size-4 self-center opacity-40 group-hover:translate-x-1 transition" />
    </Link>
  );
}
