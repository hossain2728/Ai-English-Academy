// Pronunciation scoring — target vs. spoken tokens.

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[.,!?;:"'()[\]]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(s: string): string[] {
  return normalize(s).split(" ").filter(Boolean);
}

function lev(a: string, b: string): number {
  if (a === b) return 0;
  const m = a.length,
    n = b.length;
  if (!m) return n;
  if (!n) return m;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[m][n];
}

export type WordScore = {
  target: string;
  matched: string | null; // spoken word that matched, or null if missed
  status: "correct" | "close" | "missed";
};

export type PronunciationScore = {
  percent: number;
  words: WordScore[];
  spoken: string;
  feedback: string;
};

/**
 * Compare target sentence vs what user actually said.
 * Uses greedy word-by-word matching with fuzzy tolerance.
 */
export function scorePronunciation(target: string, spoken: string): PronunciationScore {
  const tWords = tokens(target);
  const sWords = tokens(spoken);
  const words: WordScore[] = [];

  let sIdx = 0;
  let correct = 0;

  for (let i = 0; i < tWords.length; i++) {
    const t = tWords[i];
    let matched: string | null = null;
    let status: WordScore["status"] = "missed";

    // Look ahead up to 3 spoken words to find a match
    for (let j = sIdx; j < Math.min(sIdx + 3, sWords.length); j++) {
      const s = sWords[j];
      if (s === t) {
        matched = s;
        status = "correct";
        sIdx = j + 1;
        correct += 1;
        break;
      }
      const d = lev(s, t);
      const maxLen = Math.max(s.length, t.length);
      const sim = 1 - d / maxLen;
      if (sim >= 0.75) {
        matched = s;
        status = "close";
        sIdx = j + 1;
        correct += 0.6;
        break;
      }
    }

    words.push({ target: t, matched, status });
  }

  const percent = tWords.length === 0 ? 0 : Math.round((correct / tWords.length) * 100);

  let feedback: string;
  if (percent >= 90) feedback = "অসাধারণ! 🌟 প্রায় পুরোপুরি ঠিক বললে।";
  else if (percent >= 75) feedback = "চমৎকার! আরেকটু চেষ্টা করলেই perfect।";
  else if (percent >= 60) feedback = "ভালো হচ্ছে। ধীরে বলো, প্রতিটা শব্দ স্পষ্ট করো।";
  else if (percent >= 40) feedback = "চেষ্টা চালিয়ে যাও। আগে audio শুনো, তারপর repeat করো।";
  else feedback = "চিন্তার কিছু নেই — সবার শুরুতেই এমন হয়। ধীরে ধীরে অভ্যাস হবে।";

  return { percent, words, spoken: normalize(spoken), feedback };
}
