// Top common English mistakes by Bengali/Bangla speakers.
// Sources synthesized from:
//  - Robin Upton (2012) "Top 10 Bangladeshi Spoken English Mistakes"
//  - Chittagong University Journal — Tense/Aspect Errors of Bangla speakers
//  - ISU Journal (2023) — Error Analysis, BD tertiary EFL learners
//  - Cambridge Learner Corpus — Common Mistakes in English
//  - arefinhasan.com — BD learner mistakes 2025 update
//
// প্রত্যেকটা ভুল কেন হয় (Bangla → English direct translation), সঠিক রূপ কী,
// এবং কীভাবে মনে রাখবেন — সব বাংলায়।

export type Mistake = {
  id: string;
  category:
    | "articles"
    | "prepositions"
    | "tense"
    | "verb-form"
    | "word-order"
    | "singular-plural"
    | "pronunciation"
    | "translation";
  categoryLabel: string;
  wrong: string;
  right: string;
  banglaThought: string;
  whyWrong: string;
  rule: string;
  fix: string;
  moreExamples: { wrong: string; right: string }[];
};

export const MISTAKES: Mistake[] = [
  {
    id: "missing-article",
    category: "articles",
    categoryLabel: "Article (a / an / the)",
    wrong: "He is watching movie.",
    right: "He is watching a movie.",
    banglaThought: "সে সিনেমা দেখছে।",
    whyWrong:
      "বাংলায় 'একটা/একটি' সবসময় বলি না — 'সিনেমা দেখছে' বললেই বোঝা যায়। কিন্তু ইংরেজিতে গণনাযোগ্য (countable) singular noun-এর সামনে **a / an / the** লাগবেই — নাহলে বাক্য অসম্পূর্ণ।",
    rule: "গণনাযোগ্য একবচন noun কখনও একা বসে না। নতুন কিছু হলে → a/an, নির্দিষ্ট কিছু হলে → the।",
    fix: "Countable + Singular = অবশ্যই a / an / the লাগবে।",
    moreExamples: [
      { wrong: "I bought book.", right: "I bought a book." },
      { wrong: "She is doctor.", right: "She is a doctor." },
      { wrong: "Open door.", right: "Open the door." },
    ],
  },
  {
    id: "wrong-a-an",
    category: "articles",
    categoryLabel: "Article (a / an / the)",
    wrong: "He is an university student.",
    right: "He is a university student.",
    banglaThought: "শব্দটা 'u' দিয়ে শুরু, তাই an মনে হয়।",
    whyWrong:
      "'a' বা 'an' নির্ভর করে **অক্ষরে না, উচ্চারণে**। University-এর উচ্চারণ 'ইউ-নি-ভার্সিটি' — অর্থাৎ 'y' সাউন্ড দিয়ে শুরু (consonant sound), তাই 'a'।",
    rule: "Vowel সাউন্ড (a, e, i, o, u ধ্বনি) দিয়ে শুরু হলে → an। Consonant সাউন্ড হলে → a।",
    fix: "কানে যেটা শুনবেন সেটাই মানবেন — চোখে না।",
    moreExamples: [
      { wrong: "an hour ago ✓ (সঠিক — h নীরব)", right: "an hour ago" },
      { wrong: "a MBA", right: "an MBA (এম-বি-এ — 'এ' সাউন্ড)" },
      { wrong: "an one-taka coin", right: "a one-taka coin ('ওয়ান' — w সাউন্ড)" },
    ],
  },

  {
    id: "discuss-about",
    category: "prepositions",
    categoryLabel: "Preposition",
    wrong: "We discussed about the matter.",
    right: "We discussed the matter.",
    banglaThought: "'বিষয়টি নিয়ে আলোচনা করলাম' — 'নিয়ে' = about মনে হয়।",
    whyWrong: "Discuss শব্দের ভিতরেই 'about' মানে আছে। ইংরেজিতে discuss কখনও about নেয় না।",
    rule: "কিছু verb নিজের মধ্যেই preposition ধরে রাখে: discuss, enter, marry, request, order, resemble, reach, attend।",
    fix: "Discuss + object (কোনো about না)।",
    moreExamples: [
      { wrong: "He entered into the room.", right: "He entered the room." },
      { wrong: "She married with him.", right: "She married him." },
      { wrong: "I requested to him.", right: "I requested him." },
    ],
  },
  {
    id: "in-on-at-time",
    category: "prepositions",
    categoryLabel: "Preposition (সময়)",
    wrong: "I will come in Monday at morning.",
    right: "I will come on Monday in the morning.",
    banglaThought: "বাংলায় শুধু 'তে' — 'সোমবারতে সকালে'।",
    whyWrong:
      "ইংরেজিতে সময়ের preposition তিনটা আলাদা: বড় সময় (মাস, বছর, ঋতু, সকাল/বিকাল) → **in**, দিন/তারিখ → **on**, ঘড়ির সময় → **at**।",
    rule: "in year/month/morning • on day/date • at 5 o'clock / night",
    fix: "বড় → in, দিন → on, ঘণ্টা → at।",
    moreExamples: [
      { wrong: "in Friday", right: "on Friday" },
      { wrong: "on 2025", right: "in 2025" },
      { wrong: "in 6 PM", right: "at 6 PM" },
    ],
  },

  {
    id: "since-for",
    category: "tense",
    categoryLabel: "Present Perfect",
    wrong: "I am living in Dhaka since 2010.",
    right: "I have been living in Dhaka since 2010.",
    banglaThought: "'২০১০ সাল থেকে ঢাকায় থাকছি' — বাংলায় present tense।",
    whyWrong:
      "যা অতীতে শুরু হয়ে এখনও চলছে → **Present Perfect Continuous** (have been + -ing)। শুধু 'am living' বললে মনে হবে এখন-এখন থাকছি, আগে থেকে না।",
    rule: "since / for + সময় থাকলে → have/has + been + -ing (চলমান কাজ) বা have/has + past participle (শেষ কাজ)।",
    fix: "'…সাল থেকে' মানেই have been।",
    moreExamples: [
      {
        wrong: "She is working here for 5 years.",
        right: "She has been working here for 5 years.",
      },
      { wrong: "I know him since childhood.", right: "I have known him since childhood." },
    ],
  },
  {
    id: "yesterday-perfect",
    category: "tense",
    categoryLabel: "Past Simple vs Perfect",
    wrong: "I have gone to Cox's Bazar yesterday.",
    right: "I went to Cox's Bazar yesterday.",
    banglaThought: "'গিয়েছি' শুনলেই have gone মনে হয়।",
    whyWrong:
      "Yesterday, last week, in 2020 — এই ধরনের **শেষ হওয়া সময়** থাকলে Past Simple (went) ব্যবহার হয়। Present Perfect তখনই, যখন সময় বলছি না বা সময় এখনও শেষ হয়নি।",
    rule: "সময় নির্দিষ্ট + শেষ → Past Simple। সময় অনির্দিষ্ট / এখনও চলছে → Present Perfect।",
    fix: "Yesterday / ago / last … থাকলে → V2 (গেল)।",
    moreExamples: [
      { wrong: "He has come 2 hours ago.", right: "He came 2 hours ago." },
      { wrong: "I have seen him last night.", right: "I saw him last night." },
    ],
  },

  {
    id: "double-verb",
    category: "verb-form",
    categoryLabel: "Verb Form",
    wrong: "He can drives a car.",
    right: "He can drive a car.",
    banglaThought: "'সে গাড়ি চালাতে পারে' — 'চালাতে পারে' দুটোই verb মনে হয়।",
    whyWrong:
      "Modal verb (can, could, will, would, may, might, should, must)-এর পরে verb-এর মূল রূপ (base form / V1) বসে — কখনও -s, -ed, বা -ing না।",
    rule: "Modal + Base verb। সবসময়।",
    fix: "Can/Will/Should-এর পরে → খালি verb।",
    moreExamples: [
      { wrong: "She will comes tomorrow.", right: "She will come tomorrow." },
      { wrong: "You should studying now.", right: "You should study now." },
    ],
  },
  {
    id: "do-does-question",
    category: "verb-form",
    categoryLabel: "Question with Do/Does",
    wrong: "You know him?",
    right: "Do you know him?",
    banglaThought: "'তুমি তাকে চেন?' — শুধু সুরে প্রশ্ন হয়ে যায়।",
    whyWrong:
      "ইংরেজিতে present/past simple-এর প্রশ্ন করতে **Do / Does / Did** দিয়ে শুরু করতে হয়। শুধু voice-এ প্রশ্ন হয় না।",
    rule: "Present: Do/Does + subject + base verb? • Past: Did + subject + base verb?",
    fix: "সাধারণ প্রশ্ন = Do/Does/Did দিয়ে শুরু।",
    moreExamples: [
      { wrong: "She goes there?", right: "Does she go there?" },
      { wrong: "You went yesterday?", right: "Did you go yesterday?" },
    ],
  },

  {
    id: "adjective-order",
    category: "word-order",
    categoryLabel: "Word Order",
    wrong: "This is my one friend.",
    right: "This is a friend of mine. / This is one of my friends.",
    banglaThought: "'এ আমার এক বন্ধু'।",
    whyWrong: "বাংলার 'এক বন্ধু' সরাসরি 'one friend' হয় না। ইংরেজিতে 'my one friend' অর্থহীন।",
    rule: "'আমার এক ...' = a … of mine, বা one of my …s (bahubachan)।",
    fix: "'এক বন্ধু' → 'a friend of mine'।",
    moreExamples: [
      { wrong: "My one uncle lives in USA.", right: "One of my uncles lives in USA." },
    ],
  },
  {
    id: "question-order",
    category: "word-order",
    categoryLabel: "Question Word Order",
    wrong: "Tell me where is he?",
    right: "Tell me where he is.",
    banglaThought: "সরাসরি প্রশ্নের গঠন ঢুকিয়ে দিই।",
    whyWrong:
      "Indirect / embedded question-এ verb subject-এর **পরে** বসে, আগে না। প্রশ্নের সুর তখন নেই।",
    rule: "I don't know / Tell me / Can you tell me + wh-word + Subject + Verb।",
    fix: "প্রশ্নের ভিতরে প্রশ্ন = subject আগে, verb পরে।",
    moreExamples: [
      { wrong: "I don't know what is your name.", right: "I don't know what your name is." },
      { wrong: "Can you tell me where is the bank?", right: "Can you tell me where the bank is?" },
    ],
  },

  {
    id: "uncountable-plural",
    category: "singular-plural",
    categoryLabel: "Countable/Uncountable",
    wrong: "She gave me many advices.",
    right: "She gave me a lot of advice. / much advice.",
    banglaThought: "'অনেক উপদেশ' → advices মনে হয়।",
    whyWrong:
      "Advice, information, furniture, luggage, news, work, homework, equipment — এগুলো **uncountable**, plural হয় না, 'many/a/an' নেয় না।",
    rule: "Uncountable noun → কোনো -s না, a/an না। পরিমাণ বোঝাতে 'a piece of / a lot of / much / some'।",
    fix: "advice, info, news — কখনও -s নয়।",
    moreExamples: [
      { wrong: "I have many works today.", right: "I have a lot of work today." },
      { wrong: "This is a good news.", right: "This is good news." },
      { wrong: "Give me an information.", right: "Give me some information." },
    ],
  },
  {
    id: "peoples",
    category: "singular-plural",
    categoryLabel: "Countable/Uncountable",
    wrong: "Many peoples came to the fair.",
    right: "Many people came to the fair.",
    banglaThought: "'অনেক মানুষ' → 'many peoples'।",
    whyWrong:
      "'People' নিজেই plural (মানুষজন)। এর সাথে -s লাগবে না। 'Peoples' শুধু তখনই, যখন বিভিন্ন **জাতি** বোঝায় (the peoples of Asia)।",
    rule: "People = plural. Person = singular.",
    fix: "People = অনেক, Person = একজন।",
    moreExamples: [
      { wrong: "Ten peoples", right: "Ten people" },
      { wrong: "One people", right: "One person" },
    ],
  },

  {
    id: "back-side",
    category: "translation",
    categoryLabel: "সরাসরি অনুবাদ",
    wrong: "My cousin brother came back side of the house.",
    right: "My cousin came to the back of the house.",
    banglaThought: "'কাকাতো ভাই বাড়ির পিছনদিকে এসেছে'।",
    whyWrong:
      "'Cousin brother / cousin sister' ইংরেজিতে হয় না — শুধু **cousin**। আর 'back side' বলতে ভদ্র ইংরেজিতে শরীরের পিছন অংশ বোঝায়!",
    rule: "Cousin = কাকাতো/মামাতো/খালাতো/ফুফাতো ভাই বা বোন — সবই। 'Back side' এড়িয়ে 'back / behind' বলুন।",
    fix: "Cousin একাই যথেষ্ট। Back side = লজ্জাজনক শব্দ।",
    moreExamples: [
      { wrong: "My real brother", right: "My brother" },
      { wrong: "He is my own uncle", right: "He is my uncle" },
    ],
  },
  {
    id: "off-the-light",
    category: "translation",
    categoryLabel: "সরাসরি অনুবাদ",
    wrong: "Off the light. / On the fan.",
    right: "Turn off the light. / Turn on the fan.",
    banglaThought: "'লাইট অফ কর' — যেভাবে বাংলায় বলি।",
    whyWrong:
      "Off / on শুধু preposition — এগুলো verb না। সুইচ চালু-বন্ধ করার জন্য **turn on / turn off / switch on / switch off** verb লাগবে।",
    rule: "যন্ত্র চালু/বন্ধ → turn on / turn off (বা switch)।",
    fix: "'অফ কর' → 'turn off'।",
    moreExamples: [{ wrong: "On the AC please.", right: "Please turn on the AC." }],
  },
  {
    id: "prepone",
    category: "translation",
    categoryLabel: "সরাসরি অনুবাদ",
    wrong: "Please prepone the meeting.",
    right: "Please move the meeting earlier. / bring forward.",
    banglaThought: "Postpone-এর উল্টা তো prepone!",
    whyWrong:
      "'Prepone' শব্দটা উপমহাদেশে চালু হলেও international English-এ standard না। ফরমাল কনটেক্সটে **bring forward / move up / reschedule earlier** বলুন।",
    rule: "Global audience-এ prepone এড়িয়ে চলুন।",
    fix: "Prepone → bring forward।",
    moreExamples: [
      {
        wrong: "Do the needful",
        right: "Please do what is necessary. / Please take the necessary action.",
      },
      { wrong: "Please revert", right: "Please reply / respond" },
    ],
  },

  {
    id: "v-w-confusion",
    category: "pronunciation",
    categoryLabel: "উচ্চারণ",
    wrong: "I want to go to the willage. (village)",
    right: "I want to go to the village.",
    banglaThought: "বাংলায় 'ভ' আর 'ও' কাছাকাছি — একই সাউন্ড মনে হয়।",
    whyWrong:
      "**V** সাউন্ড: উপরের দাঁত নিচের ঠোঁটে ছুঁয়ে বাতাস ছাড়ুন (কম্পন হবে)।\n**W** সাউন্ড: দুই ঠোঁট গোল করে 'উ' মতো (কোনো দাঁত ছোঁবে না)।",
    rule: "V = দাঁত + ঠোঁট। W = দুই ঠোঁট।",
    fix: "V লিখে দেখুন Very-এর মতো, W লিখে Water-এর মতো।",
    moreExamples: [
      { wrong: "wery good (very)", right: "very good" },
      { wrong: "vater (water)", right: "water" },
    ],
  },
  {
    id: "s-sh",
    category: "pronunciation",
    categoryLabel: "উচ্চারণ",
    wrong: "I need shome shugar. (some sugar)",
    right: "I need some sugar. (সাম শুগার)",
    banglaThought: "'S' আর 'Sh' গুলিয়ে যায়।",
    whyWrong:
      "'Sugar', 'sure' — বানানে s কিন্তু উচ্চারণে **sh**। উল্টো 'some', 'sit', 'seven' — sh না, খাঁটি s।",
    rule: "সব s একরকম না — শব্দ ধরে শিখুন।",
    fix: "Sugar / Sure / Sean-এর s = sh। বাকিরা s।",
    moreExamples: [{ wrong: "shorry (sorry)", right: "sorry (স্যরি — খাঁটি s)" }],
  },

  {
    id: "cope-up-with",
    category: "prepositions",
    categoryLabel: "Preposition",
    wrong: "I can't cope up with the pressure.",
    right: "I can't cope with the pressure.",
    banglaThought: "'সামলে উঠতে পারছি না' — up যোগ করে ফেলি।",
    whyWrong: "'Cope up' নেই ইংরেজিতে। শুধু 'cope with' — সঙ্গে সামলানো।",
    rule: "Cope + with। কোনো up না।",
    fix: "Cope up ❌ → Cope with ✓।",
    moreExamples: [
      { wrong: "return back", right: "return (শুধু)" },
      { wrong: "revert back", right: "revert (শুধু)" },
      { wrong: "repeat again", right: "repeat (শুধু)" },
    ],
  },
  {
    id: "gonna-formal",
    category: "verb-form",
    categoryLabel: "Formal vs Casual",
    wrong: "Sir, I wanna know when u will come.",
    right: "Sir, I want to know when you will come.",
    banglaThought: "চ্যাট/মেসেজে শর্ট ফর্ম অভ্যাস।",
    whyWrong:
      "Wanna, gonna, gotta, u, r, ur, plz, thx — শুধু বন্ধুদের সাথে casual chat-এ চলে। Boss, teacher, client, email-এ ব্যবহার করলে unprofessional।",
    rule: "Formal = পূর্ণ শব্দ। Casual = শর্ট চলে।",
    fix: "কাজের জায়গায় → u ❌, you ✓।",
    moreExamples: [{ wrong: "plz snd me d file", right: "Please send me the file." }],
  },
  {
    id: "myself-intro",
    category: "translation",
    categoryLabel: "সরাসরি অনুবাদ",
    wrong: "Myself Karim.",
    right: "I am Karim. / My name is Karim.",
    banglaThought: "'আমার নাম করিম' → myself দিয়ে শুরু।",
    whyWrong:
      "Myself মানে 'নিজেই' — reflexive pronoun। এটা নাম বলার শব্দ না। ইন্টারভিউ বা পরিচয়ে ভুলটা বেশি হয়।",
    rule: "নাম বলা: I am … / My name is …। Myself শুধু 'I did it myself' (আমি নিজেই করেছি) ধরনের বাক্যে।",
    fix: "পরিচয়ে → 'I am …', কখনও 'Myself …' না।",
    moreExamples: [{ wrong: "Myself introducing me…", right: "Let me introduce myself…" }],
  },
];

export const MISTAKE_CATEGORIES: {
  id: Mistake["category"];
  label: string;
  bangla: string;
}[] = [
  { id: "articles", label: "Articles", bangla: "A / An / The" },
  { id: "prepositions", label: "Prepositions", bangla: "In / On / At / With" },
  { id: "tense", label: "Tense", bangla: "কালের ভুল" },
  { id: "verb-form", label: "Verb Form", bangla: "verb-এর রূপ" },
  { id: "word-order", label: "Word Order", bangla: "শব্দের ক্রম" },
  { id: "singular-plural", label: "Singular / Plural", bangla: "একবচন / বহুবচন" },
  { id: "translation", label: "Direct Translation", bangla: "বাংলা → ইংরেজি সরাসরি" },
  { id: "pronunciation", label: "Pronunciation", bangla: "উচ্চারণ" },
];
