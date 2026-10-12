// Bangladesh-context real-life English scenarios.
// প্রত্যেকটা পরিস্থিতিতে যে বাক্যগুলো সত্যিই কাজে লাগে — বই-এর ইংরেজি না,
// রাস্তার-অফিসের-হাসপাতালের বাস্তব ইংরেজি।

export type ScenarioLine = {
  who: "you" | "them";
  whoLabel: string;
  en: string;
  bn: string;
  tip?: string;
};

export type Scenario = {
  id: string;
  emoji: string;
  title: string;
  titleEn: string;
  context: string;
  goal: string;
  keyPhrases: { en: string; bn: string }[];
  dialogue: ScenarioLine[];
  culturalTip: string;
  avoid: { wrong: string; why: string }[];
};

export const SCENARIOS: Scenario[] = [
  {
    id: "tea-stall",
    emoji: "☕",
    title: "চা-দোকানে বন্ধুর সাথে (ইংলিশ প্র্যাকটিস)",
    titleEn: "At the tea stall",
    context: "প্রতিদিনের সবচেয়ে সহজ জায়গা — এখানেই ইংরেজি শুরু করা যায়।",
    goal: "চা অর্ডার করা, দাম জিজ্ঞাসা, ছোট small talk (কেমন আছেন / কী খবর) — সব বাংলার মতো সহজ ইংরেজিতে।",
    keyPhrases: [
      { en: "One tea, please. Less sugar.", bn: "এক কাপ চা, চিনি কম।" },
      { en: "How much?", bn: "কত হলো?" },
      { en: "Keep the change.", bn: "খুচরা রেখে দিন।" },
      { en: "What's up?", bn: "কী খবর?" },
    ],
    dialogue: [
      {
        who: "you",
        whoLabel: "আপনি",
        en: "Bhai, one milk tea. Less sugar, please.",
        bn: "ভাই, এক দুধ চা। চিনি কম, প্লিজ।",
      },
      { who: "them", whoLabel: "দোকানদার", en: "Sure. Anything else?", bn: "আচ্ছা। আর কিছু?" },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "One cigarette also. How much in total?",
        bn: "একটা সিগারেটও। মোট কত?",
      },
      { who: "them", whoLabel: "দোকানদার", en: "Thirty taka.", bn: "ত্রিশ টাকা।" },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "Here you go. Keep the change.",
        bn: "এই নিন। খুচরা রেখে দিন।",
      },
      {
        who: "them",
        whoLabel: "দোকানদার",
        en: "Thanks bhai. Come again.",
        bn: "ধন্যবাদ ভাই। আবার আসবেন।",
      },
    ],
    culturalTip:
      "Small talk-এ 'How are you?' জিজ্ঞাসা করলে আসলে বিস্তারিত উত্তর কেউ চায় না — 'Good, you?' বললেই হয়।",
    avoid: [
      { wrong: "Give me one tea.", why: "'Give me' একটু rude শোনায়। 'One tea, please' ভদ্র।" },
      { wrong: "How much taka?", why: "শুধু 'How much?' যথেষ্ট।" },
    ],
  },
  {
    id: "rickshaw",
    emoji: "🛺",
    title: "রিকশা / CNG-তে দরদাম",
    titleEn: "Rickshaw / CNG bargaining",
    context: "বিদেশি বন্ধু বা ট্যুরিস্টের সাথে বের হলে সবচেয়ে বেশি লাগে।",
    goal: "গন্তব্য বলা, দাম জিজ্ঞাসা, দরদাম করা, রাস্তা বলা।",
    keyPhrases: [
      { en: "Will you go to New Market?", bn: "নিউ মার্কেট যাবেন?" },
      { en: "How much?", bn: "কত ভাড়া?" },
      { en: "Too much. Fifty, okay?", bn: "বেশি হয়ে গেল। পঞ্চাশ, চলবে?" },
      { en: "Please go straight. Then take a left.", bn: "সোজা যান। তারপর বাঁয়ে যাবেন।" },
      { en: "Stop here, please.", bn: "এখানে দাঁড়ান, প্লিজ।" },
    ],
    dialogue: [
      {
        who: "you",
        whoLabel: "আপনি",
        en: "Mama, will you go to Dhanmondi 27?",
        bn: "মামা, ধানমন্ডি ২৭ যাবেন?",
      },
      { who: "them", whoLabel: "রিকশাচালক", en: "Yes. Eighty taka.", bn: "হ্যাঁ। আশি টাকা।" },
      { who: "you", whoLabel: "আপনি", en: "Too much. Sixty?", bn: "বেশি হয়ে গেল। ষাট?" },
      { who: "them", whoLabel: "রিকশাচালক", en: "Seventy, last.", bn: "সত্তর, শেষ।" },
      { who: "you", whoLabel: "আপনি", en: "Okay, let's go.", bn: "ঠিক আছে, চলুন।" },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "Go straight, then take a right at the signal.",
        bn: "সোজা যান, সিগন্যালে ডানে যাবেন।",
      },
    ],
    culturalTip:
      "বিদেশিরা সাধারণত দরদাম করে না বা করলেও অস্বস্তি লাগে। তাই ভদ্রভাবে দাম বলুন — চিৎকার না।",
    avoid: [
      { wrong: "You will go?", why: "উচ্চারণ ও ভঙ্গি অনুরোধের মতো হওয়া চাই।" },
      { wrong: "Price is too much.", why: "'Too much' একাই যথেষ্ট, casual কথায়।" },
    ],
  },
  {
    id: "doctor-visit",
    emoji: "🏥",
    title: "ডাক্তারের কাছে",
    titleEn: "At the doctor's",
    context:
      "নিজের বা পরিবারের সমস্যা বোঝাতে না পারলে ভুল ওষুধ পড়তে পারে — এটা জীবন-মৃত্যুর ব্যাপার।",
    goal: "কী সমস্যা, কতদিন ধরে, কেমন ব্যথা — পরিষ্কারভাবে বলা।",
    keyPhrases: [
      { en: "I have a headache.", bn: "আমার মাথা ব্যথা।" },
      { en: "It hurts here.", bn: "এখানে ব্যথা করছে।" },
      { en: "For three days.", bn: "তিন দিন ধরে।" },
      { en: "I feel dizzy / weak / feverish.", bn: "মাথা ঘুরছে / দুর্বল / জ্বর জ্বর।" },
      { en: "Is it serious, doctor?", bn: "সিরিয়াস কিছু, ডাক্তার?" },
    ],
    dialogue: [
      { who: "them", whoLabel: "ডাক্তার", en: "What's the problem?", bn: "সমস্যা কী?" },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "I have stomach pain since yesterday.",
        bn: "গতকাল থেকে পেট ব্যথা।",
      },
      {
        who: "them",
        whoLabel: "ডাক্তার",
        en: "Where exactly does it hurt?",
        bn: "ঠিক কোথায় ব্যথা?",
      },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "Here, on the right side. It gets worse after eating.",
        bn: "এখানে, ডান পাশে। খাওয়ার পর বাড়ে।",
      },
      { who: "them", whoLabel: "ডাক্তার", en: "Any fever or vomiting?", bn: "জ্বর বা বমি?" },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "A little fever last night. No vomiting.",
        bn: "কাল রাতে অল্প জ্বর। বমি নেই।",
      },
      {
        who: "them",
        whoLabel: "ডাক্তার",
        en: "Okay, I'm giving you some tests. Come back after.",
        bn: "ঠিক আছে, কিছু টেস্ট দিচ্ছি। পরে আসবেন।",
      },
    ],
    culturalTip:
      "ব্যথা কেমন সেটা বোঝাতে verb ভিন্ন: **sharp** (তীব্র), **dull** (ভোঁতা), **throbbing** (ধুকধুক), **burning** (জ্বলুনি)।",
    avoid: [
      { wrong: "My body is paining.", why: "'It hurts' বা 'I have pain in …' বেশি স্বাভাবিক।" },
      { wrong: "I am suffering fever.", why: "'I have a fever' বলুন।" },
    ],
  },
  {
    id: "job-interview",
    emoji: "💼",
    title: "চাকরির ইন্টারভিউ (Tell me about yourself)",
    titleEn: "Job interview",
    context: "প্রথম প্রশ্নেই ৭০% ছাত্র আটকে যায়। এই টেমপ্লেটটা মুখস্থ করে নিজেরটা বসিয়ে নিন।",
    goal: "নিজেকে ৬০-৯০ সেকেন্ডে পরিচয়, দক্ষতা, কেন এই চাকরি — গুছিয়ে বলা।",
    keyPhrases: [
      { en: "Thank you for the opportunity.", bn: "সুযোগের জন্য ধন্যবাদ।" },
      {
        en: "I graduated in Computer Science from Dhaka University.",
        bn: "আমি DU থেকে CS-এ গ্র্যাজুয়েট।",
      },
      { en: "I have two years of experience in …", bn: "আমার দুই বছরের অভিজ্ঞতা … এ।" },
      {
        en: "I'm particularly interested in this role because …",
        bn: "এই পদে আমার বিশেষ আগ্রহ কারণ …",
      },
      { en: "I'd love to learn more about your team.", bn: "আপনাদের টিম সম্পর্কে জানতে চাই।" },
    ],
    dialogue: [
      {
        who: "them",
        whoLabel: "ইন্টারভিউয়ার",
        en: "So, tell me about yourself.",
        bn: "নিজের সম্পর্কে বলুন।",
      },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "Thank you. My name is Rashed. I completed my BBA from BRAC University in 2024.",
        bn: "ধন্যবাদ। আমি রাশেদ। ২০২৪-এ BRAC থেকে BBA শেষ করেছি।",
      },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "After that, I worked as a marketing intern at Grameenphone for six months.",
        bn: "এরপর ছয় মাস GP-তে ইন্টার্ন করেছি।",
      },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "I really enjoy solving customer problems, and I've built strong Excel and communication skills.",
        bn: "কাস্টমারের সমস্যা সমাধান করতে ভালো লাগে; Excel আর communication-এ আমি শক্ত।",
      },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "I'm applying here because your company's focus on data-driven marketing matches exactly what I want to grow in.",
        bn: "আপনাদের data-driven marketing-এর দিকটা আমার লক্ষ্যের সাথে মিলে যায় — তাই এখানে আবেদন।",
      },
      {
        who: "them",
        whoLabel: "ইন্টারভিউয়ার",
        en: "Great. Why should we hire you?",
        bn: "চমৎকার। কেন আপনাকে নিব?",
      },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "Because I bring the skills you need, and I learn fast. I'll add value from week one.",
        bn: "কারণ আপনাদের চাহিদার সাথে আমার দক্ষতা মেলে, এবং আমি দ্রুত শিখি। প্রথম সপ্তাহ থেকেই কাজে আসব।",
      },
    ],
    culturalTip:
      "সরাসরি চোখে তাকান, হাত মেলান দৃঢ়ভাবে, হাসুন। বাংলাদেশে যেমন বিনয়ে মাথা নিচু — western interview-এ চোখে তাকানোটাই আত্মবিশ্বাসের চিহ্ন।",
    avoid: [
      { wrong: "Myself Rashed.", why: "'I am Rashed' বা 'My name is Rashed' বলুন।" },
      { wrong: "I passed BBA.", why: "'I completed / I graduated' — পাশ করলাম না, শেষ করলাম।" },
      {
        wrong: "I am fresher.",
        why: "'I am a fresh graduate' — 'a' লাগবে; fresher শব্দটা global-এ কম চলে।",
      },
    ],
  },
  {
    id: "phone-call",
    emoji: "📞",
    title: "ফরমাল ফোন কল / মিটিং",
    titleEn: "Formal phone call",
    context: "ক্লায়েন্ট, বস, বা বিদেশি সহকর্মীর সাথে ফোনে।",
    goal: "কে বলছি, কেন কল, বার্তা রাখা / নেওয়া — পরিষ্কারভাবে।",
    keyPhrases: [
      { en: "Hello, this is Rashed from ABC Ltd.", bn: "হ্যালো, ABC থেকে রাশেদ বলছি।" },
      { en: "May I speak to Mr. Karim, please?", bn: "মি. করিমের সাথে কথা বলতে পারি?" },
      { en: "Could you hold on a moment?", bn: "একটু ধরুন প্লিজ?" },
      { en: "I'll call you back in five minutes.", bn: "পাঁচ মিনিটে ফোন দিচ্ছি।" },
      { en: "Sorry, could you repeat that?", bn: "দুঃখিত, আরেকবার বলবেন?" },
    ],
    dialogue: [
      {
        who: "you",
        whoLabel: "আপনি",
        en: "Good morning. This is Rashed from Beximco. May I speak to Ms. Anika?",
        bn: "সুপ্রভাত। Beximco থেকে রাশেদ। মিস অনিকার সাথে কথা বলতে পারি?",
      },
      {
        who: "them",
        whoLabel: "রিসেপশন",
        en: "One moment, please. May I know what it's regarding?",
        bn: "একটু ধরুন। কী বিষয়ে?",
      },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "It's about the delivery schedule for next week.",
        bn: "আগামী সপ্তাহের ডেলিভারি নিয়ে।",
      },
      {
        who: "them",
        whoLabel: "রিসেপশন",
        en: "She's in a meeting. Can I take a message?",
        bn: "উনি মিটিং-এ। মেসেজ রাখব?",
      },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "Yes, please. Ask her to call me back at 01711-XXXXXX when free.",
        bn: "হ্যাঁ। সময় হলে যেন আমাকে কল করেন — 01711-XXXXXX।",
      },
    ],
    culturalTip:
      "ফোনে 'Hello?' পর নিজেকে **আগে পরিচয়** দিন। 'Who are you?' জিজ্ঞাসা করা হলে সেটা rude ধরা হয় western culture-এ।",
    avoid: [
      {
        wrong: "Who is this?",
        why: "'May I know who's calling?' বা 'Could I have your name, please?' ভদ্র।",
      },
      { wrong: "Tell him call me.", why: "'Please ask him to call me back.'" },
    ],
  },
  {
    id: "restaurant",
    emoji: "🍽️",
    title: "রেস্টুরেন্টে অর্ডার",
    titleEn: "Ordering at a restaurant",
    context: "ফ্যামিলি ডিনার, ডেট, বিদেশি বন্ধুদের সাথে।",
    goal: "টেবিল, মেনু, অর্ডার, বিল — পুরো cycle-এ কনফিডেন্ট।",
    keyPhrases: [
      { en: "A table for four, please.", bn: "চারজনের টেবিল, প্লিজ।" },
      { en: "Could I see the menu?", bn: "মেনুটা দেখতে পারি?" },
      { en: "What do you recommend?", bn: "কী সাজেস্ট করেন?" },
      { en: "I'll have the chicken biryani.", bn: "আমি চিকেন বিরিয়ানি নেব।" },
      { en: "Not too spicy, please.", bn: "খুব ঝাল করবেন না।" },
      { en: "Could we get the bill, please?", bn: "বিলটা দেবেন প্লিজ?" },
    ],
    dialogue: [
      {
        who: "them",
        whoLabel: "ওয়েটার",
        en: "Good evening. How many people?",
        bn: "সন্ধ্যা। ক'জন?",
      },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "Three, please. Somewhere quiet if possible.",
        bn: "তিনজন। সম্ভব হলে একটু শান্ত জায়গায়।",
      },
      {
        who: "them",
        whoLabel: "ওয়েটার",
        en: "Right this way. Here's the menu.",
        bn: "এদিকে আসুন। এই যে মেনু।",
      },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "Thanks. Could you give us a few minutes?",
        bn: "ধন্যবাদ। একটু সময় দেবেন?",
      },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "We'll have two beef kachchi and one grilled chicken. And three plain water.",
        bn: "দুই বিফ কাচ্চি আর এক গ্রিল চিকেন। আর তিন পানি।",
      },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "Excuse me — could we get the bill? Card payment.",
        bn: "এক্সকিউজ মি — বিলটা? কার্ডে দেব।",
      },
    ],
    culturalTip: "'Water' চাইলে 'plain water' বলা ভালো, নাহলে দাম-দেওয়া bottled water দিতে পারে।",
    avoid: [
      { wrong: "Give me menu card.", why: "'Could I see the menu?' — 'menu card' Bangla-ism।" },
      { wrong: "Waiter! Come here!", why: "চোখে ইশারা / হাত সামান্য তুলুন। 'Excuse me' বলুন।" },
    ],
  },
  {
    id: "airport",
    emoji: "✈️",
    title: "এয়ারপোর্টে (Check-in থেকে Immigration)",
    titleEn: "At the airport",
    context: "প্রথমবার বিদেশে গেলে সবচেয়ে বেশি চাপ পড়ে এখানে।",
    goal: "চেক-ইন, ইমিগ্রেশন অফিসারের প্রশ্ন, boarding — সব ধাপে শান্ত থাকা।",
    keyPhrases: [
      { en: "I'd like to check in for flight EK-583.", bn: "EK-583 ফ্লাইটে চেক-ইন করব।" },
      { en: "Just one check-in bag.", bn: "মাত্র একটা লাগেজ।" },
      { en: "Aisle seat, please.", bn: "করিডোরের পাশের সিট।" },
      { en: "I'm here for tourism / studies / work.", bn: "ট্যুরিজম / পড়া / কাজের জন্য এসেছি।" },
      { en: "For two weeks.", bn: "দুই সপ্তাহের জন্য।" },
      { en: "I'll be staying at a hotel in London.", bn: "লন্ডনের হোটেলে থাকব।" },
    ],
    dialogue: [
      {
        who: "them",
        whoLabel: "চেক-ইন",
        en: "Passport and ticket, please.",
        bn: "পাসপোর্ট আর টিকিট।",
      },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "Here you go. Just one check-in bag. Window seat if possible.",
        bn: "এই নিন। একটাই লাগেজ। সম্ভব হলে জানালার পাশে।",
      },
      {
        who: "them",
        whoLabel: "ইমিগ্রেশন",
        en: "What's the purpose of your visit?",
        bn: "কী কারণে যাচ্ছেন?",
      },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "Tourism. I'll be visiting my brother in Manchester.",
        bn: "ভ্রমণ। ভাইকে দেখতে ম্যানচেস্টার যাব।",
      },
      { who: "them", whoLabel: "ইমিগ্রেশন", en: "How long will you stay?", bn: "কতদিন থাকবেন?" },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "About three weeks. Here's my return ticket.",
        bn: "প্রায় তিন সপ্তাহ। এই যে ফিরতি টিকিট।",
      },
    ],
    culturalTip: "ইমিগ্রেশনে **সংক্ষিপ্ত, সরাসরি, সত্য** উত্তর দিন। বেশি ব্যাখ্যা সন্দেহ বাড়ায়।",
    avoid: [
      { wrong: "I am going for enjoy.", why: "'For tourism / to visit family / on holiday'।" },
      { wrong: "One only bag.", why: "'Just one bag' বা 'only one bag'।" },
    ],
  },
  {
    id: "email-manager",
    emoji: "📧",
    title: "বসকে ছুটির ইমেইল",
    titleEn: "Leave request email",
    context: "অফিসে সবচেয়ে দরকারি লেখা — একটা টেমপ্লেট মুখস্থ থাকলেই হয়।",
    goal: "ভদ্র, স্পষ্ট, সংক্ষিপ্ত ইমেইল — যাতে বস 'হ্যাঁ' বলেন।",
    keyPhrases: [
      { en: "I hope this email finds you well.", bn: "আশা করি ভালো আছেন।" },
      { en: "I'm writing to request …", bn: "লিখছি … অনুরোধ করতে।" },
      { en: "I will make sure my work is covered.", bn: "আমার কাজ সামলে যাবে তা নিশ্চিত করব।" },
      { en: "Please let me know if you need anything else.", bn: "আর কিছু লাগলে জানাবেন।" },
      { en: "Best regards,", bn: "শুভেচ্ছান্তে," },
    ],
    dialogue: [
      { who: "you", whoLabel: "Subject", en: "Leave Request — 10-12 March", bn: "সাবজেক্ট" },
      { who: "you", whoLabel: "আপনি", en: "Dear Sir,", bn: "প্রিয় স্যার," },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "I hope this email finds you well.",
        bn: "আশা করি ভালো আছেন।",
      },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "I'm writing to request leave from 10 March to 12 March for a family event in my hometown.",
        bn: "১০-১২ মার্চ ছুটি চাচ্ছি — গ্রামে পারিবারিক অনুষ্ঠান।",
      },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "I have handed over my ongoing tasks to Karim, and I'll be reachable by phone if urgent.",
        bn: "চলমান কাজ করিমকে বুঝিয়ে দিয়েছি; জরুরি কিছু হলে ফোনে পাবেন।",
      },
      {
        who: "you",
        whoLabel: "আপনি",
        en: "Please let me know if this works for you.",
        bn: "এটা চলবে কিনা জানাবেন।",
      },
      { who: "you", whoLabel: "আপনি", en: "Best regards,\nRashed", bn: "শুভেচ্ছান্তে,\nরাশেদ" },
    ],
    culturalTip:
      "Subject line-এ **কারণ + তারিখ** দিন — বস এক নজরে বুঝবে। 'Please' একবার যথেষ্ট, বারবার না।",
    avoid: [
      {
        wrong: "Respected sir, with due respect I beg to say…",
        why: "স্কুলের চিঠির স্টাইল, বর্তমান কর্পোরেটে হাস্যকর।",
      },
      {
        wrong: "Kindly do the needful.",
        why: "Global email-এ এড়িয়ে চলুন — 'Please approve' বলুন।",
      },
    ],
  },
];
