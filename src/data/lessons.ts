export type Lesson = {
  slug: string;
  order: number;
  level: "a1" | "a2" | "b1" | "b2";
  title: string;
  titleEn: string;
  description: string;
  minutes: number;
  content: string; // markdown
};

export const LESSONS: Lesson[] = [
  {
    slug: "alphabet",
    order: 1,
    level: "a1",
    title: "ইংরেজি বর্ণমালা (Alphabet)",
    titleEn: "The English Alphabet",
    description: "২৬টি অক্ষর, তাদের নাম এবং উচ্চারণ — একদম শুরু।",
    minutes: 10,
    content: `## English Alphabet কী?

ইংরেজি ভাষায় মোট **২৬টি অক্ষর (letters)** আছে। এগুলোকে **A B C** বা **Alphabet** বলা হয়।

প্রতিটা অক্ষরের দুইটা রূপ আছে:
- **Capital letter** (বড় হাতের): A, B, C
- **Small letter** (ছোট হাতের): a, b, c

## সব অক্ষরের বাংলা উচ্চারণ

| Capital | Small | বাংলা উচ্চারণ |
|---|---|---|
| A | a | এ |
| B | b | বি |
| C | c | সি |
| D | d | ডি |
| E | e | ই |
| F | f | এফ্‌ |
| G | g | জি |
| H | h | এইচ্‌ |
| I | i | আই |
| J | j | জে |
| K | k | কে |
| L | l | এল্‌ |
| M | m | এম্‌ |
| N | n | এন্‌ |
| O | o | ও |
| P | p | পি |
| Q | q | কিউ |
| R | r | আর্‌ |
| S | s | এস্‌ |
| T | t | টি |
| U | u | ইউ |
| V | v | ভি |
| W | w | ডাব্‌লিউ |
| X | x | এক্‌স্‌ |
| Y | y | ওয়াই |
| Z | z | জেড্‌ (আমেরিকায়: জি) |

## Vowel এবং Consonant

- **Vowel (স্বরবর্ণ)** — মাত্র ৫টা: **A, E, I, O, U**
- **Consonant (ব্যঞ্জনবর্ণ)** — বাকি ২১টা।

*(কখনো কখনো Y-ও vowel হিসেবে কাজ করে — যেমন "sky" শব্দে।)*

## Homework 📝
১. একটা কাগজে ২৬টা অক্ষর Capital ও Small দুইরূপে ৩ বার লেখো।
২. জোরে জোরে উচ্চারণ করো A থেকে Z পর্যন্ত।
৩. AI-কে জিজ্ঞেস করো: "আমার alphabet মুখস্থ হয়ে গেছে, পরের ধাপ কী?"`,
  },
  {
    slug: "numbers",
    order: 2,
    level: "a1",
    title: "সংখ্যা (Numbers)",
    titleEn: "Numbers 1–100",
    description: "১ থেকে ১০০ পর্যন্ত ইংরেজি সংখ্যা বলা, লেখা, চেনা।",
    minutes: 12,
    content: `## ১ থেকে ১০ (মুখস্থ করো প্রথমে)

| সংখ্যা | English | উচ্চারণ |
|---|---|---|
| 1 | one | ওয়ান |
| 2 | two | টু |
| 3 | three | থ্রি |
| 4 | four | ফোর |
| 5 | five | ফাইভ |
| 6 | six | সিক্‌স্‌ |
| 7 | seven | সেভেন |
| 8 | eight | এইট |
| 9 | nine | নাইন |
| 10 | ten | টেন |

## ১১ থেকে ২০

11 — eleven (ইলেভেন), 12 — twelve (টুয়েল্‌ভ), 13 — thirteen, 14 — fourteen, 15 — fifteen, 16 — sixteen, 17 — seventeen, 18 — eighteen, 19 — nineteen, 20 — twenty।

**লক্ষ্য করো:** 13 থেকে 19 পর্যন্ত প্রায় সব শব্দে শেষে **-teen** যোগ হয়।

## দশকে দশকে (২০, ৩০, ৪০...)

- 20 — twenty (টুয়েন্‌টি)
- 30 — thirty (থার্‌টি)
- 40 — forty (ফোর্‌টি) ⚠️ "u" নেই!
- 50 — fifty (ফিফ্‌টি)
- 60 — sixty
- 70 — seventy
- 80 — eighty
- 90 — ninety
- 100 — one hundred (ওয়ান হানড্রেড)

## মাঝের সংখ্যা কিভাবে বলবে

দশক + একক এভাবে জোড়া লাগে:
- 21 = twenty-one (২০ + ১)
- 35 = thirty-five (৩০ + ৫)
- 78 = seventy-eight (৭০ + ৮)

## Practice 🎯
তুমি ইংরেজিতে বলো:
১. তোমার বয়স
২. আজকের তারিখ
৩. তোমার মোবাইল নম্বরের প্রথম ৩টা digit

## Homework 📝
AI-কে বলো: "আমাকে ১-৫০ পর্যন্ত quiz দাও।"`,
  },
  {
    slug: "pronouns",
    order: 3,
    level: "a1",
    title: "সর্বনাম (Pronouns)",
    titleEn: "Pronouns — I, You, He, She...",
    description: "মানুষের নামের বদলে যেসব শব্দ বসে — সবচেয়ে জরুরি বেসিক।",
    minutes: 8,
    content: `## Pronoun কী?

**Noun (নাম)**-এর পরিবর্তে যে শব্দ বসে, তাকে **Pronoun** বলে।

উদাহরণ: "Rahim is a student. **He** is smart." — এখানে "He" মানে Rahim।

## Personal Pronouns — শিখতেই হবে

| Pronoun | বাংলা | ব্যবহার |
|---|---|---|
| **I** (আই) | আমি | নিজে |
| **We** (উই) | আমরা | নিজেরা |
| **You** (ইউ) | তুমি / তোমরা / আপনি | যাকে বলছি |
| **He** (হি) | সে (পুরুষ) | একজন ছেলে/পুরুষ |
| **She** (শি) | সে (মহিলা) | একজন মেয়ে/মহিলা |
| **It** (ইট) | এটা / সেটা | বস্তু/প্রাণী |
| **They** (দে) | তারা | একাধিক মানুষ বা বস্তু |

## উদাহরণ বাক্য

- **I** am a student. — আমি একজন ছাত্র।
- **You** are my friend. — তুমি আমার বন্ধু।
- **He** is my brother. — সে আমার ভাই।
- **She** is my sister. — সে আমার বোন।
- **It** is a book. — এটা একটা বই।
- **We** are happy. — আমরা খুশি।
- **They** are teachers. — তারা শিক্ষক।

## মনে রাখার সহজ ছড়া

> I, We — আমি, আমরা
> You — তুমি বা তোমরা
> He, She — সে (ছেলে/মেয়ে)
> It — বস্তু বা প্রাণী নিয়ে
> They — তারা সবাই মিলে!

## Practice 🎯
নিচের বাংলা বাক্যগুলো ইংরেজিতে বলো:
১. আমি ভালো আছি।
২. সে (মেয়ে) সুন্দর।
৩. তারা আমার বন্ধু।
৪. এটা একটা কলম।`,
  },
  {
    slug: "to-be-verb",
    order: 4,
    level: "a1",
    title: "am, is, are — Verb 'to be'",
    titleEn: "The Verb 'to be'",
    description: "ইংরেজির সবচেয়ে গুরুত্বপূর্ণ verb — কখন am, কখন is, কখন are।",
    minutes: 10,
    content: `## 'to be' কী?

**Am / Is / Are** — এই তিনটা শব্দ আসলে একই verb-এর তিন রূপ। বাংলায় এদের অর্থ **"হয়/আছি/আছে"**।

## কোনটা কখন?

| Pronoun | Verb | উদাহরণ |
|---|---|---|
| I | **am** | I **am** happy. (আমি খুশি) |
| He / She / It | **is** | She **is** a doctor. (সে ডাক্তার) |
| We / You / They | **are** | They **are** students. (তারা ছাত্র) |

## Short forms (সংক্ষিপ্ত রূপ)

কথ্য ভাষায় এভাবে ছোট করে বলা হয়:
- I am → **I'm**
- He is → **He's**
- She is → **She's**
- It is → **It's**
- We are → **We're**
- You are → **You're**
- They are → **They're**

## Negative (না-বাচক)

**not** যোগ করলেই না-বাচক হয়:
- I am **not** hungry. (আমি ক্ষুধার্ত নই)
- She is **not** at home. → She **isn't** at home.
- They are **not** ready. → They **aren't** ready.

## Question (প্রশ্ন)

Am/Is/Are সামনে আনো:
- **Are** you okay? — তুমি ঠিক আছো?
- **Is** he your brother? — সে কি তোমার ভাই?
- **Am** I late? — আমি কি দেরি করেছি?

## Practice 🎯
ইংরেজিতে বলো:
১. আমি একজন ছাত্র।
২. সে আমার মা।
৩. তারা কি বাংলাদেশি?
৪. আমরা খুশি নই।`,
  },
  {
    slug: "basic-sentences",
    order: 5,
    level: "a1",
    title: "সহজ বাক্য গঠন (Subject + Verb + Object)",
    titleEn: "Simple Sentence Structure",
    description: "ইংরেজি বাক্যের মূল কাঠামো — SVO।",
    minutes: 12,
    content: `## ইংরেজি বাক্যের ফর্মুলা

প্রায় সব ইংরেজি বাক্য এই ৩ ভাগে বিভক্ত:

> **Subject + Verb + Object**
> (কে) + (কী করে) + (কাকে/কী)

## উদাহরণ

| Subject | Verb | Object | বাংলা |
|---|---|---|---|
| I | eat | rice. | আমি ভাত খাই। |
| He | reads | books. | সে বই পড়ে। |
| She | loves | music. | সে গান ভালোবাসে। |
| We | play | cricket. | আমরা ক্রিকেট খেলি। |
| They | drink | water. | তারা পানি পান করে। |

## গুরুত্বপূর্ণ নিয়ম

বাংলায় Verb বাক্যের **শেষে** আসে, কিন্তু ইংরেজিতে Verb **মাঝে** আসে।

- ❌ বাংলা ধরন: "আমি ভাত খাই" → *I rice eat.*
- ✅ ইংরেজি ধরন: **I eat rice.**

## He/She/It-এর সাথে verb-এ 's' যোগ

Present tense-এ **He, She, It** থাকলে verb-এর শেষে **-s** যোগ হয়:

- I **eat** rice. ✅
- He **eats** rice. ✅ (eat + s)
- She **plays** cricket. ✅
- It **runs** fast. ✅

## Practice 🎯
নিচের বাংলাগুলো Subject-Verb-Object ফর্মুলায় ইংরেজি করো:

১. আমি চা পান করি। (I / drink / tea)
২. সে ফুটবল খেলে।
৩. আমরা স্কুলে যাই।
৪. তারা ছবি দেখে।

## Homework 📝
AI-কে বলো: "আমাকে ৫টা বাক্য দাও, আমি বাংলা থেকে ইংরেজি করব।"`,
  },
  {
    slug: "family",
    order: 6,
    level: "a1",
    title: "পরিবারের সদস্য (Family)",
    titleEn: "Family Members",
    description: "মা, বাবা, ভাই, বোন — সবার ইংরেজি নাম।",
    minutes: 8,
    content: `## Family Words

| বাংলা | English | উচ্চারণ |
|---|---|---|
| মা | mother / mom | মাদার / মম |
| বাবা | father / dad | ফাদার / ড্যাড |
| ভাই | brother | ব্রাদার |
| বোন | sister | সিস্টার |
| ছেলে | son | সান |
| মেয়ে | daughter | ডটার |
| স্বামী | husband | হাজব্যান্ড |
| স্ত্রী | wife | ওয়াইফ |
| দাদা/নানা | grandfather | গ্র্যান্ডফাদার |
| দাদি/নানি | grandmother | গ্র্যান্ডমাদার |
| চাচা/মামা | uncle | আঙ্কল |
| চাচি/খালা | aunt | আন্ট |
| কাজিন | cousin | কাজিন |
| শিশু | child (একবচন) / children (বহুবচন) | চাইল্ড / চিলড্রেন |
| আত্মীয় | relative | রিলেটিভ |
| পরিবার | family | ফ্যামিলি |

## উদাহরণ বাক্য

- This is my **mother**. — এটি আমার মা।
- I have two **brothers** and one **sister**. — আমার দুই ভাই ও এক বোন আছে।
- My **father** is a farmer. — আমার বাবা একজন কৃষক।
- She is my **daughter**. — সে আমার মেয়ে।
- We are a happy **family**. — আমরা একটি সুখী পরিবার।

## Practice 🎯
তোমার পরিবারের ৩ জন সদস্য সম্পর্কে ইংরেজিতে ১টা করে বাক্য বলো।

উদাহরণ: "My mother's name is Ayesha. She is a teacher."`,
  },
  {
    slug: "colors",
    order: 7,
    level: "a1",
    title: "রঙ (Colors)",
    titleEn: "Colors",
    description: "সাধারণ রঙগুলোর ইংরেজি নাম।",
    minutes: 6,
    content: `## Colors

| রঙ | English | উচ্চারণ |
|---|---|---|
| লাল | red | রেড |
| নীল | blue | ব্লু |
| সবুজ | green | গ্রিন |
| হলুদ | yellow | ইয়েলো |
| কালো | black | ব্ল্যাক |
| সাদা | white | ওয়াইট |
| কমলা | orange | অরেঞ্জ |
| গোলাপি | pink | পিঙ্ক |
| বাদামি | brown | ব্রাউন |
| ধূসর | grey / gray | গ্রে |
| বেগুনি | purple | পার্পল |
| সোনালি | golden | গোল্ডেন |
| রুপালি | silver | সিলভার |

## উদাহরণ

- The sky is **blue**. — আকাশ নীল।
- I like **red** apples. — আমি লাল আপেল পছন্দ করি।
- Her dress is **pink**. — তার জামা গোলাপি।
- My favourite colour is **green**. — আমার প্রিয় রঙ সবুজ।

## Practice 🎯
তুমি যে যে রঙের পোশাক পরেছ, সবগুলো ইংরেজিতে বলো।`,
  },
  {
    slug: "days-months",
    order: 8,
    level: "a1",
    title: "দিন ও মাস (Days & Months)",
    titleEn: "Days of the Week & Months",
    description: "সপ্তাহের ৭ দিন ও বছরের ১২ মাস।",
    minutes: 8,
    content: `## সপ্তাহের ৭ দিন (Days of the Week)

| English | উচ্চারণ | বাংলা |
|---|---|---|
| Sunday | সানডে | রবিবার |
| Monday | মানডে | সোমবার |
| Tuesday | টিউজডে | মঙ্গলবার |
| Wednesday | ওয়েনজডে | বুধবার |
| Thursday | থার্সডে | বৃহস্পতিবার |
| Friday | ফ্রাইডে | শুক্রবার |
| Saturday | স্যাটারডে | শনিবার |

## বছরের ১২ মাস (Months)

| English | উচ্চারণ | বাংলা মাস (আন্দাজ) |
|---|---|---|
| January | জানুয়ারি | জানুয়ারি |
| February | ফেব্রুয়ারি | ফেব্রুয়ারি |
| March | মার্চ | মার্চ |
| April | এপ্রিল | এপ্রিল |
| May | মে | মে |
| June | জুন | জুন |
| July | জুলাই | জুলাই |
| August | অগাস্ট | আগস্ট |
| September | সেপ্টেম্বর | সেপ্টেম্বর |
| October | অক্টোবর | অক্টোবর |
| November | নভেম্বর | নভেম্বর |
| December | ডিসেম্বর | ডিসেম্বর |

## উদাহরণ বাক্য

- Today is **Monday**. — আজ সোমবার।
- My birthday is in **May**. — আমার জন্মদিন মে মাসে।
- We have a holiday on **Friday**. — শুক্রবার আমাদের ছুটি।

## Practice 🎯
১. আজ কী বার? ইংরেজিতে উত্তর দাও।
২. তুমি কোন মাসে জন্মেছ? "I was born in ..." দিয়ে বলো।`,
  },
  {
    slug: "present-simple",
    order: 9,
    level: "a2",
    title: "Present Simple Tense",
    titleEn: "Present Simple Tense",
    description: "বর্তমান কালের সবচেয়ে সাধারণ ফর্ম — অভ্যাস ও সাধারণ সত্য।",
    minutes: 15,
    content: `## Present Simple কখন ব্যবহার হয়?

১. **অভ্যাস (habits):** *I drink tea every morning.*
২. **সাধারণ সত্য (facts):** *The sun rises in the east.*
৩. **ভাললাগা/না-লাগা:** *She likes music.*

## গঠন (Structure)

| Subject | Verb form |
|---|---|
| I / You / We / They | **base verb** (eat, play, go) |
| He / She / It | **base verb + s/es** (eats, plays, goes) |

### উদাহরণ

- I **play** football.
- You **read** books.
- We **live** in Dhaka.
- They **speak** Bangla.
- He **plays** football. *(play + s)*
- She **reads** books. *(read + s)*
- It **runs** fast. *(run + s)*

## Negative (নেতিবাচক)

সাহায্যকারী verb **do / does** + **not** + মূল verb:

- I **do not (don't)** eat meat.
- She **does not (doesn't)** like coffee.
- They **don't** play cricket.

## Question (প্রশ্ন)

শুরুতে **Do / Does**:

- **Do** you speak English? — Yes, I do. / No, I don't.
- **Does** he live here? — Yes, he does. / No, he doesn't.

## গুরুত্বপূর্ণ Time expressions

always, usually, often, sometimes, never, every day, on Mondays...

উদাহরণ: *I **always** wake up at 6 AM.*

## Practice 🎯
ইংরেজিতে বলো:
১. আমি প্রতিদিন স্কুলে যাই।
২. সে ভাত খায় না।
৩. তুমি কি চা পান কর?
৪. তারা ফুটবল খেলে।`,
  },
  {
    slug: "past-simple",
    order: 10,
    level: "a2",
    title: "Past Simple Tense",
    titleEn: "Past Simple Tense",
    description: "যা ঘটে গেছে — অতীতের কথা বলার ফর্ম।",
    minutes: 15,
    content: `## Past Simple কখন?

অতীতে সম্পন্ন কাজ বোঝাতে:
- *I **went** to school yesterday.* — আমি গতকাল স্কুলে গিয়েছিলাম।
- *She **cooked** dinner last night.*

## গঠন

**Regular verbs:** verb + **-ed**
- play → **played**
- work → **worked**
- watch → **watched**
- study → **studied** (y → i + ed)

**Irregular verbs:** মুখস্থ করতে হয়। সবচেয়ে দরকারিগুলো:

| Present | Past | বাংলা |
|---|---|---|
| go | went | যাওয়া |
| come | came | আসা |
| eat | ate | খাওয়া |
| drink | drank | পান করা |
| see | saw | দেখা |
| do | did | করা |
| have | had | রাখা/থাকা |
| make | made | বানানো |
| take | took | নেওয়া |
| give | gave | দেওয়া |
| say | said | বলা |
| get | got | পাওয়া |
| write | wrote | লেখা |
| read | read (উচ্চারণ: "রেড") | পড়া |
| buy | bought | কেনা |
| think | thought | ভাবা |
| know | knew | জানা |
| find | found | খুঁজে পাওয়া |
| tell | told | বলা |
| feel | felt | অনুভব করা |

## Negative

**did not (didn't)** + মূল verb (base form, past নয়):
- I **didn't go** to school. ✅
- I ~~didn't went~~. ❌

## Question

**Did** + subject + মূল verb:
- **Did** you eat rice? — Yes, I did. / No, I didn't.
- **Did** she come? — Yes, she did.

## Time expressions
yesterday, last week, last year, ago, in 2020...

উদাহরণ: *I met him **two days ago**.*

## Practice 🎯
ইংরেজিতে বলো:
১. আমি গতকাল একটা বই পড়েছি।
২. সে গত সপ্তাহে ঢাকা গিয়েছিল।
৩. তুমি কি সকালে নাশতা করেছ?
৪. তারা গতরাতে খেলেনি।`,
  },
  {
    slug: "questions-wh",
    order: 11,
    level: "a2",
    title: "Wh-Questions (কে, কী, কোথায়, কেন...)",
    titleEn: "Wh-Questions",
    description: "প্রশ্ন করার সবচেয়ে দরকারি ৭টা শব্দ।",
    minutes: 10,
    content: `## ৭টা Wh-Words

| Word | উচ্চারণ | বাংলা |
|---|---|---|
| What | ওয়াট | কী |
| Who | হু | কে |
| Where | ওয়্যার | কোথায় |
| When | হোয়েন | কখন |
| Why | হোয়াই | কেন |
| Which | হুইচ | কোনটি |
| How | হাউ | কীভাবে |

## গঠন

**Wh-word + auxiliary verb + subject + main verb?**

উদাহরণ:
- **What** is your name? — তোমার নাম কী?
- **Who** is that man? — ওই লোকটা কে?
- **Where** do you live? — তুমি কোথায় থাকো?
- **When** does the class start? — ক্লাস কখন শুরু হয়?
- **Why** are you sad? — তুমি দুঃখী কেন?
- **Which** book is yours? — কোন বইটা তোমার?
- **How** are you? — তুমি কেমন আছো?

## How-এর অন্যান্য রূপ

- **How much** — কতটুকু / কত (দাম/অগণিত জিনিস)
  - *How much is this?* — এটার দাম কত?
- **How many** — কতগুলো (গণনাযোগ্য জিনিস)
  - *How many brothers do you have?*
- **How old** — কত বছর বয়স
  - *How old are you?*
- **How long** — কতক্ষণ / কতদিন
  - *How long have you been here?*

## Practice 🎯
নিচের উত্তরের জন্য উপযুক্ত Wh-প্রশ্ন বানাও:
১. উত্তর: "My name is Karim." → প্রশ্ন?
২. উত্তর: "I live in Dhaka." → প্রশ্ন?
৩. উত্তর: "I am 25 years old." → প্রশ্ন?`,
  },
  {
    slug: "daily-phrases",
    order: 12,
    level: "a2",
    title: "দৈনন্দিন কথাবার্তা (Daily Phrases)",
    titleEn: "Daily Conversation Phrases",
    description: "যা তুমি প্রতিদিন কারো সাথে বলবে — মুখস্থ করে ফেলো।",
    minutes: 12,
    content: `## অভিবাদন (Greetings)

- **Hello / Hi** — হ্যালো / হাই
- **Good morning.** — সুপ্রভাত।
- **Good afternoon.** — শুভ অপরাহ্ণ।
- **Good evening.** — শুভ সন্ধ্যা।
- **Good night.** — শুভ রাত্রি।
- **Assalamu Alaikum** → উত্তর: **Wa Alaikum Assalam**

## পরিচয় (Introductions)

- **What's your name?** — তোমার নাম কী?
  - *My name is Rahim.*
- **Nice to meet you.** — তোমার সাথে পরিচিত হয়ে ভালো লাগলো।
- **Where are you from?** — তুমি কোথা থেকে এসেছ?
  - *I'm from Bangladesh.*
- **How old are you?** — তোমার বয়স কত?

## ভদ্রতা (Politeness)

- **Please** — দয়া করে
- **Thank you.** — ধন্যবাদ।
- **You're welcome.** — স্বাগতম / আমার সৌভাগ্য।
- **Excuse me.** — মাফ করবেন / একটু শুনবেন?
- **Sorry.** — দুঃখিত।
- **No problem.** — সমস্যা নেই।

## কেনাকাটা (Shopping)

- **How much is this?** — এটার দাম কত?
- **It's too expensive.** — এটা অনেক দামি।
- **Do you have a smaller size?** — ছোট সাইজ আছে?
- **I'll take this one.** — আমি এটা নেব।

## রাস্তা জিজ্ঞেস করা

- **Excuse me, where is the bank?**
- **How do I get to the airport?**
- **Is it far from here?**
- **Turn left / right.** — বামে / ডানে ঘোরো।
- **Go straight.** — সোজা যাও।

## জরুরি (Emergency)

- **Help!** — সাহায্য!
- **Call the police.** — পুলিশ ডাকো।
- **I need a doctor.** — আমার একজন ডাক্তার দরকার।
- **I don't understand.** — আমি বুঝি না।
- **Could you speak slowly, please?** — একটু আস্তে বলবেন?

## Homework 📝
আজ কাউকে ইংরেজিতে "Good morning, how are you?" বলো এবং তার উত্তরের অপেক্ষা করো। AI-কে পরে গল্পটা বলো!`,
  },
];

export const LESSONS_BY_SLUG = Object.fromEntries(LESSONS.map((l) => [l.slug, l]));
