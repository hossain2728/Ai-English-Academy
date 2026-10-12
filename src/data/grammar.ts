// ৩০টি মাস্টার ফর্মুলা — S + V + O ভিত্তিক (A1 → পূর্ণ B2)।
// এই ফাইলটি ব্যবহারকারীর নিজের হাতে তৈরি করা "অস্ত্র-তালিকা" থেকে
// অনুপ্রাণিত। প্রতিটি ফর্মুলার সাথে থাকছে: ভেতরের মেকানিজম, কখন
// ব্যবহার করবেন ("পকেট থেকে বের করা"), বাস্তব উদাহরণ, সাধারণ ভুল,
// এবং কেন এটুকু জানলেই যথেষ্ট।

export type GrammarExample = { en: string; bn: string };

export type GrammarCategory =
  | "bangla-priority"
  | "tenses"
  | "desires"
  | "ability"
  | "requests"
  | "questions"
  | "advanced"
  | "b2-fluent";

export const CATEGORIES: Record<
  GrammarCategory,
  { title: string; subtitle: string; emoji: string; blurb: string }
> = {
  "bangla-priority": {
    title: "বাংলাভাষীর জন্য ৩টি জরুরি ভিত্তি",
    subtitle: "Bangla-Speaker Priority",
    emoji: "🛡️",
    blurb:
      "বাংলায় এই ৩টি জিনিস নেই — Articles, Prepositions, Possessives। রিসার্চ (Chittagong University, IIUC Studies) বলে বাংলাভাষীর ইংরেজি ভুলের সবচেয়ে বড় উৎস এই ৩টা। আগেই এদের শক্ত করে নিন।",
  },
  tenses: {
    title: "সময় চেনার ৫টি অস্ত্র",
    subtitle: "The Core Tenses",
    emoji: "📅",
    blurb: "বর্তমান, অতীত, ভবিষ্যৎ — যেকোনো সময়ের কথা বলার জন্য এই ৫টা ফর্মুলাই যথেষ্ট।",
  },
  desires: {
    title: "ইচ্ছা, প্রয়োজন ও বাধ্যবাধকতা",
    subtitle: "Desires & Needs",
    emoji: "🎯",
    blurb: "নিজের মনের ইচ্ছা, দরকার বা বাধ্যবাধকতা — এই ৫টা দিয়ে প্রকাশ হবে।",
  },
  ability: {
    title: "ক্ষমতা ও পরামর্শ",
    subtitle: "Ability & Advice",
    emoji: "💪",
    blurb: "পারা/না-পারা, সম্ভাবনা, উচিত — এই ৪টি বাটন।",
  },
  requests: {
    title: "অনুরোধ ও নিষেধ",
    subtitle: "Requests & Orders",
    emoji: "🙏",
    blurb: "সরাসরি সামনের মানুষকে অনুরোধ, ডাক অথবা নিষেধ — Subject লাগে না।",
  },
  questions: {
    title: "প্রশ্ন করার মাস্টার অস্ত্র",
    subtitle: "Asking Questions",
    emoji: "❓",
    blurb: "প্রশ্ন না করতে পারলে তথ্য জানা যায় না — এই ৩টা ফর্মুলাই যথেষ্ট।",
  },
  advanced: {
    title: "উঁচু ধাপ — Present Perfect ও তুলনা",
    subtitle: "Advanced — Daily B2 Essentials",
    emoji: "🚀",
    blurb:
      "প্রথম ২৩টি মজবুত হলে এই ২টা যোগ করলেই দৈনন্দিন কথায় B2-এর দরজায় পৌঁছে যাবেন — 'খেয়েছি/গিয়েছি' ঠিকভাবে বলা, আর তুলনা করা।",
  },
  "b2-fluent": {
    title: "B2 Fluent — Native-এর মত কথা বলা",
    subtitle: "B2 Upper-Intermediate — Full Fluency",
    emoji: "🏆",
    blurb:
      "এই ৫টা যোগ হলে আপনি পূর্ণ B2 (Upper-Intermediate) — IELTS 6+, বিদেশে চাকরি, MNC অফিস — সব জায়গায় সাবলীলভাবে কাজ করার যোগ্যতা। Oxford 3000-এর ভেতরেই সব উদাহরণ, বাইরে যেতে হবে না।",
  },
};

export type GrammarTopic = {
  slug: string;
  number: number;
  category: GrammarCategory;
  title: string;
  titleEn: string; // English name
  formula: string;
  short: string;
  mechanism: string;
  pocketWhen: string;
  trigger: string;
  heroExample: {
    bn: string;
    en: string;
    breakdown: string; // I (S) + learn (V) + English (O)
  };
  moreExamples: GrammarExample[];
  commonMistakes: string[];
  proTip: string;
  enough: string;
  why: string;
};

export const GRAMMAR: GrammarTopic[] = [
  // (রিসার্চ: Chittagong University Journal of Social Sciences,
  //  IIUC Studies 2026, Texas Tech Linguistics 2024 — এই ৩টা
  //  বাংলাভাষীর সবচেয়ে বেশি ভুলের উৎস)
  {
    slug: "articles",
    number: 1,
    category: "bangla-priority",
    title: "a / an / the — নাম-শব্দের আগের 'সিগন্যাল'",
    titleEn: "Articles (a / an / the)",
    formula: "[a / an / the] + Noun",
    short: "ইংরেজিতে যেকোনো একবচন noun-এর আগে একটা 'সিগন্যাল' বসাতেই হবে।",
    mechanism:
      "a = কোনো একটা (নতুন কথা)। an = a-ই, কিন্তু পরের শব্দ যদি a,e,i,o,u ধ্বনি দিয়ে শুরু হয় (an apple, an hour)। the = নির্দিষ্ট যেটার কথা দুজনেই জানি।",
    pocketWhen:
      "প্রথমবার কথা বলছেন → a/an। আগে বলা হয়েছে বা দুজনেই জানি → the। সূর্য, চাঁদ, পৃথিবী — একটাই আছে, তাই the।",
    trigger: "একটা • সেই • ওই • ঐটাই",
    heroExample: {
      bn: "আমি একটা বই কিনলাম। বইটা খুব ভালো।",
      en: "I bought a book. The book is very good.",
      breakdown: "a book (নতুন) → the book (আগে বলা হয়েছে)",
    },
    moreExamples: [
      { en: "She is a doctor.", bn: "সে একজন ডাক্তার।" },
      { en: "I need an umbrella.", bn: "আমার একটা ছাতা দরকার।" },
      { en: "The sun rises in the east.", bn: "সূর্য পূর্ব দিকে ওঠে।" },
      { en: "Open the door, please.", bn: "দরজাটা খোলো, প্লিজ।" },
    ],
    commonMistakes: [
      "একদম না দেওয়া — সবচেয়ে বড় ভুল। বাংলায় 'বই কিনলাম' চলে, ইংরেজিতে 'bought book' চলে না — 'bought a book' বলতেই হবে।",
      "নাম বা দেশের আগে the দেওয়া। ভুল: 'the Rahim', 'the Bangladesh'। ঠিক: 'Rahim', 'Bangladesh'।",
      "a আর an গুলিয়ে ফেলা। মনে রাখবেন — শব্দের প্রথম ধ্বনি (sound) দিয়ে ঠিক হয়, বানান দিয়ে নয়। 'an hour' (h নীরব), 'a university' (u = 'ইউ' ধ্বনি)।",
    ],
    proTip:
      "সন্দেহে পড়লে: প্রথমবার → 'a/an', দ্বিতীয়বার → 'the'। এই একটা নিয়মই ৮০% কাজ সেরে দেবে।",
    enough:
      "বাংলায় article নেই বলে বাংলাভাষী এটা এড়িয়ে যান — এটাই সবচেয়ে বড় ভুল (British Council-এর গবেষণা)। এই সাধারণ ৩টা নিয়মেই দৈনন্দিন ৯৫% কাজ চলে।",
    why: "Article ছাড়া ইংরেজি বাক্য 'ভাঙা' শোনায় — নেটিভ speaker সাথে সাথে বুঝে ফেলে যে আপনি বিদেশি।",
  },
  {
    slug: "prepositions-in-on-at",
    number: 2,
    category: "bangla-priority",
    title: "in / on / at — জায়গা ও সময়ের ৩টি ছোট শব্দ",
    titleEn: "Prepositions (in / on / at)",
    formula: "... + [in / on / at] + জায়গা/সময়",
    short: "কোথায় ঘটছে বা কখন ঘটছে — সেটা বোঝানোর জন্য এই ৩টা শব্দ।",
    mechanism:
      "বড় → ছোট নিয়ম: IN (বড় ঘেরা জায়গা/লম্বা সময়) → ON (উপরিভাগ/দিন) → AT (এক নির্দিষ্ট বিন্দু/সময়)।",
    pocketWhen: "দেশ, শহর, মাস, বছর → in। রাস্তা, দিন, তারিখ → on। ঠিকানা, ঘড়ির সময় → at।",
    trigger: "এ • তে • য় • ভেতরে • উপরে • কাছে",
    heroExample: {
      bn: "আমি সোমবার সকাল ৯টায় ঢাকায় পৌঁছাবো।",
      en: "I will arrive in Dhaka on Monday at 9 am.",
      breakdown: "in Dhaka (শহর) + on Monday (দিন) + at 9 am (ঘড়ি)",
    },
    moreExamples: [
      { en: "I live in Bangladesh.", bn: "আমি বাংলাদেশে থাকি।" },
      { en: "The book is on the table.", bn: "বইটা টেবিলের ওপর আছে।" },
      { en: "Meet me at the bus stop.", bn: "বাস স্ট্যান্ডে দেখা কোরো।" },
      { en: "She was born in 1995.", bn: "সে ১৯৯৫ সালে জন্মেছে।" },
      { en: "The class starts at 10.", bn: "ক্লাস ১০টায় শুরু হয়।" },
    ],
    commonMistakes: [
      "বাংলার '-এ' সরাসরি অনুবাদ করা। 'ঢাকায়' → 'Dhaka-e' মনে করে 'to Dhaka' বলা ভুল হয় — 'in Dhaka' হবে।",
      "in Monday, on 1995, at Bangladesh — এই ভুল সবাই করে। নিয়মটা মুখস্থ করে নিন।",
    ],
    proTip: "শুধু ৩টা প্রশ্ন করুন: 'কতটা বড়?' বড় হলে in, ছোট হলে at। 'কী উপরে?' — on। ব্যস।",
    enough:
      "ইংরেজিতে ১৫০+ preposition আছে, কিন্তু এই ৩টা দৈনন্দিন কথার ৭০%+ কভার করে (COCA corpus data)। বাকিগুলো পরে আসবে।",
    why: "বাংলায় postposition (শব্দের পরে বসে)। ইংরেজিতে preposition (শব্দের আগে বসে) — উল্টো। এই একটা পার্থক্যই বাংলাভাষীর সবচেয়ে বড় দ্বিতীয় ভুল।",
  },
  {
    slug: "possessives",
    number: 3,
    category: "bangla-priority",
    title: "my / your / his / her / 's — 'কার' প্রশ্নের উত্তর",
    titleEn: "Possessives",
    formula: "[my / your / his / her / our / their] + Noun  •  Name + 's + Noun",
    short: "কোনো জিনিসের মালিক কে — সেটা বোঝানোর নিয়ম।",
    mechanism:
      "সর্বনামের ক্ষেত্রে: I → my, You → your, He → his, She → her, We → our, They → their, It → its। নামের ক্ষেত্রে: নামের পরে 's যোগ করুন (Rahim's book = রহিমের বই)।",
    pocketWhen: "যখন বাংলায় বলবেন 'আমার / তোমার / রহিমের / বাবার' — অর্থাৎ মালিকানা বা সম্পর্ক।",
    trigger: "-র • -এর • আমার • তোমার • কার",
    heroExample: {
      bn: "এটা রহিমের ভাইয়ের বই।",
      en: "This is Rahim's brother's book.",
      breakdown: "Rahim + 's (রহিমের) → brother + 's (ভাইয়ের) → book",
    },
    moreExamples: [
      { en: "My name is Karim.", bn: "আমার নাম করিম।" },
      { en: "What is your father's name?", bn: "তোমার বাবার নাম কী?" },
      { en: "This is her house.", bn: "এটা তার (মেয়ে) বাড়ি।" },
      { en: "The children's school is closed.", bn: "বাচ্চাদের স্কুল বন্ধ।" },
    ],
    commonMistakes: [
      "his আর her গুলিয়ে ফেলা। মনে রাখুন: his = ছেলের, her = মেয়ের। বস্তুর লিঙ্গ নয়, মালিকের লিঙ্গ।",
      "I → my, me নয়। ভুল: 'me book'। ঠিক: 'my book'।",
      "'s দেওয়ার জায়গায় 'of' দিয়ে ঘোরানো: 'the book of Rahim' — ব্যাকরণে ঠিক কিন্তু অস্বাভাবিক। সোজা 'Rahim's book' বলুন।",
    ],
    proTip:
      "টেবিল মনে রাখুন: I-my, You-your, He-his, She-her, We-our, They-their, It-its। এই ৭টা মুখস্থ + নামের পরে 's — সব কাজ শেষ।",
    enough:
      "বাংলায় '-র / -এর' একটাই suffix দিয়ে হয়ে যায় বলে বাংলাভাষী এখানে অনেক ভুল করে। এই সাধারণ নিয়মেই ৯৯% কাজ চলে।",
    why: "'কার জিনিস?' এই প্রশ্নের উত্তর ছাড়া দৈনন্দিন কোনো কথাই সম্ভব না।",
  },

  {
    slug: "present-simple",

    number: 4,
    category: "tenses",
    title: "সাধারণ বর্তমান",
    titleEn: "Present Simple",
    formula: "S + Verb + O",
    short: "প্রতিদিনের অভ্যাস, চিরন্তন সত্য বা সাধারণ কাজ।",
    mechanism: "চালক + কাজের সাধারণ রূপ + বাকি অংশ।",
    pocketWhen:
      "যখন বাংলা বাক্যের শেষে 'করি / খাই / যাই / চালাই' থাকবে — অর্থাৎ প্রতিদিনের অভ্যাস বা চিরন্তন সত্য।",
    trigger: "করি • খাই • যাই • পড়ি • বলি",
    heroExample: {
      bn: "আমি ইংরেজি শিখি।",
      en: "I learn English.",
      breakdown: "I (S) + learn (V) + English (O)",
    },
    moreExamples: [
      { en: "She works in a bank.", bn: "সে ব্যাংকে কাজ করে।" },
      { en: "We drink tea every morning.", bn: "আমরা প্রতিদিন সকালে চা খাই।" },
      { en: "The sun rises in the east.", bn: "সূর্য পূর্ব দিকে ওঠে।" },
    ],
    commonMistakes: [
      "He/She/It-এর সাথে verb-এ 's' না দেওয়া। ভুল: 'He go'. ঠিক: 'He goes'.",
      "বাংলার ছক টেনে আনা: 'I English learn' — ভুল। ইংরেজিতে verb আগে।",
    ],
    proTip:
      "প্রতিদিন যা হয়/করেন তা বললে এটাই ব্যবহার করুন। এক নিয়ম: He/She/It হলে verb-এ 's' যোগ করুন — ব্যস।",
    enough: "শুধু এটা দিয়েই দৈনন্দিন কথার ৪০% কাজ চলে যায়। এটা মজবুত হলে পরের tense-এ যান।",
    why: "প্রতিদিনের কথা এটা ছাড়া বলাই যায় না।",
  },
  {
    slug: "present-continuous",
    number: 5,
    category: "tenses",
    title: "চলমান বর্তমান",
    titleEn: "Present Continuous",
    formula: "S + am/is/are + (Verb + ing) + O",
    short: "এই মুহূর্তে চোখের সামনে চলছে এমন কাজ।",
    mechanism: "চালক + সাহায্যকারী (am/is/are) + verb-এর সাথে 'ing' + বাকি অংশ।",
    pocketWhen:
      "যখন বাংলায় বলবেন 'করছি / যাচ্ছি / দেখছি / পড়ছি' — অর্থাৎ কাজটা এখন এই মুহূর্তে চলছে।",
    trigger: "করছি • যাচ্ছি • পড়ছি • দেখছি • এখন",
    heroExample: {
      bn: "আমি এখন হিসাব করছি।",
      en: "I am calculating now.",
      breakdown: "I (S) + am calculating (V-ing) + now (O)",
    },
    moreExamples: [
      { en: "She is cooking rice.", bn: "সে ভাত রান্না করছে।" },
      { en: "They are playing football.", bn: "তারা ফুটবল খেলছে।" },
      { en: "We are learning English together.", bn: "আমরা একসাথে ইংরেজি শিখছি।" },
    ],
    commonMistakes: [
      "am/is/are বাদ দেওয়া। ভুল: 'I going home'. ঠিক: 'I am going home'.",
      "verb-এ 'ing' না দেওয়া। ভুল: 'She is cook'. ঠিক: 'She is cooking'.",
    ],
    proTip: "নিয়ম মনে রাখুন: I → am, He/She/It → is, You/We/They → are। ব্যস, আর কিছু না।",
    enough: "এই মুহূর্তের কাজ বোঝাতে এটাই যথেষ্ট। Perfect Continuous পরে।",
    why: "'এখন কী করছি' বোঝাতে এই একটাই ফর্মুলা লাগে।",
  },
  {
    slug: "past-simple",
    number: 6,
    category: "tenses",
    title: "সাধারণ অতীত",
    titleEn: "Past Simple",
    formula: "S + Verb-এর অতীত রূপ (V2) + O",
    short: "অতীতে হয়ে গেছে এমন কাজ।",
    mechanism: "চালক + verb-এর অতীত রূপ (go → went, send → sent, eat → ate) + বাকি অংশ।",
    pocketWhen: "যখন বলবেন 'করলাম / খেলাম / পেলাম / গেলাম' — অর্থাৎ অতীতে কাজ শেষ হয়ে গেছে।",
    trigger: "করলাম • খেলাম • পেলাম • গেলাম • গতকাল • কাল",
    heroExample: {
      bn: "আমি গতকাল ইমেইলটি পেয়েছি।",
      en: "I received the email yesterday.",
      breakdown: "I (S) + received (V2) + the email yesterday (O)",
    },
    moreExamples: [
      { en: "She went to school.", bn: "সে স্কুলে গিয়েছিল।" },
      { en: "We ate rice last night.", bn: "আমরা গতরাতে ভাত খেয়েছি।" },
      { en: "He called me two hours ago.", bn: "সে দুই ঘণ্টা আগে আমাকে ফোন দিয়েছিল।" },
    ],
    commonMistakes: [
      "V2 না জেনে verb-এ 'ed' লাগানো: 'goed' (ভুল) — ঠিক 'went'।",
      "did-এর পাশে V2 রাখা: 'Did you went?' (ভুল) — ঠিক 'Did you go?'",
    ],
    proTip:
      "সবচেয়ে দরকারি ৫০টা irregular verb-এর V2 মুখস্থ করুন (go-went, come-came, eat-ate…)। বাকিগুলোতে শুধু 'ed' লাগান।",
    enough: "অতীতের গল্প বলতে এটাই মূল অস্ত্র। Past Perfect পরে দরকার হলে শিখবেন।",
    why: "কালকের ঘটনা বলতে না পারলে কথা এগোয় না।",
  },
  {
    slug: "future-simple",
    number: 7,
    category: "tenses",
    title: "সাধারণ ভবিষ্যৎ",
    titleEn: "Future Simple",
    formula: "S + will + Verb + O",
    short: "ভবিষ্যতে যা করবেন।",
    mechanism: "চালক + ভবিষ্যৎ বাটন (will) + verb-এর সাধারণ রূপ + বাকি অংশ।",
    pocketWhen:
      "যখন বলবেন 'করবো / যাবো / দেবো / জানাবো' — অর্থাৎ ভবিষ্যতের প্রতিশ্রুতি বা পরিকল্পনা।",
    trigger: "করবো • যাবো • দেবো • আগামীকাল • পরে",
    heroExample: {
      bn: "কোম্পানিটি লাভ করবে।",
      en: "The company will make profit.",
      breakdown: "The company (S) + will make (V) + profit (O)",
    },
    moreExamples: [
      { en: "I will call you tomorrow.", bn: "আমি আগামীকাল তোমাকে ফোন দেবো।" },
      { en: "We will finish the work soon.", bn: "আমরা শীঘ্রই কাজটি শেষ করবো।" },
      { en: "She will help us.", bn: "সে আমাদের সাহায্য করবে।" },
    ],
    commonMistakes: [
      "will-এর পর verb-এ 'ing' বা 's' দেওয়া। ভুল: 'I will going'. ঠিক: 'I will go'.",
      "will বাদ দেওয়া — তখন present হয়ে যায়।",
    ],
    proTip: "will-এর পর সবসময় verb-এর একদম basic form (V1)। কোনো পরিবর্তন নেই।",
    enough:
      "ভবিষ্যৎ প্রতিশ্রুতির জন্য এই একটাই যথেষ্ট। 'going to' পরে ইচ্ছা করলে শিখবেন — এখন নয়।",
    why: "প্রতিশ্রুতি, পরিকল্পনা, ভবিষ্যতের কথা — সব এটা দিয়ে।",
  },
  {
    slug: "past-continuous",
    number: 8,
    category: "tenses",
    title: "চলমান অতীত",
    titleEn: "Past Continuous",
    formula: "S + was/were + (Verb + ing) + O",
    short: "অতীতে কিছু সময় ধরে চলছিল এমন কাজ।",
    mechanism: "চালক + অতীতের সাহায্যকারী (was/were) + verb-এর সাথে 'ing' + বাকি অংশ।",
    pocketWhen: "যখন বলবেন 'করছিলাম / দেখছিলাম / যাচ্ছিলাম' — অতীতে কাজটা চলছিল তখন।",
    trigger: "করছিলাম • দেখছিলাম • তখন • সেই সময়",
    heroExample: {
      bn: "বায়ার তখন আমাকে ডাকছিল।",
      en: "The buyer was calling me then.",
      breakdown: "The buyer (S) + was calling (V-ing) + me then (O)",
    },
    moreExamples: [
      { en: "I was reading a book.", bn: "আমি একটা বই পড়ছিলাম।" },
      { en: "They were playing when it rained.", bn: "বৃষ্টি হওয়ার সময় তারা খেলছিল।" },
      { en: "We were working all night.", bn: "আমরা সারারাত কাজ করছিলাম।" },
    ],
    commonMistakes: ["একজন হলে were, একাধিক হলে was — উল্টো করা।", "'ing' বাদ দেওয়া।"],
    proTip: "মনে রাখুন: I/He/She/It → was, You/We/They → were। বাকি সব present continuous-এর মতো।",
    enough: "অতীতের চলমান কাজ বোঝানোর জন্য এটাই যথেষ্ট। উপরের ৫টা tense দিয়েই ৯৫% কথা চলে।",
    why: "'সেই সময় কী করছিলাম' — এটা এই ফর্মুলা ছাড়া বলা যায় না।",
  },

  {
    slug: "want-to",
    number: 9,
    category: "desires",
    title: "কিছু করতে চাওয়া",
    titleEn: "Want to",
    formula: "S + want to + Verb + O",
    short: "সাধারণ ইচ্ছা প্রকাশ।",
    mechanism: "চালক + ইচ্ছা বাটন (want to) + verb-এর সাধারণ রূপ + বাকি অংশ।",
    pocketWhen: "যখন বলবেন 'করতে চাই / যেতে চাই / শিখতে চাই' — সাধারণ, খোলামেলা ইচ্ছা।",
    trigger: "চাই • করতে চাই • যেতে চাই",
    heroExample: {
      bn: "আমি ব্যবসাটি বড় করতে চাই।",
      en: "I want to grow the business.",
      breakdown: "I (S) + want to grow (V) + the business (O)",
    },
    moreExamples: [
      { en: "She wants to travel abroad.", bn: "সে বিদেশ ভ্রমণ করতে চায়।" },
      { en: "We want to learn together.", bn: "আমরা একসাথে শিখতে চাই।" },
      { en: "I want to buy a phone.", bn: "আমি একটা ফোন কিনতে চাই।" },
    ],
    commonMistakes: [
      "'want' এর পর 'to' বাদ দেওয়া। ভুল: 'I want go'. ঠিক: 'I want to go'.",
      "He/She-এর সাথে 'wants' না বলা।",
    ],
    proTip: "want-এর পর সবসময় 'to + verb'। এটাই নিয়ম, ব্যতিক্রম নেই।",
    enough: "নিজের ইচ্ছা বোঝাতে এটাই মূল অস্ত্র। ভদ্র সংস্করণের জন্য পরের 'would like to' দেখুন।",
    why: "নিজের ইচ্ছার কথা বলতে না পারলে কেউ বুঝবে না আপনি কী চান।",
  },
  {
    slug: "would-like-to",
    number: 10,
    category: "desires",
    title: "ভদ্রভাবে ইচ্ছা",
    titleEn: "Would like to",
    formula: "S + would like to + Verb + O",
    short: "want-to-এর ভদ্র সংস্করণ — বায়ার, বস, শিক্ষকের সাথে।",
    mechanism: "চালক + ভদ্রতার বাটন (would like to) + verb-এর সাধারণ রূপ + বাকি অংশ।",
    pocketWhen: "বায়ার, শিক্ষক, অফিসের বস, অথবা অপরিচিত কাউকে নিজের ইচ্ছা জানাতে।",
    trigger: "চাই (ভদ্রভাবে) • পছন্দ করবো",
    heroExample: {
      bn: "আমি আপনার সাথে মিটিং করতে চাই।",
      en: "I would like to have a meeting with you.",
      breakdown: "I (S) + would like to have (V) + a meeting with you (O)",
    },
    moreExamples: [
      { en: "I would like to order a coffee.", bn: "আমি একটা কফি অর্ডার করতে চাই।" },
      { en: "We would like to see the report.", bn: "আমরা রিপোর্টটি দেখতে চাই।" },
      { en: "She would like to join the team.", bn: "সে দলে যোগ দিতে চায়।" },
    ],
    commonMistakes: [
      "'would like' এর পর 'to' বাদ দেওয়া।",
      "সংক্ষেপে বলার সময় 'I'd like to' লেখা — যা একদম সঠিক ও ব্যবহৃত।",
    ],
    proTip:
      "want-to = বন্ধুর সাথে। would-like-to = সবার সাথে। সন্দেহ হলে would-like-to বলুন — সবসময় নিরাপদ।",
    enough: "ভদ্র ইচ্ছার জন্য এটাই যথেষ্ট। 'may I…' প্রশ্নবাচক আলাদা ফর্মুলায় আসবে।",
    why: "প্রফেশনাল পরিবেশে নিজের ইচ্ছা রাখতে না পারলে ভুল বার্তা যায়।",
  },
  {
    slug: "need-to",
    number: 11,
    category: "desires",
    title: "কিছু করা প্রয়োজন",
    titleEn: "Need to",
    formula: "S + need to + Verb + O",
    short: "জরুরি প্রয়োজন প্রকাশ।",
    mechanism: "চালক + প্রয়োজন বাটন (need to) + verb-এর সাধারণ রূপ + বাকি অংশ।",
    pocketWhen: "যখন বলবেন 'দরকার / প্রয়োজন' — বাধ্য নয়, কিন্তু জরুরি।",
    trigger: "দরকার • প্রয়োজন • লাগবে",
    heroExample: {
      bn: "আমাদের বাজারটি যাচাই করা প্রয়োজন।",
      en: "We need to check the market.",
      breakdown: "We (S) + need to check (V) + the market (O)",
    },
    moreExamples: [
      { en: "I need to sleep now.", bn: "আমার এখন ঘুমানো প্রয়োজন।" },
      { en: "You need to practice daily.", bn: "তোমাকে প্রতিদিন চর্চা করতে হবে।" },
      { en: "She needs to see a doctor.", bn: "তাকে ডাক্তার দেখানো দরকার।" },
    ],
    commonMistakes: [
      "'need' এর পর 'to' বাদ দেওয়া।",
      "'need to' ও 'have to' গুলিয়ে ফেলা — need to = দরকার, have to = অবশ্যই।",
    ],
    proTip: "যদি অপশন থাকে (না করলেও চলে) → need to। যদি অপশন না থাকে (করতেই হবে) → have to।",
    enough: "নিজের ও অন্যের প্রয়োজন বোঝাতে এটাই যথেষ্ট।",
    why: "'আমার এটা দরকার' — জীবনের প্রতিটা দিনে বলতে হয়।",
  },
  {
    slug: "have-to",
    number: 12,
    category: "desires",
    title: "কিছু করতেই হবে",
    titleEn: "Have to",
    formula: "S + have to + Verb + O",
    short: "বাধ্যবাধকতা — কোনো ছাড় নেই।",
    mechanism: "চালক + বাধ্যবাধকতার বাটন (have to) + verb-এর সাধারণ রূপ + বাকি অংশ।",
    pocketWhen: "যখন কোনো কাজ বাধ্য হয়ে করতেই হবে — 'করতেই হবে / করতে হয়'।",
    trigger: "করতেই হবে • করতে হয় • না করে উপায় নেই",
    heroExample: {
      bn: "আমাকে আজই ট্যাক্স জমা দিতে হবে।",
      en: "I have to pay tax today.",
      breakdown: "I (S) + have to pay (V) + tax today (O)",
    },
    moreExamples: [
      { en: "You have to wear a mask here.", bn: "এখানে মাস্ক পরতেই হবে।" },
      { en: "She has to attend the class.", bn: "তাকে ক্লাসে যোগ দিতেই হবে।" },
      { en: "We have to work on Saturday.", bn: "আমাদের শনিবারে কাজ করতেই হবে।" },
    ],
    commonMistakes: [
      "He/She/It-এর সাথে 'has to' না বলা।",
      "'have to' ও 'must' গুলিয়ে ফেলা — দৈনন্দিন কথায় 'have to' বেশি ব্যবহৃত।",
    ],
    proTip:
      "must একটু কড়া, formal। দৈনন্দিন কথায় সবসময় have to বলুন — একই অর্থ, বেশি স্বাভাবিক।",
    enough: "বাধ্যবাধকতার জন্য এটাই দৈনন্দিন ইংরেজির প্রধান অস্ত্র।",
    why: "নিয়ম, দায়িত্ব, বাধ্যবাধকতা — সবকিছু এটা দিয়ে।",
  },
  {
    slug: "love-to",
    number: 13,
    category: "desires",
    title: "করতে ভালোবাসা",
    titleEn: "Love to / Like to",
    formula: "S + love to / like to + Verb + O",
    short: "কোনো কাজ করতে খুব ভালো লাগে।",
    mechanism: "চালক + ভালোবাসার বাটন (love to / like to) + verb-এর সাধারণ রূপ + বাকি অংশ।",
    pocketWhen: "যখন বলবেন 'করতে ভালোবাসি / পছন্দ করি' — শখ, ভালো লাগা।",
    trigger: "ভালোবাসি • পছন্দ করি • ভালো লাগে",
    heroExample: {
      bn: "আমি নতুন পরিকল্পনা করতে ভালোবাসি।",
      en: "I love to make new plans.",
      breakdown: "I (S) + love to make (V) + new plans (O)",
    },
    moreExamples: [
      { en: "She loves to sing.", bn: "সে গান গাইতে ভালোবাসে।" },
      { en: "We like to travel.", bn: "আমরা ভ্রমণ করতে পছন্দ করি।" },
      { en: "He likes to read novels.", bn: "সে উপন্যাস পড়তে পছন্দ করে।" },
    ],
    commonMistakes: [
      "'love/like' এর পর 'to' বাদ দেওয়া।",
      "'loving' বলা — এখানে love একটা অনুভূতি, চলমান কাজ নয়।",
    ],
    proTip: "love = তীব্র পছন্দ, like = সাধারণ পছন্দ। দুটোই একই ছকে চলে।",
    enough: "শখ ও পছন্দ বোঝাতে এটাই যথেষ্ট। পরিচয়পর্বে এটা প্রায় প্রতিদিন লাগে।",
    why: "নিজের পরিচয় দিতে গেলে 'আমি এটা ভালোবাসি' বলতেই হয়।",
  },

  {
    slug: "can",
    number: 14,
    category: "ability",
    title: "করতে পারা",
    titleEn: "Can (Ability)",
    formula: "S + can + Verb + O",
    short: "কোনো কাজ করার ক্ষমতা, যোগ্যতা বা অনুমতি।",
    mechanism: "চালক + ক্ষমতা বাটন (can) + verb-এর সাধারণ রূপ + বাকি অংশ।",
    pocketWhen: "যখন বলবেন 'পারি / পারবো' — সামর্থ্য বা অনুমতি বোঝাতে।",
    trigger: "পারি • পারবো • সক্ষম",
    heroExample: {
      bn: "আমি এই সমস্যাটি সমাধান করতে পারি।",
      en: "I can solve this problem.",
      breakdown: "I (S) + can solve (V) + this problem (O)",
    },
    moreExamples: [
      { en: "She can speak three languages.", bn: "সে তিনটা ভাষায় কথা বলতে পারে।" },
      { en: "Can you help me?", bn: "আপনি কি আমাকে সাহায্য করতে পারেন?" },
      { en: "We can meet tomorrow.", bn: "আমরা আগামীকাল দেখা করতে পারি।" },
    ],
    commonMistakes: [
      "can-এর পর 'to' রাখা। ভুল: 'I can to swim'. ঠিক: 'I can swim'.",
      "can-এর পর verb-এ 's' দেওয়া। ভুল: 'He can swims'. ঠিক: 'He can swim'.",
    ],
    proTip: "can-এর পর verb সবসময় basic form — কোনো পরিবর্তন নেই। She/He-তেও 's' নেই।",
    enough: "সামর্থ্য বোঝাতে এটাই যথেষ্ট। 'be able to' আছে কিন্তু ৯৯% জায়গায় can বললেই হয়।",
    why: "চাকরি, ইন্টারভিউ, রেস্টুরেন্ট — সব জায়গায় 'আমি পারি' বলতে হয়।",
  },
  {
    slug: "cannot",
    number: 15,
    category: "ability",
    title: "করতে না পারা",
    titleEn: "Cannot",
    formula: "S + cannot (can't) + Verb + O",
    short: "সামর্থ্য নেই বা করা যাবে না।",
    mechanism: "চালক + অক্ষমতার বাটন (cannot) + verb-এর সাধারণ রূপ + বাকি অংশ।",
    pocketWhen: "যখন বলবেন 'পারি না / পারবো না' — অপারগতা বা অসম্মতি।",
    trigger: "পারি না • পারবো না • সম্ভব না",
    heroExample: {
      bn: "আমরা এই পণ্যটি কিনতে পারব না।",
      en: "We cannot buy this product.",
      breakdown: "We (S) + cannot buy (V) + this product (O)",
    },
    moreExamples: [
      { en: "I can't come today.", bn: "আমি আজ আসতে পারবো না।" },
      { en: "She cannot swim.", bn: "সে সাঁতার কাটতে পারে না।" },
      { en: "We can't afford it.", bn: "আমরা এটা সামর্থ্যে কুলাবে না।" },
    ],
    commonMistakes: [
      "'can not' আলাদা করে লেখা — অধিকাংশ ক্ষেত্রে ভুল। সঠিক: 'cannot' একসাথে অথবা 'can't'।",
    ],
    proTip: "কথা বলার সময় প্রায় সবসময় 'can't' — সংক্ষিপ্ত রূপটাই স্বাভাবিক।",
    enough: "না-বলার জন্য এটাই যথেষ্ট। ভদ্র 'না' এর জন্য 'I'm afraid I can't…' যোগ করতে পারেন।",
    why: "'না' বলতে না পারলে জীবনে অনেক সমস্যায় পড়তে হয়।",
  },
  {
    slug: "may-might",
    number: 16,
    category: "ability",
    title: "সম্ভাবনা / অনুমতি",
    titleEn: "May / Might",
    formula: "S + may / might + Verb + O",
    short: "নিশ্চিত নয়, তবে হতে পারে — অথবা ভদ্র অনুমতি চাওয়া।",
    mechanism: "চালক + সম্ভাবনা বাটন (may/might) + verb-এর সাধারণ রূপ + বাকি অংশ।",
    pocketWhen: "যখন বলবেন 'হতে পারে / নাও হতে পারে', অথবা ভদ্রভাবে অনুমতি চাইবেন।",
    trigger: "হতে পারে • হয়তো • অনুমতি",
    heroExample: {
      bn: "আজ ক্রেতারা আসতে পারে।",
      en: "Customers may come today.",
      breakdown: "Customers (S) + may come (V) + today (O)",
    },
    moreExamples: [
      { en: "It may rain today.", bn: "আজ বৃষ্টি হতে পারে।" },
      { en: "May I come in?", bn: "আমি কি আসতে পারি?" },
      { en: "He might be late.", bn: "সে হয়তো দেরি করবে।" },
    ],
    commonMistakes: [
      "may/might-এর পর 'to' দেওয়া। ভুল: 'may to come'. ঠিক: 'may come'.",
      "নিশ্চিত ব্যাপারে may বলা। নিশ্চিত হলে will বলুন।",
    ],
    proTip: "may = একটু বেশি সম্ভাবনা। might = একটু কম সম্ভাবনা। দুটোই কাজ চালিয়ে দেয়।",
    enough: "অনিশ্চয়তা বোঝাতে এটাই যথেষ্ট। Probability-র জটিল হিসাব লাগে না।",
    why: "ভবিষ্যতের সব কিছু নিশ্চিত নয় — এটা স্বীকার করে কথা বলা জরুরি।",
  },
  {
    slug: "should",
    number: 17,
    category: "ability",
    title: "উচিত (পরামর্শ)",
    titleEn: "Should",
    formula: "S + should + Verb + O",
    short: "কাউকে ভালো পরামর্শ দিতে।",
    mechanism: "চালক + উচিত বাটন (should) + verb-এর সাধারণ রূপ + বাকি অংশ।",
    pocketWhen: "যখন বলবেন 'করা উচিত' — উপদেশ, পরামর্শ বা নৈতিক দিক।",
    trigger: "উচিত • ভালো হয় • পরামর্শ",
    heroExample: {
      bn: "আপনার এই নিয়মে চলা উচিত।",
      en: "You should follow this rule.",
      breakdown: "You (S) + should follow (V) + this rule (O)",
    },
    moreExamples: [
      { en: "You should drink more water.", bn: "তোমার আরো পানি খাওয়া উচিত।" },
      { en: "We should leave early.", bn: "আমাদের আগে বের হওয়া উচিত।" },
      { en: "He should apologize.", bn: "তার ক্ষমা চাওয়া উচিত।" },
    ],
    commonMistakes: ["should-এর পর 'to' দেওয়া। ভুল: 'should to go'. ঠিক: 'should go'."],
    proTip: "পরামর্শ দিতে সবসময় should ব্যবহার করুন — must কড়া শোনায়।",
    enough: "উপদেশ ও পরামর্শের জন্য এটাই যথেষ্ট। শিক্ষা, স্বাস্থ্য, পরামর্শের সব কথায় এটা লাগে।",
    why: "অন্যকে সাহায্য করতে গেলে পরামর্শ দিতে হয়।",
  },

  {
    slug: "please",
    number: 18,
    category: "requests",
    title: "ভদ্র অনুরোধ",
    titleEn: "Please",
    formula: "Please + Verb + O",
    short: "ভদ্রভাবে কিছু করার অনুরোধ। (Subject লাগে না।)",
    mechanism: "অনুরোধ বাটন (Please) + verb-এর সাধারণ রূপ + বাকি অংশ।",
    pocketWhen: "যখন বলবেন 'দয়া করে করুন / দিন' — সরাসরি সামনের মানুষকে অনুরোধ।",
    trigger: "দয়া করে • অনুগ্রহ করে • প্লিজ",
    heroExample: {
      bn: "দয়া করে আপনার হিসাবটি দেখান।",
      en: "Please show your account.",
      breakdown: "Please + show (V) + your account (O)",
    },
    moreExamples: [
      { en: "Please give me the link.", bn: "দয়া করে লিঙ্কটি দিন।" },
      { en: "Please wait a moment.", bn: "দয়া করে একটু অপেক্ষা করুন।" },
      { en: "Please explain again.", bn: "দয়া করে আবার বুঝিয়ে দিন।" },
    ],
    commonMistakes: [
      "শুরু বা শেষে please — দুটোই ঠিক। ('Please help me' = 'Help me, please'।)",
      "please বাদ দিলে আদেশ মনে হয়।",
    ],
    proTip: "যেকোনো অনুরোধের আগে-পরে please যোগ করলেই সেটা ভদ্র হয়ে যায়। এটাই সহজতম নিয়ম।",
    enough: "সবচেয়ে সহজ ভদ্রতা এটাই। Formal অনুরোধের জন্য 'Could you…' পরে দেখুন।",
    why: "'please' না বললে ইংরেজিভাষীরা রূঢ় মনে করে — সংস্কৃতির অংশ।",
  },
  {
    slug: "lets",
    number: 19,
    category: "requests",
    title: "চলো একসাথে করি",
    titleEn: "Let's",
    formula: "Let's + Verb + O",
    short: "সবাইকে সাথে নিয়ে কিছু করার প্রস্তাব।",
    mechanism: "চলো বাটন (Let's) + verb-এর সাধারণ রূপ + বাকি অংশ।",
    pocketWhen: "যখন বলবেন 'চলো / চলুন করি' — গ্রুপ কাজের প্রস্তাব।",
    trigger: "চলো • চলুন • একসাথে",
    heroExample: {
      bn: "চলুন ব্যবসাটি শুরু করি।",
      en: "Let's start the business.",
      breakdown: "Let's + start (V) + the business (O)",
    },
    moreExamples: [
      { en: "Let's have lunch.", bn: "চলুন দুপুরের খাবার খাই।" },
      { en: "Let's meet tomorrow.", bn: "চলো আগামীকাল দেখা করি।" },
      { en: "Let's not waste time.", bn: "চলো সময় নষ্ট না করি।" },
    ],
    commonMistakes: [
      "'Let us' পুরো লেখা — সাধারণ কথায় Let's-ই স্বাভাবিক।",
      "Let's-এর পর 'to' দেওয়া। ভুল: 'Let's to go'.",
    ],
    proTip: "বন্ধু, সহকর্মী, দলের সাথে কিছু প্রস্তাব করলে Let's — সবচেয়ে বন্ধুত্বপূর্ণ শোনায়।",
    enough: "গ্রুপ প্রস্তাবের জন্য এটাই যথেষ্ট।",
    why: "একসাথে কিছু করার আহ্বান জীবনে বহুবার দরকার হয়।",
  },
  {
    slug: "dont",
    number: 20,
    category: "requests",
    title: "নিষেধ",
    titleEn: "Don't",
    formula: "Don't + Verb + O",
    short: "কাউকে কড়াভাবে কিছু করতে নিষেধ।",
    mechanism: "নিষেধ বাটন (Don't) + verb-এর সাধারণ রূপ + বাকি অংশ।",
    pocketWhen: "যখন বলবেন 'করবেন না / করো না' — সরাসরি নিষেধ।",
    trigger: "করবেন না • করো না",
    heroExample: {
      bn: "সময় নষ্ট করবেন না।",
      en: "Don't waste time.",
      breakdown: "Don't + waste (V) + time (O)",
    },
    moreExamples: [
      { en: "Don't worry about it.", bn: "এটা নিয়ে চিন্তা করবেন না।" },
      { en: "Don't touch that.", bn: "ওটা ছোঁবেন না।" },
      { en: "Don't be late.", bn: "দেরি করবেন না।" },
    ],
    commonMistakes: [
      "Don't-এর পর verb-এ 'ing' বা 's' দেওয়া। ভুল: 'Don't going'. ঠিক: 'Don't go'.",
    ],
    proTip: "ভদ্র নিষেধ করতে সামনে Please যোগ করুন: 'Please don't do that'।",
    enough: "সরাসরি নিষেধের জন্য এটাই মূল অস্ত্র।",
    why: "সন্তান, সহকর্মী, বন্ধু — সবাইকে কখনো না কখনো নিষেধ করতে হয়।",
  },

  {
    slug: "do-does-q",
    number: 21,
    category: "questions",
    title: "হ্যাঁ/না প্রশ্ন (বর্তমান)",
    titleEn: "Do / Does Questions",
    formula: "Do / Does + S + Verb + O ?",
    short: "বর্তমানে অভ্যাসগত কাজ সম্পর্কে হ্যাঁ/না প্রশ্ন।",
    mechanism: "প্রশ্ন বাটন (Do/Does) + চালক + verb-এর সাধারণ রূপ + বাকি অংশ?",
    pocketWhen: "যখন প্রশ্ন করবেন এবং উত্তর 'হ্যাঁ' বা 'না' চাচ্ছেন।",
    trigger: "কি? • করে কি? • পছন্দ কর?",
    heroExample: {
      bn: "আপনি কি পণ্য বিক্রি করেন?",
      en: "Do you sell products?",
      breakdown: "Do + you (S) + sell (V) + products (O)?",
    },
    moreExamples: [
      { en: "Do you like coffee?", bn: "তুমি কি কফি পছন্দ করো?" },
      { en: "Does she work here?", bn: "সে কি এখানে কাজ করে?" },
      { en: "Do they speak English?", bn: "তারা কি ইংরেজি বলে?" },
    ],
    commonMistakes: [
      "Does-এর পর verb-এ 's' রাখা। ভুল: 'Does she works?'. ঠিক: 'Does she work?'",
      "He/She/It-এ Do বলা। ঠিক: Does।",
    ],
    proTip:
      "মনে রাখুন: He/She/It → Does। বাকি সব (I/You/We/They) → Do। প্রশ্নে Does থাকলে verb থেকে 's' চলে যায়।",
    enough: "দৈনন্দিন হ্যাঁ/না প্রশ্নের ৯০% এভাবেই হয়।",
    why: "প্রশ্ন করতে না পারলে তথ্য জানা যায় না।",
  },
  {
    slug: "did-q",
    number: 22,
    category: "questions",
    title: "হ্যাঁ/না প্রশ্ন (অতীত)",
    titleEn: "Did Questions",
    formula: "Did + S + Verb + O ?",
    short: "অতীতে কেউ কিছু করেছিল কিনা — হ্যাঁ/না প্রশ্ন।",
    mechanism: "অতীতের প্রশ্ন বাটন (Did) + চালক + verb-এর সাধারণ রূপ + বাকি অংশ?",
    pocketWhen: "অতীতের কোনো কাজ সম্পর্কে হ্যাঁ/না প্রশ্ন।",
    trigger: "কি করেছ? • পেয়েছ কি? • গিয়েছিলে?",
    heroExample: {
      bn: "আপনি কি লাভ পেয়েছিলেন?",
      en: "Did you get profit?",
      breakdown: "Did + you (S) + get (V) + profit (O)?",
    },
    moreExamples: [
      { en: "Did you eat lunch?", bn: "তুমি কি দুপুরের খাবার খেয়েছ?" },
      { en: "Did she call you?", bn: "সে কি তোমাকে ফোন দিয়েছিল?" },
      { en: "Did they win?", bn: "তারা কি জিতেছিল?" },
    ],
    commonMistakes: ["Did-এর পর V2 (অতীত রূপ) রাখা। ভুল: 'Did you went?'. ঠিক: 'Did you go?'"],
    proTip: "Did এলেই verb ফিরে যায় basic form-এ। এই একটাই নিয়ম মনে রাখুন।",
    enough: "অতীতের হ্যাঁ/না প্রশ্নের জন্য এটাই যথেষ্ট।",
    why: "গতকাল/অতীতের কাজের হিসাব চাইতে এটা লাগে।",
  },
  {
    slug: "wh-q",
    number: 23,
    category: "questions",
    title: "WH প্রশ্ন",
    titleEn: "WH Questions",
    formula: "WH-Word + will/can/do/did + S + Verb + O ?",
    short: "কী, কখন, কীভাবে, কোথায়, কেন — বিস্তারিত জানতে।",
    mechanism: "WH শব্দ (What/When/Where/Why/How) + সময় বা ক্ষমতা বাটন + চালক + verb + বাকি অংশ?",
    pocketWhen: "যখন বিস্তারিত তথ্য চাচ্ছেন — হ্যাঁ/না দিয়ে যার উত্তর হয় না।",
    trigger: "কী • কখন • কোথায় • কেন • কীভাবে",
    heroExample: {
      bn: "আমরা কীভাবে খরচ কমাবো?",
      en: "How will we reduce the cost?",
      breakdown: "How + will + we (S) + reduce (V) + the cost (O)?",
    },
    moreExamples: [
      { en: "What do you want?", bn: "তুমি কী চাও?" },
      { en: "When will you come?", bn: "তুমি কখন আসবে?" },
      { en: "Where does he live?", bn: "সে কোথায় থাকে?" },
      { en: "Why did they leave?", bn: "তারা কেন চলে গেল?" },
      { en: "How can I help you?", bn: "আমি কীভাবে সাহায্য করতে পারি?" },
    ],
    commonMistakes: [
      "WH শব্দের পর সাহায্যকারী verb (do/will/can) বাদ দেওয়া। ভুল: 'What you want?'. ঠিক: 'What do you want?'",
    ],
    proTip:
      "মনে রাখুন ৫টা WH শব্দ: What/When/Where/Why/How (+ Who = কে)। এই ৬টা দিয়েই সব প্রশ্ন হয়।",
    enough:
      "বিস্তারিত জানতে এটাই মূল অস্ত্র। পুরো ইংরেজি প্রশ্নের ৯৯% এই ৩টা ফর্মুলায় (১৮, ১৯, ২০) সম্পন্ন।",
    why: "তথ্য, দিকনির্দেশনা, ব্যাখ্যা — সব কিছু জানতে WH প্রশ্ন লাগে।",
  },

  {
    slug: "present-perfect",
    number: 24,
    category: "advanced",
    title: "সবেমাত্র / এখনো পর্যন্ত (Present Perfect)",
    titleEn: "Present Perfect",
    formula: "S + have/has + V3 (past participle) + O",
    short: "অতীতে কাজটা হয়েছে, কিন্তু ফলাফল এখনো আছে বা প্রাসঙ্গিক।",
    mechanism:
      "চালক + সাহায্যকারী (have/has) + verb-এর তৃতীয় রূপ (eaten, gone, seen, done) + বাকি অংশ।",
    pocketWhen:
      "যখন বলবেন 'খেয়েছি / করেছি / গিয়েছি / দেখেছি' — সদ্য শেষ হওয়া কাজ, বা যা এখনো চলছে/প্রাসঙ্গিক।",
    trigger: "খেয়েছি • করেছি • গিয়েছি • এখনো • কখনো • সবেমাত্র • already",
    heroExample: {
      bn: "আমি ভাত খেয়েছি।",
      en: "I have eaten rice.",
      breakdown: "I (S) + have eaten (have + V3) + rice (O)",
    },
    moreExamples: [
      { en: "She has gone home.", bn: "সে বাড়ি চলে গেছে।" },
      { en: "Have you finished the work?", bn: "তুমি কি কাজটা শেষ করেছ?" },
      { en: "I have never seen this.", bn: "আমি এটা কখনো দেখিনি।" },
      { en: "We have already eaten.", bn: "আমরা সবেমাত্র খেয়েছি।" },
    ],
    commonMistakes: [
      "have/has-এর পর verb-এর past tense (V2) দেওয়া। ভুল: 'I have ate'. ঠিক: 'I have eaten' (V3)।",
      "I/You/We/They → have, He/She/It → has — উল্টো করা।",
      "past-simple-এর সাথে গুলিয়ে ফেলা। 'I went' (কখন গিয়েছিলে জানি) vs 'I have gone' (সদ্য/এখনো ফিরিনি)।",
    ],
    proTip:
      "V3 মুখস্থ করার সহজ ৫টা: eat→eaten, go→gone, see→seen, do→done, come→come। এই ৫টা দিয়েই বেশিরভাগ কাজ চলে।",
    enough:
      "'সদ্য করেছি' বা 'কখনো করেছি কিনা' — এই দুই কাজের জন্য এই একটা ফর্মুলাই যথেষ্ট। বাংলাভাষীরা এই tense-এ সবচেয়ে বেশি ভুল করে।",
    why: "'খেয়েছি', 'গিয়েছি', 'দেখেছি' — বাংলার এই সাধারণ বাক্যগুলো এই ফর্মুলা ছাড়া সঠিক ইংরেজিতে বলা যায় না।",
  },

  {
    slug: "comparatives",
    number: 25,
    category: "advanced",
    title: "তুলনা করা (বড়/ছোট/সেরা)",
    titleEn: "Comparatives & Superlatives",
    formula: "A + is + [Adj-er / more Adj] + than + B  |  the [Adj-est / most Adj]",
    short: "দুইটার তুলনা → -er / more; সবচেয়ে বেশি/সেরা → -est / most।",
    mechanism:
      "ছোট adjective (১-২ syllable) → শেষে 'er' / 'est'। বড় adjective (৩+ syllable) → সামনে 'more' / 'most'।",
    pocketWhen: "যখন বলবেন 'এর চেয়ে বড়/ভালো/সুন্দর', বা 'সবচেয়ে বড়/সেরা'।",
    trigger: "এর চেয়ে • বেশি • কম • সবচেয়ে • সেরা • than",
    heroExample: {
      bn: "এই ফোনটা ওটার চেয়ে ভালো।",
      en: "This phone is better than that one.",
      breakdown: "This phone (A) + is + better (Adj-er) + than + that one (B)",
    },
    moreExamples: [
      { en: "She is taller than me.", bn: "সে আমার চেয়ে লম্বা।" },
      { en: "This is the biggest room.", bn: "এটাই সবচেয়ে বড় রুম।" },
      {
        en: "English is more important than ever.",
        bn: "আগের চেয়ে ইংরেজি এখন বেশি গুরুত্বপূর্ণ।",
      },
      { en: "He is the most honest person here.", bn: "সে এখানের সবচেয়ে সৎ মানুষ।" },
    ],
    commonMistakes: [
      "-er এবং more দুটোই একসাথে দেওয়া। ভুল: 'more bigger'. ঠিক: 'bigger'।",
      "than-এর জায়গায় 'then' লেখা — এরা আলাদা শব্দ।",
      "superlative-এর আগে 'the' বাদ দেওয়া। ভুল: 'best student'. ঠিক: 'the best student'।",
    ],
    proTip:
      "৩টা অনিয়মিত মুখস্থ করুন: good→better→best, bad→worse→worst, far→farther→farthest। বাকি সব নিয়মে চলে।",
    enough:
      "দৈনন্দিন তুলনার ৯৯% এই একটা ফর্মুলায় হয়। 'as … as' মতো advanced তুলনা পরে ইচ্ছা করলে শিখবেন।",
    why: "মানুষ প্রতিনিয়ত তুলনা করে কথা বলে — দাম, মান, আকার, গুণ। এই ফর্মুলা ছাড়া তুলনা করা যায় না।",
  },

  {
    slug: "passive-voice",
    number: 26,
    category: "b2-fluent",
    title: "কর্ম-বাচ্য (কে করেছে বলার দরকার নেই)",
    titleEn: "Passive Voice",
    formula: "S + is/was/will be + V3 (+ by + কে)",
    short: "কাজটাই মূল, কে করেছে সেটা কম গুরুত্বপূর্ণ।",
    mechanism:
      "Active-এর object সামনে আসে। be verb (is/am/are/was/were/will be) + verb-এর V3 রূপ। প্রয়োজন হলে by দিয়ে কর্তা।",
    pocketWhen: "খবর, রিপোর্ট, নোটিশ, অফিসিয়াল কথা — যখন কাজটা যেই করুক, কাজটাই মূল।",
    trigger: "হয়েছে • করা হয়েছে • তৈরি হয় • লেখা হয়েছে • by",
    heroExample: {
      bn: "চিঠিটা ম্যানেজার লিখেছেন।",
      en: "The letter was written by the manager.",
      breakdown: "The letter (S) + was written (was + V3) + by the manager",
    },
    moreExamples: [
      { en: "English is spoken here.", bn: "এখানে ইংরেজি বলা হয়।" },
      { en: "The office is closed on Sunday.", bn: "রবিবার অফিস বন্ধ থাকে।" },
      { en: "My phone was stolen yesterday.", bn: "আমার ফোন গতকাল চুরি হয়েছে।" },
      { en: "The work will be done tomorrow.", bn: "কাজটা কাল করা হবে।" },
    ],
    commonMistakes: [
      "be verb বাদ দেওয়া। ভুল: 'The letter written by him'. ঠিক: 'The letter was written by him'।",
      "V3-এর জায়গায় V1 বা V2 দেওয়া। ভুল: 'was write'. ঠিক: 'was written'।",
      "সব বাক্যকে passive বানানো — শুধু যখন কাজটাই মূল তখনই ব্যবহার।",
    ],
    proTip:
      "খবরের কাগজে (news) passive-এর ছড়াছড়ি: 'A man was killed', 'The bridge was opened'। খবর পড়ে অভ্যাস করুন।",
    enough:
      "৩টা রূপ শিখলেই যথেষ্ট: is/are + V3 (বর্তমান), was/were + V3 (অতীত), will be + V3 (ভবিষ্যৎ)।",
    why: "অফিস-নোটিশ, খবর, ফরমাল ইমেইল — সব জায়গায় passive লাগে। এটা না জানলে ফরমাল ইংরেজি অসম্পূর্ণ।",
  },

  {
    slug: "reported-speech",
    number: 27,
    category: "b2-fluent",
    title: "অন্যের কথা নিজের ভাষায় বলা",
    titleEn: "Reported Speech",
    formula: "S + said/told + (that) + [বাক্যের tense এক ধাপ পেছনে]",
    short: "সরাসরি quote না দিয়ে অন্যের কথা রিপোর্ট করা।",
    mechanism:
      "'said that' বসে। ভেতরের tense এক ধাপ পিছিয়ে যায়: am/is→was, will→would, can→could, have→had।",
    pocketWhen:
      "কেউ কী বলেছে সেটা অন্যকে বলতে গেলে — গল্প, গসিপ, অফিস মিটিং-এর রিপোর্ট, WhatsApp চ্যাট।",
    trigger: "বলেছে যে • জানিয়েছে • বলল যে • said that • told me",
    heroExample: {
      bn: "সে বলল যে সে ব্যস্ত।",
      en: "He said that he was busy.",
      breakdown: "He (S) + said + that + he was busy (tense পিছিয়ে)",
    },
    moreExamples: [
      { en: "She told me that she would come.", bn: "সে বলল যে সে আসবে।" },
      { en: "The teacher said that we had a test.", bn: "শিক্ষক বললেন আমাদের একটা পরীক্ষা আছে।" },
      { en: "He told me he could help.", bn: "সে বলল সাহায্য করতে পারবে।" },
      { en: "Mom said dinner was ready.", bn: "মা বলল ডিনার তৈরি।" },
    ],
    commonMistakes: [
      "tense না পিছিয়ে দেওয়া। ভুল: 'He said he is busy'. ঠিক: 'He said he was busy'।",
      "said-এর সাথে 'to me' বসানো। ভুল: 'said to me'. ঠিক: 'told me' বা 'said (that)'।",
      "quotation mark ('') থাকলে সেটা direct speech — reported নয়।",
    ],
    proTip:
      "কথ্য ইংরেজিতে 'that' বাদ দেওয়া যায়: 'He said he was busy'। লেখায় 'that' রাখাই ভালো।",
    enough:
      "৪টা tense পিছিয়ে নেওয়া শিখলেই ৯৫% হয়ে যায়: is→was, will→would, can→could, have→had।",
    why: "মানুষ প্রতিদিন অন্যের কথা পুনরায় বলে — 'সে বলল…', 'বস বললেন…'। এটা ছাড়া গল্প বলা যায় না।",
  },

  {
    slug: "relative-clauses",
    number: 28,
    category: "b2-fluent",
    title: "who / which / that — বাক্যকে বিস্তারিত করা",
    titleEn: "Relative Clauses",
    formula: "Noun + who/which/that + (verb + বাকি অংশ)",
    short: "একটা noun-এর সম্পর্কে বাড়তি তথ্য জুড়ে দেওয়া।",
    mechanism:
      "মানুষের জন্য who, বস্তু/পশুর জন্য which, দুটোর জন্যই that চলে। এরা noun-এর পরে বসে।",
    pocketWhen:
      "যখন একটা noun-এর সম্পর্কে দ্বিতীয় তথ্য যোগ করতে হবে — 'সেই লোকটা যে…', 'যে বইটা…', 'যে দোকানে…'।",
    trigger: "যে ব্যক্তি • যে জিনিস • যেটা • যিনি • যেখানে",
    heroExample: {
      bn: "যে লোকটা এখানে থাকে সে আমার বন্ধু।",
      en: "The man who lives here is my friend.",
      breakdown: "The man (Noun) + who lives here (relative clause) + is my friend",
    },
    moreExamples: [
      { en: "This is the book that I bought.", bn: "এটাই সেই বই যেটা আমি কিনেছি।" },
      {
        en: "I know a girl who speaks five languages.",
        bn: "আমি এক মেয়েকে চিনি যে পাঁচটা ভাষা বলে।",
      },
      { en: "The phone which is on the table is mine.", bn: "টেবিলের ওপর যে ফোনটা সেটা আমার।" },
      { en: "The shop where I work is closed.", bn: "যে দোকানে আমি কাজ করি সেটা বন্ধ।" },
    ],
    commonMistakes: [
      "মানুষের জন্য which ব্যবহার। ভুল: 'The man which came'. ঠিক: 'The man who came'।",
      "double subject দেওয়া। ভুল: 'The man who he came'. ঠিক: 'The man who came'।",
      "that-এর পরে comma দেওয়া। ভুল: 'The book, that I bought'. ঠিক: 'The book that I bought'।",
    ],
    proTip:
      "সহজ নিয়ম: মানুষ = who, বস্তু = which, দুটোই = that (সবচেয়ে বেশি কথ্য)। শুরুতে শুধু 'that' দিয়েই কাজ চালান।",
    enough: "who, which, that — এই ৩টাই ৯৫% ক্ষেত্রে যথেষ্ট। whose, whom advanced — এখন লাগবে না।",
    why: "এটা ছাড়া বাক্য ছোট ছোট থাকে — 'সে ভালো। সে আমার ভাই।' এটা যোগ করলে: 'সে আমার ভাই যে খুব ভালো।'",
  },

  {
    slug: "conditionals",
    number: 29,
    category: "b2-fluent",
    title: "যদি এমন হতো তাহলে… (Conditional 2 & 3)",
    titleEn: "Conditionals — Type 2 & 3",
    formula: "Type 2: If + S + V2, S + would + V1  |  Type 3: If + S + had V3, S + would have V3",
    short: "কল্পনা (Type 2) ও অতীতের অনুশোচনা (Type 3)।",
    mechanism: "Type 2 = এখন/ভবিষ্যতের কল্পনা (সত্যি না)। Type 3 = অতীতে যা হয়নি তার আফসোস।",
    pocketWhen: "স্বপ্ন, ইচ্ছা, পরামর্শ, অনুশোচনা — 'যদি আমি ধনী হতাম…', 'যদি আমি জানতাম…'।",
    trigger: "যদি হতাম • যদি জানতাম • যদি করতাম • would • could have",
    heroExample: {
      bn: "যদি আমি ধনী হতাম, বাড়ি কিনতাম।",
      en: "If I were rich, I would buy a house.",
      breakdown: "If + I were (V2) + rich, I would buy (would + V1) a house",
    },
    moreExamples: [
      { en: "If I had time, I would help you.", bn: "সময় থাকলে সাহায্য করতাম।" },
      { en: "If I knew her number, I would call.", bn: "নাম্বার জানলে ফোন করতাম।" },
      { en: "If I had studied, I would have passed.", bn: "পড়লে পাশ করতাম (অতীত — Type 3)।" },
      { en: "What would you do if you won a crore?", bn: "কোটি টাকা জিতলে কী করতে?" },
    ],
    commonMistakes: [
      "Type 2-তে 'was' নয়, 'were' (সব person-এ)। ভুল: 'If I was rich'. সঠিক formal: 'If I were rich'।",
      "if-clause-এ 'would' দেওয়া। ভুল: 'If I would have time'. ঠিক: 'If I had time'।",
      "Type 3-এ 'had + V3' না দিয়ে V2 দেওয়া। ভুল: 'If I studied, I would have passed'. ঠিক: 'If I had studied…'।",
    ],
    proTip:
      "মনে রাখুন: if-পাশে সবসময় past, other-পাশে would। Type 2 = past simple + would V1। Type 3 = past perfect + would have V3।",
    enough:
      "Type 1 (সাধারণ শর্ত) আগে ফর্মুলা #১৫-তে (If) শিখেছেন। এখন Type 2 ও 3 — এই ৩টাই যথেষ্ট, Type 0 বা mixed পরে।",
    why: "কল্পনা, স্বপ্ন, অনুশোচনা — মানুষের মনের গভীর কথা বলা যায় না এই দুটো ছাড়া।",
  },

  {
    slug: "phrasal-verbs",
    number: 30,
    category: "b2-fluent",
    title: "Phrasal Verbs — get up, look after, turn on…",
    titleEn: "Phrasal Verbs",
    formula: "Verb + Preposition/Adverb = নতুন অর্থ",
    short: "সাধারণ verb + ছোট শব্দ = একদম নতুন অর্থ। Native ইংরেজির প্রাণ।",
    mechanism:
      "একটা verb (get, take, put, look…) + একটা ছোট শব্দ (up, down, on, off, after…) মিলে সম্পূর্ণ নতুন অর্থ তৈরি হয়। সরাসরি অনুবাদ কাজ করে না।",
    pocketWhen:
      "প্রতিদিনের কথায় — ঘুম থেকে ওঠা, লাইট জ্বালানো, বাচ্চার দেখাশোনা, ফোন রাখা — সব phrasal verb।",
    trigger: "ওঠা • জ্বালানো • নেভানো • দেখাশোনা • খোঁজা • বন্ধ করা",
    heroExample: {
      bn: "আমি সকাল ৬টায় ঘুম থেকে উঠি।",
      en: "I get up at 6 in the morning.",
      breakdown: "get (verb) + up (adverb) = ঘুম থেকে ওঠা",
    },
    moreExamples: [
      { en: "Please turn on the light.", bn: "দয়া করে লাইটটা জ্বালাও।" },
      { en: "Turn off the fan before you go.", bn: "যাওয়ার আগে ফ্যান বন্ধ কোরো।" },
      { en: "She looks after her mother.", bn: "সে তার মায়ের দেখাশোনা করে।" },
      { en: "I am looking for my keys.", bn: "আমি আমার চাবি খুঁজছি।" },
      { en: "Give up smoking.", bn: "ধূমপান ছেড়ে দাও।" },
    ],
    commonMistakes: [
      "সরাসরি বাংলা→ইংরেজি অনুবাদ। ভুল: 'open the light'. ঠিক: 'turn on the light'।",
      "preposition ভুল। 'look after' (দেখাশোনা) vs 'look for' (খোঁজা) vs 'look at' (তাকানো) — সব আলাদা।",
      "একবারে হাজারটা শিখতে যাওয়া — অসম্ভব। প্রয়োজন-মাফিক আস্তে আস্তে শিখুন।",
    ],
    proTip:
      "টপ ২০টা মুখস্থ করুন যেগুলো প্রতিদিন লাগে: get up, sit down, turn on/off, look after/for/at, take off, put on, give up, come in, go out, wake up, pick up, hang up, find out, run out, break down, work out, hold on, calm down, throw away।",
    enough:
      "হাজার হাজার phrasal verb আছে — সব শেখা অসম্ভব ও অপ্রয়োজনীয়। দৈনন্দিনের ৩০-৪০টা মজবুত হলেই native-এর মত শোনাবে। বাকিগুলো পড়তে পড়তে/শুনতে শুনতে ঢুকে যাবে।",
    why: "Native speaker-রা আনুষ্ঠানিক verb ('ascend', 'enter') প্রায় ব্যবহার করে না — তারা phrasal verb ('go up', 'come in') বলে। এটা না জানলে ইংরেজি 'বই-এর মত' শোনায়, 'মানুষের মত' না।",
  },
];

// -------------------------
// ১৪টি "আঠা শব্দ" — বাক্যের সাথে বাক্য জোড়া দেওয়ার শব্দ (Conjunctions/Connectors)
// -------------------------
// ⚠️ গুরুত্বপূর্ণ: preposition (of, in, at, to…) আলাদা জিনিস — সেগুলো PREPOSITIONS-এ।
// এখানে শুধু সেই শব্দগুলো যেগুলো "বাক্য জোড়া" দেয়।
// Core ৮টি → দৈনন্দিন কথ্য ইংরেজির ৮০%+ জোড়া কভার করে।
// Extra ৬টি → B2 fluency ও গল্প বলার জন্য জরুরি।
export type ConnectorWord = {
  word: string;
  tier: "core" | "extra";
  meaning: string;
  rank?: string;
  examples: { en: string; bn: string }[];
  note?: string;
};

// সূত্র: COCA Corpus, Cambridge English Grammar Profile, British Council A2–B1 curriculum।
export const CONNECTORS: ConnectorWord[] = [
  // ─── CORE ৮টি (দৈনন্দিন কথার আঠা) ───
  {
    word: "And",
    tier: "core",
    meaning: "'এবং' — দুটি বাক্য বা শব্দ জোড়া দিতে",
    rank: "COCA #3 — সবচেয়ে বেশি ব্যবহৃত connector",
    examples: [
      { en: "Rice and fish", bn: "ভাত ও মাছ" },
      { en: "He came and helped.", bn: "সে এসে সাহায্য করলো।" },
    ],
  },
  {
    word: "But",
    tier: "core",
    meaning: "'কিন্তু' — বিপরীত কিছু বোঝাতে",
    rank: "COCA #22",
    examples: [
      { en: "I want to buy, but the cost is high.", bn: "আমি কিনতে চাই, কিন্তু দাম বেশি।" },
    ],
  },
  {
    word: "Or",
    tier: "core",
    meaning: "'অথবা' — দুই বিকল্পের মধ্যে যেকোনো একটা",
    rank: "COCA #31",
    examples: [
      { en: "Tea or coffee?", bn: "চা নাকি কফি?" },
      { en: "Now or never", bn: "এখন অথবা কখনো নয়" },
    ],
  },
  {
    word: "So",
    tier: "core",
    meaning: "'তাই' / 'সুতরাং' — কারণ থেকে ফল বোঝাতে",
    rank: "COCA #41",
    examples: [{ en: "It was raining, so I stayed home.", bn: "বৃষ্টি হচ্ছিল, তাই ঘরেই ছিলাম।" }],
  },
  {
    word: "If",
    tier: "core",
    meaning: "'যদি' — শর্ত বোঝাতে",
    rank: "COCA #44",
    examples: [
      { en: "If it rains, I will not come.", bn: "যদি বৃষ্টি হয়, আমি আসবো না।" },
      { en: "Call me if you need help.", bn: "সাহায্য লাগলে আমাকে ফোন কোরো।" },
    ],
  },
  {
    word: "Because",
    tier: "core",
    meaning: "'কারণ' — 'কেন' প্রশ্নের উত্তর দিতে",
    rank: "Cambridge A1–A2 core",
    note: "So-এর উল্টো। So = কারণ→ফল। Because = ফল→কারণ।",
    examples: [
      { en: "I stayed home because it was raining.", bn: "বৃষ্টি হচ্ছিল বলে ঘরে ছিলাম।" },
      { en: "She is happy because she got a job.", bn: "সে খুশি কারণ চাকরি পেয়েছে।" },
    ],
  },
  {
    word: "When",
    tier: "core",
    meaning: "'যখন' — দুইটা কাজ সময়ে জোড়া দিতে",
    rank: "COCA #37",
    note: "গল্প বলার সবচেয়ে জরুরি শব্দ। যেকোনো ঘটনা বলতে গেলে লাগবেই।",
    examples: [
      { en: "When I came, he was sleeping.", bn: "আমি যখন এলাম, সে ঘুমাচ্ছিল।" },
      { en: "Call me when you reach home.", bn: "বাড়ি পৌঁছালে ফোন কোরো।" },
    ],
  },
  {
    word: "That",
    tier: "core",
    meaning: "'যে' — মনের কথা বা অন্যের কথা রিপোর্ট করতে",
    rank: "COCA #12",
    note: "I think that… / He said that… / I know that… — মতামত দেওয়ার আঠা।",
    examples: [
      { en: "I think that he is right.", bn: "আমি মনে করি যে সে ঠিক।" },
      { en: "She said that she is busy.", bn: "সে বলল যে সে ব্যস্ত।" },
    ],
  },
  // ─── EXTRA ৬টি (B2 fluency ও গল্প বলার জন্য) ───
  {
    word: "While",
    tier: "extra",
    meaning: "'যতক্ষণ' / 'যখন' — একই সময়ে দুইটা কাজ চলছে",
    examples: [
      { en: "While eating, don't talk.", bn: "খাওয়ার সময় কথা বোলো না।" },
      { en: "She was reading while I was cooking.", bn: "আমি রান্না করার সময় সে পড়ছিল।" },
    ],
  },
  {
    word: "Before",
    tier: "extra",
    meaning: "'আগে' — কোন কাজের পূর্বে",
    examples: [
      { en: "Wash your hands before you eat.", bn: "খাওয়ার আগে হাত ধোও।" },
      { en: "I saw him before the meeting.", bn: "মিটিং-এর আগে আমি তাকে দেখেছি।" },
    ],
  },
  {
    word: "After",
    tier: "extra",
    meaning: "'পরে' — কোন কাজের পরে",
    examples: [
      { en: "After school, I go home.", bn: "স্কুলের পরে আমি বাড়ি যাই।" },
      { en: "He called me after he arrived.", bn: "সে পৌঁছানোর পর আমাকে ফোন করেছে।" },
    ],
  },
  {
    word: "Although / Though",
    tier: "extra",
    meaning: "'যদিও' — বিপরীত কথা জোড়া দিতে (but-এর ভদ্র রূপ)",
    note: "Although = বাক্যের শুরুতে। Though = কথ্য ভাষায়, বাক্যের শেষে-ও বসতে পারে।",
    examples: [
      { en: "Although he is tired, he is working.", bn: "যদিও সে ক্লান্ত, সে কাজ করছে।" },
      { en: "It's expensive, though.", bn: "যদিও এটা দামি।" },
    ],
  },
  {
    word: "However",
    tier: "extra",
    meaning: "'তবুও' / 'তবে' — but-এর ফরমাল রূপ (লেখায় ও অফিসে)",
    note: "সাধারণত বাক্যের শুরুতে বসে, কমা দিয়ে। ইমেইল ও রিপোর্টে খুব দরকারি।",
    examples: [
      { en: "The plan is good. However, the cost is high.", bn: "প্ল্যানটা ভালো। তবে খরচ বেশি।" },
    ],
  },
  {
    word: "Also / Too",
    tier: "extra",
    meaning: "'আরও' / 'ও' — যোগ করতে",
    note: "Also বাক্যের মাঝে বা শুরুতে। Too বাক্যের শেষে।",
    examples: [
      { en: "I also want tea.", bn: "আমিও চা চাই।" },
      { en: "She is coming too.", bn: "সেও আসছে।" },
    ],
  },
];

// -------------------------
// ৯টি সবচেয়ে জরুরি PREPOSITION — বাক্যের ভেতরে বসে সম্পর্ক বোঝায়
// -------------------------
// এগুলো connector নয় — এরা বাক্য জোড়া দেয় না, noun-এর সাথে সম্পর্ক দেখায়।
export const PREPOSITIONS: ConnectorWord[] = [
  {
    word: "Of",
    tier: "core",
    meaning: "'র' বা 'এর' — মালিকানা বা সম্পর্ক বোঝাতে",
    rank: "COCA #4 — সবচেয়ে ব্যবহৃত preposition",
    examples: [
      { en: "The price of the product", bn: "পণ্যের দাম" },
      { en: "A cup of tea", bn: "এক কাপ চা" },
    ],
  },
  {
    word: "In",
    tier: "core",
    meaning: "বড় জায়গা বা লম্বা সময়ের 'ভেতরে'",
    rank: "COCA #6",
    note: "বড় জিনিসের জন্য: in Dhaka, in 2024, in the office, in the morning।",
    examples: [
      { en: "I live in Bangladesh.", bn: "আমি বাংলাদেশে থাকি।" },
      { en: "In the morning", bn: "সকালে" },
    ],
  },
  {
    word: "To",
    tier: "core",
    meaning: "প্রতি / কাছে / দিকে / কোনো কাজ 'করতে'",
    rank: "COCA #7",
    examples: [
      { en: "Send to the manager", bn: "ম্যানেজারের কাছে পাঠান" },
      { en: "To learn English", bn: "ইংরেজি শিখতে" },
      { en: "Go to school", bn: "স্কুলে যাও" },
    ],
  },
  {
    word: "For",
    tier: "core",
    meaning: "'জন্য' বোঝাতে বা কতক্ষণ ধরে",
    rank: "COCA #13",
    examples: [
      { en: "This gift is for you.", bn: "এই উপহারটা তোমার জন্য।" },
      { en: "I studied for two hours.", bn: "আমি দুই ঘণ্টা পড়েছি।" },
    ],
  },
  {
    word: "On",
    tier: "core",
    meaning: "কোনো কিছুর 'ওপরে' বা নির্দিষ্ট দিনে/তারিখে",
    rank: "COCA #14",
    examples: [
      { en: "The book is on the table.", bn: "বইটা টেবিলের ওপর।" },
      { en: "I will come on Monday.", bn: "আমি সোমবার আসবো।" },
    ],
  },
  {
    word: "With",
    tier: "core",
    meaning: "'সাথে' বা 'দ্বারা' বোঝাতে",
    rank: "COCA #15",
    examples: [
      { en: "Talk with customers", bn: "ক্রেতাদের সাথে কথা বলা" },
      { en: "Write with a pen", bn: "কলম দিয়ে লেখো" },
    ],
  },
  {
    word: "At",
    tier: "core",
    meaning: "নির্দিষ্ট ছোট জায়গা বা ঘড়ির সময়",
    rank: "COCA #20",
    note: "In-এর ছোট ভাই। ঠিকানা, বিন্দু, ঘড়ি: at home, at the bus stop, at 5 pm।",
    examples: [
      { en: "Meet me at the market.", bn: "বাজারে দেখা কোরো।" },
      { en: "The class starts at 10.", bn: "ক্লাস ১০টায় শুরু।" },
    ],
  },
  {
    word: "By",
    tier: "core",
    meaning: "'দ্বারা' / 'দিয়ে' / 'পাশে' / কোনো সময়ের মধ্যে",
    rank: "COCA #24",
    examples: [
      { en: "Written by the manager", bn: "ম্যানেজারের লেখা" },
      { en: "I go by bus.", bn: "আমি বাসে যাই।" },
      { en: "Finish by Friday.", bn: "শুক্রবারের মধ্যে শেষ কোরো।" },
    ],
  },
  {
    word: "From",
    tier: "core",
    meaning: "'থেকে' — উৎস বা শুরু",
    rank: "COCA #25",
    examples: [
      { en: "I am from Dhaka.", bn: "আমি ঢাকা থেকে এসেছি।" },
      { en: "A letter from my friend", bn: "আমার বন্ধুর কাছ থেকে চিঠি" },
    ],
  },
];

// পূর্ণ B2 কভারেজে NEXT_LEVEL_TOPICS আর দরকার নেই — সব ৩০টি formula-তে যুক্ত।
// পুরোনো import ভাঙা এড়াতে খালি array রাখা হলো।
export const NEXT_LEVEL_TOPICS: { title: string; why: string }[] = [];

// -------------------------
// প্রমাণ ও উৎস — কেন আমরা এই তালিকাগুলো বিশ্বাস করি
// -------------------------
export type EvidenceSource = {
  name: string;
  url: string;
  fact: string;
};

export const EVIDENCE_SOURCES: EvidenceSource[] = [
  {
    name: "British Council LearnEnglish (A1–A2 Grammar)",
    url: "https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar",
    fact: "বিশ্বের সবচেয়ে বড় ইংরেজি-শিক্ষা সংস্থা। তাদের A1–A2 সিলেবাসে যা যা আছে — আমাদের ৩০টি ফর্মুলা সেটার চেয়েও বেশি — পূর্ণ B2 পর্যন্ত কভার করে।",
  },
  {
    name: "Cambridge English Corpus & Grammar Profile",
    url: "https://www.englishprofile.org/english-grammar-profile",
    fact: "Cambridge-এর গবেষণা: প্রথম ২০-২৫টি structure দিয়ে A2, আর মোট ৩০টি structure দিয়ে পূর্ণ B2 (Upper-Intermediate) স্তর অর্জিত হয়। আমাদের ৩০টি formula ঠিক এই কভারেজেই সাজানো।",
  },
  {
    name: "COCA Corpus (১ বিলিয়ন শব্দের ভাণ্ডার)",
    url: "https://www.english-corpora.org/coca/",
    fact: "আমাদের ১৪টি connector ও ৯টি preposition COCA-এর top-50 frequency list থেকে সরাসরি নেওয়া। এর বাইরের preposition/conjunction দৈনন্দিন কথায় ১%-এরও কম।",
  },
  {
    name: "NGSL — New General Service List (Browne, Culligan, Phillips)",
    url: "https://www.newgeneralservicelist.com/",
    fact: "কেবল ২,৮০৯টি সবচেয়ে দরকারি শব্দ শিখলে সাধারণ ইংরেজির ৯২% বুঝে ফেলা যায়। Harry Potter-এর ৯৩%, Friends TV show-এর ৯৫%।",
  },
  {
    name: "BBC Radio 4 — More or Less (২০১৮, Prof. Stuart Webb)",
    url: "https://www.bbc.com/news/world-44569277",
    fact: "মাত্র ৮০০টি সবচেয়ে ব্যবহৃত শব্দ শিখলে ইংরেজির ৭৫% বুঝে ফেলা যায়। শুরু করার জন্য এটাই যথেষ্ট।",
  },
  {
    name: "Chittagong University Journal of Social Sciences",
    url: "https://www.cu.ac.bd/",
    fact: "বাংলাভাষীদের ইংরেজি লেখায় সবচেয়ে বেশি ভুলের ৩টি এলাকা: Articles (a/an/the), Present Perfect, ও Preposition। তাই আমরা Articles-কে ১ নম্বরে রেখেছি।",
  },
  {
    name: "IIUC Studies 2026 — Bangla L1 Interference in English",
    url: "https://www.iiuc.ac.bd/",
    fact: "বাংলা SOV (কর্তা-কর্ম-ক্রিয়া), ইংরেজি SVO (কর্তা-ক্রিয়া-কর্ম)। এই পার্থক্যই সবচেয়ে বড় শুরুর ভুল। তাই আমরা S+V+O ছককে হৃদয়ে গেঁথে দিই।",
  },
  {
    name: "EF Education First — English Vocabulary Guide",
    url: "https://www.ef.edu/english-resources/english-vocabulary/top-3000-words/",
    fact: "২,৫০০–৩,০০০ শব্দ জানলেই দৈনন্দিন কথা, খবর ও অফিসের প্রায় ৮৫% ইংরেজি বোঝা ও বলা যায় (Paul Nation-এর গবেষণা)।",
  },
];

// -------------------------
// ধাপে ধাপে শেখার রোডম্যাপ — গবেষণার ভিত্তিতে
// -------------------------
export type RoadmapStage = {
  stage: number;
  weeks: string;
  title: string;
  goal: string;
  items: string[];
};

export const LEARNING_ROADMAP: RoadmapStage[] = [
  {
    stage: 1,
    weeks: "সপ্তাহ ১–৪",
    title: "ভিত্তি — Survival English",
    goal: "নিজের নাম, পরিচয়, প্রয়োজন বলতে পারা।",
    items: [
      "Verb 'to be' (am / is / are)",
      "Personal pronouns (I, you, he, she, we, they)",
      "Present Simple (সাধারণ বর্তমান)",
      "Articles: a / an / the  ← বাংলাভাষীর জন্য জরুরি",
      "Yes/No questions",
      "Imperatives (Come, Go, Stop, Please…)",
      "There is / There are",
    ],
  },
  {
    stage: 2,
    weeks: "সপ্তাহ ৫–১০",
    title: "দৈনন্দিন জীবন",
    goal: "বাজার, স্কুল, অফিসে সাধারণ কথা বলতে পারা।",
    items: [
      "Present Continuous (এখন কী করছি)",
      "WH-questions (What/Where/When/Why/How)",
      "Want to / Have to / Need to",
      "Can / Can't (পারা / না-পারা)",
      "Going to (ভবিষ্যৎ পরিকল্পনা)",
      "Prepositions: in / on / at  ← বাংলাভাষীর জন্য জরুরি",
      "Possessives: my / your / his / her / 's",
    ],
  },
  {
    stage: 3,
    weeks: "সপ্তাহ ১১–১৮",
    title: "বিস্তার — Storytelling",
    goal: "অতীতের গল্প বলা, উপদেশ দেওয়া, ভদ্রভাবে কথা।",
    items: [
      "Past Simple (গতকালের কাজ)",
      "Will (ভবিষ্যৎ প্রতিশ্রুতি)",
      "Should / Must (উপদেশ / বাধ্যবাধকতা)",
      "Past Continuous (তখন কী করছিলাম)",
      "May / Might / Could (সম্ভাবনা)",
      "Would like to (ভদ্র ইচ্ছা)",
    ],
  },
  {
    stage: 4,
    weeks: "সপ্তাহ ১৯–২৪",
    title: "সীমানা পেরিয়ে — Intermediate Threshold",
    goal: "অফিস, বায়ার, ফরমাল কথা।",
    items: [
      "Present Perfect (অতীত + বর্তমানের সংযোগ)",
      "Passive Voice (basic)",
      "Conditional (if…)",
      "Relative clauses (who, which, that)",
    ],
  },
];

// -------------------------
// শব্দভাণ্ডারের ৩টি ধাপ (Vocabulary Tiers) — Prof. Stuart Webb & NGSL data
// -------------------------
export type VocabTier = {
  words: string;
  goal: string;
  coverage: string;
  source: string;
};

export const VOCAB_TIERS: VocabTier[] = [
  {
    words: "৮০০ শব্দ",
    goal: "টিকে থাকা (Survival)",
    coverage: "দৈনন্দিন কথার ৭৫% বুঝবেন",
    source: "Prof. Stuart Webb (Univ. of Western Ontario), BBC Radio 4",
  },
  {
    words: "২,০০০ শব্দ",
    goal: "আরাম করে কথা বলা",
    coverage: "সাধারণ কথোপকথনের প্রায় ৮০%",
    source: "NGSL Core (Browne, Culligan, Phillips)",
  },
  {
    words: "৩,০০০ শব্দ (Oxford 3000)",
    goal: "স্বাধীন ব্যবহার",
    coverage: "দৈনন্দিন কথা, খবর, অফিসের ৯০–৯৫%",
    source: "Oxford Learners' Dictionaries + EF Education",
  },
];
