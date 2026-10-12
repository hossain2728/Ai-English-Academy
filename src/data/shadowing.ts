// Shadowing Trainer — Alexander Arguelles-এর proven technique
// শুনো → সাথে সাথে বলো → নিজে record করো → নিজের কণ্ঠ শোনো → তুলনা করো।
// এটাই native accent-এর সবচেয়ে দ্রুত পথ।

export type ShadowLine = {
  id: string;
  text: string;
  bn: string;
  focus: string;
};

export type ShadowSet = {
  id: string;
  title: string;
  titleBn: string;
  level: "beginner" | "intermediate" | "advanced";
  emoji: string;
  intro: string;
  lines: ShadowLine[];
};

export const SHADOW_SETS: ShadowSet[] = [
  {
    id: "greetings",
    title: "Everyday Greetings",
    titleBn: "প্রতিদিনের সম্ভাষণ",
    level: "beginner",
    emoji: "👋",
    intro:
      "প্রথম শোনো, তারপর সাথে সাথে বলো, তারপর নিজে record করে শোনো। ৫ বার repeat করলে মুখে বসে যাবে।",
    lines: [
      {
        id: "g1",
        text: "Hi, how are you doing today?",
        bn: "হাই, আজকে কেমন আছ?",
        focus: "'doing' — d-uw-ing, শেষে 'g' নরম",
      },
      {
        id: "g2",
        text: "It's nice to meet you.",
        bn: "তোমার সাথে পরিচিত হয়ে ভালো লাগল।",
        focus: "'to' — 'টু' নয়, বলো 'tuh'",
      },
      {
        id: "g3",
        text: "I'm doing pretty well, thanks.",
        bn: "আমি বেশ ভালোই আছি, ধন্যবাদ।",
        focus: "'pretty' — 'প্রিটি' নয়, 'priddy'",
      },
      {
        id: "g4",
        text: "What have you been up to?",
        bn: "তুমি কী করছিলে?",
        focus: "'What have you' — দ্রুতে 'Whatchu been'",
      },
      {
        id: "g5",
        text: "Take care, see you soon!",
        bn: "সাবধানে থেক, দেখা হবে!",
        focus: "'see you' — 'see-yuh', মিলে যায়",
      },
    ],
  },
  {
    id: "shopping",
    title: "At the Shop",
    titleBn: "দোকানে",
    level: "beginner",
    emoji: "🛒",
    intro: "বিদেশে সবচেয়ে বেশি লাগবে এই বাক্যগুলো। মুখস্থ + accent — দুটোই দরকার।",
    lines: [
      {
        id: "s1",
        text: "How much does this cost?",
        bn: "এটার দাম কত?",
        focus: "'does this' — 'duz-this', জোর 'much'-এ",
      },
      {
        id: "s2",
        text: "Do you have this in a bigger size?",
        bn: "এটা বড় সাইজে আছে?",
        focus: "'in a' — 'in-a', মিলে যায়",
      },
      {
        id: "s3",
        text: "Can I try it on, please?",
        bn: "একটু পরে দেখতে পারি?",
        focus: "'try it on' — 'try-yit-on', একটানা",
      },
      {
        id: "s4",
        text: "I'll take two of these.",
        bn: "এই দুটো নেব।",
        focus: "'I'll' — 'আইল' নয়, 'ile' খুব দ্রুত",
      },
      {
        id: "s5",
        text: "Do you accept card payment?",
        bn: "কার্ডে পেমেন্ট নেন?",
        focus: "'accept' — জোর দ্বিতীয় syllable-এ",
      },
    ],
  },
  {
    id: "interview",
    title: "Job Interview",
    titleBn: "চাকরির ইন্টারভিউ",
    level: "intermediate",
    emoji: "💼",
    intro: "ধীরে, স্পষ্ট, আত্মবিশ্বাসের সাথে। থামা কোনো সমস্যা না — শব্দ গিলে ফেলাটাই সমস্যা।",
    lines: [
      {
        id: "i1",
        text: "Thank you for this opportunity.",
        bn: "এই সুযোগের জন্য ধন্যবাদ।",
        focus: "'opportunity' — o-pper-TU-nity, জোর ৩য়-তে",
      },
      {
        id: "i2",
        text: "I have five years of experience in this field.",
        bn: "এই ক্ষেত্রে আমার পাঁচ বছরের অভিজ্ঞতা।",
        focus: "'years of' — 'years-uv', মিলে যায়",
      },
      {
        id: "i3",
        text: "My greatest strength is problem-solving.",
        bn: "আমার সবচেয়ে বড় গুণ সমস্যা সমাধান।",
        focus: "'strength' — 'স্ট্রেংথ', 'th' জিভ দাঁতে",
      },
      {
        id: "i4",
        text: "I'm passionate about learning new things.",
        bn: "নতুন কিছু শেখাতে আমি অনুরাগী।",
        focus: "'passionate' — PASH-in-it, জোর ১ম-তে",
      },
      {
        id: "i5",
        text: "I would love to be part of your team.",
        bn: "আপনার দলের অংশ হতে চাই।",
        focus: "'would love to' — 'wud-love-tuh', পুরোটা মিলে",
      },
    ],
  },
  {
    id: "conversation",
    title: "Real Conversation",
    titleBn: "বাস্তব আড্ডা",
    level: "intermediate",
    emoji: "💬",
    intro: "Native-রা এভাবেই কথা বলে — শব্দ গিলে না, কিন্তু মিলিয়ে বলে। তুমিও পারবে।",
    lines: [
      {
        id: "c1",
        text: "Actually, I was just about to call you.",
        bn: "সত্যি বলতে, আমি তোমাকেই কল করতে যাচ্ছিলাম।",
        focus: "'was just about to' — 'wuz-jus-abou-duh'",
      },
      {
        id: "c2",
        text: "That's a really interesting point.",
        bn: "এটা সত্যিই মজার একটা কথা।",
        focus: "'really' — 'REE-lee', দুই syllable",
      },
      {
        id: "c3",
        text: "I couldn't agree with you more.",
        bn: "তোমার সাথে সম্পূর্ণ একমত।",
        focus: "'couldn't' — 'কুডন্ট', 'd' প্রায় নেই",
      },
      {
        id: "c4",
        text: "Let me think about it for a second.",
        bn: "একটু ভাবতে দাও।",
        focus: "'for a' — 'fer-a', খুব ছোট",
      },
      {
        id: "c5",
        text: "Sorry, could you say that again?",
        bn: "দুঃখিত, আরেকবার বলবে?",
        focus: "'could you' — 'কুড-ইউ', একটু নরম 'd'",
      },
    ],
  },
  {
    id: "phone",
    title: "On the Phone",
    titleBn: "ফোনে কথা",
    level: "beginner",
    emoji: "📞",
    intro: "ফোনে কথা বলা কঠিন — কারণ মুখ দেখা যায় না। এই বাক্যগুলো মুখস্থ থাকলে আটকাবে না।",
    lines: [
      {
        id: "p1",
        text: "Hello, may I speak to Rahim, please?",
        bn: "হ্যালো, রহিমের সাথে কথা বলতে পারি?",
        focus: "'may I' — 'may-I', মৃদু জোর",
      },
      {
        id: "p2",
        text: "Who is calling, please?",
        bn: "কে বলছেন, দয়া করে?",
        focus: "'who is' — 'who's', মিলে যায়",
      },
      {
        id: "p3",
        text: "Could you speak a little louder?",
        bn: "একটু জোরে বলবেন?",
        focus: "'a little' — 'a-liddle', দ্রুত",
      },
      {
        id: "p4",
        text: "Sorry, I didn't catch your name.",
        bn: "দুঃখিত, আপনার নাম বুঝিনি।",
        focus: "'didn't catch' — 'didn-catch'",
      },
      {
        id: "p5",
        text: "I'll call you back in five minutes.",
        bn: "পাঁচ মিনিটে কল ব্যাক করব।",
        focus: "'call you back' — 'call-yuh-back'",
      },
    ],
  },
  {
    id: "restaurant",
    title: "At the Restaurant",
    titleBn: "রেস্তোরাঁয়",
    level: "beginner",
    emoji: "🍽️",
    intro: "বিদেশে খেতে গেলে সব সময় এই বাক্যগুলো লাগবে।",
    lines: [
      {
        id: "r1",
        text: "Could we see the menu, please?",
        bn: "মেনু দেখতে পারি?",
        focus: "'could we' — 'কুড-উই', দ্রুত",
      },
      {
        id: "r2",
        text: "I'll have the chicken curry.",
        bn: "আমি চিকেন কারি নেব।",
        focus: "'I'll have' — 'ile-hav', একটানা",
      },
      {
        id: "r3",
        text: "Not too spicy, please.",
        bn: "বেশি ঝাল না, দয়া করে।",
        focus: "'not too' — 'not-tuh', মিলে",
      },
      {
        id: "r4",
        text: "Can I get some water?",
        bn: "একটু পানি পাব?",
        focus: "'get some' — 'get-sum'",
      },
      { id: "r5", text: "The bill, please.", bn: "বিলটা দিন।", focus: "'the bill' — 'thuh-bill'" },
    ],
  },
  {
    id: "travel",
    title: "Traveling Abroad",
    titleBn: "বিদেশ ভ্রমণ",
    level: "intermediate",
    emoji: "✈️",
    intro: "এয়ারপোর্ট, ইমিগ্রেশন, হোটেল — সবথেকে দরকারি বাক্য।",
    lines: [
      {
        id: "t1",
        text: "I'm here for tourism.",
        bn: "আমি পর্যটনের জন্য এসেছি।",
        focus: "'I'm here' — 'ime-heer'",
      },
      {
        id: "t2",
        text: "How long is the flight?",
        bn: "ফ্লাইট কতক্ষণের?",
        focus: "'how long' — জোর 'long'-এ",
      },
      {
        id: "t3",
        text: "Is there Wi-Fi in the room?",
        bn: "রুমে ওয়াই-ফাই আছে?",
        focus: "'is there' — 'iz-thair'",
      },
      {
        id: "t4",
        text: "Where can I exchange money?",
        bn: "কোথায় টাকা ভাঙানো যাবে?",
        focus: "'exchange' — জোর ২য় syllable-এ",
      },
      {
        id: "t5",
        text: "I'd like to check in, please.",
        bn: "চেক-ইন করতে চাই।",
        focus: "'I'd like to' — 'ide-like-tuh'",
      },
    ],
  },
  {
    id: "meeting",
    title: "Office Meeting",
    titleBn: "অফিস মিটিং",
    level: "intermediate",
    emoji: "💻",
    intro: "মিটিং-এ কথা বলার শক্তি — এই phrases মুখস্থ রাখলে confidence আসবে।",
    lines: [
      {
        id: "m1",
        text: "Can everyone hear me okay?",
        bn: "সবাই আমাকে ঠিকমতো শুনতে পাচ্ছেন?",
        focus: "'hear me' — 'heer-mee'",
      },
      {
        id: "m2",
        text: "I'd like to add something here.",
        bn: "আমি এখানে কিছু যোগ করতে চাই।",
        focus: "'I'd like to' — 'ide-like-tuh'",
      },
      {
        id: "m3",
        text: "Could you go over that again?",
        bn: "আরেকবার বুঝিয়ে বলবেন?",
        focus: "'go over' — 'go-over', মিলে",
      },
      {
        id: "m4",
        text: "Let's move on to the next point.",
        bn: "চলুন পরের বিষয়ে যাই।",
        focus: "'move on to' — 'moov-on-tuh'",
      },
      {
        id: "m5",
        text: "That makes a lot of sense.",
        bn: "এটা যুক্তিসঙ্গত মনে হচ্ছে।",
        focus: "'a lot of' — 'a-lodda'",
      },
    ],
  },
  {
    id: "small-talk",
    title: "Small Talk",
    titleBn: "হালকা আড্ডা",
    level: "intermediate",
    emoji: "☕",
    intro: "Native-রা কাজের আগে-পরে এই ছোট ছোট কথা বলেই বন্ধুত্ব বানায়।",
    lines: [
      {
        id: "st1",
        text: "How was your weekend?",
        bn: "উইকএন্ড কেমন কাটল?",
        focus: "'how was' — 'how-wuz'",
      },
      {
        id: "st2",
        text: "The weather is lovely today, isn't it?",
        bn: "আজ আবহাওয়াটা সুন্দর, তাই না?",
        focus: "'isn't it' — 'iz-nit'",
      },
      {
        id: "st3",
        text: "I haven't seen you in ages!",
        bn: "অনেক দিন হলো তোমাকে দেখি না!",
        focus: "'haven't seen' — 'hav-en-seen'",
      },
      {
        id: "st4",
        text: "So, what do you do for a living?",
        bn: "তুমি কী কাজ কর?",
        focus: "'what do you' — 'wut-doo-yuh'",
      },
      {
        id: "st5",
        text: "Sounds like a plan!",
        bn: "ভালো বুদ্ধি!",
        focus: "'sounds like' — 'sounz-like'",
      },
    ],
  },
  {
    id: "emergency",
    title: "Emergency Situations",
    titleBn: "জরুরি অবস্থা",
    level: "intermediate",
    emoji: "🚨",
    intro: "বিপদে এই বাক্যগুলো জান বাঁচাতে পারে। মুখস্থ রাখো।",
    lines: [
      {
        id: "e1",
        text: "Please call an ambulance!",
        bn: "দয়া করে অ্যাম্বুলেন্স ডাকুন!",
        focus: "'ambulance' — জোর ১ম-তে",
      },
      {
        id: "e2",
        text: "I need help right now.",
        bn: "আমার এখনই সাহায্য দরকার।",
        focus: "'right now' — জোর 'now'-এ",
      },
      {
        id: "e3",
        text: "There's been an accident.",
        bn: "একটা দুর্ঘটনা হয়েছে।",
        focus: "'there's been' — 'thairz-bin'",
      },
      {
        id: "e4",
        text: "Can you speak more slowly, please?",
        bn: "একটু ধীরে বলবেন?",
        focus: "'more slowly' — 'mor-sloh-lee'",
      },
      {
        id: "e5",
        text: "I don't understand. Please repeat.",
        bn: "বুঝতে পারছি না, আবার বলুন।",
        focus: "'don't' — 'dohnt', 't' প্রায় নেই",
      },
    ],
  },
  {
    id: "opinions",
    title: "Sharing Opinions",
    titleBn: "মতামত জানানো",
    level: "advanced",
    emoji: "🗣️",
    intro: "মতামত দিতে গিয়ে ভয় পেয়ো না — polite phrase জানলেই যথেষ্ট।",
    lines: [
      {
        id: "o1",
        text: "In my opinion, this could work better.",
        bn: "আমার মতে, এটা আরও ভালো হতে পারে।",
        focus: "'in my' — 'in-mai'",
      },
      {
        id: "o2",
        text: "I see your point, but I disagree.",
        bn: "বুঝলাম, কিন্তু আমি একমত না।",
        focus: "'I see your' — 'I-see-yer'",
      },
      {
        id: "o3",
        text: "That's a fair question.",
        bn: "এটা সঙ্গত প্রশ্ন।",
        focus: "'that's a' — 'thats-a'",
      },
      {
        id: "o4",
        text: "Honestly, I'm not sure about that.",
        bn: "সত্যি বলতে, নিশ্চিত না।",
        focus: "'not sure' — 'not-shure'",
      },
      {
        id: "o5",
        text: "It depends on the situation.",
        bn: "পরিস্থিতির উপর নির্ভর করে।",
        focus: "'depends on' — 'de-pen-zon'",
      },
    ],
  },
  {
    id: "storytelling",
    title: "Telling a Story",
    titleBn: "গল্প বলা",
    level: "advanced",
    emoji: "📖",
    intro: "গল্প বলতে পারলে যে কোনো কথোপকথন জমজমাট হয়।",
    lines: [
      {
        id: "ts1",
        text: "You won't believe what happened yesterday.",
        bn: "গতকাল কী হয়েছে বিশ্বাস করবে না।",
        focus: "'won't' — 'wohnt'",
      },
      {
        id: "ts2",
        text: "So I was walking down the street when...",
        bn: "আমি রাস্তা দিয়ে হাঁটছিলাম, তখন...",
        focus: "'was walking' — 'wuz-walking'",
      },
      {
        id: "ts3",
        text: "All of a sudden, everything changed.",
        bn: "হঠাৎ সবকিছু বদলে গেল।",
        focus: "'all of a' — 'all-uv-a'",
      },
      {
        id: "ts4",
        text: "To make a long story short...",
        bn: "সংক্ষেপে বললে...",
        focus: "'to make a' — 'tuh-mek-a'",
      },
      {
        id: "ts5",
        text: "And that's how it all ended.",
        bn: "আর এভাবেই সব শেষ হলো।",
        focus: "'that's how' — 'thats-how'",
      },
    ],
  },
];
