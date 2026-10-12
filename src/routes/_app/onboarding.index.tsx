import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Baby,
  BookOpen,
  Trophy,
  Briefcase,
  MessageCircle,
  GraduationCap,
  Compass,
  Clock,
  Check,
  ArrowUpRight,
} from "lucide-react";
import {
  saveOnboarding,
  buildPath,
  type LevelChoice,
  type GoalChoice,
  type TimeChoice,
  type OnboardingProfile,
} from "@/lib/onboarding";

export const Route = createFileRoute("/_app/onboarding/")({
  head: () => ({
    meta: [
      { title: "শুরু করি — ৩টি প্রশ্ন | AI" },
      {
        name: "description",
        content:
          "মাত্র ৩টি প্রশ্নের উত্তর দাও — AI তোমার জন্য একটি ব্যক্তিগত শেখার পথ বানিয়ে দেবে।",
      },
    ],
  }),
  component: Onboarding,
});

type Step = 1 | 2 | 3 | 4;

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(1);
  const [level, setLevel] = useState<LevelChoice | null>(null);
  const [goal, setGoal] = useState<GoalChoice | null>(null);
  const [time, setTime] = useState<TimeChoice | null>(null);
  const [savedProfile, setSavedProfile] = useState<OnboardingProfile | null>(null);

  function next() {
    if (step === 1 && level) setStep(2);
    else if (step === 2 && goal) setStep(3);
    else if (step === 3 && time && level && goal) {
      const saved = saveOnboarding({ level, goal, time });
      if (saved) setSavedProfile(saved);
      setStep(4);
    }
  }

  function back() {
    if (step > 1) setStep((s) => (s - 1) as Step);
  }

  const path = savedProfile ? buildPath(savedProfile) : null;

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-3xl mx-auto px-5 py-10 md:py-16">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span className="font-bangla">{step < 4 ? `প্রশ্ন ${step} / ৩` : "সম্পন্ন"}</span>
            <span className="uppercase tracking-widest">
              {step < 4 ? "Onboarding" : "Your Path"}
            </span>
          </div>
          <div className="h-1 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1 — Level */}
        {step === 1 && (
          <StepCard
            eyebrow="প্রশ্ন ১ / ৩"
            title="তুমি এখন কোন লেভেলে?"
            subtitle="সততার সাথে বলো — এতে তোমার path সঠিক হবে।"
          >
            <div className="space-y-3">
              <ChoiceCard
                icon={<Baby className="size-5" />}
                title="একদম নতুন"
                desc="A B C জানি বা প্রায় কিছুই জানি না।"
                selected={level === "zero"}
                onClick={() => setLevel("zero")}
              />
              <ChoiceCard
                icon={<BookOpen className="size-5" />}
                title="কিছু কিছু জানি"
                desc="স্কুলে পড়েছি, কিন্তু কথা বলতে ভয় লাগে।"
                selected={level === "some"}
                onClick={() => setLevel("some")}
              />
              <ChoiceCard
                icon={<Trophy className="size-5" />}
                title="ভালোই জানি"
                desc="মোটামুটি বুঝি, শুধু fluent হতে চাই।"
                selected={level === "good"}
                onClick={() => setLevel("good")}
              />
            </div>
          </StepCard>
        )}

        {/* Step 2 — Goal */}
        {step === 2 && (
          <StepCard
            eyebrow="প্রশ্ন ২ / ৩"
            title="ইংরেজি শিখতে চাও কেন?"
            subtitle="তোমার লক্ষ্য জানলে আমরা সঠিক content দেখাব।"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              <ChoiceCard
                icon={<Briefcase className="size-5" />}
                title="চাকরির জন্য"
                desc="ইন্টারভিউ, ইমেইল, মিটিং।"
                selected={goal === "job"}
                onClick={() => setGoal("job")}
              />
              <ChoiceCard
                icon={<MessageCircle className="size-5" />}
                title="কথা বলার জন্য"
                desc="fluent, ভয় ছাড়া কথা বলা।"
                selected={goal === "speak"}
                onClick={() => setGoal("speak")}
              />
              <ChoiceCard
                icon={<GraduationCap className="size-5" />}
                title="পরীক্ষার জন্য"
                desc="IELTS, চাকরির পরীক্ষা, university।"
                selected={goal === "exam"}
                onClick={() => setGoal("exam")}
              />
              <ChoiceCard
                icon={<Compass className="size-5" />}
                title="সাধারণ উন্নতির জন্য"
                desc="জীবনে কাজে লাগবে, তাই।"
                selected={goal === "general"}
                onClick={() => setGoal("general")}
              />
            </div>
          </StepCard>
        )}

        {/* Step 3 — Time */}
        {step === 3 && (
          <StepCard
            eyebrow="প্রশ্ন ৩ / ৩"
            title="প্রতিদিন কত সময় দিতে পারবে?"
            subtitle="কম দিলেও চলবে — ধারাবাহিকতাই আসল।"
          >
            <div className="grid sm:grid-cols-3 gap-3">
              {(["10", "20", "30"] as TimeChoice[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTime(t)}
                  className={`p-6 rounded-2xl border-2 text-center transition ${
                    time === t
                      ? "border-primary bg-primary/8 shadow-soft"
                      : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  <Clock
                    className={`size-6 mx-auto ${
                      time === t ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <div className="font-display text-4xl mt-3">{t}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-bangla">মিনিট / দিন</div>
                  <div className="mt-3 text-[10px] uppercase tracking-wider font-bangla text-muted-foreground">
                    {t === "10" ? "ব্যস্ত জীবন" : t === "20" ? "আদর্শ" : "সিরিয়াস"}
                  </div>
                </button>
              ))}
            </div>
          </StepCard>
        )}

        {/* Step 4 — Result */}
        {step === 4 && path && (
          <div className="rise-in">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <Sparkles className="size-3.5" />
                তৈরি হয়েছে
              </div>
              <h1 className="font-display text-4xl md:text-6xl mt-5 leading-tight">
                তোমার <span className="italic text-primary">নিজস্ব</span> পথ।
              </h1>
              <p className="mt-4 text-foreground/70 font-bangla max-w-lg mx-auto">
                <b className="text-foreground">{path.headline}</b>। {path.subline}
              </p>
            </div>

            <div className="space-y-3">
              {path.steps.map((s, i) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-soft transition"
                >
                  <div className="size-10 rounded-xl bg-primary/10 text-primary grid place-items-center font-display text-lg font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-display text-xl leading-tight">{s.title}</div>
                    <div className="text-sm text-muted-foreground mt-1 font-bangla">{s.desc}</div>
                  </div>
                  <div className="hidden sm:block text-xs text-muted-foreground font-bangla shrink-0">
                    ~{s.minutes} মিনিট
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition shrink-0" />
                </Link>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => navigate({ to: path.steps[0].to })}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-primary transition shadow-elevated"
              >
                বিসমিল্লাহ — এখনই শুরু
                <ArrowRight className="size-4" />
              </button>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card hover:border-primary/50 transition text-sm font-medium"
              >
                হোম-এ যাই
              </Link>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-8 font-bangla">
              চাইলে যেকোনো সময় Settings থেকে আবার path পরিবর্তন করতে পারবে।
            </p>
          </div>
        )}

        {/* Nav buttons */}
        {step < 4 && (
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={back}
              disabled={step === 1}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-foreground/70 hover:text-foreground disabled:opacity-30 disabled:pointer-events-none transition"
            >
              <ArrowLeft className="size-4" />
              পিছনে
            </button>
            <button
              onClick={next}
              disabled={(step === 1 && !level) || (step === 2 && !goal) || (step === 3 && !time)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-primary transition shadow-elevated disabled:opacity-30 disabled:pointer-events-none disabled:shadow-none"
            >
              {step === 3 ? "আমার path দেখাও" : "পরের প্রশ্ন"}
              <ArrowRight className="size-4" />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

function StepCard({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rise-in">
      <div className="text-xs uppercase tracking-[0.28em] text-primary font-bold font-bangla">
        {eyebrow}
      </div>
      <h1 className="font-display text-3xl md:text-5xl mt-3 leading-tight">{title}</h1>
      <p className="mt-3 text-foreground/70 font-bangla">{subtitle}</p>
      <div className="mt-8">{children}</div>
    </div>
  );
}

function ChoiceCard({
  icon,
  title,
  desc,
  selected,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-start gap-4 p-5 rounded-2xl border-2 text-left transition ${
        selected
          ? "border-primary bg-primary/6 shadow-soft"
          : "border-border bg-card hover:border-primary/40"
      }`}
    >
      <div
        className={`size-10 rounded-xl grid place-items-center shrink-0 transition ${
          selected ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
        }`}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-display text-xl leading-tight">{title}</div>
        <div className="text-sm text-muted-foreground mt-1 font-bangla">{desc}</div>
      </div>
      {selected && (
        <div className="size-6 rounded-full bg-primary text-primary-foreground grid place-items-center shrink-0">
          <Check className="size-3.5" />
        </div>
      )}
    </button>
  );
}
