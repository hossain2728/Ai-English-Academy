// Oxford 3000 কভারেজ রিপোর্ট — কোন শব্দ এখনো কোন থিমে যায়নি।
// Dev-only utility: থিম extension করার সময় গাইড হিসেবে ব্যবহার হবে।
// (কোনো UI-তে সরাসরি না — শুধু ভবিষ্যতের ব্যাচ প্ল্যানিংয়ের জন্য।)

import { OXFORD_3000 } from "./oxford3000";
import { THEMES } from "./vocab-themes";

/** যে সব শব্দ কোনো theme.words[].w-এ আছে (lowercase, trimmed)। */
export function coveredWordSet(): Set<string> {
  const s = new Set<string>();
  for (const t of THEMES) {
    for (const w of t.words) {
      // multi-word entries ("wake up") ভেঙে single ও পুরো — দুইটাই ধরি
      const full = w.w.trim().toLowerCase();
      s.add(full);
      for (const p of full.split(/\s+/)) s.add(p);
    }
  }
  return s;
}

/** Oxford 3000 এর যে শব্দগুলো এখনো কোনো থিমে নাই। */
export function uncoveredOxford(): { level: string; words: string[] }[] {
  const covered = coveredWordSet();
  const byLevel: Record<string, string[]> = { A1: [], A2: [], B1: [], B2: [] };
  for (const e of OXFORD_3000) {
    if (!covered.has(e.w.trim().toLowerCase())) {
      byLevel[e.level]?.push(e.w);
    }
  }
  return (["A1", "A2", "B1", "B2"] as const).map((lvl) => ({
    level: lvl,
    words: byLevel[lvl],
  }));
}

/** সংক্ষিপ্ত সংখ্যা। */
export function coverageStats() {
  const covered = coveredWordSet();
  let hit = 0;
  for (const e of OXFORD_3000) {
    if (covered.has(e.w.trim().toLowerCase())) hit++;
  }
  return {
    total: OXFORD_3000.length,
    covered: hit,
    missing: OXFORD_3000.length - hit,
    pct: Math.round((hit / OXFORD_3000.length) * 100),
  };
}
