const KEY = "guruji_srs_v1";
const INTERVALS = [0, 1, 3, 7, 14]; // days for boxes 1..5

export type SRSCard = {
  id: string; // unique key, e.g. "family:father"
  w: string; // English word/phrase
  bn: string; // Bangla meaning
  ex?: string; // example sentence
  box: number; // 1..5
  due: string; // YYYY-MM-DD
  seen: number;
  correct: number;
};

type SRSStore = Record<string, SRSCard>;

function today(): string {
  return new Date().toISOString().slice(0, 10);
}
function addDays(d: string, n: number): string {
  const dt = new Date(d + "T00:00:00");
  dt.setDate(dt.getDate() + n);
  return dt.toISOString().slice(0, 10);
}

function read(): SRSStore {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(KEY) || "{}") as SRSStore;
  } catch {
    return {};
  }
}
function write(s: SRSStore) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(s));
}

/** Add a new word to SRS (idempotent — won't reset if already there). */
export function seed(cards: Omit<SRSCard, "box" | "due" | "seen" | "correct">[]) {
  const s = read();
  const t = today();
  let changed = false;
  for (const c of cards) {
    if (!s[c.id]) {
      s[c.id] = { ...c, box: 1, due: t, seen: 0, correct: 0 };
      changed = true;
    }
  }
  if (changed) write(s);
}

export function allCards(): SRSCard[] {
  return Object.values(read());
}

export function dueCards(): SRSCard[] {
  const t = today();
  return allCards()
    .filter((c) => c.due <= t)
    .sort((a, b) => a.due.localeCompare(b.due) || a.box - b.box);
}

/** Answer a card: correct → move up a box; wrong → back to box 1. */
export function answer(id: string, correct: boolean) {
  const s = read();
  const c = s[id];
  if (!c) return;
  c.seen += 1;
  if (correct) {
    c.correct += 1;
    c.box = Math.min(5, c.box + 1);
  } else {
    c.box = 1;
  }
  c.due = addDays(today(), INTERVALS[c.box - 1]);
  write(s);
}

export function stats() {
  const cards = allCards();
  const t = today();
  const boxes = [0, 0, 0, 0, 0];
  let due = 0;
  let mastered = 0;
  for (const c of cards) {
    boxes[c.box - 1] += 1;
    if (c.due <= t) due += 1;
    if (c.box >= 5) mastered += 1;
  }
  return { total: cards.length, due, mastered, boxes };
}
