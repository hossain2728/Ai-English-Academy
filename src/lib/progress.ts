const KEY = "guruji_progress_v1";

export type Progress = {
  xp: number;
  streak: number;
  lastActive: string; // YYYY-MM-DD
  quizzesTaken: number;
  wordsLearned: number;
};

const empty: Progress = {
  xp: 0,
  streak: 0,
  lastActive: "",
  quizzesTaken: 0,
  wordsLearned: 0,
};

function today() {
  return new Date().toISOString().slice(0, 10);
}

function yesterday() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export function getProgress(): Progress {
  if (typeof window === "undefined") return empty;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return empty;
    return { ...empty, ...JSON.parse(raw) };
  } catch {
    return empty;
  }
}

export function saveProgress(p: Progress) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(p));
}

export function addXp(amount: number, extra?: Partial<Progress>) {
  const p = getProgress();
  const t = today();
  let streak = p.streak;
  if (p.lastActive !== t) {
    streak = p.lastActive === yesterday() ? p.streak + 1 : 1;
  }
  const next: Progress = {
    ...p,
    ...extra,
    xp: p.xp + amount,
    streak,
    lastActive: t,
  };
  saveProgress(next);
  return next;
}

export function levelFromXp(xp: number) {
  return Math.floor(Math.sqrt(xp / 50)) + 1;
}
