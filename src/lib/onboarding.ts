// Personalized learning-path profile (separate from /today's basic onboarding).
// Uses its own key to avoid collision with `guruji_onboarding_v1` in settings.ts.
const KEY = "guruji_path_v1";

export type LevelChoice = "zero" | "some" | "good";
export type GoalChoice = "job" | "speak" | "exam" | "general";
export type TimeChoice = "10" | "20" | "30";

export type OnboardingProfile = {
  level: LevelChoice;
  goal: GoalChoice;
  time: TimeChoice;
  completedAt: string; // ISO
};

export function getOnboarding(): OnboardingProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as OnboardingProfile;
  } catch {
    return null;
  }
}

export function saveOnboarding(p: Omit<OnboardingProfile, "completedAt">) {
  if (typeof window === "undefined") return;
  const full: OnboardingProfile = { ...p, completedAt: new Date().toISOString() };
  window.localStorage.setItem(KEY, JSON.stringify(full));
  return full;
}

export function clearOnboarding() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}

export type PathStep = {
  to: string;
  title: string;
  desc: string;
  minutes: number;
};

export type LearnerPath = {
  headline: string;
  subline: string;
  steps: PathStep[];
  dailyMinutes: number;
};

/** Build a personalized daily pathway from the 3 answers. */
export function buildPath(p: OnboardingProfile): LearnerPath {
  const dailyMinutes = Number(p.time);

  // Base steps chosen by level
  const byLevel: Record<LevelChoice, PathStep[]> = {
    zero: [
      {
        to: "/pronunciation",
        title: "উচ্চারণ শিখি",
        desc: "বাংলায় নেই এমন ৬টি সাউন্ড আগে শিখো।",
        minutes: 5,
      },
      {
        to: "/vocab-plan",
        title: "প্রথম ২০ শব্দ",
        desc: "A1 লেভেলের সহজ শব্দ দিয়ে শুরু।",
        minutes: 5,
      },
      {
        to: "/phrases",
        title: "দৈনন্দিন বাক্য",
        desc: "হ্যালো, ধন্যবাদ — এগুলো আগে মুখে আসুক।",
        minutes: 5,
      },
      { to: "/lessons", title: "প্রথম পাঠ", desc: "একদম শুরু থেকে ধাপে ধাপে।", minutes: 5 },
    ],
    some: [
      {
        to: "/roadmap",
        title: "রোডম্যাপ দেখি",
        desc: "কোথায় আছি, কোথায় যাব — বুঝে নিই।",
        minutes: 3,
      },
      {
        to: "/grammar",
        title: "৩০টি গ্রামার ফর্মুলা",
        desc: "যা জানো, সেটা পাকা করো।",
        minutes: 7,
      },
      {
        to: "/chunks",
        title: "শব্দগুচ্ছ (Chunks)",
        desc: "একক শব্দ না — গুচ্ছ মুখস্থ করো।",
        minutes: 5,
      },
      { to: "/practice", title: "দৈনিক কুইজ", desc: "১০টা প্রশ্নে যাচাই।", minutes: 5 },
    ],
    good: [
      {
        to: "/shadowing",
        title: "Shadowing",
        desc: "নেটিভের মতো কথা বলার এক নম্বর হাতিয়ার।",
        minutes: 8,
      },
      {
        to: "/stories",
        title: "গল্প পড়ি",
        desc: "B1-B2 লেভেলের গল্প থেকে natural expression।",
        minutes: 7,
      },
      { to: "/write", title: "লেখার চর্চা", desc: "চিন্তা ইংরেজিতে সাজানো শেখো।", minutes: 8 },
      { to: "/chat", title: "AI টিচারের সাথে কথা", desc: "নিজের ভুল ধরিয়ে নাও।", minutes: 7 },
    ],
  };

  // Goal-based accent step (added to top)
  const goalStep: Record<GoalChoice, PathStep> = {
    job: {
      to: "/scenarios",
      title: "চাকরির ইন্টারভিউ",
      desc: "বাস্তব পরিস্থিতির কথোপকথন।",
      minutes: 7,
    },
    speak: { to: "/speak", title: "বলার চর্চা 🎤", desc: "নিজে বলো, AI স্কোর দেবে।", minutes: 7 },
    exam: { to: "/write", title: "লেখার চর্চা ✍️", desc: "IELTS/পরীক্ষার জন্য গঠন।", minutes: 8 },
    general: { to: "/today", title: "আজকের পাঠ", desc: "প্রতিদিনের গোছানো routine।", minutes: 5 },
  };

  const steps = [goalStep[p.goal], ...byLevel[p.level]];

  // Trim to fit dailyMinutes
  const trimmed: PathStep[] = [];
  let total = 0;
  for (const s of steps) {
    if (total + s.minutes > dailyMinutes + 3) break;
    trimmed.push(s);
    total += s.minutes;
  }
  if (trimmed.length === 0) trimmed.push(steps[0]);

  const levelLabel: Record<LevelChoice, string> = {
    zero: "একদম শুরু থেকে",
    some: "মাঝপথ থেকে",
    good: "উপরের ধাপে",
  };
  const goalLabel: Record<GoalChoice, string> = {
    job: "চাকরির জন্য",
    speak: "কথা বলার জন্য",
    exam: "পরীক্ষার জন্য",
    general: "সাধারণ উন্নতির জন্য",
  };

  return {
    headline: `${levelLabel[p.level]} — ${goalLabel[p.goal]}`,
    subline: `প্রতিদিন ${dailyMinutes} মিনিট। এই ধাপগুলো অনুসরণ করলেই যথেষ্ট।`,
    steps: trimmed,
    dailyMinutes,
  };
}
