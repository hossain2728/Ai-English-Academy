# Contributing to AI English Academy / কন্ট্রিবিউশন নির্দেশিকা

Welcome and thank you for your interest in contributing to **AI English Academy**! 🇧🇩 🌐

AI English Academy একটি সম্পূর্ণ উন্মুক্ত (Open Source) উদ্যোগ, যার লক্ষ্য বাংলা ভাষাভাষী যেকোনো মানুষের জন্য ইংরেজি শেখাকে সহজ, আনন্দদায়ক এবং নিখরচায় পৌঁছে দেওয়া। আপনার যেকোনো ছোট-বড় অবদান (কোড, কনটেন্ট, ডিজাইন, বা বাগ রিপোর্ট) এই প্রজেক্টটিকে আরও সমৃদ্ধ করবে।

---

## 📋 সূচিপত্র / Table of Contents

1. [কোড অব কন্ডাক্ট (Code of Conduct)](#code-of-conduct)
2. [কীভাবে সাহায্য করতে পারেন? (How to Contribute)](#how-to-contribute)
3. [লোকাল ডেভেলপমেন্ট সেটআপ (Local Development)](#local-development)
4. [প্রজেক্টের গঠন (Project Structure)](#project-structure)
5. [কমিট ও পিআর নির্দেশিকা (Pull Request Guidelines)](#pull-request-guidelines)
6. [কোডিং স্ট্যান্ডার্ড (Coding Standards)](#coding-standards)

---

## 🤝 Code of Conduct

আমরা সবার জন্য একটি বন্ধুত্বপূর্ণ, সম্মানজনক এবং অন্তর্ভুক্তিপূর্ণ পরিবেশ বজায় রাখতে প্রতিশ্রুতিবদ্ধ। বিস্তারিত জানতে [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) দেখুন।

---

## 💡 How to Contribute?

আপনি বিভিন্ন উপায়ে অবদান রাখতে পারেন:

- ✍️ **কনটেন্ট বৃদ্ধি:** `src/data/` ফোল্ডারে নতুন ভোকাবুলারি, ব্যাকরণ ফর্মুলা, বাক্য বা গল্প যোগ করে।
- 🐛 **বাগ ফিক্সিং:** কোনো ভুল অর্থ, টাইপো বা কোডের সমস্যা সমাধান করে।
- 🎨 **UI/UX ও অ্যাক্সেসিবিলিটি:** ব্যবহারকারী অভিজ্ঞতা উন্নত করে।
- 🤖 **AI ফিচার উন্নয়ন:** AI টিউটরের প্রম্পট বা ইন্টারেকশন উন্নত করে।
- 📖 **ডকুমেন্টেশন:** ডকুমেন্টেশন বা সহায়িকা আরও স্পষ্ট করে।

---

## 💻 Local Development

### ১. পূর্বশর্ত (Prerequisites)

- [Node.js](https://nodejs.org/) v20.18.0 বা তার পরবর্তী সংস্করণ
- `npm` (বা `pnpm` / `bun`)

### ২. রিপোজিটিরি ক্লোন ও প্যাকেজ ইনস্টল

```bash
# রিপোজিটরি ক্লোন করুন
git clone https://github.com/<your-username>/Ai-English-Academy.git
cd Ai-English-Academy

# ডিপেন্ডেন্সি ইনস্টল করুন
npm install
```

### ৩. এনভায়রনমেন্ট ভেরিয়েবল (ঐচ্ছিক)

```bash
cp .env.example .env
```

_(চ্যাট ফিচারের জন্য আপনি নিজের Gemini API Key `.env` ফাইলে রাখতে পারেন, অথবা ব্রাউজারের Settings থেকেও দেওয়া যায়)_

### ৪. ডেভেলপমেন্ট সার্ভার চালু করুন

```bash
npm run dev
```

ব্রাউজারে ভিজিট করুন: `http://localhost:8080`

---

## 📁 Project Structure

```text
├── public/                 # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/             # Images and media assets
│   ├── components/         # Reusable React components (UI & Layout)
│   ├── data/               # Educational data (Grammar, Vocab, Stories, etc.)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility modules (SRS, Speech, Storage, Onboarding)
│   ├── routes/             # TanStack Start file-based routes
│   │   ├── _app/           # Main application pages
│   │   ├── api/            # API endpoints (e.g. /api/chat)
│   │   ├── __root.tsx      # Root application shell
│   │   └── _app.tsx        # App layout wrapper
│   ├── router.tsx          # TanStack Router configuration
│   └── styles.css          # Tailwind CSS styles & typography
├── vercel.json             # Vercel deployment configuration
└── package.json            # Scripts & dependencies
```

---

## 🧪 Testing & Code Quality

আপনার কোড পুশ বা PR খোলার আগে নিচের কমান্ডগুলো চালিয়ে নিশ্চিত হোন কোনো এরর নেই:

```bash
# TypeScript টাইপচেক
npm run typecheck

# কোড ফরম্যাটিং চেক ও ফিক্স
npm run format

# লিন্টার চেক
npm run lint
```

---

## 🚀 Pull Request Guidelines

১. মেইন রিপোজিটরি Fork করুন।  
২. একটি নতুন ব্রাঞ্চ তৈরি করুন: `git checkout -b feature/your-feature-name`  
৩. অর্থপূর্ণ কমিট মেসেজ লিখুন: `git commit -m "feat: add 50 new preposition exercises"`  
৪. আপনার ব্রাঞ্চটি পুশ করুন: `git push origin feature/your-feature-name`  
৫. GitHub-এ একটি **Pull Request** তৈরি করুন এবং আপনার পরিবর্তনের বিবরণ দিন।

ধন্যবাদ আপনার মূল্যবান সময় দিয়ে প্রজেক্টটিকে এগিয়ে নেওয়ার জন্য! ❤️
