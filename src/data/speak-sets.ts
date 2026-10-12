// Sentences for speaking practice — বাস্তব জীবনের বাক্য।
export type SpeakSet = {
  id: string;
  title: string;
  titleBn: string;
  emoji: string;
  sentences: { en: string; bn: string }[];
};

export const SPEAK_SETS: SpeakSet[] = [
  {
    id: "intro",
    title: "Introducing Yourself",
    titleBn: "নিজের পরিচয়",
    emoji: "👋",
    sentences: [
      { en: "Hi, my name is Rahim.", bn: "হাই, আমার নাম রহিম।" },
      { en: "I am from Bangladesh.", bn: "আমি বাংলাদেশ থেকে এসেছি।" },
      { en: "I am a student.", bn: "আমি একজন ছাত্র।" },
      { en: "I live in Dhaka.", bn: "আমি ঢাকায় থাকি।" },
      { en: "Nice to meet you.", bn: "তোমার সাথে পরিচিত হয়ে ভালো লাগল।" },
    ],
  },
  {
    id: "shop",
    title: "At the Shop",
    titleBn: "দোকানে",
    emoji: "🛒",
    sentences: [
      { en: "How much does this cost?", bn: "এটার দাম কত?" },
      { en: "Do you have this in blue?", bn: "এটা কি নীল রঙে আছে?" },
      { en: "I will take this one.", bn: "আমি এটাই নেব।" },
      { en: "Can I pay by card?", bn: "কার্ডে পে করতে পারি?" },
      { en: "Thank you very much.", bn: "অনেক ধন্যবাদ।" },
    ],
  },
  {
    id: "job",
    title: "Job Interview",
    titleBn: "চাকরির ইন্টারভিউ",
    emoji: "💼",
    sentences: [
      { en: "Good morning, thank you for calling me.", bn: "সুপ্রভাত, আমাকে ডাকার জন্য ধন্যবাদ।" },
      { en: "I have three years of experience.", bn: "আমার তিন বছরের অভিজ্ঞতা আছে।" },
      { en: "I am a hard-working person.", bn: "আমি একজন পরিশ্রমী মানুষ।" },
      { en: "I can start next Monday.", bn: "আমি আগামী সোমবার শুরু করতে পারি।" },
      { en: "I look forward to hearing from you.", bn: "আপনার উত্তরের অপেক্ষায় থাকব।" },
    ],
  },
  {
    id: "travel",
    title: "Airport & Travel",
    titleBn: "এয়ারপোর্ট ও ভ্রমণ",
    emoji: "✈️",
    sentences: [
      { en: "Where is the immigration counter?", bn: "ইমিগ্রেশন কাউন্টার কোথায়?" },
      { en: "I am here for tourism.", bn: "আমি পর্যটনের জন্য এসেছি।" },
      { en: "I will stay for two weeks.", bn: "আমি দুই সপ্তাহ থাকব।" },
      { en: "Can you call a taxi for me?", bn: "আমার জন্য একটা ট্যাক্সি ডাকতে পারবেন?" },
      { en: "How far is the hotel from here?", bn: "হোটেল এখান থেকে কত দূরে?" },
    ],
  },
  {
    id: "doctor",
    title: "At the Doctor",
    titleBn: "ডাক্তারের কাছে",
    emoji: "🩺",
    sentences: [
      { en: "I am not feeling well today.", bn: "আজ আমার শরীর ভালো লাগছে না।" },
      { en: "I have a headache.", bn: "আমার মাথা ব্যথা করছে।" },
      { en: "How many times a day should I take this?", bn: "এটা দিনে কতবার নিতে হবে?" },
      { en: "Do I need any tests?", bn: "কোনো পরীক্ষা করাতে হবে?" },
      { en: "Thank you, doctor.", bn: "ধন্যবাদ, ডাক্তার।" },
    ],
  },
];
