// Evidence-based English learning roadmap for Bengali L1 speakers.
// Sources: Cambridge English, Council of Europe (CEFR), Paul Nation (2006, 2007),
// Krashen (1982, 2017), Swain (1985), Hamada (2016), Settles & Meeder (2016),
// Taher (2019), Islam (2004), Barman (2011), Arifuzzaman (2015), EF EPI 2023.

export type CEFRLevel = "A0" | "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export const CEFR_LEVELS: {
  code: CEFRLevel;
  labelBn: string;
  labelEn: string;
  canDoBn: string;
  hoursBengali: string; // realistic for Bengali L1 (Cambridge x 1.3–1.5)
  cumulativeHours: string;
  color: "a1" | "a2" | "b1" | "b2";
}[] = [
  {
    code: "A0",
    labelBn: "একদম শূন্য",
    labelEn: "Absolute Beginner",
    canDoBn: "Alphabet, সংখ্যা, রঙ, নিজের নাম — চেনা-জানা শুরু। কোনো বাক্য এখনো বানাতে পারেন না।",
    hoursBengali: "১৫০–২০০ ঘণ্টা",
    cumulativeHours: "০ → ২০০",
    color: "a1",
  },
  {
    code: "A1",
    labelBn: "প্রাথমিক পরিচয়",
    labelEn: "Beginner",
    canDoBn:
      "নিজের পরিচয়, পরিবার, দৈনন্দিন প্রয়োজন — ছোট সহজ বাক্যে বলতে/বুঝতে পারেন। ধীরে বললে বোঝেন।",
    hoursBengali: "২৫০–৩০০ ঘণ্টা",
    cumulativeHours: "২০০ → ৫০০",
    color: "a1",
  },
  {
    code: "A2",
    labelBn: "দৈনন্দিন কাজ চালানো",
    labelEn: "Elementary",
    canDoBn:
      "বাজার, হাসপাতাল, ট্রেন-স্টেশন, ছোট কথোপকথন। অতীত-বর্তমান-ভবিষ্যৎ সাধারণভাবে বলতে পারেন।",
    hoursBengali: "৩০০–৩৫০ ঘণ্টা",
    cumulativeHours: "৫০০ → ৮৫০",
    color: "a2",
  },
  {
    code: "B1",
    labelBn: "স্বাধীনভাবে চলা",
    labelEn: "Intermediate",
    canDoBn:
      "বিদেশ ভ্রমণ, কাজের সাধারণ আলাপ, নিজের মত প্রকাশ, ইমেইল লেখা — ইনশাআল্লাহ পারবেন। এটাই আমাদের প্রথম বড় লক্ষ্য।",
    hoursBengali: "৩০০–৪০০ ঘণ্টা",
    cumulativeHours: "৮৫০ → ১,২৫০",
    color: "b1",
  },
  {
    code: "B2",
    labelBn: "প্রফেশনাল কাজ",
    labelEn: "Upper-Intermediate",
    canDoBn: "অফিস মিটিং, ইন্টারভিউ, প্রেজেন্টেশন, খবর বোঝা, প্রায় সব বিষয়ে আলোচনা।",
    hoursBengali: "৩৫০–৪৫০ ঘণ্টা",
    cumulativeHours: "১,২৫০ → ১,৭০০",
    color: "b2",
  },
  {
    code: "C1",
    labelBn: "দক্ষ ব্যবহারকারী",
    labelEn: "Advanced",
    canDoBn: "যে কোনো বিষয়ে সাবলীল, academic লেখা, নেতৃত্ব — native-এর কাছাকাছি।",
    hoursBengali: "৪৫০+ ঘণ্টা",
    cumulativeHours: "১,৭০০+",
    color: "b2",
  },
];

// Realistic daily-study estimates for Bengali L1 (with Cambridge×1.35 stretch)
export const TIMELINE_TABLE = [
  {
    daily: "৩০ মিনিট",
    toB1: "প্রায় ৫–৬ বছর",
    toB2: "প্রায় ৮–১০ বছর",
    note: "আস্তে কিন্তু নিরাপদ",
  },
  {
    daily: "১ ঘণ্টা",
    toB1: "প্রায় ২.৫–৩ বছর",
    toB2: "প্রায় ৪–৫ বছর",
    note: "সবচেয়ে বাস্তবসম্মত",
    recommended: true,
  },
  {
    daily: "২ ঘণ্টা",
    toB1: "প্রায় ১৫–১৮ মাস",
    toB2: "প্রায় ২.৫–৩ বছর",
    note: "যদি সময় ম্যানেজ করতে পারেন",
  },
  {
    daily: "৩–৪ ঘণ্টা (immersion)",
    toB1: "প্রায় ১০–১২ মাস",
    toB2: "প্রায় ১৮–২৪ মাস",
    note: "ছাত্র/full-time শিখুয়ার জন্য",
  },
];

// The Four Strands (Paul Nation, 2007) — the gold-standard course design.
export const FOUR_STRANDS = [
  {
    n: 1,
    emoji: "👂",
    titleBn: "শুনে-পড়ে ইনপুট",
    titleEn: "Meaning-Focused Input",
    descBn:
      "সহজ, বোধগম্য (Krashen: i+1) English শুনুন ও পড়ুন — অর্থ ধরার জন্য, নিয়ম ভাঙার জন্য নয়। এটাই আসল ভিত্তি।",
    examples: [
      "BBC Learning English (A1/A2 podcasts)",
      "Graded readers",
      "YouTube — subtitle অন করে",
    ],
    percent: 25,
  },
  {
    n: 2,
    emoji: "🗣️",
    titleBn: "বলে-লিখে আউটপুট",
    titleEn: "Meaning-Focused Output",
    descBn:
      'চেষ্টা করে বলুন-লিখুন। ভুল হবে — সেটাই শেখায় (Swain 1985: চেষ্টার সময় brain "gap" ধরে ফেলে)। চুপ থাকলে শেখা যায় না।',
    examples: ["নিজেই নিজের সাথে কথা (self-talk)", "ছোট ইমেইল/ডায়েরি লেখা", "AI-এর সাথে চ্যাট"],
    percent: 25,
  },
  {
    n: 3,
    emoji: "📖",
    titleBn: "নিয়ম-শব্দ শেখা",
    titleEn: "Language-Focused Learning",
    descBn:
      'সচেতনভাবে grammar, vocabulary, pronunciation শেখা। এটা মোটের ২৫% — এর বেশি হয়ে গেলে "জানি কিন্তু বলতে পারি না" রোগ হয়।',
    examples: ["৩০টি ফর্মুলা", "Oxford ৩০০০ শব্দ (SRS)", "Pronunciation drill"],
    percent: 25,
  },
  {
    n: 4,
    emoji: "⚡",
    titleBn: "সাবলীলতা চর্চা",
    titleEn: "Fluency Development",
    descBn:
      "যা ইতিমধ্যে জানেন — সেটা দ্রুত, স্বাভাবিকভাবে বলার চর্চা। Shadowing এখানে সবচেয়ে শক্তিশালী (Hamada 2016, fMRI-প্রমাণিত)।",
    examples: ["Shadowing (audio-এর সাথে সাথে বলা)", "চেনা কথোপকথন বারবার", "১-মিনিটের timed talk"],
    percent: 25,
  },
];

// 24-week week-by-week roadmap for absolute beginner
// (1 hour/day, 6 days/week → ~144 hours total → A0 to entry-level B1)
export type WeekPlan = {
  week: number;
  phase: "foundation" | "core" | "expansion" | "fluency" | "intermediate" | "consolidation";
  phaseBn: string;
  vocabTarget: number;
  grammarFocus: string;
  listeningMin: number;
  speakingTaskBn: string;
  milestoneBn?: string;
  isCheckpoint?: boolean;
  cefr: CEFRLevel;
};

export const ROADMAP_24: WeekPlan[] = [
  // Phase 1: Foundation (A0 → A1)
  {
    week: 1,
    phase: "foundation",
    phaseBn: "১ম ধাপ — ভিত্তি",
    cefr: "A0",
    vocabTarget: 50,
    grammarFocus: "BE verb: I am / You are / He is",
    listeningMin: 10,
    speakingTaskBn: "১০টা greeting জোরে জোরে বলুন প্রতিদিন",
    milestoneBn: "ইংরেজিতে নিজের নাম, বয়স, দেশ বলতে পারবেন",
  },
  {
    week: 2,
    phase: "foundation",
    phaseBn: "১ম ধাপ — ভিত্তি",
    cefr: "A0",
    vocabTarget: 100,
    grammarFocus: "Plural nouns + This/That/These/Those",
    listeningMin: 15,
    speakingTaskBn: "৫টা সহজ বাক্য shadow করুন (audio-এর সাথে বলুন)",
    milestoneBn: "পরিবারের পরিচয় ৫ বাক্যে দিতে পারবেন",
  },
  {
    week: 3,
    phase: "foundation",
    phaseBn: "১ম ধাপ — ভিত্তি",
    cefr: "A1",
    vocabTarget: 150,
    grammarFocus: "Present Simple: I like, I have, I want",
    listeningMin: 15,
    speakingTaskBn: "নিজেকে record করুন, শুনুন, আবার বলুন",
    milestoneBn: "কী পছন্দ / অপছন্দ ৫ বাক্যে বলা",
  },
  {
    week: 4,
    phase: "foundation",
    phaseBn: "১ম ধাপ — ভিত্তি",
    cefr: "A1",
    vocabTarget: 200,
    grammarFocus: "Negation: I don't / She doesn't",
    listeningMin: 30,
    speakingTaskBn: "চা কিনতে যাওয়ার role-play",
    milestoneBn: "✅ Checkpoint A1a — ৫ বাক্যের self-introduction",
    isCheckpoint: true,
  },
  // Phase 2: Core (A1 → A1+)
  {
    week: 5,
    phase: "core",
    phaseBn: "২য় ধাপ — মূল দৈনন্দিন",
    cefr: "A1",
    vocabTarget: 300,
    grammarFocus: "Questions: Are you? Do you? What is?",
    listeningMin: 20,
    speakingTaskBn: "১০টা প্রশ্ন-উত্তর আয়নার সামনে",
    milestoneBn: "রাস্তা জিজ্ঞেস করা ও বোঝা",
  },
  {
    week: 6,
    phase: "core",
    phaseBn: "২য় ধাপ — মূল দৈনন্দিন",
    cefr: "A1",
    vocabTarget: 350,
    grammarFocus: "Present Simple for routines",
    listeningMin: 25,
    speakingTaskBn: "নিজের দিনের রুটিন ৮ বাক্যে",
    milestoneBn: "প্রতিদিনের schedule বর্ণনা",
  },
  {
    week: 7,
    phase: "core",
    phaseBn: "২য় ধাপ — মূল দৈনন্দিন",
    cefr: "A1",
    vocabTarget: 400,
    grammarFocus: "Comparatives: bigger, cheaper, better",
    listeningMin: 25,
    speakingTaskBn: "দুইটা জিনিসের তুলনা",
    milestoneBn: "১০টি comparative sentence",
  },
  {
    week: 8,
    phase: "core",
    phaseBn: "২য় ধাপ — মূল দৈনন্দিন",
    cefr: "A1",
    vocabTarget: 500,
    grammarFocus: "Can/Can't + May I",
    listeningMin: 30,
    speakingTaskBn: "ডাক্তারের কাছে symptom বলার role-play",
    milestoneBn: "✅ Checkpoint A1 — ২ মিনিটের self-audio",
    isCheckpoint: true,
  },
  // Phase 3: Expansion (A1 → A2)
  {
    week: 9,
    phase: "expansion",
    phaseBn: "৩য় ধাপ — অতীত ও ভবিষ্যৎ",
    cefr: "A2",
    vocabTarget: 600,
    grammarFocus: "Past Simple + ২৫টি irregular verb",
    listeningMin: 30,
    speakingTaskBn: "গতকালের কাহিনী ৫ বাক্যে",
    milestoneBn: "সঠিক past tense-এ কথা বলা",
  },
  {
    week: 10,
    phase: "expansion",
    phaseBn: "৩য় ধাপ — অতীত ও ভবিষ্যৎ",
    cefr: "A2",
    vocabTarget: 650,
    grammarFocus: "Past Continuous: was + -ing",
    listeningMin: 30,
    speakingTaskBn: "গতকাল ৮টার সময় কী করছিলেন?",
    milestoneBn: "দুইটা অতীত ঘটনা জোড়া লাগানো",
  },
  {
    week: 11,
    phase: "expansion",
    phaseBn: "৩য় ধাপ — অতীত ও ভবিষ্যৎ",
    cefr: "A2",
    vocabTarget: 700,
    grammarFocus: "Future: will vs going to",
    listeningMin: 35,
    speakingTaskBn: "আগামী সপ্তাহের plan",
    milestoneBn: "৩ মিনিটের ভবিষ্যৎ পরিকল্পনা",
  },
  {
    week: 12,
    phase: "expansion",
    phaseBn: "৩য় ধাপ — অতীত ও ভবিষ্যৎ",
    cefr: "A2",
    vocabTarget: 750,
    grammarFocus: "There is/are + Have to/Must",
    listeningMin: 35,
    speakingTaskBn: "সম্পূর্ণ shopping dialogue",
    milestoneBn: "✅ Checkpoint A2a — shopping role-play সামলানো",
    isCheckpoint: true,
  },
  // Phase 4: Fluency Building (A2)
  {
    week: 13,
    phase: "fluency",
    phaseBn: "৪র্থ ধাপ — কাজ ও মতামত",
    cefr: "A2",
    vocabTarget: 850,
    grammarFocus: "Present Perfect: I have worked",
    listeningMin: 40,
    speakingTaskBn: "Job interview practice — ৫ প্রশ্নের উত্তর",
    milestoneBn: "৫টা interview question-এর সঠিক উত্তর",
  },
  {
    week: 14,
    phase: "fluency",
    phaseBn: "৪র্থ ধাপ — কাজ ও মতামত",
    cefr: "A2",
    vocabTarget: 900,
    grammarFocus: "Opinion phrases + agree/disagree",
    listeningMin: 40,
    speakingTaskBn: "একটা topic-এ ৩ মিনিটের মতামত",
    milestoneBn: "২টি কারণসহ মতামত প্রকাশ",
  },
  {
    week: 15,
    phase: "fluency",
    phaseBn: "৪র্থ ধাপ — কাজ ও মতামত",
    cefr: "A2",
    vocabTarget: 1000,
    grammarFocus: "Reported speech + Conditionals intro",
    listeningMin: 45,
    speakingTaskBn: "১০০ শব্দের professional email লেখা",
    milestoneBn: "🎉 ১০০০ শব্দ + সঠিক email",
  },
  {
    week: 16,
    phase: "fluency",
    phaseBn: "৪র্থ ধাপ — কাজ ও মতামত",
    cefr: "A2",
    vocabTarget: 1100,
    grammarFocus: "Passive Voice + Relative clauses intro",
    listeningMin: 45,
    speakingTaskBn: "শোনা একটা news story নিজে বলা",
    milestoneBn: "✅ Checkpoint A2 complete — ৫ মিনিটের কথোপকথন",
    isCheckpoint: true,
  },
  // Phase 5: Intermediate Launch (A2 → B1)
  {
    week: 17,
    phase: "intermediate",
    phaseBn: "৫ম ধাপ — B1-এ প্রবেশ",
    cefr: "B1",
    vocabTarget: 1200,
    grammarFocus: "Second Conditional: If I were...",
    listeningMin: 45,
    speakingTaskBn: "একটা business problem-এর সমাধান আলোচনা",
    milestoneBn: "সমস্যার সমাধান proposal",
  },
  {
    week: 18,
    phase: "intermediate",
    phaseBn: "৫ম ধাপ — B1-এ প্রবেশ",
    cefr: "B1",
    vocabTarget: 1300,
    grammarFocus: "Although/However/Therefore",
    listeningMin: 50,
    speakingTaskBn: "স্থানীয় সমস্যার ওপর ১৫০ শব্দের report",
    milestoneBn: "Coherent paragraph writing",
  },
  {
    week: 19,
    phase: "intermediate",
    phaseBn: "৫ম ধাপ — B1-এ প্রবেশ",
    cefr: "B1",
    vocabTarget: 1400,
    grammarFocus: "Gerunds & Infinitives",
    listeningMin: 50,
    speakingTaskBn: "একটা news story বিশ্লেষণ করুন",
    milestoneBn: "News-এ ৫ মিনিটের আলোচনা",
  },
  {
    week: 20,
    phase: "intermediate",
    phaseBn: "৫ম ধাপ — B1-এ প্রবেশ",
    cefr: "B1",
    vocabTarget: 1500,
    grammarFocus: "Modal perfects + Complex questions",
    listeningMin: 50,
    speakingTaskBn: "২০০ শব্দের job application letter",
    milestoneBn: "✅ Checkpoint B1 entry — formal letter + জটিল আলোচনা",
    isCheckpoint: true,
  },
  // Phase 6: Consolidation (B1)
  {
    week: 21,
    phase: "consolidation",
    phaseBn: "৬ষ্ঠ ধাপ — স্বাধীনতা",
    cefr: "B1",
    vocabTarget: 1700,
    grammarFocus: "Inversion + advanced modals",
    listeningMin: 60,
    speakingTaskBn: "৩ মিনিটের video presentation record",
    milestoneBn: "নিজের video presentation",
  },
  {
    week: 22,
    phase: "consolidation",
    phaseBn: "৬ষ্ঠ ধাপ — স্বাধীনতা",
    cefr: "B1",
    vocabTarget: 1800,
    grammarFocus: "Participial phrases + top ৫০টি idiom",
    listeningMin: 60,
    speakingTaskBn: "AI/partner-এর সাথে debate",
    milestoneBn: "৫ মিনিট নিজের অবস্থান defend",
  },
  {
    week: 23,
    phase: "consolidation",
    phaseBn: "৬ষ্ঠ ধাপ — স্বাধীনতা",
    cefr: "B1",
    vocabTarget: 1900,
    grammarFocus: "সব ৩০টি formula-র review + error fix",
    listeningMin: 60,
    speakingTaskBn: "১০ মিনিটের mock interview",
    milestoneBn: "Mock interview সফল",
  },
  {
    week: 24,
    phase: "consolidation",
    phaseBn: "৬ষ্ঠ ধাপ — স্বাধীনতা",
    cefr: "B1",
    vocabTarget: 2000,
    grammarFocus: "Full review + self-assessment",
    listeningMin: 60,
    speakingTaskBn: "Career goal নিয়ে ৫ মিনিটের final talk",
    milestoneBn: "🏆 Final Checkpoint B1 — EF SET বা Cambridge placement test",
    isCheckpoint: true,
  },
];

export const PHASE_META: Record<
  WeekPlan["phase"],
  { bn: string; sub: string; color: string; weeks: string }
> = {
  foundation: {
    bn: "ভিত্তি",
    sub: "সাউন্ড + প্রাথমিক শব্দ + প্রথম বাক্য",
    color: "bg-a1/10 border-a1/30 text-a1",
    weeks: "সপ্তাহ ১–৪",
  },
  core: {
    bn: "মূল দৈনন্দিন",
    sub: "প্রশ্ন + সময় + ৫০০ শব্দ",
    color: "bg-a1/10 border-a1/30 text-a1",
    weeks: "সপ্তাহ ৫–৮",
  },
  expansion: {
    bn: "অতীত ও ভবিষ্যৎ",
    sub: "Past + Future + প্রথম কথোপকথন",
    color: "bg-a2/10 border-a2/30 text-a2",
    weeks: "সপ্তাহ ৯–১২",
  },
  fluency: {
    bn: "কাজ ও মতামত",
    sub: "Professional + opinions + ১০০০ শব্দ",
    color: "bg-a2/10 border-a2/30 text-a2",
    weeks: "সপ্তাহ ১৩–১৬",
  },
  intermediate: {
    bn: "B1-এ প্রবেশ",
    sub: "জটিল ধারণা + খবর পড়া",
    color: "bg-b1/10 border-b1/30 text-b1",
    weeks: "সপ্তাহ ১৭–২০",
  },
  consolidation: {
    bn: "স্বাধীনতা",
    sub: "Authentic content + confidence",
    color: "bg-b1/10 border-b1/30 text-b1",
    weeks: "সপ্তাহ ২১–২৪",
  },
};

// Vocabulary targets by goal (Nation 2006, Coxhead AWL 2000)
export const VOCAB_GOALS = [
  {
    size: "১২০–৫০০",
    goalBn: "জরুরি টিকে থাকা",
    goalEn: "Survival",
    coverage: "সীমিত",
    note: "নিজেকে চেনানো, খাবার, দিক, বিপদ — মৌলিক প্রয়োজন",
  },
  {
    size: "১,০০০–২,০০০",
    goalBn: "সাধারণ দৈনন্দিন কথা",
    goalEn: "Basic conversation",
    coverage: "~৮০–৮৬%",
    note: "West (1953) GSL, Nation (2006) — কথা বলার ভিত্তি",
  },
  {
    size: "২,৯৭৯ (Oxford 3000)",
    goalBn: "আরামদায়ক দৈনন্দিন + কাজের কথা",
    goalEn: "Comfortable + workplace",
    coverage: "~৮৫% written · ~৯৫% spoken",
    note: "Oxford অফিসিয়াল তালিকা — আমাদের সম্পূর্ণ লক্ষ্য (A1→B2)",
    isCurrent: true,
  },
  {
    size: "৫,০০০",
    goalBn: "সাবলীল আলোচনা",
    goalEn: "Fluent discussion",
    coverage: "~৯৭%",
    note: "Oxford 5000 — C1-এর পথে",
  },
  {
    size: "৮,০০০–৯,০০০",
    goalBn: "খবর, বই পড়া",
    goalEn: "Reading newspapers",
    coverage: "৯৮% (written)",
    note: "Nation (2006) — স্বাধীন পাঠক হওয়ার জন্য যা দরকার",
  },
  {
    size: "৯,০০০ + AWL",
    goalBn: "প্রফেশনাল/একাডেমিক",
    goalEn: "Professional/Academic",
    coverage: "৯৮%+",
    note: "+ Academic Word List (৫৭০ family, Coxhead 2000)",
  },
];

// -----------------------------------------------------------------------------
// FULL JOURNEY: A0 → B2 in 3 realistic stages
// -----------------------------------------------------------------------------
// Stage 1 = the detailed 24-week plan below (ROADMAP_24, 144 hrs)
// Stage 2 = B1 mastery (~24 weeks, ~180 hrs at 75 min/day)
// Stage 3 = B2 professional (~28 weeks, ~250 hrs at 90 min/day)
// Total: ~76 weeks (~1.5 years at recommended pace) — matches Cambridge
// benchmarks (200 hrs/level × 1.35 Bengali-L1 stretch = ~570 hrs A0→B2).

export const STAGES = [
  {
    n: 1,
    codeBn: "ভিত্তি + প্রথম কথোপকথন",
    codeEn: "Foundation",
    fromCefr: "A0",
    toCefr: "B1 entry",
    weeks: 24,
    hoursTotal: "~১৪৪ ঘণ্টা",
    dailyPlan: "৬০ মিনিট × ৬ দিন",
    oxfordSlice: "A1 (৯২২ শব্দ) + A2-এর অধিকাংশ",
    goalBn: "নিজের পরিচয়, family, দৈনন্দিন কাজ, ছোট কথোপকথন, সাধারণ ইমেইল — সব ইংরেজিতে সামলানো।",
    color: "a1",
    hasDetail: true,
  },
  {
    n: 2,
    codeBn: "স্বাধীন ব্যবহারকারী",
    codeEn: "B1 Mastery",
    fromCefr: "B1 entry",
    toCefr: "B1 solid",
    weeks: 24,
    hoursTotal: "~১৮০ ঘণ্টা",
    dailyPlan: "৭৫ মিনিট × ৬ দিন",
    oxfordSlice: "A2 বাকি + B1 সম্পূর্ণ (৬১৫ শব্দ)",
    goalBn: "কাজের আলাপ, professional email, মতামত প্রকাশ, ১০ মিনিটের কথোপকথন, ছোট presentation।",
    color: "b1",
    hasDetail: false,
  },
  {
    n: 3,
    codeBn: "প্রফেশনাল দক্ষতা",
    codeEn: "B2 Professional",
    fromCefr: "B1 solid",
    toCefr: "B2",
    weeks: 28,
    hoursTotal: "~২৫০ ঘণ্টা",
    dailyPlan: "৯০ মিনিট × ৬ দিন",
    oxfordSlice: "B2 সম্পূর্ণ (৫৫০ শব্দ) + AWL ৫৭০",
    goalBn: "ইন্টারভিউ, মিটিং, presentation, BBC/podcast বোঝা, IELTS ৬.৫+ / Cambridge FCE।",
    color: "b2",
    hasDetail: false,
  },
] as const;

// High-level month-by-month milestones for Stage 2 (B1 mastery)
export const STAGE_2_MODULES = [
  {
    month: "মাস ৭",
    focus: "Present Perfect Continuous + Reported speech (indirect)",
    milestone: "১০ মিনিটের অনানুষ্ঠানিক কথোপকথন",
  },
  {
    month: "মাস ৮",
    focus: "Conditionals (Type 1–3) + wish/regret",
    milestone: "কাল্পনিক পরিস্থিতিতে মতামত ও পরামর্শ",
  },
  {
    month: "মাস ৯",
    focus: "Passive voice mastery + relative clauses (defining/non-defining)",
    milestone: "৩০০-শব্দের report লেখা",
  },
  {
    month: "মাস ১০",
    focus: "Discourse markers: however, therefore, moreover, on the other hand",
    milestone: "coherent যুক্তি সাজিয়ে বলা",
  },
  {
    month: "মাস ১১",
    focus: "Phrasal verbs top ২০০ + শীর্ষ ৩০০ collocation",
    milestone: "শব্দের স্বাভাবিক জোড় (natural word pairs)",
  },
  {
    month: "মাস ১২",
    focus: "B1 consolidation + ২টি mock oral exam",
    milestone: "🏆 B1 mastery — Cambridge PET / IELTS ৫.৫–৬.০",
    isCheckpoint: true,
  },
];

// High-level milestones for Stage 3 (B2 professional)
export const STAGE_3_MODULES = [
  {
    month: "মাস ১৩–১৪",
    focus: "Mixed conditionals, subjunctive mood, inversion",
    milestone: "সূক্ষ্ম অর্থের complex বাক্য গঠন",
  },
  {
    month: "মাস ১৫–১৬",
    focus: "Academic Word List (AWL ৫৭০) + register switching (formal/informal)",
    milestone: "context অনুযায়ী ভাষা পরিবর্তন",
  },
  {
    month: "মাস ১৭–১৮",
    focus: "Fast-speech listening (podcast, news @ ১.০× গতি)",
    milestone: "BBC / CNN / TED Talk সরাসরি বোঝা",
  },
  {
    month: "মাস ১৯",
    focus: "Presentation delivery + Q&A handling",
    milestone: "১০ মিনিটের presentation + প্রশ্নোত্তর",
  },
  {
    month: "মাস ২০",
    focus: "Formal writing: essay, report, proposal",
    milestone: "৫০০-শব্দের সুসংগঠিত essay",
  },
  {
    month: "মাস ২১",
    focus: "Job interview / IELTS Speaking mastery + final review",
    milestone: "🏆 B2 professional — IELTS ৬.৫+ / Cambridge FCE",
    isCheckpoint: true,
  },
];

// Oxford 3000 (official) — কোন level-এ কতগুলো, কোন stage-এ শেখানো হয়
export const OXFORD_MAPPING = [
  {
    level: "A1" as const,
    count: 922,
    stage: "Stage 1 (সপ্তাহ ১–১৬)",
    color: "a1",
    desc: "সবচেয়ে বেশি ব্যবহৃত শব্দ — পরিচয়, family, খাবার, সংখ্যা, দিন, basic verbs।",
  },
  {
    level: "A2" as const,
    count: 892,
    stage: "Stage 1 শেষ + Stage 2 শুরু",
    color: "a2",
    desc: "দৈনন্দিন কাজের বিস্তার — travel, health, shopping, weather, feelings।",
  },
  {
    level: "B1" as const,
    count: 615,
    stage: "Stage 2 (মাস ৭–১২)",
    color: "b1",
    desc: "মতামত, তুলনা, cause/effect, workplace communication, opinion phrases।",
  },
  {
    level: "B2" as const,
    count: 550,
    stage: "Stage 3 (মাস ১৩–২১)",
    color: "b2",
    desc: "abstract ধারণা, nuance, academic ও professional discourse, subtle emotion।",
  },
];

export const OXFORD_ACTUAL_TOTAL = 2979;
export const JOURNEY_TOTAL_HOURS = "~৫৭০ ঘণ্টা";
export const JOURNEY_TOTAL_WEEKS = 76;

export const EVIDENCE = [
  {
    who: "Cambridge English",
    what: "প্রতি CEFR level উঠতে গড়ে ~২০০ ঘণ্টার guided study লাগে (বাংলাভাষীদের জন্য ৩০–৫০% বেশি ধরুন)।",
    url: "https://support.cambridgeenglish.org/hc/en-gb/articles/202838506",
  },
  {
    who: "Council of Europe (CEFR)",
    what: 'A1 → C2, ছয়টি স্তরের "can-do" descriptors — বিশ্বজুড়ে ভাষা শেখার মান।',
    url: "https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions",
  },
  {
    who: "Paul Nation (2007) — Four Strands",
    what: "ভালো কোর্সে ৪টি সমান অংশ: Input, Output, Language study, Fluency।",
    url: "https://www.wgtn.ac.nz/lals/resources/paul-nations-resources/paul-nations-publications/publications/documents/2007-Four-strands.pdf",
  },
  {
    who: "Paul Nation (2006) — কত শব্দ দরকার?",
    what: "৯৮% comprehension-এর জন্য spoken-এ ৬,০০০–৭,০০০; written-এ ৮,০০০–৯,০০০ word-family।",
    url: "https://www.scienceguide.nl/wp-content/uploads/2017/11/nation-2006-vocabulary.pdf",
  },
  {
    who: "Stephen Krashen — Comprehensible Input",
    what: '"আমরা ভাষা শিখি যখন আমরা বার্তা বুঝি" — নিয়ম মুখস্থ করে নয়, বোধগম্য input থেকে।',
    url: "https://www.sdkrashen.com/content/articles/case_for_comprehensible_input.pdf",
  },
  {
    who: "Merrill Swain (1985) — Output Hypothesis",
    what: 'চেষ্টা করে বলার সময় brain "gap" ধরে — তাই output ছাড়া শুধু input যথেষ্ট নয়।',
    url: "https://repository.ubn.ru.nl/bitstream/handle/2066/29108/29108___.PDF",
  },
  {
    who: "Hamada (2016) — Shadowing evidence",
    what: "Shadowing lower-proficiency শিক্ষার্থীদের listening দ্রুত improve করে।",
    url: "https://journals.sagepub.com/doi/10.1177/1362168815597504",
  },
  {
    who: "Settles & Meeder (Duolingo, 2016)",
    what: "Spaced Repetition (SRS) fixed-interval-এর চেয়ে অনেক বেশি কার্যকর।",
    url: "https://research.duolingo.com/papers/settles.acl16.pdf",
  },
  {
    who: "Taher (2019) — বাংলাভাষীর pronunciation",
    what: "বাংলায় /f, v, θ, ð, z, ʒ/ নেই — এগুলোই সবচেয়ে বেশি ভুল হয়।",
    url: "https://www.englishjournal.net/archives/2019/vol1issue2/PartA/1-2-15-220.pdf",
  },
  {
    who: "EF EPI 2023 — Bangladesh",
    what: "৬২ নম্বর, Moderate Proficiency; Listening (৪৭২) সবচেয়ে দুর্বল, Writing (৫৫৯) সবচেয়ে ভালো।",
    url: "https://www.ef.com/wwen/epi/regions/asia/bangladesh/",
  },
  {
    who: "Islam (2004) — Bengali L1 interference",
    what: 'US FSI অনুযায়ী বাংলা → English "professional working proficiency"-তে ~১,১০০ ঘণ্টা।',
    url: "https://www.diva-portal.org/smash/get/diva2:517729/fulltext01",
  },
  {
    who: "Lavoué et al. (2022) — Gamification misuse",
    what: 'শুধু streak-এর জন্য app খোলা "শেখা" নয় — mastery-based unlocking বেশি কার্যকর।',
    url: "https://arxiv.org/pdf/2203.16175",
  },
];
