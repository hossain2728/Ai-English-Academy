// Bengali-L1 English pronunciation data.
// Sources: Taher (2019), Barman (2011), Islam (2004), Karim (UVic)

export type SoundGroup = "fricative" | "vowel" | "diphthong" | "cluster" | "stress";

export type MissingSound = {
  ipa: string;
  slug: string;
  english: string;
  bengaliError: string;
  errorIpa: string;
  bnHint: string;
  mouthTip: string;
  minimalPairs: { en1: string; en2: string; bn: string }[];
  examples: { word: string; ipa: string; bnPronErr: string }[];
  group: SoundGroup;
};

// The 6 English fricatives absent from the Bengali phoneme inventory (Taher 2019).
export const MISSING_FRICATIVES: MissingSound[] = [
  {
    ipa: "/f/",
    slug: "f",
    english: "f as in fan, coffee, phone",
    bengaliError: "ph (ফ) — মহাপ্রাণ ব bilabial",
    errorIpa: "/pʰ/",
    bnHint: "উপরের দাঁত নিচের ঠোঁটে হালকা ঠেকিয়ে হাওয়া বের করুন। ঠোঁট দুইটা মিলাবেন না।",
    mouthTip: "নিচের ঠোঁট + উপরের দাঁত। কেবল হাওয়া।",
    minimalPairs: [
      { en1: "fan", en2: "pan", bn: "পাখা / পাত্র" },
      { en1: "fine", en2: "pine", bn: "ভালো / পাইনগাছ" },
      { en1: "coffee", en2: "copy", bn: "কফি / কপি" },
    ],
    examples: [
      { word: "fan", ipa: "/fæn/", bnPronErr: "❌ ফ্যান (bilabial), ✅ দাঁত-ঠোঁট" },
      { word: "phone", ipa: "/foʊn/", bnPronErr: "ph = /f/, ফোন নয় fone" },
      { word: "laugh", ipa: "/læf/", bnPronErr: "শেষে gh = /f/" },
    ],
    group: "fricative",
  },
  {
    ipa: "/v/",
    slug: "v",
    english: "v as in very, love, video",
    bengaliError: "bh (ভ) — মহাপ্রাণ বিলাবিয়াল",
    errorIpa: "/bʰ/",
    bnHint: "/f/-এর মতোই দাঁত-ঠোঁট, কিন্তু গলা কাঁপবে (voiced)। ঠোঁট দুইটা মিলাবেন না।",
    mouthTip: "নিচের ঠোঁট + উপরের দাঁত + গলা কাঁপবে।",
    minimalPairs: [
      { en1: "very", en2: "berry", bn: "খুব / বেরি ফল" },
      { en1: "vote", en2: "boat", bn: "ভোট / নৌকা" },
      { en1: "vine", en2: "wine", bn: "লতা / মদ" },
    ],
    examples: [
      { word: "very", ipa: "/ˈveri/", bnPronErr: "❌ ভেরি (bh), ✅ দাঁত-ঠোঁট + কম্পন" },
      { word: "love", ipa: "/lʌv/", bnPronErr: "শেষের v = voiced fricative" },
      { word: "video", ipa: "/ˈvɪdioʊ/", bnPronErr: "শুরুর v ≠ bh" },
    ],
    group: "fricative",
  },
  {
    ipa: "/θ/",
    slug: "th-voiceless",
    english: "th as in think, three, mouth",
    bengaliError: "t (ট) — dental plosive",
    errorIpa: "/t/",
    bnHint: "জিহ্বার আগা উপরের-নিচের দাঁতের ফাঁকে বের করে হালকা হাওয়া বের করুন।",
    mouthTip: "জিহ্বার আগা দাঁতের মধ্যে, স্পর্শ করে হাওয়া।",
    minimalPairs: [
      { en1: "think", en2: "tink", bn: "ভাবা / (নেই)" },
      { en1: "three", en2: "tree", bn: "তিন / গাছ" },
      { en1: "thank", en2: "tank", bn: "ধন্যবাদ / ট্যাংক" },
    ],
    examples: [
      { word: "think", ipa: "/θɪŋk/", bnPronErr: "❌ ঠিংক / টিংক, ✅ জিহ্বা দাঁতে" },
      { word: "three", ipa: "/θriː/", bnPronErr: '"tree" নয়!' },
      { word: "mouth", ipa: "/maʊθ/", bnPronErr: "শেষে জিহ্বা বের হবে" },
    ],
    group: "fricative",
  },
  {
    ipa: "/ð/",
    slug: "th-voiced",
    english: "th as in this, the, mother",
    bengaliError: "d (ড) — dental plosive",
    errorIpa: "/d/",
    bnHint: "/θ/-এর মতোই জিহ্বা দাঁতে, কিন্তু গলা কাঁপবে (voiced)।",
    mouthTip: "জিহ্বা দাঁতে + গলা কাঁপবে।",
    minimalPairs: [
      { en1: "this", en2: "dis", bn: "এটা / (নেই)" },
      { en1: "then", en2: "den", bn: "তখন / গুহা" },
      { en1: "they", en2: "day", bn: "তারা / দিন" },
    ],
    examples: [
      { word: "this", ipa: "/ðɪs/", bnPronErr: "❌ দিস, ✅ জিহ্বা দাঁতে + কম্পন" },
      { word: "the", ipa: "/ðə/", bnPronErr: "সবচেয়ে common word — এটা ঠিক হওয়া জরুরি" },
      { word: "mother", ipa: "/ˈmʌðər/", bnPronErr: "মাঝের th = /ð/" },
    ],
    group: "fricative",
  },
  {
    ipa: "/z/",
    slug: "z",
    english: "z as in zoo, easy, phase",
    bengaliError: "j (জ) — palato-alveolar affricate",
    errorIpa: "/dʒ/",
    bnHint: "/s/-এর মতো জিহ্বার আকার, কিন্তু গলা কাঁপবে। জিহ্বা তালুতে ঠেকবে না।",
    mouthTip: "s + গলা কাঁপন = z। জিহ্বা তালুতে যাবে না।",
    minimalPairs: [
      { en1: "zoo", en2: "Jew", bn: "চিড়িয়াখানা / (নাম)" },
      { en1: "zip", en2: "jeep", bn: "জিপার / জিপ" },
      { en1: "buzz", en2: "budge", bn: "গুঞ্জন / নড়া" },
    ],
    examples: [
      { word: "zoo", ipa: "/zuː/", bnPronErr: "❌ জু, ✅ z হালকা কম্পিত s" },
      { word: "easy", ipa: "/ˈiːzi/", bnPronErr: "মাঝের s = /z/" },
      { word: "was", ipa: "/wɒz/", bnPronErr: "সবচেয়ে common — শেষের s = z" },
    ],
    group: "fricative",
  },
  {
    ipa: "/ʒ/",
    slug: "zh",
    english: "s/g in measure, vision, garage",
    bengaliError: "j (জ)",
    errorIpa: "/dʒ/",
    bnHint: '"sh" (শ)-এর মতো জিহ্বার আকার, কিন্তু গলা কাঁপবে (voiced sh)।',
    mouthTip: "sh + গলা কাঁপন। বিরল কিন্তু গুরুত্বপূর্ণ।",
    minimalPairs: [
      { en1: "measure", en2: "major", bn: "মাপা / প্রধান" },
      { en1: "vision", en2: "pigeon", bn: "দৃষ্টি / পায়রা" },
    ],
    examples: [
      { word: "measure", ipa: "/ˈmeʒər/", bnPronErr: "s = zh" },
      { word: "vision", ipa: "/ˈvɪʒən/", bnPronErr: "si = zh" },
      { word: "garage", ipa: "/ɡəˈrɑːʒ/", bnPronErr: "শেষে g = zh" },
    ],
    group: "fricative",
  },
];

export type VowelIssue = {
  slug: string;
  titleBn: string;
  pair: string;
  problemBn: string;
  fixBn: string;
  examples: { word: string; ipa: string }[];
};

export const VOWEL_ISSUES: VowelIssue[] = [
  {
    slug: "ship-sheep",
    titleBn: "ছোট /ɪ/ বনাম লম্বা /iː/",
    pair: "ship /ɪ/ ↔ sheep /iː/",
    problemBn:
      "বাংলায় ছোট-লম্বা vowel-এর পার্থক্য কম। ship/sheep, live/leave, bit/beat একই শোনায়।",
    fixBn: '/ɪ/ ছোট, ঠোঁট শিথিল, জিহ্বা কম উঁচু। /iː/ লম্বা, ঠোঁট প্রসারিত "ee"।',
    examples: [
      { word: "ship / sheep", ipa: "/ʃɪp/ ↔ /ʃiːp/" },
      { word: "live / leave", ipa: "/lɪv/ ↔ /liːv/" },
      { word: "bit / beat", ipa: "/bɪt/ ↔ /biːt/" },
    ],
  },
  {
    slug: "schwa",
    titleBn: "Schwa /ə/ — সবচেয়ে common সাউন্ড",
    pair: "about, sofa, banana",
    problemBn:
      'বাংলাভাষীরা প্রতিটি letter উচ্চারণ করেন — কিন্তু English-এ unstressed syllable "uh" হয়ে যায়।',
    fixBn:
      'গুরুত্বহীন সিলেবলে জিহ্বা relax, মুখ প্রায় বন্ধ, খুবই দুর্বল "অ"। about = əBAUT, নয় aBAUT।',
    examples: [
      { word: "about", ipa: "/əˈbaʊt/" },
      { word: "sofa", ipa: "/ˈsoʊfə/" },
      { word: "banana", ipa: "/bəˈnænə/" },
      { word: "computer", ipa: "/kəmˈpjuːtər/" },
    ],
  },
  {
    slug: "diphthong",
    titleBn: "Diphthong /eɪ/, /əʊ/ — একটা নয়, দুইটা সাউন্ড",
    pair: "day /eɪ/, go /əʊ/",
    problemBn: 'বাংলায় "day" = "ডে" (একটা সাউন্ড)। কিন্তু English-এ = e + i (গ্লাইড)।',
    fixBn: "day = ডে-ই (আস্তে গড়ানো)। go = গৌ (o থেকে u-তে গড়ানো)।",
    examples: [
      { word: "day", ipa: "/deɪ/" },
      { word: "go", ipa: "/ɡoʊ/" },
      { word: "no", ipa: "/noʊ/" },
      { word: "make", ipa: "/meɪk/" },
    ],
  },
];

export const CLUSTER_TIP = {
  titleBn: "শব্দের শুরুতে দুই-তিনটি consonant একসাথে (school, street)",
  problemBn:
    "বাংলায় শব্দের শুরুতে consonant cluster নেই — তাই আমরা মাঝখানে vowel বসাই: school → ইস্কুল, street → ইস্ট্রিট, play → পিলে।",
  fixBn:
    'মাঝখানে কোনো "ই" বা "অ" বসাবেন না। sk/str/pl একসাথে সরাসরি বলুন। ধীরে শুরু করে দ্রুততর হোন।',
  examples: [
    { word: "school", err: "ইস্কুল", right: "skool" },
    { word: "street", err: "ইস্ট্রিট", right: "street" },
    { word: "play", err: "পিলে", right: "play" },
    { word: "sport", err: "ইস্পোর্ট", right: "sport" },
    { word: "small", err: "ইস্মল", right: "small" },
  ],
};

export const STRESS_TIP = {
  titleBn: "Stress — কোন সিলেবলে জোর?",
  problemBn:
    "বাংলায় প্রায় সবসময় প্রথম সিলেবলে stress। কিন্তু English-এ stress অনির্দিষ্ট — এমনকি একই শব্দ noun/verb ভেদে stress বদলায়।",
  fixBn: "নতুন শব্দ শেখার সময় dictionary-তে stress mark (ˈ) দেখুন। ভুল stress = ভুল word।",
  examples: [
    { word: "PREsent (noun) — উপহার", verb: "preSENT (verb) — উপস্থাপন করা" },
    { word: "REcord (noun) — রেকর্ড", verb: "reCORD (verb) — রেকর্ড করা" },
    { word: "PROduce (noun) — কাঁচামাল", verb: "proDUCE (verb) — তৈরি করা" },
    { word: "OBject (noun) — বস্তু", verb: "obJECT (verb) — আপত্তি করা" },
  ],
};
