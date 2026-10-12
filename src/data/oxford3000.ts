// Oxford 3000™ — official headword list, parsed from Oxford's published PDF.
// Source: https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf
// প্রতিটা শব্দের বাংলা অর্থ + POS + CEFR level (A1→B2)। এটাই আসল তালিকা।

import _official from "./oxford3000-official.json";

export type Ox3Word = {
  w: string;
  bn: string;
  pos: string;
  level: "A1" | "A2" | "B1" | "B2";
  pron?: string;
  syn?: string[];
  ex?: string;
};

type _OfficialEntry = {
  w: string;
  raw?: string;
  pos: string;
  level: string;
  bn: string;
  pron?: string;
  syn?: string[];
  ex?: string;
};

export const OXFORD_3000: Ox3Word[] = (_official as _OfficialEntry[]).map((e) => ({
  w: e.w,
  bn: e.bn,
  pos: e.pos,
  level: e.level as Ox3Word["level"],
  pron: e.pron || undefined,
  syn: e.syn && e.syn.length ? e.syn : undefined,
  ex: e.ex || undefined,
}));

export const OXFORD_TOTAL = OXFORD_3000.length;

/** Level counts for UI (dynamic). */
export const OXFORD_BY_LEVEL: Record<Ox3Word["level"], Ox3Word[]> = {
  A1: OXFORD_3000.filter((w) => w.level === "A1"),
  A2: OXFORD_3000.filter((w) => w.level === "A2"),
  B1: OXFORD_3000.filter((w) => w.level === "B1"),
  B2: OXFORD_3000.filter((w) => w.level === "B2"),
};

/**
 * Split the full Oxford list into daily "chunks" of a target size.
 * Words stay in CEFR order so learners move A1 → A2 → B1 → B2 gradually.
 * Each day becomes multiple small sections of ~20 words for easier chewing.
 */
export function buildDailyPlan(days: number, sectionSize = 20) {
  const totalPerDay = Math.ceil(OXFORD_TOTAL / days);
  const daysArr: { day: number; sections: Ox3Word[][]; total: number }[] = [];
  let idx = 0;
  for (let d = 1; d <= days; d++) {
    const dayWords = OXFORD_3000.slice(idx, idx + totalPerDay);
    idx += totalPerDay;
    const sections: Ox3Word[][] = [];
    for (let i = 0; i < dayWords.length; i += sectionSize) {
      sections.push(dayWords.slice(i, i + sectionSize));
    }
    daysArr.push({ day: d, sections, total: dayWords.length });
  }
  return daysArr;
}
