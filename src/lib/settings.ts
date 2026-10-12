const ONB_KEY = "guruji_onboarding_v1";
const BYOK_KEY = "guruji_byok_v1";

export type OnboardingProfile = {
  name: string;
  level: "zero" | "beginner" | "intermediate";
  goal: "conversation" | "job" | "study" | "travel" | "general";
  minutes: number; // per day
  createdAt: string;
};

export function getOnboarding(): OnboardingProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(ONB_KEY);
    return raw ? (JSON.parse(raw) as OnboardingProfile) : null;
  } catch {
    return null;
  }
}
export function saveOnboarding(p: OnboardingProfile) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ONB_KEY, JSON.stringify(p));
}

export type BYOK = {
  provider: "gemini";
  key: string;
};
export function getBYOK(): BYOK | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(BYOK_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<BYOK> & { key?: string };
    if (!parsed?.key) return null;
    return { provider: "gemini", key: parsed.key };
  } catch {
    return null;
  }
}
export function saveBYOK(b: BYOK) {
  window.localStorage.setItem(BYOK_KEY, JSON.stringify(b));
}
export function clearBYOK() {
  window.localStorage.removeItem(BYOK_KEY);
}
