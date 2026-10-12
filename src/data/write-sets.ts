// লেখার চর্চা — বাংলা→ইংরেজি অনুবাদ
// প্রতি প্রশ্নে একাধিক গ্রহণযোগ্য উত্তর, key শব্দের হিন্ট, ছোট নোট।

export type WritePrompt = {
  bn: string;
  answers: string[]; // acceptable answers (first = "best")
  hints: string[]; // key English words the user should include
  note?: string; // grammar/usage tip in Bangla
};

export type WriteSet = {
  id: string;
  title: string;
  titleEn: string;
  desc: string;
  level: "শুরু" | "মাঝারি" | "একটু কঠিন";
  prompts: WritePrompt[];
};

export const WRITE_SETS: WriteSet[] = [
  {
    id: "daily",
    title: "দৈনন্দিন জীবন",
    titleEn: "Daily Life",
    desc: "প্রতিদিন যা বলি, তা লিখতে শিখি।",
    level: "শুরু",
    prompts: [
      {
        bn: "আমি সকালে চা খাই।",
        answers: [
          "I drink tea in the morning.",
          "I have tea in the morning.",
          "I take tea in the morning.",
        ],
        hints: ["I", "drink", "tea", "morning"],
        note: "চা/কফি — সবসময় 'drink' বা 'have'। 'eat tea' ভুল।",
      },
      {
        bn: "সে প্রতিদিন স্কুলে যায়।",
        answers: ["He goes to school every day.", "She goes to school every day."],
        hints: ["goes", "school", "every day"],
        note: "'every day' দুই শব্দ (adverb), 'everyday' মানে সাধারণ।",
      },
      {
        bn: "আমি এখন বাড়িতে আছি।",
        answers: ["I am at home now.", "I am home now."],
        hints: ["I am", "at home", "now"],
      },
      {
        bn: "তুমি কেমন আছো?",
        answers: ["How are you?", "How are you doing?"],
        hints: ["how", "are", "you"],
      },
      {
        bn: "আমার নাম রাহিম।",
        answers: ["My name is Rahim.", "I am Rahim.", "I'm Rahim."],
        hints: ["my name", "is"],
      },
      {
        bn: "আজ শুক্রবার।",
        answers: ["Today is Friday.", "It is Friday today.", "It's Friday today."],
        hints: ["today", "Friday"],
      },
      {
        bn: "আমি ভাত খেতে ভালোবাসি।",
        answers: ["I love eating rice.", "I love to eat rice.", "I like eating rice."],
        hints: ["I love", "eating", "rice"],
      },
      {
        bn: "সে আমার বন্ধু।",
        answers: ["He is my friend.", "She is my friend."],
        hints: ["is", "my friend"],
      },
    ],
  },
  {
    id: "work",
    title: "অফিস ও কাজ",
    titleEn: "Work & Office",
    desc: "চাকরি, মিটিং, ইমেইল — কাজের ইংরেজি।",
    level: "মাঝারি",
    prompts: [
      {
        bn: "আমি এই কাজটা কাল শেষ করব।",
        answers: [
          "I will finish this work tomorrow.",
          "I will complete this task tomorrow.",
          "I'll finish this by tomorrow.",
        ],
        hints: ["will", "finish", "tomorrow"],
      },
      {
        bn: "মিটিংটা তিনটায় শুরু হবে।",
        answers: [
          "The meeting will start at 3.",
          "The meeting starts at 3 pm.",
          "The meeting will begin at 3 o'clock.",
        ],
        hints: ["meeting", "start", "3"],
        note: "সময়ের আগে 'at' — at 3, at noon, at midnight।",
      },
      {
        bn: "দয়া করে আমাকে ইমেইলটা পাঠান।",
        answers: [
          "Please send me the email.",
          "Kindly send me the email.",
          "Please forward the email to me.",
        ],
        hints: ["please", "send", "email"],
      },
      {
        bn: "আমি একটু দেরি করে আসব।",
        answers: ["I will come a little late.", "I will be a bit late.", "I'll be late."],
        hints: ["will", "late"],
      },
      {
        bn: "আমার একটা প্রশ্ন আছে।",
        answers: ["I have a question.", "I've got a question.", "May I ask a question?"],
        hints: ["have", "question"],
      },
      {
        bn: "আপনি কি সাহায্য করতে পারবেন?",
        answers: ["Can you help me?", "Could you help me?", "Would you help me?"],
        hints: ["can", "help"],
        note: "'Could you' বেশি ভদ্র, 'Can you' সাধারণ।",
      },
    ],
  },
  {
    id: "feelings",
    title: "অনুভূতি ও মতামত",
    titleEn: "Feelings & Opinions",
    desc: "মনের কথা ইংরেজিতে।",
    level: "মাঝারি",
    prompts: [
      {
        bn: "আমি খুব খুশি।",
        answers: ["I am very happy.", "I'm very happy.", "I feel very happy."],
        hints: ["I am", "happy"],
      },
      {
        bn: "আমি এটা পছন্দ করি না।",
        answers: ["I do not like this.", "I don't like this.", "I don't like it."],
        hints: ["don't", "like"],
      },
      {
        bn: "আমার মনে হয় এটা ঠিক।",
        answers: ["I think this is right.", "I think it is correct.", "I believe this is right."],
        hints: ["I think", "right"],
      },
      {
        bn: "আমি ক্লান্ত।",
        answers: ["I am tired.", "I'm tired.", "I feel tired."],
        hints: ["tired"],
      },
      {
        bn: "সে আমাকে বুঝতে পারে না।",
        answers: [
          "He does not understand me.",
          "She does not understand me.",
          "He doesn't understand me.",
        ],
        hints: ["understand"],
      },
    ],
  },
  {
    id: "past",
    title: "গতকাল যা করেছি",
    titleEn: "Past Actions",
    desc: "Past tense — কালকের ঘটনা।",
    level: "একটু কঠিন",
    prompts: [
      {
        bn: "আমি গতকাল বাজারে গিয়েছিলাম।",
        answers: ["I went to the market yesterday.", "Yesterday I went to the market."],
        hints: ["went", "market", "yesterday"],
        note: "go → went (past)। went-এর পর 'to'।",
      },
      {
        bn: "সে গতরাতে দেরি করে ঘুমিয়েছিল।",
        answers: [
          "He slept late last night.",
          "She slept late last night.",
          "He went to sleep late last night.",
        ],
        hints: ["slept", "late", "last night"],
      },
      {
        bn: "আমি সকালে নাস্তা করি নাই।",
        answers: [
          "I did not have breakfast in the morning.",
          "I didn't have breakfast this morning.",
        ],
        hints: ["didn't", "breakfast"],
      },
      {
        bn: "তুমি কী রান্না করেছিলে?",
        answers: ["What did you cook?", "What did you make?"],
        hints: ["what", "did", "cook"],
      },
      {
        bn: "আমরা সিনেমা দেখেছিলাম।",
        answers: ["We watched a movie.", "We saw a movie.", "We watched the movie."],
        hints: ["watched", "movie"],
      },
    ],
  },
  {
    id: "future",
    title: "ভবিষ্যতের পরিকল্পনা",
    titleEn: "Future Plans",
    desc: "will / going to — সামনের কথা।",
    level: "একটু কঠিন",
    prompts: [
      {
        bn: "আমি আগামী মাসে ঢাকা যাব।",
        answers: [
          "I will go to Dhaka next month.",
          "I am going to Dhaka next month.",
          "I'll go to Dhaka next month.",
        ],
        hints: ["will", "go", "next month"],
      },
      {
        bn: "সে ডাক্তার হতে চায়।",
        answers: [
          "He wants to be a doctor.",
          "She wants to be a doctor.",
          "He wants to become a doctor.",
        ],
        hints: ["wants", "be", "doctor"],
      },
      {
        bn: "আমি ইংরেজি শিখব ইনশাআল্লাহ।",
        answers: [
          "I will learn English, Insha'Allah.",
          "I am going to learn English, Insha Allah.",
        ],
        hints: ["will", "learn", "English"],
      },
      {
        bn: "আগামীকাল বৃষ্টি হতে পারে।",
        answers: ["It may rain tomorrow.", "It might rain tomorrow.", "It could rain tomorrow."],
        hints: ["may", "rain", "tomorrow"],
        note: "'may/might/could' — সম্ভাবনার জন্য।",
      },
    ],
  },
  {
    id: "family",
    title: "পরিবার ও ঘর",
    titleEn: "Family & Home",
    desc: "মা-বাবা, ভাই-বোন, ঘরের কাজ।",
    level: "শুরু",
    prompts: [
      {
        bn: "আমার একটা বড় পরিবার আছে।",
        answers: ["I have a big family.", "I have a large family."],
        hints: ["have", "big", "family"],
      },
      {
        bn: "আমার মা রান্না করেন।",
        answers: ["My mother cooks.", "My mother is cooking.", "My mom cooks."],
        hints: ["mother", "cooks"],
      },
      {
        bn: "আমার বাবা অফিসে কাজ করেন।",
        answers: [
          "My father works at the office.",
          "My father works in an office.",
          "My dad works at the office.",
        ],
        hints: ["father", "works", "office"],
      },
      {
        bn: "আমার দুই ভাই এবং এক বোন আছে।",
        answers: ["I have two brothers and one sister.", "I have two brothers and a sister."],
        hints: ["two brothers", "one sister"],
      },
      {
        bn: "আমরা একসাথে রাতের খাবার খাই।",
        answers: ["We eat dinner together.", "We have dinner together."],
        hints: ["eat", "dinner", "together"],
      },
      {
        bn: "আমার ঘর ছোট কিন্তু সুন্দর।",
        answers: ["My room is small but beautiful.", "My room is small but nice."],
        hints: ["room", "small", "beautiful"],
      },
      {
        bn: "দাদা-দাদি গ্রামে থাকেন।",
        answers: [
          "My grandparents live in the village.",
          "Grandpa and grandma live in the village.",
        ],
        hints: ["grandparents", "live", "village"],
      },
    ],
  },
  {
    id: "travel",
    title: "ভ্রমণ ও দিক-নির্দেশনা",
    titleEn: "Travel & Directions",
    desc: "রাস্তা জিজ্ঞেস, বাস, ট্রেন, হোটেল।",
    level: "মাঝারি",
    prompts: [
      {
        bn: "রেলস্টেশন কোথায়?",
        answers: ["Where is the railway station?", "Where is the train station?"],
        hints: ["where", "station"],
      },
      {
        bn: "আমি ঢাকা যেতে চাই।",
        answers: ["I want to go to Dhaka.", "I would like to go to Dhaka."],
        hints: ["want", "go", "Dhaka"],
      },
      {
        bn: "একটা টিকিট কত টাকা?",
        answers: [
          "How much is one ticket?",
          "How much does one ticket cost?",
          "What is the price of a ticket?",
        ],
        hints: ["how much", "ticket"],
      },
      {
        bn: "বাসটা কখন ছাড়বে?",
        answers: ["When will the bus leave?", "What time does the bus leave?"],
        hints: ["when", "bus", "leave"],
      },
      {
        bn: "সোজা যান, তারপর ডানে ঘুরুন।",
        answers: ["Go straight, then turn right.", "Go straight and turn right."],
        hints: ["straight", "turn right"],
      },
      {
        bn: "আমার একটা রুম দরকার।",
        answers: ["I need a room.", "I would like a room.", "I need to book a room."],
        hints: ["need", "room"],
      },
      {
        bn: "এই খাবারটা কি হালাল?",
        answers: ["Is this food halal?", "Is this halal food?"],
        hints: ["is", "halal"],
      },
    ],
  },
  {
    id: "shopping",
    title: "কেনাকাটা",
    titleEn: "Shopping",
    desc: "বাজার, দাম, ছাড়, রিটার্ন।",
    level: "শুরু",
    prompts: [
      {
        bn: "এটার দাম কত?",
        answers: ["How much is this?", "How much does this cost?", "What is the price?"],
        hints: ["how much"],
      },
      {
        bn: "একটু কমাতে পারবেন?",
        answers: [
          "Can you lower the price?",
          "Can you give me a discount?",
          "Could you reduce the price?",
        ],
        hints: ["lower", "price"],
      },
      {
        bn: "আমি এটা নেব।",
        answers: ["I will take this.", "I'll take it.", "I want this one."],
        hints: ["will take", "this"],
      },
      {
        bn: "আপনার কাছে কি ছোট সাইজ আছে?",
        answers: ["Do you have a small size?", "Do you have this in a small size?"],
        hints: ["do you have", "small size"],
      },
      {
        bn: "আমি শুধু দেখছি।",
        answers: ["I am just looking.", "I'm just looking, thanks."],
        hints: ["just looking"],
      },
      {
        bn: "রশিদটা দিন, দয়া করে।",
        answers: ["Please give me the receipt.", "Can I have the receipt, please?"],
        hints: ["receipt", "please"],
      },
    ],
  },
  {
    id: "health",
    title: "স্বাস্থ্য ও ডাক্তার",
    titleEn: "Health & Doctor",
    desc: "অসুস্থতা, ডাক্তার, ঔষধ।",
    level: "মাঝারি",
    prompts: [
      {
        bn: "আমার মাথা ব্যথা করছে।",
        answers: ["I have a headache.", "My head hurts.", "I have a bad headache."],
        hints: ["headache"],
        note: "'have a headache' — কখনোই 'my head is painful' না।",
      },
      {
        bn: "আমার জ্বর এসেছে।",
        answers: ["I have a fever.", "I've got a fever."],
        hints: ["have", "fever"],
      },
      {
        bn: "আমি ভালো অনুভব করছি না।",
        answers: ["I do not feel well.", "I don't feel well.", "I am not feeling well."],
        hints: ["don't", "feel", "well"],
      },
      {
        bn: "দিনে তিনবার এই ঔষধ খান।",
        answers: ["Take this medicine three times a day.", "Take this medicine three times daily."],
        hints: ["take", "medicine", "three times"],
      },
      {
        bn: "আমাকে ডাক্তার দেখানো দরকার।",
        answers: ["I need to see a doctor.", "I have to see a doctor."],
        hints: ["need", "see", "doctor"],
      },
      {
        bn: "বেশি করে পানি খান।",
        answers: ["Drink more water.", "Drink plenty of water."],
        hints: ["drink", "water"],
      },
    ],
  },
  {
    id: "school",
    title: "স্কুল ও পড়াশোনা",
    titleEn: "School & Study",
    desc: "ক্লাস, পরীক্ষা, শিক্ষক।",
    level: "শুরু",
    prompts: [
      {
        bn: "আমি নবম শ্রেণিতে পড়ি।",
        answers: ["I study in class nine.", "I am in class nine.", "I am in the ninth grade."],
        hints: ["study", "class nine"],
      },
      {
        bn: "আজ আমাদের ইংরেজি ক্লাস আছে।",
        answers: ["We have an English class today.", "Today we have an English class."],
        hints: ["have", "English class", "today"],
      },
      {
        bn: "পরীক্ষা আগামী সপ্তাহে।",
        answers: ["The exam is next week.", "The test is next week."],
        hints: ["exam", "next week"],
      },
      {
        bn: "আমি অংক ভালো পারি না।",
        answers: ["I am not good at math.", "I am weak in math."],
        hints: ["not good", "math"],
      },
      {
        bn: "স্যার, একটু বুঝিয়ে দিন।",
        answers: ["Sir, please explain it.", "Teacher, please explain."],
        hints: ["please", "explain"],
      },
      {
        bn: "আমি বাড়ির কাজ শেষ করেছি।",
        answers: ["I have finished my homework.", "I finished my homework."],
        hints: ["finished", "homework"],
      },
    ],
  },
  {
    id: "weather",
    title: "আবহাওয়া ও ঋতু",
    titleEn: "Weather & Seasons",
    desc: "গরম, ঠান্ডা, বৃষ্টি, ঋতু।",
    level: "শুরু",
    prompts: [
      {
        bn: "আজ অনেক গরম।",
        answers: ["It is very hot today.", "It's very hot today.", "Today is very hot."],
        hints: ["hot", "today"],
        note: "আবহাওয়ার কথা — 'It is ...' দিয়ে শুরু।",
      },
      {
        bn: "বাইরে বৃষ্টি হচ্ছে।",
        answers: ["It is raining outside.", "It's raining outside."],
        hints: ["raining", "outside"],
      },
      {
        bn: "শীতকালে ঠান্ডা লাগে।",
        answers: ["It is cold in winter.", "It gets cold in winter."],
        hints: ["cold", "winter"],
      },
      {
        bn: "সূর্য উজ্জ্বল।",
        answers: ["The sun is bright.", "The sun is shining brightly."],
        hints: ["sun", "bright"],
      },
      {
        bn: "আকাশ মেঘলা।",
        answers: ["The sky is cloudy.", "It is cloudy."],
        hints: ["sky", "cloudy"],
      },
    ],
  },
  {
    id: "food",
    title: "খাবার ও রেস্তোরাঁ",
    titleEn: "Food & Restaurant",
    desc: "অর্ডার, স্বাদ, বিল।",
    level: "মাঝারি",
    prompts: [
      {
        bn: "আমি কী অর্ডার করব?",
        answers: ["What should I order?", "What can I order?"],
        hints: ["what", "order"],
      },
      {
        bn: "খাবারটা খুব স্বাদের।",
        answers: ["The food is very tasty.", "The food is delicious."],
        hints: ["food", "tasty"],
      },
      {
        bn: "আমি ঝাল কম চাই।",
        answers: ["I want less spicy.", "Please make it less spicy.", "Not too spicy, please."],
        hints: ["less spicy"],
      },
      {
        bn: "বিলটা দিন, দয়া করে।",
        answers: ["Please bring the bill.", "Can I have the bill, please?", "The check, please."],
        hints: ["bill", "please"],
      },
      {
        bn: "আমি নিরামিষভোজী।",
        answers: ["I am a vegetarian.", "I'm vegetarian."],
        hints: ["vegetarian"],
      },
      {
        bn: "এক গ্লাস পানি দিন।",
        answers: ["Please give me a glass of water.", "A glass of water, please."],
        hints: ["glass", "water"],
      },
    ],
  },
  {
    id: "phone",
    title: "ফোনে কথা",
    titleEn: "Phone Calls",
    desc: "ফোন ধরা, কথা বলা, বার্তা রাখা।",
    level: "শুরু",
    prompts: [
      {
        bn: "হ্যালো, আমি রফিক বলছি।",
        answers: ["Hello, this is Rafiq.", "Hello, Rafiq speaking."],
        hints: ["this is", "speaking"],
        note: "ফোনে নিজের নাম বলার সঠিক নিয়ম — 'I am Rafiq' না, 'This is Rafiq' বা 'Rafiq speaking'।",
      },
      {
        bn: "আমি কার সাথে কথা বলছি?",
        answers: ["Who am I speaking to?", "Who is this, please?"],
        hints: ["who", "speaking"],
      },
      {
        bn: "একটু ধরুন, দয়া করে।",
        answers: ["Hold on, please.", "One moment, please.", "Please wait a minute."],
        hints: ["hold on", "please"],
      },
      {
        bn: "সে এখন এখানে নেই।",
        answers: ["He is not here now.", "She is not here right now."],
        hints: ["not here"],
      },
      {
        bn: "আমি পরে কল করব।",
        answers: ["I will call back later.", "I'll call you later."],
        hints: ["call back", "later"],
      },
      {
        bn: "আপনার সংখ্যা বলুন।",
        answers: ["Please give me your number.", "Can I have your number?"],
        hints: ["your number"],
      },
    ],
  },
  {
    id: "advice",
    title: "উপদেশ ও পরামর্শ",
    titleEn: "Advice & Suggestions",
    desc: "কাউকে কিছু বলার নরম উপায়।",
    level: "মাঝারি",
    prompts: [
      {
        bn: "তোমার একটু বিশ্রাম নেয়া উচিত।",
        answers: ["You should take some rest.", "You need to take a break."],
        hints: ["should", "rest"],
        note: "উপদেশ দিতে 'should' সবচেয়ে ভদ্র। 'must' একটু জোর।",
      },
      {
        bn: "কেন তুমি একজন ডাক্তার দেখাচ্ছ না?",
        answers: ["Why don't you see a doctor?", "Why not see a doctor?"],
        hints: ["why don't you"],
        note: "'Why don't you...?' একটা নরম পরামর্শ।",
      },
      {
        bn: "আমি তোমার জায়গায় হলে, আমি চেষ্টা করতাম।",
        answers: ["If I were you, I would try.", "In your place, I would try."],
        hints: ["if I were you", "would"],
        note: "'If I were you' — নিজের অভিজ্ঞতা থেকে পরামর্শ।",
      },
      {
        bn: "আমার মনে হয় তুমি ঠিক করছ।",
        answers: ["I think you are doing the right thing.", "I believe you are right."],
        hints: ["I think", "right"],
      },
      {
        bn: "চিন্তা কোরো না, সব ঠিক হবে।",
        answers: ["Don't worry, everything will be fine.", "Don't worry, it will be okay."],
        hints: ["don't worry", "fine"],
      },
      {
        bn: "তাড়াহুড়া কোরো না।",
        answers: ["Don't be in a hurry.", "Take your time."],
        hints: ["hurry"],
      },
    ],
  },
  {
    id: "money",
    title: "টাকা ও ব্যাংক",
    titleEn: "Money & Bank",
    desc: "লেনদেন, দাম, পরিশোধ।",
    level: "মাঝারি",
    prompts: [
      {
        bn: "এটার দাম কত?",
        answers: ["How much does it cost?", "How much is this?", "What is the price?"],
        hints: ["how much", "cost"],
      },
      {
        bn: "আমি ক্যাশে পরিশোধ করব।",
        answers: ["I will pay in cash.", "I'll pay cash."],
        hints: ["pay", "cash"],
      },
      {
        bn: "আপনি কি কার্ড নেন?",
        answers: ["Do you take card?", "Do you accept card?"],
        hints: ["take", "card"],
      },
      {
        bn: "আমার অ্যাকাউন্টে টাকা নেই।",
        answers: ["There is no money in my account.", "My account has no money."],
        hints: ["account", "no money"],
      },
      {
        bn: "আমি প্রতি মাসে কিছু টাকা জমাই।",
        answers: ["I save some money every month.", "I put aside money each month."],
        hints: ["save", "every month"],
      },
      {
        bn: "এটা অনেক দামী।",
        answers: ["This is very expensive.", "This costs too much."],
        hints: ["expensive"],
      },
    ],
  },
  {
    id: "emergency",
    title: "জরুরি অবস্থা",
    titleEn: "Emergency",
    desc: "সাহায্য চাওয়া, বিপদের কথা বলা।",
    level: "মাঝারি",
    prompts: [
      {
        bn: "সাহায্য! একটা দুর্ঘটনা হয়েছে!",
        answers: ["Help! There has been an accident!", "Help! An accident happened!"],
        hints: ["help", "accident"],
      },
      {
        bn: "দয়া করে অ্যাম্বুলেন্স ডাকুন।",
        answers: ["Please call an ambulance.", "Call an ambulance, please."],
        hints: ["call", "ambulance"],
      },
      {
        bn: "সে অসুস্থ বোধ করছে।",
        answers: ["He is not feeling well.", "She feels sick."],
        hints: ["not feeling well", "sick"],
      },
      {
        bn: "আগুন লেগেছে!",
        answers: ["There is a fire!", "Fire!"],
        hints: ["fire"],
      },
      {
        bn: "আমি রাস্তা হারিয়েছি।",
        answers: ["I am lost.", "I have lost my way."],
        hints: ["lost", "way"],
        note: "'I am lost' — নিজেই পথ চিনতে পারছি না।",
      },
      {
        bn: "নিকটতম হাসপাতাল কোথায়?",
        answers: ["Where is the nearest hospital?", "Which is the closest hospital?"],
        hints: ["nearest", "hospital"],
      },
    ],
  },
  {
    id: "opinion",
    title: "মতামত প্রকাশ",
    titleEn: "Sharing Opinions",
    desc: "আমার কী মনে হয়, কেন হয়।",
    level: "একটু কঠিন",
    prompts: [
      {
        bn: "আমার মনে হয় এটা ভালো ধারণা।",
        answers: ["I think this is a good idea.", "I believe this is a good idea."],
        hints: ["I think", "good idea"],
      },
      {
        bn: "আমি একমত না।",
        answers: ["I don't agree.", "I disagree."],
        hints: ["don't agree", "disagree"],
      },
      {
        bn: "আমি এভাবে দেখি এটা।",
        answers: ["This is how I see it.", "That's how I look at it."],
        hints: ["how", "see"],
      },
      {
        bn: "একদিকে সহজ, অন্যদিকে কঠিন।",
        answers: [
          "On one hand it is easy, on the other hand it is hard.",
          "It is easy in some ways, but hard in others.",
        ],
        hints: ["on one hand", "on the other hand"],
        note: "'on one hand... on the other hand' — দুই দিক তুলে ধরার সেরা উপায়।",
      },
      {
        bn: "আমার মনে হয় আমাদের অপেক্ষা করা উচিত।",
        answers: ["I feel we should wait.", "In my opinion, we should wait."],
        hints: ["feel", "should wait"],
      },
      {
        bn: "সৎভাবে বলি, আমি নিশ্চিত না।",
        answers: ["To be honest, I am not sure.", "Honestly, I am not sure."],
        hints: ["to be honest", "not sure"],
      },
    ],
  },
  {
    id: "past-events",
    title: "গল্প বলা",
    titleEn: "Telling a Story",
    desc: "গতকাল কী হলো — শুরু, মাঝ, শেষ।",
    level: "একটু কঠিন",
    prompts: [
      {
        bn: "গতকাল একটা মজার ঘটনা ঘটল।",
        answers: ["Something funny happened yesterday.", "A funny thing happened yesterday."],
        hints: ["funny", "happened", "yesterday"],
      },
      {
        bn: "প্রথমে আমি বাজারে গেলাম।",
        answers: ["First, I went to the market.", "At first, I went to the market."],
        hints: ["first", "went"],
      },
      {
        bn: "তারপর হঠাৎ বৃষ্টি শুরু হলো।",
        answers: ["Then suddenly it started to rain.", "After that, it began to rain."],
        hints: ["then", "suddenly", "rain"],
      },
      {
        bn: "আমি একটা ছাতা নিতে ভুলে গিয়েছিলাম।",
        answers: ["I had forgotten to take an umbrella.", "I forgot to bring an umbrella."],
        hints: ["forgot", "umbrella"],
        note: "'had forgotten' — অতীতের আরো আগে ঘটেছে (past perfect)।",
      },
      {
        bn: "শেষে, একজন অচেনা লোক আমাকে সাহায্য করল।",
        answers: ["In the end, a stranger helped me.", "Finally, a stranger helped me."],
        hints: ["in the end", "stranger", "helped"],
      },
      {
        bn: "সেই দিনটা আমি কখনো ভুলব না।",
        answers: ["I will never forget that day.", "That day I will never forget."],
        hints: ["never forget"],
      },
    ],
  },
  {
    id: "job-interview",
    title: "চাকরির সাক্ষাৎকার",
    titleEn: "Job Interview",
    desc: "নিজেকে পরিচয় দাও, প্রশ্নের উত্তর দাও।",
    level: "একটু কঠিন",
    prompts: [
      {
        bn: "নিজের সম্পর্কে বলুন।",
        answers: ["Tell me about yourself.", "Please introduce yourself."],
        hints: ["tell", "yourself"],
      },
      {
        bn: "আমি ঢাকা বিশ্ববিদ্যালয় থেকে পাস করেছি।",
        answers: [
          "I graduated from Dhaka University.",
          "I finished my studies at Dhaka University.",
        ],
        hints: ["graduated", "university"],
        note: "'graduated from' — 'গ্র্যাজুয়েট হয়েছি', preposition 'from' জরুরি।",
      },
      {
        bn: "আমার তিন বছরের কাজের অভিজ্ঞতা আছে।",
        answers: ["I have three years of work experience.", "I have three years of experience."],
        hints: ["three years", "experience"],
      },
      {
        bn: "আমার শক্তি হলো — আমি দ্রুত শিখি।",
        answers: ["My strength is that I learn fast.", "One of my strengths is quick learning."],
        hints: ["strength", "learn fast"],
      },
      {
        bn: "কেন আপনি এই চাকরিটা চান?",
        answers: ["Why do you want this job?", "Why are you interested in this position?"],
        hints: ["why", "want"],
      },
      {
        bn: "আপনার প্রত্যাশিত বেতন কত?",
        answers: ["What is your expected salary?", "How much do you expect to earn?"],
        hints: ["expected salary"],
      },
    ],
  },
  {
    id: "small-talk",
    title: "ছোট আলাপ",
    titleEn: "Small Talk",
    desc: "অচেনা মানুষের সাথে সহজ কথাবার্তা।",
    level: "শুরু",
    prompts: [
      {
        bn: "আজ কী সুন্দর দিন!",
        answers: ["What a beautiful day!", "What a lovely day!"],
        hints: ["what a", "beautiful"],
        note: "'What a...!' — বিস্ময় বা প্রশংসা প্রকাশ।",
      },
      {
        bn: "আপনি কোথা থেকে এসেছেন?",
        answers: ["Where are you from?", "Where do you come from?"],
        hints: ["where from"],
      },
      {
        bn: "আপনি কী কাজ করেন?",
        answers: ["What do you do?", "What is your job?"],
        hints: ["what do you do"],
        note: "'What do you do?' মানে 'তোমার পেশা কী?' — এটাই সঠিক ইংরেজি প্রশ্ন।",
      },
      {
        bn: "আপনার সাথে দেখা হয়ে ভালো লাগল।",
        answers: ["Nice to meet you.", "Pleased to meet you."],
        hints: ["nice to meet"],
      },
      {
        bn: "আপনার পরিবারের সবাই কেমন?",
        answers: ["How is your family?", "How is everyone at home?"],
        hints: ["how", "family"],
      },
      {
        bn: "আবার কথা হবে।",
        answers: ["Talk to you later.", "See you soon.", "Catch up later."],
        hints: ["talk", "later"],
      },
    ],
  },
];
