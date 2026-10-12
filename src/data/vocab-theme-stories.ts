// প্রতিটা theme-এর ২০টা শব্দ ব্যবহার করে একটা ছোট গল্প।
// শর্ত: শুধু Oxford 3000 + Formula 1-5 (SVO, be-verb, Present/Past Simple, Modal)।
// একই cast দিয়ে সব গল্প বাঁধা — Rafi, Nadia, Amma, Abba, দাদা (সিলেট), Karim।
// প্রয়োজনে জায়গার নাম: Dhaka, Sylhet, Cox's Bazar, Padma, Sundarbans, New Market।
// শব্দ একবার নয়, ২-৩ বার আসতে পারে — মস্তিষ্কে গেঁথে যাওয়ার জন্য।
//
// Memory hack ভিত্তি: গল্পে চরিত্র + জায়গা + আবেগ যোগ করলে retention ৪০-৭০%
// বেড়ে যায় (Method of Loci + Narrative Encoding, Paul Nation 2021)।

export type ThemeStory = {
  themeId: string;
  title: string;
  titleEn: string;
  en: string;
  bn: string;
  tip: string;
};

export const THEME_STORIES: Record<string, ThemeStory> = {
  family: {
    themeId: "family",
    title: "সিলেট থেকে আসা চিঠি",
    titleEn: "A Letter from Sylhet",
    en: 'Rafi is my brother. Nadia is my little sister. Our father works in Dhaka, and our mother teaches at a school. My parents love us very much. Last Friday my grandfather sent a letter from Sylhet. He wrote, "Come to my home, my child. Your grandmother made your favorite pitha." My uncle and aunt live there too, with my cousin Faisal. On the train my baby sister sang a song. Many relatives were waiting at the station. My grandmother hugged the baby. My grandfather held Rafi\'s hand. Some cousins are married; some are still single. But in that one house, we were one family again.',
    bn: 'রাফি আমার ভাই। নাদিয়া আমার ছোট বোন। আমাদের বাবা ঢাকায় কাজ করেন, আর মা এক স্কুলে পড়ান। আমাদের মা-বাবা আমাদের অনেক ভালোবাসেন। গত শুক্রবার সিলেট থেকে দাদা একটা চিঠি পাঠালেন। তিনি লিখলেন, "আমার বাসায় এসো, সোনা। তোমার দাদি তোমার প্রিয় পিঠা বানিয়েছেন।" সেখানে চাচা-চাচিও থাকেন, আর আছে কাজিন ফয়সাল। ট্রেনে আমার বাচ্চা বোন গান গাইল। স্টেশনে অনেক আত্মীয় অপেক্ষা করছিলেন। দাদি বাচ্চাটাকে জড়িয়ে ধরলেন। দাদা রাফির হাত ধরলেন। কেউ কেউ কাজিন বিবাহিত, কেউ কেউ এখনো অবিবাহিত। কিন্তু ঐ এক বাড়িতে আমরা আবার এক পরিবার হয়ে গেলাম।',
    tip: "চোখ বন্ধ করে সিলেটে দাদার উঠোনে দাঁড়াও — কে কোথায় বসে আছে ছবি আঁক। প্রতিটা মুখে একটা করে শব্দ বসাও।",
  },

  body: {
    themeId: "body",
    title: "আয়নার সামনে রাফি",
    titleEn: "Rafi in Front of the Mirror",
    en: "Rafi stands in front of the big mirror. His head is round, and his hair is black and thick. His face is small, but his eyes are big and bright. He has two ears, one nose, and one mouth. He opens his mouth and counts his teeth with his tongue. His neck is thin, but his shoulders are strong from cricket. Rafi looks at his right hand and then his left arm. He has ten fingers. He can write with his hand. His legs are long, and his feet are wide. Yesterday he hit his knee on a chair, and his back still hurts. His stomach is empty, so his heart wants breakfast now.",
    bn: "রাফি বড় আয়নার সামনে দাঁড়ায়। তার মাথা গোল, চুল কালো ও ঘন। মুখটা ছোট, কিন্তু চোখ দুটি বড় ও উজ্জ্বল। তার দুটি কান, একটি নাক, একটি মুখ আছে। সে মুখ হাঁ করে জিহ্বা দিয়ে দাঁত গোনে। ঘাড় সরু, কিন্তু ক্রিকেট খেলে কাঁধ শক্ত। রাফি ডান হাত আর বাম হাতটা দেখে। তার দশটা আঙুল আছে। সে হাত দিয়ে লিখতে পারে। পা লম্বা, পায়ের পাতা চওড়া। গতকাল সে চেয়ারে হাঁটু ঠুকেছে, পিঠও এখনো ব্যথা। পেট খালি, তাই হৃদয় এখন নাশতা চাইছে।",
    tip: "আয়নার সামনে দাঁড়াও, প্রতিটা অঙ্গ ছুঁয়ে জোরে ইংরেজি নাম বল। স্পর্শ + কণ্ঠ + ছবি — তিনটা একসাথে মাথায় গেঁথে যাবে।",
  },

  food: {
    themeId: "food",
    title: "আম্মার বিরিয়ানির থালা",
    titleEn: "Amma's Biryani Plate",
    en: 'It is Friday afternoon, and Rafi is very hungry. Nadia is thirsty too. In the kitchen their mother is cooking food. She puts rice on the plate. Next to the rice she keeps a big fish and one hot chicken piece. There is bread for their father, meat for grandfather, and one boiled egg for Nadia. Amma pours cold milk for the baby and hot tea with sugar for grandmother. "Not too much salt, not too much oil," she says. She adds sweet vegetables and one yellow fruit. The food is spicy, but it is very delicious. After lunch nobody is hungry, nobody is thirsty — only sleepy.',
    bn: 'শুক্রবার দুপুর, রাফি ভীষণ ক্ষুধার্ত। নাদিয়াও তৃষ্ণার্ত। রান্নাঘরে আম্মা খাবার রান্না করছেন। প্লেটে ভাত রাখেন। ভাতের পাশে বড় একটা মাছ ও গরম মুরগির টুকরা। বাবার জন্য রুটি, দাদার জন্য মাংস, নাদিয়ার জন্য একটা সেদ্ধ ডিম। আম্মা বাচ্চার জন্য ঠান্ডা দুধ ঢালেন, দাদির জন্য চিনি দিয়ে গরম চা। "বেশি লবণ না, বেশি তেল না," তিনি বলেন। মিষ্টি সবজি আর একটা হলুদ ফল দেন। খাবারটা ঝাল, কিন্তু খুব সুস্বাদু। খাবার পর কেউ ক্ষুধার্ত না, কেউ তৃষ্ণার্ত না — শুধু ঘুম-ঘুম ভাব।',
    tip: "একটা কল্পিত থালা আঁকো — প্রতিটা খাবারকে থালার একটা কোণে বসাও। ঘ্রাণ কল্পনা কর, শব্দ মাথায় আটকে যাবে।",
  },

  home: {
    themeId: "home",
    title: "মিরপুরের ছোট্ট বাসা",
    titleEn: "The Little Home in Mirpur",
    en: "Our house is small but our home is warm. It is on the third floor of a building in Mirpur, Dhaka. It has three rooms. The door is brown, the windows face the road, and the walls are light green. The floor is always clean because Amma does not like a dirty room. The roof leaks a little in the rainy month. Amma spends her mornings in the kitchen. My bedroom has one bed, one table, and one old chair. The bathroom is next to my room. In summer we turn on the fan and the light together. I always keep my key in a tidy box on the table. When the room is tidy, my mind is calm. When the room is dirty, my mind is tired.",
    bn: "আমাদের বাড়িটা ছোট কিন্তু বাসাটা উষ্ণ। ঢাকার মিরপুরে এক বিল্ডিংয়ের তিন তলায়। তিনটা কক্ষ। দরজা বাদামী, জানালা রাস্তার দিকে, দেয়াল হালকা সবুজ। মেঝে সবসময় পরিষ্কার — আম্মা নোংরা ঘর পছন্দ করেন না। বর্ষার মাসে ছাদ একটু চুয়ে পড়ে। আম্মা সকাল রান্নাঘরে কাটান। আমার শোবার ঘরে একটা বিছানা, একটা টেবিল, একটা পুরোনো চেয়ার। গোসলখানা আমার ঘরের পাশে। গরমে আমরা ফ্যান আর বাতি একসাথে চালাই। চাবিটা সবসময় টেবিলের গোছানো বাক্সে রাখি। ঘর গোছানো থাকলে মন শান্ত, নোংরা থাকলে ক্লান্ত।",
    tip: "চোখ বন্ধ করে নিজের বাসায় ঢোকো — প্রতিটা ঘরে একটা করে ইংরেজি শব্দ ঝুলিয়ে দাও। যেন খুঁটিতে নামফলক।",
  },

  time: {
    themeId: "time",
    title: "রাফির একটা দিন",
    titleEn: "One Day of Rafi's Life",
    en: 'Time flies very fast for Rafi. He wakes up early — always at six in the morning. His day has one plan: study, help Amma, meet Karim. In the afternoon he plays cricket for one hour. In the evening he reads a book for thirty minutes, not one minute less. At night he sleeps by eleven. Today is Friday, tomorrow is Saturday, and yesterday was Thursday. This week has seven days, this month has thirty. "Do it now, not later," his father always says. If Rafi is late, one whole year can pass in a minute. If Rafi is early, one second feels like a gift. That is why he never says "later" — he says "now."',
    bn: 'রাফির কাছে সময় খুব দ্রুত চলে যায়। সে ভোরে ওঠে — সবসময় সকাল ছয়টায়। তার দিনের একটাই পরিকল্পনা: পড়াশোনা, আম্মাকে সাহায্য, কারিমের সাথে দেখা। দুপুরে এক ঘণ্টা ক্রিকেট। সন্ধ্যায় বই পড়ে ত্রিশ মিনিট — এক মিনিট কমও না। রাতে এগারোটার মধ্যে ঘুমায়। আজ শুক্রবার, আগামীকাল শনিবার, গতকাল ছিল বৃহস্পতিবার। এই সপ্তাহে সাত দিন, এই মাসে ত্রিশ। "এখনই কর, পরে না," বাবা সবসময় বলেন। রাফি দেরি করলে পুরো এক বছর এক মিনিটে চলে যায়। রাফি তাড়াতাড়ি হলে এক সেকেন্ডকেও উপহার মনে হয়। তাই সে কখনো "পরে" বলে না — বলে "এখন"।',
    tip: "নিজের দিনটার ছবি আঁকো — সকাল, দুপুর, সন্ধ্যা, রাত। প্রতিটা সময়-শব্দ ঐ দৃশ্যে বসিয়ে দাও।",
  },

  numbers: {
    themeId: "numbers",
    title: "রাফির টাকা গোনা",
    titleEn: "Rafi Counts His Money",
    en: 'Rafi has one small box. Inside the box there are two coins and three notes. He counts to ten with his fingers, then to one hundred with his pencil. He dreams of one thousand taka. His first savings was in class two; his last was yesterday. He has many small notes but not much cash. A few big notes, a little change. Some coins are gold, some are silver. Half of the box is full, half is empty. "That is enough for a book," he says. He wants more, not less. So every day he saves a little — not much, but enough for one dream.',
    bn: 'রাফির একটা ছোট বাক্স আছে। বাক্সের ভেতরে দুইটা কয়েন, তিনটা নোট। সে আঙুলে দশ পর্যন্ত গোনে, পেন্সিলে একশ পর্যন্ত। তার স্বপ্ন — এক হাজার টাকা। প্রথম জমানো ছিল ক্লাস টু-এ, শেষটা গতকাল। ছোট নোট অনেক, কিন্তু নগদ বেশি না। কয়েকটা বড় নোট, একটু ভাংতি। কিছু কয়েন সোনালি, কিছু রুপালি। বাক্সের অর্ধেক পূর্ণ, অর্ধেক খালি। "একটা বইয়ের জন্য এটাই যথেষ্ট," সে বলে। সে আরও চায়, কম না। তাই প্রতিদিন একটু জমায় — বেশি না, কিন্তু এক স্বপ্নের জন্য যথেষ্ট।',
    tip: "নিজের আঙুলে দশ গোন, তারপর ঘরে দশটা জিনিস গোন। সংখ্যা + বাস্তব বস্তু = গেঁথে যাবে।",
  },

  feelings: {
    themeId: "feelings",
    title: "পরীক্ষার আগের রাত",
    titleEn: "The Night Before the Exam",
    en: 'Nadia is happy in the morning, but sad by night. Tomorrow is her big exam. She is not angry with anyone, but she is afraid of failing. Her body is tired, her mind is bored of the same book. Rafi is excited for her, but Amma is worried. "Stay calm," Amma says. Nadia is surprised — her mother is never nervous. "I trust you," Amma says. "I love you, and I am proud of you." Nadia hates one thing: her own fear. But she has hope. She misses her old confidence, but she still cares about her dream. That night, a shy smile came back. She was not confused anymore.',
    bn: 'সকালে নাদিয়া খুশি, রাতে দুঃখী। আগামীকাল বড় পরীক্ষা। সে কারো উপর রাগান্বিত না, কিন্তু ফেল করার ভয়ে ভীত। শরীর ক্লান্ত, মন এক বইয়ে বিরক্ত। রাফি তার জন্য উচ্ছ্বসিত, কিন্তু আম্মা উদ্বিগ্ন। "শান্ত থাকো," আম্মা বলেন। নাদিয়া অবাক — মা তো কখনো নার্ভাস হন না। "আমি তোমাকে বিশ্বাস করি," আম্মা বলেন। "তোমাকে ভালোবাসি, তোমার জন্য গর্বিত।" নাদিয়া একটাই জিনিস ঘৃণা করে — নিজের ভয়। কিন্তু তার আশা আছে। পুরোনো আত্মবিশ্বাসকে মিস করে, তবু স্বপ্নের যত্ন করে। সেই রাতে এক লজ্জিত হাসি ফিরে এল। সে আর বিভ্রান্ত না।',
    tip: "প্রতিটা অনুভূতির শব্দকে একটা ইমোজি মুখে বসাও। অনুভূতি + মুখের ছবি একসাথে মনে থাকে।",
  },

  actions: {
    themeId: "actions",
    title: "রাফির শুক্রবার",
    titleEn: "Rafi's Friday",
    en: "Rafi wakes up at six. He does not sleep late even on Friday. He eats one egg and drinks warm milk. Then he goes to Karim's house. They come back together. They sit under a tree in Ramna Park and stand up when the sun is hot. They walk to the field, then run for one hour. Later Rafi reads a book at home. He writes his day in a notebook. He listens to old songs and speaks with his little sister. In the evening they watch a football match. On the way home Rafi buys two mangoes, and a boy sells cold water. Rafi helps a blind uncle to cross the road. That night, he works on his homework and learns five new English words.",
    bn: "রাফি ছয়টায় ওঠে। শুক্রবারেও দেরি করে ঘুমায় না। একটা ডিম খায়, গরম দুধ পান করে। তারপর কারিমের বাসায় যায়। দুজন একসাথে আসে। রমনা পার্কে গাছের নিচে বসে, রোদ চড়া হলে উঠে দাঁড়ায়। মাঠে হাঁটে, তারপর এক ঘণ্টা দৌড়ায়। পরে বাসায় বই পড়ে। খাতায় নিজের দিনটা লেখে। পুরোনো গান শোনে, ছোট বোনের সাথে কথা বলে। সন্ধ্যায় তারা ফুটবল ম্যাচ দেখে। ফেরার পথে দুইটা আম কেনে, এক ছেলে ঠান্ডা পানি বিক্রি করে। রাফি এক অন্ধ চাচাকে রাস্তা পার হতে সাহায্য করে। রাতে হোমওয়ার্ক করে, পাঁচটা নতুন ইংরেজি শব্দ শেখে।",
    tip: "একটা টাইমলাইন আঁকো — সকাল থেকে রাত। প্রতিটা verb-কে একটা ঘণ্টার সাথে জোড়া লাগাও।",
  },

  colors: {
    themeId: "colors",
    title: "পহেলা বৈশাখের সকাল",
    titleEn: "Pohela Boishakh Morning",
    en: "It is Pohela Boishakh in Dhaka. The sky is bright blue, the sun is orange, and the grass in Ramna Park is dark green. Nadia wears a red and white sari. Her sister's dress is pink, and Rafi's shirt is a light yellow. Karim brings purple flowers and a brown basket. An old man wears a plain gold panjabi; a small child holds a silver balloon. The clouds are grey for a minute, then white again. \"What a colorful morning!\" Nadia says. She loves this shade of red. Even the black crows look bright today. In one park, every color has come to say happy new year.",
    bn: 'ঢাকায় পহেলা বৈশাখ। আকাশ উজ্জ্বল নীল, সূর্য কমলা, রমনা পার্কের ঘাস গাঢ় সবুজ। নাদিয়া লাল-সাদা শাড়ি পরেছে। বোনের জামা গোলাপি, রাফির শার্ট হালকা হলুদ। কারিম বেগুনি ফুল আর একটা বাদামী ঝুড়ি এনেছে। এক বৃদ্ধ সাদামাটা সোনালি পাঞ্জাবি পরেছেন; ছোট এক শিশু রুপালি বেলুন ধরেছে। মেঘগুলো এক মিনিট ধূসর, পরের মিনিট আবার সাদা। "কী রঙিন সকাল!" নাদিয়া বলে। এই লাল আভা তার প্রিয়। এমনকি কালো কাকগুলোও আজ উজ্জ্বল দেখাচ্ছে। এক পার্কেই সব রঙ এসে নববর্ষ বলছে।',
    tip: "ঘরের প্রতিটা জিনিসের রঙ ইংরেজিতে জোরে বল। চোখ + জিভ একসাথে কাজ করলে রঙ-শব্দ পাকা হয়।",
  },

  school: {
    themeId: "school",
    title: "স্যার রহমানের ক্লাস",
    titleEn: "Sir Rahman's Class",
    en: 'Nadia goes to a small school in Dhaka. Her teacher, Sir Rahman, is kind but strict. Every student has a book, a pen, a pencil, and a paper on the desk. Nadia\'s bag is red and heavy — inside are two notebooks. The class starts at nine. Today\'s lesson is short: five English words. Sir Rahman writes them on the board. "Homework is easy," he says. "Answer three questions in your notebook." Nadia asks one question, Karim asks two. Rafi studies at home every night. He wants to learn, and Sir Rahman wants to teach. "Do you understand?" the teacher asks. "Yes, Sir, I understand," Nadia says with a smile. She was proud — for the first time, the exam felt small.',
    bn: 'নাদিয়া ঢাকার এক ছোট স্কুলে যায়। তার শিক্ষক স্যার রহমান — দয়ালু কিন্তু কড়া। প্রত্যেক ছাত্রীর ডেস্কে বই, কলম, পেন্সিল, কাগজ। নাদিয়ার ব্যাগ লাল আর ভারী — ভেতরে দুইটা খাতা। ক্লাস নয়টায় শুরু। আজকের পাঠ ছোট: পাঁচটা ইংরেজি শব্দ। স্যার রহমান বোর্ডে লেখেন। "হোমওয়ার্ক সহজ," তিনি বলেন। "খাতায় তিনটা প্রশ্নের উত্তর দাও।" নাদিয়া একটা প্রশ্ন করে, কারিম দুইটা। রাফি রোজ রাতে বাসায় পড়াশোনা করে। সে শিখতে চায়, স্যার রহমান শেখাতে চান। "বোঝ?" স্যার জিজ্ঞেস করেন। "জি স্যার, বুঝেছি," নাদিয়া হেসে বলে। প্রথমবারের মতো পরীক্ষাকে ছোট মনে হলো।',
    tip: "মনে মনে ক্লাসরুমে বসে যাও — বোর্ডে প্রতিটা নতুন শব্দ লেখা কল্পনা কর।",
  },

  market: {
    themeId: "market",
    title: "কারওয়ান বাজারে সকাল",
    titleEn: "Morning at Karwan Bazar",
    en: 'Karwan Bazar is the busiest market in Dhaka. Rafi and his mother walk into one small shop. The shopkeeper smiles — he knows Amma. "What is the price of this fish?" Amma asks. "Four hundred taka," he says. "Too expensive," Amma says. "Not cheap, but I will give you a discount. Three fifty." A young customer next to Rafi tries to buy two big mangoes. Amma pays cash. "Keep the change," she says softly. The shopkeeper gives a small bill and a paper receipt. He also gives one free bag. "What size?" he asks. "Big," Amma says. "Not small." Outside the market, a boy sells fresh flowers. Rafi is happy — his mother\'s smile is worth every taka.',
    bn: 'কারওয়ান বাজার ঢাকার সবচেয়ে ব্যস্ত বাজার। রাফি ও তার মা এক ছোট দোকানে ঢোকেন। দোকানদার হাসেন — আম্মাকে চেনেন। "এই মাছের দাম কত?" আম্মা জিজ্ঞেস করেন। "চারশ টাকা," তিনি বলেন। "অনেক দামি," আম্মা বলেন। "সস্তা না, তবে ছাড় দেব। তিনশ পঞ্চাশ।" পাশেই এক তরুণ ক্রেতা দুইটা বড় আম কিনতে চাচ্ছে। আম্মা নগদ দেন। "ভাংতি রেখে দিন," আস্তে বলেন। দোকানদার ছোট বিল আর কাগজের রশিদ দেন। এক ফ্রি থলেও দেন। "কোন সাইজ?" জিজ্ঞেস করেন। "বড়," আম্মা বলেন। "ছোট না।" বাজারের বাইরে এক ছেলে তাজা ফুল বিক্রি করে। রাফি খুশি — মায়ের হাসি প্রতিটা টাকার সমান।',
    tip: "কল্পনায় বাজারে ঢোকো — দোকানদারের সাথে ইংরেজিতে দর কষাকষি কর।",
  },

  travel: {
    themeId: "travel",
    title: "কক্সবাজারের ট্রিপ",
    titleEn: "The Cox's Bazar Trip",
    en: 'The family plans one big trip to Cox\'s Bazar. First they travel from Dhaka to the airport. Amma buys four tickets. On the plane Rafi gets a window seat. In one hour the plane arrives at Chittagong. Then they take a big bus on the long road. Nadia is excited, but the traffic is heavy. "Do we go by rickshaw or by car now?" Rafi asks. "By car," Abba says. The driver is polite. They open the map on the phone. A small boat waits at the beach. The train home leaves next Friday. "Where is my luggage?" Nadia cries at the station. "Here, sister," says the driver, smiling. Their hotel is small but by the sea. That trip they arrived tired but left with one big memory.',
    bn: 'পরিবার কক্সবাজারে একটা বড় ভ্রমণের পরিকল্পনা করে। প্রথমে ঢাকা থেকে বিমানবন্দর। আম্মা চারটা টিকিট কেনেন। প্লেনে রাফি জানালার পাশের সিট পায়। এক ঘণ্টায় প্লেন চট্টগ্রাম পৌঁছায়। তারপর লম্বা রাস্তায় বড় বাস। নাদিয়া উচ্ছ্বসিত, কিন্তু যানজট বেশি। "এখন রিকশায় যাব নাকি গাড়িতে?" রাফি জিজ্ঞেস করে। "গাড়িতে," আব্বা বলেন। চালক ভদ্র। ফোনে মানচিত্র খোলে। সৈকতে একটা ছোট নৌকা অপেক্ষা করছে। বাসায় ফেরার ট্রেন আগামী শুক্রবার ছাড়ে। "আমার লাগেজ কোথায়?" স্টেশনে নাদিয়া কেঁদে ওঠে। "এই যে, বোন," হেসে বলেন চালক। তাদের হোটেল ছোট, কিন্তু সাগরের পাশে। সেই ট্রিপে তারা ক্লান্ত পৌঁছেছিল, কিন্তু এক বড় স্মৃতি নিয়ে ফিরেছিল।',
    tip: "মানচিত্রে ঢাকা থেকে কক্সবাজার আঙুল দিয়ে চিহ্নিত কর — প্রতিটা vehicle-শব্দ ঐ পথে বসাও।",
  },

  weather: {
    themeId: "weather",
    title: "ছয় ঋতুর গল্প",
    titleEn: "The Story of Six Seasons",
    en: "The weather in Bangladesh changes six times. In summer the sun is hot and the sky is dry. In monsoon the clouds are dark, the wind is loud, and rain falls day and night. One storm broke Rafi's window last year. In autumn the moon is full and the stars are clear. Winter is cold; Nadia loves the warm fog on the Padma River. Spring is soft — the leaves are green, the flowers are pink, and a small river runs near the village. Every season has its own smell. Even the sea has a new color each month. Rafi says one thing: no weather is bad if your heart is warm.",
    bn: "বাংলাদেশে আবহাওয়া ছয় বার বদলায়। গ্রীষ্মে সূর্য গরম, আকাশ শুকনো। বর্ষায় মেঘ কালো, বাতাস প্রবল, দিনরাত বৃষ্টি। গত বছর এক ঝড় রাফির জানালা ভেঙে দিয়েছিল। শরতে চাঁদ পূর্ণ, তারারা পরিষ্কার। শীত ঠান্ডা; পদ্মা নদীর উপরে উষ্ণ কুয়াশা নাদিয়ার প্রিয়। বসন্ত কোমল — পাতা সবুজ, ফুল গোলাপি, গ্রামের পাশে ছোট নদী বয়ে চলে। প্রতিটা ঋতুর নিজস্ব গন্ধ। এমনকি সাগরের রঙ প্রতি মাসে নতুন। রাফি একটাই কথা বলে — মন উষ্ণ হলে কোনো আবহাওয়াই খারাপ না।",
    tip: "ছয় ঋতু ছয় ছবি — প্রতিটা ছবিতে দুই-তিনটা weather শব্দ বসাও।",
  },

  clothes: {
    themeId: "clothes",
    title: "ঈদের সকাল",
    titleEn: "Eid Morning",
    en: 'It is Eid morning in Dhaka. Rafi wears a new white shirt and blue pants. His shoes are shiny and black. Abba wears a long panjabi and a small cap. Amma has a beautiful red sari and a soft shawl. Nadia\'s dress is pink with a small pocket. Even the baby has a tiny hat. "My belt is too tight," Rafi says. "Your dress is too long," Amma tells Nadia. Karim comes wearing a plain green shirt and old jeans. His socks are white but dirty. They all smile. Clothes are not everything, but on Eid one clean, warm dress makes the heart full.',
    bn: 'ঢাকায় ঈদের সকাল। রাফি নতুন সাদা শার্ট আর নীল প্যান্ট পরেছে। তার জুতা চকচকে ও কালো। আব্বা লম্বা পাঞ্জাবি ও ছোট টুপি পরেছেন। আম্মার সুন্দর লাল শাড়ি ও নরম শাল। নাদিয়ার জামা গোলাপি, ছোট একটা পকেটসহ। বাচ্চাটারও ছোট টুপি আছে। "আমার বেল্ট বেশি টাইট," রাফি বলে। "তোমার জামা বেশি লম্বা," আম্মা নাদিয়াকে বলেন। কারিম আসে সাদামাটা সবুজ শার্ট আর পুরোনো জিনস পরে। তার মোজা সাদা কিন্তু নোংরা। সবাই হাসে। কাপড় সব না, কিন্তু ঈদে এক পরিষ্কার উষ্ণ পোশাক মন ভরিয়ে দেয়।',
    tip: "আলমারি খুলে দাঁড়াও — প্রতিটা পোশাক তুলে জোরে ইংরেজি নাম বল।",
  },

  work: {
    themeId: "work",
    title: "বাবা কী কাজ করেন?",
    titleEn: "What Does Father Do?",
    en: 'Rafi\'s father is a doctor at a hospital in Dhaka. Nadia\'s teacher is Ms. Salma. Karim\'s mother is a nurse at the same hospital. His uncle is an engineer, and his aunt is a lawyer. Their neighbor is a farmer in a small village near Rajshahi. Down the road there is a driver, a shopkeeper, a cook, and one honest police officer. In the office at nine, Abba starts his job. He works with a boss and a good team. "Every worker is important," Abba says. "A cleaner, a builder, a writer — all of them help our country." One day Rafi wants a good job too, and one day Nadia wants to be a teacher like Ms. Salma.',
    bn: 'রাফির বাবা ঢাকার এক হাসপাতালের ডাক্তার। নাদিয়ার শিক্ষক মিস সালমা। কারিমের মা একই হাসপাতালের নার্স। তার চাচা প্রকৌশলী, চাচি আইনজীবী। প্রতিবেশী রাজশাহীর কাছাকাছি এক গ্রামের কৃষক। রাস্তার শেষে এক চালক, এক দোকানদার, এক রাঁধুনি, আর এক সৎ পুলিশ অফিসার। নয়টায় অফিসে আব্বা কাজ শুরু করেন। বস আর ভালো টিমের সাথে কাজ করেন। "প্রতিটা কর্মী গুরুত্বপূর্ণ," আব্বা বলেন। "পরিচ্ছন্নতাকর্মী, নির্মাতা, লেখক — সবাই দেশকে সাহায্য করেন।" একদিন রাফিও ভালো একটা চাকরি চায়, নাদিয়া মিস সালমার মতো শিক্ষক হতে চায়।',
    tip: "নিজের পরিচিত মানুষকে ইংরেজিতে পেশা দিয়ে চিহ্নিত কর — বাস্তব মানুষ + শব্দ = পাকা।",
  },

  health: {
    themeId: "health",
    title: "হাসপাতালে দাদা",
    titleEn: "Grandfather at the Hospital",
    en: 'Yesterday grandfather was sick. His head hurt, his back was in pain, and he had a bad cough. He was tired all night. Amma took him to the hospital in Dhaka. The doctor listened to his heart and checked his blood pressure. The nurse gave him one small pill and some cold water. "You need rest," the doctor said kindly. "Eat healthy food, drink water, and sleep early." Grandfather smiled and said, "I am old, but I am strong." At home he had hot soup for dinner. Rafi held his hand. In two days grandfather was better. Health is a soft gift — once it is broken, no money can buy it back.',
    bn: 'গতকাল দাদা অসুস্থ। মাথা ব্যথা, পিঠে ব্যথা, খারাপ কাশি। সারারাত ক্লান্ত ছিলেন। আম্মা তাঁকে ঢাকার হাসপাতালে নিয়ে গেলেন। ডাক্তার তাঁর হৃদয় শুনলেন, প্রেসার মাপলেন। নার্স একটা ছোট ওষুধ ও কিছু ঠান্ডা পানি দিলেন। "তোমাকে বিশ্রাম নিতে হবে," ডাক্তার নরম গলায় বললেন। "স্বাস্থ্যকর খাবার খাও, পানি পান কর, তাড়াতাড়ি ঘুমাও।" দাদা হেসে বললেন, "বৃদ্ধ, তবু শক্ত।" বাসায় রাতে গরম স্যুপ খেলেন। রাফি তাঁর হাত ধরল। দুইদিনে দাদা ভালো। স্বাস্থ্য একটা কোমল উপহার — একবার ভেঙে গেলে টাকা দিয়ে ফেরত পাওয়া যায় না।',
    tip: "নিজের শরীরের ছোট ছোট সংকেত মনে রাখো — মাথা ব্যথা, পেট ব্যথা — প্রতিটাকে ইংরেজিতে বল।",
  },

  opposites: {
    themeId: "opposites",
    title: "রাফি আর নাদিয়া",
    titleEn: "Rafi and Nadia",
    en: "Rafi is tall, but Nadia is short. Rafi is fast, Nadia is slow. Their bag is old, but their book is new. In summer the day is hot, in winter the night is cold. The road is long; the walk to school is short. Amma is happy today, Abba is sad. \"Speak loud, not soft,\" the teacher says. Rafi's answer is right, Karim's is wrong. Their house is small but their heart is big. Some days are easy, some are hard. Some jokes are funny, some are boring. In one small family, every opposite lives together — and that is why life is beautiful, not ugly.",
    bn: 'রাফি লম্বা, নাদিয়া বেঁটে। রাফি দ্রুত, নাদিয়া ধীর। তাদের ব্যাগ পুরোনো, বই নতুন। গ্রীষ্মে দিন গরম, শীতে রাত ঠান্ডা। রাস্তা লম্বা; স্কুলে হাঁটা ছোট। আম্মা আজ খুশি, আব্বা দুঃখী। "জোরে বলো, আস্তে না," শিক্ষক বলেন। রাফির উত্তর ঠিক, কারিমের ভুল। বাড়িটা ছোট, কিন্তু মন বড়। কোনো দিন সহজ, কোনো দিন কঠিন। কোনো কৌতুক মজার, কোনোটা একঘেয়ে। এক ছোট পরিবারে সব বিপরীত একসাথে বাস করে — এইজন্যই জীবন সুন্দর, কুৎসিত না।',
    tip: "প্রতিটা বিপরীত জোড়াকে একই বাক্যে ব্যবহার কর — জোড়ায় জোড়ায় মনে থাকে।",
  },

  connectors: {
    themeId: "connectors",
    title: "কারিমের ছোট গল্প",
    titleEn: "Karim's Little Story",
    en: 'Karim was tired, but he was also happy. He wanted to sleep, and he wanted to eat. He could not choose, so he did both. First he ate rice and fish, then he drank tea. He does not like cold water, so he drinks warm milk. "I will study when I am not tired," he said. If he studies now, he will pass. If he sleeps now, he may fail. Because his exam is tomorrow, he opened the book. Although he was sleepy, he wrote five pages. So one small connector like "but," "and," or "because" can change one whole day.',
    bn: 'কারিম ক্লান্ত ছিল, কিন্তু খুশিও ছিল। ঘুমাতে চাইছিল, আবার খেতেও চাইছিল। বেছে নিতে পারেনি, তাই দুটোই করল। প্রথমে ভাত ও মাছ খেল, তারপর চা পান করল। সে ঠান্ডা পানি পছন্দ করে না, তাই গরম দুধ খায়। "আমি ক্লান্ত না হলে পড়ব," বলল। যদি এখন পড়ে, পাশ করবে। যদি এখন ঘুমায়, ফেল করতে পারে। যেহেতু কাল পরীক্ষা, বই খুলল। যদিও ঘুম পাচ্ছিল, তবু পাঁচ পাতা লিখল। তাই ছোট একটা connector — "but," "and," "because" — পুরো একটা দিন বদলে দিতে পারে।',
    tip: "একটা বাক্য দুই টুকরায় ভাঙো, তারপর and / but / because দিয়ে জোড়া দাও।",
  },

  phone: {
    themeId: "phone",
    title: "নতুন ফোন",
    titleEn: "The New Phone",
    en: 'Rafi opens a new phone. Its screen is big, and its battery is full. He downloads one app and reads a message from Karim. "Please call me now," the message said. Rafi taps the number. But the network is weak in Old Dhaka. The wifi at his uncle\'s house is fast. He sends a photo and one voice message. Karim texts back with a small emoji. "Send me the link," Karim writes. Rafi opens the browser and searches on Google. In one minute he finds the video. He shares it online. The battery is low, so he plugs in the charger. Technology is a gift — but Rafi never forgets to look up from his screen.',
    bn: 'রাফি একটা নতুন ফোন খোলে। এর স্ক্রিন বড়, ব্যাটারি ভরা। একটা অ্যাপ ডাউনলোড করে, কারিমের একটা মেসেজ পড়ে। "এখনই আমাকে কল কর," মেসেজে লেখা। রাফি নম্বরে ট্যাপ করে। কিন্তু পুরান ঢাকায় নেটওয়ার্ক দুর্বল। চাচার বাসায় ওয়াইফাই দ্রুত। একটা ছবি ও একটা ভয়েস মেসেজ পাঠায়। কারিম ছোট একটা ইমোজি দিয়ে টেক্সট করে। "আমাকে লিংক পাঠাও," কারিম লেখে। রাফি ব্রাউজার খুলে গুগলে সার্চ করে। এক মিনিটে ভিডিওটা খুঁজে পায়। অনলাইনে শেয়ার করে। ব্যাটারি কম, তাই চার্জারে লাগায়। প্রযুক্তি একটা উপহার — কিন্তু রাফি স্ক্রিন থেকে চোখ তুলতে ভোলে না।',
    tip: "নিজের ফোনের প্রতিটা বাটন ইংরেজিতে জোরে বলে চেপে দেখো।",
  },

  faith: {
    themeId: "faith",
    title: "শুক্রবারের নামায",
    titleEn: "Friday Prayer",
    en: 'It is a quiet Friday in Dhaka. Rafi and his father go to the mosque. Karim\'s family goes to a mandir near their house. Nadia\'s friend goes to a church, and another to a pagoda. Everyone believes in something. "Please," Rafi says to the shopkeeper, "one bottle of water." "Thank you," he says softly. He always says "sorry" when he is wrong. He respects his teacher, helps his neighbor, and is kind to a stranger on the bus. He tells the truth, not a lie. He never steals, and he shares his food. "Faith is not just a book," his grandfather says. "Faith is how your hand touches another hand."',
    bn: 'ঢাকায় শান্ত এক শুক্রবার। রাফি ও তার বাবা মসজিদে যান। কারিমের পরিবার বাসার পাশে এক মন্দিরে যায়। নাদিয়ার এক বন্ধু গির্জায় যায়, আরেকজন প্যাগোডায়। সবাই কিছু না কিছুতে বিশ্বাস করে। "প্লিজ," রাফি দোকানদারকে বলে, "এক বোতল পানি।" "ধন্যবাদ," আস্তে বলে। ভুল হলে সবসময় "সরি" বলে। শিক্ষককে সম্মান করে, প্রতিবেশীকে সাহায্য করে, বাসের অচেনা মানুষের সাথে দয়ালু। সত্য বলে, মিথ্যা না। কখনো চুরি করে না, খাবার ভাগ করে খায়। "বিশ্বাস শুধু একটা বই না," দাদা বলেন। "বিশ্বাস হলো তোমার হাত অন্যের হাত কীভাবে ছোঁয়।"',
    tip: "প্রতিটা শিষ্টাচার-শব্দ (please, thank you, sorry) দিনে অন্তত পাঁচবার জোরে বল।",
  },

  nature: {
    themeId: "nature",
    title: "সুন্দরবনে একদিন",
    titleEn: "One Day in the Sundarbans",
    en: 'Last winter our family went to the Sundarbans. The forest was thick and green. A wide river ran through it, and one small hill stood far away. The trees were tall, and the grass was soft. Under one big tree Rafi saw a strange flower and a small stone. A yellow leaf fell on Nadia\'s hair. The sky was blue, and a soft wind touched the water. In the distance the sea was silver. "Nature is God\'s book," Abba said. "Every stone, every leaf, every drop of water has one line." That night we slept in a small boat, and the sound of the river became our song.',
    bn: 'গত শীতে আমাদের পরিবার সুন্দরবনে গিয়েছিল। বনটা ঘন ও সবুজ। একটা চওড়া নদী তার ভেতর দিয়ে বইছিল, দূরে একটা ছোট পাহাড়। গাছগুলো লম্বা, ঘাস নরম। এক বড় গাছের নিচে রাফি অদ্ভুত একটা ফুল আর একটা ছোট পাথর দেখল। একটা হলুদ পাতা নাদিয়ার চুলে পড়ল। আকাশ নীল, নরম বাতাস পানিকে ছুঁয়ে দিল। দূরে সাগর রুপালি। "প্রকৃতি আল্লাহর বই," আব্বা বললেন। "প্রতিটা পাথর, প্রতিটা পাতা, প্রতিটা পানির ফোঁটার একটা করে লাইন আছে।" সেই রাতে ছোট একটা নৌকায় ঘুমালাম, নদীর শব্দই আমাদের গান হয়ে গেল।',
    tip: "চোখ বন্ধ করে সুন্দরবনে দাঁড়াও — গাছ, নদী, পাখির শব্দ কল্পনা কর।",
  },

  animals: {
    themeId: "animals",
    title: "গ্রামের সকাল",
    titleEn: "Morning in the Village",
    en: 'In grandfather\'s village near Sylhet, the morning is full of animals. A dog barks at the gate. A cat sleeps on the roof. Two cows walk to the field, and one goat runs behind them. A tall horse stands under a tree. Chickens are everywhere. A small bird sings in the mango tree, and one fish jumps in the pond. "Look, a fox!" Rafi shouts one evening. But it was only a big cat. On the way to the river we saw a slow snake in the grass, an elephant in an old picture, and a monkey on a wall. Every animal has one lesson: eat when you are hungry, sleep when you are tired, love your home.',
    bn: 'সিলেটের কাছে দাদার গ্রামে সকাল মানেই প্রাণীর মেলা। ফটকে একটা কুকুর ঘেউ ঘেউ করে। ছাদে একটা বিড়াল ঘুমায়। দুইটা গরু মাঠের দিকে হাঁটে, একটা ছাগল পেছনে দৌড়ায়। এক লম্বা ঘোড়া গাছের নিচে দাঁড়িয়ে। মুরগি সব জায়গায়। আম গাছে ছোট এক পাখি গান গায়, পুকুরে একটা মাছ লাফায়। "দেখো, শিয়াল!" এক সন্ধ্যায় রাফি চিৎকার করে। কিন্তু ওটা তো বড় এক বিড়াল। নদীর পথে দেখি ঘাসে ধীর একটা সাপ, পুরোনো ছবিতে হাতি, দেয়ালে একটা বানর। প্রতিটা প্রাণীর একটাই শিক্ষা: ক্ষুধা লাগলে খাও, ক্লান্ত হলে ঘুমাও, নিজের ঘরকে ভালোবাসো।',
    tip: "প্রতিটা প্রাণীর ডাকের শব্দ (bark, meow, moo) সাথে ইংরেজি নাম মনে রাখো।",
  },

  city: {
    themeId: "city",
    title: "ঢাকা শহর",
    titleEn: "Dhaka City",
    en: 'Dhaka is one big city. Its streets are always busy. On one corner a small park is quiet, on the other a big market is loud. There is one main bank near the office, and a hospital opposite the school. The library is silent, but the mall is full of people. In the evening a large crowd walks along the road. A new bridge crosses the river. Rafi loves the old buildings of Old Dhaka. Nadia loves the modern shops of Gulshan. "Every city has one heart," Abba says. "Dhaka\'s heart is her people." One noisy street, one hundred small stories — that is Dhaka.',
    bn: 'ঢাকা এক বড় শহর। রাস্তাগুলো সবসময় ব্যস্ত। এক কোণে ছোট পার্ক শান্ত, অন্য কোণে বড় বাজার হৈচৈ। অফিসের পাশে একটা প্রধান ব্যাংক, স্কুলের উল্টো দিকে হাসপাতাল। লাইব্রেরি নীরব, কিন্তু মল মানুষে ভরা। সন্ধ্যায় বিশাল ভিড় রাস্তায় হাঁটে। একটা নতুন সেতু নদী পার হয়। পুরান ঢাকার পুরোনো বিল্ডিং রাফির প্রিয়। গুলশানের আধুনিক দোকান নাদিয়ার প্রিয়। "প্রতিটা শহরের একটা হৃদয় থাকে," আব্বা বলেন। "ঢাকার হৃদয় হচ্ছে তার মানুষ।" এক কোলাহলপূর্ণ রাস্তা, একশ ছোট গল্প — এটাই ঢাকা।',
    tip: "নিজের এলাকায় হাঁটতে হাঁটতে প্রতিটা জায়গা ইংরেজিতে চিহ্নিত কর।",
  },

  transport: {
    themeId: "transport",
    title: "সদরঘাটে যাত্রা",
    titleEn: "The Sadarghat Journey",
    en: 'It was Friday morning. Rafi and his father went to Sadarghat, the old port of Dhaka. They took a bus, then a rickshaw. The road was full of traffic. A big truck passed slowly. One yellow taxi honked at a black car. A young boy on a bicycle laughed and rang his bell. At the port they took the big ferry across the Padma River. The old boat rocked with the wind. On the other side a train was waiting. "One day I want to fly on a plane," Rafi said. "One day, Insha\'Allah," Abba smiled. "Until then, every ride is one small trip in life."',
    bn: 'শুক্রবার সকাল। রাফি ও তার বাবা সদরঘাটে গেলেন — পুরান ঢাকার পুরোনো বন্দর। তারা বাস নিলেন, তারপর রিকশা। রাস্তায় প্রচুর যানজট। এক বড় ট্রাক ধীরে চলে গেল। এক হলুদ ট্যাক্সি এক কালো গাড়িকে হর্ন দিল। সাইকেলে এক তরুণ হেসে ঘণ্টা বাজাল। বন্দরে বড় লঞ্চে চড়ে পদ্মা পার হলেন। পুরোনো নৌকা বাতাসে দুলছিল। অন্য পাড়ে একটা ট্রেন অপেক্ষা করছিল। "একদিন আমি প্লেনে উড়তে চাই," রাফি বলল। "ইনশাআল্লাহ, একদিন," আব্বা হাসলেন। "তার আগ পর্যন্ত, প্রতিটা যাত্রাই জীবনের এক ছোট ভ্রমণ।"',
    tip: "কল্পনায় সদরঘাটে দাঁড়াও — প্রতিটা vehicle একের পর এক নাম বলে চিহ্নিত কর।",
  },

  sports: {
    themeId: "sports",
    title: "মিরপুরে ক্রিকেট ম্যাচ",
    titleEn: "The Cricket Match in Mirpur",
    en: "Every Bangladeshi loves cricket. Rafi's favorite player is Shakib. Yesterday there was a big match at the Mirpur stadium. Karim's team wore red, the other team wore blue. The captain won the toss. The first ball was a wicket! The crowd shouted. Rafi held one bat and one small ball on the sofa at home. He watched every over. In the second half, one striker hit two sixes. The score was tight. In football Nadia loves Messi, in tennis her uncle loves Federer. But today the whole family was one team, sitting on the sofa, cheering for one country.",
    bn: "প্রতিটা বাঙালি ক্রিকেট ভালোবাসে। রাফির প্রিয় খেলোয়াড় সাকিব। গতকাল মিরপুর স্টেডিয়ামে বড় একটা ম্যাচ ছিল। কারিমের দল লাল পরেছিল, অন্য দল নীল। ক্যাপ্টেন টস জিতল। প্রথম বলেই উইকেট! গ্যালারি চিৎকার করল। বাসায় সোফায় বসে রাফি একটা ব্যাট ও একটা ছোট বল ধরে রেখেছিল। প্রতিটা ওভার দেখেছিল। দ্বিতীয় ইনিংসে এক ব্যাটার দুইটা ছয় মারল। স্কোর টান-টান। ফুটবলে নাদিয়ার প্রিয় মেসি, টেনিসে চাচার প্রিয় ফেদেরার। কিন্তু আজ পুরো পরিবার এক দল, সোফায় বসে এক দেশের জন্য গলা ফাটাচ্ছিল।",
    tip: "একটা প্রিয় ম্যাচ কল্পনা কর — কমেন্ট্রি ইংরেজিতে নিজের মুখে বল।",
  },

  technology: {
    themeId: "technology",
    title: "কারিমের কোডিং ক্লাস",
    titleEn: "Karim's Coding Class",
    en: 'Karim wants to learn computers. He opens his laptop and starts one small program. "AI can change our life," his teacher said. On the screen he opens a website and clicks one button. He types on the keyboard, moves the mouse, and saves one small file. Rafi watches and asks, "Is this coding?" "Yes, it is," Karim smiles. "One line of code, one small change in the world." The internet is fast today. He watches one YouTube video and downloads one useful app. His father says, "Technology is a good servant but a bad master." So Karim closes the laptop, opens a book, and reads for one hour.',
    bn: 'কারিম কম্পিউটার শিখতে চায়। ল্যাপটপ খুলে ছোট একটা প্রোগ্রাম চালু করে। "AI আমাদের জীবন বদলে দিতে পারে," শিক্ষক বলেছিলেন। স্ক্রিনে একটা ওয়েবসাইট খোলে, একটা বাটনে ক্লিক করে। কিবোর্ডে টাইপ করে, মাউস নাড়ে, একটা ছোট ফাইল সেভ করে। রাফি দেখে জিজ্ঞেস করে, "এটা কি কোডিং?" "হ্যাঁ, তাই," কারিম হাসে। "এক লাইন কোড, দুনিয়ায় এক ছোট পরিবর্তন।" আজ ইন্টারনেট দ্রুত। একটা ইউটিউব ভিডিও দেখে, একটা কাজের অ্যাপ ডাউনলোড করে। বাবা বলেন, "প্রযুক্তি ভালো চাকর, খারাপ মনিব।" তাই কারিম ল্যাপটপ বন্ধ করে, বই খোলে, এক ঘণ্টা পড়ে।',
    tip: "নিজের ফোন/ল্যাপটপের প্রতিটা অংশ (screen, button, mouse) ইংরেজিতে জোরে বল।",
  },

  kitchen: {
    themeId: "kitchen",
    title: "আম্মার রান্নাঘর",
    titleEn: "Amma's Kitchen",
    en: 'Amma\'s kitchen is small but full of life. On the stove there is a hot pot. Inside the pot she cooks rice with a wooden spoon. A big knife lies safely on the table. She takes one clean plate and one deep bowl from the shelf. She fills one glass with cold water and one cup with hot tea. She uses a small fork for the salad. "Hand me the salt," she tells Nadia. Nadia opens the fridge and gives her one egg. The gas cylinder is nearly empty; Amma will call the shop tomorrow. In one small kitchen, one warm hand, one soft song — and dinner is ready.',
    bn: 'আম্মার রান্নাঘর ছোট, কিন্তু প্রাণে ভরা। চুলায় একটা গরম হাঁড়ি। হাঁড়ির ভেতর কাঠের চামচ দিয়ে ভাত রান্না করেন। বড় একটা ছুরি নিরাপদে টেবিলে রাখা। তাক থেকে একটা পরিষ্কার প্লেট ও একটা গভীর বাটি নেন। একটা গ্লাসে ঠান্ডা পানি, একটা কাপে গরম চা ভরেন। সালাদের জন্য ছোট একটা কাঁটাচামচ ব্যবহার করেন। "লবণটা দাও," নাদিয়াকে বলেন। নাদিয়া ফ্রিজ খুলে একটা ডিম দেয়। গ্যাস সিলিন্ডার প্রায় খালি; আম্মা কাল দোকানে ফোন করবেন। এক ছোট রান্নাঘরে, এক উষ্ণ হাত, এক নরম গান — আর রাতের খাবার প্রস্তুত।',
    tip: "নিজের রান্নাঘরে দাঁড়িয়ে প্রতিটা বাসনের নাম ইংরেজিতে জোরে বল।",
  },

  office: {
    themeId: "office",
    title: "আব্বার অফিস",
    titleEn: "Father's Office",
    en: 'Abba works in one big office in Motijheel. His boss is a kind woman, and his team has ten people. Every worker has one desk, one chair, and one computer. On his table there is one phone, one file, and a small photo of the family. In the morning there is a short meeting. "Please send me the email," his boss says. Abba prints one report and signs the paper. He replies to one client on the phone. At lunch he opens the tiffin — Amma\'s rice and fish. The office is on the tenth floor; the window shows all of Dhaka. Every evening he leaves at six, tired but proud of one honest day of work.',
    bn: 'আব্বা মতিঝিলের এক বড় অফিসে কাজ করেন। তাঁর বস দয়ালু এক মহিলা, টিমে দশজন। প্রত্যেক কর্মীর একটা করে ডেস্ক, চেয়ার, কম্পিউটার। তাঁর টেবিলে একটা ফোন, একটা ফাইল, পরিবারের একটা ছোট ছবি। সকালে ছোট একটা মিটিং। "প্লিজ ইমেইলটা পাঠান," বস বলেন। আব্বা একটা রিপোর্ট প্রিন্ট করেন, কাগজ সই করেন। ফোনে এক ক্লায়েন্টকে জবাব দেন। দুপুরে টিফিন খোলেন — আম্মার ভাত-মাছ। অফিস দশ তলায়; জানালা দিয়ে পুরো ঢাকা দেখা যায়। প্রতি সন্ধ্যায় ছয়টায় বেরিয়ে যান, ক্লান্ত কিন্তু এক সৎ দিনের কাজে গর্বিত।',
    tip: "নিজের ভবিষ্যৎ অফিস কল্পনা কর — প্রতিটা জিনিসকে ইংরেজিতে নাম দাও।",
  },

  shopping: {
    themeId: "shopping",
    title: "নিউ মার্কেটে বিকেল",
    titleEn: "An Afternoon at New Market",
    en: 'Nadia loves New Market. She goes with Amma on Friday afternoons. The market is huge and full of people. In one shop she sees a red dress; in another, one blue shoe. "What size?" the shopkeeper asks. "Medium," Amma says. "Small is too tight." They try one shirt for Rafi and one long shawl. The price is high, so Amma asks for a discount. "Any offer today?" The shopkeeper smiles. "Twenty percent off, madam." Amma pays cash and takes the receipt. She puts everything in one big bag. Outside a boy sells fresh ice cream. "Sometimes shopping is not about clothes," Amma says. "It is about time with your child."',
    bn: 'নাদিয়া নিউ মার্কেট ভালোবাসে। শুক্রবার বিকেলে আম্মার সাথে যায়। মার্কেট বিশাল, মানুষে ভরা। এক দোকানে দেখে লাল একটা জামা, আরেক দোকানে নীল এক জুতা। "কোন সাইজ?" দোকানদার জিজ্ঞেস করেন। "মিডিয়াম," আম্মা বলেন। "ছোট বেশি টাইট।" রাফির জন্য একটা শার্ট ও লম্বা এক শাল ট্রাই করেন। দাম বেশি, তাই আম্মা ছাড় চান। "আজকে কোনো অফার আছে?" দোকানদার হাসেন। "বিশ পার্সেন্ট ছাড়, ম্যাডাম।" আম্মা নগদ দেন, রশিদ নেন। সব একটা বড় ব্যাগে ভরেন। বাইরে এক ছেলে তাজা আইসক্রিম বিক্রি করে। "কেনাকাটা সবসময় জামার জন্য না," আম্মা বলেন। "এটা সন্তানের সাথে সময় কাটানো।"',
    tip: "নিজের প্রিয় মার্কেটে গিয়ে ছোট এক কেনাকাটা ইংরেজিতে বাক্য দিয়ে ভেবে ফেল।",
  },

  morning: {
    themeId: "morning",
    title: "রাফির সকাল",
    titleEn: "Rafi's Morning",
    en: 'The alarm rings at six. Rafi wakes up but does not open his eyes. Two minutes later he gets out of bed. He goes to the bathroom and washes his face with cold water. He brushes his teeth for two minutes. He takes a quick shower and wears clean clothes. He combs his hair in front of the mirror. Amma is in the kitchen. She gives him one hot paratha and one boiled egg. Rafi drinks warm milk. He puts his book in his bag and his key in his pocket. "Assalamu Alaikum, Amma," he says. He runs to the bus stop. One good morning can make one great day.',
    bn: 'ছয়টায় অ্যালার্ম বাজে। রাফি ঘুম থেকে ওঠে, কিন্তু চোখ খোলে না। দুই মিনিট পর বিছানা থেকে ওঠে। গোসলখানায় গিয়ে ঠান্ডা পানিতে মুখ ধোয়। দুই মিনিট দাঁত মাজে। দ্রুত গোসল করে, পরিষ্কার কাপড় পরে। আয়নার সামনে চুল আঁচড়ায়। আম্মা রান্নাঘরে। তাকে একটা গরম পরোটা ও একটা সেদ্ধ ডিম দেন। রাফি গরম দুধ পান করে। বই ব্যাগে ঢুকায়, চাবি পকেটে রাখে। "আসসালামু আলাইকুম, আম্মা," বলে। বাসস্ট্যান্ডে দৌড়ায়। একটা ভালো সকাল একটা দারুণ দিন বানিয়ে দেয়।',
    tip: 'কাল সকালে নিজের প্রতিটা কাজ ইংরেজিতে মনে মনে বল — "I wake up, I wash my face…"',
  },

  months: {
    themeId: "months",
    title: "রাফির এক বছর",
    titleEn: "One Year of Rafi",
    en: 'Rafi was born in April, in the middle of spring, twelve years ago. In January and February the winter is cold; his hands turn stiff. In March the weather is warm, and in May the summer sun is hot. June and July bring heavy rain. August is the wettest month. September is the start of a new school year. In October and November the autumn is cool, and the sky is soft. December brings winter again, and his birthday is only four months away. Every month has its own smell, its own age. Rafi says, "Long ago, I did not know the months in English. Now I sing them like a song."',
    bn: 'রাফি এপ্রিলে জন্মেছে — বসন্তের মাঝামাঝি, বারো বছর আগে। জানুয়ারি-ফেব্রুয়ারিতে শীত ঠান্ডা; তার হাত জমে যায়। মার্চে আবহাওয়া উষ্ণ, মে-তে গ্রীষ্মের রোদ গরম। জুন-জুলাইয়ে ভারী বৃষ্টি। আগস্ট সবচেয়ে ভেজা মাস। সেপ্টেম্বর নতুন স্কুল-বছরের শুরু। অক্টোবর-নভেম্বরে শরৎ শীতল, আকাশ কোমল। ডিসেম্বরে আবার শীত, আর জন্মদিন মাত্র চার মাস দূরে। প্রতিটা মাসের নিজস্ব গন্ধ, নিজস্ব বয়স। রাফি বলে, "অনেক দিন আগে ইংরেজিতে মাসের নাম জানতাম না। এখন গানের মতো গাই।"',
    tip: "১২ মাসকে ১২ ঘরে সাজাও — প্রতিটা মাসে নিজের/পরিবারের একটা ঘটনা বসাও (জন্মদিন, ঈদ, বৃষ্টি)।",
  },

  jobs2: {
    themeId: "jobs2",
    title: "টেলিভিশনের সন্ধ্যা",
    titleEn: "TV Evening",
    en: 'One Friday night, the whole family watched a talk show. First came a famous actor, then a young actress. Next was a great dancer from Kolkata. An artist showed his painting, and one author read from her new book. The host said, "Please welcome our next guest — a chef from Old Dhaka!" The audience clapped. A tall athlete came in, then a kind architect, and a smart assistant took notes. "Every character on this stage has one career," Nadia said. "When I grow up and become an adult, I want a good career too." Even Rafi\'s girlfriend from college — a young celebrity blogger — was on the show. What a night! Every adult in the room felt proud.',
    bn: 'এক শুক্রবার রাতে পুরো পরিবার একটা টক-শো দেখল। প্রথমে এক বিখ্যাত অভিনেতা, তারপর এক তরুণী অভিনেত্রী। এরপর কলকাতা থেকে দারুণ এক নৃত্যশিল্পী। একজন শিল্পী তার আঁকা দেখালেন, এক লেখিকা নতুন বই থেকে পড়লেন। উপস্থাপক বললেন, "আসছেন — পুরান ঢাকার এক শেফ!" দর্শকরা করতালি দিল। এক লম্বা ক্রীড়াবিদ এলেন, এক দয়ালু স্থপতি, আর এক চতুর সহকারী নোট নিচ্ছিলেন। "এই মঞ্চের প্রতিটা চরিত্রের একটা পেশা," নাদিয়া বলল। "বড় হয়ে প্রাপ্তবয়স্ক হলে আমারও ভালো পেশা চাই।" এমনকি রাফির কলেজের গার্লফ্রেন্ড — এক তরুণ ব্লগার তারকা — সেই শোতে ছিলেন। কী রাত! ঘরের প্রতিটা প্রাপ্তবয়স্ক গর্বিত হলেন।',
    tip: "প্রতিটা পেশার নামের পাশে বাস্তব একজন মানুষ কল্পনা কর — মুখ + কাজ = পাকা স্মৃতি।",
  },

  snacks: {
    themeId: "snacks",
    title: "ধানমন্ডির ক্যাফে",
    titleEn: "The Dhanmondi Cafe",
    en: 'Nadia and Karim went to a small cafe in Dhanmondi. On the table there was a plate of chocolate cake, one bowl of ice cream with fresh cream, and a hot cup of coffee. Karim asked for cheese on his bread, and Nadia wanted butter. A little boy at the next table opened a packet of chips and ate one red apple. His baby sister held a yellow banana. "Try this new dish," the chef said. It was carrot soup with a small biscuit on the side. Nadia\'s uncle drank one bottle of cold beer at a bigger table. Every taste was different — sweet, salty, warm, cold. Rafi joined them later and said, "This cafe is my new favorite dish of the week."',
    bn: 'নাদিয়া আর কারিম ধানমন্ডির এক ছোট ক্যাফেতে গেল। টেবিলে ছিল এক প্লেট চকলেট কেক, তাজা ক্রিমসহ এক বাটি আইসক্রিম, আর গরম এক কাপ কফি। কারিম রুটিতে পনির চাইল, নাদিয়া চাইল মাখন। পাশের টেবিলে ছোট এক ছেলে এক প্যাকেট চিপস খুলল, একটা লাল আপেল খেল। তার ছোট বোন হলুদ কলা ধরে রেখেছে। "এই নতুন পদটা চেখে দেখো," শেফ বললেন। ছিল গাজরের স্যুপ, পাশে ছোট এক বিস্কুট। নাদিয়ার এক চাচা বড় টেবিলে এক বোতল ঠান্ডা বিয়ার পান করছিলেন। প্রতিটা স্বাদ ভিন্ন — মিষ্টি, নোনতা, গরম, ঠান্ডা। রাফি পরে এসে বলল, "এই ক্যাফেটাই এই সপ্তাহের প্রিয় পদ আমার।"',
    tip: "কল্পনায় নিজের প্রিয় ক্যাফের টেবিলে বসো — প্রতিটা খাবারের ইংরেজি নাম জোরে বল।",
  },

  places2: {
    themeId: "places2",
    title: "সিনেমা হলের পথ",
    titleEn: "The Road to the Cinema",
    en: 'Rafi lives in a small apartment in Mirpur. To reach the cinema, he walks through half of Dhaka. First he passes the bank on the corner — it opens at ten. Then a college gate full of students. In the city centre a big card shop sells birthday cards. His father says Dhaka is the capital of Bangladesh. Down the road there is a sports club and a small camp for kids. On the wall someone painted an old castle with soft background music playing from a shop. "Give me your address," Karim writes on his phone. "I will meet you at the cinema." On the way back they buy tickets for a concert next Friday. Even a chart of movie times is up on the wall. That day Rafi did not touch the beach, but every place he passed felt like one small holiday.',
    bn: 'রাফি মিরপুরের এক ছোট অ্যাপার্টমেন্টে থাকে। সিনেমা হলে যেতে গেলে সে ঢাকার অর্ধেক পাড়ি দেয়। প্রথমে মোড়ের ব্যাংক — দশটায় খোলে। তারপর ছাত্রে ভরা এক কলেজের গেট। শহরের কেন্দ্রে একটা বড় কার্ডের দোকান — জন্মদিনের কার্ড বিক্রি করে। বাবা বলেন ঢাকা বাংলাদেশের রাজধানী। রাস্তার শেষে একটা স্পোর্টস ক্লাব, বাচ্চাদের ছোট ক্যাম্প। দেয়ালে কেউ পুরনো এক দুর্গ এঁকে রেখেছে, দোকান থেকে কোমল পটভূমি সঙ্গীত ভেসে আসছে। "তোমার ঠিকানা দাও," কারিম ফোনে লেখে। "সিনেমায় দেখা হবে।" ফিরতি পথে তারা আগামী শুক্রবারের কনসার্টের টিকিট কেনে। দেয়ালে সিনেমার সময়ের চার্টও ঝুলানো। সেই দিন রাফি সৈকতে যায়নি, কিন্তু যে সব জায়গা পার হলো — প্রতিটাই এক ছোট ছুটি মনে হলো।',
    tip: "নিজের বাসা থেকে প্রিয় জায়গা পর্যন্ত মানসিক পথ আঁকো — প্রতিটা মোড়ে ইংরেজি নাম বসাও।",
  },

  fun: {
    themeId: "fun",
    title: "মেলা এক সন্ধ্যায়",
    titleEn: "One Evening at the Mela",
    en: 'Every year Nadia goes to the Boishakhi mela. She loves the dance on the stage and the loud dancing music. Kids sit and watch a cartoon on a big screen. Old men have a slow chat under a tree. "Culture is our art," grandfather says. "Every song, every article about it, is one small gift." Karim\'s sister writes a small blog every night. Rafi\'s cousin still keeps his old CDs and DVDs. This year they want to celebrate together. "Choose one game," Nadia says. Rafi wants to climb the rope; Karim wants to draw a picture. A short cooking class starts at seven. The whole conversation was full of joy. "Give me one more chance," Karim smiled, "and one day I will teach a full course on happiness — because that is the real cause of a good life."',
    bn: 'প্রতি বছর নাদিয়া বৈশাখী মেলায় যায়। মঞ্চের নাচ আর জোর নাচের গান তার প্রিয়। বাচ্চারা বসে বড় পর্দায় একটা কার্টুন দেখে। গাছতলায় বৃদ্ধরা ধীর আড্ডা দেন। "সংস্কৃতিই আমাদের শিল্প," দাদা বলেন। "প্রতিটা গান, প্রতিটা নিবন্ধ — এক ছোট উপহার।" কারিমের বোন প্রতি রাতে একটা ছোট ব্লগ লেখে। রাফির কাজিন এখনো পুরনো সিডি-ডিভিডি রেখেছে। এই বছর তারা একসাথে উদযাপন করতে চায়। "একটা খেলা বেছে নাও," নাদিয়া বলে। রাফি দড়িতে চড়তে চায়; কারিম ছবি আঁকতে চায়। সাতটায় একটা ছোট রান্নার কোর্স শুরু হয়। পুরো কথোপকথন আনন্দে ভরা। "আরেকটা সুযোগ দাও," কারিম হাসল, "একদিন সুখের উপর পুরো কোর্স পড়াব — এটাই ভালো জীবনের আসল কারণ।"',
    tip: "কল্পনায় একটা মেলায় ঢোকো — প্রতিটা আনন্দকে ইংরেজি ক্রিয়ায় (dance, chat, celebrate) নাম দাও।",
  },

  goodbad: {
    themeId: "goodbad",
    title: "সপ্তাহের রিভিউ",
    titleEn: "The Week's Review",
    en: 'Every Friday night Rafi writes a review of his week. Monday was amazing — he got a brilliant idea for a story. Tuesday was awful; his favorite pen was broken. Wednesday was boring, so he read one attractive book. Thursday was different — his best friend Karim came, and they made a common plan. Today his answer in class was correct, and his teacher said, "Very careful work." "Drive carefully on the road," Amma always says, "because Dhaka roads are dangerous." Nadia is certain that this weekend will be complete happiness. Rafi is not so certain — "Some days are bad, some are the best. Life is not always better, but I am learning to say certainly and to smile, my dear."',
    bn: 'প্রতি শুক্রবার রাতে রাফি সপ্তাহের একটা রিভিউ লেখে। সোমবার ছিল চমৎকার — গল্পের একটা উজ্জ্বল ধারণা এসেছিল। মঙ্গলবার জঘন্য; প্রিয় কলমটা ভেঙে গিয়েছিল। বুধবার একঘেয়ে ছিল, তাই সে একটা আকর্ষণীয় বই পড়ল। বৃহস্পতিবার ভিন্ন — সেরা বন্ধু কারিম এসেছিল, তারা একটা সাধারণ পরিকল্পনা করল। আজ ক্লাসে তার উত্তর সঠিক ছিল, শিক্ষক বললেন, "খুব সাবধানী কাজ।" "রাস্তায় সাবধানে চালাও," আম্মা সবসময় বলেন, "কারণ ঢাকার রাস্তা বিপজ্জনক।" নাদিয়া নিশ্চিত যে এই ছুটির দিন হবে পূর্ণ সুখ। রাফি অত নিশ্চিত না — "কোনো দিন খারাপ, কোনো দিন সেরা। জীবন সবসময় উন্নত না, তবে অবশ্যই বলতে ও হাসতে শিখছি, প্রিয়।"',
    tip: "নিজের সপ্তাহের সাত দিনকে সাত রঙে ভাগ করো — প্রতিটা দিনে একটা adjective (amazing/awful/boring) বসাও।",
  },

  directions: {
    themeId: "directions",
    title: "পুরান ঢাকার সরু গলি",
    titleEn: "Narrow Lanes of Old Dhaka",
    en: 'Karim is new in Dhaka. Rafi says, "Come with me, I know every lane." They start from Sadarghat and walk north. "The old mosque is above the shop, and the tea stall is below it," Rafi says. They cross a small bridge — across the water they see a boat far away. Behind an old wall, a cat sleeps between two boxes. Around the corner a boy runs into a lane. "My uncle\'s house is near, next to the sweet shop, opposite the bank," Rafi says. He points down the road. "Downstairs is the shop; upstairs the family lives." From the roof they look east — the sun is not far away. "By evening we will be home," Karim smiles, standing in front of the door on the left side of the yard.',
    bn: 'কারিম ঢাকায় নতুন। রাফি বলে, "আমার সাথে চলো, আমি প্রতিটা গলি চিনি।" তারা সদরঘাট থেকে শুরু করে উত্তরে হাঁটে। "পুরনো মসজিদ দোকানের উপরে, চায়ের দোকান নিচে," রাফি বলে। তারা ছোট এক ব্রিজ পার হয় — পানির ওপারে দূরে একটা নৌকা। পুরনো দেয়ালের পিছনে দুই বাক্সের মাঝে বিড়াল ঘুমায়। কোণার চারপাশে একটা ছেলে গলির ভেতরে দৌড়ে যায়। "আমার মামার বাসা কাছেই, মিষ্টির দোকানের পাশে, ব্যাংকের বিপরীতে," রাফি বলে। সে রাস্তার নিচের দিকে হাত দেখায়। "নিচতলায় দোকান; উপরের তলায় পরিবার থাকে।" ছাদ থেকে তারা পূর্বদিকে তাকায় — সূর্য দূরে না। "সন্ধ্যা নাগাদ বাসায় পৌঁছাব," কারিম হেসে বলে, উঠোনের বাম পাশে দরজার সামনে দাঁড়িয়ে।',
    tip: "একটা কাগজে তোমার বাসার ম্যাপ আঁকো — প্রতিটা preposition বসাও।",
  },

  numbers2: {
    themeId: "numbers2",
    title: "বিয়ের অতিথি গণনা",
    titleEn: "Counting Wedding Guests",
    en: 'Nadia sits with a paper. Her cousin\'s wedding is in fifteen days. "Four uncles, five aunts, eight cousins," she counts. From Sylhet, eleven people will come; from Cox\'s Bazar, fourteen. The old grandmother is eighty; the youngest baby is only one. "Room number nineteen is for the elders," Amma says. "Forty chairs for lunch, fifty for dinner." The car ride is two kilometres from the station, but the walk is one mile. The stage is ten metres wide. "Once in a lifetime," Nadia writes on the fourth line of her note. "A million memories in one night." Ninety per cent of the guests said yes. Rafi checks his fifth list. "This is the fifth time I count," he laughs. "But every number matters — a wedding is more than a metre of red cloth."',
    bn: 'নাদিয়া একটা কাগজ নিয়ে বসে। তার কাজিনের বিয়ে পনেরো দিন পরে। "চার চাচা, পাঁচ চাচি, আট কাজিন," সে গোনে। সিলেট থেকে এগারো জন আসবে; কক্সবাজার থেকে চৌদ্দ জন। বৃদ্ধ দাদির বয়স আশি; সবচেয়ে ছোট বাচ্চা মাত্র এক। "উনিশ নম্বর রুম বয়স্কদের জন্য," আম্মা বলেন। "লাঞ্চে চল্লিশ চেয়ার, ডিনারে পঞ্চাশ।" গাড়িতে স্টেশন থেকে দুই কিলোমিটার, হেঁটে এক মাইল। মঞ্চ দশ মিটার চওড়া। "একবার জীবনে," নাদিয়া নোটের চতুর্থ লাইনে লেখে। "এক রাতে লক্ষ স্মৃতি।" নব্বই শতাংশ অতিথি হ্যাঁ বলেছেন। রাফি তার পঞ্চম লিস্ট চেক করে। "এই পঞ্চমবার গুনছি," সে হাসে। "তবে প্রতিটা সংখ্যা গুরুত্বপূর্ণ — বিয়ে এক মিটার লাল কাপড়ের চেয়েও বড়।"',
    tip: "কাগজে নিজের পরিবারের সংখ্যা লিখে ইংরেজিতে পড়ো।",
  },

  money: {
    themeId: "money",
    title: "মাসের বাজেট",
    titleEn: "The Monthly Budget",
    en: 'Rafi and Amma sit at the kitchen table with a form to fill. "Business is slow this month," Amma says. "Check every detail." One dollar today is many taka. "A company gave Abba an extra bonus," she adds. "Half goes to rent, half to food. For example, rice, oil, and onion." Rafi writes each fact in a large notebook. "The average bill for the phone is small," he says. "But the final school fee is big." Amma keeps some money in a case for charity. "Even ten cents help," she smiles. "A euro or a dollar — every case, we give." "I cannot spend on toys now," Rafi says. "That is a fact, and I understand." Amma pats his head. "You are learning fast, my son. Money is not the end — it is one form of care."',
    bn: 'রাফি আর আম্মা রান্নাঘরের টেবিলে ফর্ম পূরণ করতে বসেন। "এই মাসে ব্যবসা ধীর," আম্মা বলেন। "প্রতিটা বিস্তারিত চেক কর।" এক ডলার আজ অনেক টাকা। "একটা কোম্পানি আব্বাকে অতিরিক্ত বোনাস দিয়েছে," তিনি যোগ করেন। "অর্ধেক ভাড়ায়, অর্ধেক খাবারে। উদাহরণস্বরূপ, চাল, তেল, পেঁয়াজ।" রাফি প্রতিটা সত্য বড় নোটবুকে লেখে। "ফোনের গড় বিল ছোট," সে বলে। "তবে স্কুলের চূড়ান্ত ফি বড়।" আম্মা দানের জন্য কিছু টাকা এক কেসে রাখেন। "এমনকি দশ সেন্টও সাহায্য করে," তিনি হাসেন। "এক ইউরো বা এক ডলার — প্রতিটা ক্ষেত্রে আমরা দিই।" "আমি এখন খেলনায় খরচ করতে পারি না," রাফি বলে। "এটা সত্য, আমি বুঝি।" আম্মা মাথায় হাত রাখেন। "তুমি দ্রুত শিখছ, সোনা। টাকা শেষ কথা না — এটা যত্নের এক রূপ।"',
    tip: "নিজের এক সপ্তাহের খরচ কাগজে লিখে ইংরেজিতে বলো।",
  },

  school2: {
    themeId: "school2",
    title: "সোমবার সকালের ক্লাসরুম",
    titleEn: "Monday Morning Classroom",
    en: 'Rafi enters the bright classroom on Monday. The teacher smiles — she is very friendly. "Today we study language and history," she says. "Use the dictionary if you don\'t know a word." A group of five students sits near the window. Nadia is a new member. "Chemistry is hard, but geography is easy for me," she says. Karim raises his hand. "Can you explain this example?" The teacher says, "A mistake is not bad — a mistake helps you improve." She shows an interesting story from a small library book. Rafi is very interested. "I want to join the reading club," he says. "I know it is a good group." After class, the friendly teacher gives one more example. "Every day, one new word," she says. "That is the way you learn a language — one small step, one small win."',
    bn: 'সোমবার রাফি উজ্জ্বল ক্লাসরুমে ঢোকে। শিক্ষক হাসেন — তিনি খুব বন্ধুসুলভ। "আজ আমরা ভাষা আর ইতিহাস পড়ব," তিনি বলেন। "শব্দ না জানলে অভিধান ব্যবহার কর।" জানালার কাছে পাঁচজনের একটা দল বসে। নাদিয়া নতুন সদস্য। "রসায়ন কঠিন, তবে ভূগোল আমার জন্য সহজ," সে বলে। কারিম হাত তোলে। "এই উদাহরণটা কি ব্যাখ্যা করবেন?" শিক্ষক বলেন, "ভুল খারাপ না — ভুল তোমাকে উন্নত করে।" তিনি ছোট লাইব্রেরি বইয়ের একটা আকর্ষণীয় গল্প দেখান। রাফি খুব আগ্রহী। "আমি পড়ার ক্লাবে যোগ দিতে চাই," সে বলে। "আমি জানি এটা ভালো দল।" ক্লাসের পরে বন্ধুসুলভ শিক্ষক আরেকটা উদাহরণ দেন। "প্রতিদিন একটা নতুন শব্দ," তিনি বলেন। "এভাবেই ভাষা শেখা — এক ছোট পদক্ষেপ, এক ছোট জয়।"',
    tip: "প্রতিদিন একটা নতুন শব্দ নোটবুকে লিখো — উদাহরণসহ।",
  },

  feelings2: {
    themeId: "feelings2",
    title: "রাতের ডায়েরি",
    titleEn: "The Night Diary",
    en: 'Nadia sits by the window before sleep. She opens her small diary. "Today I feel a warm feeling in my heart," she writes. "The exciting match with cousins was fun. Karim told a funny story, and we all laughed until our eyes were wet." She stops and imagines the day again. "Amma cooked a fantastic dinner. That was a nice, fine end to the day." She believes tomorrow will be great too. "I have one important idea," she writes. "I will guess less and try more." Even the baby smiled at her opinion. "Maybe I am wrong," she thinks, "but I hope every day gives one small joy." She closes the book. "Hey diary, thank you," she whispers. "You never laugh at my feelings. You just listen — and that is enough for tonight."',
    bn: 'নাদিয়া ঘুমের আগে জানালার পাশে বসে। ছোট ডায়েরিটা খোলে। "আজ হৃদয়ে উষ্ণ অনুভূতি," সে লেখে। "কাজিনদের সাথে উত্তেজনাপূর্ণ ম্যাচ মজার ছিল। কারিম মজার গল্প বলেছিল, চোখে পানি আসা পর্যন্ত হেসেছি।" সে থামে, দিনটা আবার কল্পনা করে। "আম্মা চমৎকার রাতের খাবার রেঁধেছেন। দিনের সুন্দর, ভালো সমাপ্তি।" আগামীকালও দারুণ হবে সে বিশ্বাস করে। "একটা গুরুত্বপূর্ণ ধারণা," সে লেখে। "অনুমান কম করব, চেষ্টা বেশি করব।" এমনকি বাচ্চাটাও তার মতামতে হেসেছিল। "হয়তো আমি ভুল," সে ভাবে, "তবে আশা করি প্রতিদিন এক ছোট আনন্দ দেবে।" সে বই বন্ধ করে। "এই ডায়েরি, ধন্যবাদ," ফিসফিস করে বলে। "তুমি কখনো আমার অনুভূতিকে নিয়ে হাসো না। শুধু শোনো — আজ রাতের জন্য এটাই যথেষ্ট।"',
    tip: "প্রতিদিন রাতে একটা ছোট অনুভূতি ইংরেজিতে লিখে দেখো।",
  },

  transport2: {
    themeId: "transport2",
    title: "মিরপুর থেকে কক্সবাজার",
    titleEn: "From Mirpur to Cox's Bazar",
    en: 'Karim\'s journey starts before sunrise. Both his bags are packed. "Each seat on the bus is booked," he tells Rafi on the phone. He rides his bicycle to the station and finds a long line. The bus leaves the city; near the river he sees birds fly over a small island. "The land here is soft and green," the driver says. During the trip Karim keeps his ticket in front of him. After many kilometres, the road turns and follows the sea. His holiday is his old hobby — quiet travel. "Get off at the next stop," someone says. A large bus stands off the road. He moves fast, joins another group, and finds a new friend from Chittagong. "Life on the road is far from home," Karim thinks, "but every mile brings a small story."',
    bn: 'কারিমের যাত্রা সূর্য ওঠার আগে শুরু হয়। তার উভয় ব্যাগ গোছানো। "বাসে প্রত্যেক সিট বুক করা," সে ফোনে রাফিকে বলে। সে সাইকেল চালিয়ে স্টেশনে যায়, একটা লম্বা লাইনে দাঁড়ায়। বাস শহর ছাড়ে; নদীর কাছে সে দেখে পাখিরা এক ছোট দ্বীপের ওপর দিয়ে ওড়ে। "এখানে ভূমি নরম আর সবুজ," ড্রাইভার বলেন। ভ্রমণের সময় কারিম টিকিটটা সামনে রাখে। অনেক কিলোমিটার পরে রাস্তা ঘুরে সাগরকে অনুসরণ করে। তার ছুটি তার পুরনো শখ — শান্ত ভ্রমণ। "পরের স্টপে নামো," কেউ বলে। বড় এক বাস রাস্তার পাশে দাঁড়ানো। সে দ্রুত সরে, অন্য একটা দলে যোগ দেয়, চট্টগ্রামের এক নতুন বন্ধু খুঁজে পায়। "রাস্তার জীবন বাসা থেকে দূরে," কারিম ভাবে, "তবে প্রতিটা মাইল এক ছোট গল্প আনে।"',
    tip: "নিজের একটা যাত্রার কথা ৫ বাক্যে ইংরেজিতে লিখো।",
  },

  verbs1: {
    themeId: "verbs1",
    title: "আম্মার সকালে রান্নাঘর",
    titleEn: "Amma's Kitchen Morning",
    en: 'Amma begins her day early. She has to bring water, cut the onion, and boil rice. "Do not break that plate," she tells Rafi. Nadia helps carry the tray. "Close the door," Amma says. "Wind will burn my fire." Rafi has to decide what to do first. He describes his plan: "I will design a shopping list, then build the tea tray." Nadia laughs. "You cannot build a tray!" Amma finishes cutting and looks at both. "Do not forget the salt," she says. "And do not fall on the wet floor." Karim comes in and joins them. "Let us discuss the menu," he says. "We can create one new dish today." Amma smiles. "The beginning of a small idea," she says. "That is how every good day grows. Now finish the work — the end is near."',
    bn: 'আম্মা দিন শুরু করেন ভোরে। তাকে পানি আনতে, পেঁয়াজ কাটতে, ভাত ফোটাতে হবে। "ঐ প্লেটটা ভেঙো না," তিনি রাফিকে বলেন। নাদিয়া ট্রে বহন করতে সাহায্য করে। "দরজা বন্ধ কর," আম্মা বলেন। "বাতাস আমার আগুন পুড়িয়ে দেবে।" রাফিকে সিদ্ধান্ত নিতে হবে আগে কী করবে। সে পরিকল্পনা বর্ণনা করে: "আমি একটা শপিং লিস্ট ডিজাইন করব, তারপর চায়ের ট্রে বানাব।" নাদিয়া হাসে। "তুমি ট্রে বানাতে পারো না!" আম্মা কাটা শেষ করে দুজনের দিকে তাকান। "লবণ ভুলো না," তিনি বলেন। "আর ভেজা মেঝেতে পড়ো না।" কারিম আসে, যোগ দেয়। "চলো মেনু নিয়ে আলোচনা করি," সে বলে। "আমরা আজ একটা নতুন পদ তৈরি করতে পারি।" আম্মা হাসেন। "ছোট এক ধারণার শুরু," তিনি বলেন। "এভাবেই প্রতিটা ভালো দিন বাড়ে। এবার কাজ শেষ কর — শেষ কাছেই।"',
    tip: "প্রতিটা verb হাতে দেখাও: bring, cut, close, break।",
  },

  verbs2: {
    themeId: "verbs2",
    title: "কারিম আর ছোট কাজিন",
    titleEn: "Karim and the Little Cousin",
    en: 'Karim has to look after his little cousin all afternoon. "Get the toy, give it to me," the child says. Karim can hear every word. "I have a plan," he tells Rafi. "Let me try." First, he must open the box of blocks. "You need to be gentle," Amma says. "Keep the room clean." The cousin wants to make a small tower. Karim helps him meet the goal. "Move this block here," he says. "Look, we can build a bridge." The little boy laughs. "I have to find the red one," he says. Karim finds it under the sofa. "Become a builder!" he jokes. The cousin smiles and lives in his own small world for one hour. "You must sleep now," Karim says softly. "I will be here when you wake up." The child closes his eyes. Karim just looks — the moment feels quiet and good.',
    bn: 'কারিমকে সারা দুপুর ছোট কাজিনকে দেখতে হবে। "খেলনাটা এনে দাও," বাচ্চাটা বলে। কারিম প্রতিটা শব্দ শুনতে পায়। "আমার একটা পরিকল্পনা আছে," সে রাফিকে বলে। "আমাকে চেষ্টা করতে দাও।" প্রথমে ব্লকের বাক্স খুলতে হবে। "তোমাকে নরম হতে হবে," আম্মা বলেন। "রুম পরিষ্কার রাখো।" কাজিন একটা ছোট টাওয়ার বানাতে চায়। কারিম লক্ষ্য পূরণে সাহায্য করে। "এই ব্লকটা এখানে সরাও," সে বলে। "দেখো, আমরা ব্রিজ বানাতে পারি।" ছোট ছেলেটা হাসে। "আমাকে লাল ব্লকটা খুঁজে বের করতে হবে," সে বলে। কারিম সোফার নিচে খুঁজে পায়। "বিল্ডার হয়ে ওঠো!" সে ঠাট্টা করে। কাজিন হাসে, নিজের ছোট জগতে এক ঘণ্টা থাকে। "এবার তোমাকে ঘুমাতে হবে," কারিম নরম করে বলে। "তুমি উঠলে আমি এখানেই থাকব।" বাচ্চাটা চোখ বন্ধ করে। কারিম শুধু তাকিয়ে থাকে — মুহূর্তটা শান্ত আর ভালো।',
    tip: "প্রতিটা verb-এর পরে একটা ছোট কাজ কল্পনা কর।",
  },

  communication: {
    themeId: "communication",
    title: "বৃষ্টির রাতের ফোন",
    titleEn: "The Rainy Night Call",
    en: 'It is raining hard. Nadia sits with a hot cup of tea and calls her cousin. "Hi!" she says. "Hey, it\'s been long." The line is not clear. "Oh, I can hardly hear you," her cousin says. "Ok, let me speak louder." Nadia wants to know the meaning of a new word. "Explain what you mean," she asks. She just read a magazine and a newspaper. "I need information for a small dialogue in class," she says. "The teacher wants no negative answers today." Her cousin laughs. "Introduce your topic first, then use one example." Nadia writes on the menu of her notebook. "Writing is my hobby," she says. "Even a small letter can teach me one line." "Bye for now," her cousin says. "Bye," Nadia smiles. She listens to the rain — the best kind of quiet after a good talk.',
    bn: 'জোরে বৃষ্টি হচ্ছে। নাদিয়া গরম চা নিয়ে বসে কাজিনকে ফোন করে। "হাই!" সে বলে। "এই, অনেক দিন পর।" লাইন পরিষ্কার না। "ওহ্‌, আমি খুব কম শুনছি," কাজিন বলে। "ঠিক আছে, জোরে বলি।" নাদিয়া নতুন এক শব্দের অর্থ জানতে চায়। "তুমি কী বোঝাচ্ছো ব্যাখ্যা কর," সে জিজ্ঞেস করে। সে এইমাত্র একটা ম্যাগাজিন আর সংবাদপত্র পড়েছে। "ক্লাসের এক ছোট সংলাপের জন্য তথ্য দরকার," সে বলে। "আজ শিক্ষক কোনো নেতিবাচক উত্তর চান না।" কাজিন হাসে। "প্রথমে বিষয়ের পরিচয় দাও, তারপর একটা উদাহরণ ব্যবহার কর।" নাদিয়া নোটবুকের মেনুতে লেখে। "লেখা আমার শখ," সে বলে। "এমনকি ছোট এক চিঠিও এক লাইন শেখায়।" "এখনকার মতো বিদায়," কাজিন বলে। "বিদায়," নাদিয়া হাসে। সে বৃষ্টির শব্দ শোনে — ভালো এক কথোপকথনের পরে সেরা রকম নীরবতা।',
    tip: "একটা কাল্পনিক ফোনালাপ ইংরেজিতে ৫টা লাইনে লেখো।",
  },

  quantity: {
    themeId: "quantity",
    title: "আম বিতরণ",
    titleEn: "Sharing the Mangoes",
    en: 'Amma brings a basket of mangoes. Five kids sit on the mat. "Both bags are heavy," she says. "Each of you gets one big and one small." "Every child must wait," Nadia says. Rafi wants any yellow one; Karim asks for another. "Only two are ripe," Amma laughs. Just then the baby cries. "Most kids are quiet," Amma says. "But a lot of noise came from you two." She cuts half a mango for the baby. "No more fighting," she says. "Not any more today." Nobody wants trouble, everybody wants sweet fruit. Nothing tastes better than a summer mango. Everyone smiles. Anyone can join the circle; anybody who wants sits down. Anything left goes to the neighbour. "No one is bigger than another today," Amma says. "Every share is equal — that is the family rule."',
    bn: 'আম্মা এক ঝুড়ি আম আনেন। মাদুরে পাঁচ বাচ্চা বসে। "উভয় ব্যাগ ভারী," তিনি বলেন। "প্রত্যেক একটা বড়, একটা ছোট পাবে।" "প্রতিটি বাচ্চাকে অপেক্ষা করতে হবে," নাদিয়া বলে। রাফি কোনো হলুদটা চায়; কারিম আরেকটা চায়। "শুধু দুইটা পাকা," আম্মা হাসেন। ঠিক তখন বাচ্চাটা কাঁদে। "অধিকাংশ বাচ্চা চুপ," আম্মা বলেন। "তবে অনেক আওয়াজ তোমাদের দুইজনের থেকে।" তিনি অর্ধেক আম বাচ্চার জন্য কাটেন। "আর ঝগড়া না," তিনি বলেন। "আজ আর না।" কেউ ঝামেলা চায় না, সবাই মিষ্টি ফল চায়। গ্রীষ্মের আমের চেয়ে কিছুই ভালো লাগে না। সবাই হাসে। যে কেউ বৃত্তে যোগ দিতে পারে; যে কেউ চাইলে বসতে পারে। যা কিছু বাকি থাকে প্রতিবেশীর কাছে যায়। "আজ কেউ কারো চেয়ে বড় না," আম্মা বলেন। "প্রতিটা ভাগ সমান — এটাই পরিবারের নিয়ম।"',
    tip: "প্রতিদিন কিছু ভাগ করার সময় ইংরেজি quantity-শব্দ ব্যবহার কর।",
  },

  greetings: {
    themeId: "greetings",
    title: "নতুন অফিস, নতুন দিন",
    titleEn: "New Office, New Day",
    en: 'Monday is Nadia\'s first day at a new office. "Hi, I am Nadia," she says at the door. "Hey, welcome!" a friendly man smiles. "Nice to meet you." "Oh, thank you," she says. "Ok, where should I sit?" The manager comes. "Let me introduce you to our team." A woman joins them. "How are you?" "I am fine, thanks." Nadia meets each new member. "Great to have you," someone says. "Every Friday we have lunch together." She smiles — the friendly office feels like a small family. She just arrived, but she already feels at home. "What is your name?" she asks the boy at the next desk. He laughs. "Karim. Come here, sit next to me." The day ends with a soft "Bye, see you tomorrow." Nadia walks home and thinks, "A nice hello can open every door."',
    bn: 'সোমবার নাদিয়ার নতুন অফিসের প্রথম দিন। "হাই, আমি নাদিয়া," সে দরজায় বলে। "এই, স্বাগতম!" এক বন্ধুসুলভ পুরুষ হাসে। "তোমার সাথে দেখা হয়ে ভালো লাগল।" "ওহ্‌, ধন্যবাদ," সে বলে। "ঠিক আছে, কোথায় বসব?" ম্যানেজার আসেন। "তোমার সাথে আমাদের দলের পরিচয় করিয়ে দিই।" এক নারী যোগ দেন। "কেমন আছ?" "ভালো আছি, ধন্যবাদ।" নাদিয়া প্রতিটা নতুন সদস্যের সাথে দেখা করে। "তোমাকে পেয়ে দারুণ লাগছে," কেউ বলে। "প্রতি শুক্রবার আমরা একসাথে লাঞ্চ করি।" সে হাসে — বন্ধুসুলভ অফিসটা ছোট পরিবারের মতো লাগে। এইমাত্র এসেছে, কিন্তু ইতিমধ্যেই ঘরের মতো লাগছে। "তোমার নাম কী?" পাশের ডেস্কের ছেলেকে জিজ্ঞেস করে। সে হাসে। "কারিম। এখানে এসো, আমার পাশে বসো।" দিন শেষ হয় নরম "বিদায়, কাল দেখা হবে।" নাদিয়া বাসায় হেঁটে ভাবে, "সুন্দর এক হ্যালো প্রতিটা দরজা খুলতে পারে।"',
    tip: "প্রতিদিন কমপক্ষে ৩ জনকে ইংরেজিতে অভিবাদন কর।",
  },

  morning2: {
    themeId: "morning2",
    title: "ছয়টার এলার্ম",
    titleEn: "The Six O'Clock Alarm",
    en: 'The clock rings at six o\'clock. Rafi is still asleep. "Monday morning, come on!" Amma calls from downstairs. He gets up, takes a quick bath, and finds his coat and hat. His jeans are on the chair. His boot is under the bed. "Meal is ready," Amma says. "A hot lunch will not wait." But this is breakfast — hot bread, an onion egg, a glass of juice with ice. "A good diet gives a good day," she says. Their small flat has a tiny garden. The clock says quarter past six now. "Dinner will be late tonight," Amma says. "I have to work until midnight for a form." Rafi nods. He runs to school. On the way, a friend waves. "Nice hat!" he says. Rafi smiles. "Monday started well — every morning is one small race, and today, I am on time."',
    bn: 'ঘড়ি ছয়টায় বাজে। রাফি এখনো ঘুমন্ত। "সোমবার সকাল, চলো!" আম্মা নিচতলা থেকে ডাকেন। সে ওঠে, দ্রুত গোসল করে, কোট আর টুপি খুঁজে বের করে। জিন্স চেয়ারে। বুট বিছানার নিচে। "আহার প্রস্তুত," আম্মা বলেন। "গরম লাঞ্চ অপেক্ষা করবে না।" তবে এটা তো নাশতা — গরম রুটি, পেঁয়াজের ডিম, বরফসহ এক গ্লাস জুস। "ভালো খাদ্যাভ্যাস ভালো দিন দেয়," তিনি বলেন। তাদের ছোট ফ্ল্যাটে ছোট এক বাগান। ঘড়ি এখন সোয়া ছয়টা। "ডিনার আজ দেরি হবে," আম্মা বলেন। "একটা ফর্মের জন্য মধ্যরাত পর্যন্ত কাজ করতে হবে।" রাফি মাথা নাড়ে। সে স্কুলে দৌড়ায়। রাস্তায় এক বন্ধু হাত নাড়ায়। "সুন্দর টুপি!" সে বলে। রাফি হাসে। "সোমবার ভালো শুরু হলো — প্রতিটা সকাল এক ছোট দৌড়, আজ আমি সময়ে আছি।"',
    tip: "নিজের সকাল-রুটিন ৫ ধাপে ইংরেজিতে বলার চর্চা কর।",
  },

  "college-life": {
    themeId: "college-life",
    title: "কারিমের প্রথম সপ্তাহ",
    titleEn: "Karim's First Week",
    en: 'Karim starts a local college in Dhaka. The main gate opens at eight. The building is modern — a copy machine hums near the office. "Please include your full name on the form," the officer says. Karim writes carefully. His interview for the drama club is on Monday. "You are a good model of a hard-working student," a teacher says. "Take a moment to breathe." Karim visits the museum on Friday and hears soft music inside. He often stops by a neighbour\'s tea stall. "The natural light in the next room is best for reading," he tells Rafi. He picks up a small round object from the desk — a paper globe. "No fear," he thinks. "Only new things." The library is open until nine. Life at college is fresh — every day, one new door.',
    bn: 'কারিম ঢাকার একটা স্থানীয় কলেজে শুরু করে। প্রধান ফটক আটটায় খোলে। ভবনটা আধুনিক — অফিসের কাছে একটা কপি মেশিন চলে। "ফর্মে পুরো নাম যোগ কর," কর্মকর্তা বলেন। কারিম সাবধানে লেখে। নাটক ক্লাবের সাক্ষাৎকার সোমবার। "তুমি পরিশ্রমী ছাত্রের ভালো মডেল," এক শিক্ষক বলেন। "একটু মুহূর্ত নিয়ে শ্বাস নাও।" কারিম শুক্রবার জাদুঘরে যায়, ভেতরে কোমল সঙ্গীত শোনে। সে প্রায়ই প্রতিবেশীর চায়ের দোকানে থামে। "পাশের রুমে প্রাকৃতিক আলো পড়ার জন্য সবচেয়ে ভালো," সে রাফিকে বলে। ডেস্ক থেকে সে গোল একটা বস্তু তোলে — কাগজের গ্লোব। "ভয় নাই," সে ভাবে। "শুধু নতুন জিনিস।" গ্রন্থাগার নয়টা পর্যন্ত খোলা। কলেজের জীবন সজীব — প্রতিদিন এক নতুন দরজা।',
    tip: "নিজের একটা 'প্রথম দিন' ইংরেজিতে ৫টা বাক্যে লেখো।",
  },

  "past-days": {
    themeId: "past-days",
    title: "পুরনো ছবি",
    titleEn: "Old Photos",
    en: 'Nadia sits with an old album. Have you ever seen a photo that returns a whole century? "I never forget the festival that day," she says. Once, during Eid, all cousins came. "Just yesterday, I felt, but it was two years ago." She checks the date on the back. Every Friday of that month had an event. Last Monday she found a moment she had lost — a photo of grandfather. "Family history is our life," Amma says. She turns to a page from midnight of the New Year. Rafi joins with an old hobby — collecting cinema tickets. "Geography changed here," Nadia says, showing a river photo. The album is her small future too — one day her own kids will fill more pages. "Never let one memory die," she whispers. "Once a moment is written, it lives again."',
    bn: 'নাদিয়া একটা পুরনো অ্যালবাম নিয়ে বসে। কখনো কি এমন ছবি দেখেছ যা পুরো এক শতাব্দী ফিরিয়ে আনে? "আমি সেই উৎসবের দিন কখনো ভুলি না," সে বলে। একবার ঈদের সময় সব কাজিন এসেছিল। "এইমাত্র গতকাল লাগছে, কিন্তু দুই বছর আগে।" সে পিছনের তারিখ চেক করে। ঐ মাসের প্রতি শুক্রবারে একটা ঘটনা ছিল। গত সোমবার সে হারিয়ে যাওয়া এক মুহূর্ত খুঁজে পেল — দাদার ছবি। "পরিবারের ইতিহাসই আমাদের জীবন," আম্মা বলেন। সে নববর্ষের মধ্যরাতের পাতা উল্টায়। রাফি পুরনো এক শখ নিয়ে আসে — সিনেমার টিকিট জমানো। "এখানে ভূগোল বদলেছে," নাদিয়া নদীর ছবি দেখিয়ে বলে। অ্যালবামটা তার ছোট ভবিষ্যৎও — একদিন নিজের বাচ্চারা আরো পাতা পূরণ করবে। "কোনো স্মৃতিকে মরতে দিও না," সে ফিসফিস করে। "একবার মুহূর্ত লেখা হলে, এটা আবার বাঁচে।"',
    tip: "নিজের একটা পুরনো ছবি নিয়ে ইংরেজিতে ছোট গল্প বলো।",
  },

  "movie-night": {
    themeId: "movie-night",
    title: "শুক্রবারের সিনেমা",
    titleEn: "Friday Movie",
    en: 'Friday night is movie night. Rafi, Nadia, and Karim sit with popcorn. The film is exciting — a famous hero in a fantastic story. "Look at the screen!" Nadia says. A funny scene makes the whole group laugh. The music is loud. A guitar plays in one line: "I will find my way home." Karim writes the line in his notebook — cinema is his hobby. "The hero trains at a gym every morning," the story tells. In one magic moment, all three friends hold their breath. "This is great," Rafi whispers. The end is happy. Nadia\'s eyes are wet. "That was a beautiful end," she says. "Join us next Friday too," Karim says. "We can watch a movie every week." They walk home under the street lights, still laughing about the funny scene. A good film is a small window to another life.',
    bn: 'শুক্রবার রাত সিনেমার রাত। রাফি, নাদিয়া, কারিম পপকর্ন নিয়ে বসে। সিনেমাটা উত্তেজনাপূর্ণ — চমৎকার এক গল্পে বিখ্যাত এক নায়ক। "পর্দায় তাকাও!" নাদিয়া বলে। এক মজার দৃশ্যে পুরো দল হাসে। সঙ্গীত জোরালো। একটা লাইনে গিটার বাজে: "আমি বাসার পথ খুঁজে পাব।" কারিম লাইনটা নোটবুকে লেখে — সিনেমা তার শখ। "নায়ক প্রতিদিন সকালে জিমে অনুশীলন করে," গল্প বলে। এক জাদুকরী মুহূর্তে তিন বন্ধুই নিঃশ্বাস আটকে রাখে। "এটা দারুণ," রাফি ফিসফিস করে। শেষটা সুখী। নাদিয়ার চোখে পানি। "সুন্দর শেষ ছিল," সে বলে। "পরের শুক্রবারও যোগ দাও," কারিম বলে। "প্রতি সপ্তাহে একটা সিনেমা দেখতে পারি।" তারা রাস্তার আলোয় বাসায় হাঁটে, তখনো মজার দৃশ্য নিয়ে হাসে। ভালো সিনেমা অন্য এক জীবনের ছোট জানালা।',
    tip: "প্রিয় সিনেমার একটা ইংরেজি লাইন মুখস্থ কর।",
  },

  "market-day": {
    themeId: "market-day",
    title: "ঈদের কেনাকাটা",
    titleEn: "Eid Shopping",
    en: 'Amma and Nadia go to New Market for Eid. "Check the price first," Amma says. A large size for Rafi, an extra small for the baby. Nadia has a hard choice — the shop has ten different colours. "Compare two shirts," Amma says. "Which one is your favourite?" Nadia looks at the front shop and finds a fine cloth. "Fill the bag," Amma says. "But not more than half." A long line stands near the cash. She fills a form for the discount card. Today it is half price on hats — a summer hat for the baby. The menu at the tea stall next door smells sweet. Amma keeps the change in a case. "Give me two of these," Nadia tells the shopkeeper. "Every year, one new dress," Amma smiles. "That is Eid — small joy, big love."',
    bn: 'আম্মা আর নাদিয়া ঈদের জন্য নিউমার্কেটে যান। "আগে দাম চেক কর," আম্মা বলেন। রাফির জন্য বড় সাইজ, বাচ্চার জন্য অতিরিক্ত ছোট। নাদিয়ার কঠিন পছন্দ — দোকানে দশটা ভিন্ন রং। "দুইটা শার্ট তুলনা কর," আম্মা বলেন। "কোনটা তোমার প্রিয়?" নাদিয়া সামনের দোকানে তাকিয়ে চমৎকার এক কাপড় খুঁজে পায়। "ব্যাগ ভরো," আম্মা বলেন। "তবে অর্ধেকের বেশি না।" ক্যাশের কাছে লম্বা লাইন। সে ডিসকাউন্ট কার্ডের জন্য একটা ফর্ম পূরণ করে। আজ টুপিতে অর্ধেক দাম — বাচ্চার জন্য গ্রীষ্মের টুপি। পাশের চা-স্টলের মেনু মিষ্টি গন্ধ ছড়ায়। আম্মা খুচরাটা এক কেসে রাখেন। "এইগুলোর দুইটা দিন," নাদিয়া দোকানিকে বলে। "প্রতি বছর একটা নতুন পোশাক," আম্মা হাসেন। "এটাই ঈদ — ছোট আনন্দ, বড় ভালোবাসা।"',
    tip: "বাজারে যাবার সময় ইংরেজিতে দাম-দরের অনুশীলন কর।",
  },

  "kitchen-day": {
    themeId: "kitchen-day",
    title: "রান্নাঘরে দুপুর",
    titleEn: "Kitchen Afternoon",
    en: 'It is Friday afternoon. Amma will boil the rice and cut two onions. "Nadia, fill the pot," she says. The tea is hot; the ice cream is in the freezer. "Later, ice cream for the kids," Amma smiles. Nadia adds lemon juice to the fish. "A big meal for tonight," Amma says. "Menu: rice, fish, a light diet salad." She takes less fat for the curry. "Extra salt is bad," she warns. "Keep it warm." Nadia carries the tray to the table. "Close the lid," Amma says. "Do not open the jar of pickle now." Rafi enters. "The rice will burn!" he shouts. Amma laughs. "Watch it, then." Dinner is late but perfect. Lunch was small; dinner is big. A hot meal on a cool Friday — that is family.',
    bn: 'শুক্রবার দুপুর। আম্মা ভাত ফোটাবেন আর দুইটা পেঁয়াজ কাটবেন। "নাদিয়া, পাত্র ভরো," তিনি বলেন। চা গরম; আইসক্রিম ফ্রিজে। "পরে বাচ্চাদের জন্য আইসক্রিম," আম্মা হাসেন। নাদিয়া মাছে লেবুর জুস দেয়। "আজ রাতে বড় আহার," আম্মা বলেন। "মেনু: ভাত, মাছ, হালকা খাদ্যাভ্যাসের সালাদ।" তরকারিতে কম চর্বি নেন। "অতিরিক্ত লবণ খারাপ," সাবধান করেন। "গরম রাখো।" নাদিয়া ট্রেটা টেবিলে বহন করে। "ঢাকনা বন্ধ কর," আম্মা বলেন। "আচারের কৌটা এখন খুলো না।" রাফি ঢোকে। "ভাত পুড়বে!" চিৎকার করে। আম্মা হাসেন। "তবে দেখো।" ডিনার দেরি, তবে নিখুঁত। লাঞ্চ ছোট ছিল; ডিনার বড়। ঠান্ডা শুক্রবারে গরম আহার — এটাই পরিবার।',
    tip: "রান্নাঘরে কাজ করার সময় প্রতিটা verb ইংরেজিতে বলো।",
  },

  sports2: {
    themeId: "sports2",
    title: "স্কুলের পরে ফুটবল",
    titleEn: "Football After School",
    en: 'Every Friday, Karim plays football on the school field. "Join the team," he tells Rafi. It is a small group of twelve, but every member is fast. "Sports are pure fun," the coach says. A great match with the neighbour school starts at four. "Today is the final," Karim says. He holds the ball at the finish line. "Keep running!" the crowd is loud. "Look at the ball, not the crowd." A loud cheer rises. Rafi looks at his friend on the field — this is the moment. Every player must meet at the centre. The last kilometre of practice is done. "Let him play," the coach says of a new boy. In the final moment, Karim scores. The whole team laughs, tired but happy. "Great match!" the coach shouts. "Sport is our best hobby — it makes strangers a family."',
    bn: 'প্রতি শুক্রবার কারিম স্কুলের মাঠে ফুটবল খেলে। "দলে যোগ দাও," সে রাফিকে বলে। বারো জনের ছোট দল, তবে প্রত্যেক সদস্য দ্রুত। "খেলাধুলা বিশুদ্ধ মজা," কোচ বলেন। প্রতিবেশী স্কুলের সাথে দারুণ এক ম্যাচ চারটায় শুরু। "আজ ফাইনাল," কারিম বলে। সে শেষের লাইনে বল ধরে। "দৌড় চালিয়ে যাও!" দর্শক জোরালো। "বলে তাকাও, দর্শকে না।" এক জোর হর্ষধ্বনি ওঠে। রাফি মাঠে বন্ধুর দিকে তাকায় — এটাই মুহূর্ত। প্রতিটা খেলোয়াড়কে কেন্দ্রে দেখা করতে হবে। অনুশীলনের শেষ কিলোমিটার শেষ। "তাকে খেলতে দাও," কোচ এক নতুন ছেলের কথা বলেন। শেষ মুহূর্তে কারিম গোল করে। পুরো দল হাসে, ক্লান্ত তবু সুখী। "দারুণ ম্যাচ!" কোচ বলেন। "খেলাধুলা আমাদের সেরা শখ — এটা অপরিচিতদের পরিবার বানায়।"',
    tip: "প্রতিদিন ২০ মিনিট খেলাধুলার সময় ইংরেজিতে বলার চর্চা।",
  },

  "beach-day": {
    themeId: "beach-day",
    title: "কক্সবাজার ছুটি",
    titleEn: "Cox's Bazar Holiday",
    en: 'The family goes on a summer holiday to Cox\'s Bazar. From the boat they see a small island — not far. Birds fly low over the water. It is a hot day, so Nadia buys ice cream and cold juice. A large wave comes. Rafi laughs. "Look at the sea!" There is a lot of sand under his feet. A line of shells runs along the beach — Nadia\'s hobby is photography, so she keeps every good one. "Something magic will happen tonight," Amma says. She points to the moon. Karim wants to join them in the water. "Come, keep close to me," he says. On your left, a boy makes a small castle. Listen — the waves speak. A calm moment. With good friends, even the sea feels like home. "The holiday is short," Nadia says, "but this moment is long in my heart."',
    bn: 'পরিবার গ্রীষ্মের ছুটিতে কক্সবাজার যায়। নৌকা থেকে একটা ছোট দ্বীপ দেখা যায় — দূরে না। পাখিরা পানির উপর দিয়ে নিচু দিয়ে ওড়ে। গরম দিন, তাই নাদিয়া আইসক্রিম আর ঠান্ডা জুস কেনে। বড় এক ঢেউ আসে। রাফি হাসে। "সাগরের দিকে তাকাও!" পায়ের নিচে অনেক বালি। সৈকতে ঝিনুকের এক সারি — নাদিয়ার শখ ফটোগ্রাফি, তাই প্রতিটা ভালোটা রাখে। "আজ রাতে জাদুকরী কিছু ঘটবে," আম্মা বলেন। চাঁদের দিকে দেখান। কারিম পানিতে যোগ দিতে চায়। "এসো, আমার কাছে থাকো," সে বলে। তোমার বামে এক ছেলে ছোট এক দুর্গ বানায়। শোনো — ঢেউ কথা বলে। শান্ত মুহূর্ত। ভালো বন্ধুদের সাথে সাগরও ঘরের মতো লাগে। "ছুটি ছোট," নাদিয়া বলে, "তবে এই মুহূর্ত হৃদয়ে দীর্ঘ।"',
    tip: "চোখ বন্ধ করে ঢেউয়ের শব্দ কল্পনা কর — ইংরেজিতে ৩ বাক্যে লেখো।",
  },

  "helper-verbs": {
    themeId: "helper-verbs",
    title: "আম্মার তালিকা",
    titleEn: "Amma's List",
    en: 'Amma has a long list for Rafi. "You must sleep early," she says. "You cannot stay up late." Rafi laughs. "I can try, Amma." "You have to bring milk from the shop." "Ok, let me try now." He can hear the clock — six o\'clock already. "I could go faster," he says, "but the road is busy." "Just be careful," Amma says. "Do not stop for chocolate." He nods. "I need to keep my promise." On the way he must not forget the salt. "Get some rice too," Amma calls. "Be quick." He returns and sits down. "Have a seat, drink water," Amma says. "You did well." Rafi smiles. "You make it simple, Amma. Even a helper word can carry a whole day. Keep trying, become better — that is your lesson every morning."',
    bn: 'আম্মার রাফির জন্য লম্বা লিস্ট। "তোমাকে তাড়াতাড়ি ঘুমাতে হবে," তিনি বলেন। "দেরি করে জেগে থাকতে পারবে না।" রাফি হাসে। "চেষ্টা করতে পারি, আম্মা।" "তোমাকে দোকান থেকে দুধ আনতে হবে।" "ঠিক আছে, এখনই চেষ্টা করি।" সে ঘড়ি শোনে — ইতিমধ্যে ছয়টা। "দ্রুত যেতে পারতাম," সে বলে, "তবে রাস্তা ব্যস্ত।" "শুধু সাবধান হও," আম্মা বলেন। "চকলেটের জন্য থেমো না।" সে মাথা নাড়ে। "প্রতিশ্রুতি রাখতে হবে।" যাওয়ার পথে লবণ ভুলো না। "একটু চাল-ও এনো," আম্মা ডাকেন। "তাড়াতাড়ি।" ফিরে সে বসে পড়ে। "বসো, পানি খাও," আম্মা বলেন। "তুমি ভালো করেছ।" রাফি হাসে। "তুমি সহজ কর, আম্মা। এমনকি helper শব্দও পুরো একটা দিন বহন করতে পারে। চেষ্টা চালিয়ে যাও, উন্নত হও — এটাই তোমার প্রতিদিনের পাঠ।"',
    tip: "প্রতিদিন ৩টা helper (can, must, have to) দিয়ে বাক্য বানাও।",
  },

  "days-week": {
    themeId: "days-week",
    title: "রাফির সাপ্তাহিক ছক",
    titleEn: "Rafi's Weekly Plan",
    en: 'Rafi looks at the calendar today. It is Sunday, six o\'clock in the morning. "On Tuesday I have a maths test," he says. "On Wednesday, Nadia and I go to the market. Thursday is half day. Saturday is my weekend, so I sleep late." Amma smiles. "You said the same last week!" Rafi laughs. "I still want to sleep more. Yesterday I woke up at quarter past nine. Tonight I will try to sleep early. Tomorrow I will start again." Nadia adds, "You will be tired soon. Try twice a week, not every day." Rafi nods. "Next Sunday, a new plan. This one is not ready yet."',
    bn: 'রাফি আজ ক্যালেন্ডার দেখছে। রবিবার, সকাল ছয়টা। "মঙ্গলবার আমার অঙ্ক পরীক্ষা," সে বলে। "বুধবার নাদিয়া আর আমি বাজারে যাব। বৃহস্পতিবার আধা দিন। শনিবার আমার ছুটি, তাই দেরিতে ঘুমাব।" আম্মা হাসেন — "গত সপ্তাহেও একই কথা বলেছিলে!" রাফি হাসে। "এখনো আরো ঘুমাতে চাই। গতকাল সোয়া নয়টায় উঠেছি। আজ রাতে আগে ঘুমাতে চেষ্টা করব। কাল আবার শুরু করব।" নাদিয়া যোগ করে, "শীঘ্রই ক্লান্ত হবে। সপ্তাহে দুইবার চেষ্টা কর, প্রতিদিন না।" রাফি মাথা নাড়ে। "পরের রবিবার, নতুন ছক। এটা এখনো প্রস্তুত না।"',
    tip: "প্রতিটা দিনের নাম বলার সময় নিজের একটা কাজ ভাবো।",
  },

  "numbers-more": {
    themeId: "numbers-more",
    title: "আম্মার হিসাব",
    titleEn: "Amma's Accounts",
    en: 'Amma sits with a small notebook. "Six eggs, seven bananas, nine tomatoes," she counts. "Twelve rupees for milk, thirteen for bread, sixteen for one pair of soap. Twenty for rice." Nadia laughs. "Amma, that is thirty in total. Sixty if you double it. Seventy with the sauce." Amma nods. "Zero mistake, please. Count again." Rafi jumps in — "A billion stars in the sky, but only sixty in your basket!" Amma smiles. "Ten per cent off today. Half the price. The third bag is free." Nadia takes the number seventeen ticket at the counter. "Our seventh visit this month," she says. Amma keeps the receipt with care.',
    bn: 'আম্মা ছোট নোটবই নিয়ে বসেন। "ছয়টা ডিম, সাতটা কলা, নয়টা টমেটো," গোনেন। "দুধ বারো টাকা, রুটি তেরো, এক জোড়া সাবান ষোল। চাল বিশ।" নাদিয়া হাসে। "আম্মা, মোট ত্রিশ। দ্বিগুণ করলে ষাট। সসসহ সত্তর।" আম্মা মাথা নাড়েন। "শূন্য ভুল চাই। আবার গোনো।" রাফি বলে — "আকাশে শতকোটি তারা, আপনার ঝুড়িতে মাত্র ষাট!" আম্মা হাসেন। "আজ দশ শতাংশ ছাড়। অর্ধেক দাম। তৃতীয় ব্যাগ ফ্রি।" নাদিয়া কাউন্টারে সতেরো নম্বর টিকিট নেয়। "এই মাসে সপ্তম বার," বলে। আম্মা যত্নে রসিদ রাখেন।',
    tip: "বাজারে গেলে ইংরেজিতে গোনার চেষ্টা কর।",
  },

  pronouns: {
    themeId: "pronouns",
    title: "নাদিয়ার পরিচয়",
    titleEn: "Nadia's Introduction",
    en: 'Nadia points at each person. "I am Nadia. He is Rafi, my brother. She is my mother. We are one family. They are our cousins from Sylhet. My father is at work. Your house is close, so come often." Karim laughs. "Us? Yes, we will come." "Their car is red, our car is blue. His bag is heavy, her bag is small. This pen is mine. That book is hers. The cat lost its toy under the bed." Amma smiles. "You did it yourself, Nadia. Rafi cooked himself yesterday, and they cleaned themselves after. Help yourself to some tea, Karim." Nadia grins — one sentence, twenty pronouns, one family.',
    bn: 'নাদিয়া একজন একজন দেখিয়ে বলে — "আমি নাদিয়া। সে আমার ভাই রাফি। উনি আমার মা। আমরা এক পরিবার। তারা সিলেটের কাজিন। আমার বাবা কাজে। তোমার বাসা কাছে, তাই ঘন ঘন এসো।" কারিম হাসে। "আমাদের? হ্যাঁ, আসব।" "তাদের গাড়ি লাল, আমাদের নীল। তার (ছেলে) ব্যাগ ভারী, তার (মেয়ে) ব্যাগ ছোট। এই কলম আমার। ঐ বই তার। বিড়াল খাটের নিচে খেলনা হারিয়েছে।" আম্মা হাসেন। "নাদিয়া, তুমি নিজে করেছ। রাফি গতকাল নিজেই রেঁধেছে, ওরা নিজেরাই পরে পরিষ্কার হয়েছে। কারিম, নিজে চা নাও।" নাদিয়া হাসে — এক বাক্যে বিশটা সর্বনাম, এক পরিবার।',
    tip: "আয়নার সামনে নিজেই সব সর্বনাম বলো।",
  },

  "question-words": {
    themeId: "question-words",
    title: "একটা ছবির অনেক প্রশ্ন",
    titleEn: "So Many Questions",
    en: 'Nadia holds an old photo. "What is this? Which house? Who is that man? Why is he smiling? Whose child is next to him?" Karim laughs. "So many questions!" "That is our grandfather. This is the old Sylhet house. These are cousins, those are neighbours. Some are here, any that stayed — none really left. Both my parents came that day. All of them wore white." "Anything else?" Nadia asks. "Yes," Karim says. "The same day, another storm came. The other side of the yard was wet. Bigger than today\'s storm." Somebody knocks — Amma with tea. "Who is at the door?" Nadia calls. "Only me," Amma laughs.',
    bn: 'নাদিয়া একটা পুরানো ছবি ধরে। "এটা কী? কোন বাসা? ঐ লোকটা কে? কেন হাসছেন? তার পাশে কার বাচ্চা?" কারিম হাসে। "এত প্রশ্ন!" "উনি আমাদের দাদা। এটা সিলেটের পুরানো বাসা। এগুলো কাজিন, ওগুলো প্রতিবেশী। কিছু এখানে আছে, যারা ছিল — কেউই আসলে চলে যায়নি। সেদিন আমার দুইজন মা-বাবাই এসেছিলেন। সবাই সাদা পরেছিল।" "আর কিছু?" নাদিয়া জিজ্ঞেস করে। "হ্যাঁ," কারিম বলে। "একই দিন আরেকটা ঝড় এসেছিল। উঠোনের অন্য পাশ ভেজা ছিল। আজকের চেয়ে বড়।" কেউ দরজায় নক করে — চা নিয়ে আম্মা। "দরজায় কে?" নাদিয়া ডাকে। "শুধু আমি," আম্মা হাসেন।',
    tip: "প্রতিটা প্রশ্নবাচক শব্দ দিয়ে একটা করে বাক্য বানাও।",
  },

  restaurant: {
    themeId: "restaurant",
    title: "নিউমার্কেটের রেস্টুরেন্ট",
    titleEn: "New Market Restaurant",
    en: 'Rafi and Karim sit at a small restaurant near New Market. A polite waiter brings the menu. "One chicken sandwich, one salad, one hot soup," Rafi orders. Karim points. "Add potato, tomato, some sauce and black pepper, please." The waiter smiles. "Anything to drink?" "Cold lemon water, no wine." The plate arrives — spicy but delicious. "Taste the soup," Karim says. Rafi laughs, "Not too spicy for me." For dessert they share one ice cream. "Bill, please," Karim calls. The waiter brings the bill. Karim leaves a small tip. Rafi says, "Next Friday, same restaurant, same plate." Karim nods — a good meal is a small celebration.',
    bn: 'রাফি আর কারিম নিউমার্কেটের কাছে ছোট রেস্টুরেন্টে বসে। ভদ্র ওয়েটার মেনু আনে। "একটি চিকেন স্যান্ডউইচ, একটা সালাদ, গরম স্যুপ," রাফি অর্ডার দেয়। কারিম দেখায়। "আলু, টমেটো, একটু সস আর গোলমরিচ যোগ করুন।" ওয়েটার হাসে। "পান কিছু?" "ঠান্ডা লেবু-পানি, ওয়াইন না।" প্লেট আসে — ঝাল কিন্তু সুস্বাদু। "স্যুপটা চাখো," কারিম বলে। রাফি হাসে, "আমার জন্য বেশি ঝাল না।" মিষ্টান্নে একটা আইসক্রিম ভাগ করে। "বিল দিন," কারিম ডাকে। ওয়েটার বিল আনে। কারিম ছোট টিপ রাখে। রাফি বলে, "পরের শুক্রবার, একই রেস্টুরেন্ট, একই প্লেট।" কারিম মাথা নাড়ে।',
    tip: "প্রিয় খাবারের নাম ইংরেজিতে অর্ডার দেওয়ার প্র্যাকটিস কর।",
  },

  media: {
    themeId: "media",
    title: "শুক্রবার রাতের সিনেমা",
    titleEn: "Friday Movie Night",
    en: 'It is a rainy Friday night. The family sits before the old television. Nadia changes the channel. "This show is boring," she says. Rafi shouts, "Wait — my favorite actor!" On the stage, a young singer with a small band starts a slow song. "He is a movie star," Nadia says. "I am a big fan." Amma turns down the radio in the kitchen. Abba reads a short review in the paper. "A new drama tomorrow," he says, "tickets are cheap." The last scene is sad — a long quiet moment, no music. Nadia wipes her eyes. "Comedy next time," Amma decides. Grandmother laughs. "A story is a soft way to feel life."',
    bn: 'বৃষ্টির শুক্রবার রাত। পরিবার পুরানো টেলিভিশনের সামনে বসে। নাদিয়া চ্যানেল বদলায়। "এই শো বোরিং," বলে। রাফি চিৎকার করে, "দাঁড়াও — আমার প্রিয় অভিনেতা!" মঞ্চে ছোট এক ব্যান্ডের সাথে তরুণ এক গায়ক ধীর গান শুরু করে। "সে মুভি তারকা," নাদিয়া বলে। "আমি বড় ভক্ত।" আম্মা রান্নাঘরে রেডিও কমিয়ে দেন। আব্বা কাগজে ছোট রিভিউ পড়েন। "কাল নতুন নাটক," বলেন, "টিকিট সস্তা।" শেষ দৃশ্য দুঃখের — লম্বা শান্ত মুহূর্ত, কোনো সঙ্গীত নেই। নাদিয়া চোখ মোছে। "পরের বার কমেডি," আম্মা ঠিক করেন। দাদি হাসেন — "গল্প জীবনকে অনুভব করার নরম পথ।"',
    tip: "প্রিয় সিনেমার ছোট রিভিউ ইংরেজিতে লেখো।",
  },

  "school-subjects": {
    themeId: "school-subjects",
    title: "রাফির ক্লাস রুটিন",
    titleEn: "Rafi's Class Routine",
    en: 'Rafi opens his class routine on Sunday. "Science first, then mathematics, then history." He turns the page. "Biology on Tuesday, physics on Wednesday. Maths class is long." His favorite subject is science — he wants to be a scientist one day. "Spelling on Thursday," he reads. "Write a short essay of one paragraph — twelve sentences." The topic is "My Family." He opens to chapter three. "A small test on the last page," the teacher said. Rafi practises every day. "Practice is the true teacher," Amma says. Nadia adds, "Reading opens the mind." Rafi smiles — reading, writing, spelling, one page at a time.',
    bn: 'রাফি রবিবার ক্লাস রুটিন খোলে। "প্রথমে বিজ্ঞান, তারপর গণিত, তারপর ইতিহাস।" পৃষ্ঠা উল্টায়। "মঙ্গলবার জীববিজ্ঞান, বুধবার পদার্থবিজ্ঞান। অঙ্ক ক্লাস লম্বা।" প্রিয় বিষয় বিজ্ঞান — একদিন বিজ্ঞানী হতে চায়। "বৃহস্পতিবার বানান," পড়ে। "এক অনুচ্ছেদের ছোট রচনা লেখো — বারো বাক্য।" বিষয় "আমার পরিবার।" তৃতীয় অধ্যায় খোলে। "শেষ পৃষ্ঠায় ছোট পরীক্ষা," শিক্ষক বলেছিলেন। রাফি প্রতিদিন অনুশীলন করে। "অনুশীলনই আসল শিক্ষক," আম্মা বলেন। নাদিয়া যোগ করে, "পড়া মন খোলে।" রাফি হাসে।',
    tip: "প্রতিটা বিষয়ের নাম ক্লাসরুটিনে ইংরেজিতে লেখো।",
  },

  "feelings-more": {
    themeId: "feelings-more",
    title: "নাদিয়ার সপ্তাহের ডায়েরি",
    titleEn: "Nadia's Weekly Diary",
    en: "Sunday — I feel amazed by a wonderful sunset. Monday — the bus is late and I feel annoyed. Tuesday — Amma is cheerful, she cooks my favorite pitha. Wednesday — a brave girl in class helps a scared child. Thursday — I feel lucky, a lovely surprise from Abba. Friday — I am pleased with my clever answer. Saturday — I made a stupid mistake, felt worse than yesterday, then worst at night. Sunday again — I sit quiet and relax. A polite smile. A perfect calm. Not lazy, not unhappy — just still. A terrible week can turn into a lovely one, if you stay kind to yourself.",
    bn: "রবিবার — এক চমৎকার সূর্যাস্তে অবাক। সোমবার — বাস দেরি, বিরক্ত। মঙ্গলবার — আম্মা প্রফুল্ল, প্রিয় পিঠা রান্না। বুধবার — এক সাহসী মেয়ে ক্লাসে ভীত এক শিশুকে সাহায্য করে। বৃহস্পতিবার — নিজেকে ভাগ্যবান লাগে, আব্বার এক মনোহর সারপ্রাইজ। শুক্রবার — চতুর উত্তরে সন্তুষ্ট। শনিবার — বোকা ভুল, গতকালের চেয়ে খারাপ, রাতে সবচেয়ে খারাপ। আবার রবিবার — শান্ত বসে আরাম। ভদ্র হাসি। নিখুঁত শান্তি। অলস না, অসুখী না — শুধু স্থির। ভয়ানক এক সপ্তাহও মনোহর হতে পারে, যদি নিজের প্রতি দয়ালু থাকো।",
    tip: "প্রতিদিন একটা করে আবেগ ইংরেজিতে ডায়েরিতে লেখো।",
  },

  hospital: {
    themeId: "hospital",
    title: "আব্বার চেক-আপ",
    titleEn: "Abba's Check-up",
    en: 'Abba feels a small pain in his chest. Amma calls the hospital. A kind nurse says, "Come at ten." Rafi goes with him. The doctor asks, "Any injury? Any illness before?" "No, only a little pain," Abba says. The nurse takes a blood test. "Breathe slowly. Take a deep breath." Abba breathes. The doctor listens to his chest, checks his ankle, feels the bone. "Your skin is dry, your brain is tired. Sleep more. No sick food." A short medical report follows. "See the dentist next week too," she adds. Amma is at home, checking a mirror by the door. "Every memory is medicine," she says. "Come home safe."',
    bn: 'আব্বার বুকে সামান্য ব্যথা। আম্মা হাসপাতালে ফোন করেন। ভদ্র নার্স বলেন, "দশটায় আসুন।" রাফি সঙ্গে যায়। ডাক্তার জিজ্ঞেস করেন, "কোনো আঘাত? আগে কোনো অসুস্থতা?" "না, শুধু একটু ব্যথা," আব্বা বলেন। নার্স রক্ত পরীক্ষা নেন। "ধীরে নিঃশ্বাস নিন। গভীর নিঃশ্বাস।" আব্বা নিঃশ্বাস নেন। ডাক্তার বুক শোনেন, গোড়ালি দেখেন, হাড় স্পর্শ করেন। "চামড়া শুকনো, মস্তিষ্ক ক্লান্ত। বেশি ঘুমান। অসুস্থ খাবার না।" ছোট মেডিকেল রিপোর্ট। "পরের সপ্তাহে দন্তচিকিৎসক দেখান," যোগ করেন। আম্মা বাসায় দরজার আয়না দেখেন। "প্রতিটা স্মৃতি ঔষধ," বলেন। "সুস্থ ফিরে এসো।"',
    tip: "শরীরের অংশ ছুঁয়ে ইংরেজিতে নাম বলো।",
  },

  "nature-more": {
    themeId: "nature-more",
    title: "সুন্দরবনের সকাল",
    titleEn: "Sundarbans Morning",
    en: 'The family reaches Sundarbans at dawn. Cool air, fresh breath. "Our climate is changing," Abba says. "Save the environment. Dhaka has too much pollution." A long wave breaks against the coast. Nadia sees a huge rock in the water. "That planet, our home," she whispers to the ocean. A wild bird flies over the forest. There is no ice, no snow — only green ground, a small hole in the wet mud where a crab hides. "A storm came last night," the guide says. "Look at the sky, calm now." Karim points to a small valley. "Not a desert, not a city — real space. Real nature." A long, quiet moment. Everyone breathes.',
    bn: 'ভোরে পরিবার সুন্দরবনে পৌঁছায়। শীতল বায়ু, তাজা নিঃশ্বাস। "আমাদের জলবায়ু বদলাচ্ছে," আব্বা বলেন। "পরিবেশ রক্ষা কর। ঢাকায় দূষণ অনেক।" উপকূলে লম্বা এক ঢেউ ভাঙে। নাদিয়া পানিতে বিশাল এক পাথর দেখে। "ঐ গ্রহ, আমাদের ঘর," মহাসাগরকে বলে। বনের উপর বন্য এক পাখি উড়ে। বরফ নেই, তুষার নেই — শুধু সবুজ মাটি, ভেজা কাদায় ছোট গর্তে কাঁকড়া লুকিয়ে। "গত রাতে ঝড় ছিল," গাইড বলে। "আকাশ দেখো, এখন শান্ত।" কারিম ছোট উপত্যকা দেখায়। "মরুভূমি না, শহর না — আসল জায়গা। আসল প্রকৃতি।" লম্বা এক শান্ত মুহূর্ত।',
    tip: "প্রকৃতিতে গেলে প্রতিটা জিনিসের ইংরেজি নাম মনে করো।",
  },

  "shopping-more": {
    themeId: "shopping-more",
    title: "সুপারমার্কেটের সেল",
    titleEn: "Supermarket Sale",
    en: 'Saturday shopping. Amma and Nadia enter a new supermarket. A big advertisement on the wall — "Winter Sale! Ten per cent off." "That ad is huge," Nadia laughs. Amma checks a famous brand of oil. "Good quality, small quantity. A cheap offer today." A regular customer greets Amma. Nadia picks two items and packs the bag. At the counter Amma pays cash. The girl gives back a few coins as change. "Keep the receipt," Amma reminds. "For any refund." On the way home Nadia says, "Everything is expensive these days." Amma smiles. "A good deal is a small victory. Weekend shopping done, one product at a time."',
    bn: 'শনিবার কেনাকাটা। আম্মা আর নাদিয়া নতুন সুপারমার্কেটে ঢোকেন। দেয়ালে বড় বিজ্ঞাপন — "শীতের সেল! দশ শতাংশ ছাড়।" "অ্যাডটা বিশাল," নাদিয়া হাসে। আম্মা এক বিখ্যাত ব্র্যান্ডের তেল দেখেন। "ভালো মান, কম পরিমাণ। আজ সস্তা অফার।" এক নিয়মিত গ্রাহক আম্মাকে সালাম দেন। নাদিয়া দুই আইটেম নিয়ে ব্যাগ প্যাক করে। কাউন্টারে আম্মা নগদ পরিশোধ করেন। মেয়েটি কিছু মুদ্রা খুচরা ফেরত দেয়। "রসিদ রাখো," আম্মা মনে করান। "যদি রিফান্ড লাগে।" বাসায় ফিরে নাদিয়া বলে, "আজকাল সব দামি।" আম্মা হাসেন। "ভালো ডিল ছোট বিজয়। সাপ্তাহিক কেনাকাটা শেষ, এক এক পণ্যে।"',
    tip: "কেনাকাটার সময় প্রতিটা জিনিসের ইংরেজি নাম বলো।",
  },

  "travel-more": {
    themeId: "travel-more",
    title: "বিদেশের প্রথম উড়ান",
    titleEn: "First Flight Abroad",
    en: 'Abba plans a family trip abroad. Everyone is a passenger for the first time. Amma packs the small bags — passport, ticket, map. At the airport a friendly guide helps them. "This airline is cheap but good," Abba says. "Arrival is at nine." A young traveller stands next to Nadia. "My first vacation too," she smiles. They walk to platform two and take the airport bus. On the plane Nadia looks out the window — a night flight, small lights below. "Our hotel is close to the station," Abba says. "A short tour tomorrow, then the coast." Tourism helps the city, and this tourist family will visit again. A trip is a moving story.',
    bn: 'আব্বা পরিবারের জন্য বিদেশ ভ্রমণ প্ল্যান করেন। সবাই প্রথমবার যাত্রী। আম্মা ছোট ব্যাগ প্যাক করেন — পাসপোর্ট, টিকিট, মানচিত্র। বিমানবন্দরে বন্ধুবৎসল এক গাইড সাহায্য করেন। "এই বিমান সংস্থা সস্তা কিন্তু ভালো," আব্বা বলেন। "আগমন নয়টায়।" এক তরুণ ভ্রমণকারী নাদিয়ার পাশে দাঁড়ায়। "আমারও প্রথম ছুটি," হাসে। তারা প্ল্যাটফর্ম দুইয়ে হেঁটে এয়ারপোর্ট বাস নেয়। বিমানে নাদিয়া জানালা দিয়ে দেখে — রাতের উড়ান, নিচে ছোট আলো। "আমাদের হোটেল স্টেশনের কাছে," আব্বা বলেন। "কাল ছোট ট্যুর, তারপর উপকূল।" পর্যটন শহরের উপকার করে, এই পর্যটক পরিবার আবার আসবে।',
    tip: "নিজের বাসা থেকে বিমানবন্দর পর্যন্ত পথের প্রতিটা ধাপ ইংরেজিতে বলো।",
  },

  "tech-more": {
    themeId: "tech-more",
    title: "নতুন ল্যাপটপ",
    titleEn: "The New Laptop",
    en: 'Karim brings a new laptop to Rafi. "A small device but very useful," he says. "Digital clock, big screen, quiet keyboard." He plugs the electric cable. "Electricity is fine today, no cuts." Rafi opens the internet. "Slow network," he sighs. Karim smiles. "Wait, I will download the file. Send me an email if any problem." A quick warning appears — "Virus found in this web page." Karim closes it. "Careful, one bad click and the laptop is sick." Rafi tries the printer — it prints one clean page. Nadia comes with her smartphone. "My tablet is old, but online it still works." A small programme starts on the screen — a language app. Rafi laughs, "Even tech teaches me English."',
    bn: 'কারিম রাফির জন্য নতুন ল্যাপটপ আনে। "ছোট যন্ত্র কিন্তু খুব কাজের," বলে। "ডিজিটাল ঘড়ি, বড় স্ক্রিন, শান্ত কীবোর্ড।" বৈদ্যুতিক তার লাগায়। "আজ বিদ্যুৎ ঠিক আছে, কাট নেই।" রাফি ইন্টারনেট খোলে। "ধীর নেটওয়ার্ক," দীর্ঘশ্বাস। কারিম হাসে। "অপেক্ষা কর, ফাইল ডাউনলোড করি। কোনো সমস্যা হলে ইমেইল কর।" এক দ্রুত সতর্কতা আসে — "এই ওয়েব পেজে ভাইরাস।" কারিম বন্ধ করে। "সাবধান, এক খারাপ ক্লিকে ল্যাপটপ অসুস্থ।" রাফি প্রিন্টার চালায় — এক পরিষ্কার পৃষ্ঠা ছাপে। নাদিয়া তার স্মার্টফোন নিয়ে আসে। "ট্যাবলেটটা পুরানো, তবু অনলাইনে চলে।" স্ক্রিনে ছোট এক কার্যক্রম শুরু হয় — এক ভাষা অ্যাপ। রাফি হাসে, "প্রযুক্তিও ইংরেজি শেখায়।"',
    tip: "মোবাইলের প্রতিটা বাটনের নাম ইংরেজিতে মনে রাখো।",
  },

  vehicles: {
    themeId: "vehicles",
    title: "কারিমের মোটরসাইকেল",
    titleEn: "Karim's Motorcycle",
    en: 'Karim\'s red motorcycle stops on the highway. A big lorry passes, then a small van. "The engine is dead," Karim says. Rafi sits on the seat. "Petrol?" "Half a tank. Not that." A passing driver waves. "Do you need help?" Rafi asks. "Yes, please." The kind driver has a small tool bag. He checks the wheel, then the brake. "Your engine is hot. Wait ten minutes." Above, a pilot\'s plane cuts the sky. "One day I will drive on a smooth road, no traffic, no horn," Karim dreams. Nadia calls — "Come back, dinner is ready." They park the motorcycle and take a rickshaw home. "Every vehicle has a story," Rafi laughs.',
    bn: 'কারিমের লাল মোটরসাইকেল হাইওয়েতে থামে। বড় এক লরি যায়, তারপর ছোট ভ্যান। "ইঞ্জিন মৃত," কারিম বলে। রাফি আসনে বসে। "পেট্রল?" "অর্ধেক ট্যাংক। ওটা না।" এক যাওয়া চালক হাত নাড়েন। "সাহায্য লাগবে?" রাফি জিজ্ঞেস করে। "হ্যাঁ, দিন।" ভদ্র চালকের ছোট টুল ব্যাগ আছে। চাকা দেখেন, তারপর ব্রেক। "ইঞ্জিন গরম। দশ মিনিট অপেক্ষা কর।" উপরে পাইলটের প্লেন আকাশ কাটে। "একদিন আমি মসৃণ রাস্তায় চালাব, যানজট নেই, হর্ন নেই," কারিম স্বপ্ন দেখে। নাদিয়া ডাকে — "ফিরে এসো, খাবার প্রস্তুত।" মোটরসাইকেল পার্ক করে রিকশা নেয়।',
    tip: "রাস্তায় দেখা প্রতিটা যানের নাম ইংরেজিতে বলার প্র্যাকটিস কর।",
  },

  wedding: {
    themeId: "wedding",
    title: "ফয়সালের বিয়ে",
    titleEn: "Faisal's Wedding",
    en: 'Sylhet, evening. Faisal is the bride\'s partner today — he will marry Rima. The couple looks calm. Many guests come — some from Dhaka, some from Chittagong. "A big celebration," Amma says. The ceremony is short but sweet. A cheerful dance starts. Karim gives Rima a gold ring. Nadia carries a small gift. "A pink invitation card came last week," she remembers. Amma is the kind host tonight. "A big promise, a bright future," Grandfather says softly. The couple exchanges a soft kiss on the hand. "He is not single anymore. Now he is married," Rafi laughs. A friend, once divorced, smiles too. A wedding is a party, but also a beginning.',
    bn: 'সিলেট, সন্ধ্যা। ফয়সাল আজ কনের সঙ্গী — রীমাকে বিয়ে করবে। দম্পতি শান্ত দেখাচ্ছে। অনেক অতিথি — কিছু ঢাকা থেকে, কিছু চট্টগ্রাম থেকে। "বড় উদযাপন," আম্মা বলেন। অনুষ্ঠান ছোট কিন্তু মিষ্টি। প্রফুল্ল নাচ শুরু হয়। কারিম রীমাকে সোনার আংটি দেয়। নাদিয়া ছোট উপহার নিয়ে যায়। "গত সপ্তাহে গোলাপি নিমন্ত্রণ কার্ড এসেছিল," মনে পড়ে। আম্মা আজ ভদ্র আয়োজক। "বড় প্রতিশ্রুতি, উজ্জ্বল ভবিষ্যৎ," দাদা মৃদু বলেন। দম্পতি হাতে মৃদু চুম্বন বিনিময় করে। "সে আর অবিবাহিত না। এখন বিবাহিত," রাফি হাসে। এক তালাকপ্রাপ্ত বন্ধুও হাসেন।',
    tip: "পরিবারের বিয়ের ছবিতে ইংরেজিতে ক্যাপশন লেখো।",
  },

  office2: {
    themeId: "office2",
    title: "আব্বার সোমবার সকাল",
    titleEn: "Abba's Monday Morning",
    en: 'Monday, nine o\'clock. Abba enters the office. His boss is fair, his colleagues are kind. "A new client at ten," the manager says. Abba checks his schedule — a busy day. First a short meeting, then a new project report. "An appointment with the finance department at noon," the staff reminds. A young employee needs help. "Your task is hard, but you can do it," Abba says. The employer visits the factory floor. "A good career takes years," Abba tells him. On his desk, one new assignment. He manages his time carefully — professional work, small breaks, honest words. At six he closes the file. "Home now," he thinks. "Every meeting is one more page of the story."',
    bn: 'সোমবার, নয়টা। আব্বা অফিসে ঢোকেন। বস ন্যায়পরায়ণ, সহকর্মীরা ভদ্র। "দশটায় নতুন মক্কেল," ব্যবস্থাপক বলেন। আব্বা সময়সূচি দেখেন — ব্যস্ত দিন। প্রথমে ছোট সভা, তারপর নতুন প্রকল্প রিপোর্ট। "দুপুরে অর্থ বিভাগের সাথে অ্যাপয়েন্টমেন্ট," কর্মী মনে করান। এক তরুণ কর্মচারীর সাহায্য দরকার। "তোমার কাজ কঠিন, কিন্তু পারবে," আব্বা বলেন। নিয়োগকর্তা কারখানার তলায় আসেন। "ভালো পেশা বছর লাগে," আব্বা বলেন। টেবিলে এক নতুন কার্যভার। সময় সাবধানে সামলান — পেশাদার কাজ, ছোট বিরতি, সৎ কথা। ছয়টায় ফাইল বন্ধ করেন।',
    tip: "নিজের একটা কল্পিত অফিসের সময়সূচি ইংরেজিতে লেখো।",
  },

  "verbs-do2": {
    themeId: "verbs-do2",
    title: "রাফির মঙ্গলবারের কাজ",
    titleEn: "Rafi's Tuesday Tasks",
    en: 'Rafi wakes up early. "I must accept my routine," he says. He wants to achieve one small thing today. First he admits yesterday\'s mistake — he did not prepare well. Amma allows him extra tea. He tries not to argue with Nadia. "Do not avoid the hard work," she says. He arranges his books, attends the morning class on time. The teacher announces a new topic. Rafi raises his hand. "May I add one point?" "Yes, apply what you learn," the teacher smiles. After class Rafi pushes a heavy door open for a friend, pulls a small brother\'s bag. "Reach the top slowly," Amma always says. "Protect your time, provide your best. Advise less, act more."',
    bn: 'রাফি সকালে ওঠে। "আমাকে রুটিন মেনে নিতে হবে," বলে। আজ একটা ছোট কিছু অর্জন করতে চায়। প্রথমে গতকালের ভুল স্বীকার করে — ভালো প্রস্তুতি নেয়নি। আম্মা বাড়তি চা অনুমতি দেন। নাদিয়ার সাথে তর্ক না করার চেষ্টা। "কঠিন কাজ এড়িয়ো না," সে বলে। বই সাজিয়ে সময়মতো সকালের ক্লাসে উপস্থিত হয়। শিক্ষক নতুন বিষয় ঘোষণা করেন। রাফি হাত উঠায়। "একটা যোগ করি?" "হ্যাঁ, যা শিখেছ তা প্রয়োগ কর," শিক্ষক হাসেন। ক্লাস শেষে বন্ধুর জন্য ভারী দরজা ঠেলে খোলে, ছোট ভাইয়ের ব্যাগ টানে। "শীর্ষে ধীরে পৌঁছাও," আম্মা সবসময় বলেন।',
    tip: "প্রতিটা ক্রিয়া দিয়ে একটা করে ছোট বাক্য লেখো।",
  },

  sizes: {
    themeId: "sizes",
    title: "নাদিয়ার নতুন ঘর",
    titleEn: "Nadia's New Room",
    en: 'Nadia measures her new room. "A huge window, a wide bed, a narrow door," she says. The book on the table is thick. Her diary is thin. The road outside is straight and flat. The lake near the park is deep and round. Rafi is tall, so he touches the top of the shelf. Amma says, "Your bag is too heavy. Take out the empty box." Nadia checks the size of her curtain. "Right shape, right height, right weight." The middle of the room is empty. On the right side, a small chair. On the left side, a lamp. "A tiny room, but every corner has a purpose," she smiles.',
    bn: 'নাদিয়া নতুন ঘর মাপে। "বিশাল জানালা, প্রশস্ত বিছানা, সরু দরজা," বলে। টেবিলের বইটা মোটা। ডায়েরিটা পাতলা। বাইরের রাস্তা সোজা ও সমতল। পার্কের পাশের হ্রদ গভীর ও গোল। রাফি লম্বা, তাই শেলফের শীর্ষ ছুঁতে পারে। আম্মা বলেন, "তোমার ব্যাগ খুব ভারী। খালি বাক্সটা বের কর।" নাদিয়া পর্দার আকার দেখে। "সঠিক আকৃতি, সঠিক উচ্চতা, সঠিক ওজন।" ঘরের মাঝ খালি। ডান পাশে ছোট চেয়ার। বাম পাশে বাতি। "ছোট ঘর, কিন্তু প্রতিটা কোণের একটা উদ্দেশ্য," হাসে।',
    tip: "নিজের ঘরের প্রতিটা জিনিস মেপে ইংরেজিতে বর্ণনা কর।",
  },

  "time-adv": {
    themeId: "time-adv",
    title: "আম্মার সকাল",
    titleEn: "Amma's Morning",
    en: 'Amma is always up early. She has already boiled the water. "Sometimes I sleep late, but usually not," she smiles. Recently she started walking in the park. Suddenly one day the sky was dark. Immediately she came home. Finally the rain stopped. Nadia moves quickly, Rafi walks slowly. "You are always late," Amma calls. "I am nearly ready," Rafi says. Almost seven — school time. "Talk quietly, not loudly," Amma reminds. Sadly, Abba has to leave early today. Happily, they eat together tomorrow. "Certainly," Amma says. "A calm morning is the whole day\'s power. Normally quiet, sometimes busy, but never rushed."',
    bn: 'আম্মা সবসময় আগেভাগে ওঠেন। ইতিমধ্যে পানি ফুটিয়েছেন। "কখনো কখনো দেরিতে ঘুমাই, সাধারণত না," হাসেন। সম্প্রতি পার্কে হাঁটা শুরু করেছেন। হঠাৎ একদিন আকাশ কালো হলো। অবিলম্বে বাসায় এলেন। অবশেষে বৃষ্টি থামল। নাদিয়া দ্রুত চলে, রাফি ধীরে হাঁটে। "তুমি সর্বদা দেরি কর," আম্মা ডাকেন। "প্রায় প্রস্তুত," রাফি বলে। প্রায় সাতটা — স্কুলের সময়। "নীরবে কথা বলো, উচ্চস্বরে না," মনে করান। দুঃখজনকভাবে আব্বাকে আজ আগে বেরোতে হবে। সুখে কাল একসাথে খাব। "নিশ্চয়ই," আম্মা বলেন। "শান্ত সকাল পুরো দিনের শক্তি।"',
    tip: "সকালের প্রতিটা কাজ ইংরেজি সময়-শব্দে বলো।",
  },

  "kitchen-tools": {
    themeId: "kitchen-tools",
    title: "আম্মার রান্নার ড্রয়ার",
    titleEn: "Amma's Kitchen Drawer",
    en: 'Amma opens the kitchen drawer one by one. "A clean spoon, a small fork, a sharp knife," she counts. On the shelf — the rice cooker, a hot oven, a full fridge. In the cupboard, cups and glasses. "Bring the pan," she calls Nadia. "And the kettle for tea." A wooden tray holds one glass of water. A big jug of milk stands in the corner. A jar of honey is behind the lamp. "Put this in the bin," Amma says, pointing at old paper. Nadia washes a soup bowl and a small cup. "A clean kitchen is a happy kitchen." Every tool has a home. Every home has a tool.',
    bn: 'আম্মা রান্নাঘরের ড্রয়ার একে একে খোলেন। "পরিষ্কার চামচ, ছোট কাঁটাচামচ, ধারালো ছুরি," গোনেন। শেলফে — ভাত কুকার, গরম ওভেন, ভরা ফ্রিজ। আলমারিতে কাপ ও গ্লাস। "কড়াইটা আনো," নাদিয়াকে ডাকেন। "চায়ের কেটলিও।" কাঠের ট্রেতে এক গ্লাস পানি। কোণে বড় দুধের জগ। বাতির পিছনে মধুর বয়াম। "এটা ঝুড়িতে ফেলো," পুরানো কাগজ দেখিয়ে বলেন। নাদিয়া স্যুপের বাটি আর ছোট কাপ ধোয়। "পরিষ্কার রান্নাঘর সুখী রান্নাঘর।" প্রতিটা যন্ত্রের ঘর আছে।',
    tip: "রান্নাঘরে গেলে প্রতিটা জিনিস ছুঁয়ে ইংরেজি নাম বলো।",
  },

  "sports-more": {
    themeId: "sports-more",
    title: "কারিমের স্পোর্টস ক্লাব",
    titleEn: "Karim's Sports Club",
    en: 'Saturday morning. Karim goes to the sports club. Some boys play football, some play baseball, some tennis, some hockey. A tall boy plays basketball. Golf is on the other side — quiet. Karim\'s cousin loves soccer. "Not skiing here — no snow," he laughs. Rafi is swimming; Nadia goes running. Faisal is sailing on the small pond. "Cycle every day," the coach says. A champion competitor stands on the stage. "A big competition next month," the boss announces. "They compete hard, but our team can beat them." Karim smiles. "A close match is the best match." The winner is happy, the loser learns. Sport is a friendly war.',
    bn: 'শনিবার সকাল। কারিম স্পোর্টস ক্লাবে যায়। কিছু ছেলে ফুটবল খেলে, কেউ বেসবল, কেউ টেনিস, কেউ হকি। এক লম্বা ছেলে বাস্কেটবল খেলে। অন্য পাশে গলফ — শান্ত। কারিমের কাজিন সকার ভালোবাসে। "এখানে স্কিইং না — তুষার নেই," হাসে। রাফি সাঁতরাচ্ছে; নাদিয়া দৌড়াচ্ছে। ফয়সাল ছোট পুকুরে নৌচালনা করছে। "প্রতিদিন সাইকেল চালাও," কোচ বলেন। এক চ্যাম্পিয়ন প্রতিযোগী মঞ্চে দাঁড়িয়ে। "পরের মাসে বড় প্রতিযোগিতা," বস ঘোষণা করেন। "তারা শক্তভাবে প্রতিযোগিতা করে, কিন্তু আমাদের দল তাদের হারাতে পারে।" কারিম হাসে।',
    tip: "প্রিয় খেলার নিয়ম ইংরেজিতে সংক্ষেপে বলো।",
  },

  "animals-more": {
    themeId: "animals-more",
    title: "ঢাকা চিড়িয়াখানা",
    titleEn: "Dhaka Zoo",
    en: 'Friday afternoon. The family visits the Dhaka Zoo. "A big elephant first!" Rafi shouts. Nadia points at a small monkey. "Look, a tiny mouse near the fence." A green frog jumps into the pond. On one side — a brown horse, a quiet cow, a white duck, a pink pig. A soft rabbit sleeps in the corner. "Feed the sheep," the keeper says. Karim sees a bear behind glass, a long snake on a rock, a tiny spider on a leaf. Above, a small bird flies. "The royal tiger is next," Amma reads. "A grey wolf, a quick fox, and the busy bee garden after." Every wild animal has its home.',
    bn: 'শুক্রবার বিকেল। পরিবার ঢাকা চিড়িয়াখানায় যায়। "আগে বড় হাতি!" রাফি চিৎকার। নাদিয়া ছোট বানর দেখায়। "বেড়ার কাছে ছোট ইঁদুর।" সবুজ ব্যাঙ পুকুরে লাফায়। এক পাশে — বাদামি ঘোড়া, শান্ত গরু, সাদা হাঁস, গোলাপি শূকর। কোণে নরম খরগোশ ঘুমাচ্ছে। "ভেড়াকে খাওয়াও," রক্ষক বলেন। কারিম কাচের পিছনে ভাল্লুক, পাথরে লম্বা সাপ, পাতায় ছোট মাকড়সা দেখে। উপরে ছোট পাখি ওড়ে। "পরের বার রয়েল বেঙ্গল বাঘ," আম্মা পড়েন। "ধূসর নেকড়ে, দ্রুত শিয়াল, তারপর ব্যস্ত মৌমাছির বাগান।" প্রতিটা বন্য প্রাণীর ঘর আছে।',
    tip: "চিড়িয়াখানার প্রতিটা প্রাণীর নাম ইংরেজিতে মনে রাখো।",
  },

  "describe-people": {
    themeId: "describe-people",
    title: "নাদিয়ার ক্লাস",
    titleEn: "Nadia's Class",
    en: 'Nadia describes her class to Amma. "Rima is tall, with curly hair. Sara has blonde hair — she is pretty. My friend Mim is beautiful and kind. The new boy is handsome but shy. Our teacher is a polite lady with a calm smile. Our headmaster is an old gentleman, always quiet. Some boys are loud, some girls are friendly. Nobody is ugly — that word is unkind." Amma smiles. "A young teenager sees personality first." Nadia laughs. "My best friend has a sweet personality and a big smile. Every face is a story. A kind heart is more beautiful than a pretty face." Amma nods — a good lesson from her daughter.',
    bn: 'নাদিয়া আম্মাকে ক্লাসের বর্ণনা দেয়। "রীমা লম্বা, কোঁকড়ানো চুল। সারার সোনালি চুল — সে সুন্দর। বন্ধু মিম সুন্দরী ও দয়ালু। নতুন ছেলেটি সুদর্শন কিন্তু লাজুক। আমাদের শিক্ষিকা এক ভদ্র মহিলা, শান্ত হাসি। প্রধান শিক্ষক এক বৃদ্ধ ভদ্রলোক, সর্বদা শান্ত। কিছু ছেলে উচ্চ কণ্ঠের, কিছু মেয়ে বন্ধুবৎসল। কেউ কুৎসিত না — ঐ শব্দ নিষ্ঠুর।" আম্মা হাসেন। "তরুণ কিশোরী প্রথমে ব্যক্তিত্ব দেখে।" নাদিয়া হাসে। "সেরা বন্ধুর মিষ্টি ব্যক্তিত্ব ও বড় হাসি। প্রতিটা মুখ গল্প। দয়ালু হৃদয় সুন্দর মুখের চেয়ে সুন্দর।"',
    tip: "প্রিয় বন্ধুর ৩ বাক্যে ইংরেজিতে বর্ণনা লেখো।",
  },

  "weather-more": {
    themeId: "weather-more",
    title: "চার ঋতুর দিন",
    titleEn: "A Day of Four Seasons",
    en: 'Rafi wakes up. The sky is blue, the sunshine soft, the shadow long. "A sunny morning," he thinks. By ten, a grey cloud covers the moon of last night. "Cloudy now." A cold, windy afternoon. "Take an umbrella," Amma calls. Suddenly rain — a rainy hour, wet road, dry leaves floating. The temperature drops. "Thirty degrees to twenty in one day. This season is strange." There is no snow here, but the heat of summer is real. A warm shirt in the evening, a cool glass of water at night. Fog by dawn. "Four seasons in one day," Rafi laughs. Weather is a moody friend.',
    bn: 'রাফি ওঠে। আকাশ নীল, রোদ নরম, ছায়া দীর্ঘ। "রৌদ্রোজ্জ্বল সকাল," ভাবে। দশটার মধ্যে ধূসর মেঘ গত রাতের চাঁদ ঢাকে। "এখন মেঘলা।" শীতল, বাতাসময় বিকেল। "ছাতা নাও," আম্মা ডাকেন। হঠাৎ বৃষ্টি — বৃষ্টিভরা ঘণ্টা, ভেজা রাস্তা, শুকনো পাতা ভাসছে। তাপমাত্রা পড়ে। "ত্রিশ ডিগ্রি থেকে বিশ এক দিনে। এই ঋতু অদ্ভুত।" এখানে তুষার নেই, তবে গ্রীষ্মের গরম আসল। সন্ধ্যায় উষ্ণ শার্ট, রাতে শীতল এক গ্লাস পানি। ভোরে কুয়াশা। "এক দিনে চার ঋতু," রাফি হাসে।',
    tip: "প্রতিদিন সকালে আকাশ দেখে ইংরেজিতে বর্ণনা লেখো।",
  },

  "life-events": {
    themeId: "life-events",
    title: "পারিবারিক ছবির অ্যালবাম",
    titleEn: "The Family Photo Album",
    en: 'Amma opens the old photo album. "This is the birth of your brother. That was a happy childhood." Nadia turns the page. "Your teenage years — you were shy." A picture of grandfather. "He is not here anymore. His death was quiet, but his memory is loud." Rafi points at a wedding photo. "Amma, you were beautiful." Amma smiles. "A young adult full of dreams and hope." Nadia asks, "What about the future?" Amma answers, "Live in the present. Do not forget the past. Grow slowly, become kind. Every moment is a small success. A big achievement starts with a small goal. A quiet ambition. A strong belief. And love — always love."',
    bn: 'আম্মা পুরানো অ্যালবাম খোলেন। "এটা তোমার ভাইয়ের জন্ম। ঐটা সুখী শৈশব।" নাদিয়া পৃষ্ঠা উল্টায়। "তোমার কৈশোরের বছর — তুমি লাজুক ছিলে।" দাদার এক ছবি। "তিনি আর নেই। তার মৃত্যু শান্ত ছিল, কিন্তু স্মৃতি জোরালো।" রাফি বিয়ের ছবি দেখায়। "আম্মা, তুমি সুন্দরী ছিলে।" আম্মা হাসেন। "স্বপ্ন ও আশায় ভরা তরুণ প্রাপ্তবয়স্ক।" নাদিয়া জিজ্ঞেস করে, "ভবিষ্যৎ?" আম্মা উত্তর দেন, "বর্তমানে বাঁচো। অতীত ভুলে যেয়ো না। ধীরে বাড়ো, দয়ালু হও। প্রতিটা মুহূর্ত ছোট সাফল্য। বড় অর্জন ছোট লক্ষ্য দিয়ে শুরু। শান্ত উচ্চাকাঙ্ক্ষা। শক্ত বিশ্বাস। এবং ভালোবাসা — সর্বদা ভালোবাসা।"',
    tip: "নিজের জীবনের ৫টা মুহূর্ত ইংরেজিতে লেখো।",
  },

  "country-places": {
    themeId: "country-places",
    title: "দেয়ালের বড় মানচিত্র",
    titleEn: "The Big Wall Map",
    en: 'Rafi stands before a big map on the wall. "Our country is small," he says, "but every region has a story." Amma points at Dhaka. "Our capital. Your father works here." Nadia points at Sylhet — the hill region in the north. "Grandfather\'s village." Rafi finds Cox\'s Bazar in the south, then the border in the west. "East of Dhaka is the town of Comilla. Karim\'s farm is there." The Padma river cuts the land in the middle. Near the coast, one small island rises like a green pool of trees. "Our world is one big field of villages and towns," Rafi thinks. "Every place has a name, every name has a family."',
    bn: 'রাফি দেয়ালের বড় মানচিত্রের সামনে দাঁড়ায়। "আমাদের দেশ ছোট," বলে, "তবু প্রতিটা অঞ্চলের গল্প আছে।" আম্মা ঢাকা দেখান। "রাজধানী। তোমার বাবা এখানে কাজ করেন।" নাদিয়া সিলেট দেখায় — উত্তরের পাহাড়ি অঞ্চল। "দাদার গ্রাম।" রাফি দক্ষিণে কক্সবাজার, পশ্চিমে সীমান্ত খোঁজে। "ঢাকার পূর্বে কুমিল্লা শহর। কারিমের খামার সেখানে।" পদ্মা নদী মাঝখানে ভূমি কাটে। উপকূলের কাছে ছোট এক দ্বীপ গাছের সবুজ পুকুরের মতো ওঠে। "আমাদের পৃথিবী গ্রাম-শহরের এক বড় মাঠ," রাফি ভাবে। "প্রতিটা জায়গার একটা নাম, প্রতিটা নামের একটা পরিবার।"',
    tip: "নিজের এলাকার মানচিত্র এঁকে ইংরেজিতে দিক-নাম লেখো।",
  },

  "art-crafts": {
    themeId: "art-crafts",
    title: "নাদিয়ার শিল্পের বিকেল",
    titleEn: "Nadia's Art Afternoon",
    en: 'It is Saturday afternoon. Nadia sits in the balcony with paint, brush, and paper. "I want to draw a family picture," she says. Her drawing is soft — a warm colour of yellow and blue. Amma looks at the painting. "You are a real artist." A small photograph of grandfather sits beside her — Nadia is trying to copy his kind face. "A short description under each picture," she plans. Rafi walks in with music. "Piano practice," he says. "A creative day." Karim plays a musical instrument softly. "One day my painting will hang in a gallery," Nadia dreams. "Art is not perfect design; it is honest colour, honest heart."',
    bn: 'শনিবার বিকেল। নাদিয়া ব্যালকনিতে রং, তুলি, কাগজ নিয়ে বসেছে। "পরিবারের ছবি আঁকতে চাই," বলে। তার অঙ্কন নরম — হলুদ ও নীল উষ্ণ রঙ। আম্মা চিত্রকর্ম দেখেন। "তুমি আসল শিল্পী।" পাশে দাদার ছোট আলোকচিত্র — তার দয়ালু মুখ নকল করার চেষ্টা। "প্রতিটা ছবির নিচে ছোট বর্ণনা," পরিকল্পনা। রাফি সঙ্গীত নিয়ে ঢোকে। "পিয়ানো অনুশীলন," বলে। "সৃজনশীল দিন।" কারিম মৃদু এক সাঙ্গীতিক যন্ত্র বাজায়। "একদিন আমার চিত্রকর্ম গ্যালারিতে টাঙানো থাকবে," নাদিয়া স্বপ্ন দেখে। "শিল্প নিখুঁত নকশা না; সৎ রঙ, সৎ হৃদয়।"',
    tip: "প্রিয় একটা ছবি এঁকে ইংরেজিতে ৩ বাক্যে বর্ণনা লেখো।",
  },

  "police-safety": {
    themeId: "police-safety",
    title: "রাতে এক পুলিশ",
    titleEn: "A Policeman at Night",
    en: 'It is late night on a quiet street. A kind policeman walks slowly. An old man has fallen — his bag is open. The police officer helps him up. "Quick action," a neighbour says. "Any injury?" "No, only a small scare." A thief runs at the corner — a soldier from the army happens to pass and helps rescue the bag. "Arrest him," the officer says. The judge tomorrow will handle the law. The lawyer will speak in court. A young reporter takes notes. "A brave rescue," she writes. "An honest guard, a fair officer." The old man smiles softly. "You saved my night." The policeman salutes. "Only doing my duty. That is my daily award."',
    bn: 'গভীর রাতে এক শান্ত রাস্তা। এক ভদ্র পুলিশ ধীরে হাঁটে। এক বৃদ্ধ পড়ে গেছেন — ব্যাগ খোলা। পুলিশ কর্মকর্তা তুলে দেন। "দ্রুত পদক্ষেপ," প্রতিবেশী বলেন। "কোনো আঘাত?" "না, শুধু ছোট ভয়।" কোণে এক চোর দৌড়ায় — সেনাবাহিনীর এক সৈনিক যাচ্ছিলেন, ব্যাগ উদ্ধারে সাহায্য করেন। "গ্রেপ্তার কর," কর্মকর্তা বলেন। কাল বিচারক আইন সামলাবেন। আইনজীবী আদালতে কথা বলবেন। এক তরুণ প্রতিবেদক নোট নেন। "সাহসী উদ্ধার," লেখেন। "সৎ প্রহরী, ন্যায্য কর্মকর্তা।" বৃদ্ধ মৃদু হাসেন। "তুমি আমার রাত বাঁচালে।" পুলিশ স্যালুট দেন। "শুধু কর্তব্য পালন। এটাই আমার দৈনিক পুরস্কার।"',
    tip: "যদি জরুরি হয়, ইংরেজিতে ৯৯৯-এ কী বলবে ভেবে রাখো।",
  },

  speaking: {
    themeId: "speaking",
    title: "সারার সাথে চ্যাট",
    titleEn: "Chat with Sara",
    en: 'After school, Nadia meets Sara. "Say what you feel," Sara says. "I want to talk about my English." Nadia begins. "Ask me anything." "Do you agree that reading helps?" "Yes, I agree," Nadia says. "But writing is harder." "My advice — repeat every new phrase." "Thanks, I will remember." A boy passes and says "Hi," but no one answers. "Someone always tries to disturb," Sara laughs. "Something is funny about your voice today," Nadia says. "Yeah, a small cold." A soft sound of music from the street. "Say one new word every hour," Sara suggests. "Yes, that is my new rule." Nadia smiles — one honest chat, twenty new words.',
    bn: 'স্কুল শেষে নাদিয়া সারার সাথে দেখা করে। "তুমি যা অনুভব কর, বলো," সারা বলে। "আমি ইংরেজি নিয়ে কথা বলতে চাই।" নাদিয়া শুরু করে। "যা ইচ্ছা জিজ্ঞেস কর।" "তুমি কি একমত যে পড়া সাহায্য করে?" "হ্যাঁ, একমত," নাদিয়া বলে। "তবে লেখা কঠিন।" "আমার উপদেশ — প্রতিটা নতুন বাক্যাংশ পুনরাবৃত্তি কর।" "ধন্যবাদ, মনে রাখব।" এক ছেলে যায়, "হাই" বলে, কেউ উত্তর দেয় না। "কেউ না কেউ সবসময় বিরক্ত করে," সারা হাসে। "তোমার কণ্ঠে আজ কিছু একটা মজার আওয়াজ," নাদিয়া বলে। "হাঁ, একটু ঠান্ডা।" রাস্তায় মৃদু সঙ্গীতের শব্দ। "প্রতি ঘণ্টায় একটা নতুন শব্দ বলো," সারা প্রস্তাব দেয়। "হ্যাঁ, এটাই আমার নতুন নিয়ম।"',
    tip: "একজন বন্ধুর সাথে দিনে ৫ ইংরেজি বাক্যে কথা বলো।",
  },

  "clothes-more": {
    themeId: "clothes-more",
    title: "ঈদের কেনাকাটা",
    titleEn: "Eid Shopping",
    en: 'Nadia opens her wardrobe. "A blue skirt, a white t-shirt, black trousers," she counts. "For Eid I want a red dress, a warm jacket, one long coat for winter." Amma laughs. "Not all today." Rafi picks a t-shirt, one pair of socks, a cricket cap. "A leather belt too, and a blue tie for school uniform." Nadia adds a silk scarf and one soft hat. "New boots for Karim." At the shop the owner smiles. "A new fashion, a modern style." Amma checks the cloth. "Good clothing, not too expensive." Rafi puts money in his pocket. "Wear the shirt tomorrow," Amma says. Every festival is a small parade of colour.',
    bn: 'নাদিয়া আলমারি খোলে। "নীল স্কার্ট, সাদা টি-শার্ট, কালো প্যান্ট," গোনে। "ঈদের জন্য লাল পোশাক, উষ্ণ জ্যাকেট, শীতের জন্য এক লম্বা কোট।" আম্মা হাসেন। "সব আজ না।" রাফি টি-শার্ট, এক জোড়া মোজা, ক্রিকেট ক্যাপ নেয়। "চামড়ার বেল্ট, স্কুল ইউনিফর্মের জন্য নীল টাই।" নাদিয়া সিল্ক স্কার্ফ ও এক নরম টুপি যোগ করে। "কারিমের জন্য নতুন বুট।" দোকানে মালিক হাসেন। "নতুন ফ্যাশন, আধুনিক শৈলী।" আম্মা কাপড় দেখেন। "ভালো পরিধেয়, বেশি দামি না।" রাফি পকেটে টাকা রাখে। "কাল শার্ট পরো," আম্মা বলেন।',
    tip: "নিজের আলমারির প্রতিটা পোশাকের ইংরেজি নাম বলো।",
  },

  "quality-adj": {
    themeId: "quality-adj",
    title: "উপহারের বিচার",
    titleEn: "Judging the Gifts",
    en: 'Nadia\'s birthday. She opens gift after gift. "A good bag," she says. "A real leather one, not false." Karim\'s book is popular this year. "A special edition." Rafi\'s pen looks similar to hers, but simpler. "It is possible I have two now," she laughs. Faisal is rich, so his gift is big. Amma reminds — "A poor child would love this too." "Quick reply," she says to each guest — "Thanks, quite lovely." She is sure everyone tried. "Probably my best birthday." A correct guess, not a wrong one. "A hard year, an easy heart — that is the important lesson." A simple plan for the next year — be more kind.',
    bn: 'নাদিয়ার জন্মদিন। এক এক করে উপহার খোলে। "ভালো ব্যাগ," বলে। "আসল চামড়া, মিথ্যা না।" এবারের কারিমের বই জনপ্রিয়। "বিশেষ সংস্করণ।" রাফির কলম তার একই রকম, কিন্তু সরল। "সম্ভব যে এখন দুইটা," হাসে। ফয়সাল ধনী, তাই উপহার বড়। আম্মা মনে করান — "এক গরিব শিশুও এটা ভালোবাসত।" "দ্রুত জবাব," প্রতি অতিথিকে — "ধন্যবাদ, বেশ মনোহর।" নিশ্চিত সবাই চেষ্টা করেছে। "সম্ভবত সেরা জন্মদিন।" সঠিক অনুমান, ভুল না। "কঠিন বছর, সহজ হৃদয় — এটাই গুরুত্বপূর্ণ পাঠ।" পরের বছরের সরল পরিকল্পনা — আরও দয়ালু।',
    tip: "প্রিয় জিনিসকে ৩টা বিশেষণে ইংরেজিতে বর্ণনা কর।",
  },

  routines: {
    themeId: "routines",
    title: "আব্বার সাপ্তাহিক ছক",
    titleEn: "Abba's Weekly Board",
    en: 'Abba writes his routine on a small board. "Every activity has its part. Each part is a piece of the week. The morning section is for exercise." A short period of ten minutes is enough. "In every situation, one small skill helps." "The result of a good rule is a calm mind," he says. "A small difference each day, a big reason to smile." Amma reads his statement and laughs. "You forget one thing — rest." Abba nods. "Yes, put a chair here. Take a cup of tea. Turn off the phone. Start again slowly. Try, and return to the board tomorrow." A routine is a promise you keep with yourself.',
    bn: 'আব্বা ছোট বোর্ডে রুটিন লেখেন। "প্রতিটা কার্যকলাপের একটা অংশ আছে। প্রতিটা অংশ সপ্তাহের এক টুকরা। সকালের বিভাগ ব্যায়ামের।" দশ মিনিটের ছোট সময়কাল যথেষ্ট। "প্রতিটা অবস্থায় ছোট এক দক্ষতা সাহায্য করে।" "ভালো নিয়মের ফলাফল শান্ত মন," বলেন। "প্রতিদিন ছোট পার্থক্য, হাসার বড় কারণ।" আম্মা বিবৃতি পড়ে হাসেন। "একটা জিনিস ভুলে গেছ — বিশ্রাম।" আব্বা মাথা নাড়েন। "হ্যাঁ, এখানে চেয়ার রাখো। এক কাপ চা নাও। ফোন বন্ধ কর। ধীরে আবার শুরু কর। চেষ্টা কর, কাল বোর্ডে ফিরে এসো।"',
    tip: "নিজের সাপ্তাহিক ছক ইংরেজিতে লেখো।",
  },

  thinking: {
    themeId: "thinking",
    title: "রাফির রাতের চিন্তা",
    titleEn: "Rafi's Night Thoughts",
    en: 'Rafi lies on his bed. "I think about tomorrow," he says softly. "I know it will be hard, but I understand — I can try." He believes his teacher. "I guess she is right — no doubt." A quiet thought passes. "Let me decide now. My opinion — sleep early." A new idea comes. "A small plan: read one page, then rest." He closes his eyes and imagines a green field, a slow river. "I hope for a calm morning. I wish for a clear mind." He notices the moon at the window. "I see it — full and white." A good point crosses his mind — a matter of one honest thought at a time.',
    bn: 'রাফি বিছানায় শোয়। "আগামীকাল নিয়ে ভাবি," মৃদু বলে। "জানি কঠিন হবে, কিন্তু বুঝি — চেষ্টা করতে পারি।" শিক্ষকে বিশ্বাস করে। "অনুমান করি ঠিক — কোনো সন্দেহ নেই।" এক শান্ত ভাবনা যায়। "এখন সিদ্ধান্ত নিই। আমার মতামত — আগে ঘুমাও।" নতুন ধারণা আসে। "ছোট পরিকল্পনা: এক পৃষ্ঠা পড়, তারপর বিশ্রাম।" চোখ বন্ধ করে সবুজ মাঠ, ধীর নদী কল্পনা করে। "শান্ত সকালের আশা করি। স্পষ্ট মন কামনা করি।" জানালায় চাঁদ লক্ষ্য করে। "দেখি — পূর্ণ ও সাদা।" মনে এক ভালো দৃষ্টিকোণ — এক সৎ ভাবনার বিষয়।',
    tip: "ঘুমের আগে ৩টা চিন্তা ইংরেজিতে লেখো।",
  },

  "family-more": {
    themeId: "family-more",
    title: "পুরানো অ্যালবামের দিন",
    titleEn: "The Old Album Day",
    en: 'Rafi looks at old photos with his grandparents. "This kid is my dad," Amma laughs. "That little girl is your mum." A tall man in the corner — a neighbour from long ago. "Every person in this album is a family member," grandmother says. "An elder brother, a younger sister, a shy woman, a brave man." Rafi points at a personal note under one photo. "My twin cousins were born here." "So many people, one home," grandfather smiles. "A close friend is also a relative — not by blood, but by heart." Nadia adds, "A kid today, a parent tomorrow." Life is short, family is long. Every face a chapter, every chapter a life.',
    bn: 'রাফি দাদা-দাদির সাথে পুরানো ছবি দেখে। "এই বাচ্চা আমার বাবা," আম্মা হাসেন। "ঐ ছোট মেয়েটা তোমার মা।" কোণে এক লম্বা পুরুষ — বহু আগের প্রতিবেশী। "এই অ্যালবামের প্রতিটা ব্যক্তি পরিবারের সদস্য," দাদি বলেন। "এক বড় ভাই, ছোট বোন, লাজুক নারী, সাহসী পুরুষ।" রাফি এক ছবির নিচে ব্যক্তিগত নোট দেখায়। "আমার যমজ কাজিনদের জন্ম এখানে।" "এত মানুষ, এক ঘর," দাদা হাসেন। "ঘনিষ্ঠ বন্ধুও আত্মীয় — রক্তে না, হৃদয়ে।" নাদিয়া যোগ করে, "আজ বাচ্চা, কাল পিতা/মাতা।" জীবন ছোট, পরিবার দীর্ঘ।',
    tip: "পুরানো ছবি দেখে ইংরেজিতে সদস্যদের সম্পর্ক বলো।",
  },

  "direction-more": {
    themeId: "direction-more",
    title: "পুরান ঢাকায় পথ দেখানো",
    titleEn: "Guiding through Old Dhaka",
    en: 'Karim gives Rafi directions. "Go through the small gate. Walk under the arch, then over the small bridge. The old shop is next to the mosque. Between two tea stalls you will see a red door. Turn there." Rafi nods. "Inside or outside?" "Inside. Upstairs on the second floor, not downstairs." A cat sits at the corner. "Around it, please, do not step on the tail!" Along the wall a line of pots. "Together they look like a rainbow." "Without a map," Karim laughs, "you can still find it." Near the end of the street a small park. "Not far — here we come. There he is — grandfather at the front, waving."',
    bn: 'কারিম রাফিকে পথ বলে দেয়। "ছোট গেটের ভিতর দিয়ে যাও। খিলানের নিচে হেঁটে, ছোট সেতুর উপর দিয়ে যাও। পুরানো দোকান মসজিদের পাশে। দুই চায়ের দোকানের মাঝে এক লাল দরজা দেখবে। ওখানে ঘোরো।" রাফি মাথা নাড়ে। "ভিতরে না বাইরে?" "ভিতরে। উপরতলায়, দ্বিতীয় তলা, নিচতলা না।" কোণায় এক বিড়াল বসে। "চারপাশ দিয়ে যাও, লেজে পা দিয়ো না!" দেয়াল ধরে হাঁড়ির সারি। "একসাথে রামধনুর মতো লাগে।" "মানচিত্র ছাড়াই," কারিম হাসে, "খুঁজে পাবে।" রাস্তার শেষের কাছে ছোট পার্ক। "দূরে না — এই তো এলাম। সামনে দাদা — হাত নাড়ছেন।"',
    tip: "নিজের বাসা থেকে দোকানের পথ ইংরেজিতে বর্ণনা কর।",
  },

  discussion: {
    themeId: "discussion",
    title: "ক্লাসের বিতর্ক",
    titleEn: "Class Debate",
    en: 'Five friends sit in a circle. The topic is simple — should students carry phones to school? A long discussion begins. Rafi opens with a strong argument. "A phone helps in emergency." Nadia disagrees. "It steals attention." Karim tries to explain both sides. "Consider the parents\' opinion." Sara makes a short comment. "A real issue is control." Faisal suggests a rule — "No phone in class." A good suggestion. "I mention one more thing," Nadia says. "Do not argue, discuss." A soft voice, a kind expression. Rafi wants to complain, then stops. "No complaint," he smiles. "Let us conclude — trust the student, teach responsibility." A clear conclusion. Everyone claps.',
    bn: 'পাঁচ বন্ধু বৃত্তে বসে। বিষয় সরল — ছাত্ররা কি স্কুলে ফোন নেবে? দীর্ঘ আলোচনা শুরু। রাফি শক্ত যুক্তি দিয়ে শুরু করে। "জরুরিতে ফোন সাহায্য করে।" নাদিয়া দ্বিমত। "এটা মনোযোগ চুরি করে।" কারিম দুই পক্ষ ব্যাখ্যা করে। "বাবা-মায়ের মতামত বিবেচনা কর।" সারা ছোট মন্তব্য দেয়। "আসল সমস্যা নিয়ন্ত্রণ।" ফয়সাল নিয়ম প্রস্তাব করে — "ক্লাসে ফোন না।" ভালো প্রস্তাব। "আরেকটা উল্লেখ করি," নাদিয়া বলে। "তর্ক না, আলোচনা।" মৃদু কণ্ঠ, নরম অভিব্যক্তি। রাফি অভিযোগ করতে চেয়েও থামে। "কোনো অভিযোগ না," হাসে। "উপসংহার — ছাত্রকে বিশ্বাস কর, দায়িত্ব শেখাও।"',
    tip: "বন্ধুর সাথে ইংরেজিতে ছোট বিতর্ক কর।",
  },

  "body-more2": {
    themeId: "body-more2",
    title: "ডাক্তারের সামনে রাফি",
    titleEn: "Rafi at the Doctor",
    en: 'The doctor asks Rafi to sit. "Show me your body from head to foot," she smiles. Rafi lifts his right arm, then his left leg. "Open your hand. Show each finger, and the thumb." She checks his eye, his ear, his nose. "Open your mouth. Touch the tooth with the tongue." Rafi laughs. She feels his neck and his shoulder. "Your hair is soft." On his face — a calm look. "Your knee, please. And the back?" She presses gently. "Any pain? No? Good." The chest sounds fine. "A young body, a fresh mind." Rafi walks out slowly, hand in hand with Amma. "Health is a quiet gift you carry every day."',
    bn: 'ডাক্তার রাফিকে বসতে বলেন। "মাথা থেকে পায়ের পাতা পর্যন্ত শরীর দেখাও," হাসেন। রাফি ডান বাহু, তারপর বাম পা তোলে। "হাত খোলো। প্রতিটা আঙুল ও বুড়ো আঙুল দেখাও।" চোখ, কান, নাক দেখেন। "মুখ খোলো। জিহ্বা দিয়ে দাঁত ছোঁও।" রাফি হাসে। ঘাড় ও কাঁধ স্পর্শ করেন। "চুল নরম।" মুখমণ্ডলে — শান্ত ভাব। "হাঁটু দেখাও। পিঠ?" মৃদু চাপ দেন। "কোনো ব্যথা? না? ভালো।" বুক ঠিক শোনায়। "তরুণ শরীর, তাজা মন।" রাফি আম্মার হাত ধরে ধীরে বেরোয়।',
    tip: "শরীরের প্রতিটা অংশ ছুঁয়ে ইংরেজিতে জোরে বলো।",
  },

  furniture: {
    themeId: "furniture",
    title: "শনিবারের বৈঠকখানা",
    titleEn: "Saturday Living Room",
    en: 'Amma rearranges the living room. A red carpet on the floor, a silk curtain at the window. A big sofa in the middle, a small chair next to the desk. "Move the table here," she says. Rafi carries the book shelf; Nadia opens a drawer to keep old letters. "A soft bed for grandmother, a warm blanket, a big pillow." A rug for the entrance. "New furniture makes a new mood." Amma places a wall clock, a family picture, a glass vase with one red flower. "A small candle in the corner." The room glows. "Every corner tells a story. Every room is a small home inside our big home."',
    bn: 'আম্মা বৈঠকখানা সাজান। মেঝেতে লাল কার্পেট, জানালায় সিল্ক পর্দা। মাঝে বড় সোফা, ডেস্কের পাশে ছোট চেয়ার। "টেবিলটা এখানে সরাও," বলেন। রাফি বইয়ের তাক বহন করে; নাদিয়া পুরানো চিঠি রাখতে ড্রয়ার খোলে। "দাদির জন্য নরম বিছানা, উষ্ণ কম্বল, বড় বালিশ।" প্রবেশপথে শতরঞ্জি। "নতুন আসবাব নতুন মেজাজ আনে।" আম্মা দেয়াল ঘড়ি, পারিবারিক ছবি, এক লাল ফুলসহ কাচের ফুলদানি রাখেন। "কোণে ছোট মোমবাতি।" কক্ষ জ্বলে ওঠে। "প্রতিটা কোণা গল্প বলে।"',
    tip: "নিজের ঘরের আসবাব ইংরেজিতে লিস্ট কর।",
  },

  "university-study": {
    themeId: "university-study",
    title: "ফয়সালের প্রথম দিন",
    titleEn: "Faisal's First Day",
    en: 'Faisal starts his first day at Dhaka University. A big green campus, a busy library. "My course is history," he tells Rafi. "A senior professor takes the first lecture." He sits with new students in a small class. The teacher gives an assignment — a short writing on the topic "My City." "Take clear notes," she says. Faisal is a slow reader but a hard worker. He goes to the library after the exam schedule is out. "My degree is three years, but knowledge is life-long." Karim visits — he is already a graduate. "Every learning starts with a question," he says. "Every writer was once a shy student too." Faisal smiles — a new chapter begins.',
    bn: 'ফয়সাল ঢাকা বিশ্ববিদ্যালয়ে প্রথম দিন শুরু করে। সবুজ ক্যাম্পাস, ব্যস্ত গ্রন্থাগার। "আমার কোর্স ইতিহাস," রাফিকে বলে। "এক জ্যেষ্ঠ অধ্যাপক প্রথম বক্তৃতা দেন।" নতুন ছাত্রদের সাথে ছোট ক্লাসে বসে। শিক্ষক এক কার্যভার দেন — "আমার শহর" বিষয়ে ছোট লেখা। "স্পষ্ট নোট নাও," বলেন। ফয়সাল ধীর পাঠক কিন্তু পরিশ্রমী। পরীক্ষার সূচি বেরোনোর পর গ্রন্থাগারে যায়। "আমার ডিগ্রি তিন বছর, তবে জ্ঞান আজীবন।" কারিম আসে — সে এরই মধ্যে স্নাতক। "প্রতিটা শিক্ষা প্রশ্ন দিয়ে শুরু," বলে। "প্রতিটা লেখক এক সময় লাজুক ছাত্র ছিলেন।"',
    tip: "নিজের কল্পিত ইউনিভার্সিটির ক্লাস-রুটিন ইংরেজিতে লেখো।",
  },

  "problems-solutions": {
    themeId: "problems-solutions",
    title: "কারিমের ল্যাপটপ ভেঙে গেল",
    titleEn: "Karim's Broken Laptop",
    en: 'Karim\'s laptop shows a strange error. "A big problem," he says. Rafi comes to help. "Small trouble, do not worry." First they check the cable — a small difficulty, one loose wire. "Fix the plug," Rafi says. The screen lights up but a new error appears. "Test the software." Rafi finds the cause — an old file. "Simple solution: remove it." The effect is quick — the laptop runs. "That will affect your work," Karim laughs. "Now improve it, prevent a next issue." Rafi cleans the fan too. "Manage the heat, control the dust." Karim smiles. "You handle the machine like a doctor." Every problem has a solution — if you check with patience.',
    bn: 'কারিমের ল্যাপটপে অদ্ভুত ত্রুটি। "বড় সমস্যা," বলে। রাফি সাহায্যে আসে। "ছোট ঝামেলা, চিন্তা করো না।" প্রথমে কেবল দেখে — সামান্য কঠিনতা, এক ঢিলা তার। "প্লাগ ঠিক কর," রাফি বলে। স্ক্রিন জ্বলে ওঠে কিন্তু নতুন ত্রুটি আসে। "সফটওয়্যার পরখ কর।" রাফি কারণ খুঁজে পায় — পুরানো এক ফাইল। "সরল সমাধান: সরাও।" প্রভাব দ্রুত — ল্যাপটপ চলে। "তোমার কাজে প্রভাব ফেলবে," কারিম হাসে। "এখন উন্নতি কর, পরের সমস্যা প্রতিরোধ কর।" রাফি ফ্যানও পরিষ্কার করে। "তাপ সামলাও, ধুলো নিয়ন্ত্রণ কর।" কারিম হাসে। "তুমি ডাক্তারের মতো সামাল দাও।"',
    tip: "একটা সমস্যা লিখে ৩টা সম্ভাব্য সমাধান ইংরেজিতে লেখো।",
  },

  "daily-actions": {
    themeId: "daily-actions",
    title: "রাফির পাঁচ মিনিট",
    titleEn: "Rafi's Five Minutes",
    en: 'Six o\'clock. Rafi\'s morning starts. "Begin with water," Amma says. He takes a glass, puts it back, turns to the door. "Send the message to Karim." His phone buzzes — a reply comes back quickly. Amma gives him tea. "Share the biscuit with Nadia." He waits two minutes, then rests one minute. He moves a chair, carries the bag, holds a small notebook. "Leave now, arrive on time." At school he enters the class, sits, then exits at the bell. "Stop, then start again," he thinks. Every day is a small circle of little actions — begin, end, begin. Move a little, rest a little, live a lot.',
    bn: 'ছয়টা। রাফির সকাল শুরু। "পানি দিয়ে শুরু কর," আম্মা বলেন। এক গ্লাস নেয়, রাখে, দরজার দিকে ঘোরে। "কারিমকে মেসেজ পাঠাও।" ফোন বাজে — দ্রুত জবাব আসে। আম্মা চা দেন। "বিস্কুট নাদিয়ার সাথে ভাগ কর।" দুই মিনিট অপেক্ষা করে, এক মিনিট বিশ্রাম। চেয়ার সরায়, ব্যাগ বহন করে, ছোট নোটবই ধরে। "এখন যাও, সময়মতো পৌঁছাও।" স্কুলে ক্লাসে প্রবেশ করে, বসে, ঘণ্টায় বের হয়। "থামো, তারপর আবার শুরু কর," ভাবে। প্রতিটা দিন ছোট এক বৃত্ত — শুরু, শেষ, শুরু।',
    tip: "সকালের ৫ মিনিট ইংরেজিতে verbs দিয়ে বর্ণনা কর।",
  },

  "phone-more": {
    themeId: "phone-more",
    title: "সিলেটে ফোন",
    titleEn: "Calling Sylhet",
    en: 'Friday night. Amma picks up the telephone. "Let me call Grandmother." The phone rings on the other side. "Hello?" a sweet voice answers. "Nana, how are you?" A short message of love. "Send a letter too," Grandmother says. "I keep every text." A soft chat — no rush. Rafi speaks next. "Listen, Nana — I hear you well." The line is clear tonight, a good connection. "My number is the same," Amma reminds. Nadia replies with a smile. "Reply to me by post, Nana!" Grandmother laughs. "A modern girl who loves an old habit." "Bye for now," everyone says together. "Sorry, one more thing," Rafi adds. "I love you." The voice softens. "Me too, my child."',
    bn: 'শুক্রবার রাত। আম্মা টেলিফোন তোলেন। "দাদিকে কল করি।" অপর পাশে ফোন বাজে। "হ্যালো?" মিষ্টি কণ্ঠ। "নানি, কেমন আছেন?" ভালোবাসার ছোট বার্তা। "চিঠিও পাঠাও," দাদি বলেন। "প্রতিটা টেক্সট রাখি।" মৃদু চ্যাট — তাড়া নেই। রাফি এরপর কথা বলে। "শোনো, নানি — ভালো শুনতে পাচ্ছি।" আজ লাইন স্পষ্ট, ভালো সংযোগ। "আমার নম্বর একই," আম্মা মনে করান। নাদিয়া হাসে। "নানি, ডাকে জবাব দাও!" দাদি হাসেন। "আধুনিক মেয়ে যে পুরানো অভ্যাস ভালোবাসে।" "এখন বিদায়," সবাই একসাথে। "দুঃখিত, আর একটা কথা," রাফি যোগ করে। "আমি ভালোবাসি।" কণ্ঠ নরম হয়। "আমিও, সোনা।"',
    tip: "কাল্পনিক এক ফোন কলের সংলাপ ইংরেজিতে লেখো।",
  },

  "quality-adv": {
    themeId: "quality-adv",
    title: "নাদিয়ার একটা দিন",
    titleEn: "Nadia's One Day",
    en: '"Really quiet morning," Nadia thinks. Quite easy math today. "Very hot at noon." She drinks water — too warm. "So much sun." Her lunch is enough. "Almost finished the essay, nearly done." Exactly one hour for study. Mostly she reads alone, especially in the evening. "Only one page left. Just five minutes more." Even a little more is progress. She is extremely tired, but the work is completely finished. She speaks clearly to Amma about her day, not too loudly. Hardly any noise from the street. "Rather a good day," she smiles. Every adverb is a small dial — you turn it and the whole picture changes.',
    bn: '"সত্যিই শান্ত সকাল," নাদিয়া ভাবে। আজ অঙ্ক বেশ সহজ। "দুপুরে খুব গরম।" পানি খায় — অতিরিক্ত উষ্ণ। "এত রোদ।" দুপুরের খাবার যথেষ্ট। "রচনা প্রায় শেষ, প্রায় হয়ে গেছে।" পড়ায় ঠিক এক ঘণ্টা। বেশিরভাগ সময় একা পড়ে, বিশেষত সন্ধ্যায়। "শুধু এক পৃষ্ঠা বাকি। মাত্র পাঁচ মিনিট।" একটুও এগোলে অগ্রগতি। চরমভাবে ক্লান্ত, তবে কাজ সম্পূর্ণ শেষ। আম্মাকে স্পষ্ট বলে, খুব উচ্চস্বরে না। রাস্তার শব্দ কষ্টে। "বরং ভালো দিন," হাসে।',
    tip: "একটা দিন ইংরেজিতে degree adverbs দিয়ে বর্ণনা কর।",
  },

  "fun-day": {
    themeId: "fun-day",
    title: "রমনা পার্কে ছুটি",
    titleEn: "Holiday at Ramna Park",
    en: 'The family walks into Ramna Park. A green garden, a big playground, and a small pool at the corner. Nadia buys an ice cream. Rafi runs to the slide, then the swing. "Come play," he shouts. Karim brings a red kite; Amma sits with a picnic basket. "Enjoy the day," Abba says. Children laugh. Nadia smiles softly. "Pure joy," she thinks. Faisal plays a quick game with a soft ball. "Small prize for the winner!" A little toy passes hand to hand. Every friend of Rafi comes. A short holiday, a long memory. Fun is not expensive — a park, a smile, and someone to share the day.',
    bn: 'পরিবার রমনা পার্কে ঢোকে। সবুজ বাগান, বড় খেলার মাঠ, কোণে ছোট এক পুল। নাদিয়া আইসক্রিম কিনে। রাফি স্লাইডে ছোটে, তারপর দোলনায়। "এসো খেলো," চিৎকার। কারিম লাল ঘুড়ি আনে; আম্মা চড়ুইভাতির ঝুড়ি নিয়ে বসেন। "দিনটা উপভোগ কর," আব্বা বলেন। বাচ্চারা হাসে। নাদিয়া মৃদু হাসে। "বিশুদ্ধ আনন্দ," ভাবে। ফয়সাল নরম বলে দ্রুত খেলে। "বিজয়ীর জন্য ছোট পুরস্কার!" ছোট খেলনা হাতে হাতে ঘোরে। রাফির প্রতিটা বন্ধু আসে। ছোট ছুটি, দীর্ঘ স্মৃতি।',
    tip: "প্রিয় পার্কে গেলে যা দেখো — ইংরেজিতে ২ বাক্যে লেখো।",
  },

  "town-locations": {
    themeId: "town-locations",
    title: "কারিমের পাড়া",
    titleEn: "Karim's Neighbourhood",
    en: 'Karim describes his neighbourhood to Rafi. "A quiet spot, a good location. City centre is far, but our small market is right here. At the corner is a tea shop. In the middle of the street a mosque. The bridge is on the edge of the area." He points. "Top of the hill — an old temple. The bottom — a pond. The front row of shops is busy; the back is quiet. Take the right side path. Cross the wide avenue, then the narrow street. The main square is where old friends meet." Rafi listens. "Every way has a story, every path a memory. Right here, an ordinary town becomes home."',
    bn: 'কারিম রাফিকে পাড়ার বর্ণনা দেয়। "শান্ত জায়গা, ভালো অবস্থান। শহরের কেন্দ্র দূরে, কিন্তু ছোট বাজার ঠিক এখানে। কোণায় চায়ের দোকান। রাস্তার মাঝে মসজিদ। এলাকার কিনারায় সেতু।" দেখায়। "পাহাড়ের শীর্ষে — পুরানো মন্দির। তলদেশে — পুকুর। দোকানের সামনের সারি ব্যস্ত; পিছন শান্ত। ডান পাশের পথ নাও। প্রশস্ত রাস্তা পার হয়ে, তারপর সরু রাস্তা। মূল চত্বরে পুরানো বন্ধুরা মিলিত হয়।" রাফি শোনে। "প্রতিটা পথের গল্প, প্রতিটা রাস্তার স্মৃতি। ঠিক এখানে সাধারণ শহর ঘরে পরিণত হয়।"',
    tip: "নিজের পাড়ার ম্যাপ ইংরেজি শব্দে বর্ণনা কর।",
  },

  helping: {
    themeId: "helping",
    title: "নাদিয়ার দাতব্য দিন",
    titleEn: "Nadia's Charity Day",
    en: 'Nadia goes to a small charity near her school. She wants to help. A kind volunteer welcomes her. "Support is more than money — care is time." Nadia sits with an old lady. "Assist her slowly," the volunteer says. Nadia offers water and a small gift — a warm blanket. "Thank you, my child," the lady smiles. Kindness fills the room. Faisal is here too; he donates rice and lentils. "Share what you have, protect the weak, guide the young." A polite service. Rafi comes later — he wants to teach English to little kids. "Learn one word, teach one word." A favour returns as a smile. "Welcome any time," the volunteer says. Kindness is a small light — it grows when shared.',
    bn: 'নাদিয়া স্কুলের কাছে ছোট এক দাতব্যে যায়। সাহায্য করতে চায়। এক ভদ্র স্বেচ্ছাসেবক স্বাগত জানান। "সমর্থন টাকার বেশি — যত্ন সময়।" নাদিয়া এক বৃদ্ধ মহিলার সাথে বসে। "ধীরে সহায়তা কর," স্বেচ্ছাসেবক বলেন। নাদিয়া পানি ও ছোট উপহার — উষ্ণ কম্বল দেয়। "ধন্যবাদ, সোনা," মহিলা হাসেন। কক্ষে দয়া ভরে যায়। ফয়সালও এসেছে; চাল-ডাল দান করে। "যা আছে ভাগ কর, দুর্বলকে রক্ষা কর, তরুণকে পথ দেখাও।" ভদ্র সেবা। রাফি পরে আসে — ছোট বাচ্চাদের ইংরেজি শেখাতে চায়। "এক শব্দ শেখো, এক শব্দ শেখাও।"',
    tip: "আজ ছোট এক উপকার করার প্ল্যান ইংরেজিতে লেখো।",
  },

  "success-fail": {
    themeId: "success-fail",
    title: "রাফির ফলাফল",
    titleEn: "Rafi's Result",
    en: 'Rafi opens his exam result. "Not the top mark," he sighs. Amma smiles. "Success is not one paper. Achievement is your effort." Karim adds, "You win some, you lose some." Rafi shakes his head. "I fail this month." "No — you try. That is success too." A hard road, an easy heart. "My goal is clear," Rafi says. "I keep hope. One more chance next month. Good luck is a reward for effort." Amma nods. "Never give up. Continue, and finish what you start. Even a difficult path becomes easy with a friend." Rafi smiles. "Victory is a slow train — I will catch it at my station."',
    bn: 'রাফি পরীক্ষার ফলাফল খোলে। "শীর্ষ নম্বর না," দীর্ঘশ্বাস। আম্মা হাসেন। "সাফল্য এক কাগজ না। অর্জন তোমার প্রচেষ্টা।" কারিম যোগ করে, "কিছু জিতবে, কিছু হারাবে।" রাফি মাথা নাড়ে। "এই মাসে ব্যর্থ।" "না — তুমি চেষ্টা কর। এটাও সাফল্য।" কঠিন পথ, সহজ হৃদয়। "লক্ষ্য স্পষ্ট," রাফি বলে। "আশা রাখি। পরের মাসে আরেক সুযোগ। ভাগ্য প্রচেষ্টার পুরস্কার।" আম্মা মাথা নাড়েন। "হাল ছেড়ো না। চালিয়ে যাও, যা শুরু কর, শেষ কর। কঠিন পথও বন্ধুর সাথে সহজ।" রাফি হাসে। "বিজয় ধীর ট্রেন — আমার স্টেশনে ধরব।"',
    tip: "নিজের ছোট এক অর্জন ইংরেজিতে ৩ বাক্যে লেখো।",
  },

  honesty: {
    themeId: "honesty",
    title: "কারিমের সততা",
    titleEn: "Karim's Honesty",
    en: 'Karim admits a small mistake to his boss. "True story — I broke the printer." The boss looks up. "Thanks for the truth. A false answer would be worse." Karim nods. "An honest man is not perfect, but fair." "Unfair to hide it," he says. "I do not cheat." "I promise to fix it," he adds. The boss trusts him. "Faith takes years. I believe you." No doubt now, only certain respect. Karim is a loyal worker. His value is his character. A quiet duty, a big responsibility. Later Rafi asks, "Why did you tell?" Karim laughs. "A lie is a small thief in your pocket. It steals your sleep. Truth costs nothing and gives peace."',
    bn: 'কারিম বসকে ছোট এক ভুল স্বীকার করে। "সত্য গল্প — আমি প্রিন্টার ভেঙেছি।" বস তাকান। "সত্যের জন্য ধন্যবাদ। মিথ্যা উত্তর আরও খারাপ হতো।" কারিম মাথা নাড়ে। "সৎ মানুষ নিখুঁত না, তবে ন্যায্য।" "লুকানো অন্যায্য," বলে। "প্রতারণা করি না।" "ঠিক করার প্রতিশ্রুতি দিই," যোগ করে। বস বিশ্বাস করেন। "বিশ্বাসে বছর লাগে। তোমাকে বিশ্বাস করি।" এখন সন্দেহ নেই, শুধু নিশ্চিত সম্মান। কারিম অনুগত কর্মী। তার মূল্য চরিত্র। শান্ত কর্তব্য, বড় দায়িত্ব। পরে রাফি জিজ্ঞেস করে, "কেন বললে?" কারিম হাসে। "মিথ্যা পকেটে ছোট চোর। ঘুম চুরি করে। সত্য বিনামূল্যে, শান্তি দেয়।"',
    tip: "আজ একটা ছোট সত্য কথা ইংরেজিতে লেখো।",
  },

  "country-life": {
    themeId: "country-life",
    title: "রংপুরে খামার",
    titleEn: "Farm in Rangpur",
    en: 'The family visits the farm of Abba\'s uncle in Rangpur. A wide field, green under the morning sun. A hard-working farmer greets them. "This year\'s crop is good. Rice, some wheat, a little corn." Nadia sees a red hen and a small pond behind the house. Rafi plants a small seed near the tree. "A leaf a day, a life in ten years." The soil is soft and wet. Grandfather points at the deep well. "Fertile land, honest people." Karim rides a wooden boat on the pond. Heavy rain came last week, so the grass is fresh. "We grow vegetables together," the farmer says. "The harvest is ready in one month." A slow, sweet country day.',
    bn: 'পরিবার রংপুরে আব্বার চাচার খামারে যায়। প্রশস্ত মাঠ, সকালের রোদে সবুজ। এক পরিশ্রমী কৃষক স্বাগত জানান। "এবারের ফসল ভালো। চাল, একটু গম, একটু ভুট্টা।" নাদিয়া বাড়ির পিছনে লাল মুরগি ও ছোট পুকুর দেখে। রাফি গাছের কাছে ছোট বীজ বপন করে। "দিনে এক পাতা, দশ বছরে এক জীবন।" মাটি নরম ও ভেজা। দাদা গভীর কূপ দেখান। "উর্বর জমি, সৎ মানুষ।" কারিম পুকুরে কাঠের নৌকা চালায়। গত সপ্তাহে ভারী বৃষ্টি, তাই ঘাস তাজা। "একসাথে সবজি চাষ করি," কৃষক বলেন। "এক মাসে ফসল প্রস্তুত।"',
    tip: "গ্রামে গেলে ৫টা জিনিসের নাম ইংরেজিতে বলো।",
  },

  "media-more": {
    themeId: "media-more",
    title: "আব্বার সকালের কাগজ",
    titleEn: "Abba's Morning Paper",
    en: 'Abba opens the daily newspaper with hot tea. "Good news today," he says. A young reporter has written a strong article. "A brave journalist, a fair editor." The main title is clear: "New School Opens in the Village." "Fact is more powerful than opinion," Abba tells Rafi. New information, real data, strong evidence. "Every source must be trusted," he adds. Rafi reads a weekly report on cricket. Nadia checks social media — a book review, a movie story, a small ad. "Print, publish, share — the media is a big family," Abba smiles. A short detail catches his eye: a new library will open near their home. "News moves the world," he says. "Read carefully."',
    bn: 'আব্বা গরম চা নিয়ে দৈনিক সংবাদপত্র খোলেন। "আজ ভালো খবর," বলেন। এক তরুণ প্রতিবেদক শক্ত নিবন্ধ লিখেছেন। "সাহসী সাংবাদিক, ন্যায্য সম্পাদক।" মূল শিরোনাম স্পষ্ট: "গ্রামে নতুন স্কুল।" "বাস্তব ঘটনা মতামতের চেয়ে শক্তিশালী," আব্বা রাফিকে বলেন। নতুন তথ্য, আসল উপাত্ত, শক্ত প্রমাণ। "প্রতিটা উৎস বিশ্বস্ত হতে হবে," যোগ করেন। রাফি ক্রিকেটের সাপ্তাহিক প্রতিবেদন পড়ে। নাদিয়া সামাজিক মাধ্যম দেখে — এক বই পর্যালোচনা, এক মুভি গল্প, ছোট অ্যাড। "মুদ্রণ, প্রকাশ, ভাগ — গণমাধ্যম বড় এক পরিবার," আব্বা হাসেন। ছোট এক বিস্তারিত চোখে পড়ে: ঘরের কাছে নতুন গ্রন্থাগার। "খবর পৃথিবী নাড়ায়।"',
    tip: "আজকের একটা খবরের শিরোনাম ইংরেজিতে অনুবাদ কর।",
  },

  "business-basics": {
    themeId: "business-basics",
    title: "ফয়সালের ছোট কোম্পানি",
    titleEn: "Faisal's Small Company",
    en: 'Faisal starts a small business with two friends. Their company sells one product — a study app. The market is big, but customers are shy. "One happy customer brings one client," the manager says. The boss checks the price and the cost. "Small profit is fine," she says. "But every deal must be fair." The brand is new, so they run a big sale. The employee writes each contract, each offer, each order. The staff is small — only four people. The budget is tight. But the customer likes the product, the client signs the deal, and the company gets its first real profit. "A good boss builds a good staff," Faisal smiles.',
    bn: 'ফয়সাল দুই বন্ধুর সাথে ছোট ব্যবসা শুরু করে। তাদের কোম্পানি একটাই পণ্য বিক্রি করে — একটা পড়ার অ্যাপ। বাজার বড়, কিন্তু ক্রেতা লাজুক। "এক খুশি ক্রেতা এক মক্কেল আনে," ব্যবস্থাপক বলেন। বস দাম ও খরচ দেখেন। "ছোট লাভও চলবে, কিন্তু প্রতিটা চুক্তি ন্যায্য হতে হবে।" ব্র্যান্ড নতুন, তাই বড় সেল চালায়। কর্মচারী প্রতিটা চুক্তি, প্রস্তাব, অর্ডার লেখে। কর্মীবাহিনী ছোট — মাত্র চারজন। বাজেট টাইট। কিন্তু ক্রেতা পণ্য পছন্দ করে, মক্কেল চুক্তি সই করে, আর কোম্পানি প্রথম আসল লাভ পায়। "ভালো বস ভালো কর্মী গড়ে," ফয়সাল হাসে।',
    tip: "নিজের একটা কল্পিত কোম্পানি ভাবো — নাম, পণ্য, ক্রেতা, দাম মুখে বলো।",
  },

  "banking-money": {
    themeId: "banking-money",
    title: "আম্মার প্রথম অ্যাকাউন্ট",
    titleEn: "Amma's First Account",
    en: 'Amma goes to the bank to open her first account. The officer smiles. "A small deposit is fine to start." Amma wants to save every month. "Saving is safety," she says. "I will not borrow, I will not take a loan." She has some cash, a few coins, and one old bill from last year. She will pay each payment on time. "Our currency is the taka," the officer explains. "Credit is good, but debt is heavy." A tourist next to her changes a dollar note. Amma writes her first cheque with a shaky hand. "Real wealth is not big money," she tells Nadia. "Real wealth is a steady income and a calm heart."',
    bn: 'আম্মা প্রথম অ্যাকাউন্ট খুলতে ব্যাংকে যান। কর্মকর্তা হাসেন। "শুরুতে ছোট জমা রাখলেই হবে।" আম্মা প্রতি মাসে সঞ্চয় করতে চান। "সঞ্চয়ই নিরাপত্তা," বলেন। "আমি ধার করব না, ঋণও নেব না।" তার কাছে কিছু নগদ, কয়েকটা কয়েন, আর গত বছরের একটা পুরোনো নোট। প্রতিটা পরিশোধ সময়মত করবেন। "আমাদের মুদ্রা টাকা," কর্মকর্তা বলেন। "ক্রেডিট ভালো, কিন্তু দেনা ভারী।" পাশের এক পর্যটক ডলার ভাঙায়। আম্মা কাঁপা হাতে প্রথম চেক লেখেন। "আসল সম্পদ বড় টাকা না," নাদিয়াকে বলেন। "স্থির আয় আর শান্ত মনই আসল সম্পদ।"',
    tip: 'প্রতিদিন একবার নিজের "আয় — সঞ্চয় — খরচ" ইংরেজিতে বলো।',
  },

  "career-jobs": {
    themeId: "career-jobs",
    title: "কারিমের ইন্টারভিউ",
    titleEn: "Karim's Interview",
    en: 'Karim wants a good career. He is unemployed for six months. Today he will apply for a job at a bank. His application is neat. His resume is short but strong. "Every skill counts," his father says. At the interview the manager asks about his work. "I was employed at a small office last year." They talk about salary and wage. "We hire honest people," the manager smiles. Two weeks later Karim gets the job. After one year they promote him. His promotion brings a bigger salary and a new colleague. "A professional never stops learning," his boss says. "When you retire, you should retire proud."',
    bn: 'কারিম ভালো ক্যারিয়ার চায়। ছয় মাস বেকার। আজ ব্যাংকে চাকরির জন্য আবেদন করবে। আবেদনপত্র পরিপাটি। জীবনবৃত্তান্ত ছোট কিন্তু শক্তিশালী। "প্রতিটা দক্ষতা কাজে লাগে," বাবা বলেন। সাক্ষাৎকারে ব্যবস্থাপক কাজের কথা জিজ্ঞেস করেন। "গত বছর ছোট এক অফিসে চাকরি করেছি।" বেতন ও মজুরির কথা হয়। "আমরা সৎ মানুষ নিয়োগ করি," ব্যবস্থাপক হাসেন। দু\' সপ্তাহ পর কারিম চাকরি পায়। এক বছর পর তাকে পদোন্নতি দেয়। পদোন্নতিতে বড় বেতন আর নতুন সহকর্মী। "পেশাদার কখনো শেখা থামায় না," বস বলেন। "অবসরে যেন গর্বিত হয়ে যাও।"',
    tip: 'নিজের রিজিউমে ৫টা "skill" ইংরেজিতে লিখো।',
  },

  "office-work": {
    themeId: "office-work",
    title: "বাবার অফিসে রাফি",
    titleEn: "Rafi at Father's Office",
    en: 'Rafi visits his father\'s office for the first time. Each desk is clean. A big meeting is going on in the conference room. "Every department has its own team," Abba explains. He shows Rafi a thick document and a monthly report. "This project has a tight deadline." A task list sits on the wall — a full schedule for the week. The email inbox is busy. The printer hums. Every file goes into a labelled folder. Rafi takes a small note. "Next Monday we have a presentation," a colleague says. The chairman walks in with the secretary. "Good team, good project," he nods. Rafi smiles. An office is a small world of its own.',
    bn: 'রাফি প্রথমবার বাবার অফিসে যায়। প্রতিটা ডেস্ক পরিষ্কার। সম্মেলন কক্ষে বড় সভা চলছে। "প্রতিটা বিভাগের নিজস্ব দল আছে," আব্বা বোঝান। মোটা এক দলিল আর মাসিক প্রতিবেদন দেখান। "এই প্রকল্পের শেষ তারিখ কড়া।" দেয়ালে কাজের তালিকা — সপ্তাহের পুরো সময়সূচি। ইমেইল ইনবক্স ব্যস্ত। প্রিন্টার গুনগুন করে। প্রতিটা ফাইল লেবেল করা ফোল্ডারে। রাফি ছোট নোট নেয়। "সোমবার উপস্থাপনা আছে," এক সহকর্মী বলেন। চেয়ারম্যান সচিবকে নিয়ে ঢোকেন। "ভালো দল, ভালো প্রকল্প," মাথা নাড়েন।',
    tip: "নিজের একটা কল্পিত অফিস আঁকো — কে কোথায় বসে?",
  },

  "politics-gov": {
    themeId: "politics-gov",
    title: "নির্বাচনের রাত",
    titleEn: "Election Night",
    en: 'Rafi watches election news with Abba. The government is old, and the president will change soon. The prime minister speaks in parliament. "Every citizen must vote," she says. Each voter has one voice. Two big parties fight for policy. One promises jobs; one promises a strong republic. "Democracy is not easy," Abba says. On TV a young leader runs a bright campaign. The mayor of Dhaka smiles for the camera. "Every official has an authority," Abba adds. "Every authority has a duty." A workers\' union stands quiet in the corner. The national anthem plays. "One country, one government, many voices," Rafi thinks. "Politics is loud, but the vote is silent."',
    bn: 'রাফি আব্বার সাথে নির্বাচনের খবর দেখে। সরকার পুরোনো, শীঘ্রই প্রেসিডেন্ট বদলাবে। প্রধানমন্ত্রী সংসদে বক্তব্য দেন। "প্রতিটা নাগরিক ভোট দিক," বলেন। প্রতিটা ভোটারের এক কণ্ঠ। দুটি বড় দল নীতির জন্য লড়ে। একটা চাকরির প্রতিশ্রুতি দেয়, একটা শক্ত প্রজাতন্ত্রের। "গণতন্ত্র সহজ না," আব্বা বলেন। টিভিতে এক তরুণ নেতা উজ্জ্বল প্রচারণা চালান। ঢাকার মেয়র ক্যামেরায় হাসেন। "প্রতিটা কর্মকর্তার একটা কর্তৃত্ব," আব্বা যোগ করেন। শ্রমিক ইউনিয়ন কোণে চুপ। জাতীয় সংগীত বাজে। "এক দেশ, এক সরকার, অনেক কণ্ঠ।"',
    tip: '"vote, party, leader" — এই ৩ শব্দ দিয়ে ১টা বাক্য বানাও।',
  },

  economy: {
    themeId: "economy",
    title: "আব্বার অর্থনীতি ক্লাস",
    titleEn: "Abba's Economics Class",
    en: 'At dinner Abba explains the economy to Rafi. "Our economic life depends on trade." Bangladesh has a big garment industry. We export shirts; we import oil. "Growth is slow this year," Abba says. "Tax money runs the country. Without tax there is more poverty." Rafi asks about finance. "Financial planning is key," Abba smiles. "Invest early, invest small. Every investment grows with time." He draws two arrows — supply and demand. "When farmers produce more rice, the price falls. When production drops, the price rises." A wise consumer does not consume too much. "Buy fewer goods, buy better goods," Amma adds. The economy, in the end, is about honest daily choices.',
    bn: 'রাতের খাবারে আব্বা রাফিকে অর্থনীতি বোঝান। "আমাদের অর্থনৈতিক জীবন বাণিজ্যের উপর নির্ভর।" বাংলাদেশে বড় পোশাক শিল্প। আমরা শার্ট রপ্তানি করি, তেল আমদানি করি। "এবারের প্রবৃদ্ধি ধীর," আব্বা বলেন। "করের টাকায় দেশ চলে। কর ছাড়া দারিদ্র্য বাড়ে।" রাফি অর্থের কথা জিজ্ঞেস করে। "আর্থিক পরিকল্পনা মূল বিষয়," আব্বা হাসেন। "তাড়াতাড়ি বিনিয়োগ কর, ছোট বিনিয়োগ কর।" তিনি দুটি তীর আঁকেন — জোগান ও চাহিদা। "চাষী বেশি চাল উৎপাদন করলে দাম পড়ে।" জ্ঞানী ভোক্তা বেশি ভোগ করেন না। "কম পণ্য কিনো, ভালো পণ্য কিনো," আম্মা বলেন।',
    tip: "একটা জিনিস কিনার আগে supply ও demand কেমন ভাবো।",
  },

  "society-culture": {
    themeId: "society-culture",
    title: "গ্রামের মেলা",
    titleEn: "The Village Fair",
    en: 'Nadia visits a folk fair in her grandfather\'s village. "This is our society, this is our culture," grandfather smiles. The community is close. A traditional song plays. "Every custom tells a story." Three generations sit under one tree. "Some things are for the class of kings; some are for the common man." Public life and private life meet at this fair. The social ties are warm, the cultural colours are bright. "Folk music is a native voice." A young tourist takes photos. "The world is international now, the market is global," grandfather says. "But civilization grows from small villages." The population is large, the country is diverse. "Many faiths, one home," Nadia writes in her diary.',
    bn: 'নাদিয়া দাদার গ্রামে লোকমেলায় যায়। "এটাই আমাদের সমাজ, এটাই আমাদের সংস্কৃতি," দাদা হাসেন। সম্প্রদায় ঘনিষ্ঠ। ঐতিহ্যবাহী গান বাজে। "প্রতিটা রীতি একটা গল্প বলে।" তিন প্রজন্ম এক গাছের নিচে বসে। "কিছু জিনিস রাজার শ্রেণির, কিছু সাধারণ মানুষের।" জনজীবন ও ব্যক্তিজীবন মেলায় মেশে। সামাজিক বন্ধন উষ্ণ, সাংস্কৃতিক রং উজ্জ্বল। "লোকসংগীত দেশীয় কণ্ঠ।" এক তরুণ পর্যটক ছবি তোলে। "পৃথিবী এখন আন্তর্জাতিক, বাজার বৈশ্বিক," দাদা বলেন। "সভ্যতা ছোট গ্রাম থেকে বাড়ে।" জনসংখ্যা বড়, দেশ বৈচিত্র্যময়।',
    tip: 'নিজের এলাকার একটা "tradition" ইংরেজিতে ২ বাক্যে বলো।',
  },

  "history-past": {
    themeId: "history-past",
    title: "পুরোনো রাজার গল্প",
    titleEn: "Story of Old Kings",
    en: 'The history teacher tells the class about ancient kings. "History is a mirror of the past." The room is quiet. On the historical map she shows a great empire from long ago. "The modern world was born from the old world." One century has ten decades, one era has many centuries. "Every age has its heroes," she smiles. She talks of a great event — a long war and a short peace. A king and his queen ruled for fifty years. A brave revolution changed everything. "A scientist wanted to discover; his discovery became a new invention." One hero fell in battle, but his name lives on. "History is not a dead thing," she says. "It walks with us today."',
    bn: 'ইতিহাস শিক্ষক ক্লাসে প্রাচীন রাজাদের গল্প বলেন। "ইতিহাস অতীতের আয়না।" ঘর নীরব। ঐতিহাসিক মানচিত্রে অনেক আগের বিশাল এক সাম্রাজ্য দেখান। "আধুনিক পৃথিবী পুরোনো পৃথিবী থেকে জন্মেছে।" এক শতাব্দীতে দশ দশক, এক যুগে অনেক শতাব্দী। "প্রতিটা যুগের নিজস্ব বীর," হাসেন। বড় এক ঘটনা — দীর্ঘ যুদ্ধ ও ছোট শান্তির কথা বলেন। এক রাজা ও রানি পঞ্চাশ বছর রাজত্ব করেন। সাহসী এক বিপ্লব সব বদলে দেয়। "বিজ্ঞানী আবিষ্কার করতে চেয়েছিলেন; তার আবিষ্কার নতুন উদ্ভাবনে রূপ নেয়।" এক বীর যুদ্ধে পড়ে যান, নাম বেঁচে থাকে।',
    tip: "১৯৭১ সালের ৩টা ইংরেজি শব্দ বলো: war, freedom, hero।",
  },

  "science-basics": {
    themeId: "science-basics",
    title: "নাদিয়ার প্রথম পরীক্ষা",
    titleEn: "Nadia's First Experiment",
    en: 'In the science lab Nadia mixes two liquids for the first time. "A scientist is patient," the teacher says. "Every experiment needs care." This is her first small research. "Theory comes first, then the method," the teacher writes on the board. "Every fact needs evidence, and every claim needs data." Nadia runs a simple test. The result matches the theory — she can prove it. The laboratory is bright. On one shelf: chemistry books; on another: biology and physics. "Each chemical is a small story," the teacher smiles. "Each element is a piece of the world." A jar shows one substance in three forms — solid, liquid, and gas. Nadia writes in her book: "Science is careful curiosity."',
    bn: 'বিজ্ঞান পরীক্ষাগারে নাদিয়া প্রথমবার দুটি তরল মেশায়। "বিজ্ঞানী ধৈর্যশীল," শিক্ষক বলেন। "প্রতিটা পরীক্ষা যত্ন চায়।" এটা তার প্রথম ছোট গবেষণা। "তত্ত্ব আগে, পদ্ধতি পরে," শিক্ষক বোর্ডে লেখেন। "প্রতিটা তথ্যের প্রমাণ লাগে, প্রতিটা দাবির উপাত্ত লাগে।" নাদিয়া সহজ এক পরীক্ষা চালায়। ফলাফল তত্ত্বের সাথে মেলে — প্রমাণ করা যায়। ল্যাবরেটরি উজ্জ্বল। এক তাকে রসায়ন বই, আরেক তাকে জীববিদ্যা ও পদার্থবিদ্যা। "প্রতিটা রাসায়নিক ছোট গল্প।" এক পাত্রে একটি পদার্থ তিন রূপে — কঠিন, তরল, গ্যাস। নাদিয়া লেখে: "বিজ্ঞান হলো যত্নশীল কৌতূহল।"',
    tip: "রান্নাঘরে solid → liquid → gas ৩টা উদাহরণ ভাবো।",
  },

  "biology-life": {
    themeId: "biology-life",
    title: "মাইক্রোস্কোপের নিচে পাতা",
    titleEn: "Leaf Under the Microscope",
    en: 'The biology teacher shows a plant cell under a microscope. "Life is small, but living things share big ideas." Every creature is made of cells. A cell builds a tissue; a tissue builds an organ. "Muscle holds you up, bone gives you shape, blood carries food." The brain thinks, the heart beats, the lung breathes, and the skin protects. Not all species are big — insects are small but powerful. In the garden a small seed sends a strong root into the earth. A green leaf catches the light. "Growth is slow but sure," the teacher smiles. "Nature works in silence." Every animal, every plant, every tiny cell is a piece of one living story.',
    bn: 'জীববিজ্ঞান শিক্ষক মাইক্রোস্কোপে গাছের কোষ দেখান। "জীবন ছোট, কিন্তু জীবিত সবাই বড় ধারণা ভাগ করে।" প্রতিটা প্রাণী কোষ দিয়ে গড়া। কোষ কলা গড়ে, কলা অঙ্গ গড়ে। "পেশি ধরে রাখে, হাড় আকার দেয়, রক্ত খাবার বহন করে।" মস্তিষ্ক ভাবে, হৃৎপিণ্ড স্পন্দন করে, ফুসফুস শ্বাস নেয়, ত্বক রক্ষা করে। সব প্রজাতি বড় না — পোকা ছোট, কিন্তু শক্তিশালী। বাগানে ছোট বীজ মাটিতে শক্ত মূল পাঠায়। সবুজ পাতা আলো ধরে। "বৃদ্ধি ধীর, কিন্তু নিশ্চিত," শিক্ষক হাসেন। "প্রকৃতি নীরবে কাজ করে।"',
    tip: "নিজের হাতে ৫টা organ চেনো: heart, brain, lung, skin, muscle।",
  },

  "environment-earth": {
    themeId: "environment-earth",
    title: "গাছ লাগানোর দিন",
    titleEn: "Tree Planting Day",
    en: 'On World Environment Day the class plants trees. "The environment is our home," the teacher says. "Every environmental step counts." The earth is one planet, and it is tired. Land is drying, the sea is warming. Every ocean is full of waste. In some places the forest is cut, in some the mountain is bare, in some the desert grows. Wildlife is in danger. Pollution is bad; factories pollute rivers. "Protection is not a big word," the teacher says. "It is a small habit." Do not throw waste. Recycle old paper. "When we damage, we destroy; when we care, we restore." Rafi holds a small green plant. "Small green today, big green tomorrow."',
    bn: 'বিশ্ব পরিবেশ দিবসে ক্লাস গাছ লাগায়। "পরিবেশ আমাদের ঘর," শিক্ষক বলেন। "প্রতিটা পরিবেশগত পদক্ষেপ গুরুত্বপূর্ণ।" পৃথিবী এক গ্রহ, ক্লান্ত। জমি শুকিয়ে যাচ্ছে, সমুদ্র উষ্ণ হচ্ছে। প্রতিটা মহাসাগর বর্জ্যে ভরা। কোথাও বন কাটা, কোথাও পাহাড় ন্যাড়া, কোথাও মরুভূমি বাড়ছে। বন্যপ্রাণী বিপদে। দূষণ খারাপ; কারখানা নদী দূষিত করে। "সংরক্ষণ বড় শব্দ না, ছোট অভ্যাস," শিক্ষক বলেন। বর্জ্য ফেলো না। পুরোনো কাগজ পুনর্ব্যবহার কর। "ক্ষতি করলে ধ্বংস হয়, যত্ন নিলে ফিরে আসে।" রাফি ছোট সবুজ চারা ধরে।',
    tip: "আজ ১টা recycle-এর জিনিস খুঁজে ইংরেজিতে নাম বলো।",
  },

  "climate-weather": {
    themeId: "climate-weather",
    title: "ঝড়ের বিকেল",
    titleEn: "A Stormy Afternoon",
    en: 'The climate is changing. The weather is strange this year. The morning is warm, and the noon is suddenly cool. A big storm is coming. The wind is loud, and a black cloud covers the sun. The tree gives shade, and a long shadow falls on the road. "The temperature dropped ten degrees in one hour," Abba says. Last month was very dry, but today the streets are wet. In the north there is a small flood. In the far hills there is snow and ice. "The sun and the sky play games," Nadia laughs. The forecast on TV warns of a disaster. "Nature is strong," Amma says. "Respect the weather, love the earth."',
    bn: 'জলবায়ু বদলাচ্ছে। এবারের আবহাওয়া অদ্ভুত। সকাল উষ্ণ, দুপুরে হঠাৎ শীতল। বড় ঝড় আসছে। বাতাস জোরে, কালো মেঘ সূর্য ঢাকে। গাছ ছায়া দেয়, রাস্তায় লম্বা ছায়া পড়ে। "এক ঘণ্টায় তাপমাত্রা ১০ ডিগ্রি পড়েছে," আব্বা বলেন। গত মাস শুকনো ছিল, আজ রাস্তা ভেজা। উত্তরে ছোট বন্যা। দূরের পাহাড়ে বরফ ও তুষার। "সূর্য আর আকাশ খেলা করে," নাদিয়া হাসে। টিভিতে পূর্বাভাস দুর্যোগের সতর্কতা দেয়। "প্রকৃতি শক্তিশালী," আম্মা বলেন।',
    tip: 'প্রতিদিন সকালে ইংরেজিতে আবহাওয়া বলো: "Today is warm and cloudy."',
  },

  "energy-power": {
    themeId: "energy-power",
    title: "লোডশেডিংয়ের রাত",
    titleEn: "Night Without Electricity",
    en: 'The city has no electricity tonight. Rafi lights a candle. "Energy is life," Abba sighs. "Power runs the whole city." The electric fan is quiet, and the electrical bulb is dark. "We need better fuel," Abba says. "Gas is short, oil is dear." On the roof there is a small solar panel and a big battery. "The engine of tomorrow will be clean." A machine downstairs still hums. "A powerful country is not just a rich country," Abba adds. "A weak grid is a weak nation." The force of a river can generate power. "Water is one good source, sun is another; supply must be steady." People consume too much. "Nuclear power is a hard question," he ends. "But the light must come back."',
    bn: 'আজ শহরে বিদ্যুৎ নাই। রাফি মোমবাতি জ্বালায়। "শক্তিই জীবন," আব্বা দীর্ঘশ্বাস ফেলেন। "বিদ্যুৎ সারা শহর চালায়।" বৈদ্যুতিক পাখা চুপ, বৈদ্যুতিক বাতি অন্ধকার। "আমাদের ভালো জ্বালানি দরকার," আব্বা বলেন। "গ্যাস অল্প, তেল দামি।" ছাদে ছোট সৌর প্যানেল ও বড় ব্যাটারি। "আগামীর ইঞ্জিন হবে পরিচ্ছন্ন।" নিচে এক যন্ত্র এখনো গুনগুন করে। "শক্তিশালী দেশ শুধু ধনী দেশ না, দুর্বল বিদ্যুৎ ব্যবস্থা দুর্বল জাতি।" নদীর বল বিদ্যুৎ উৎপাদন করতে পারে। মানুষ অতিরিক্ত ভোগ করে। "পারমাণবিক শক্তি কঠিন প্রশ্ন।"',
    tip: 'ঘরে ১টা "electric" জিনিস, ১টা "battery" জিনিস দেখাও।',
  },

  "internet-web": {
    themeId: "internet-web",
    title: "নাদিয়ার প্রথম ইমেইল",
    titleEn: "Nadia's First Email",
    en: 'Nadia opens the internet on her laptop. "I want to be online today," she smiles. She visits a study website. Each page has a bright link. She uses the search box in the browser. The network is slow, but the connection holds. A friend sends a message with a short video. Nadia will post a small photo later. She will follow her favourite writer. First she has to log in. She writes a strong password. "A user must be careful," Abba warns. "Never share your account." A small red icon blinks — a friend\'s blog has a new post. "Be safe on the web," Abba adds. "One bad file can be a virus." Nadia nods and starts to read.',
    bn: 'নাদিয়া ল্যাপটপে ইন্টারনেট খোলে। "আজ অনলাইন থাকব," হাসে। এক পড়াশোনার ওয়েবসাইটে যায়। প্রতিটা পেজে উজ্জ্বল লিংক। ব্রাউজারে সার্চ বক্স ব্যবহার করে। নেটওয়ার্ক ধীর, কিন্তু সংযোগ ঠিক আছে। বন্ধু ছোট ভিডিও দিয়ে বার্তা পাঠায়। পরে ছোট এক ছবি পোস্ট করবে। পছন্দের লেখককে অনুসরণ করবে। আগে লগ ইন করতে হবে। শক্ত পাসওয়ার্ড লেখে। "ব্যবহারকারীকে সতর্ক হতে হয়," আব্বা সাবধান করেন। "অ্যাকাউন্ট শেয়ার করো না।" ছোট লাল আইকন জ্বলে — বন্ধুর ব্লগে নতুন পোস্ট। "একটা খারাপ ফাইল ভাইরাস হতে পারে।"',
    tip: "নিজের পাসওয়ার্ড ৩ মাসে ১ বার বদলাও।",
  },

  "law-court": {
    themeId: "law-court",
    title: "শান্ত আদালত",
    titleEn: "The Quiet Court",
    en: 'The lawyer speaks calmly in a quiet courtroom. "Every law is for one thing — justice." The legal papers sit on the table. The court is small but serious. The judge listens. A young lawyer stands up. "My client is not a criminal." The other side says he is guilty. "He is innocent," the lawyer answers. "You cannot arrest an honest man." A guard brings a prisoner from the prison. "Punishment must fit the crime; you must not punish the wrong man." One witness comes and speaks the truth. The trial is fair, the jury is silent. "Every case has two sides," the judge says. "The victim needs justice too." The court rises. "Law is slow, but law is patient."',
    bn: 'শান্ত আদালতে আইনজীবী শান্তভাবে বলেন। "প্রতিটা আইন একটাই জিনিসের জন্য — ন্যায়বিচার।" আইনি কাগজ টেবিলে। আদালত ছোট, কিন্তু গুরুতর। বিচারক শোনেন। এক তরুণ আইনজীবী দাঁড়ান। "আমার মক্কেল অপরাধী না।" অপর পক্ষ বলে সে দোষী। "সে নির্দোষ," আইনজীবী উত্তর দেন। "সৎ মানুষকে গ্রেপ্তার করা যায় না।" রক্ষী কারাগার থেকে এক বন্দী আনেন। "শাস্তি অপরাধের সাথে মিলে হতে হবে; ভুল মানুষকে শাস্তি দিও না।" এক সাক্ষী এসে সত্য বলেন। বিচার ন্যায্য, জুরি নীরব। "শিকারেরও ন্যায় প্রয়োজন।"',
    tip: '"guilty" আর "innocent" মুখে ৩ বার বলো — উচ্চারণ গেঁথে যাক।',
  },

  "crime-mystery": {
    themeId: "crime-mystery",
    title: "নাদিয়া গোয়েন্দা",
    titleEn: "Detective Nadia",
    en: 'A ring is missing. Nadia becomes a small detective. "Every mystery has a clue," she smiles. "A thief did not just steal a ring — a thief left a trace." The window is open. Someone tried to rob the room, but it is not a murder scene. There is no gun, no weapon. Nadia will not chase; she will think. If she runs, the suspect can escape. "First I must catch the truth," she says. She writes a list of every suspect. Then she starts to investigate. Her investigation finds a secret: the ring is not stolen. Amma hid it in a safe box. "No danger," Nadia laughs. "Sometimes we discover the answer at home, not on the street."',
    bn: 'একটা আংটি হারিয়ে গেছে। নাদিয়া ছোট গোয়েন্দা হয়ে ওঠে। "প্রতিটা রহস্যের একটা সূত্র থাকে।" "চোর শুধু আংটি চুরি করেনি — চোর একটা চিহ্ন রেখে গেছে।" জানালা খোলা। কেউ ঘরে ডাকাতির চেষ্টা করেছে, কিন্তু এটা খুনের দৃশ্য না। কোনো বন্দুক নেই, কোনো অস্ত্র নেই। নাদিয়া ধাওয়া করবে না, ভাববে। দৌড়ালে সন্দেহভাজন পালাতে পারে। "আগে সত্যটা ধরতে হবে," বলে। প্রতিটা সন্দেহভাজনের তালিকা করে। তারপর তদন্ত শুরু করে। তদন্তে গোপন কথা বের হয়: আংটি চুরি হয়নি। আম্মা নিরাপদ বাক্সে লুকিয়ে রেখেছেন। "কোনো বিপদ নেই।"',
    tip: 'ঘরে ১টা "clue" খেলো — কেউ কিছু লুকাক, তুমি খোঁজো।',
  },

  "war-peace": {
    themeId: "war-peace",
    title: "১৯৭১-এর দাদা",
    titleEn: "Grandfather of 1971",
    en: 'Grandfather tells stories from the war of 1971. "We were a small army, but we were one people." A soldier is not just a man with a weapon; a soldier is a heart with a country. "Every battle was hard. Every enemy was afraid." He remembers a small victory after one big defeat. "Peace came slowly." The country needed a strong defence. The enemy would attack at night. "Every hero was brave, but every hero was tired." There was a real threat, and many men had a deep wound. Some were injured; some were lost. Later a peace treaty was signed. "Military life is not glory," grandfather says. "A soldier must protect, and a country must give freedom."',
    bn: 'দাদা ১৯৭১ সালের যুদ্ধের গল্প বলেন। "আমরা ছোট সেনাবাহিনী ছিলাম, কিন্তু এক জাতি।" সৈনিক শুধু অস্ত্রধারী মানুষ না; সৈনিক দেশের হৃদয়। "প্রতিটা যুদ্ধ কঠিন ছিল, প্রতিটা শত্রু ভয়ে ছিল।" বড় এক পরাজয়ের পর ছোট এক জয়ের কথা মনে করেন। "শান্তি ধীরে এলো।" দেশের শক্ত প্রতিরক্ষা দরকার ছিল। শত্রু রাতে আক্রমণ করত। "প্রতিটা বীর সাহসী, কিন্তু ক্লান্ত।" আসল হুমকি, অনেকের গভীর ক্ষত। কেউ আহত, কেউ হারিয়ে গেছে। পরে শান্তি চুক্তি সই হয়। "সৈনিকের কাজ রক্ষা করা, দেশের কাজ স্বাধীনতা দেওয়া।"',
    tip: "দাদা/নানার কাছে ১৯৭১-এর ১টা কথা শোনো, ইংরেজিতে বলার চেষ্টা কর।",
  },

  "religion-faith": {
    themeId: "religion-faith",
    title: "শুক্রবার মসজিদে",
    titleEn: "Friday at the Mosque",
    en: 'On Friday the family visits the neighbourhood mosque. "Religion is a soft light," Abba says. Everyone here is religious, but nobody is loud. Faith is quiet. People pray in a long line. Each prayer is short but deep. "There is one god, many voices." "The human spirit is small, but the spiritual road is wide." The holy book sits on a clean shelf. Some people go to a temple, some to a mosque, some to a church, and each has its own priest. "The soul is the same colour everywhere," Abba says. "To be moral is to give honour to others." This day is sacred. A small ceremony ends the noon. Old and young join in worship. Grandmother whispers a soft blessing over Nadia\'s head.',
    bn: 'শুক্রবার পরিবার পাড়ার মসজিদে যায়। "ধর্ম নরম আলো," আব্বা বলেন। এখানে সবাই ধার্মিক, কেউ হৈচৈ করে না। বিশ্বাস নীরব। মানুষ লম্বা কাতারে নামাজ পড়ে। প্রতিটা প্রার্থনা ছোট, গভীর। "এক ঈশ্বর, অনেক কণ্ঠ।" "মানুষের আত্মা ছোট, কিন্তু আধ্যাত্মিক পথ প্রশস্ত।" পবিত্র বই পরিষ্কার তাকে। কেউ মন্দিরে যায়, কেউ মসজিদে, কেউ গির্জায়; প্রত্যেকের নিজস্ব পুরোহিত। "সব জায়গায় আত্মার রং একই।" "নৈতিক হওয়া মানে অন্যকে সম্মান দেওয়া।" আজকের দিন পবিত্র। ছোট এক অনুষ্ঠান দুপুর শেষ করে। বৃদ্ধ-তরুণ উপাসনায় মেশে। দাদি নাদিয়ার মাথায় নরম আশীর্বাদ ফিসফিস করেন।',
    tip: 'আজ ঘরে একটা "blessing" ইংরেজিতে বলো: "May you be safe."',
  },

  "philosophy-mind": {
    themeId: "philosophy-mind",
    title: "রাফির চিন্তার শুক্রবার",
    titleEn: "Rafi's Thinking Friday",
    en: 'Rafi reads an old philosophy book on a quiet Friday. "The mind is a small room with a big window," the book says. A thought moves like a bird. Every concept is a chair for the mind to sit on. "Theory is a tree; truth is a fruit." "Reason is the bridge, logic is the plank." "Wisdom is old knowledge with new eyes." Rafi asks himself: What is the meaning of my day? What is the purpose of my study? He respects his own opinion, but he also hears another view. "To conclude too fast is to be blind. To consider is to be free. To reflect is to grow." He does not fear the abstract. "Every existence has a small quiet principle."',
    bn: 'রাফি চুপচাপ শুক্রবারে পুরোনো এক দর্শনের বই পড়ে। "মন ছোট এক ঘর, বড় জানালা," বইটা বলে। এক ভাবনা পাখির মতো ওড়ে। প্রতিটা ধারণা মনের বসার চেয়ার। "তত্ত্ব গাছ, সত্য ফল।" "যুক্তি সেতু, লজিক তক্তা।" "জ্ঞান পুরোনো, প্রজ্ঞা নতুন চোখে।" রাফি নিজেকে জিজ্ঞেস করে: আমার দিনের অর্থ কী? পড়ার উদ্দেশ্য কী? সে নিজের মত সম্মান করে, অন্যের দৃষ্টিভঙ্গিও শোনে। "তাড়াতাড়ি সিদ্ধান্তে যাওয়া অন্ধত্ব। বিবেচনা করা মুক্তি। প্রতিফলন বৃদ্ধি।" বিমূর্ত ভাবনায় সে ভয় পায় না। "প্রতিটা অস্তিত্বের ছোট নীরব একটা নীতি আছে।"',
    tip: 'রোজ রাতে ১টা প্রশ্ন লিখো: "What did I learn today?"',
  },

  literature: {
    themeId: "literature",
    title: "গ্রন্থাগারে বইয়ের ক্লাব",
    titleEn: "Book Club at the Library",
    en: 'Nadia joins a small book club at the library. "Literature opens doors," the librarian smiles. Today they will read a short novel and a warm story, and one soft poem. "Poetry is music of words," a friend says. "Every poet paints with a pen." A young writer sits by the window. An old author speaks about his new book. "Each chapter is a small world." One character is quiet, one is loud. The plot is simple; the theme is love. Language is the bridge between hearts. "We will publish two short pieces," the publisher tells them. "A new edition next month." A student wants to translate a French novel into Bangla. "Translation is a second birth," she smiles. "This is a modern classic."',
    bn: 'নাদিয়া গ্রন্থাগারে ছোট বই ক্লাবে যোগ দেয়। "সাহিত্য দরজা খুলে দেয়," গ্রন্থাগারিক হাসেন। আজ একটা ছোট উপন্যাস, একটা উষ্ণ গল্প, আর নরম এক কবিতা পড়বে। "কবিতা শব্দের সংগীত," এক বন্ধু বলে। "প্রতিটা কবি কলম দিয়ে ছবি আঁকে।" জানালার পাশে এক তরুণ লেখক। পুরোনো এক লেখক তার নতুন বইয়ের কথা বলেন। "প্রতিটা অধ্যায় ছোট পৃথিবী।" একটা চরিত্র চুপ, একটা উচ্চস্বর। প্লট সহজ, বিষয় ভালোবাসা। ভাষা হৃদয়ের সেতু। "দুটি ছোট লেখা প্রকাশ করব," প্রকাশক বলেন। "পরের মাসে নতুন সংস্করণ।" এক ছাত্রী ফরাসি উপন্যাস বাংলায় অনুবাদ করতে চায়।',
    tip: "একটা ছোট বাংলা কবিতার ৪ লাইন ইংরেজিতে অনুবাদ কর।",
  },

  "film-cinema": {
    themeId: "film-cinema",
    title: "সিনেমা হলে বন্ধুরা",
    titleEn: "Friends at the Cinema",
    en: 'The friends go to a new movie together. "A film is a story with pictures," Karim says. The cinema is full. A famous actor plays the hero; a young actress plays the sister. The director is well-known. "Every scene is a small role in a big life." A big star walks on screen and the crowd claps. Today\'s film is not a comedy, not a horror, not a pure romance. It is a warm drama. "The script is honest," Nadia whispers. The audience is quiet. The ticket was cheap. The old theatre is warm. After the film they read a review on the phone. "Good entertainment," the review says. "A film for the family."',
    bn: 'বন্ধুরা একসাথে নতুন সিনেমা দেখতে যায়। "সিনেমা ছবি দিয়ে গল্প," কারিম বলে। সিনেমা হল পূর্ণ। বিখ্যাত এক অভিনেতা নায়ক, তরুণ এক অভিনেত্রী বোনের ভূমিকায়। পরিচালক পরিচিত। "প্রতিটা দৃশ্য বড় জীবনের ছোট ভূমিকা।" বড় এক তারকা পর্দায় আসেন, দর্শকরা হাততালি দেয়। আজকের সিনেমা কমেডি না, হরর না, শুধু রোম্যান্সও না। উষ্ণ এক নাটক। "চিত্রনাট্য সৎ," নাদিয়া ফিসফিস করে। দর্শক শান্ত। টিকিট সস্তা ছিল। পুরোনো প্রেক্ষাগৃহ উষ্ণ। পরে ফোনে সমালোচনা পড়ে। "ভালো বিনোদন — পরিবারের জন্য।"',
    tip: "প্রিয় বাংলা সিনেমার নাম ইংরেজি অক্ষরে বলো।",
  },

  "music-genres": {
    themeId: "music-genres",
    title: "রাতের সংগীত",
    titleEn: "Night of Music",
    en: 'Karim plays guitar; Nadia sings; Rafi hums a folk tune. "Music is a soft language," Karim smiles. He is not a big musician, but he loves a small band. The singer must feel each song. Singing is not just a voice — it is a heart. "Sing when you are sad, sing when you are glad." Nadia loves to dance to a slow rhythm. A good tune stays in the mind. Each note is a small step; each sound is a small step. "Some like jazz, some like rock," Karim says. "Some love classical, some love folk." He picks up the guitar; a soft drum plays behind. "One day we will play at a real concert," he laughs. "And we will make our first album."',
    bn: 'কারিম গিটার বাজায়, নাদিয়া গায়, রাফি লোকসুর গুনগুন করে। "সংগীত নরম ভাষা," কারিম হাসে। বড় সংগীতশিল্পী না, কিন্তু ছোট এক ব্যান্ড ভালোবাসে। গায়ককে প্রতিটা গান অনুভব করতে হয়। গান শুধু কণ্ঠ না — হৃদয়। "দুঃখে গাও, আনন্দে গাও।" নাদিয়া ধীর ছন্দে নাচতে ভালোবাসে। ভালো সুর মনে থাকে। প্রতিটা স্বর ছোট এক ধাপ, প্রতিটা শব্দ ছোট এক ধাপ। "কারো জ্যাজ প্রিয়, কারো রক," কারিম বলে। "কেউ শাস্ত্রীয়, কেউ লোকসঙ্গীত।" গিটার তোলে, পেছনে নরম ড্রাম। "একদিন আসল কনসার্টে বাজাব," হাসে। "প্রথম অ্যালবাম বানাব।"',
    tip: "১টা গানের ৪ লাইনের সুর গুনগুন কর, ইংরেজি শব্দ খুঁজো।",
  },

  "sports-comp": {
    themeId: "sports-comp",
    title: "স্কুলের ফাইনাল",
    titleEn: "The School Final",
    en: 'The school team plays the final football match. Sport teaches life. In sports one wins, one loses. The team is ready. Every player looks calm. The coach speaks softly. "Competition is not war." Two teams will compete, but only one competitor will lift the cup. "To win is good; to lose with a smile is greater," the coach says. The match starts. The score is one to one. The winner will go to the district league. A big championship is next month. Nadia dreams of a gold medal. The stadium is loud. A crowd of fans shouts. "Training was hard," the captain says at the end. "Today the training paid us back."',
    bn: 'স্কুল দল ফাইনাল ফুটবল খেলে। খেলা জীবন শেখায়। খেলাধুলায় কেউ জেতে, কেউ হারে। দল প্রস্তুত। প্রতিটা খেলোয়াড় শান্ত। কোচ নরম কণ্ঠে বলেন। "প্রতিযোগিতা যুদ্ধ না।" দুই দল প্রতিদ্বন্দ্বিতা করবে, কিন্তু কেবল এক প্রতিযোগী কাপ তুলবে। "জেতা ভালো; হাসিমুখে হারা বড়।" ম্যাচ শুরু। স্কোর ১-১। বিজয়ী জেলা লিগে যাবে। পরের মাসে বড় চ্যাম্পিয়নশিপ। নাদিয়া সোনার পদকের স্বপ্ন দেখে। স্টেডিয়াম গর্জন করে। দর্শকরা চেঁচায়। "অনুশীলন কঠিন ছিল," অধিনায়ক শেষে বলে। "আজ ফল দিল।"',
    tip: 'আজ ১টা "training" শব্দ ব্যবহার করে বাক্য বানাও।',
  },

  "travel-adventure": {
    themeId: "travel-adventure",
    title: "ফয়সালের একলা ভ্রমণ",
    titleEn: "Faisal's Solo Trip",
    en: 'Faisal plans a solo trip to Cox\'s Bazar. "I need to travel," he says. "A journey clears the head." This trip will be a small adventure. He wants to explore the coast — a two-day expedition. He books a local guide. He is not a foreign tourist, but tourism is growing here. The destination is famous. "I will arrive by night. Arrival should be quiet." Two days later he will depart in the afternoon. The hotel is small and clean. He forgot his passport at home — but for the coast he needs no passport. His luggage is light — one suitcase, one bag. On the way back he takes a short flight. "Next tour will be to the hills," he thinks. "Then a visa, then a bigger world."',
    bn: 'ফয়সাল একা কক্সবাজার যাওয়ার পরিকল্পনা করে। "আমার ভ্রমণ দরকার," বলে। "যাত্রা মাথা পরিষ্কার করে।" এই সফর ছোট এক অভিযান হবে। উপকূল অন্বেষণ করতে চায় — দুই দিনের অভিযান। স্থানীয় গাইড বুক করে। সে বিদেশি পর্যটক না, কিন্তু পর্যটন বাড়ছে এখানে। গন্তব্য বিখ্যাত। "রাতে পৌঁছাব। আগমন নীরব হওয়া উচিত।" দু\'দিন পর দুপুরে ফিরবে। হোটেল ছোট, পরিষ্কার। পাসপোর্ট ঘরে ভুলে গেছে — উপকূলে পাসপোর্ট লাগে না। তার লাগেজ হালকা — এক স্যুটকেস, এক ব্যাগ। ফেরার পথে ছোট ফ্লাইট নেয়। "পরবর্তী সফর পাহাড়ে," ভাবে। "তারপর ভিসা, তারপর বড় পৃথিবী।"',
    tip: "কোথাও গেলে ৫টা নতুন শব্দ ইংরেজিতে লিখে আনো।",
  },

  "sea-ocean": {
    themeId: "sea-ocean",
    title: "সূর্যাস্তে কক্সবাজার",
    titleEn: "Sunset at Cox's Bazar",
    en: 'Faisal walks on the beach of Cox\'s Bazar at sunset. The sea is calm, but the ocean is deep. A soft wave touches his feet. The sand is warm under his toes. The coast is long, and the shore is quiet. A small ship stands far away. A tiny boat with a red sail moves slowly. Two boys swim near the rocks. A brave man tries to dive deep. Fishermen wait for the night — fishing is their life. "The deep water hides many stories." The tide is coming in. Far away a big port sleeps. An old sailor smiles from a boat. He shows Faisal a bag of salt and a pink shell. "The sea gives, the sea takes."',
    bn: 'ফয়সাল সূর্যাস্তে কক্সবাজারের সৈকতে হাঁটে। সমুদ্র শান্ত, মহাসাগর গভীর। নরম ঢেউ পায়ে ছোঁয়। বালু পায়ের নিচে উষ্ণ। উপকূল লম্বা, তীর নীরব। দূরে ছোট এক জাহাজ দাঁড়ানো। লাল পালের ছোট নৌকা ধীরে চলে। দুটি ছেলে পাথরের কাছে সাঁতার কাটে। এক সাহসী মানুষ গভীরে ডুব দেয়। জেলেরা রাতের অপেক্ষায় — মাছ ধরা তাদের জীবন। "গভীর জল অনেক গল্প লুকায়।" জোয়ার আসছে। দূরে বড় বন্দর ঘুমায়। এক পুরোনো নাবিক নৌকা থেকে হাসেন। এক ব্যাগ লবণ ও এক গোলাপি ঝিনুক দেখান। "সমুদ্র দেয়, সমুদ্র নেয়।"',
    tip: "চোখ বন্ধ কর, ঢেউয়ের শব্দ শোনো, ইংরেজিতে ৩ শব্দ বলো।",
  },

  "mountain-hike": {
    themeId: "mountain-hike",
    title: "বান্দরবানের পাহাড়ে",
    titleEn: "In the Bandarban Hills",
    en: 'Karim and friends hike to Bandarban\'s high hills. "A mountain is a big teacher," Karim says. A green hill leads to a sharp peak. They must climb slowly. A big rock blocks the trail. Below, a deep cliff falls into a quiet valley. On the way a small forest is fresh. The trail is long. "Tonight we camp near the water." Their camping is simple — one small tent and one warm fire. The place is wild but safe. From the top the view is huge. "Look at that height!" The altitude is more than two thousand feet. The guide checks each rope. Every boot is tight. Every backpack is heavy. "Slow feet, safe feet," the guide smiles.',
    bn: 'কারিম ও বন্ধুরা বান্দরবানের উঁচু পাহাড়ে হাইকিং যায়। "পাহাড় বড় শিক্ষক," কারিম বলে। সবুজ টিলা তীক্ষ্ণ চূড়ার দিকে নিয়ে যায়। ধীরে ধীরে উঠতে হবে। বড় পাথর রাস্তা আটকায়। নিচে গভীর খাদ শান্ত উপত্যকায় পড়ে। পথে ছোট বন সতেজ। পথ লম্বা। "আজ রাতে পানির কাছে ক্যাম্প করব।" ক্যাম্পিং সাধারণ — এক ছোট তাঁবু, এক উষ্ণ আগুন। জায়গা বন্য, কিন্তু নিরাপদ। চূড়া থেকে দৃশ্য বিশাল। "উচ্চতা দেখো!" উচ্চতা দুই হাজার ফুটের বেশি। গাইড প্রতিটা দড়ি দেখেন। প্রতিটা বুট আঁটসাঁট। ব্যাকপ্যাক ভারী। "ধীর পা, নিরাপদ পা," গাইড হাসেন।',
    tip: "সিঁড়ি বেয়ে ওঠো, প্রতিটা পদে ১টা ইংরেজি শব্দ বলো: climb, step...",
  },

  "space-astro": {
    themeId: "space-astro",
    title: "ছাদে চাঁদ",
    titleEn: "Moon on the Roof",
    en: 'Rafi looks at the moon through a small telescope. "Space is big," he says. "The universe is bigger." Each planet is a small home in the sky. A tiny star blinks. The moon is bright; the sun is asleep on the other side. The earth is round below his feet. "The sky is like a book." Rafi knows our galaxy has many arms. A satellite must follow a fixed orbit. A rocket needs great power to leave the earth. His telescope is small, but his dream is large. "The distance between two stars is huge." In the dark he sees a soft light. "To explore is to hope." One day a new mission may take an astronaut to Mars. Gravity holds our small home together.',
    bn: 'রাফি ছোট টেলিস্কোপে চাঁদ দেখে। "মহাকাশ বিশাল," বলে। "বিশ্ব আরও বড়।" প্রতিটা গ্রহ আকাশের ছোট ঘর। ছোট এক নক্ষত্র জ্বলজ্বল করে। চাঁদ উজ্জ্বল, সূর্য অন্য পাশে ঘুমায়। পৃথিবী পায়ের নিচে গোল। "আকাশ একটা বইয়ের মতো।" রাফি জানে আমাদের ছায়াপথের অনেক বাহু। উপগ্রহকে নির্দিষ্ট কক্ষপথ অনুসরণ করতে হয়। রকেটের বিশাল শক্তি লাগে পৃথিবী ছাড়তে। তার টেলিস্কোপ ছোট, কিন্তু স্বপ্ন বড়। "দুটি তারার মধ্যকার দূরত্ব বিশাল।" অন্ধকারে নরম আলো দেখে। "অন্বেষণ মানে আশা।" একদিন নতুন এক অভিযান মঙ্গলে নভোচারী নিয়ে যেতে পারে। মাধ্যাকর্ষণ আমাদের ছোট বাড়ি ধরে রাখে।',
    tip: 'রাতে ১টা তারা খোঁজো, ইংরেজিতে বলো: "That star is bright."',
  },

  "medicine-doctor": {
    themeId: "medicine-doctor",
    title: "আম্মার চেক-আপ",
    titleEn: "Amma's Check-up",
    en: 'Nadia takes Amma to the doctor. "Medicine is a kind science," the doctor smiles. A young nurse writes Amma\'s name. The hospital is clean and calm. Amma is a patient today. "You are not seriously ill. This is not a big illness." "Is there any disease?" Amma asks. "Only a small infection," the doctor says. "Treatment is easy — no surgery needed. This medicine will cure it in five days." Amma has a small pain in her hand, and one old injury on her knee. "Your body will heal. You will recover soon. Full recovery in a month." The doctor gives one pill after each meal. He does not want too much drug. Every medical visit ends with the same word: health.',
    bn: 'নাদিয়া আম্মাকে ডাক্তারের কাছে নিয়ে যায়। "ওষুধ দয়ালু বিজ্ঞান," ডাক্তার হাসেন। তরুণ এক নার্স আম্মার নাম লেখে। হাসপাতাল পরিষ্কার, শান্ত। আম্মা আজ রোগী। "গুরুতর কিছু না। এটা বড় অসুখ না।" "কোনো রোগ আছে?" আম্মা জিজ্ঞেস করেন। "শুধু ছোট সংক্রমণ," ডাক্তার বলেন। "চিকিৎসা সহজ — অস্ত্রোপচার লাগবে না। এই ওষুধ পাঁচ দিনে সারবে।" আম্মার হাতে ছোট ব্যথা, হাঁটুতে পুরোনো এক আঘাত। "শরীর সুস্থ হবে। শীঘ্রই সুস্থ হবেন। এক মাসে পূর্ণ পুনরুদ্ধার।" প্রতিটা খাবারের পর একটা বড়ি দেন। বেশি ওষুধ চান না। প্রতিটা চিকিৎসা সাক্ষাৎ একই শব্দে শেষ: স্বাস্থ্য।',
    tip: '"pain" আর "heal" — দুটি শব্দ মনে রাখো।',
  },

  "mental-mood": {
    themeId: "mental-mood",
    title: "নাদিয়ার ডায়েরি",
    titleEn: "Nadia's Diary",
    en: 'Nadia writes in her diary about her feelings. "My mental world is deep," she starts. "Today my mood is soft." Every emotion tells a story. "My emotional life is not simple." Some days a big feeling comes without warning. Exams bring stress. She feels stressed and anxious. Small things worry her. "When I am too worried, I stop and breathe." A slow walk makes her calm. A hot cup of tea is peaceful. She likes to relax on the balcony. Sometimes she feels sad, sometimes lonely, sometimes tired. If she is angry, she waits before she speaks. If she is afraid, she calls Amma. "Tomorrow I will try to wake up more cheerful," she writes at the end.',
    bn: 'নাদিয়া ডায়েরিতে অনুভূতি লেখে। "আমার মানসিক জগৎ গভীর," শুরু করে। "আজ মেজাজ নরম।" প্রতিটা আবেগ একটা গল্প। "আমার আবেগীয় জীবন সরল না।" কিছু দিনে বড় এক অনুভূতি বিনা সতর্কতায় আসে। পরীক্ষা চাপ আনে। সে চাপে, উদ্বিগ্ন। ছোট জিনিস চিন্তিত করে। "অনেক চিন্তা হলে থামি, নিঃশ্বাস নিই।" ধীর হাঁটা শান্ত করে। গরম চা প্রশান্ত। বারান্দায় বিশ্রাম ভালো লাগে। কখনো দুঃখ, কখনো একাকিত্ব, কখনো ক্লান্তি। রাগ হলে বলার আগে অপেক্ষা করে। ভয় পেলে আম্মাকে ডাকে। "কাল আরও প্রফুল্ল হয়ে উঠব," শেষে লেখে।',
    tip: "রোজ রাতে ২ লাইন ইংরেজিতে মেজাজ লিখো।",
  },

  relations: {
    themeId: "relations",
    title: "কাজিনের বিয়ের কথা",
    titleEn: "Cousin's Wedding Plans",
    en: 'Nadia\'s cousin talks about her wedding plans. "A relationship is a garden," she smiles. "A friend brings joy; friendship is water." A partner walks beside you; a couple grows together. "Love is soft, but love is strong." "Marriage is not a day; it is a road." She will be married next month. She will be a wife; he will be her husband. "Before this, he was my boyfriend; I was his girlfriend," she laughs. Their first date was in a tea shop. Their story was slow and romantic. Now they are engaged. The wedding will be simple. Aunt says, "A divorce is a wound, not a shame." Some people stay single, and that is fine. "Every real relationship needs trust and respect," Nadia writes.',
    bn: 'নাদিয়ার কাজিন বিয়ের পরিকল্পনার কথা বলে। "সম্পর্ক এক বাগান," হাসে। "বন্ধু আনন্দ আনে, বন্ধুত্ব পানি।" সঙ্গী পাশে হাঁটে, দম্পতি একসাথে বাড়ে। "ভালোবাসা কোমল, কিন্তু শক্তিশালী।" "বিয়ে এক দিন না, একটা রাস্তা।" পরের মাসে বিয়ে হবে। সে হবে স্ত্রী, সে হবে স্বামী। "এর আগে সে আমার ছেলে-বন্ধু, আমি ছিলাম মেয়ে-বন্ধু," হাসে। প্রথম দেখা এক চায়ের দোকানে। গল্প ধীর ও রোম্যান্টিক। এখন বাগদান। বিয়ে সাধারণ হবে। ফুফু বলেন, "ডিভোর্স ক্ষত, লজ্জা না।" কেউ কেউ অবিবাহিত থাকে, তাও ঠিক। "প্রতিটা আসল সম্পর্কে বিশ্বাস আর সম্মান দরকার।"',
    tip: '"trust" আর "respect" — দুটো শব্দ ঘরে ৩ বার বলো।',
  },

  "childhood-baby": {
    themeId: "childhood-baby",
    title: "রাফির শৈশবের ছবি",
    titleEn: "Rafi's Baby Photos",
    en: 'Amma tells Rafi stories from his baby days. "You were a small baby, but a loud child." His childhood was warm. "You were a happy kid. You were born on a rainy morning." Every birth is a small miracle. "Your first birthday was at your grandfather\'s home." "How you grow!" Amma smiles. Rafi is not young anymore, not small anymore. But the family is the same. His mother, his father, his brother, his sister — all in one photo. "Your cousin Faisal has a twin sister, remember?" Amma laughs. "Your first toy was a small wooden train." He was an innocent baby. He would cry at night. He would sleep only on his father\'s chest. "Those were good days."',
    bn: 'আম্মা রাফির ছোটবেলার গল্প বলেন। "তুমি ছোট বাচ্চা ছিলে, কিন্তু কণ্ঠ ছিল জোরে।" শৈশব উষ্ণ। "তুমি সুখী শিশু ছিলে। এক বৃষ্টির সকালে জন্মেছিলে।" প্রতিটা জন্ম ছোট এক অলৌকিক ঘটনা। "তোমার প্রথম জন্মদিন দাদার বাড়িতে।" "কত বড় হয়েছ!" আম্মা হাসেন। রাফি আর শিশু না, ছোট না। কিন্তু পরিবার একই। মা, বাবা, ভাই, বোন — সব এক ছবিতে। "তোমার কাজিন ফয়সালের এক যমজ বোন আছে, মনে আছে?" "তোমার প্রথম খেলনা কাঠের ছোট ট্রেন।" নিষ্পাপ শিশু ছিলে। রাতে কাঁদতে। শুধু বাবার বুকে ঘুমাতে।',
    tip: "নিজের ৩ বছর বয়সের ১টা গল্প ইংরেজিতে ২ বাক্যে বলো।",
  },

  "old-age": {
    themeId: "old-age",
    title: "বারান্দায় দাদা",
    titleEn: "Grandfather on the Porch",
    en: 'Grandfather sits on the porch and remembers the past. He is old, but he is not tired of life. "Elderly people carry small libraries in their hearts," he smiles. He is a senior now. His age is seventy-two. Aging is quiet, aging is soft. His memory is long. His wisdom is deep. Every experience of his youth is still there. "My grandfather taught me," he says. "My grandmother taught me more. A grandparent is a first teacher." Life is like a river. His past is heavy. He tries to remember the small joys. His voice is gentle. His body is weak, his step is slow. The porch is quiet. He will soon retire fully. Every evening he tells one short story.',
    bn: 'দাদা বারান্দায় বসেন, অতীতকে মনে করেন। বয়স হয়েছে, কিন্তু জীবন থেকে ক্লান্ত না। "বয়স্ক মানুষ হৃদয়ে ছোট গ্রন্থাগার বহন করে," হাসেন। তিনি এখন প্রবীণ। বয়স বাহাত্তর। বার্ধক্য নীরব, নরম। স্মৃতি দীর্ঘ, প্রজ্ঞা গভীর। যৌবনের প্রতিটা অভিজ্ঞতা এখনো আছে। "আমার দাদা শিখিয়েছেন," বলেন। "দাদি বেশি শিখিয়েছেন। দাদা-দাদি প্রথম শিক্ষক।" জীবন নদীর মতো। অতীত ভারী। ছোট আনন্দ মনে রাখার চেষ্টা করেন। কণ্ঠ কোমল। শরীর দুর্বল, পদক্ষেপ ধীর। বারান্দা শান্ত। শীঘ্রই পুরোপুরি অবসরে যাবেন। প্রতিটা সন্ধ্যায় একটা ছোট গল্প বলেন।',
    tip: "সপ্তাহে ১ বার দাদা/দাদির কাছে ১টা গল্প শোনো।",
  },

  celebration: {
    themeId: "celebration",
    title: "ঈদের সকাল",
    titleEn: "Eid Morning",
    en: 'The family prepares for Eid. "We will celebrate together," Amma smiles. "A celebration is not the size of the meal; it is the size of the heart." This festival is warm. It is not a small party — every guest is expected. Amma will invite all the neighbours. Each invitation is written by hand. Nadia gives a small gift to each cousin. Every present is wrapped in bright paper. There is a soft cake and one thin candle. Rafi and Karim decorate the door. The decoration is simple but bright. "Joy makes a house glow." People laugh; children run. Abba stands at the gate to welcome each guest. "A good host is a good listener." Every occasion has its own ceremony. Everyone shouts, "Congratulations!"',
    bn: 'পরিবার ঈদের প্রস্তুতি নেয়। "একসাথে উদযাপন করব," আম্মা হাসেন। "উদযাপন খাবারের পরিমাপ না, হৃদয়ের পরিমাপ।" এই উৎসব উষ্ণ। ছোট পার্টি না — প্রতিটা অতিথি প্রত্যাশিত। আম্মা সব প্রতিবেশীকে আমন্ত্রণ জানাবেন। প্রতিটা নিমন্ত্রণ হাতে লেখা। নাদিয়া প্রতিটা কাজিনকে ছোট উপহার দেয়। প্রতিটা উপহার উজ্জ্বল কাগজে মোড়ানো। নরম এক কেক আর সরু এক মোমবাতি। রাফি ও কারিম দরজা সাজায়। সজ্জা সহজ, কিন্তু উজ্জ্বল। "আনন্দ বাড়িকে উজ্জ্বল করে।" মানুষ হাসে; শিশুরা দৌড়ায়। আব্বা গেটে প্রতিটা অতিথিকে স্বাগত জানান। "ভালো আয়োজক ভালো শ্রোতা।" প্রতিটা উপলক্ষের নিজস্ব অনুষ্ঠান আছে। সবাই বলে, "অভিনন্দন!"',
    tip: 'কাউকে ইংরেজিতে বলো: "Happy Eid! Congratulations!"',
  },

  "cooking-food2": {
    themeId: "cooking-food2",
    title: "রান্নাঘরে বিকেল",
    titleEn: "Afternoon in the Kitchen",
    en: 'Amma teaches Nadia to cook her favourite dish. "To cook is to give love," she says. Cooking is patient work. The kitchen is small but warm. "Every good recipe starts with a fresh ingredient." Amma names each item. "Today\'s meal is a simple dish — rice and fish." Nadia tries the taste; the flavour is deep. "Add a little spice, not too much." The curry is spicy, the salad is sweet. "Not too salty, not too sour, not too bitter." Amma will boil the rice first. Then she will fry the fish. Later she will bake a small cake. Nadia will chop the onions. She will stir the pot slowly. "Slow cooking, strong flavour," Amma smiles.',
    bn: 'আম্মা নাদিয়াকে প্রিয় পদ রান্না শেখান। "রান্না মানে ভালোবাসা দেওয়া," বলেন। রান্না ধৈর্যের কাজ। রান্নাঘর ছোট কিন্তু উষ্ণ। "প্রতিটা ভালো রেসিপি শুরু হয় তাজা উপাদান দিয়ে।" আম্মা প্রতিটা জিনিসের নাম বলেন। "আজকের খাবার সহজ পদ — ভাত আর মাছ।" নাদিয়া স্বাদ চেখে দেখে; গন্ধ গভীর। "একটু মসলা দাও, বেশি না।" তরকারি ঝাল, সালাদ মিষ্টি। "বেশি লবণ না, বেশি টক না, বেশি তেতো না।" আম্মা প্রথমে ভাত ফুটাবেন। তারপর মাছ ভাজবেন। পরে ছোট কেক বেক করবেন। নাদিয়া পেঁয়াজ কাটবে। ধীরে পাত্রে নাড়বে। "ধীর রান্না, শক্ত স্বাদ," আম্মা হাসেন।',
    tip: "১টা রেসিপি ইংরেজিতে ৪ ধাপে লিখো: chop → boil → fry → serve।",
  },

  restaurants2: {
    themeId: "restaurants2",
    title: "কারিমের পদোন্নতির রাত",
    titleEn: "Karim's Promotion Night",
    en: 'The family celebrates Karim\'s promotion at a restaurant. This is not a small cafe — it is a big place. The waiter gives them a menu. "We will order first," Abba smiles. A young chef comes out to greet them. They sit at a round table. Rafi\'s seat is near the window. Every plate is clean. On the table: one bowl of soup, one small cup, one long glass. Nadia orders a cold drink. "For me, a big meal," Karim laughs. Some had breakfast, some had lunch, but this is a special dinner. At the end the waiter brings the bill. Abba leaves a small tip. "Next time we will make a reservation early," he says.',
    bn: 'পরিবার রেস্তোরাঁয় কারিমের পদোন্নতি উদযাপন করে। এটা ছোট ক্যাফে না — বড় জায়গা। ওয়েটার একটা মেনু দেয়। "আগে অর্ডার করব," আব্বা হাসেন। এক তরুণ শেফ বেরিয়ে এসে অভ্যর্থনা জানান। গোল টেবিলে বসে। রাফির আসন জানালার কাছে। প্রতিটা প্লেট পরিষ্কার। টেবিলে: এক বাটি স্যুপ, এক ছোট কাপ, এক লম্বা গ্লাস। নাদিয়া ঠান্ডা পানীয় অর্ডার করে। "আমার জন্য বড় খাবার," কারিম হাসে। কেউ নাশতা করেছে, কেউ দুপুরের খাবার — কিন্তু এটা বিশেষ রাতের খাবার। শেষে ওয়েটার বিল আনে। আব্বা ছোট বকশিশ রাখেন। "পরবর্তীবার আগে বুকিং দেব।"',
    tip: "মেনু থেকে ৩টা ইংরেজি নাম মনে রাখো।",
  },

  "shopping-consumer": {
    themeId: "shopping-consumer",
    title: "গুলশানের মলে",
    titleEn: "At the Gulshan Mall",
    en: 'Nadia and Amma go to a big shopping mall in Gulshan. "To shop is easy; to shop wisely is hard," Amma says. Every shopping trip is a small test. The mall is huge. Each store is bright. Nadia is a careful customer. She will not buy every shiny thing. She will only purchase what she needs. The seller smiles. A small sale is on today. The store gives a good discount. The price is fair. Amma will pay with cash. The receipt is long. Nadia has one card too. This brand is her favourite. "Too much choice is also stress," Amma says. A short queue forms near the counter. Later they visit the supermarket for rice and oil.',
    bn: 'নাদিয়া ও আম্মা গুলশানের বড় শপিং মলে যান। "কেনাকাটা সহজ, বুদ্ধি করে কেনাকাটা কঠিন," আম্মা বলেন। প্রতিটা কেনাকাটা এক ছোট পরীক্ষা। মল বিশাল। প্রতিটা দোকান উজ্জ্বল। নাদিয়া সতর্ক ক্রেতা। প্রতিটা চকচকে জিনিস কিনবে না। শুধু যা দরকার তা-ই কিনবে। বিক্রেতা হাসে। আজ ছোট সেল আছে। দোকান ভালো ছাড় দিচ্ছে। দাম ন্যায্য। আম্মা নগদ দিয়ে দেবেন। রসিদ লম্বা। নাদিয়ার একটা কার্ডও আছে। এই ব্র্যান্ড তার প্রিয়। "বেশি পছন্দও চাপ," আম্মা বলেন। কাউন্টারের কাছে ছোট এক লাইন। পরে চাল-তেলের জন্য সুপারমার্কেটে যান।',
    tip: "কেনাকাটার আগে ৩টা প্রশ্ন: Need? Price? Quality?",
  },

  "fashion-more": {
    themeId: "fashion-more",
    title: "ডিজাইনারের স্টুডিও",
    titleEn: "The Designer's Studio",
    en: 'Nadia visits a designer\'s small studio. "Fashion is a language of colour," the designer smiles. "Every fashionable person tells a story." This studio is calm. Each style is different. A design of a new saree hangs on the wall. "A good designer listens first, draws later." A young model tries a new clothing piece — a soft blue dress. Karim\'s father wears a simple suit and a straight tie today. On the table: cotton, silk, wool, and one small leather bag. Each colour is warm. Each pattern is soft. "Every size must fit the body, not the fashion." "You do not need to be rich to look elegant." The trend is quiet colours this year. "A brand is a promise," the designer smiles.',
    bn: 'নাদিয়া এক ডিজাইনারের ছোট স্টুডিও দেখতে যায়। "ফ্যাশন রঙের ভাষা," ডিজাইনার হাসেন। "প্রতিটা ফ্যাশনেবল মানুষ একটা গল্প বলে।" স্টুডিও শান্ত। প্রতিটা ধরণ ভিন্ন। দেয়ালে নতুন শাড়ির নকশা। "ভালো ডিজাইনার আগে শোনেন, পরে আঁকেন।" এক তরুণ মডেল নতুন পোশাক পরে দেখে — নরম নীল এক জামা। কারিমের বাবা আজ সাধারণ সুট ও সোজা টাই পরেছেন। টেবিলে: সুতা, রেশম, উল, ছোট এক চামড়ার ব্যাগ। প্রতিটা রং উষ্ণ। প্রতিটা প্যাটার্ন কোমল। "প্রতিটা মাপ শরীরের সাথে মিলতে হবে, ফ্যাশনের সাথে না।" "মার্জিত দেখাতে ধনী হওয়া লাগে না।" এবারের ট্রেন্ড শান্ত রং।',
    tip: "নিজের ৩টা পোশাকের রং ইংরেজিতে বলো।",
  },

  "house-home2": {
    themeId: "house-home2",
    title: "নতুন বাসায় প্রথম দিন",
    titleEn: "First Day in the New Home",
    en: 'The family moves into a new apartment. "A house is walls; a home is love." This big building has ten floors. Their flat is on the third floor. Each room is fresh. The kitchen is small but bright. The bedroom is quiet. The bathroom is white. The living room is warm and wide. There is no hall; the entrance is small. The main door is brown. Every window opens to the road. The wall is clean. The floor smells of new paint. The ceiling is white. The roof has a small garden. A steep stair goes to the roof. The main gate is iron. The narrow balcony faces the east. "Every corner will hold a memory," Amma smiles.',
    bn: 'পরিবার নতুন এক ফ্ল্যাটে ওঠে। "ঘর হলো দেয়াল, বাসা হলো ভালোবাসা।" এই বড় বিল্ডিং দশ তলা। তাদের ফ্ল্যাট তিন তলায়। প্রতিটা কক্ষ নতুন। রান্নাঘর ছোট, উজ্জ্বল। শোবার ঘর শান্ত। গোসলখানা সাদা। বসার ঘর উষ্ণ, প্রশস্ত। কোনো হল নেই; প্রবেশদ্বার ছোট। প্রধান দরজা বাদামী। প্রতিটা জানালা রাস্তার দিকে খোলে। দেয়াল পরিষ্কার। মেঝেতে নতুন রঙের গন্ধ। ছাদ সাদা। উপরের ছাদে ছোট বাগান। খাড়া সিঁড়ি ছাদে যায়। প্রধান গেট লোহার। সরু বারান্দা পূবমুখী। "প্রতিটা কোণায় স্মৃতি জমবে," আম্মা হাসেন।',
    tip: "নিজের ঘরের ৫টা অংশ ইংরেজিতে দেখাও।",
  },

  "transport-car": {
    themeId: "transport-car",
    title: "রাফির প্রথম ড্রাইভিং পাঠ",
    titleEn: "Rafi's First Driving Lesson",
    en: 'Abba teaches Rafi about the car and road rules. "A car is a vehicle, not a toy." A big truck passes. "A bus is slow; a taxi is quick." A calm driver is a safe driver. To drive is to think. The road is wide. Their street is narrow. The highway is far. "Every driver must respect traffic. Every driver must obey the traffic light." Parking is hard in Dhaka. "You will park near the corner." The fuel tank is full today. The engine hums. Rafi holds the wheel with two hands. One tire looks flat. Abba shows the brake. "Slow speed, safe day." Then he clicks the seat belt. "A seat belt is a small friend."',
    bn: 'আব্বা রাফিকে গাড়ি ও রাস্তার নিয়ম শেখান। "গাড়ি একটা যানবাহন, খেলনা না।" বড় এক ট্রাক যায়। "বাস ধীর, ট্যাক্সি দ্রুত।" শান্ত চালক নিরাপদ চালক। চালানো মানে চিন্তা করা। রাস্তা প্রশস্ত। তাদের গলি সরু। মহাসড়ক দূরে। "প্রতিটা চালক ট্রাফিক মানুক। প্রতিটা চালক সিগন্যাল মানুক।" ঢাকায় পার্কিং কঠিন। "তুমি কোণার কাছে পার্ক করবে।" আজ জ্বালানি ট্যাংক ভরা। ইঞ্জিন গুনগুন করে। রাফি দুই হাতে চাকা ধরে। এক টায়ার নরম দেখায়। আব্বা ব্রেক দেখান। "ধীর গতি, নিরাপদ দিন।" তারপর সিটবেল্ট আটকান। "সিটবেল্ট ছোট এক বন্ধু।"',
    tip: "গাড়িতে বসলে ১ম কাজ: seat belt।",
  },

  "transport-air": {
    themeId: "transport-air",
    title: "ফয়সালের প্রথম ফ্লাইট",
    titleEn: "Faisal's First Flight",
    en: 'Faisal takes his first flight from Dhaka to Chittagong. The airport is huge. An airplane looks small from far, big from near. Each aircraft has its own colour. Today\'s flight is short — one hour. "To fly is a strange feeling," he thinks. The pilot is calm. Faisal is one passenger of two hundred. His ticket is in his hand. His luggage is small. Arrival is at noon; departure is at eleven. At the gate a soft voice calls his name. The terminal is bright and cool. Security check is fast. Faisal will land in Chittagong on time. There is no delay today. His seat is by the window. Boarding starts early. The crew smiles at every guest.',
    bn: 'ফয়সাল ঢাকা থেকে চট্টগ্রাম প্রথম ফ্লাইট নেয়। বিমানবন্দর বিশাল। বিমান দূর থেকে ছোট, কাছে বড়। প্রতিটা যানের নিজস্ব রং। আজকের ফ্লাইট ছোট — এক ঘণ্টা। "ওড়া অদ্ভুত অনুভূতি," ভাবে। পাইলট শান্ত। ফয়সাল দুই শ যাত্রীর একজন। টিকিট হাতে। লাগেজ ছোট। আগমন দুপুরে; প্রস্থান এগারোটায়। গেটে নরম কণ্ঠ তার নাম ডাকে। টার্মিনাল উজ্জ্বল, শীতল। নিরাপত্তা চেক দ্রুত। ফয়সাল সময়মত চট্টগ্রামে নামবে। আজ কোনো দেরি নেই। তার আসন জানালার পাশে। বোর্ডিং তাড়াতাড়ি শুরু। ক্রু প্রতিটা অতিথিকে হাসেন।',
    tip: '"pilot, passenger, ticket" — ৩ শব্দ মনে রাখো।',
  },

  "transport-rail": {
    themeId: "transport-rail",
    title: "রাজশাহীর ট্রেন",
    titleEn: "The Rajshahi Train",
    en: 'Karim travels by train from Dhaka to Rajshahi. The train stands at the station. The platform is full. His ticket is small but important. This journey will be six hours. Each passenger has a fixed seat. "Trains arrive slowly and depart softly." The track curves through green fields. The old railway is famous. "Rail travel is my favourite," Karim says. Public transport is cheap. There is a small delay today. The schedule shows a new time. This is the express, not the local. A dark tunnel comes. A long iron bridge follows. The conductor checks each ticket. Karim\'s cabin is quiet. Two friends share bread and tea. "A train ride is a small holiday of its own."',
    bn: 'কারিম ঢাকা থেকে রাজশাহী ট্রেনে যায়। ট্রেন স্টেশনে দাঁড়ানো। প্ল্যাটফর্ম ভরা। টিকিট ছোট, কিন্তু গুরুত্বপূর্ণ। এই যাত্রা ছয় ঘণ্টার। প্রতিটা যাত্রীর নির্দিষ্ট আসন। "ট্রেন ধীরে পৌঁছায়, নরমে ছাড়ে।" পথ সবুজ মাঠ ঘুরে যায়। পুরোনো রেলপথ বিখ্যাত। "রেল ভ্রমণ প্রিয়," কারিম বলে। গণপরিবহন সস্তা। আজ ছোট দেরি। সময়সূচি নতুন সময় দেখায়। এটা এক্সপ্রেস, লোকাল না। অন্ধকার টানেল আসে। লম্বা লোহার সেতু। কন্ডাক্টর প্রতিটা টিকিট দেখেন। কারিমের কেবিন শান্ত। দুই বন্ধু রুটি-চা ভাগ করে। "ট্রেন যাত্রা নিজেই ছোট এক ছুটি।"',
    tip: '"track, platform, station" — ৩ শব্দ ছবির সাথে ভাবো।',
  },

  "news-events": {
    themeId: "news-events",
    title: "সন্ধ্যার সংবাদ",
    titleEn: "The Evening News",
    en: 'Abba watches the evening news bulletin. "News tells today\'s story," he says. A big event has taken place in Dhaka. The main headline is clear. "A short story, a long report." A young reporter speaks calmly. A senior journalist writes a longer piece. "The media is a mirror," Abba says. Today\'s newspaper carries the same news. A weekly magazine covers a deeper angle. Radio and television broadcast the update. "Every channel has a slant." A calm television anchor closes the day. Rafi reads an article on his phone. He checks the source. "Every fact must have a source." Real information helps. A short review sits at the bottom. The editor signs his name.',
    bn: 'আব্বা সন্ধ্যার সংবাদ দেখেন। "খবর আজকের গল্প বলে," বলেন। ঢাকায় বড় এক ঘটনা ঘটেছে। মূল শিরোনাম স্পষ্ট। "ছোট গল্প, দীর্ঘ প্রতিবেদন।" এক তরুণ প্রতিবেদক শান্তভাবে কথা বলেন। প্রবীণ এক সাংবাদিক দীর্ঘ লেখা লেখেন। "গণমাধ্যম আয়না," আব্বা বলেন। আজকের সংবাদপত্র একই খবর দেয়। সাপ্তাহিক ম্যাগাজিন গভীর দিক তুলে ধরে। রেডিও ও টেলিভিশনে সম্প্রচার হয়। "প্রতিটা চ্যানেলের ঝোঁক আছে।" শান্ত টিভি উপস্থাপক দিন শেষ করেন। রাফি ফোনে এক নিবন্ধ পড়ে। উৎস দেখে। "প্রতিটা তথ্যের উৎস থাকতে হবে।" আসল তথ্য সাহায্য করে। নিচে ছোট রিভিউ। সম্পাদক নাম সই করেন।',
    tip: "রোজ ১টা ইংরেজি খবরের শিরোনাম পড়ো।",
  },

  "education-school2": {
    themeId: "education-school2",
    title: "নতুন স্কুল বছর",
    titleEn: "A New School Year",
    en: 'It is the first day of a new school year for Nadia. "School is a second home," she smiles. Her class is on the second floor. The classroom is bright. Every student stands up when the teacher walks in. Nadia is a good pupil. The teacher\'s teaching is calm. Today\'s subject is English. The lesson is short. Later they have a small lecture from the guest speaker. Homework will come at the end. Next month there is an exam. It is only a short test. Every mark counts. The final grade decides who will pass. "Nobody wants to fail," she thinks. Education is a long road. The principal walks in the corridor. Every student wears a clean uniform.',
    bn: 'নাদিয়ার নতুন স্কুল বছরের প্রথম দিন। "স্কুল দ্বিতীয় বাসা," হাসে। তার ক্লাস দ্বিতীয় তলায়। শ্রেণিকক্ষ উজ্জ্বল। শিক্ষক ঢুকলে প্রতিটা ছাত্র উঠে দাঁড়ায়। নাদিয়া ভালো ছাত্রী। শিক্ষকের পড়ানো শান্ত। আজকের বিষয় ইংরেজি। পাঠ ছোট। পরে অতিথি বক্তার ছোট এক বক্তৃতা। শেষে বাড়ির কাজ আসবে। পরের মাসে পরীক্ষা। শুধু ছোট এক পরীক্ষা। প্রতিটা নম্বর গুরুত্বপূর্ণ। চূড়ান্ত গ্রেড ঠিক করে কে পাশ করবে। "কেউ ফেল করতে চায় না," ভাবে। শিক্ষা লম্বা পথ। প্রধান শিক্ষক করিডোরে হাঁটেন। প্রতিটা ছাত্র পরিষ্কার ইউনিফর্ম পরে।',
    tip: "স্কুলের ৫টা বিষয়ের নাম ইংরেজিতে বলো।",
  },

  "writing-language": {
    themeId: "writing-language",
    title: "নাদিয়ার প্রথম ডায়েরি",
    titleEn: "Nadia's First Diary",
    en: 'Nadia begins her first personal diary. "To write is to think slowly," she says. A good writer is not a fast writer. Writing is a soft habit. If you want to write well, you must read every day. A patient reader becomes a wise writer. Reading is a small window. Today\'s book is a warm story from a new novel. Nadia will also write a short letter to her cousin. Next week she will start a small essay. Later she will send an article to the school magazine. Each page has a purpose. Each chapter has a shape. Each paragraph is one thought. Each sentence has one heart. Each word has one weight. A phrase can carry a whole feeling. Language grows with vocabulary.',
    bn: 'নাদিয়া তার প্রথম ব্যক্তিগত ডায়েরি শুরু করে। "লেখা মানে ধীরে ভাবা," বলে। ভালো লেখক দ্রুত লেখক না। লেখা কোমল অভ্যাস। ভালো লিখতে হলে রোজ পড়তে হয়। ধৈর্যশীল পাঠক জ্ঞানী লেখক হয়। পড়া ছোট এক জানালা। আজকের বই নতুন উপন্যাসের উষ্ণ গল্প। নাদিয়া কাজিনকে ছোট এক চিঠিও লিখবে। পরের সপ্তাহে ছোট প্রবন্ধ শুরু করবে। পরে স্কুল ম্যাগাজিনে একটা নিবন্ধ পাঠাবে। প্রতিটা পৃষ্ঠার একটা উদ্দেশ্য। প্রতিটা অধ্যায়ের আকার। প্রতিটা অনুচ্ছেদ এক ভাবনা। প্রতিটা বাক্যের একটা হৃদয়। প্রতিটা শব্দের ওজন। বাক্যাংশ পুরো অনুভূতি বহন করতে পারে। শব্দভান্ডারের সাথে ভাষা বাড়ে।',
    tip: "রোজ রাতে ২ ইংরেজি বাক্য লিখো।",
  },

  "numbers-math": {
    themeId: "numbers-math",
    title: "রাফির অংক",
    titleEn: "Rafi's Math",
    en: 'Karim helps Rafi with math homework. "Every number is a small friend." Rafi tries to count from one to a hundred. "First we calculate slowly." To add is to bring together. "Two plus three," Karim says. To subtract is to take away. "Ten minus four is six." To multiply is a big add. To divide is to share. "The sum of two and three is five. The total is clear." Half a cake is smaller; a quarter is smaller still. "To double is to make twice." A million is a big number. A billion is bigger. A hundred is small; a thousand is bigger. "A dozen is twelve." "And zero is the little king of nothing," Karim laughs.',
    bn: 'কারিম রাফিকে অংকের বাড়ির কাজে সাহায্য করে। "প্রতিটা সংখ্যা ছোট এক বন্ধু।" রাফি এক থেকে একশ পর্যন্ত গোনার চেষ্টা করে। "প্রথমে ধীরে হিসাব কর।" যোগ মানে একসাথে আনা। "দুই যোগ তিন," কারিম বলে। বিয়োগ মানে সরিয়ে নেওয়া। "দশ বিয়োগ চার সমান ছয়।" গুণ বড় যোগ। ভাগ মানে ভাগাভাগি। "দুই আর তিনের যোগফল পাঁচ। মোট পরিষ্কার।" অর্ধেক কেক ছোট; সিকি আরও ছোট। "দ্বিগুণ মানে দুবার।" মিলিয়ন বড় সংখ্যা। বিলিয়ন আরও বড়। শত ছোট; হাজার বড়। "এক ডজন মানে বারো।" "শূন্য কিছু-না-এর ছোট রাজা," কারিম হাসে।',
    tip: "মনে মনে ইংরেজিতে ১ থেকে ২০ গোনো, রোজ ১ বার।",
  },

  "time-more": {
    themeId: "time-more",
    title: "প্রতিটা মিনিট গোনার দিন",
    titleEn: "A Day of Counting Every Minute",
    en: 'Rafi checks the clock — every minute counts today. "Time is a strict friend," he says. In one small moment a life can change. Sixty seconds make a minute. Sixty minutes make an hour. Twenty-four hours make a day. Seven days make a week. Four weeks make a month. Twelve months make a year. Ten years make a decade. Ten decades make a century. "The past is gone; the present is here; the future is a soft light." "Now is now. Today I will study. Tomorrow I will rest. Yesterday is a photo." "I will always try. I will never give up," he writes in his notebook. Time waits for nobody.',
    bn: 'রাফি ঘড়ি দেখে — আজ প্রতিটা মিনিট গুরুত্বপূর্ণ। "সময় কড়া বন্ধু," বলে। এক ছোট মুহূর্তে জীবন বদলাতে পারে। ষাট সেকেন্ডে মিনিট। ষাট মিনিটে ঘণ্টা। চব্বিশ ঘণ্টায় দিন। সাত দিনে সপ্তাহ। চার সপ্তাহে মাস। বারো মাসে বছর। দশ বছরে দশক। দশ দশকে শতাব্দী। "অতীত চলে গেছে; বর্তমান এখানে; ভবিষ্যৎ কোমল আলো।" "এখন মানে এখন। আজ পড়ব। কাল বিশ্রাম নেব। গতকাল একটা ছবি।" "সবসময় চেষ্টা করব। কখনো হাল ছাড়ব না," নোটবুকে লেখে। সময় কারও জন্য অপেক্ষা করে না।',
    tip: 'সকালে ইংরেজিতে বলো: "Now it is 7 o\'clock. Today I will study."',
  },

  "office-more": {
    themeId: "office-more",
    title: "পরবর্তী কোয়ার্টারের পরিকল্পনা",
    titleEn: "Planning the Next Quarter",
    en: 'The team plans the next quarter\'s project. "A plan is a small map." Their goal is clear. The strategy is simple, but the process is careful. Every policy is written down. The team meets to review the last quarter. They will give a short update. A new proposal sits on the table. The boss will approve one and reject one. Every decision is important. A small committee will help. A calm leader gives each role. Each member has a real responsibility. "An opportunity comes with a challenge," the boss says. The target is high, but not impossible. "To achieve is to work with patience." At the end they show clear progress. Faisal smiles: one step at a time.',
    bn: 'দল পরবর্তী কোয়ার্টারের প্রকল্প পরিকল্পনা করে। "পরিকল্পনা ছোট মানচিত্র।" লক্ষ্য পরিষ্কার। কৌশল সরল, কিন্তু প্রক্রিয়া সতর্ক। প্রতিটা নীতি লিখে রাখা। শেষ কোয়ার্টার পর্যালোচনার জন্য দল বসে। ছোট এক আপডেট দেবে। নতুন প্রস্তাব টেবিলে। বস একটা অনুমোদন করবেন, একটা প্রত্যাখ্যান। প্রতিটা সিদ্ধান্ত গুরুত্বপূর্ণ। ছোট এক কমিটি সাহায্য করবে। শান্ত নেতা প্রতিটা ভূমিকা ভাগ করেন। প্রতিটা সদস্যের আসল দায়িত্ব। "সুযোগের সাথে চ্যালেঞ্জ আসে," বস বলেন। লক্ষ্যমাত্রা উঁচু, কিন্তু অসম্ভব না। "অর্জনের জন্য ধৈর্য চাই।" শেষে স্পষ্ট অগ্রগতি দেখায়। ফয়সাল হাসে: একবারে এক ধাপ।',
    tip: 'নিজের সপ্তাহের ১টা "goal" ইংরেজিতে লিখো।',
  },

  "science-lab": {
    themeId: "science-lab",
    title: "বিশ্ববিদ্যালয়ের ল্যাব",
    titleEn: "University Lab",
    en: 'The class visits a university chemistry lab. The laboratory is bright and cold. "Every experiment tells a small truth," the researcher smiles. She stands by a big microscope. A tiny sample sits on a plate. Nadia sees a strange mixture in a glass. "You must mix carefully," the researcher says. Then she will measure the liquid. Each measurement is written down. There is one green gas in a jar, one clear liquid in a tube, and one hard solid on the table. "Every atom is a small home; each molecule is a small family." A yellow acid must be handled with care. A slow reaction begins. "Observe first, record later." Safety is the first rule. Every piece of equipment is checked.',
    bn: 'ক্লাস বিশ্ববিদ্যালয়ের রসায়ন গবেষণাগার দেখতে যায়। ল্যাবরেটরি উজ্জ্বল, শীতল। "প্রতিটা পরীক্ষা ছোট এক সত্য বলে," গবেষক হাসেন। তিনি বড় মাইক্রোস্কোপের পাশে। ছোট এক নমুনা প্লেটে। নাদিয়া গ্লাসে অদ্ভুত এক মিশ্রণ দেখে। "সাবধানে মেশাতে হবে," গবেষক বলেন। তারপর তরল মাপবেন। প্রতিটা পরিমাপ লিখে রাখা। পাত্রে সবুজ এক গ্যাস, নলে স্বচ্ছ তরল, টেবিলে কঠিন জিনিস। "প্রতিটা পরমাণু ছোট ঘর; প্রতিটা অণু ছোট পরিবার।" হলুদ অ্যাসিড সাবধানে ধরতে হয়। ধীর এক বিক্রিয়া শুরু। "আগে দেখো, পরে লেখো।" নিরাপত্তা প্রথম নিয়ম। প্রতিটা যন্ত্রপাতি দেখা হয়।',
    tip: "৩ শব্দ মনে রাখো: acid, gas, mix।",
  },

  "senses-more": {
    themeId: "senses-more",
    title: "পাঁচ ইন্দ্রিয়ের কবিতা",
    titleEn: "The Poem of Five Senses",
    en: 'Nadia writes a poem using every sense. "I see the moon," she starts. "I look at the tree. I watch the birds fly." "I hear the wind. I listen to the river." "I smell the rain. I taste the tea. I touch the wall." "I feel the cool air." "I notice a small light in the corner." Sight is not the same as sound. "Silence is a soft sound," she writes. "Noise is a loud silence." A bright lamp shines. A loud voice fills the room. A soft blanket is warm. A smooth stone lies by the window. The old road is rough. A sharp knife on the table looks bright. "Every sense is a small window," she smiles.',
    bn: 'নাদিয়া প্রতিটা ইন্দ্রিয় ব্যবহার করে কবিতা লেখে। "চাঁদ দেখি," শুরু করে। "গাছের দিকে তাকাই। পাখি উড়তে দেখি।" "বাতাস শুনি। নদী শুনি।" "বৃষ্টির ঘ্রাণ পাই। চায়ের স্বাদ পাই। দেয়াল ছুঁই।" "শীতল বাতাস অনুভব করি।" "কোণায় ছোট আলো লক্ষ করি।" দৃষ্টি ধ্বনির সমান না। "নীরবতা কোমল ধ্বনি," লেখে। "শব্দ উচ্চ নীরবতা।" উজ্জ্বল বাতি জ্বলে। উচ্চ কণ্ঠ ঘর ভরায়। নরম কম্বল উষ্ণ। মসৃণ পাথর জানালার পাশে। পুরোনো রাস্তা এবড়ো-খেবড়ো। টেবিলে ধারালো ছুরি উজ্জ্বল দেখায়। "প্রতিটা ইন্দ্রিয় ছোট এক জানালা," হাসে।',
    tip: 'চোখ বন্ধ কর, ৫টা "sense" শব্দ ইংরেজিতে বলো।',
  },

  "sport-actions": {
    themeId: "sport-actions",
    title: "জিম ক্লাস",
    titleEn: "Gym Class",
    en: 'The gym class starts. Every action has a name. The coach says, "Run to the wall. Now jump over the rope." A boy will throw the ball; another will catch it. Nadia can kick the football, and she can hit it hard too. In the pool the class will swim. On the road they will cycle. On the wall they will climb. A strong boy tries to lift the heavy bag. "Push the door, do not pull it," the coach says. Now the class will stretch their arms. They will bend their knees. "Every practice is a small exercise." A strong body is a happy body. A fast leg is a trained leg. "Speed and energy come from patience," the coach smiles.',
    bn: 'জিম ক্লাস শুরু। প্রতিটা কাজের একটা নাম। কোচ বলেন, "দেয়ালের কাছে দৌড়াও। এখন দড়ি লাফ দাও।" এক ছেলে বল ছুড়বে; আরেকজন ধরবে। নাদিয়া ফুটবলে লাথি মারতে পারে, জোরে আঘাতও করতে পারে। পুলে ক্লাস সাঁতার কাটবে। রাস্তায় সাইকেল চালাবে। দেয়ালে চড়বে। শক্ত এক ছেলে ভারী ব্যাগ তোলার চেষ্টা করে। "দরজা ঠেলো, টেনো না," কোচ বলেন। এখন ক্লাস হাত টানবে। হাঁটু বাঁকাবে। "প্রতিটা অনুশীলন ছোট ব্যায়াম।" শক্ত শরীর সুখী শরীর। দ্রুত পা প্রশিক্ষিত পা। "গতি ও শক্তি ধৈর্য থেকে আসে।"',
    tip: 'আজ ঘরে ৫টা "action" করো: run, jump, stretch, bend, push।',
  },

  "safety-rules": {
    themeId: "safety-rules",
    title: "শহরের সতর্কতা",
    titleEn: "City Warnings",
    en: 'Abba teaches Rafi safety rules for the city. "Safety is a soft habit." If a place is not safe, do not go. If you see danger, step back. "Every dangerous minute has a small warning first." Read the warning; do not ignore it. A small risk today is a big loss tomorrow. In an emergency, stay calm. If there is a fire, do not run to it. If something can burn, keep it far. If you see thick smoke, escape through the safest door. Somebody will come to rescue you. The alarm is loud for a reason. A worker must wear a helmet, and a rider must wear a belt. "Be careful — caution saves life. Protect your family. Avoid every silly risk."',
    bn: 'আব্বা রাফিকে শহরের নিরাপত্তা নিয়ম শেখান। "নিরাপত্তা কোমল অভ্যাস।" জায়গা নিরাপদ না হলে যেও না। বিপদ দেখলে পিছিয়ে যাও। "প্রতিটা বিপজ্জনক মুহূর্তে আগে ছোট এক সতর্কতা আসে।" সতর্কতা পড়ো; উপেক্ষা করো না। আজকের ছোট ঝুঁকি কালকের বড় ক্ষতি। জরুরি অবস্থায় শান্ত থাকো। আগুন থাকলে তার দিকে দৌড়িও না। যা পুড়তে পারে দূরে রাখো। ঘন ধোঁয়া দেখলে সবচেয়ে নিরাপদ দরজা দিয়ে পালাও। কেউ তোমাকে উদ্ধার করতে আসবে। অ্যালার্ম জোরে বাজে কারণসহ। শ্রমিককে হেলমেট, চালককে বেল্ট পরতে হবে। "সাবধান — সতর্কতা জীবন বাঁচায়। পরিবার রক্ষা কর। প্রতিটা বোকা ঝুঁকি এড়াও।"',
    tip: 'বাসায় "warning" ৩টা জিনিস খুঁজো (গ্যাস, আগুন, তার)।',
  },

  "hobby-more": {
    themeId: "hobby-more",
    title: "রবিবারের বিকেল",
    titleEn: "Sunday Afternoon",
    en: "Sunday afternoon — everyone has a different hobby. Amma calls it leisure. \"Free time is not empty time,\" she smiles. Rafi likes to collect old coins. His collection is small but proud. Karim loves photography. Nadia is quiet with painting; her friend prefers drawing. Reading is Faisal's silent joy. Writing is Nadia's second hobby. Amma spends the day in gardening. Cooking is her simple pleasure. Grandmother is doing some soft sewing. She will knit a small warm cap for the baby. A puzzle waits on the table. Rafi and Abba play chess. A new board game sits in the corner. Once a year the whole family goes camping. Long walking is Abba's habit; slow cycling is Karim's.",
    bn: 'রবিবারের বিকেল — সবার আলাদা শখ। আম্মা বলেন এটা অবসর। "অবসর মানে খালি সময় না," হাসেন। রাফি পুরোনো মুদ্রা সংগ্রহ করতে ভালোবাসে। তার সংগ্রহ ছোট, কিন্তু গর্বের। কারিম ফটোগ্রাফি ভালোবাসে। নাদিয়া চুপচাপ ছবি আঁকে; বন্ধু নকশা পছন্দ করে। পড়া ফয়সালের নীরব আনন্দ। লেখা নাদিয়ার দ্বিতীয় শখ। আম্মা দিনটা বাগানের কাজে কাটান। রান্না তাঁর সহজ আনন্দ। দাদি নরম সেলাই করছেন। বাচ্চার জন্য ছোট গরম টুপি বুনবেন। টেবিলে ধাঁধা অপেক্ষা করছে। রাফি ও আব্বা দাবা খেলে। কোণায় নতুন এক বোর্ড গেম। বছরে একবার পুরো পরিবার ক্যাম্পিংয়ে যায়। লম্বা হাঁটা আব্বার অভ্যাস; ধীর সাইকেল কারিমের।',
    tip: 'তোমার ২টা "hobby" ইংরেজিতে বলো।',
  },

  "personality-more": {
    themeId: "personality-more",
    title: "নাদিয়ার বন্ধুদের ছবি",
    titleEn: "Portraits of Nadia's Friends",
    en: 'Nadia describes her friends in her journal. "Every person is a small world." Sara is friendly and always kind. Mim is a shy girl, but her heart is brave. Rafi is my honest brother. Karim is polite; he never uses a rude word. Faisal is very smart, but Sara is clever in a soft way. My cousin is creative. My uncle is a little lazy, but Amma is always active. Grandmother is quiet; her friend is loud. Abba is serious, but he is also funny. The baby is curious about everything. "To be patient is to be strong." "To be generous is to be rich." "A selfish heart is a small heart," Nadia writes at the end.',
    bn: 'নাদিয়া জার্নালে বন্ধুদের বর্ণনা দেয়। "প্রতিটা মানুষ ছোট এক পৃথিবী।" সারা বন্ধুসুলভ, সবসময় দয়ালু। মিম লাজুক, কিন্তু হৃদয় সাহসী। রাফি আমার সৎ ভাই। কারিম ভদ্র; সে কখনো অভদ্র শব্দ ব্যবহার করে না। ফয়সাল খুব বুদ্ধিমান, কিন্তু সারা কোমলভাবে চতুর। কাজিন সৃজনশীল। চাচা একটু অলস, কিন্তু আম্মা সবসময় সক্রিয়। দাদি শান্ত; তাঁর বন্ধু উচ্চস্বরের। আব্বা গম্ভীর, কিন্তু মজারও। বাচ্চা সব কিছুতে কৌতূহলী। "ধৈর্যশীল হওয়া মানে শক্ত হওয়া।" "উদার হওয়া মানে ধনী হওয়া।" "স্বার্থপর হৃদয় ছোট হৃদয়," শেষে লেখে।',
    tip: 'নিজের ৩টা গুণ ইংরেজিতে বলো: "I am kind, honest, curious."',
  },

  "grammar-glue": {
    themeId: "grammar-glue",
    title: "নাদিয়ার রচনা",
    titleEn: "Nadia's Essay",
    en: "Nadia writes an essay. As the clock ticks, she thinks carefully. Since morning she has planned every line. She will write till noon, or until Amma calls her. Though the topic is hard, she does not stop. Unless she rests soon, her hand will hurt. Whereas Rafi likes numbers, Nadia loves words. Whether it rains or not, she will finish. Whatever mistake she makes, she will fix it. Whenever she is tired, she takes tea. Wherever a comma sits, meaning changes. Neither too long nor too short — a balanced essay. Either way she must submit today. Otherwise the mark will drop. Meanwhile Karim reads a book. Therefore Nadia works alone. Thus every paragraph grows. Nevertheless she smiles. Furthermore, she is proud of her writing.",
    bn: "নাদিয়া এক রচনা লেখে। যতক্ষণ ঘড়ি টিকটিক করে, সে সাবধানে ভাবে। সকাল থেকে প্রতিটা লাইন পরিকল্পনা করেছে। দুপুর পর্যন্ত লিখবে, বা আম্মা ডাকা পর্যন্ত। যদিও বিষয় কঠিন, তবু থামে না। শীঘ্রই বিশ্রাম না নিলে হাত ব্যথা করবে। রাফি সংখ্যা পছন্দ করে, অথচ নাদিয়া শব্দ ভালোবাসে। বৃষ্টি হোক বা না হোক, শেষ করবেই। যা-ই ভুল করুক, ঠিক করবে। যখনই ক্লান্ত হয়, চা খায়। কমা যেখানেই বসে, অর্থ বদলায়। খুব লম্বাও না, খুব ছোটও না। যেকোনোভাবেই আজ জমা দিতে হবে। নইলে নম্বর কমবে। এদিকে কারিম বই পড়ছে। তাই নাদিয়া একা কাজ করে। এভাবে প্রতিটা অনুচ্ছেদ বাড়ে। তবু হাসে। উপরন্তু, তার লেখা নিয়ে গর্বিত।",
    tip: "প্রতিটা যোজক ২ বাক্যকে জোড়া লাগায় — জোড়া বাক্য মুখে বলো।",
  },

  "pronouns-full": {
    themeId: "pronouns-full",
    title: "সর্বনামের খেলা",
    titleEn: "The Pronoun Game",
    en: 'The teacher points at Rafi. "Tell me a sentence about him." Rafi says, "He is my brother; you know him." "Now about me," the teacher smiles. "You teach us," Nadia answers. "And what about it?" she points at the clock. "It moves by itself." "And Nadia — she does the work herself." "We can do it ourselves too." "This pen is yours," Rafi says. "That one is ours; the red one is theirs." "To whom did you give the book?" "Whoever asked first." "Bring your own copy." "There are several such books on my shelf, and I finished the whole set." The class claps.',
    bn: 'শিক্ষক রাফির দিকে ইঙ্গিত করেন। "তার সম্পর্কে একটা বাক্য বল।" রাফি বলে, "সে আমার ভাই; তুমি তাকে চেন।" "এখন আমার সম্পর্কে," শিক্ষক হাসেন। "আপনি আমাদের পড়ান," নাদিয়া উত্তর দেয়। "আর এটা?" ঘড়ির দিকে ইঙ্গিত। "এটা নিজে নিজে চলে।" "নাদিয়া নিজে কাজ করে।" "আমরাও নিজেরাই পারি।" "এই কলম তোমার," রাফি বলে। "ওইটা আমাদের; লাল কলম তাদের।" "কাকে বই দিয়েছিলে?" "যে আগে চেয়েছে।" "নিজের কপি আনো।" "আমার তাকে এমন কয়েকটা বই আছে, পুরো সেট শেষ করেছি।" ক্লাস হাততালি দেয়।',
    tip: 'নিজের একটা জিনিস দেখাও, বলো: "This is mine. That is yours."',
  },

  "modals-full": {
    themeId: "modals-full",
    title: "সম্ভাবনার চাবি",
    titleEn: "Keys of Possibility",
    en: '"You should study every day," Abba says. "I would help you if you ask." "I will call you when dinner is ready." "Shall we go to the park after?" Rafi thinks. "I might come, but I might not." "You ought to finish your homework first." "Then we shall go together." "Would you like tea?" Amma asks. "I would love some." "You should try to sleep early tonight." "Tomorrow I will wake at six." "You might feel tired at first." "But you ought to be patient." "Shall I set the alarm?" Abba nods. "You will thank me later."',
    bn: '"তোমার প্রতিদিন পড়া উচিত," আব্বা বলেন। "চাইলে আমি সাহায্য করব।" "রাতের খাবার প্রস্তুত হলে ডাকব।" "এরপর পার্কে যাব?" রাফি ভাবে। "আসতে পারি, না-ও পারি।" "তোমার আগে বাড়ির কাজ শেষ করা উচিত।" "তাহলে একসাথে যাব।" "চা খাবে?" আম্মা জিজ্ঞেস করেন। "অবশ্যই খাব।" "আজ তাড়াতাড়ি ঘুমানো উচিত।" "কাল ছয়টায় উঠব।" "প্রথমে ক্লান্ত লাগতে পারে।" "কিন্তু ধৈর্য ধরতে হবে।" "অ্যালার্ম দিব?" আব্বা মাথা নাড়েন। "পরে ধন্যবাদ দেবে।"',
    tip: "should = উচিত, would = হতো, will = হবে, might = হতে পারে।",
  },

  "directions-full": {
    themeId: "directions-full",
    title: "গুপ্তধনের খেলা",
    titleEn: "The Treasure Hunt",
    en: '"Look up at the tree," Karim says. "Walk out of the door, and step onto the mat." "Once upon a time a treasure lay here." "Move forward two steps, then two backwards." "Now look upwards, now look downwards." "Go ahead to the wall." "Stand apart from your friend." "The prize is beyond that fence, but within our garden." "A clue is hidden throughout the yard, not elsewhere." "Look everywhere, look anywhere." "It is somewhere here, not nowhere." "Walk towards the mango tree." "The last clue is outdoors, near the gate." The children laugh and run.',
    bn: '"গাছের দিকে উপরে তাকাও," কারিম বলে। "দরজার বাইরে বেরোও, মাদুরে পা দাও।" "এক সময় এখানে গুপ্তধন ছিল।" "সামনে দুই ধাপ, তারপর দুই পিছনে।" "এখন উপরের দিকে তাকাও, এখন নিচের দিকে।" "দেয়ালের দিকে এগিয়ে যাও।" "বন্ধু থেকে আলাদা দাঁড়াও।" "পুরস্কার ওই বেড়ার ওপাশে, কিন্তু আমাদের বাগানের ভিতর।" "পুরো উঠোনজুড়ে সূত্র লুকানো, অন্য কোথাও না।" "সবখানে খোঁজো, যেকোনো জায়গায়।" "এটা এখানে কোথাও, কোথাও-না না।" "আম গাছের দিকে হাঁটো।" "শেষ সূত্র বাইরে, গেটের কাছে।"',
    tip: "ঘরে ৫ দিক দেখাও: up, down, forward, back, towards।",
  },

  "discourse-adv": {
    themeId: "discourse-adv",
    title: "নাদিয়ার বিতর্ক",
    titleEn: "Nadia's Debate",
    en: '"Anyway, let me start," Nadia says. "Actually, this topic is very old." "Apparently many people ignore it." "Basically, we must act now." "Obviously time is short." "Generally students agree with me." "Particularly the young ones care." "Specifically, I want cleaner streets." "Simply put — a small step helps." "Mainly the schools should teach this." "It is largely a habit problem." "I fully support the plan." "I entirely agree with my teacher." "Exactly at nine we will begin." "Absolutely no waste on the road." "I definitely believe change is coming." "Hopefully everyone will join." "Unfortunately, some will not care." "Fortunately, most people will." "Seriously — start today."',
    bn: '"যা-ই হোক, শুরু করি," নাদিয়া বলে। "আসলে বিষয়টা অনেক পুরোনো।" "শোনা যায়, অনেকে এটা এড়িয়ে যায়।" "মূলত এখনই কাজ করতে হবে।" "স্পষ্টতই সময় কম।" "সাধারণত শিক্ষার্থীরা একমত।" "বিশেষত তরুণরা যত্নশীল।" "বিশেষভাবে বলি — পরিষ্কার রাস্তা চাই।" "সহজ কথায় ছোট এক পদক্ষেপ সাহায্য করে।" "প্রধানত স্কুলে এটা শেখানো উচিত।" "অনেকটাই অভ্যাসের সমস্যা।" "আমি পুরোপুরি পরিকল্পনা সমর্থন করি।" "শিক্ষকের সাথে সম্পূর্ণ একমত।" "ঠিক নয়টায় শুরু করব।" "রাস্তায় একদম ময়লা নয়।" "আমি নিশ্চিতভাবে পরিবর্তনে বিশ্বাসী।" "আশা করি সবাই যোগ দেবে।" "দুর্ভাগ্যবশত কেউ কেউ পাত্তা দেবে না।" "সৌভাগ্যক্রমে বেশিরভাগই দেবে।" "সিরিয়াসলি — আজই শুরু কর।"',
    tip: 'কোনো মতামত দাও ৩টা "actually/basically/obviously" দিয়ে।',
  },

  "quantity-more": {
    themeId: "quantity-more",
    title: "ছোট সমীক্ষা",
    titleEn: "A Small Survey",
    en: 'Karim reads a small survey. "A large amount of tea is drunk in Bangladesh." "Plenty of homes have two cups a day." "Several friends drink even more." "Various flavours are popular." "The whole country enjoys it." "The majority prefer sweet tea; a minority want it plain." "There are numerous small shops." "Each shop offers multiple options." "In addition to milk tea, they serve green tea." "An additional item is lemon tea." "Approximately five cups per week is normal." "That is the percentage the report shows." "On average, most drink two." "A medium cup is best." "The minimum is one; the maximum is six." "The range is wide." "On a small scale, it is a national love."',
    bn: 'কারিম ছোট এক সমীক্ষা পড়ে। "বাংলাদেশে বিপুল পরিমাণ চা পান করা হয়।" "প্রচুর ঘরে দিনে দুই কাপ।" "কয়েকজন বন্ধু আরও বেশি।" "বিভিন্ন স্বাদ জনপ্রিয়।" "পুরো দেশ উপভোগ করে।" "অধিকাংশ মিষ্টি চা পছন্দ করে; সংখ্যালঘু ফিকা।" "অসংখ্য ছোট দোকান আছে।" "প্রতিটা দোকান একাধিক অপশন দেয়।" "দুধ চা ছাড়াও গ্রিন টি আছে।" "অতিরিক্ত জিনিস — লেবু চা।" "সপ্তাহে প্রায় পাঁচ কাপ স্বাভাবিক।" "এটাই প্রতিবেদনের শতাংশ।" "গড়ে বেশিরভাগ দুই কাপ পান করে।" "মাঝারি কাপ সেরা।" "সর্বনিম্ন এক, সর্বোচ্চ ছয়।" "পরিসীমা বিস্তৃত।" "ছোট মাপে এটা জাতীয় ভালোবাসা।"',
    tip: 'একদিন কতবার চা খাও? বলো: "On average, I drink 3 cups per day."',
  },

  "ability-skill": {
    themeId: "ability-skill",
    title: "ফয়সালের প্রদর্শনী",
    titleEn: "Faisal's Show",
    en: 'Faisal shows his skills at a school event. "Every ability starts small." He is able to play the guitar. His friend is unable to sing, but is capable of drawing. Nadia has the capacity to memorize fast. Karim has a real talent for math; he is a talented boy. Rafi has one qualification — a swimming badge. He is a qualified swimmer. "To qualify, you must practice daily." "I want to master English," Faisal says. The event is competitive. "An effective method beats hard work alone." A reliable friend helps. "Be ambitious, but be humble." Confidence grows with practice, and true confidence looks calm. "A professional is patient, an expert is experienced."',
    bn: 'ফয়সাল স্কুলের অনুষ্ঠানে তার দক্ষতা দেখায়। "প্রতিটা যোগ্যতা ছোট থেকে শুরু।" সে গিটার বাজাতে পারে। বন্ধু গাইতে অক্ষম, কিন্তু আঁকতে সক্ষম। নাদিয়ার দ্রুত মুখস্থ করার সামর্থ্য আছে। কারিমের অংকে সত্যিকারের প্রতিভা; সে প্রতিভাবান। রাফির একটাই যোগ্যতা — সাঁতারের ব্যাজ। সে যোগ্য সাঁতারু। "যোগ্য হতে রোজ অনুশীলন লাগে।" "আমি ইংরেজিতে দক্ষ হতে চাই," ফয়সাল বলে। অনুষ্ঠান প্রতিযোগিতামূলক। "কার্যকর পদ্ধতি শুধু কঠিন পরিশ্রমকে হারায়।" নির্ভরযোগ্য বন্ধু সাহায্য করে। "উচ্চাভিলাষী হও, কিন্তু নম্র।" আত্মবিশ্বাস অনুশীলনে বাড়ে, আসল আত্মবিশ্বাস শান্ত দেখায়। "পেশাদার ধৈর্যশীল, বিশেষজ্ঞ অভিজ্ঞ।"',
    tip: 'নিজের ৩টা দক্ষতা লিখো: "I can... I am able to..."',
  },

  "business-corp": {
    themeId: "business-corp",
    title: "বার্ষিক সভা",
    titleEn: "The Annual Meeting",
    en: 'The company holds a big annual meeting. The corporate hall is full. Every executive stands to greet the guests. The administration prepared the room. Today\'s agenda has five items. A travel agency and a small association join as partners. This meeting is important for commercial success. The organization is large. Nadia will organize the drinks; she is organized. The organizer smiles calmly. Marketing will launch a new brand next week. They will promote it on TV. A new publication comes out today. "Read the proposal carefully." "We must commit to quality; commitment is everything." A short conference follows. The safety committee gives a final note.',
    bn: 'কোম্পানি বড় বার্ষিক সভা করে। কর্পোরেট হল ভরা। প্রতিটা নির্বাহী অতিথিদের অভ্যর্থনা করেন। প্রশাসন ঘর প্রস্তুত করেছে। আজকের কার্যসূচিতে পাঁচটা বিষয়। একটা ট্রাভেল এজেন্সি ও ছোট এক সমিতি অংশীদার হিসেবে যোগ দেয়। এই সভা বাণিজ্যিক সাফল্যের জন্য গুরুত্বপূর্ণ। প্রতিষ্ঠান বড়। নাদিয়া পানীয় গোছাবে; সে গোছানো। আয়োজক শান্তভাবে হাসেন। বিপণন বিভাগ পরের সপ্তাহে নতুন ব্র্যান্ড চালু করবে। টিভিতে প্রচার করবে। আজ নতুন এক প্রকাশনা বেরোয়। "প্রস্তাবটা সাবধানে পড়ো।" "গুণমানে প্রতিশ্রুতিবদ্ধ হতে হবে; অঙ্গীকারই সব।" ছোট এক সম্মেলন হয়। নিরাপত্তা কমিটি চূড়ান্ত নোট দেয়।',
    tip: '"agenda" মানে কার্যসূচি — নিজের দিনের ৩টা কাজ লিখো।',
  },

  "analysis-research": {
    themeId: "analysis-research",
    title: "ছোট গবেষণা",
    titleEn: "A Small Research",
    en: 'Nadia writes a small research report. "I will analyse the daily study time of ten friends." Her analysis is careful. She will assess each answer; the assessment is short. "I evaluate honesty, not speed." She will examine every note. Her examination is fair. Amma will monitor her progress. Every observation is written down. She adds one statistic — a simple survey number. A small sample is enough. She will measure hours by clock; every measurement is exact. She can identify slow days easily. "I confirm the totals twice." "I define the terms first." A clear definition helps. She will determine the average and conclude with one sentence: patience wins.',
    bn: 'নাদিয়া ছোট গবেষণা লেখে। "দশ বন্ধুর দৈনিক পড়ার সময় বিশ্লেষণ করব।" বিশ্লেষণ সাবধানী। প্রতিটা উত্তর মূল্যায়ন করবে; মূল্যায়ন ছোট। "সততা মাপি, গতি না।" প্রতিটা নোট পরীক্ষা করবে। পরীক্ষা ন্যায্য। আম্মা অগ্রগতি নজরে রাখবেন। প্রতিটা পর্যবেক্ষণ লেখা। একটা পরিসংখ্যান যোগ করে — সহজ এক জরিপ সংখ্যা। ছোট নমুনা যথেষ্ট। ঘড়িতে ঘণ্টা মাপবে; প্রতিটা পরিমাপ নির্ভুল। ধীর দিন সহজে চিনতে পারে। "যোগফল দুবার নিশ্চিত করি।" "প্রথমে সংজ্ঞা দাও।" স্পষ্ট সংজ্ঞা সাহায্য করে। গড় নির্ধারণ করবে ও এক বাক্যে সিদ্ধান্ত দেবে: ধৈর্য জেতে।',
    tip: '১ সপ্তাহে ২টা প্রশ্নের ছোট "survey" ইংরেজিতে কর।',
  },

  "attitude-behave": {
    themeId: "attitude-behave",
    title: "শিক্ষকের পাঠ",
    titleEn: "The Teacher's Lesson",
    en: 'The teacher discusses good and bad behaviour. "Your attitude paints your day." "A polite child knows how to behave." Behaviour, she says, is louder than words. "A soft manner opens every door." "Do not react in anger; take a breath." "Respond, do not shout." "Treat others as you want to be treated." "Do not ignore your parents." "Obey small rules; big rules become easy." "An aggressive voice hurts." "An impatient hand breaks things." "A careless word wounds a friend." "Never be cruel, never be selfish." "An annoying habit will annoy everyone." "Learn to admire good work; appreciate small kindness." "Apologize when wrong." "Greet each person with a smile."',
    bn: 'শিক্ষক ভালো-মন্দ আচরণ নিয়ে আলোচনা করেন। "তোমার মনোভাব দিনের রং।" "ভদ্র শিশু জানে কীভাবে চলতে হয়।" আচরণ, তিনি বলেন, কথার চেয়ে জোরালো। "কোমল ভঙ্গি প্রতিটা দরজা খোলে।" "রাগে প্রতিক্রিয়া দিও না; শ্বাস নাও।" "উত্তর দাও, চিৎকার নয়।" "যেভাবে চাও, সেভাবেই অন্যকে দেখো।" "বাবা-মাকে উপেক্ষা করো না।" "ছোট নিয়ম মানো; বড় নিয়ম সহজ হবে।" "আক্রমণাত্মক কণ্ঠ কষ্ট দেয়।" "অধৈর্য হাত জিনিস ভাঙে।" "অসতর্ক শব্দ বন্ধুকে আঘাত করে।" "কখনো নিষ্ঠুর, কখনো স্বার্থপর হয়ো না।" "বিরক্তিকর অভ্যাস সবাইকে বিরক্ত করবে।" "ভালো কাজের প্রশংসা শেখো; ছোট দয়াকে মূল্য দাও।" "ভুল হলে ক্ষমা চাও।" "প্রতিটা মানুষকে হাসিমুখে অভ্যর্থনা জানাও।"',
    tip: 'আজ ১ জনকে ইংরেজিতে বলো: "I appreciate you. Thank you."',
  },

  "cause-effect": {
    themeId: "cause-effect",
    title: "বন্যার গল্প",
    titleEn: "The Flood Story",
    en: 'Karim explains why floods happen. "Every cause has a small effect." "Heavy rain will affect the low fields." "Its impact is felt for weeks." "Rivers influence every village near them." "One consequence is broken bridges." "The final outcome is sadness." "Problems arise quickly if forests are cut." "Floods occur every year now." "One factor is climate change." "The source of the water is the hills." "Based on last year, this year will be worse." "Due to poor drainage, water stays long." "According to the news, help is coming." "According to Abba, we must prepare early." "Experts predict a big storm." "Their prediction is scary." "Rain is expected on Friday." "An unexpected wind may come." "It is likely to be a hard week."',
    bn: 'কারিম ব্যাখ্যা করে কেন বন্যা হয়। "প্রতিটা কারণের ছোট ফল আছে।" "ভারী বৃষ্টি নিচু মাঠে প্রভাব ফেলবে।" "এর প্রভাব সপ্তাহজুড়ে অনুভূত হয়।" "নদী কাছের প্রতিটা গ্রামকে প্রভাবিত করে।" "একটা পরিণাম — ভাঙা সেতু।" "চূড়ান্ত ফলাফল দুঃখ।" "বন কাটা হলে সমস্যা দ্রুত দেখা দেয়।" "এখন প্রতিবছর বন্যা হয়।" "একটা কারণ জলবায়ু পরিবর্তন।" "পানির উৎস পাহাড়।" "গত বছরের ভিত্তিতে এবার আরও খারাপ হবে।" "খারাপ ড্রেনেজের কারণে পানি জমে থাকে।" "খবর অনুযায়ী সাহায্য আসছে।" "আব্বার মতে আগেই প্রস্তুত হতে হবে।" "বিশেষজ্ঞরা বড় ঝড়ের পূর্বাভাস দেন।" "তাদের ভবিষ্যদ্বাণী ভয়াবহ।" "শুক্রবার বৃষ্টি প্রত্যাশিত।" "অপ্রত্যাশিত বাতাস আসতে পারে।" "সম্ভবত কঠিন সপ্তাহ।"',
    tip: '"cause → effect" — একটা উদাহরণ ভাবো: "Rain causes flood."',
  },

  "change-adapt": {
    themeId: "change-adapt",
    title: "নতুন শহর",
    titleEn: "New City",
    en: 'The family moves to a new city. Life will alter slowly. A big move can transform a person. This transition is soft. Amma will convert one room into a study. She will modify the curtains. "We must adapt to new neighbours," Abba says. Rafi will adjust his sleep. His day will shift by one hour. Nadia will switch schools. She will replace old friends with letters, not with silence. "You will develop new habits," Amma smiles. Every development takes time. Their world will expand. They will extend the balcony next year. They will reduce daily expenses. Income will increase slowly. Old worries decrease. Hope will rise. Fear will drop. Kindness will spread through the house.',
    bn: 'পরিবার নতুন শহরে চলে যায়। জীবন ধীরে বদলাবে। বড় সরে যাওয়া মানুষকে রূপান্তর করে। এই পরিবর্তন কোমল। আম্মা একটা ঘরকে পড়ার ঘরে রূপান্তর করবেন। পর্দা পরিবর্তন করবেন। "নতুন প্রতিবেশীদের সাথে মানিয়ে নিতে হবে," আব্বা বলেন। রাফি ঘুম সমন্বয় করবে। তার দিন এক ঘণ্টা সরবে। নাদিয়া স্কুল বদলাবে। পুরোনো বন্ধুকে চিঠি দিয়ে প্রতিস্থাপন করবে, নীরবতা দিয়ে না। "নতুন অভ্যাস গড়ে উঠবে," আম্মা হাসেন। প্রতিটা বিকাশে সময় লাগে। তাদের জগৎ প্রসারিত হবে। পরের বছর বারান্দা বাড়াবে। দৈনিক খরচ কমাবে। আয় ধীরে বাড়বে। পুরোনো চিন্তা কমবে। আশা উঠবে। ভয় পড়বে। ঘরজুড়ে দয়া ছড়াবে।',
    tip: 'নিজের ১টা "পুরোনো অভ্যাস → নতুন অভ্যাস" ইংরেজিতে বলো।',
  },

  "confidence-doubt": {
    themeId: "confidence-doubt",
    title: "মঞ্চের বক্তৃতা",
    titleEn: "The Stage Speech",
    en: 'Rafi prepares for a stage speech. "Do not assume the crowd will laugh," Abba says. "Do not suspect every friend." "Guess less, prepare more." "You seem calm today." "You appear ready." "Your calm is apparent." "Apparently the hall is full." "It is obvious you worked hard." "Obviously your friends came to support you." "Your voice is clear." "Your plan is definite." "You will definitely do well." "Possibly you will forget one line — that is fine." "You will probably remember it later." "Perhaps take a small pause." "Do not doubt yourself." "Do not hesitate to look at the audience." "Convince them with your eyes." "When they are convinced, they smile." "You do not need to persuade — truth persuades itself."',
    bn: 'রাফি মঞ্চের বক্তৃতার জন্য প্রস্তুতি নেয়। "ধরে নিও না দর্শক হাসবে," আব্বা বলেন। "প্রতিটা বন্ধুকে সন্দেহ করো না।" "কম অনুমান কর, বেশি প্রস্তুতি।" "আজ শান্ত মনে হচ্ছ।" "প্রস্তুত দেখাচ্ছ।" "তোমার প্রশান্তি স্পষ্ট।" "শোনা যায় হল ভরা।" "পরিশ্রম করেছ তা স্পষ্ট।" "স্পষ্টতই বন্ধুরা সমর্থন দিতে এসেছে।" "তোমার কণ্ঠ পরিষ্কার।" "পরিকল্পনা নির্দিষ্ট।" "তুমি নিশ্চিতভাবে ভালো করবে।" "সম্ভবত একটা লাইন ভুলবে — চলবে।" "সম্ভবত পরে মনে পড়বে।" "হয়তো ছোট বিরতি নাও।" "নিজেকে সন্দেহ করো না।" "দর্শকের দিকে তাকাতে দ্বিধা কর না।" "চোখ দিয়ে বিশ্বাস করাও।" "যখন তারা বিশ্বাসী, হাসে।" "রাজি করানো লাগবে না — সত্য নিজে বোঝায়।"',
    tip: 'আয়নার সামনে ৫টা "I am confident" বাক্য বলো।',
  },

  "conflict-tension": {
    themeId: "conflict-tension",
    title: "বন্ধুর ঝগড়া",
    titleEn: "Friends Quarrel",
    en: 'Two friends have a quarrel. It began as a small threat — "I will not play again!" One friend tried to threaten the other. "Words can be violence too," the teacher says. A violent tone is never right. Each became the other\'s opponent. Rafi will oppose the plan. Nadia joins the opposition. They protest with silence. A short dispute grows. A silly quarrel opens tension in the class. Everyone feels pressure. Both struggle to speak first. "This conflict will not last," the teacher smiles. "Do not be harsh, do not be strict." A bell will strike. The moment is tough, but brief. They shake hands and resolve the matter.',
    bn: 'দুই বন্ধুর ঝগড়া হয়। শুরু হয় ছোট এক হুমকিতে — "আর খেলব না!" এক বন্ধু অন্যকে ভয় দেখানোর চেষ্টা করে। "শব্দও সহিংসতা হতে পারে," শিক্ষক বলেন। সহিংস সুর কখনো ঠিক না। দুজন একে অপরের প্রতিদ্বন্দ্বী হয়। রাফি পরিকল্পনার বিরোধিতা করবে। নাদিয়া বিরোধী পক্ষে যোগ দেয়। তারা নীরবতা দিয়ে প্রতিবাদ করে। ছোট বিতর্ক বাড়ে। বোকা ঝগড়া ক্লাসে টানাপোড়েন আনে। সবাই চাপ অনুভব করে। দুজনেই আগে বলার সংগ্রাম করে। "এই দ্বন্দ্ব বেশিক্ষণ থাকবে না," শিক্ষক হাসেন। "কঠোর হয়ো না, কড়া হয়ো না।" ঘণ্টা বাজবে। মুহূর্তটা কঠিন, কিন্তু ছোট। তারা করমর্দন করে বিষয় মিটিয়ে ফেলে।',
    tip: "রাগ হলে আগে ১০ পর্যন্ত ইংরেজিতে গোনো।",
  },

  "help-support": {
    themeId: "help-support",
    title: "ত্রাণ শিবির",
    titleEn: "Relief Camp",
    en: 'Karim volunteers at a flood relief camp. "Aid is a small hand, not a big gift." Many families donate rice and blankets. "Every citizen must participate." Karim will involve his friends. Nadia is deeply involved. "Kind words encourage tired people." "A quiet helper can inspire a whole camp." "You cannot rely on the government alone." "They depend on us today." "We must protect the weakest." "Protection is a shared job." A boat will rescue two families before dark. A dry tent gives shelter. Volunteers supply water. Trucks provide food. Workers distribute biscuits calmly. The distribution is fair. "Every willing hand counts." "A generous heart is heavy in the right way."',
    bn: 'কারিম বন্যা ত্রাণ শিবিরে স্বেচ্ছাসেবক। "সাহায্য ছোট হাত, বড় উপহার না।" অনেক পরিবার চাল ও কম্বল দান করে। "প্রতিটা নাগরিককে অংশ নিতে হবে।" কারিম বন্ধুদের যুক্ত করবে। নাদিয়া গভীরভাবে জড়িত। "দয়ালু কথা ক্লান্ত মানুষকে উৎসাহ দেয়।" "চুপচাপ সাহায্যকারী পুরো শিবিরকে অনুপ্রেরণা দেয়।" "শুধু সরকারের ওপর নির্ভর করা যায় না।" "তারা আজ আমাদের ওপর নির্ভরশীল।" "সবচেয়ে দুর্বলকে রক্ষা করতে হবে।" "সুরক্ষা যৌথ কাজ।" অন্ধকারের আগে নৌকা দুই পরিবারকে উদ্ধার করবে। শুকনো তাঁবু আশ্রয় দেয়। স্বেচ্ছাসেবকরা পানি সরবরাহ করে। ট্রাক খাবার প্রদান করে। কর্মীরা শান্তভাবে বিস্কুট বিতরণ করে। বিতরণ ন্যায্য। "প্রতিটা ইচ্ছুক হাত মূল্যবান।" "উদার হৃদয় সঠিকভাবে ভারী।"',
    tip: 'আজ ১ জন কে ছোট সাহায্য কর, ইংরেজিতে বলো: "May I help you?"',
  },

  "abandon-refuse": {
    themeId: "abandon-refuse",
    title: "ফয়সালের সিদ্ধান্ত",
    titleEn: "Faisal's Decision",
    en: 'Faisal decides to abandon a job that does not fit. "To quit is not to fail." He will refuse the extra hours. The boss will not dismiss him — Faisal leaves quietly. Sales decline this month. He will deny the rumour of anger. He does not reject his team; he rejects the schedule. He will resist the pressure. He does not dislike the office. He will not regret this. He has a small excuse — his health. He will cancel one meeting and postpone another. To escape stress, he needs one week free. He will avoid late calls. He will withdraw slowly. He will give up the bonus, let go of ego, break the habit, and end the tension.',
    bn: 'ফয়সাল অনুপযুক্ত চাকরি ছাড়ার সিদ্ধান্ত নেয়। "ছেড়ে দেওয়া মানে হারা না।" অতিরিক্ত ঘণ্টা প্রত্যাখ্যান করবে। বস তাকে বরখাস্ত করবেন না — ফয়সাল চুপচাপ চলে যায়। এই মাসে বিক্রি কমে যাচ্ছে। রাগের গুজব সে অস্বীকার করবে। দলকে প্রত্যাখ্যান করে না; সময়সূচি প্রত্যাখ্যান করে। চাপ প্রতিরোধ করবে। অফিস অপছন্দ করে না। এতে অনুশোচনা করবে না। ছোট এক অজুহাত — স্বাস্থ্য। এক সভা বাতিল করবে, আরেকটা পিছাবে। চাপ থেকে পালাতে এক সপ্তাহ ছুটি দরকার। দেরিতে ফোন এড়াবে। ধীরে সরে যাবে। বোনাস ছাড়বে, অহংকার ছাড়বে, অভ্যাস ভাঙবে, উত্তেজনার অবসান করবে।',
    tip: '"No" বলা শেখো — "I would prefer not to."',
  },

  "academic-life": {
    themeId: "academic-life",
    title: "বিশ্ববিদ্যালয়ের প্রথম দিন",
    titleEn: "First Day at University",
    en: 'Nadia\'s cousin starts university. "The academic world is wide," the guide says. Her course is advanced. "Good teachers educate the whole person." "An educated mind is a calm mind." The educational plan is clear. She will study engineering. A weekly journal will hold her notes. She is a junior student. The initial week is easy. Initially she is shy. "Discipline is your best friend." An essential book sits on her desk. A fundamental idea starts every class. Primary lectures are short; secondary sessions are longer. Some rooms are higher, some lower. The dean gives an introduction. "Read every instruction." Her instructor smiles.',
    bn: 'নাদিয়ার কাজিন বিশ্ববিদ্যালয় শুরু করে। "একাডেমিক জগৎ বিশাল," গাইড বলেন। কোর্স উন্নত। "ভালো শিক্ষক পুরো মানুষকে শিক্ষিত করেন।" "শিক্ষিত মন শান্ত মন।" শিক্ষামূলক পরিকল্পনা স্পষ্ট। প্রকৌশল পড়বে। সাপ্তাহিক জার্নালে নোট রাখবে। সে কনিষ্ঠ ছাত্রী। প্রাথমিক সপ্তাহ সহজ। প্রথমে লাজুক। "শৃঙ্খলা তোমার সেরা বন্ধু।" ডেস্কে একটা অপরিহার্য বই। প্রতিটা ক্লাস মৌলিক ধারণা দিয়ে শুরু হয়। প্রাথমিক লেকচার ছোট; দ্বিতীয় সেশন লম্বা। কিছু ঘর উঁচু, কিছু নিচু। ডিন পরিচয় দেন। "প্রতিটা নির্দেশনা পড়ো।" প্রশিক্ষক হাসেন।',
    tip: "নিজের ৫টা বিষয়ের ইংরেজি নাম মনে রাখো।",
  },

  "accident-emergency": {
    themeId: "accident-emergency",
    title: "রাস্তায় ছোট বিপদ",
    titleEn: "Trouble on the Road",
    en: 'A small accident happens near the market. A car and a rickshaw crash softly. A boy is injured on the arm. A small wound bleeds. His leg hurts. "This is urgent," Karim says. "But not severe." Nobody will suffer long. The boy is in shock. He looks shocked but calm. He is not unconscious. He is fully alive. Nobody is dead. His hand does not bleed much. The rickshaw puller is only slightly injured. The victim is a young student. This incident is small. Its impact on the family is short. He will recover in a week. "He will survive without any problem," the doctor says.',
    bn: 'বাজারের কাছে ছোট এক দুর্ঘটনা ঘটে। একটা গাড়ি ও রিকশা নরমভাবে ধাক্কা লাগে। এক ছেলে হাতে আহত। ছোট ক্ষত রক্ত পড়ে। পা ব্যথা করে। "এটা জরুরি," কারিম বলে। "কিন্তু গুরুতর না।" কেউ বেশিক্ষণ কষ্ট পাবে না। ছেলেটা আঘাত (শকে) আছে। হতভম্ব দেখাচ্ছে, কিন্তু শান্ত। অচেতন না। পুরোপুরি জীবিত। কেউ মারা যায়নি। হাত থেকে বেশি রক্ত পড়ছে না। রিকশাচালক সামান্য আহত। শিকার এক তরুণ ছাত্র। ঘটনাটা ছোট। পরিবারে প্রভাব ছোট। এক সপ্তাহে সুস্থ হবে। "কোনো সমস্যা ছাড়াই বেঁচে যাবে," ডাক্তার বলেন।',
    tip: "জরুরি নম্বর মনে রাখো: 999।",
  },

  "housing-inside-outside": {
    themeId: "housing-inside-outside",
    title: "নতুন ফ্ল্যাটে রঙ",
    titleEn: "Painting the New Flat",
    en: "The family paints the new flat. Their accommodation is small but sweet. In the village they had a wooden cottage; here they live in modern housing. They pay monthly rent. Every resident of the building is polite. A small garage sits below. The main entrance is wide. Their entry pass is blue. The upper floor is warm. The lower floor is cool. An outdoor tap serves the garden. An indoor lamp lights the kitchen. Children play indoors when it rains. They play outdoors on sunny days. The external walls are yellow. The internal walls are white. The inner room is quiet. The outer room is busy. Every domestic task is shared. The household is happy.",
    bn: "পরিবার নতুন ফ্ল্যাটে রঙ করে। বাসস্থান ছোট কিন্তু মিষ্টি। গ্রামে কাঠের কুটির ছিল; এখানে আধুনিক আবাসন। মাসিক ভাড়া দেয়। বিল্ডিংয়ের প্রতিটা বাসিন্দা ভদ্র। নিচে ছোট গ্যারেজ। মূল প্রবেশদ্বার প্রশস্ত। প্রবেশ পাস নীল। উপরের তলা উষ্ণ। নিচের তলা শীতল। বাইরের কল বাগানে সেবা দেয়। ভেতরের বাতি রান্নাঘর আলোকিত করে। বৃষ্টি হলে বাচ্চারা ভেতরে খেলে। রোদে বাইরে খেলে। বাইরের দেয়াল হলুদ। ভেতরের দেয়াল সাদা। ভেতরের ঘর শান্ত। বাইরের ঘর ব্যস্ত। প্রতিটা গৃহকাজ ভাগাভাগি। পরিবার সুখী।",
    tip: 'ঘরের ৫টা "internal/external" জিনিস দেখাও।',
  },

  "advertising-media": {
    themeId: "advertising-media",
    title: "প্রথম বিজ্ঞাপন",
    titleEn: "The First Ad",
    en: 'A start-up plans its first ad campaign. "We must advertise smart, not loud." Their advertising budget is small. A bright poster hangs at the tea shop. A short publication carries their story. A digital display flashes at the mall. A weekend exhibition opens their brand to families. An announcement goes on the radio. TV will broadcast a short clip. Every viewer is a possible customer. The audience is young. Free publicity from a happy client helps most. Every promotional item has their name. A commercial airs at nine. A small label sits on each bottle. Their logo is a green leaf. A neat tag reads "pure". A big banner covers the wall. They print a hundred flyers. They publish a fresh article. Good news will spread.',
    bn: 'স্টার্ট-আপ প্রথম বিজ্ঞাপন প্রচারণার পরিকল্পনা করে। "বুদ্ধি করে প্রচার করব, জোরে না।" বিজ্ঞাপন বাজেট ছোট। চায়ের দোকানে উজ্জ্বল পোস্টার। ছোট এক প্রকাশনা তাদের গল্প বহন করে। মলে ডিজিটাল ডিসপ্লে জ্বলে। সাপ্তাহিক প্রদর্শনী তাদের ব্র্যান্ড পরিবারদের কাছে খোলে। রেডিওতে ঘোষণা। টিভি ছোট ক্লিপ প্রচার করবে। প্রতিটা দর্শক সম্ভাব্য ক্রেতা। শ্রোতা তরুণ। খুশি ক্রেতার বিনামূল্যে প্রচার সবচেয়ে সাহায্য করে। প্রতিটা প্রচারমূলক জিনিসে তাদের নাম। নয়টায় বাণিজ্যিক বিজ্ঞাপন। প্রতিটা বোতলে ছোট লেবেল। লোগো — সবুজ পাতা। পরিপাটি ট্যাগে "pure" লেখা। বড় ব্যানার দেয়াল ঢাকে। শত ফ্লায়ার ছাপায়। নতুন নিবন্ধ প্রকাশ করে। ভালো খবর ছড়াবে।',
    tip: "আজকের একটা বিজ্ঞাপন লক্ষ কর — ৩ ইংরেজি শব্দ খুঁজো।",
  },

  "agreement-contract": {
    themeId: "agreement-contract",
    title: "কারিমের ভাড়া চুক্তি",
    titleEn: "Karim's Rental Contract",
    en: 'Karim signs his first rental agreement. The landlord is a business associate of his uncle. Both are associated with the same trust. "Let me cite the rule," the landlord says. He will quote page four. The old quotation says one month notice. Karim keeps a reference copy. He will register his name at the office. His signature is neat. Every term is fair. Each condition is small. The landlord\'s approval is quick. He will approve the tenant. He does not reject anyone without a reason. Every renter has an obligation. Karim will commit for one year. His commitment is honest. He will confirm the deposit today. A quiet witness signs beside them. The blue stamp marks the paper.',
    bn: 'কারিম প্রথম ভাড়া চুক্তি সই করে। বাড়িওয়ালা তার চাচার ব্যবসায়িক সহযোগী। দুজনেই একই ট্রাস্টের সাথে যুক্ত। "নিয়ম উদ্ধৃত করি," বাড়িওয়ালা বলেন। চার নম্বর পাতা উদ্ধৃতি দেবেন। পুরোনো উদ্ধৃতি বলে এক মাসের নোটিশ। কারিম রেফারেন্স কপি রাখে। অফিসে নাম নিবন্ধন করবে। তার স্বাক্ষর পরিপাটি। প্রতিটা শর্ত ন্যায্য। প্রতিটা শর্ত ছোট। বাড়িওয়ালার অনুমোদন দ্রুত। ভাড়াটেকে অনুমোদন দেবেন। বিনা কারণে কাউকে প্রত্যাখ্যান করেন না। প্রতিটা ভাড়াটের একটা দায়বদ্ধতা আছে। কারিম এক বছরের জন্য প্রতিশ্রুতিবদ্ধ হবে। তার অঙ্গীকার সৎ। আজ জামানত নিশ্চিত করবে। শান্ত এক সাক্ষী পাশে সই করেন। নীল স্ট্যাম্প কাগজে ছাপ দেয়।',
    tip: "যেকোনো চুক্তি সই করার আগে ২ বার পড়ো।",
  },

  "aim-goal": {
    themeId: "aim-goal",
    title: "নতুন বছরের লক্ষ্য",
    titleEn: "New Year Goals",
    en: 'Rafi writes his goals for the new year. "My aim is a clean daily life." His main objective is fitness. He will attempt to wake at six. This is his small initiative. He will seek knowledge, not marks. He will pursue reading every day. A fundamental habit is patience. A significant change starts small. Change will grow significantly by June. Time is his key resource. His main worry is laziness. His primary goal is health. His top priority is family. Sleep is essential. Water is vital. Kindness is crucial. Honesty is critical. Something inside will urge him each day. He does intend to succeed. His intention is calm and clear.',
    bn: 'রাফি নতুন বছরের লক্ষ্য লেখে। "আমার লক্ষ্য পরিচ্ছন্ন দৈনন্দিন জীবন।" মূল উদ্দেশ্য ফিটনেস। ছয়টায় ওঠার চেষ্টা করবে। এটা তার ছোট উদ্যোগ। জ্ঞান খুঁজবে, নম্বর না। প্রতিদিন পড়া অনুসরণ করবে। মৌলিক অভ্যাস ধৈর্য। উল্লেখযোগ্য পরিবর্তন ছোট থেকে শুরু। জুন নাগাদ উল্লেখযোগ্যভাবে বাড়বে। সময় তার মূল সম্পদ। প্রধান দুশ্চিন্তা অলসতা। প্রাথমিক লক্ষ্য স্বাস্থ্য। সর্বোচ্চ অগ্রাধিকার পরিবার। ঘুম অপরিহার্য। পানি অত্যাবশ্যক। দয়া গুরুত্বপূর্ণ। সততা সঙ্কটজনকভাবে জরুরি। ভেতর থেকে কিছু প্রতিদিন তাগিদ দেবে। সে সফল হতে চায়। উদ্দেশ্য শান্ত ও স্পষ্ট।',
    tip: 'নিজের ৩টা "aim" ইংরেজিতে লিখো।',
  },

  "alcohol-cigarette": {
    themeId: "alcohol-cigarette",
    title: "আব্বার সতর্কতা",
    titleEn: "Abba's Warning",
    en: 'Abba warns Rafi about harmful habits. "Alcohol is not a friend," he says. An alcoholic life is a lonely life. A drunk driver hurts many. A cigarette looks small; smoking kills slowly. "These things harm you, and they are harmful to your family." Addiction is a chain. Abuse of the body is a slow accident. Some men suffer for years. Every weakness costs. Every risk is a bill. "I warn you now, not later." "Learn to avoid the first sip." "Learn to limit every habit." A good habit builds you; a bad habit breaks you. Self-control is the top skill. Stress can push us to bad choices. A depressed heart looks for easy comfort. A depressing pattern grows in the dark.',
    bn: 'আব্বা রাফিকে ক্ষতিকর অভ্যাস নিয়ে সতর্ক করেন। "মদ বন্ধু না," বলেন। মাদকাসক্ত জীবন একাকী জীবন। মাতাল চালক অনেককে আঘাত করে। সিগারেট ছোট দেখায়; ধূমপান ধীরে মারে। "এসব তোমাকে ক্ষতি করে, তোমার পরিবারের জন্যও ক্ষতিকর।" আসক্তি এক শৃঙ্খল। শরীরের অপব্যবহার ধীর দুর্ঘটনা। কিছু মানুষ বছরের পর বছর কষ্ট পান। প্রতিটা দুর্বলতার মূল্য আছে। প্রতিটা ঝুঁকি একটা বিল। "আজই সতর্ক করছি, পরে না।" "প্রথম চুমুক এড়ানো শেখো।" "প্রতিটা অভ্যাসের সীমা শেখো।" ভালো অভ্যাস গড়ে; খারাপ অভ্যাস ভাঙে। আত্মনিয়ন্ত্রণ শীর্ষ দক্ষতা। চাপ আমাদের খারাপ পছন্দে ঠেলে দিতে পারে। বিষণ্ণ হৃদয় সহজ আরাম খোঁজে। বিষণ্ণ নকশা অন্ধকারে বাড়ে।',
    tip: 'নিজের ১টা "bad habit" ইংরেজিতে লিখে ক্রস কর।',
  },

  "appearance-look": {
    themeId: "appearance-look",
    title: "বাসস্ট্যান্ডে চেহারা",
    titleEn: "Faces at the Bus Stop",
    en: 'Nadia describes people at a bus stop. "Every appearance tells half a story," she thinks. An old man\'s image is soft. His portrait would need calm colours. His face is pale. His look is blank. His back is a little curved. A gentle curve marks his shoulders. A young boy has a pointed chin. His cheeks look hollow after school. A woman holds a photo frame. A thick layer of dust sits on it. Behind her a tall column of light falls from a lamp. A red circle marks the shop sign. The rickshaw wheel turns at a sharp angle. Every person is a fresh shape and a fresh form. The pavement surface is uneven. A small edge cuts the shoe. A boy folds a paper plane. His folding is neat.',
    bn: 'নাদিয়া বাসস্ট্যান্ডে মানুষদের বর্ণনা দেয়। "প্রতিটা চেহারা অর্ধেক গল্প বলে," ভাবে। এক বৃদ্ধের ছবি কোমল। প্রতিকৃতিতে শান্ত রং লাগবে। মুখ ফ্যাকাশে। দৃষ্টি শূন্য। পিঠ একটু বাঁকা। কাঁধে কোমল বাঁক। এক কিশোরের চিবুক তীক্ষ্ণ। স্কুলের পর গাল ভেতরের দিকে। এক নারী ফ্রেমে ছবি ধরেন। তাতে পুরু ধুলোর স্তর। পেছনে বাতি থেকে লম্বা এক আলোর স্তম্ভ পড়ে। দোকানের সাইনে লাল বৃত্ত। রিকশার চাকা তীক্ষ্ণ কোণে ঘোরে। প্রতিটা মানুষ নতুন আকৃতি, নতুন গঠন। ফুটপাথের পৃষ্ঠ অসমান। ছোট এক ধার জুতা কাটে। এক ছেলে কাগজের প্লেন ভাঁজ করে। ভাঁজ পরিপাটি।',
    tip: "আয়নায় ৩টা শব্দে নিজের চেহারা বল।",
  },

  "architecture-building": {
    themeId: "architecture-building",
    title: "জাতীয় স্মৃতিসৌধ",
    titleEn: "The National Monument",
    en: 'The class visits a national monument. "Look at this architecture," the teacher says. "Its construction took ten years." Workers construct with patience. A tall statue stands at the entrance. A stone sculpture rests beside it. A slim tower rises behind. A small palace sits nearby. A long pipe carries water underground. A hidden wire lights each corner. The monument honours the war heroes. Its design is quiet and strong. A famous designer drew it. Every structure has good balance. The main material is red brick. Rough concrete floors are cold. Old brick walls are warm. A slow painter touches up the entrance. An artistic pattern climbs the door. "An architect is a poet with stone."',
    bn: 'ক্লাস জাতীয় স্মৃতিসৌধ দেখতে যায়। "এই স্থাপত্য দেখো," শিক্ষক বলেন। "নির্মাণে দশ বছর লেগেছে।" শ্রমিকরা ধৈর্য নিয়ে গড়ে। প্রবেশপথে লম্বা এক মূর্তি। পাশে পাথরের ভাস্কর্য। পিছনে সরু এক টাওয়ার। কাছে ছোট এক প্রাসাদ। লম্বা এক পাইপ মাটির নিচে পানি বহন করে। লুকানো তার প্রতিটা কোণা আলোকিত করে। স্মৃতিসৌধ যুদ্ধের বীরদের সম্মান জানায়। এর নকশা শান্ত ও শক্তিশালী। বিখ্যাত এক ডিজাইনার এঁকেছেন। প্রতিটা কাঠামোয় ভালো ভারসাম্য। প্রধান উপকরণ লাল ইট। রুক্ষ কংক্রিটের মেঝে ঠান্ডা। পুরোনো ইটের দেয়াল উষ্ণ। ধীর এক চিত্রশিল্পী প্রবেশপথ ছোঁয়ান। প্রবেশদ্বারে শৈল্পিক নকশা। "স্থপতি পাথর দিয়ে কবি।"',
    tip: 'নিজের এলাকার ১টা "monument/tower" ইংরেজিতে বলো।',
  },

  "arms-military": {
    themeId: "arms-military",
    title: "ইতিহাসের ক্লাস",
    titleEn: "History Class",
    en: 'The history teacher tells about old wars. "Every armed man carries a burden." "Modern arms are heavier than old arms." A single bomb can flatten a street. One small bullet can end a life. A brave captain leads from the front. He does not lift a gun without cause. An iron tank rolls slowly. Every weapon has a purpose. "To shoot is not to win." "Shooting is the last step." One good shot is enough. The clock will strike noon. The commander is calm. Fresh troops are ready. Every soldier stands tall. History casts long shadows on the ground. The general gives one clear command. He does not confront without thought. Bitter fighting brings only killing. "Peace is the harder win."',
    bn: 'ইতিহাস শিক্ষক পুরোনো যুদ্ধের কথা বলেন। "প্রতিটা সশস্ত্র মানুষ ভার বহন করে।" "আধুনিক অস্ত্র পুরোনো অস্ত্রের চেয়ে ভারী।" এক বোমা এক রাস্তা মাটির সাথে মিশিয়ে দিতে পারে। ছোট এক বুলেট জীবন কেড়ে নিতে পারে। সাহসী ক্যাপ্টেন সামনে থেকে নেতৃত্ব দেন। বিনা কারণে বন্দুক তোলেন না। লোহার ট্যাঙ্ক ধীরে চলে। প্রতিটা অস্ত্রের উদ্দেশ্য আছে। "গুলি করা মানে জেতা না।" "গুলি চালানো শেষ ধাপ।" এক ভালো গুলি যথেষ্ট। ঘড়ি বারোটা বাজবে। কমান্ডার শান্ত। নতুন সৈন্য প্রস্তুত। প্রতিটা সৈনিক সোজা দাঁড়ায়। ইতিহাস মাটিতে লম্বা ছায়া ফেলে। জেনারেল স্পষ্ট এক আদেশ দেন। ভাবনা ছাড়া মুখোমুখি হন না। তিক্ত লড়াই শুধু হত্যা আনে। "শান্তি বেশি কঠিন জয়।"',
    tip: '"peace" আর "war" — ২ শব্দ আজ ১টা বাক্যে বলো।',
  },

  "atmosphere-mood": {
    themeId: "atmosphere-mood",
    title: "পরীক্ষার আগের ঘর",
    titleEn: "The Room Before the Exam",
    en: 'Rafi describes the room before an exam. "The atmosphere is heavy." The setting is quiet. Every voice has a soft tone. The clock on the wall attracts every eye — its attraction is loud in silence. A green cloth covers the front table. The teacher\'s desk is covered too. Tall bookshelves surround the room. The surrounding air smells of new paper. The class is silent. The silence is not pleasant, it is not unpleasant — it just is. His chair gives some comfort. His seat is comfortable, but his mind is uncomfortable. He tries a relaxing breath. His excitement is small. His nervous heart beats fast. The tension will drop after the first question.',
    bn: 'রাফি পরীক্ষার আগের ঘর বর্ণনা করে। "পরিবেশ ভারী।" স্থাপনা নীরব। প্রতিটা কণ্ঠে নরম সুর। দেয়ালের ঘড়ি প্রতিটা চোখ টানে — নীরবতায় সেই আকর্ষণ জোরালো। সবুজ কাপড় সামনের টেবিল ঢাকে। শিক্ষকের ডেস্কও ঢাকা। উঁচু বইয়ের তাক ঘর ঘিরে রাখে। চারপাশে নতুন কাগজের গন্ধ। ক্লাস নীরব। নীরবতা মনোরম না, অপ্রীতিকরও না — শুধু আছে। চেয়ার কিছু আরাম দেয়। আসন আরামদায়ক, কিন্তু মন অস্বস্তিতে। শান্ত এক নিঃশ্বাস নেয়। উত্তেজনা ছোট। স্নায়ু কাঁপে, হৃদয় দ্রুত। প্রথম প্রশ্নের পর টান কমবে।',
    tip: 'চোখ বন্ধ কর, ঘরের "atmosphere" ৩ শব্দে বলো।',
  },

  "disease-health2": {
    themeId: "disease-health2",
    title: "জীবাণুর পাঠ",
    titleEn: "Lesson on Germs",
    en: 'The class studies germs and vitamins. "Tiny bacteria can be good or bad," the teacher says. "Serious cancer is different — it needs long care." Every symptom tells a story. Some patients need therapy for months. A daily vitamin keeps the body ready. A small infection can spread. Each germ is invisible. A short fever is normal. A dry cough must not be ignored. A common cold is not the flu. The doctor gives medicine and a fixed dose. The prescription is short. A weak patient may be hospitalized. Slow recovery is fine. Physical rest matters. Mental peace matters more. Deep breathing helps. A slow pulse means a calm heart.',
    bn: 'ক্লাস জীবাণু ও ভিটামিন পড়ে। "ছোট ব্যাকটেরিয়া ভালো বা খারাপ হতে পারে," শিক্ষক বলেন। "গুরুতর ক্যানসার আলাদা — এটার লম্বা যত্ন লাগে।" প্রতিটা লক্ষণ একটা গল্প বলে। কিছু রোগীর মাসব্যাপী থেরাপি লাগে। দৈনিক ভিটামিন শরীর প্রস্তুত রাখে। ছোট সংক্রমণ ছড়াতে পারে। প্রতিটা জীবাণু অদৃশ্য। ছোট জ্বর স্বাভাবিক। শুকনো কাশি উপেক্ষা করা যাবে না। সাধারণ সর্দি ফ্লু না। ডাক্তার ওষুধ ও নির্দিষ্ট ডোজ দেন। প্রেসক্রিপশন ছোট। দুর্বল রোগীকে হাসপাতালে ভর্তি করা যেতে পারে। ধীর সুস্থতা ঠিক আছে। শারীরিক বিশ্রাম গুরুত্বপূর্ণ। মানসিক শান্তি আরও বেশি। গভীর শ্বাস সাহায্য করে। ধীর পালস মানে শান্ত হৃদয়।',
    tip: "রোজ ২ মিনিট গভীর শ্বাস নাও।",
  },

  "balance-measure": {
    themeId: "balance-measure",
    title: "চালের মাপ",
    titleEn: "Measuring Rice",
    en: 'Amma measures rice on an old scale. She keeps a fine balance between the two sides. She will weigh two kilograms. The weight is exact. She likes to estimate before weighing. "Every home needs a standard cup." One unit fits her small tin. She checks the volume of the jar. The jar\'s depth is short. Its length is small. The width fits her hand. She measures the shelf height. The distance from stove to sink is one step. The kitchen area is tiny. The rice-to-water ratio is one to two. The gap between two shelves is narrow. This lid does not fit. The lid on the pot is fixed. Two bowls hold equal rice. She shares equally. The wooden table is stable.',
    bn: 'আম্মা পুরোনো দাঁড়িপাল্লায় চাল মাপেন। দুই পাশে সূক্ষ্ম ভারসাম্য রাখেন। দুই কেজি ওজন দেবেন। ওজন নির্ভুল। মাপার আগে অনুমান করতে পছন্দ করেন। "প্রতিটা ঘরে একটা মানক কাপ চাই।" এক একক তার ছোট টিনে ঠিকঠাক বসে। জারের আয়তন দেখেন। জারের গভীরতা কম। দৈর্ঘ্য ছোট। প্রস্থ হাতের মাপে। তাকের উচ্চতা মাপেন। চুলা থেকে সিঙ্কের দূরত্ব এক ধাপ। রান্নাঘরের জায়গা ছোট। চাল-পানির অনুপাত এক : দুই। দুই তাকের ফাঁক সরু। এই ঢাকনা বসছে না। পাত্রের ঢাকনা স্থির। দুই বাটিতে সমান চাল। সমানভাবে ভাগ করেন। কাঠের টেবিল স্থিতিশীল।',
    tip: 'আজ ১টা জিনিসের "length, width, height" মাপো।',
  },

  "ban-rules": {
    themeId: "ban-rules",
    title: "বাজারের নতুন নিয়ম",
    titleEn: "New Market Rules",
    en: 'The city adds new rules for the market. "We ban plastic bags," the mayor says. Each new regulation is on a board. Sellers need a permit for the stall. Without permission, no seller may stand. An official checks every corner. His authority is real. Rules are strict this month. Officers enforce them daily. A late shop pays a small fine. A cleaning fee is also required. Big signs forbid loud music. The market is allowed to open at seven. Every legal seller shows a card. An illegal cart is removed. Buyers must obey the line. The mayor tries to control noise. "We limit the crowd near the gate." Space near the gate is limited.',
    bn: 'শহর বাজারে নতুন নিয়ম যোগ করে। "আমরা প্লাস্টিক ব্যাগ নিষিদ্ধ করি," মেয়র বলেন। প্রতিটা নতুন নিয়ম বোর্ডে। বিক্রেতারা স্টলের জন্য অনুমতিপত্র লাগে। অনুমতি ছাড়া কোনো বিক্রেতা দাঁড়াতে পারবেন না। একজন কর্মকর্তা প্রতিটা কোণা দেখেন। তার কর্তৃত্ব আসল। এই মাসে নিয়ম কড়া। কর্মীরা প্রতিদিন প্রয়োগ করেন। দেরিতে দোকান খোললে ছোট জরিমানা। পরিষ্কার ফিও প্রয়োজন। বড় সাইন উচ্চস্বরের সংগীত নিষেধ করে। বাজার সাতটায় খুলতে অনুমোদিত। প্রতিটা বৈধ বিক্রেতা কার্ড দেখান। অবৈধ ভ্যান সরানো হয়। ক্রেতাদের লাইন মানতে হবে। মেয়র শব্দ নিয়ন্ত্রণ করার চেষ্টা করেন। "গেটের কাছে ভিড় সীমিত করি।" গেটের কাছে জায়গা সীমিত।',
    tip: 'আজ ৩টা "rule" ভাবো, ইংরেজিতে বলো।',
  },

  "access-obtain": {
    themeId: "access-obtain",
    title: "লাইব্রেরির কার্ড",
    titleEn: "The Library Card",
    en: 'Rafi gets access to a library card. "To obtain this," the clerk says, "you sign here." He will acquire many books slowly. He may not gain everything at once. Photos capture his face for the ID. He will retain the card for two years. It is secure inside his bag. Old books are hard to preserve; the library staff maintain them carefully. Each shelf can contain forty books. Every plastic container has a lid. He does not possess a laptop. His only possession here is a notebook. He will hold his reader\'s spot near the window. He will own his study time. He must keep quiet. Books reach every level. A rare book stays in the reserve section. This card is a big resource. A photo ID is required.',
    bn: 'রাফি লাইব্রেরি কার্ডে প্রবেশাধিকার পায়। "এটা পেতে," কর্মী বলেন, "এখানে সই কর।" ধীরে ধীরে অনেক বই অর্জন করবে। একসাথে সব পাবে না। ছবি তার মুখ ধরে ID-এর জন্য। দুই বছর কার্ড রাখবে। ব্যাগে এটা নিরাপদ। পুরোনো বই সংরক্ষণ করা কঠিন; লাইব্রেরি কর্মীরা যত্নে রক্ষণাবেক্ষণ করেন। প্রতিটা তাক চল্লিশটা বই ধারণ করতে পারে। প্রতিটা প্লাস্টিকের কনটেইনারে ঢাকনা। ল্যাপটপ তার কাছে নেই। এখানে একমাত্র সম্পত্তি — নোটবুক। জানালার পাশে তার পড়ার জায়গা ধরে রাখবে। পড়ার সময় নিজের করে নেবে। চুপ থাকতে হবে। বই প্রতিটা স্তরে পৌঁছায়। দুর্লভ বই সংরক্ষিত অংশে থাকে। এই কার্ড বড় সম্পদ। ছবি ID প্রয়োজন।',
    tip: "লাইব্রেরি কার্ডের জন্য নিজে গিয়ে সই কর।",
  },

  "accompany-group": {
    themeId: "accompany-group",
    title: "মেলায় হাঁটা",
    titleEn: "Walking to the Fair",
    en: 'The friends walk together to the mela. Rafi will accompany Nadia. She is not alone. Faces gather among the trees. Karim gathers a bunch of flowers for his mother. A small panel of teachers watches from the stage. Every student is a participant. Music will engage the children. Nadia will attach a name tag to her shirt. A soft bond grows between the two teams. A short chain of children holds hands. Their matching shirts look sweet. Ten friends are included, including the youngest boy. They walk together. That noisy gang from class ten laughs loudly. "Come on, fellow," one boy calls to another. "Hey guy, join us!" The last couple to arrive brings sweets.',
    bn: 'বন্ধুরা মেলায় একসাথে হাঁটে। রাফি নাদিয়াকে সঙ্গ দেবে। সে একা না। গাছের মাঝে মুখেরা জড়ো হয়। কারিম মাকে দেওয়ার জন্য একগুচ্ছ ফুল সংগ্রহ করে। মঞ্চ থেকে ছোট এক শিক্ষক প্যানেল দেখেন। প্রতিটা ছাত্র অংশগ্রহণকারী। সংগীত শিশুদের ব্যস্ত রাখবে। নাদিয়া শার্টে নেমট্যাগ লাগাবে। দুই দলের মধ্যে কোমল বন্ধন গড়ে। শিশুদের ছোট এক শৃঙ্খল হাত ধরে। মেলানো শার্ট মিষ্টি লাগে। দশ বন্ধু অন্তর্ভুক্ত, ছোট ছেলেটাসহ। একসাথে হাঁটে। ক্লাস দশের ওই হৈচৈ দল জোরে হাসে। "এই ভাই," এক ছেলে ডাকে। "এই গাই, চল!" শেষ যুগল আসে মিষ্টি নিয়ে।',
    tip: '১ বন্ধুকে আজ ইংরেজিতে বলো: "May I accompany you?"',
  },

  "accuse-guilt": {
    themeId: "accuse-guilt",
    title: "স্কুলের ঘটনা",
    titleEn: "The School Incident",
    en: 'A small incident at school needs a fair check. "Do not accuse without proof," the teacher says. "Do not blame the wrong boy." A brave student will acknowledge his mistake. Every fault has a lesson. A small offence should not become a big case. His words did not offend anyone. He never used an offensive tone. He cannot justify the mess. He is ashamed of the noise. A dishonest excuse is worse than the mistake. "An evil thought hurts the thinker first." "Admit it now, and it is over." He will confess. He denied it once, but the truth won. He is guilty only of a small joke. The other boy is fully innocent. Nobody must punish him harshly. His excuse is soft. He shows real regret. A quiet apology closes the day.',
    bn: 'স্কুলে ছোট এক ঘটনা ন্যায্য পরীক্ষা চায়। "প্রমাণ ছাড়া অভিযুক্ত কর না," শিক্ষক বলেন। "ভুল ছেলেকে দোষ দিও না।" সাহসী ছাত্র নিজের ভুল স্বীকার করবে। প্রতিটা দোষে শিক্ষা আছে। ছোট অপরাধ বড় মামলায় রূপ নেওয়া উচিত না। তার কথা কাউকে আঘাত করেনি। কখনো আপত্তিকর সুর ব্যবহার করেনি। এই এলোমেলোকে সে যুক্তি দিতে পারে না। শব্দের জন্য লজ্জিত। অসৎ অজুহাত ভুলের চেয়েও খারাপ। "দুষ্ট চিন্তা প্রথমে ভাবুককে আঘাত করে।" "এখনই স্বীকার কর, তাহলে শেষ।" স্বীকার করবে। একবার অস্বীকার করেছিল, কিন্তু সত্য জিতেছে। সে শুধু ছোট এক ঠাট্টার দোষী। অন্য ছেলে সম্পূর্ণ নির্দোষ। কেউ কঠোরভাবে শাস্তি দেবে না। তার অজুহাত নরম। প্রকৃত অনুশোচনা দেখায়। শান্ত ক্ষমাপ্রার্থনা দিন শেষ করে।',
    tip: 'ভুল হলে ইংরেজিতে বলো: "I acknowledge my mistake."',
  },

  "adopt-select": {
    themeId: "adopt-select",
    title: "নতুন পোষা প্রাণী",
    titleEn: "A New Pet",
    en: 'A family chooses a pet from a shelter. They will adopt one kitten. "You must select carefully," Abba says. The selection takes an hour. Each cage is one option. A tiny brown kitten is a soft alternative. Nadia does prefer the black one. Rafi will pick the small grey. "Choose an appropriate cage size at home." "A quiet corner is suitable." "The window seat is ideal." Their matching baskets are cute. "Sort the food into two jars." Kittens fall in the "small pet" category. A proper diet keeps them healthy. Feed them properly. A calm cat is preferable to a loud one. The chosen kitten mews softly. This is the final choice. Abba will confirm the papers. The vet will approve the adoption.',
    bn: 'পরিবার আশ্রয় থেকে পোষা প্রাণী বেছে নেয়। একটা বিড়ালছানা দত্তক নেবে। "সাবধানে নির্বাচন করো," আব্বা বলেন। বাছাইয়ে এক ঘণ্টা লাগে। প্রতিটা খাঁচা এক অপশন। ছোট বাদামি বিড়ালছানা কোমল বিকল্প। নাদিয়া কালো টা বেশি পছন্দ করে। রাফি ছোট ধূসরটা বেছে নেবে। "বাসায় উপযুক্ত মাপের খাঁচা বেছে নাও।" "শান্ত কোণা মানানসই।" "জানালার পাশ আদর্শ।" মিলিয়ে দেওয়া ঝুড়ি মিষ্টি। "খাবার দুই জারে ভাগ কর।" বিড়ালছানা "ছোট পোষা" বিভাগে পড়ে। সঠিক খাদ্য তাদের সুস্থ রাখে। ঠিকমতো খাওয়াও। শান্ত বিড়াল জোরালোর চেয়ে বেশি পছন্দনীয়। নির্বাচিত ছানা কোমলভাবে ডাকে। এটাই চূড়ান্ত পছন্দ। আব্বা কাগজপত্র নিশ্চিত করবেন। ভেট দত্তক অনুমোদন করবেন।',
    tip: '"prefer" বলো: "I prefer tea over coffee."',
  },

  "advance-benefit": {
    themeId: "advance-benefit",
    title: "নাদিয়ার ছোট দোকান",
    titleEn: "Nadia's Small Shop",
    en: 'Nadia\'s small shop grows step by step. She takes each week as one advance. "A friendly smile is an advantage." "Good tea has a health benefit." She will enhance the menu next month. New ideas will emerge from her notebook. She may gain twenty new customers. She wants to succeed. She works quietly and successfully. Every small improvement counts. Weekly progress is soft. She will expand her table by two seats. Sales will increase slowly. Free biscuits give a small boost. She hopes to achieve one goal per month. Each achievement is real. She will earn a fair income. Her profit is small but honest. Each visitor is a fresh opportunity. Her potential is big.',
    bn: 'নাদিয়ার ছোট দোকান ধাপে ধাপে বাড়ে। প্রতিটা সপ্তাহকে এক এগিয়ে যাওয়া বলে। "বন্ধুত্বপূর্ণ হাসি সুবিধা।" "ভালো চায়ের স্বাস্থ্য উপকার আছে।" পরের মাসে মেনু উন্নত করবে। নোটবুক থেকে নতুন ধারণা বেরোবে। বিশ নতুন ক্রেতা পেতে পারে। সে সফল হতে চায়। শান্তভাবে ও সফলভাবে কাজ করে। প্রতিটা ছোট উন্নতি মূল্যবান। সাপ্তাহিক অগ্রগতি কোমল। টেবিল দুই আসনে বাড়াবে। বিক্রি ধীরে বাড়বে। বিনামূল্য বিস্কুট ছোট এক ধাক্কা দেয়। মাসে এক লক্ষ্য অর্জন করার আশা। প্রতিটা অর্জন আসল। ন্যায্য আয় অর্জন করবে। মুনাফা ছোট কিন্তু সৎ। প্রতিটা অতিথি নতুন সুযোগ। তার সম্ভাবনা বড়।',
    tip: 'প্রতিদিনের ১টা "small advance" লিখো।',
  },

  "afford-expense": {
    themeId: "afford-expense",
    title: "মাসের বাজেট",
    titleEn: "Monthly Budget",
    en: 'Amma plans the monthly budget. "We can afford small joys, not big ones." A big expense hurts a small pocket. Weekly spending is her clock. The tea rate went up. Time is worth more than shopping. A quiet evening is valuable. Abba will earn a fair salary. They do not owe anyone. She saves every penny. A small pound coin sits on the shelf as a lucky charm. The budget is tight. Cheap does not mean bad. Costly is not always better. Amma will save each week. Their savings grow slowly. The total of the shopping list is small. The electricity bill came today. They will pay it early. She keeps every receipt. The yearly tax is due next month.',
    bn: 'আম্মা মাসিক বাজেট করেন। "ছোট আনন্দ পোষাতে পারি, বড় না।" বড় খরচ ছোট পকেটকে আঘাত করে। সাপ্তাহিক খরচ তার ঘড়ি। চায়ের দাম বেড়েছে। কেনাকাটার চেয়ে সময় বেশি মূল্যবান। শান্ত সন্ধ্যা মূল্যবান। আব্বা ন্যায্য বেতন উপার্জন করবেন। কারো কাছে ধার নেই। প্রতিটা পয়সা জমান। ছোট এক পাউন্ড কয়েন তাকে সৌভাগ্য হিসেবে রাখা। বাজেট টাইট। সস্তা মানে খারাপ না। দামি সবসময় ভালো না। প্রতি সপ্তাহে সঞ্চয় করবেন। সঞ্চয় ধীরে বাড়ে। কেনাকাটার তালিকার মোট ছোট। আজ বিদ্যুৎ বিল এসেছে। আগেই পরিশোধ করবেন। প্রতিটা রশিদ রাখেন। পরের মাসে বার্ষিক কর দিতে হবে।',
    tip: 'নিজের ১ সপ্তাহের "expense" ইংরেজিতে লিখো।',
  },

  "age-royal": {
    themeId: "age-royal",
    title: "রাজপুত্রের গল্প",
    titleEn: "The Prince's Tale",
    en: 'Amma tells an old story. "Once, in an aged kingdom, a kind youth ruled." His grandfather was a kind man on a small pension. The grand palace looked simple from outside. The young prince and his sister the princess were quiet. Their lord father was fair. His royal seat was small wood. A gentle servant carried the tray. In older days, some men lived as a slave; the new king freed them all. The prince was master only of his temper. His ancestor built the first library. This tale carries a soft light. Small fortune came to honest hands. Their fancy costume was for the yearly parade. Their palace felt like a home. A noble smile is stronger than a sword. Their small kingdom grew. The crown was light on his head.',
    bn: 'আম্মা পুরোনো গল্প বলেন। "একদা এক বৃদ্ধ রাজ্যে এক দয়ালু কিশোর রাজত্ব করত।" তার দাদু ছোট পেনশনের এক দয়ালু মানুষ ছিলেন। বড় প্রাসাদ বাইরে সাধারণ দেখাত। তরুণ রাজপুত্র ও তার বোন রাজকন্যা শান্ত ছিলেন। তাদের প্রভু বাবা ন্যায়পরায়ণ। রাজকীয় আসন ছোট কাঠের। ভদ্র এক সেবক ট্রে বহন করতেন। পুরোনো দিনে কিছু মানুষ ক্রীতদাস হিসেবে বাঁচতেন; নতুন রাজা সবাইকে মুক্ত করেন। রাজপুত্র শুধু নিজের রাগের মালিক ছিলেন। তার পূর্বপুরুষ প্রথম গ্রন্থাগার গড়েছিলেন। এই কাহিনি কোমল আলো বহন করে। ছোট ভাগ্য সৎ হাতে আসে। রাজকীয় পোশাক বার্ষিক শোভাযাত্রার জন্য। প্রাসাদ ঘরের মতো লাগত। মহৎ হাসি তলোয়ারের চেয়ে শক্তিশালী। তাদের ছোট রাজ্য বাড়ে। মাথায় মুকুট হালকা।',
    tip: 'ছোটবেলার প্রিয় ১টা "tale" ইংরেজিতে ২ বাক্যে বলো।',
  },

  "body-more": {
    themeId: "body-more",
    title: "ডাক্তারের পরীক্ষা",
    titleEn: "Doctor's Check-up",
    en: 'The doctor checks Rafi from head to toe. "Your breast breathes well." "Open your mouth — the throat looks clean." He wiggles his big toe. His heel is a little dry. "A calm nerve is a strong nerve." His thumb nail is cut short. His lower lip is dry. A soft chin, a smooth forehead, a pink cheek — all fine. He shows his tongue. "Your ankle is strong." "Your wrist is flexible." "Bend the elbow slowly." "Take a breath — the chest rises." "Now open the jaw." "Stand straight; keep the spine tall." "A daily walk builds every muscle." His skin is healthy. Every joint moves smoothly. "You are fit," the doctor smiles.',
    bn: 'ডাক্তার রাফিকে মাথা থেকে পা পর্যন্ত পরীক্ষা করেন। "তোমার বুক ভালো শ্বাস নেয়।" "মুখ খোলো — গলা পরিষ্কার লাগছে।" বড় পায়ের আঙুল নাড়ে। গোড়ালি একটু শুকনো। "শান্ত স্নায়ু শক্তিশালী স্নায়ু।" বুড়ো আঙুলের নখ ছোট করে কাটা। নিচের ঠোঁট শুকনো। কোমল থুতনি, মসৃণ কপাল, গোলাপি গাল — সব ঠিক। জিহ্বা দেখায়। "গোড়ালি শক্ত।" "কব্জি নমনীয়।" "আস্তে কনুই ভাঁজ কর।" "শ্বাস নাও — বুক উঠবে।" "এখন চোয়াল খোলো।" "সোজা দাঁড়াও; মেরুদণ্ড লম্বা রাখো।" "রোজ হাঁটা প্রতিটা পেশি গড়ে।" তার ত্বক সুস্থ। প্রতিটা গাঁট মসৃণভাবে চলে। "তুমি ফিট," ডাক্তার হাসেন।',
    tip: "নিজের ৫টা অংশ ইংরেজিতে ছুঁয়ে ছুঁয়ে বলো।",
  },

  "food-more": {
    themeId: "food-more",
    title: "শনিবারের রান্না",
    titleEn: "Saturday Cooking",
    en: 'Amma cooks a big weekend meal. She soaks a bowl of bean. She washes a piece of beef. She sifts white flour. A jar of grain sits on the shelf. A small nut mix is Rafi\'s favourite. "Mineral water is better than sweet drink." She adds a spoon of chilli powder. She makes fresh jam from mango. "Buy fresh, not old." She cannot serve raw meat. Mixed vegetables cook softly. Butter will melt in a minute. She will freeze the extra soup. Frozen fish must be thawed. A blue flame heats the pan. Steady heating gives soft rice. She wipes the dust from the shelf. She adds a pinch of yeast to the dough. A little salt, a little sugar — the taste balances.',
    bn: 'আম্মা শনিবারে বড় খাবার রান্না করেন। এক বাটি সিম ভিজান। এক টুকরো গরুর মাংস ধোন। সাদা ময়দা চালেন। তাকে এক জার শস্য। ছোট বাদামের মিশ্রণ রাফির প্রিয়। "মিনারেল পানি মিষ্টি পানীয়ের চেয়ে ভালো।" এক চামচ মরিচের গুঁড়া দেন। আমের তাজা জ্যাম বানান। "তাজা কেনো, পুরোনো না।" কাঁচা মাংস পরিবেশন করা যায় না। মিশ্র সবজি নরমভাবে রান্না হয়। মাখন এক মিনিটে গলবে। অতিরিক্ত স্যুপ ফ্রিজে রাখবেন। জমাট মাছ গলাতে হবে। নীল শিখা প্যান গরম করে। ধীর গরম নরম ভাত দেয়। তাক থেকে ধুলো মোছেন। ময়দায় এক চিমটি ঈস্ট দেন। একটু লবণ, একটু চিনি — স্বাদ সমান হয়।',
    tip: "নিজের প্রিয় ১টা রেসিপির ৫ উপকরণ ইংরেজিতে বলো।",
  },

  "nature-more-x": {
    themeId: "nature-more-x",
    title: "গ্রাম-ভ্রমণ",
    titleEn: "Village Trip",
    en: 'The class takes a village trip. "The countryside is fresh in winter." "This county has the oldest river." Their teacher shows Asia on the wall — a huge continent. The green landscape is calm. A small lake sits behind the field. Soft mud sticks to the shoes. A hurricane hit the coast last year. An earthquake shook the town in 1998. "Bangladesh has a tropical climate." Life in rural areas is slow. The northern hills are cool. The southern beach is warm. Eastern skies turn pink at dawn. Western winds are dry. A wide yard runs around every house. A soft fur cat sleeps on the mat. A red feather falls from a bird. A children\'s ghost story is fun at night. In the old days, men would hunt in the forest. Hunting is now controlled.',
    bn: 'ক্লাস গ্রাম-ভ্রমণ করে। "শীতে গ্রামাঞ্চল তাজা।" "এই কাউন্টিতে সবচেয়ে পুরোনো নদী।" শিক্ষক দেয়ালে এশিয়া দেখান — বিশাল মহাদেশ। সবুজ প্রাকৃতিক দৃশ্য শান্ত। মাঠের পেছনে ছোট এক হ্রদ। নরম কাদা জুতায় লাগে। গত বছর উপকূলে ঘূর্ণিঝড় আঘাত করেছিল। ১৯৯৮ সালে ভূমিকম্প শহর নাড়িয়েছিল। "বাংলাদেশে গ্রীষ্মমণ্ডলীয় জলবায়ু।" গ্রামের জীবন ধীর। উত্তর দিকের পাহাড় শীতল। দক্ষিণের সমুদ্রসৈকত উষ্ণ। পূর্বের আকাশ ভোরে গোলাপি হয়। পশ্চিমা হাওয়া শুকনো। প্রতিটা বাড়ির চারপাশে প্রশস্ত উঠোন। নরম পশমের বিড়াল মাদুরে ঘুমায়। এক পাখি থেকে লাল পালক পড়ে। রাতে বাচ্চাদের ভূতের গল্প মজার। পুরোনো দিনে মানুষ বনে শিকার করত। এখন শিকার নিয়ন্ত্রিত।',
    tip: 'আজ ১টা "nature" ছবি দেখে ৫ শব্দ ইংরেজিতে বলো।',
  },

  "emotion-strong": {
    themeId: "emotion-strong",
    title: "নাদিয়ার একটি দিন",
    titleEn: "Nadia's Day",
    en: 'Nadia writes about one day. "My anger was small at breakfast." A tiny delight — Amma made her favourite rice. She was delighted. Then the marks came. She was disappointed. The score was disappointing. She was embarrassed in class. An embarrassing moment felt long. But after lunch, fresh enthusiasm rose. She joined the dance club with an enthusiastic smile. Her fear of the stage was old. Loud music tried to frighten her, but she was not frightened. Nothing was truly frightening. A slow happiness came at evening. The laughter of friends helped. She felt satisfied. Small progress will satisfy her tonight. She was not ashamed of the low marks. She was not upset for long. A sudden peace came before sleep.',
    bn: 'নাদিয়া একটা দিনের কথা লেখে। "নাশতায় আমার রাগ ছোট ছিল।" ছোট এক আনন্দ — আম্মা প্রিয় ভাত রেঁধেছেন। খুশি ছিল। তারপর নম্বর এলো। হতাশ হলো। স্কোর হতাশাজনক। ক্লাসে বিব্রত হলো। বিব্রতকর মুহূর্ত দীর্ঘ লাগল। কিন্তু দুপুরের পর নতুন উৎসাহ জাগল। নাচের ক্লাবে উৎসাহী হাসি নিয়ে যোগ দিল। মঞ্চের ভয় পুরোনো। জোরে সংগীত ভয় দেখাতে চাইল, কিন্তু সে ভীত হলো না। কিছুই সত্যিই ভীতিকর ছিল না। সন্ধ্যায় ধীর সুখ এলো। বন্ধুদের হাসি সাহায্য করল। সন্তুষ্ট বোধ করল। ছোট অগ্রগতি আজ রাতে তাকে সন্তুষ্ট করবে। কম নম্বরে লজ্জিত হলো না। বেশিক্ষণ বিচলিত হলো না। ঘুমের আগে হঠাৎ শান্তি এলো।',
    tip: 'রাতে ঘুমের আগে ৩টা "feeling" নাম দাও ইংরেজিতে।',
  },

  "politics-elect": {
    themeId: "politics-elect",
    title: "স্কুলের নির্বাচন",
    titleEn: "The School Election",
    en: 'The school holds a student council election. "Each class will elect one leader." Two names appear as candidate. This is not a heavy political matter. "A young politician learns manners here." "Politics starts with respect." The student council will plan events. "A civil tone wins hearts." "One school is a small nation." "Our state has many schools." Boys and girls stand united. Elected members will govern the events team. Every policy is written on paper. Each student will vote. Every voter has one hand raised. A short campaign is fair. No candidate makes a big promise. A good leader listens first. Each class has one representative. The winning party is joyful. A short debate closes the day.',
    bn: 'স্কুল ছাত্র কাউন্সিলের নির্বাচন করে। "প্রতিটা ক্লাস একজন নেতা নির্বাচিত করবে।" দুইটা নাম প্রার্থী হিসেবে আসে। এটা ভারী রাজনৈতিক বিষয় না। "তরুণ রাজনীতিবিদ এখানে শিষ্টাচার শেখে।" "রাজনীতি সম্মান দিয়ে শুরু হয়।" ছাত্র কাউন্সিল অনুষ্ঠান পরিকল্পনা করবে। "নাগরিক সুর হৃদয় জেতে।" "এক স্কুল ছোট এক জাতি।" "আমাদের রাজ্যে অনেক স্কুল।" ছেলে-মেয়েরা একজোট। নির্বাচিতরা অনুষ্ঠান দল পরিচালনা করবে। প্রতিটা নীতি কাগজে লেখা। প্রতিটা ছাত্র ভোট দেবে। প্রতিটা ভোটারের এক হাত উঁচু। ছোট প্রচারণা ন্যায্য। কোনো প্রার্থী বড় প্রতিশ্রুতি দেয় না। ভালো নেতা প্রথমে শোনেন। প্রতিটা ক্লাসে একজন প্রতিনিধি। বিজয়ী দল আনন্দিত। ছোট বিতর্কে দিন শেষ।',
    tip: '"vote" শব্দ ভাব: "Your vote is your voice."',
  },

  "movement-action": {
    themeId: "movement-action",
    title: "বন্দরের সকাল",
    titleEn: "Morning at the Port",
    en: 'A busy morning at the port. A truck will block the gate for a minute. A soft wind will blow from the river. A dog will bite the rope, not the man. Old boxes will bury a small path. Workers capture the mood in photos. A tired shelter did collapse last week. They will combine two teams. This combination is strong. A ferry will cross the river. Two men drag a heavy sack. They fasten it with a rope. Water will flow under the bridge. Small boats float above. A boy will grab a coin from the deck. Wet clothes hang on a wire. Do not knock the crate. "Lay the box carefully." "Do not lean on the door." Ice will melt in the sun. Workers mount the new sign.',
    bn: 'বন্দরে ব্যস্ত সকাল। এক মিনিটের জন্য ট্রাক গেট বন্ধ করবে। নদী থেকে কোমল হাওয়া বইবে। কুকুর দড়ি কামড়াবে, মানুষকে না। পুরোনো বাক্স ছোট পথ ঢেকে দেবে। শ্রমিকরা ছবিতে পরিবেশ ধরে রাখে। ক্লান্ত ছাউনি গত সপ্তাহে ধসে পড়েছিল। দুই দলকে মেলাবে। এই সংমিশ্রণ শক্তিশালী। ফেরি নদী পার হবে। দুই মানুষ ভারী বস্তা টেনে নিয়ে যায়। দড়িতে বাঁধেন। সেতুর নিচে পানি বইবে। ছোট নৌকা ভেসে থাকে। এক ছেলে ডেক থেকে কয়েন কেড়ে নেবে। তারের ওপর ভেজা কাপড় ঝুলছে। ক্রেটে ধাক্কা দিও না। "বাক্সটা সাবধানে রাখো।" "দরজায় ঝুঁকে থেকো না।" রোদে বরফ গলবে। শ্রমিকরা নতুন সাইন লাগান।',
    tip: 'ঘরে ৩টা "action" কর: block, grab, hang।',
  },

  "movement-more": {
    themeId: "movement-more",
    title: "উঠোনের খেলা",
    titleEn: "Yard Play",
    en: "The children play in the yard. Karim will pour water into a bucket. He will press the pump handle. Nadia will pretend to be a doctor. She wants to rid the doll of a fever. A ball will roll under the bench. Rafi will rub his hands to warm them. He will rush after his cap. A leaf will sink in the water. Amma will slice a mango into six pieces. Do not slip on the wet floor. Two boys split one biscuit. A cat sits and stares at a bird. Faisal will sweep the leaves. He will swear to finish before dark. Nadia will tear an old paper. She will wrap a small gift in cloth. The dog will dig near the wall. Amma dusts the small table. Rafi presses the corner of the paper and folds it neat.",
    bn: "শিশুরা উঠোনে খেলে। কারিম বালতিতে পানি ঢালবে। পাম্পের হাতল চাপবে। নাদিয়া ডাক্তার হবার ভান করবে। পুতুলের জ্বর সারাতে চায়। বলটা বেঞ্চের নিচে গড়াবে। রাফি হাত গরম করতে ঘষবে। টুপির পিছনে ছুটবে। এক পাতা পানিতে ডুববে। আম্মা এক আম ছয় টুকরায় কাটবেন। ভেজা মেঝেতে পিছলে যেও না। দুই ছেলে এক বিস্কুট ভাগ করে। বিড়াল বসে পাখির দিকে তাকিয়ে থাকে। ফয়সাল পাতা ঝাড়ু দেবে। অন্ধকারের আগে শেষ করার শপথ নেবে। নাদিয়া পুরোনো কাগজ ছিঁড়বে। কাপড়ে ছোট উপহার মুড়বে। কুকুর দেয়ালের কাছে খোঁড়ে। আম্মা ছোট টেবিলে ঝাড় দেন। রাফি কাগজের কোণা চেপে পরিপাটি ভাঁজ করে।",
    tip: "একটা কাগজ নিয়ে ৩ ক্রিয়া কর: fold, tear, wrap।",
  },

  "media-drama": {
    themeId: "media-drama",
    title: "রাতের প্রোগ্রাম",
    titleEn: "The Night Programme",
    en: 'The family watches a documentary together. "A good documentary teaches quietly." The scene is dramatic near the river. "This is not fiction; it is real." The studio behind is small. Every genre has fans. Tonight\'s episode is short. It is part of a long series. The narrative is calm. Amma prefers a simple tale. Rafi loves a small joke in the middle. Family humour is the best. The narrator is humorous. Warm laughter fills the room. Good shows entertain, not just distract. Every viewer sits with tea. The programme will broadcast weekly. It will air at nine. This channel is new. A neat script helps the actors. The young director is proud.',
    bn: 'পরিবার একসাথে একটা ডকুমেন্টারি দেখে। "ভালো ডকুমেন্টারি শান্তভাবে শেখায়।" নদীর কাছে দৃশ্য নাটকীয়। "এটা কল্পকাহিনি না; এটা সত্য।" পিছনে স্টুডিও ছোট। প্রতিটা ঘরানার ভক্ত আছে। আজ রাতের পর্ব ছোট। এটা লম্বা এক সিরিজের অংশ। বর্ণনা শান্ত। আম্মা সাধারণ কাহিনি পছন্দ করেন। রাফি মাঝে ছোট ঠাট্টা ভালোবাসে। পারিবারিক রসিকতা সেরা। ধারাভাষ্যকার রসাত্মক। উষ্ণ হাসি ঘর ভরে। ভালো অনুষ্ঠান বিনোদন দেয়, শুধু বিভ্রান্ত করে না। প্রতিটা দর্শক চা হাতে বসে। অনুষ্ঠান সাপ্তাহিক প্রচারিত হবে। নয়টায় সম্প্রচার হবে। এই চ্যানেল নতুন। পরিপাটি স্ক্রিপ্ট অভিনেতাদের সাহায্য করে। তরুণ পরিচালক গর্বিত।',
    tip: 'আজকের ১টা "episode" দেখে ৩ শব্দ ইংরেজিতে বলো।',
  },

  "office-communication": {
    themeId: "office-communication",
    title: "ব্যস্ত ফোন",
    titleEn: "Busy Phone",
    en: 'Faisal handles a busy office phone. "We must communicate calmly." Communication is his main tool. He will inform the boss soon. A good listener beats a loud speaker. His speech is soft. His spoken word is honest. He will not whisper secrets. He will not shout at anyone. Never scream on a call. Some clients insist too much. He will note that remark. He will read the request twice. He will respond in five minutes. A short response works best. Sometimes the room is silent. A silly joke breaks the ice. Every logo is a symbol of the brand. He will reply to every email. A short message closes the day.',
    bn: 'ফয়সাল ব্যস্ত অফিসের ফোন সামলায়। "শান্তভাবে যোগাযোগ করতে হবে।" যোগাযোগ তার মূল অস্ত্র। শিগগিরই বসকে জানাবে। ভালো শ্রোতা জোরালো বক্তার চেয়ে ভালো। তার বক্তব্য নরম। মুখের কথা সৎ। গোপন কথা ফিসফিসিয়ে বলবে না। কারো ওপর চিৎকার করবে না। ফোনে চিৎকার কখনো না। কিছু ক্লায়েন্ট বেশি জোর করেন। সেই মন্তব্য নোট করবে। অনুরোধ দুবার পড়বে। পাঁচ মিনিটে সাড়া দেবে। ছোট প্রতিক্রিয়া সেরা। কখনো ঘর নীরব। বোকা ঠাট্টা বরফ ভাঙে। প্রতিটা লোগো ব্র্যান্ডের প্রতীক। প্রতিটা ইমেইলের জবাব দেবে। ছোট বার্তায় দিন শেষ।',
    tip: 'একটা মেসেজ ইংরেজিতে লিখো: "Thanks for your message."',
  },

  "concentration-mind": {
    themeId: "concentration-mind",
    title: "গভীর মনোযোগ",
    titleEn: "Deep Focus",
    en: 'Rafi practises deep focus for one hour. "I will concentrate on one book." His concentration is soft. His focus is clear. He is aware of his breath. His thinking slows. His mind rests. His attention is small and sharp. He feels calm. His head is clear. He is conscious of every page. A small insight appears — patience is a plan. Logical steps help him. He will recall the main points at dinner. He will recognize old words. He will realize a new meaning. He will memorize four lines. He will imagine the story like a film. He will meditate for two minutes. One good idea flowers. Every honest thought counts.',
    bn: 'রাফি এক ঘণ্টা গভীর মনোযোগ অনুশীলন করে। "এক বইয়ে মনোযোগ দেব।" মনোযোগ কোমল। ফোকাস স্পষ্ট। শ্বাস সম্পর্কে সচেতন। ভাবনা ধীর হয়। মন বিশ্রামে। মনোযোগ ছোট ও তীক্ষ্ণ। শান্ত অনুভব করে। মাথা পরিষ্কার। প্রতিটা পাতায় সচেতন। ছোট এক অন্তর্দৃষ্টি আসে — ধৈর্য এক পরিকল্পনা। যৌক্তিক ধাপ সাহায্য করে। রাতের খাবারে মূল বিষয় স্মরণ করবে। পুরোনো শব্দ চিনবে। নতুন অর্থ উপলব্ধি করবে। চার লাইন মুখস্থ করবে। গল্পকে ছবির মতো কল্পনা করবে। দুই মিনিট ধ্যান করবে। এক ভালো ধারণা ফোটে। প্রতিটা সৎ চিন্তা মূল্যবান।',
    tip: "রোজ ৫ মিনিট চোখ বন্ধ করে বসো।",
  },

  "compare-contrast": {
    themeId: "compare-contrast",
    title: "দুই শহরের তুলনা",
    titleEn: "Comparing Two Towns",
    en: 'The teacher shows two towns on a map. "Let us do a small comparison." "Note the contrast between them." "One similarity is the river." "They grow rice similarly." "They eat quite differently." The food is varied. Various shops sit on both roads. This town is unlike that one. Their gates are almost matching. There is a small gap in size. The city is complex. Village life is not complicated. It is simple. Their markets are distinct. Both look alike from the sky. Both areas are equally busy. This town is relatively cleaner. That town is somewhat older. Peace lives among the fields. A short bridge sits between the towns.',
    bn: 'শিক্ষক মানচিত্রে দুই শহর দেখান। "ছোট এক তুলনা করি।" "তাদের পার্থক্য লক্ষ কর।" "একটা মিল নদী।" "তারা ধান একইভাবে চাষ করে।" "খাবার বেশ ভিন্নভাবে খায়।" খাবার বৈচিত্র্যময়। দুই রাস্তায় বিভিন্ন দোকান। এই শহর ওইটার মতো না। তাদের গেট প্রায় মেলে। মাপে ছোট ফাঁক। শহর জটিল। গ্রামের জীবন জটিল না। সরল। বাজার আলাদা। উপর থেকে দুইটাই একরকম দেখায়। দুই এলাকা সমানভাবে ব্যস্ত। এই শহর তুলনামূলক পরিষ্কার। ওই শহর কিছুটা পুরোনো। শান্তি মাঠের মাঝে থাকে। শহর দুইটির মধ্যে ছোট এক সেতু।',
    tip: 'নিজের ২টা দিন তুলনা কর: "today vs. yesterday"।',
  },

  "condition-consistent": {
    themeId: "condition-consistent",
    title: "নিয়মিত ঘর",
    titleEn: "A Steady Home",
    en: 'Amma keeps the house running the same every day. "Every good day depends on one condition — small habits." The morning routine consists of tea, prayer, and news. Her step is consistent. Her calm is constant. She smiles constantly. She sweeps daily. She waters the plants regularly. She commonly cooks fish on Sundays. She is currently reading a small book. Rafi visits her frequently. The frequency of guests is high in winter. Life changes gradually. Occasionally she rests. She rarely gets angry. She typically wakes at five. She truly loves her family. She is fairly patient with everyone. She listens closely. She normally walks in the garden. Her hand is steady.',
    bn: 'আম্মা প্রতিদিন একইভাবে ঘর চালান। "প্রতিটা ভালো দিন একটা শর্তের ওপর নির্ভর — ছোট অভ্যাস।" সকালের রুটিন চা, নামাজ ও খবর দিয়ে গঠিত। তার ধাপ সঙ্গতিপূর্ণ। শান্তি ধ্রুব। ক্রমাগত হাসেন। প্রতিদিন ঝাড়ু দেন। নিয়মিত গাছে পানি দেন। রোববারে সাধারণত মাছ রাঁধেন। বর্তমানে ছোট এক বই পড়ছেন। রাফি ঘন ঘন দেখা করে। শীতে অতিথির হার বেশি। জীবন ধীরে বদলায়। কখনো কখনো বিশ্রাম নেন। কদাচিৎ রাগ করেন। সাধারণত পাঁচটায় ওঠেন। সত্যিই পরিবারকে ভালোবাসেন। সবার সাথে বেশ ধৈর্যশীল। মনোযোগ দিয়ে শোনেন। সাধারণত বাগানে হাঁটেন। হাত স্থির।',
    tip: 'নিজের ৩টা "daily habit" ইংরেজিতে বলো।',
  },

  "operate-perform": {
    themeId: "operate-perform",
    title: "মসৃণ এক দিন",
    titleEn: "A Smooth Day",
    en: 'The manager runs a smooth day. "We operate on trust." The morning operation is short. Every team must perform its role. Today\'s performance is calm. The junior staff conduct a small test. "Basic engineering is easy — check every screw." Each machine has one function. The safety procedure is on a card. A technical error stops one machine. He uses a small technique to restart it. His work is efficient. Problems close effectively. Meetings run perfectly. Files are stored properly. Deadlines close successfully. Orders will carry out on time. New tasks execute in an hour. He will manage the phones till lunch. The office staff stand tall. The whole system feels light.',
    bn: 'ম্যানেজার মসৃণ এক দিন চালান। "আমরা বিশ্বাসে চলি।" সকালের কার্যক্রম ছোট। প্রতিটা দল ভূমিকা পালন করবে। আজকের পারফরম্যান্স শান্ত। কনিষ্ঠ কর্মীরা ছোট এক পরীক্ষা পরিচালনা করেন। "মৌলিক প্রকৌশল সহজ — প্রতিটা স্ক্রু দেখো।" প্রতিটা যন্ত্রের এক কাজ। নিরাপত্তা পদ্ধতি কার্ডে। এক প্রযুক্তিগত ভুল একটা মেশিন থামায়। ছোট এক কৌশলে চালু করেন। তার কাজ দক্ষ। সমস্যা কার্যকরভাবে বন্ধ হয়। সভা নিখুঁতভাবে চলে। ফাইল ঠিকমতো রাখা হয়। সময়সীমা সফলভাবে বন্ধ হয়। আদেশ সময়মতো সম্পাদিত হবে। নতুন কাজ এক ঘণ্টায় শেষ। দুপুর পর্যন্ত ফোন সামলাবেন। অফিস কর্মীরা সোজা দাঁড়ায়। পুরো সিস্টেম হালকা লাগে।',
    tip: 'নিজের ১টা "procedure" ইংরেজিতে ৩ ধাপে বলো।',
  },

  "extra-a": {
    themeId: "extra-a",
    title: "সিলেটে ছোট সফর",
    titleEn: "A Small Trip to Sylhet",
    en: 'Amma made a small arrangement for the weekend. Train tickets are available online, and Abba likes the plan. "Ah, a real break!" Rafi says with a positive smile. Amma sets the schedule: the family will stay one night in Sylhet, at the base of a green hill. On the basis of past trips, dadi warns against heavy bags. Nadia acts like a travel agent, ringing a small bell before each announcement. The toilet on the train is tiny, but the beauty of the tea gardens is huge. Rafi packs a chocolate bar and a basic first-aid box. Nobody speaks badly; soft voices are the family rule. In the morning, the hill bells ring, and everyone smiles.',
    bn: 'আম্মা সপ্তাহান্তের জন্য একটা ছোট আয়োজন করলেন। ট্রেনের টিকিট অনলাইনে পাওয়া যায়, আর আব্বার পরিকল্পনাটা পছন্দ হল। "আহ, সত্যিকারের একটু ছুটি!" রাফি ইতিবাচক হাসিতে বলল। আম্মা সময়সূচি রাখলেন: পরিবারটি সিলেটে সবুজ পাহাড়ের ভিত্তিতে এক রাত থাকবে। আগের সফরের ভিত্তিতে দাদি ভারী ব্যাগের বিরুদ্ধে সাবধান করলেন। নাদিয়া ট্রাভেল প্রতিনিধির মতো কাজ করল, প্রতিটি ঘোষণার আগে একটা ছোট ঘন্টি বাজায়। ট্রেনের টয়লেটটা ছোট, কিন্তু চা-বাগানের সৌন্দর্য বিশাল। রাফি একটা চকলেট দণ্ড আর একটা মৌলিক প্রাথমিক-চিকিৎসা বাক্স নিল। কেউ খুব খারাপভাবে কথা বলে না; আস্তে বলা এই পরিবারের নিয়ম। সকালে পাহাড়ের ঘন্টি বাজে, সবাই হাসে।',
    tip: "চোখ বন্ধ করে ট্রেন-জানালা থেকে সবুজ পাহাড় দেখো — প্রতিটা শব্দকে এই দৃশ্যে বসিয়ে দাও।",
  },

  "extra-b": {
    themeId: "extra-b",
    title: "রাফির রঙিন ডায়েরি",
    titleEn: "Rafi's Coloured Diary",
    en: 'Rafi got a coloured diary on his birthday. "This belongs to me," he claims proudly. He writes a bit every night. The central table in his room is closed to noise; nobody can bother him there. He copies one English clause daily and tries to spell it correctly. Amma laughs — "You look a little crazy with that pen!" But she is happy. Rafi even draws a small bubble around new words to connect them. In the context of the story, each word makes sense. His notebook has a secret code on the first page: a black coal mark. The market outside is crowded today, and the shop\'s branch near the school is closed. Everything in the diary is connected to real life.',
    bn: 'রাফি জন্মদিনে একটা রঙিন দিনলিপি পেল। "এটা আমার অধীনে থাকে," সে গর্বে দাবি করে। প্রতি রাতে অল্প করে লেখে। ঘরের কেন্দ্রীয় টেবিলটা শব্দের জন্য বন্ধ; সেখানে কেউ তাকে বিরক্ত করতে পারে না। প্রতিদিন একটা ইংরেজি বাক্যাংশ নকল করে সঠিকভাবে বানান করার চেষ্টা করে। আম্মা হাসেন — "তুই ঐ কলম নিয়ে একটু পাগল লাগছিস!" কিন্তু তিনি খুশি। রাফি এমনকি নতুন শব্দগুলোর চারপাশে ছোট বুদবুদ আঁকে, যেন যুক্ত করা যায়। গল্পের প্রসঙ্গে প্রতিটা শব্দ মানে বহন করে। তার খাতার প্রথম পাতায় গোপন সংকেত: একটা কালো কয়লার দাগ। বাইরে বাজার আজ জনাকীর্ণ, স্কুলের কাছে দোকানের শাখাটি বন্ধ। দিনলিপির সবকিছু বাস্তব জীবনের সঙ্গে সংযুক্ত।',
    tip: "একটা ছোট নোটবুকে প্রতিদিন ১টা করে ইংরেজি বাক্য লেখো। ২১ দিনে অভ্যাসে পরিণত হবে।",
  },

  "extra-c": {
    themeId: "extra-c",
    title: "কক্সবাজারে দিক-হারানো",
    titleEn: "Losing Direction at Cox's Bazar",
    en: 'At Cox\'s Bazar, the sea is enormous. Firstly, the family walks in a direct line towards the water. Then a fog comes and Rafi almost disappears in it. "Where is the exact spot for our tent?" asks Amma. Nadia gives an excellent explanation, pointing in the right direction. Every direction here looks the same, except the road to the fish market. On the beach, a female crab moves easily on the sand. Farming is not the main feature of this town; tourism is. "I did not expect such an ending," says Rafi. He shows a photo on the camera disk: a small figure standing near an extreme wave. Everyday moments exist here, but this one feels magical.',
    bn: 'কক্সবাজারে সমুদ্র বিশাল। প্রথমত, পরিবার সমুদ্রের দিকে সরাসরি সোজা হাঁটে। তারপর কুয়াশা আসে, আর রাফি প্রায় সেটার মধ্যে অদৃশ্য হয়ে যায়। "আমাদের তাঁবুর সঠিক জায়গা কোথায়?" আম্মা জিজ্ঞেস করলেন। নাদিয়া চমৎকার একটা ব্যাখ্যা দিল, সঠিক দিকে আঙুল দেখিয়ে। এখানে প্রতিটি দিক একই রকম দেখায়, মাছ বাজারের রাস্তাটা ছাড়া। সৈকতে একটা নারী কাঁকড়া বালিতে সহজেই চলে। চাষাবাদ এই শহরের প্রধান বৈশিষ্ট্য না; পর্যটন। "এমন সমাপ্তি আশা করিনি," রাফি বলল। ক্যামেরার ডিস্কে একটা ছবি দেখাল: চরম ঢেউয়ের কাছে দাঁড়ানো একটা ছোট আকৃতি। প্রতিদিনের মুহূর্ত এখানে অস্তিত্ব থাকে, কিন্তু এটা জাদুকরী মনে হয়।',
    tip: "চোখ বন্ধ করে কক্সবাজারের বালিতে হাঁটো — কুয়াশা, ঢেউ, কাঁকড়া। প্রতিটা শব্দ একটা দৃশ্যে বাঁধো।",
  },

  "extra-d": {
    themeId: "extra-d",
    title: "নাদিয়ার বিদেশি অতিথি",
    titleEn: "Nadia's Foreign Guest",
    en: 'Rafi\'s teacher brings a foreign guest to school — an incredible visitor from Japan. "Not impossible to talk to her," Rafi thinks. She lands after a long flying trip. Nadia wears her small silver jewellery for the meeting. The teacher is helpful and leads them into a formal room. Instead of a hard lecture, the guest speaks in a light informal way. She is intelligent, kind, and very independent. She tells them how she invented a small human-friendly robot in a lab. "Each individual can make change," she says. Following her advice, Rafi promises to study further in general science. "Never kill your curiosity," she smiles. The class becomes silent — every child feels a bigger dream inside.',
    bn: 'রাফির শিক্ষক স্কুলে একজন বিদেশি অতিথি নিয়ে এলেন — জাপান থেকে অবিশ্বাস্য এক দর্শনার্থী। "তার সাথে কথা বলা অসম্ভব না," রাফি ভাবে। দীর্ঘ উড়ন্ত ভ্রমণের পর তিনি নামলেন। নাদিয়া তার ছোট রূপার গয়না পরল দেখা করার জন্য। শিক্ষক সহায়ক এবং তাদের একটি আনুষ্ঠানিক ঘরে নেতৃত্ব দিলেন। কঠিন বক্তৃতার পরিবর্তে অতিথি হালকা অনানুষ্ঠানিক ভঙ্গিতে কথা বললেন। তিনি বুদ্ধিমান, দয়ালু, এবং খুব স্বাধীন। তিনি বললেন কীভাবে পরীক্ষাগারে একটা ছোট মানুষ-বান্ধব রোবট উদ্ভাবন করেছিলেন। "প্রতিটি ব্যক্তিগত মানুষ পরিবর্তন আনতে পারে," তিনি বললেন। তার পরবর্তী পরামর্শ অনুসরণ করে রাফি প্রতিজ্ঞা করল সাধারণ বিজ্ঞানে আরও পড়বে। "কৌতূহল কখনও মেরে ফেলবে না," তিনি হাসলেন। ক্লাস নীরব হয়ে গেল — প্রতিটি শিশু ভেতরে বড় স্বপ্ন অনুভব করল।',
    tip: "প্রতিটা শব্দকে একটা মানুষ + একটা কাজে বসাও — অতিথি, শিক্ষক, নাদিয়া। শব্দ ছবিতে বাঁধা থাকলে হারায় না।",
  },

  "extra-e": {
    themeId: "extra-e",
    title: "হারিয়ে যাওয়া চাবি",
    titleEn: "The Lost Key",
    en: 'One noisy morning, Abba\'s key is lost. "At least it did not fall in the drain," says Amma. The family checks every level of the house. Their pet cat sits on the mail box, quiet and calm. "It is a normal ordinary day," says Rafi, "but a major problem too." Nadia finds a plastic bag near a metal shelf — inside is the missing key with a particular red tag. The original owner of this lock is Abba, so his face lights up. A small movement of the cat had knocked the key down. "A simple lifestyle is best," laughs Abba. Every male in the room smiles, and Amma says, "It is necessary to keep keys in one place."',
    bn: 'একটা শোরগোলপূর্ণ সকালে আব্বার চাবি হারিয়ে গেছে। "অন্তত নর্দমায় পড়েনি," আম্মা বললেন। পরিবার বাড়ির প্রতিটি স্তর পরীক্ষা করল। তাদের পোষা প্রাণী বিড়ালটা চিঠি বাক্সের ওপর বসে থাকল, চুপচাপ শান্ত। "এটা একটা স্বাভাবিক সাধারণ দিন," রাফি বলল, "কিন্তু একটা প্রধান সমস্যাও।" নাদিয়া একটা ধাতু তাকের কাছে একটা প্লাস্টিক ব্যাগ পেল — ভেতরে একটা নির্দিষ্ট লাল ট্যাগ সহ নিখোঁজ চাবি। এই তালার আসল মালিক আব্বা, তাই তার মুখ উজ্জ্বল হয়ে উঠল। বিড়ালের একটা ছোট নড়াচড়া চাবিটা ফেলে দিয়েছিল। "সহজ জীবনধারা সবচেয়ে ভালো," আব্বা হাসলেন। ঘরের প্রতিটা পুরুষ হাসল, আর আম্মা বললেন, "এক জায়গায় চাবি রাখা প্রয়োজনীয়।"',
    tip: "প্রতিটা শব্দকে চাবি হারানোর দৃশ্যে বসাও — বিড়াল, ব্যাগ, ট্যাগ। মনে থাকবে।",
  },

  "extra-f": {
    themeId: "extra-f",
    title: "সকালের দৌড়ে ইংরেজি",
    titleEn: "English on the Morning Run",
    en: 'Karim is a regular runner. Rafi joins him one recent morning. On the road they see a scary dog, but Karim keeps a calm position. "Firstly, do not run. Secondly, walk slow," he says. He shows a possibility on his phone: an English pronunciation app. Rafi tries to pronounce hard words while jogging. Karim recommends short daily recordings — he refers to a famous coach\'s profile online. They pass a small pub, a repair shop, and a long row of rickshaws. A pile of rubbish sits by the road, and Rafi feels a bad sense in his nose. "Let us remove those pop songs from our ears," laughs Karim, "and hear the real reception of English."',
    bn: 'করিম একজন নিয়মিত দৌড়বিদ। রাফি সাম্প্রতিক এক সকালে তার সাথে যোগ দিল। রাস্তায় তারা একটা ভয়ঙ্কর কুকুর দেখল, কিন্তু করিম শান্ত অবস্থানে থাকল। "প্রথমত, দৌড়াবি না। দ্বিতীয়ত, ধীরে হাঁট," সে বলল। ফোনে একটা সম্ভাবনা দেখাল: ইংরেজি উচ্চারণ অ্যাপ। রাফি জগিং করতে করতে কঠিন শব্দ উচ্চারণ করার চেষ্টা করল। করিম ছোট দৈনিক রেকর্ডিং সুপারিশ করে — একজন বিখ্যাত কোচের অনলাইন পরিচয়লিপি উল্লেখ করে। তারা একটা ছোট মদশালা, একটা মেরামত দোকান, এবং রিকশার একটা লম্বা সারি পার হল। রাস্তার পাশে আবর্জনার স্তূপ, রাফির নাকে খারাপ বোধ। "চলো কানের ঐ হঠাৎ শব্দগুলো সরিয়ে ফেলি," করিম হাসল, "আর ইংরেজির আসল অভ্যর্থনা শুনি।"',
    tip: "দৌড়ানোর সময় কানে ইংরেজি শোনো। শরীর নড়লে মস্তিষ্ক দ্রুত শেখে।",
  },

  "extra-g": {
    themeId: "extra-g",
    title: "স্কুলের বিজ্ঞান দিন",
    titleEn: "Science Day at School",
    en: 'Today is a science day. The trainer says, "Sir, this is a specific project." Rafi takes each step slowly. He keeps a stick and a sheet of paper on the table, and one small tool. "Suppose we build a small underground tunnel," says Nadia. Rafi shakes his head — "That is strange, but possible." They serve juice to the guests and shut the door for silence. Their understanding of the topic grows. It is a typical school event, but with a surprising twist: a video from a snowy ski site abroad. "Wow!" says Faisal. The teacher separates the class into two teams. The event ends with a big surprise: a certificate for the best team.',
    bn: 'আজ বিজ্ঞান দিবস। প্রশিক্ষক বললেন, "মহোদয়, এটা একটা সুনির্দিষ্ট প্রকল্প।" রাফি প্রতিটা পদক্ষেপ ধীরে নিল। টেবিলে একটা লাঠি ও একটা কাগজের পাত রাখল, সাথে একটা ছোট যন্ত্রপাতি। "মনে কর আমরা একটা ছোট ভূগর্ভস্থ সুড়ঙ্গ বানাই," নাদিয়া বলল। রাফি মাথা ঝাঁকাল — "অদ্ভুত, কিন্তু সম্ভব।" তারা অতিথিদের রস পরিবেশন করল আর নীরবতার জন্য দরজা বন্ধ করল। বিষয়ের বুঝ বাড়ল। এটা স্বাভাবিক স্কুল অনুষ্ঠান, কিন্তু একটা আশ্চর্যজনক মোড়: বিদেশের বরফে চলা স্থান থেকে একটা ভিডিও। "বাহ!" ফয়সাল বলল। শিক্ষক ক্লাসকে দুই দলে আলাদা করলেন। অনুষ্ঠান শেষ হল একটা বড় বিস্ময় দিয়ে: সেরা দলের জন্য সনদপত্র।',
    tip: "প্রতিটা শব্দকে একটা ক্লাসরুম-দৃশ্যে বসাও — শিক্ষক, বন্ধু, পরীক্ষা।",
  },

  "extra-h": {
    themeId: "extra-h",
    title: "দশম বিবাহ-বার্ষিকী",
    titleEn: "The Tenth Anniversary",
    en: 'It is the family\'s tenth wedding anniversary — an annual event. Amma wants a variety of small dishes. "Where is the big pot?" she asks. Rafi is washing plates in the kitchen; the tap is working now. "Wow, so useful!" says Nadia. An unusual visitor arrives — Karim\'s uncle, who used to live in London. He speaks in an approach that is warm, not artificial. He tells stories about many aspects of life abroad. "The main barrier was language," he says, "but I used simple words and I was okay." Amma serves a special sweet — she made it in the usual old way. The children want more. It is a small but powerful appeal to family love.',
    bn: 'এটা পরিবারের দশম বিবাহ বার্ষিকী — একটা বার্ষিক অনুষ্ঠান। আম্মা ছোট ছোট নানা খাবারের বৈচিত্র্য চান। "বড় হাঁড়িটা কোথায়?" জিজ্ঞেস করলেন। রাফি রান্নাঘরে থালা ধোয়ামোছা করছে; কল এখন চলমান। "বাহ, খুব দরকারী!" নাদিয়া বলল। একজন অস্বাভাবিক দর্শনার্থী এল — করিমের চাচা, যিনি লন্ডনে থাকতে অভ্যস্ত ছিলেন। তিনি এমন দৃষ্টিভঙ্গিতে কথা বললেন যা উষ্ণ, কৃত্রিম নয়। বিদেশে জীবনের অনেক দিক নিয়ে গল্প বললেন। "প্রধান বাধা ছিল ভাষা," তিনি বললেন, "কিন্তু আমি সহজ শব্দ ব্যবহার করেছি আর ভালোই ছিলাম।" আম্মা একটা বিশেষ মিষ্টি পরিবেশন করলেন — সাধারণ পুরনো উপায়ে বানানো। বাচ্চারা আরও চাইল। এটা পরিবার-ভালোবাসার একটা ছোট কিন্তু শক্তিশালী আবেদন।',
    tip: "একটা পারিবারিক অনুষ্ঠান কল্পনা কর — কে এল, কী বলল, কী খেল। শব্দগুলো ঐ দৃশ্যে বাঁধো।",
  },

  "extra-i": {
    themeId: "extra-i",
    title: "প্রতিযোগিতার আগের রাত",
    titleEn: "The Night Before the Contest",
    en: 'Nadia is a young being who thinks a lot before sleep. Tonight she is concerned about a school contest. "Do not confuse yourself," says Amma gently. Rafi bets she will win. Their chief teacher gave one clear consideration: content must be honest, not confusing. Nadia bends over her diary and writes each idea. Under this circumstance, a conservative approach may work best. Abba, a contemporary man, tells her to keep continuous small efforts. "Every small component matters," he says. He begs her not to worry. He gives one useful contact — a friend on a school commission. Nadia\'s content is her own; she wants to contribute a real story from her home. Her small hand, a little bent from writing, finally rests.',
    bn: 'নাদিয়া একজন তরুণ অস্তিত্ব, যে ঘুমের আগে অনেক ভাবে। আজ রাতে সে স্কুলের একটা প্রতিযোগিতা নিয়ে চিন্তিত। "নিজেকে বিব্রত করিস না," আম্মা কোমলে বললেন। রাফি বাজি ধরল সে জিতবে। তাদের প্রধান শিক্ষক একটা স্পষ্ট বিবেচনা দিয়েছিলেন: বিষয়বস্তু সৎ হতে হবে, বিভ্রান্তিকর না। নাদিয়া তার দিনলিপির উপর বাঁকা হয়ে প্রতিটা ভাব লিখল। এই পরিস্থিতিতে একটা রক্ষণশীল দৃষ্টিভঙ্গি সবচেয়ে ভালো কাজ করতে পারে। আব্বা, একজন সমসাময়িক মানুষ, তাকে অবিরাম ছোট চেষ্টা রাখতে বললেন। "প্রতিটা ছোট উপাদান গুরুত্বপূর্ণ," তিনি বললেন। তিনি মিনতি করলেন যেন সে দুশ্চিন্তা না করে। একটা দরকারী যোগাযোগ দিলেন — স্কুল কমিশনের একজন বন্ধু। নাদিয়ার বিষয়বস্তু নিজের; সে নিজের বাড়ি থেকে একটা আসল গল্প অবদান রাখতে চায়। তার ছোট হাত, লেখার কারণে একটু বাঁকা, শেষে বিশ্রাম নিল।',
    tip: 'চিন্তার সময় প্রতিটা শব্দকে একটা প্রশ্নে ঢুকিয়ে দাও: "এটা কি আমার জীবনে আছে?"',
  },

  "extra-j": {
    themeId: "extra-j",
    title: "চায়ের সাথে ছোট কথা",
    titleEn: "Small Talk over Tea",
    en: 'It is a familiar evening. Amma made tea, and the family sits by the fence. Karim visits directly from work. He is dressed in a simple shirt, ready for a fascinating chat. "The current employment market is hard," he says. "Despite that, I am determined." He draws a small diagram on paper — a diamond shape with four steps. "This will deliver a plan," he smiles. Rafi asks about the disadvantage of leaving home too early. Amma laughs and cleans a bit of dirt from Nadia\'s hand. Eventually, they exchange small stories. Suddenly, a loud sound — a firecracker in the street. It did not explode fully; only a small explosion. Everyone laughs. "Your effort is a real contribution," Amma tells Karim. Nothing is more convenient than tea, family, and honest words.',
    bn: 'এটা একটা পরিচিত সন্ধ্যা। আম্মা চা বানিয়েছেন, পরিবার বেড়ার পাশে বসে। করিম কাজ থেকে সরাসরি এল। সাধারণ শার্ট পরে সে অত্যন্ত আকর্ষণীয় আলাপের জন্য প্রস্তুত। "বর্তমান চাকরির বাজার কঠিন," সে বলল। "সত্ত্বেও আমি দৃঢ়প্রতিজ্ঞ।" কাগজে একটা ছোট চিত্র আঁকল — চার ধাপের একটা হীরা আকৃতি। "এটা একটা পরিকল্পনা পৌঁছে দেবে," সে হাসল। রাফি বাড়ি খুব তাড়াতাড়ি ছাড়ার অসুবিধা জিজ্ঞেস করল। আম্মা হাসলেন এবং নাদিয়ার হাত থেকে অল্প ময়লা পরিষ্কার করলেন। অবশেষে তারা ছোট গল্পের বিনিময় করল। হঠাৎ, একটা জোরে শব্দ — রাস্তায় পটকা। এটা পুরোপুরি বিস্ফোরিত হল না; শুধু একটা ছোট বিস্ফোরণ। সবাই হাসল। "তোমার চেষ্টা একটা আসল অবদান," আম্মা করিমকে বললেন। চা, পরিবার আর সৎ কথার চেয়ে সুবিধাজনক কিছু নেই।',
    tip: "প্রতিটা শব্দকে এক কাপ চায়ের সাথে বসাও — যতবার চা খাবে, শব্দগুলো ততবার মনে পড়বে।",
  },

  "extra-k": {
    themeId: "extra-k",
    title: "আব্বার ফিটনেস ক্লাস",
    titleEn: "Abba's Fitness Class",
    en: 'Abba believes in fitness. On the historic Victory Day, a red-green flag flies over the park. "I will jog forever," Abba jokes, walking beside a giant tree. Rafi is glad to join. He wears one old glove because the wind blows heavily. Suddenly a helicopter passes overhead — the highlight of the morning. "Health is highly important," Abba says. "A horrible cough starts if you hurry too fast." He asks Rafi about his identity: "Are you a lazy boy or a strong boy?" "An imaginary strong boy!" Rafi laughs. Abba makes an immediate rule: five minutes of stretching each day. He tells a story of an immigrant uncle in Dubai who lifts weights daily — a real example of the importance of habit. The impression on Rafi is deep. "Impressive plan, Abba," he says. Together they walk home.',
    bn: 'আব্বা শরীর-চর্চায় বিশ্বাসী। ঐতিহাসিক বিজয় দিবসে পার্কের উপর লাল-সবুজ পতাকা উড়ছে। "আমি চিরকাল দৌড়াব," আব্বা মজা করে বলেন, বিশাল এক গাছের পাশ দিয়ে হাঁটতে হাঁটতে। রাফি খুশি হয়ে সঙ্গ দেয়। বাতাস প্রবলভাবে বইছে বলে সে এক পুরনো দস্তানা পরেছে। হঠাৎ মাথার উপর একটা হেলিকপ্টার চলে গেল — সকালের বিশেষ মুহূর্ত। "স্বাস্থ্য অত্যন্ত গুরুত্বপূর্ণ," আব্বা বলেন। "খুব তাড়াহুড়ো করলে ভয়ঙ্কর কাশি শুরু হয়।" আব্বা রাফির পরিচয় নিয়ে প্রশ্ন করেন: "তুই অলস ছেলে, নাকি শক্ত ছেলে?" "এক কাল্পনিক শক্ত ছেলে!" রাফি হাসে। আব্বা তাত্‌ক্ষণিক নিয়ম করলেন — রোজ পাঁচ মিনিট স্ট্রেচিং। দুবাইয়ে থাকা অভিবাসী চাচার কথা বলেন, যিনি প্রতিদিন ভার তোলেন — অভ্যাসের গুরুত্বের প্রকৃত উদাহরণ। রাফির মনে গভীর ছাপ পড়ে। "চিত্তাকর্ষক পরিকল্পনা, আব্বা।"',
    tip: "সকালে ৫ মিনিট হাঁটার সময় আজকের ৫টা শব্দ জোরে জোরে বলো।",
  },

  "extra-l": {
    themeId: "extra-l",
    title: "রাফির হেডফোন ক্লাস",
    titleEn: "Rafi's Headphone Class",
    en: 'Rafi is incredibly keen on English. "Indeed, my ears learn faster than my eyes," he tells Nadia. He downloads the latest lesson — a leading British teacher\'s short podcast. Small arrows on the screen indicate an indirect path to fluency: listen, repeat, write. He tries to locate the pause button; it is located near the bottom. The lack of quiet in the house is a small loss. "Silence is a luxury here," Amma laughs — she is not mad, just busy. The magic of good management is simple: one earphone in each ear, one hour a day. Rafi\'s room is a mess, but his notebook is neat. His accent is mild, not perfect, but naturally clear. "You do not necessarily need a teacher," Abba says, "if your ears are open." Rafi\'s intelligence, everyone agrees, grows through daily listening.',
    bn: 'রাফি ইংরেজি নিয়ে অবিশ্বাস্যভাবে আগ্রহী। "প্রকৃতপক্ষে, আমার কান চোখের চেয়ে দ্রুত শেখে," সে নাদিয়াকে বলে। সে লেটেস্ট পাঠ ডাউনলোড করে — এক প্রধান ব্রিটিশ শিক্ষকের ছোট পডকাস্ট। স্ক্রিনের ছোট তীর সাবলীলতার এক পরোক্ষ পথ নির্দেশ করে: শোনো, বলো, লেখো। পজ বোতাম খুঁজে বের করতে চেষ্টা করে; সেটা নিচে অবস্থিত। ঘরে নীরবতার অভাব ছোট এক ক্ষতি। "এখানে নিরিবিলি বিলাসিতা," আম্মা হাসেন — তিনি পাগল না, শুধু ব্যস্ত। ভালো ব্যবস্থাপনার জাদু সহজ: প্রতি কানে এক ইয়ারফোন, প্রতিদিন এক ঘণ্টা। রাফির ঘর এলোমেলো, কিন্তু খাতা পরিপাটি। তার উচ্চারণ মৃদু, নিখুঁত না, তবে স্বাভাবিকভাবেই স্পষ্ট। "অবশ্যই শিক্ষক লাগবে এমন না," আব্বা বলেন, "যদি কান খোলা থাকে।" সবাই মানে — রাফির মেধা প্রতিদিন শোনার মাধ্যমে বাড়ছে।',
    tip: "দিনে ১০ মিনিট শুধু ইংরেজি অডিও শুনো — বুঝতে না পারলেও চলবে, কান অভ্যস্ত হবে।",
  },

  "extra-m": {
    themeId: "extra-m",
    title: "ছাদে জোছনার আসর",
    titleEn: "Moonlight on the Roof",
    en: 'The whole neighbourhood is quiet. Amma prepared tea and brings up a small package of snacks. Abba sits with an old-fashioned radio; originally it was Dada\'s. Nadia sews a torn scarf with a needle and pin. "The moon looks like a net of silver," Rafi says with quiet passion. "Personally, I love these nights." A cousin who works as a photographer joins them. "Planning a new photo book is pure pleasure," he says. Amma warns Rafi about a poisonous plant near the water tank — "Do not touch, its juice is a real poison." A previous fall on the roof was painful; previously they had no rail. Now the plan is practical: one small light, one low rail. "An odd, sweet night," says Dada. Everyone smiles under the wide sky.',
    bn: 'পুরো পাড়া নিরিবিলি। আম্মা চা প্রস্তুত করে ছোট এক প্যাকেট নাশতা নিয়ে আসেন। আব্বা মান্ধাতা আমলের রেডিও নিয়ে বসেন; মূলত এটা দাদার ছিল। নাদিয়া ছেঁড়া ওড়না সূঁচ আর আলপিন দিয়ে সেলাই করে। "চাঁদটা রুপার এক জালের মতো," রাফি শান্ত আবেগে বলে। "ব্যক্তিগতভাবে, এই রাতগুলো আমি ভালোবাসি।" আলোকচিত্রী কাজিন এসে যোগ দেয়। "নতুন এক ফটো-বইয়ের পরিকল্পনা করা খাঁটি আনন্দ," সে বলে। আম্মা পানির ট্যাঙ্কের পাশে বিষাক্ত এক গাছের কথা রাফিকে সাবধান করেন — "ধরবি না, এর রস আসল বিষ।" আগের বার ছাদ থেকে পড়ে গিয়ে যন্ত্রণাদায়ক ব্যথা হয়েছিল; ইতিপূর্বে রেলিং ছিল না। এখন পরিকল্পনা ব্যবহারিক: এক ছোট বাতি, এক নিচু রেলিং। "অদ্ভুত সুন্দর এক রাত," দাদা বলেন। খোলা আকাশের নিচে সবাই হাসে।',
    tip: "রাতে ছাদে/জানালায় দাঁড়িয়ে আজকের ৩টা শব্দ চাঁদকে বলো — মজা হবে, মনেও থাকবে।",
  },

  "extra-n": {
    themeId: "extra-n",
    title: "রাতের খাবারে এক শব্দ",
    titleEn: "One Word at Dinner",
    en: 'At dinner, each person shares one word. Karim, whose profession is teaching, opens the game. "Your related family is your best property," he smiles — a soft recommendation. Nadia shows a printing sample from her school project. Abba, once a small producer of jute goods, tells a rare story: a repeated dream where he is racing camels in a remote desert. "Reality is quieter," he laughs. "I remain in the village and I represent our family in every village meeting." Amma is responsible for the sweets tonight; she asks Rafi to revise his lesson before bed. "This will remind you what you learned." The relation between food and memory is strong, Karim says. "The brain needs rest to release new words into long memory." Everyone agrees to keep the tradition — one word, every night.',
    bn: 'রাতের খাবারে প্রত্যেকে এক-এক করে একটা শব্দ ভাগ করে। করিমের পেশা শিক্ষকতা; সে খেলা শুরু করে। "তোমার সম্পর্কিত পরিবারই তোমার সেরা সম্পত্তি," সে মৃদু হাসে — এক নরম সুপারিশ। নাদিয়া স্কুল প্রজেক্টের একটা মুদ্রণ নমুনা দেখায়। আব্বা এক সময় পাটজাত পণ্যের ছোট প্রযোজক ছিলেন; তিনি এক বিরল গল্প বলেন — বারংবার এক স্বপ্ন যেখানে দূরবর্তী মরুভূমিতে উট দৌড় প্রতিযোগিতা করছেন। "বাস্তবতা আরও শান্ত," তিনি হাসেন। "আমি গ্রামে বেঁচে থাকি, প্রতিটা গ্রাম-সভায় পরিবারকে উপস্থাপন করি।" আজকের মিষ্টির জন্য আম্মা দায়ী; তিনি রাফিকে ঘুমানোর আগে পাঠ সংশোধন করতে বলেন। "এটা তোকে মনে করিয়ে দেবে কী শিখেছিস।" খাবার ও স্মৃতির সম্পর্ক গভীর, করিম বলে। "নতুন শব্দকে দীর্ঘ স্মৃতিতে মুক্তি দিতে মস্তিষ্কের বিশ্রাম প্রয়োজন হয়।" সবাই ঐতিহ্যটা রাখতে রাজি — প্রতি রাতে এক শব্দ।',
    tip: "আজ রাতে খাবারের সময় পরিবারের একজনকে ১টা নতুন ইংরেজি শব্দ শেখাও।",
  },

  "extra-o": {
    themeId: "extra-o",
    title: "গ্রামের চোখে নতুন কিছু",
    titleEn: "New Things Through Village Eyes",
    en: 'In the village, everything looks slightly new. Rafi carries a small camera and a tiny robot toy. Boys play rugby on a dry field; Rafi is a keen supporter but shy to join. A stranger asks his name in a friendly way. Rafi scans the crowd — sensible answer, safe smile. Abba explains: "Both sex, male and female, work in the fields here; sexual jokes are never welcome in front of elders." A shiny piece of tape holds Rafi\'s map together. He ties his notebook with a red string so it will not fly away. His stuff fits into one small bag. The morning sun shines on the pond. Rafi\'s phone shows a weak signal, but his strength of memory is strongly awake. At night he tries to summarize the day: a short summary of ten new words. "Surely I will remember," he says.',
    bn: 'গ্রামে সবকিছু সামান্য নতুন লাগে। রাফি একটা ছোট ক্যামেরা আর একটা ছোট রোবট খেলনা সাথে নেয়। ছেলেরা শুকনো মাঠে রাগবি খেলছে; রাফি আগ্রহী সমর্থক, কিন্তু যোগ দিতে লজ্জা। এক অচেনা ব্যক্তি বন্ধুত্বপূর্ণ ভঙ্গিতে নাম জিজ্ঞেস করে। রাফি ভিড়টা পরীক্ষা করে — বিচক্ষণ উত্তর, নিরাপদ হাসি। আব্বা বোঝান: "এখানে দুই লিঙ্গই — পুরুষ ও নারী — মাঠে কাজ করেন; যৌন কৌতুক বড়দের সামনে চলে না।" রাফির মানচিত্র একটা উজ্জ্বল ফিতা দিয়ে জোড়া। খাতাটা লাল সুতো দিয়ে বাঁধে যেন উড়ে না যায়। তার জিনিসপত্র এক ছোট ব্যাগে ধরে। সকালের সূর্য পুকুরে জ্বলজ্বল করে। রাফির ফোনে সংকেত দুর্বল, কিন্তু স্মৃতির শক্তি দৃঢ়ভাবে জেগে। রাতে সে দিনটা সংক্ষেপ করার চেষ্টা করে — দশটা নতুন শব্দের সারাংশ। "অবশ্যই মনে রাখব," সে বলে।',
    tip: "নতুন কোনো জায়গায় গেলে ৫টা জিনিসের ইংরেজি নাম মনে মনে বলো।",
  },

  "extra-p": {
    themeId: "extra-p",
    title: "আম্মার ঘর গোছানো",
    titleEn: "Amma Tidies the Room",
    en: 'Amma tends to the house on Fridays. She lifts a tin box of buttons — tiny but useful. "This room is totally messy," she says, half laughing. She writes a new list, the fifth version, in a written notebook. Her method is worldwide: clean top to bottom. "Cleanliness is an absolute rule," she smiles. Rafi says, "Acceptable, Amma!" She keeps an accurate count of small jars. The actual state of Nadia\'s shelf is a small affair, but not a big one. Afterwards, they open the window; a broad view of the bush outside greets them. A blind old cat sleeps in the corner — a soft characteristic of the room. The core of Amma\'s teaching: courage to throw away useless stuff. "Cleaning is a small creation," she says. Rafi nods and repeats every word.',
    bn: 'আম্মা শুক্রবারে ঘরের যত্ন নেন। বোতামের টিন বাক্সটা তুলে নেন — খুব ছোট, তবু কাজের। "ঘরটা পুরোপুরি এলোমেলো," আধা হেসে বলেন। এক লিখিত খাতায় নতুন তালিকা লেখেন — এটা পঞ্চম সংস্করণ। তাঁর পদ্ধতি বিশ্বব্যাপী: উপর থেকে নিচে পরিষ্কার। "পরিচ্ছন্নতা সম্পূর্ণ এক নিয়ম," তিনি হাসেন। রাফি বলে, "গ্রহণযোগ্য, আম্মা!" ছোট কৌটার সংখ্যা তিনি নির্ভুলভাবে রাখেন। নাদিয়ার তাকের প্রকৃত অবস্থা ছোট এক ঘটনা, বড় কিছু না। এরপর তারা জানালা খোলে; বাইরে ঝোপের প্রশস্ত দৃশ্য চোখে পড়ে। কোণে এক অন্ধ বুড়ো বিড়াল ঘুমায় — ঘরের এক নরম বৈশিষ্ট্য। আম্মার শিক্ষার মূল কথা: অকেজো জিনিস ফেলে দেওয়ার সাহস। "পরিষ্কার করা মানে ছোট এক সৃষ্টি," তিনি বলেন। রাফি মাথা নাড়ে আর প্রতিটা শব্দ পুনরাবৃত্তি করে।',
    tip: "ঘর গোছানোর সময় প্রতিটা জিনিসের ইংরেজি নাম জোরে বলো।",
  },

  "extra-q": {
    themeId: "extra-q",
    title: "বাসের সাইন খেলা",
    titleEn: "The Bus-Sign Game",
    en: 'On the bus to the next district, Rafi plays a sign-reading game. His division, the north side of the road, has more signs. "A traffic crisis every morning," says an old critic beside him. His criticism is loud but decent. Rafi does not criticize back; he smiles. A big board declares: "Fast delivery in one hour." Rafi reads it deeply and writes it down. His notes are detailed, almost too deliberate. "You deliberately study everywhere," laughs Nadia. "Yes, my desire is strong." A desperate driver rings the bell. Nadia can detect a small mistake in an English sign — "disc" spelt as "disk". Rafi will demonstrate the correct version to the class tomorrow. The criterion for a good sign, he thinks, is: short, clear, honest. "We deserve better English signs in every district."',
    bn: 'পরের জেলায় যাওয়ার বাসে রাফি সাইন-পড়ার খেলা খেলে। তার বিভাগ — রাস্তার উত্তর পাশে — বেশি সাইন আছে। "প্রতিদিন সকালে ট্রাফিক সংকট," পাশের এক বৃদ্ধ সমালোচক বলেন। তাঁর সমালোচনা জোরে, তবে শালীন। রাফি পাল্টা সমালোচনা করে না; হাসে। এক বড় বোর্ড ঘোষণা করে: "এক ঘণ্টায় দ্রুত সরবরাহ।" রাফি গভীরভাবে পড়ে লিখে নেয়। তার নোট বিস্তারিত, প্রায় অতিরিক্ত ইচ্ছাকৃত। "তুই ইচ্ছাকৃতভাবে সব জায়গায় পড়িস," নাদিয়া হাসে। "হ্যাঁ, আমার আকাঙ্ক্ষা তীব্র।" এক মরিয়া চালক ঘণ্টা বাজায়। নাদিয়া এক ইংরেজি সাইনে ছোট ভুল শনাক্ত করতে পারে — "disc" বানান "disk"। রাফি কাল ক্লাসে সঠিক সংস্করণ প্রদর্শন করবে। ভালো সাইনের মানদণ্ড, সে ভাবে: ছোট, স্পষ্ট, সৎ। "প্রতিটা জেলায় ভালো ইংরেজি সাইন পাওয়ার আমরা যোগ্য।"',
    tip: "বাসে/রিকশায় বসে যেকোনো ইংরেজি সাইন জোরে পড়ো।",
  },

  "extra-r": {
    themeId: "extra-r",
    title: "নাদিয়ার বাজার-প্রশ্ন",
    titleEn: "Nadia's Market Questions",
    en: 'Nadia writes a small draft of questions for the market: "How much? Is it fresh?" She will edit the list on the way. Her expectation is small — just to speak, not to dominate the shop. The entire market is her exploration ground. Amma will ensure her safety by walking behind. At the fish stall, Nadia\'s first enquiry is polite. The shopkeeper smiles — his facility with English is limited, but he tries. This small encounter is extraordinary for a shy girl. To emphasize practice, Amma repeats: "Speaking is ethical too; do not laugh at anyone\'s failure." A wide estate of vegetables greets them next. "The emphasis of learning must be on daily use," Amma says. She will help Nadia establish a habit: one English question at every shop. This will enable her to grow. "To what extent can you go?" asks Karim later. Nadia smiles. "To the last stall." She will not expose her shy side anymore.',
    bn: 'নাদিয়া বাজারের জন্য ছোট এক প্রশ্নের খসড়া লেখে: "কত? তাজা?" পথে সে তালিকা সম্পাদনা করবে। তার প্রত্যাশা ছোট — শুধু বলা, দোকান আধিপত্য করা না। সম্পূর্ণ বাজারটাই তার অনুসন্ধানের জায়গা। আম্মা পেছনে হেঁটে তার নিরাপত্তা নিশ্চিত করবেন। মাছের স্টলে নাদিয়ার প্রথম অনুসন্ধান বিনয়ী। দোকানদার হাসেন — তাঁর ইংরেজিতে সুবিধা সীমিত, তবু চেষ্টা করেন। লাজুক এক মেয়ের জন্য এই ছোট মুখোমুখি হওয়াটা অসাধারণ। অনুশীলনে জোর দিতে আম্মা পুনরাবৃত্তি করেন: "কথা বলাও নৈতিক; কারো ব্যর্থতা নিয়ে হাসবে না।" এরপর সবজির প্রশস্ত সম্পত্তি সামনে আসে। "শেখার জোর প্রতিদিনের ব্যবহারে থাকা উচিত," আম্মা বলেন। তিনি নাদিয়াকে অভ্যাস প্রতিষ্ঠা করতে সাহায্য করবেন: প্রতিটি দোকানে এক ইংরেজি প্রশ্ন। এটা তাকে বেড়ে উঠতে সক্ষম করবে। "কতদূর মাত্রা পর্যন্ত যেতে পারবি?" করিম পরে জিজ্ঞেস করে। নাদিয়া হাসে। "শেষ স্টল পর্যন্ত।" এখন থেকে সে আর তার লাজুক দিকটা উন্মোচিত করবে না।',
    tip: "কালকে দোকানে গিয়ে ১টা প্রশ্ন ইংরেজিতে করো — যতই ভুল হোক, বলো।",
  },

  "extra-s": {
    themeId: "extra-s",
    title: "করিমের পড়ার কৌশল",
    titleEn: "Karim's Study Trick",
    en: 'Karim comes with a firm plan. "I have a small trick," he says. "It will impress you." He draws a quick illustration on paper — a flash of imagination. "Write, then draw. Draw, then speak." Rafi\'s finding after one week: memory grows. A former teacher of Karim\'s founded a small learning fund for village kids; today he offers a small grant to Nadia. "I cannot guarantee everything," Karim says, "but the funding will help buy books." Amma is flexible about study time; she does not impose long hours. "A short session in heaven is better than a long one in hell," she jokes. Rafi\'s feedback to Karim is honest. "Your illustration helped me hear the word." "Hearing is the first door," Karim smiles. "Then imagination opens the second." His words imply a lifetime of practice — small, joyful, daily. To illustrate his point, he draws a smiling face.',
    bn: 'করিম দৃঢ় এক পরিকল্পনা নিয়ে আসে। "আমার কাছে ছোট এক কৌশল আছে," সে বলে। "তোমাকে প্রভাবিত করবে।" কাগজে দ্রুত এক চিত্র আঁকে — কল্পনার এক ঝলক। "লেখো, তারপর আঁকো। আঁকো, তারপর বলো।" এক সপ্তাহ পর রাফির অনুসন্ধান-ফল: স্মৃতি বাড়ছে। করিমের এক পূর্ববর্তী শিক্ষক গ্রামের বাচ্চাদের জন্য ছোট এক শেখার তহবিল প্রতিষ্ঠিত করেছিলেন; আজ তিনি নাদিয়াকে ছোট এক অর্থ প্রদান করেন। "আমি সবকিছুর গ্যারান্টি দিতে পারি না," করিম বলে, "তবে অর্থায়ন বই কিনতে সাহায্য করবে।" আম্মা পড়ার সময় নিয়ে নমনীয়; তিনি দীর্ঘ সময় আরোপ করেন না। "স্বর্গে ছোট এক অধিবেশন নরকে দীর্ঘ এক অধিবেশনের চেয়ে ভালো," মজা করেন। করিমকে রাফির প্রতিক্রিয়া সৎ। "তোমার চিত্র আমাকে শব্দটা শুনতে সাহায্য করেছে।" "শ্রবণই প্রথম দরজা," করিম হাসে। "তারপর কল্পনা দ্বিতীয় দরজা খোলে।" তার কথা ইঙ্গিত দেয় সারাজীবনের অনুশীলন — ছোট, আনন্দময়, প্রতিদিনের। কথা চিত্রিত করতে সে একটা হাসিমুখ আঁকে।',
    tip: "আজ ১টা শব্দ লিখে তার পাশে ছোট একটা ছবি আঁকো।",
  },

  "extra-t": {
    themeId: "extra-t",
    title: "ফয়সালের পোস্টার",
    titleEn: "Faisal's Posters",
    en: 'Faisal is impressed by big posters. He paints his own — each inch full of colour. Increasingly, his room feels like a small institute of art. "An industrial worker needs safety," one poster says. Another shows an inquiry desk at a school institution: "Ask, and you will grow." His intended readers are village kids. His labour is intense but light-hearted; he does not interrupt anyone. "Good judgement about colour," says Abba. His leadership in the small painting group is lively. He carries a heavy load of paint tubes without a licence to sell — this is not a shop, only a gift. "Insurance for the future," he calls the posters, "is small daily reading." For instance, he interprets one English word each morning for the neighbourhood kids. "Long-term learning is not a race," Faisal says. "It is a slow, happy walk."',
    bn: 'ফয়সাল বড় বড় পোস্টার দেখে মুগ্ধ। সে নিজে পোস্টার আঁকে — প্রতিটা ইঞ্চি রঙে ভরা। ক্রমশ তার ঘরটা ছোট এক শিল্প প্রতিষ্ঠান-এর মতো লাগে। "শিল্প-শ্রমিকের নিরাপত্তা দরকার," এক পোস্টারে লেখা। আরেকটায় স্কুল প্রতিষ্ঠানে অনুসন্ধান ডেস্ক দেখানো: "প্রশ্ন করো, বেড়ে উঠবে।" তার উদ্দিষ্ট পাঠক গ্রামের বাচ্চা। শ্রম তীব্র, তবে হালকা মেজাজের; কাউকে বাধা দেয় না। "রঙের ভালো বিচার," আব্বা বলেন। ছোট ছবি-দলে তার নেতৃত্ব প্রাণবন্ত। রঙের টিউবের ভারী বোঝা বহন করে, তবে বিক্রির লাইসেন্স নেই — এটা দোকান না, শুধু উপহার। "ভবিষ্যতের জন্য বীমা," সে পোস্টারগুলোকে বলে, "হল রোজকার ছোট পড়া।" উদাহরণস্বরূপ, প্রতিদিন সকালে পাড়ার বাচ্চাদের জন্য একটা ইংরেজি শব্দ ব্যাখ্যা করে। "দীর্ঘমেয়াদী শেখা কোনো দৌড় না," ফয়সাল বলে। "এটা ধীর, সুখী এক হাঁটা।"',
    tip: "একটা নতুন শব্দ কাগজে বড় করে লিখে দেয়ালে লাগাও — ১ সপ্তাহ পর সেটা তোমার।",
  },

  "extra-u": {
    themeId: "extra-u",
    title: "কক্সবাজারে ঢেউয়ের ধৈর্য",
    titleEn: "Patience Beside the Waves",
    en: 'The massive sea gives Rafi a new perspective. Its overall pace is slow, but its power is huge. "The origin of every wave is far away," says the guide. This is a permanent lesson, not a temporary one. Rafi\'s notion of patience changes. He writes a neat outline in his diary: "Phase one — listen. Phase two — breathe." A motor boat passes in the distance. A mysterious light shines under the water — partly a fish, partly a small lamp. Rafi\'s mind is a small mess of ideas. Last night\'s nightmare fades in the sea air. "What is your means of travel home?" a stranger asks. "Bus," says Abba. The opening of a new small hotel is not a mass event — only a minor ceremony. Rafi is not opposed to spending the night. A short passage in his notebook records the day: "Waves = teachers."',
    bn: 'বিশাল সাগর রাফিকে নতুন এক দৃষ্টিভঙ্গি দেয়। এর সামগ্রিক গতি ধীর, কিন্তু শক্তি বিশাল ভর। "প্রতিটা ঢেউয়ের উৎস অনেক দূরে," গাইড বলেন। এটা এক স্থায়ী শিক্ষা, অস্থায়ী কিছু না। ধৈর্য নিয়ে রাফির ধারণা বদলায়। ডায়েরিতে সে পরিপাটি এক রূপরেখা লেখে: "পর্যায় এক — শোনো। পর্যায় দুই — শ্বাস নাও।" দূরে এক মোটর নৌকা যায়। পানির নিচে এক রহস্যময় আলো জ্বলে — আংশিকভাবে মাছ, আংশিকভাবে ছোট বাতি। রাফির মন এলোমেলো এক ভাবনার স্তূপ। গতরাতের দুঃস্বপ্ন সাগরের হাওয়ায় মিলিয়ে যায়। "বাড়ি ফেরার উপায় কী?" এক অপরিচিত জিজ্ঞেস করে। "বাস," আব্বা বলেন। নতুন ছোট এক হোটেলের উদ্বোধন কোনো ভর-অনুষ্ঠান না — শুধু ছোট গৌণ এক ছোট আয়োজন। রাফি রাত কাটানোর বিরোধী না। খাতায় ছোট এক উত্তরণ দিনের কথা লেখে: "ঢেউ = শিক্ষক।"',
    tip: "চোখ বন্ধ করে কল্পনায় সাগরের ঢেউ শোনো — ৩টা শব্দ ঢেউয়ের সাথে বলো।",
  },

  "extra-v": {
    themeId: "extra-v",
    title: "মাঠে আব্বার কথা",
    titleEn: "Abba Talks in the Field",
    en: 'A pile of rice bags rests at the edge of the pitch. Abba\'s popularity in the village is quiet but real. He does not pose for photos; he just works. "Praise the land, and it will feed you," he says. Amma is pregnant with the third child — a happy, careful preparation for the family. Her presence at home is strong; she guards her privacy well. Abba speaks slowly, with pure honesty. "There is proof that hard work pays. I propose we save a little more this year." The prospect of a good harvest is high. A neighbour who studied psychology — almost a village psychologist — visits sometimes. He explains that rapid growth is not always realistic. "A pure, slow rise is stronger." Rafi listens carefully. The rank of the family in the village grows, rapidly but softly. A crop-loss phenomenon last year taught them one clear lesson: save, save, save.',
    bn: 'মাঠের পাশে ধানের বস্তার এক স্তূপ। গ্রামে আব্বার জনপ্রিয়তা শান্ত, তবে সত্য। ছবির জন্য তিনি কোনো ভঙ্গি নেন না; শুধু কাজ করেন। "জমির প্রশংসা কর, ও তোমাকে খাওয়াবে," তিনি বলেন। আম্মা তৃতীয় সন্তানে গর্ভবতী — পরিবারের জন্য সুখী, সাবধানী এক প্রস্তুতি। ঘরে তাঁর উপস্থিতি শক্তিশালী; তিনি নিজের গোপনীয়তা রক্ষা করেন। আব্বা ধীরে কথা বলেন, বিশুদ্ধ সততায়। "পরিশ্রম কাজ করে — এর প্রমাণ আছে। এই বছর আরও একটু সঞ্চয়ের প্রস্তাব করি।" ভালো ফসলের সম্ভাবনা বেশি। মনোবিজ্ঞান পড়া এক প্রতিবেশী — প্রায় গ্রাম-মনোবিজ্ঞানী — মাঝে মাঝে আসেন। তিনি বোঝান দ্রুত বৃদ্ধি সবসময় বাস্তবসম্মত না। "বিশুদ্ধ, ধীর উত্থান বেশি শক্ত।" রাফি মন দিয়ে শোনে। গ্রামে পরিবারের স্থান দ্রুত বাড়ছে, তবে নরমভাবে। গত বছর ফসল-নষ্টের এক ঘটনা এক পরিষ্কার শিক্ষা দিয়েছে: সঞ্চয়, সঞ্চয়, সঞ্চয়।',
    tip: 'আজ পরিবারের কারো কাছ থেকে ১টা "পরিশ্রমের" গল্প শুনো — ৩টা ইংরেজি শব্দ বসাও।',
  },

  "extra-w": {
    themeId: "extra-w",
    title: "নামাজের পর আম্মার পাঠ",
    titleEn: "Amma's Reading After Prayer",
    en: 'After prayer, Amma opens the book. Her voice, soft and reasonable, fills the room. She reveals a small reduction in Rafi\'s mistakes this month — a real relief. "With regard to reading, sequence matters," she says. Their regional accent is a small challenge, but not a shame; every learner has one. "The requirement is honesty, not perfection." A rubber band holds their notes together. Amma is sensitive to Rafi\'s mood: after a hard day, she keeps the session short. "Do not resort to shame; use kindness." A shallow reading gives shallow memory, she warns. The sector of learning that hurts most is the boring one — grammar. But her scheme is simple: read, repeat, rest. "Settle down. Feel the word." Her small talk is highly relevant to daily life. Rafi listens with quiet self-respect. His reputation as a slow but steady learner is growing.',
    bn: 'নামাজের পর আম্মা বই খোলেন। তাঁর কণ্ঠ, নরম ও যুক্তিসঙ্গত, ঘর ভরে দেয়। এই মাসে রাফির ভুলের ছোট এক হ্রাস তিনি প্রকাশ করেন — আসল স্বস্তি। "পড়ার বিবেচনায় ক্রম গুরুত্বপূর্ণ," তিনি বলেন। তাদের আঞ্চলিক টান ছোট এক চ্যালেঞ্জ, তবে লজ্জা না; প্রতিটি শিক্ষার্থীর একটা থাকে। "প্রয়োজন হল সততা, নিখুঁততা না।" এক রবার ব্যান্ড তাদের নোট একসাথে ধরে রাখে। রাফির মেজাজে আম্মা সংবেদনশীল: কঠিন দিন গেলে অধিবেশন ছোট রাখেন। "লজ্জায় আশ্রয় নিও না; দয়া ব্যবহার কর।" অগভীর পড়া অগভীর স্মৃতি দেয়, তিনি সাবধান করেন। শেখার যে খাতটা সবচেয়ে কষ্টকর, সেটা বিরক্তিকর — ব্যাকরণ। তবু তাঁর পরিকল্পনা সহজ: পড়ো, বলো, বিশ্রাম নাও। "স্থিতি হও। শব্দটা অনুভব কর।" তাঁর ছোট কথা প্রতিদিনের জীবনে খুব প্রাসঙ্গিক। রাফি শান্ত আত্ম-সম্মানে শোনে। ধীর কিন্তু স্থির শিক্ষার্থী হিসেবে তার সুনাম বাড়ছে।',
    tip: "নামাজ/পড়াশোনার পর ৫ মিনিট জোরে ইংরেজি পড়ো — মন খোলা থাকে।",
  },

  "extra-x": {
    themeId: "extra-x",
    title: "ট্রেনে শব্দ-খেলা",
    titleEn: "Word Games on the Train",
    en: 'On the train, Rafi and Nadia play a sincere little game. Every station adds one new word. The steep slope of a hill flashes past the window; a stream flows beside the track. A specialist in trains — an old uncle — sits nearby. "The steel wheels and the rubber tube inside each tyre carry your whole trip," he says with slight pride. His status in the village is that of a quiet teacher. "A temporary sponsor gave the club these seats," he adds. Nadia\'s fingers are sticky from a mango; Rafi\'s neck is stiff from sleep. A small stock of biscuits sits in Amma\'s bag. "Submit your ticket at the next stop," the guard says. Rafi feels sympathy for a tired old man on the floor and offers his seat — a small transfer of kindness. "That is a nice trick," Nadia smiles. "Ultimately, kindness is the best English lesson."',
    bn: 'ট্রেনে রাফি ও নাদিয়া আন্তরিক এক ছোট খেলা খেলে। প্রতিটা স্টেশনে এক নতুন শব্দ যোগ হয়। জানালা দিয়ে এক পাহাড়ের খাড়া ঢাল সরে যায়; ট্র্যাকের পাশ দিয়ে এক ছোট প্রবাহ বয়ে যায়। ট্রেনের এক বিশেষজ্ঞ — এক বৃদ্ধ চাচা — কাছে বসেন। "ইস্পাত-এর চাকা আর প্রতিটা টায়ারের ভেতরের রবার-নল-ই তোমার পুরো ভ্রমণ বহন করে," সামান্য গর্বে তিনি বলেন। গ্রামে তাঁর মর্যাদা এক শান্ত শিক্ষকের মতো। "এক অস্থায়ী পৃষ্ঠপোষক ক্লাবকে এই আসনগুলো দিয়েছেন," যোগ করেন। নাদিয়ার আঙুল আম থেকে আঠালো; রাফির ঘাড় ঘুমে শক্ত। আম্মার ব্যাগে বিস্কুটের ছোট এক মজুত। "পরের স্টপে টিকিট জমা দাও," গার্ড বলেন। ক্লান্ত এক বুড়ো মানুষের প্রতি রাফির সহানুভূতি হয়, নিজের আসন ছেড়ে দেয় — দয়ার ছোট এক স্থানান্তর। "বাহ, দারুণ কৌশল," নাদিয়া হাসে। "অবশেষে দয়াই সেরা ইংরেজি পাঠ।"',
    tip: "আজ কারো জন্য এক ছোট দয়া কর — সেই মুহূর্তে ২টা ইংরেজি শব্দ মনে মনে বলো।",
  },

  "extra-y": {
    themeId: "extra-y",
    title: "শেষ ধাপ — অক্সফোর্ড ৩০০০ পূর্ণ",
    titleEn: "The Last Step — Oxford 3000 Complete",
    en: 'The last set of words feels unique. Rafi\'s vision is clear now: three thousand words, one small step at a time. A wise old teacher joins the celebration via a virtual video call from the city. "Urban and village learners share one zone of hope," he says. Amma laughs — she once thought English was only for the wealthy. "How widely wrong I was!" A visual chart on the wall shows Rafi\'s journey. Words like "underwear" for shopping, "unemployment" for the news, "unknown" for adventure — every word has a job. "Nothing is unnecessary here," says Abba. "Meaning may vary, but effort does not." The vast Oxford list, once a nightmare, is now a friend. It is unlikely Rafi will forget: he built each word with a story. The final venue of celebration is the roof — same place they started.',
    bn: 'শেষ সেটটা অনন্য মনে হয়। রাফির দৃষ্টি এখন স্পষ্ট: তিন হাজার শব্দ, একবারে ছোট এক পা। শহর থেকে এক জ্ঞানী বৃদ্ধ শিক্ষক আসল প্রায় ভিডিও কলের মাধ্যমে উদযাপনে যোগ দেন। "শহুরে ও গ্রামের শিক্ষার্থী এক আশার অঞ্চল ভাগ করে," তিনি বলেন। আম্মা হাসেন — এক সময় ভাবতেন ইংরেজি শুধু ধনী মানুষের। "কত ব্যাপকভাবে ভুল ছিলাম!" দেয়ালে এক চাক্ষুষ চার্ট রাফির যাত্রা দেখায়। কেনাকাটার জন্য "underwear" (অন্তর্বাস), খবরের জন্য "unemployment" (বেকারত্ব), অ্যাডভেঞ্চারের জন্য "unknown" (অজানা) — প্রতিটা শব্দের এক কাজ আছে। "এখানে কিছুই অপ্রয়োজনীয় না," আব্বা বলেন। "অর্থ পরিবর্তন হতে পারে, কিন্তু চেষ্টা না।" ব্যাপক অক্সফোর্ড তালিকা, এক সময় দুঃস্বপ্ন ছিল, এখন বন্ধু। রাফি এই শব্দগুলো ভুলবে — এটা অসম্ভব: প্রতিটা শব্দ সে গল্প দিয়ে গেঁথেছে। উদযাপনের শেষ ঘটনাস্থল সেই ছাদ — যেখানে শুরু হয়েছিল।',
    tip: 'নিজেকে বলো: "আমি ৩০০০ শব্দ পারি।" — আজ থেকে এটাই তোমার নতুন পরিচয়।',
  },
};
