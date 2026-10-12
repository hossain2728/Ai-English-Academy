import { createFileRoute } from "@tanstack/react-router";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

const SYSTEM_PROMPT = `তুমি "AI" নামে একজন অত্যন্ত অভিজ্ঞ, ধৈর্যশীল এবং প্রফেশনাল ইংরেজি শিক্ষক। তোমার ছাত্র বাংলাভাষী এবং সে হয়তো একদম শূন্য (zero) থেকে শুরু করছে — এমনকি A B C ও নাও চিনতে পারে।

## তোমার মিশন
ছাত্রকে একদম শিশুর মতো ধরে ধরে ইংরেজি শেখানো — Speaking, Listening, Reading, Writing — চারটা skill-এই। শেষমেষ সে যেন প্রফেশনাল লেভেলে ইংরেজি বলতে, বুঝতে ও লিখতে পারে।

## শেখানোর নিয়ম
1. **সবসময় বাংলায় ব্যাখ্যা করবে** যতক্ষণ না ছাত্র নিজে থেকে ইংরেজিতে ব্যাখ্যা চায়। ইংরেজি শব্দ/বাক্যের পাশে বাংলা অর্থ ও উচ্চারণ (বাংলা হরফে) দেবে।
2. **একবারে অল্প শেখাও।** একটা মেসেজে ৩-৫টার বেশি নতুন শব্দ বা একটা concept-এর বেশি দেবে না।
3. **সবসময় ছোট practice/exercise দাও।**
4. **ছাত্রের উত্তর যাচাই করো**, ভুল হলে মিষ্টি করে ধরিয়ে দাও।
5. **Markdown ব্যবহার করো** — headings, lists, **bold**।
6. **কড়া কিন্তু বন্ধুসুলভ teacher mode**, ছাত্রকে "তুমি" সম্বোধন।

এখন শুরু করো।`;

type ChatRequestBody = { messages?: unknown; apiKey?: unknown };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages, apiKey } = (await request.json()) as ChatRequestBody;
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const effectiveKey =
          typeof apiKey === "string" && apiKey.trim()
            ? apiKey.trim()
            : process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY || "";

        if (!effectiveKey) {
          return new Response(
            "MISSING_API_KEY: প্রথমে Settings-এ গিয়ে Google Gemini API key যোগ করো।",
            { status: 401 },
          );
        }

        const gemini = createOpenAICompatible({
          name: "google-gemini",
          baseURL: "https://generativelanguage.googleapis.com/v1beta/openai",
          headers: {
            Authorization: `Bearer ${effectiveKey}`,
          },
        });
        const model = gemini("gemini-2.5-flash");

        try {
          const result = streamText({
            model,
            system: SYSTEM_PROMPT,
            messages: await convertToModelMessages(messages as UIMessage[]),
          });

          return result.toUIMessageStreamResponse({
            originalMessages: messages as UIMessage[],
          });
        } catch (error) {
          console.error("chat stream error", error);
          const msg = error instanceof Error ? error.message : "AI request failed";
          const isLimit = /quota|rate.?limit|429/i.test(msg);
          return new Response(
            isLimit
              ? "RATE_LIMIT: Google Gemini-এর ফ্রি লিমিট শেষ। কিছুক্ষণ পরে চেষ্টা করো, অথবা Settings-এ গিয়ে অন্য একটা key দাও।"
              : `AI request failed: ${msg}`,
            { status: isLimit ? 429 : 500 },
          );
        }
      },
    },
  },
});
