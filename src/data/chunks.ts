// Lexical Chunks & Collocations — Michael Lewis's Lexical Approach
// Native-রা এভাবে ready-made "shortcut" ব্যবহার করে। শব্দ মুখস্থ নয়, phrase মুখস্থ।

export type Chunk = {
  en: string;
  bn: string;
  when: string;
  example: string;
  exampleBn: string;
};

export type ChunkGroup = {
  id: string;
  title: string;
  titleBn: string;
  emoji: string;
  intro: string;
  chunks: Chunk[];
};

export const CHUNK_GROUPS: ChunkGroup[] = [
  {
    id: "opinions",
    title: "Giving Opinions",
    titleBn: "মতামত দেওয়া",
    emoji: "💭",
    intro: "মিটিং, ক্লাস, আড্ডা — যেখানেই কথা বলবে সেখানেই লাগবে।",
    chunks: [
      {
        en: "In my opinion",
        bn: "আমার মতে",
        when: "নরম করে মত দিতে",
        example: "In my opinion, this is the best plan.",
        exampleBn: "আমার মতে, এটাই সেরা প্ল্যান।",
      },
      {
        en: "If you ask me",
        bn: "আমাকে জিজ্ঞেস করলে",
        when: "ঘরোয়া, বন্ধুর সাথে",
        example: "If you ask me, we should leave now.",
        exampleBn: "আমাকে জিজ্ঞেস করলে, এখনই চলে যাওয়া উচিত।",
      },
      {
        en: "I would say",
        bn: "আমি বলব",
        when: "polite মতামত",
        example: "I would say it's a great idea.",
        exampleBn: "আমি বলব এটা দারুণ আইডিয়া।",
      },
      {
        en: "From my point of view",
        bn: "আমার দৃষ্টিকোণ থেকে",
        when: "formal",
        example: "From my point of view, we need more time.",
        exampleBn: "আমার দৃষ্টিকোণ থেকে আরো সময় দরকার।",
      },
      {
        en: "The way I see it",
        bn: "আমি যেভাবে দেখছি",
        when: "conversation, আত্মবিশ্বাসের সাথে",
        example: "The way I see it, we already won.",
        exampleBn: "আমি যেভাবে দেখছি, আমরা জিতেই গেছি।",
      },
      {
        en: "To be honest",
        bn: "সত্যি বলতে",
        when: "সত্যি কথা বলার আগে",
        example: "To be honest, I don't like it.",
        exampleBn: "সত্যি বলতে, আমার পছন্দ না।",
      },
    ],
  },
  {
    id: "agree",
    title: "Agreeing & Disagreeing",
    titleBn: "সম্মতি ও অসম্মতি",
    emoji: "🤝",
    intro: "শুধু 'Yes/No' না — native-রা কীভাবে বলে শোন।",
    chunks: [
      {
        en: "You're absolutely right",
        bn: "তুমি একদম ঠিক",
        when: "জোরালো সম্মতি",
        example: "You're absolutely right about the price.",
        exampleBn: "দামের ব্যাপারে তুমি একদম ঠিক।",
      },
      {
        en: "I couldn't agree more",
        bn: "আরো বেশি একমত হওয়া সম্ভব না",
        when: "মানে সম্পূর্ণ একমত",
        example: "I couldn't agree more with your idea.",
        exampleBn: "তোমার আইডিয়ার সাথে আমি সম্পূর্ণ একমত।",
      },
      {
        en: "That makes sense",
        bn: "এটা যুক্তিসঙ্গত",
        when: "বুঝলাম, ঠিক আছে",
        example: "That makes sense to me.",
        exampleBn: "এটা আমার কাছে যুক্তিসঙ্গত।",
      },
      {
        en: "I see your point, but…",
        bn: "তোমার কথা বুঝি, তবে…",
        when: "নরমভাবে দ্বিমত",
        example: "I see your point, but it's too expensive.",
        exampleBn: "তোমার কথা বুঝি, তবে এটা অনেক দামি।",
      },
      {
        en: "I'm not so sure about that",
        bn: "এই ব্যাপারে আমি নিশ্চিত নই",
        when: "polite disagreement",
        example: "I'm not so sure about that plan.",
        exampleBn: "সেই প্ল্যানের ব্যাপারে আমি নিশ্চিত নই।",
      },
      {
        en: "That's a good point",
        bn: "সুন্দর একটা কথা বললে",
        when: "acknowledge করতে",
        example: "That's a good point, I hadn't thought of it.",
        exampleBn: "সুন্দর কথা, আমি ভেবে দেখিনি।",
      },
    ],
  },
  {
    id: "requests",
    title: "Polite Requests",
    titleBn: "ভদ্র অনুরোধ",
    emoji: "🙏",
    intro: "চাকরি, বিদেশ, দোকান — যেখানেই কিছু চাইবে, native-রা সরাসরি বলে না।",
    chunks: [
      {
        en: "Could you please…",
        bn: "দয়া করে কি…",
        when: "সবচেয়ে polite",
        example: "Could you please repeat that?",
        exampleBn: "দয়া করে আবার বলবেন?",
      },
      {
        en: "Would you mind + -ing",
        bn: "আপত্তি আছে কি…",
        when: "সবচেয়ে ভদ্র",
        example: "Would you mind opening the window?",
        exampleBn: "জানালাটা খুললে আপত্তি আছে?",
      },
      {
        en: "Do you think you could…",
        bn: "আপনি কি পারবেন কি না…",
        when: "hesitant অনুরোধ",
        example: "Do you think you could help me with this?",
        exampleBn: "এই কাজে সাহায্য করতে পারবেন কি?",
      },
      {
        en: "If it's not too much trouble",
        bn: "যদি কষ্ট না হয়",
        when: "extra polite",
        example: "Could you check this, if it's not too much trouble?",
        exampleBn: "কষ্ট না হলে, এটা একটু দেখবেন?",
      },
      {
        en: "I was wondering if…",
        bn: "আমি ভাবছিলাম যদি…",
        when: "job/formal request",
        example: "I was wondering if I could take Friday off.",
        exampleBn: "আমি ভাবছিলাম শুক্রবার ছুটি নিতে পারি কি না।",
      },
      {
        en: "May I…?",
        bn: "আমি কি…?",
        when: "permission চাইতে",
        example: "May I come in?",
        exampleBn: "আমি কি ভেতরে আসতে পারি?",
      },
    ],
  },
  {
    id: "smalltalk",
    title: "Small Talk Starters",
    titleBn: "কথা শুরু করা",
    emoji: "☕",
    intro: "বিদেশে গেলে, অফিসে, দাওয়াতে — চুপ করে থেকো না, এই chunks কাজে দেবে।",
    chunks: [
      {
        en: "How's it going?",
        bn: "কেমন চলছে?",
        when: "casual hello-এর পর",
        example: "Hey, how's it going?",
        exampleBn: "হেই, কেমন চলছে?",
      },
      {
        en: "What have you been up to?",
        bn: "কী করছিলে এদ্দিন?",
        when: "অনেকদিন পর দেখা",
        example: "Long time! What have you been up to?",
        exampleBn: "অনেকদিন পর! কী করছিলে?",
      },
      {
        en: "Nice weather today, isn't it?",
        bn: "আজ আবহাওয়াটা সুন্দর, না?",
        when: "classic ice-breaker",
        example: "Nice weather today, isn't it?",
        exampleBn: "আজ আবহাওয়াটা সুন্দর, না?",
      },
      {
        en: "Did you catch the game last night?",
        bn: "কাল রাতের খেলাটা দেখেছ?",
        when: "খেলার প্রসঙ্গে",
        example: "Did you catch the game last night?",
        exampleBn: "কাল রাতের খেলাটা দেখেছ?",
      },
      {
        en: "Any plans for the weekend?",
        bn: "উইকেন্ডে কোনো প্ল্যান?",
        when: "শুক্র/শনি-র আগে",
        example: "Any plans for the weekend?",
        exampleBn: "এই উইকেন্ডে কোনো প্ল্যান?",
      },
      {
        en: "Take care",
        bn: "সাবধানে থেকো",
        when: "বিদায়ের সময়",
        example: "Alright, take care!",
        exampleBn: "ঠিক আছে, সাবধানে!",
      },
    ],
  },
  {
    id: "work",
    title: "At Work / Office",
    titleBn: "কাজে-অফিসে",
    emoji: "💼",
    intro: "চাকরির email, meeting, presentation — এই chunks ছাড়া professional শোনায় না।",
    chunks: [
      {
        en: "Let's touch base later",
        bn: "পরে আলাপ করি",
        when: "meeting শেষে",
        example: "Let's touch base later this week.",
        exampleBn: "এই সপ্তাহে পরে আলাপ করি।",
      },
      {
        en: "I'll get back to you",
        bn: "আমি পরে জানাব",
        when: "উত্তর দেরি হবে",
        example: "I'll get back to you by Friday.",
        exampleBn: "শুক্রবারের মধ্যে জানাব।",
      },
      {
        en: "Let me look into it",
        bn: "একটু দেখি বিষয়টা",
        when: "সময় নিতে চাইলে",
        example: "Let me look into it and reply tomorrow.",
        exampleBn: "একটু দেখি, কাল উত্তর দিচ্ছি।",
      },
      {
        en: "Can we schedule a meeting?",
        bn: "একটা মিটিং ঠিক করা যায়?",
        when: "formal request",
        example: "Can we schedule a meeting on Monday?",
        exampleBn: "সোমবার একটা মিটিং করি?",
      },
      {
        en: "I appreciate your help",
        bn: "সাহায্যের জন্য কৃতজ্ঞ",
        when: "polite thanks",
        example: "I appreciate your help with the report.",
        exampleBn: "রিপোর্টে সাহায্যের জন্য কৃতজ্ঞ।",
      },
      {
        en: "Please find attached",
        bn: "সংযুক্ত পাবেন",
        when: "email-এ file পাঠালে",
        example: "Please find attached the invoice.",
        exampleBn: "সংযুক্ত ইনভয়েসটি পাবেন।",
      },
    ],
  },
  {
    id: "feelings",
    title: "Feelings & Reactions",
    titleBn: "অনুভূতি প্রকাশ",
    emoji: "😊",
    intro: "'Good' / 'Bad' বলে থামলে চলবে না। এই chunks তোমাকে জীবন্ত করবে।",
    chunks: [
      {
        en: "I'm over the moon",
        bn: "আমি খুবই খুশি",
        when: "চরম খুশি",
        example: "I got the job! I'm over the moon!",
        exampleBn: "চাকরিটা পেয়েছি! খুব খুশি!",
      },
      {
        en: "I'm feeling under the weather",
        bn: "একটু অসুস্থ লাগছে",
        when: "শরীর খারাপ",
        example: "I can't come today, I'm under the weather.",
        exampleBn: "আজ আসতে পারব না, একটু অসুস্থ।",
      },
      {
        en: "That drives me crazy",
        bn: "এটা আমাকে পাগল করে দেয়",
        when: "বিরক্তি",
        example: "The traffic here drives me crazy.",
        exampleBn: "এখানকার ট্রাফিক পাগল করে দেয়।",
      },
      {
        en: "I'm exhausted",
        bn: "আমি ক্লান্ত",
        when: "শুধু 'tired' না",
        example: "After 10 hours of work, I'm exhausted.",
        exampleBn: "১০ ঘন্টা কাজের পর আমি ক্লান্ত।",
      },
      {
        en: "That's a relief",
        bn: "স্বস্তি পেলাম",
        when: "চিন্তামুক্ত হলে",
        example: "The test was easy, that's a relief!",
        exampleBn: "পরীক্ষা সহজ ছিল, স্বস্তি পেলাম!",
      },
      {
        en: "I can't believe it",
        bn: "বিশ্বাস হচ্ছে না",
        when: "surprised",
        example: "You won? I can't believe it!",
        exampleBn: "তুমি জিতেছ? বিশ্বাস হচ্ছে না!",
      },
    ],
  },
  {
    id: "travel",
    title: "Travel & Airport",
    titleBn: "ভ্রমণ ও এয়ারপোর্ট",
    emoji: "✈️",
    intro: "বিদেশ গেলে immigration, hotel, taxi — এগুলা মুখস্থ থাকলে ভয় নেই।",
    chunks: [
      {
        en: "I have a connecting flight",
        bn: "আমার connecting flight আছে",
        when: "immigration-এ",
        example: "I have a connecting flight to Dubai.",
        exampleBn: "দুবাইয়ের connecting flight আছে।",
      },
      {
        en: "Could I have a window seat?",
        bn: "জানালার পাশের সিট পাব?",
        when: "check-in-এ",
        example: "Could I have a window seat, please?",
        exampleBn: "দয়া করে জানালার পাশের সিট দেবেন?",
      },
      {
        en: "How much is the fare?",
        bn: "ভাড়া কত?",
        when: "taxi/bus-এ",
        example: "How much is the fare to the hotel?",
        exampleBn: "হোটেল পর্যন্ত ভাড়া কত?",
      },
      {
        en: "Is breakfast included?",
        bn: "সকালের নাস্তা কি অন্তর্ভুক্ত?",
        when: "hotel check-in",
        example: "Is breakfast included in the room rate?",
        exampleBn: "রুম রেটে নাস্তা অন্তর্ভুক্ত?",
      },
      {
        en: "Where can I get a taxi?",
        bn: "ট্যাক্সি কোথায় পাব?",
        when: "airport-এ বের হয়ে",
        example: "Excuse me, where can I get a taxi?",
        exampleBn: "মাফ করবেন, ট্যাক্সি কোথায় পাব?",
      },
      {
        en: "I'd like to check out",
        bn: "চেকআউট করতে চাই",
        when: "hotel ছাড়ার সময়",
        example: "Good morning, I'd like to check out.",
        exampleBn: "সুপ্রভাত, চেকআউট করতে চাই।",
      },
    ],
  },
];
