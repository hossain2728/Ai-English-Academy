import { createFileRoute, Link, useNavigate, useParams } from "@tanstack/react-router";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useMemo, useRef, useState } from "react";
import { Plus, Trash2, BookOpen, Send, KeyRound, Settings as SettingsIcon } from "lucide-react";
import { getBYOK } from "@/lib/settings";

import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputSubmit,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Button } from "@/components/ui/button";
import {
  loadThreads,
  saveThreads,
  upsertThread,
  deleteThread as removeThread,
  newThreadId,
  deriveTitle,
  type Thread,
} from "@/lib/threads";
import logo from "@/assets/tutor-logo.png";

export const Route = createFileRoute("/_app/chat/$threadId")({
  head: () => ({
    meta: [
      { title: "AI — শূন্য থেকে ইংরেজি শিখুন" },
      {
        name: "description",
        content:
          "AI — বাংলায় ব্যাখ্যা করে একদম শূন্য থেকে প্রফেশনাল লেভেল পর্যন্ত ইংরেজি শেখানোর AI টিচার। সম্পূর্ণ ফ্রি।",
      },
      { property: "og:title", content: "AI — শূন্য থেকে ইংরেজি শিখুন" },
      {
        property: "og:description",
        content:
          "বাংলাভাষীদের জন্য ধাপে ধাপে ইংরেজি শেখার AI শিক্ষক। কথা বলা, বোঝা ও লেখা — চারটাই।",
      },
    ],
  }),
  component: ChatPage,
});

function ChatPage() {
  const { threadId } = useParams({ from: "/_app/chat/$threadId" });
  const navigate = useNavigate();

  const [threads, setThreads] = useState<Thread[]>([]);
  const [bootstrapped, setBootstrapped] = useState(false);

  // Idempotent bootstrap: load threads, ensure current thread exists.
  useEffect(() => {
    const list = loadThreads();
    const exists = list.some((t) => t.id === threadId);
    if (!exists) {
      const created: Thread = {
        id: threadId,
        title: "নতুন পাঠ",
        updatedAt: Date.now(),
        messages: [],
      };
      list.unshift(created);
      saveThreads(list);
    }
    setThreads(list);
    setBootstrapped(true);
  }, [threadId]);

  const activeThread = useMemo(() => threads.find((t) => t.id === threadId), [threads, threadId]);

  const initialMessages: UIMessage[] = activeThread?.messages ?? [];

  return (
    <div className="flex h-screen w-full bg-background text-foreground">
      <Sidebar
        threads={threads}
        activeId={threadId}
        onNew={() => {
          const id = newThreadId();
          const created: Thread = {
            id,
            title: "নতুন পাঠ",
            updatedAt: Date.now(),
            messages: [],
          };
          const next = [created, ...threads];
          saveThreads(next);
          setThreads(next);
          navigate({ to: "/chat/$threadId", params: { threadId: id } });
        }}
        onDelete={(id) => {
          const remaining = removeThread(id);
          setThreads(remaining);
          if (id === threadId) {
            const nextId = remaining[0]?.id ?? newThreadId();
            navigate({ to: "/chat/$threadId", params: { threadId: nextId } });
          }
        }}
      />
      <main className="flex-1 flex flex-col min-w-0">
        {bootstrapped && (
          <ChatWindow
            key={threadId}
            threadId={threadId}
            initialMessages={initialMessages}
            onPersist={(msgs) => {
              const t: Thread = {
                id: threadId,
                title: deriveTitle(msgs) || "নতুন পাঠ",
                updatedAt: Date.now(),
                messages: msgs,
              };
              upsertThread(t);
              setThreads(loadThreads());
            }}
          />
        )}
      </main>
    </div>
  );
}

function Sidebar({
  threads,
  activeId,
  onNew,
  onDelete,
}: {
  threads: Thread[];
  activeId: string;
  onNew: () => void;
  onDelete: (id: string) => void;
}) {
  return (
    <aside className="hidden md:flex w-72 shrink-0 flex-col border-r border-border bg-sidebar text-sidebar-foreground">
      <div className="flex items-center gap-3 p-4 border-b border-sidebar-border">
        <img src={logo} alt="AI" width={40} height={40} className="rounded-lg" />
        <div>
          <div className="font-bold leading-tight">AI</div>
          <div className="text-xs opacity-70">English Tutor</div>
        </div>
      </div>
      <div className="p-3">
        <Button onClick={onNew} className="w-full justify-start gap-2">
          <Plus className="size-4" /> নতুন পাঠ শুরু করো
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto px-2 pb-4 space-y-1">
        {threads.length === 0 && <div className="text-xs opacity-60 px-3 py-4">কোন পাঠ নেই।</div>}
        {threads.map((t) => {
          const active = t.id === activeId;
          return (
            <div
              key={t.id}
              className={`group flex items-center gap-2 rounded-md px-2 ${
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "hover:bg-sidebar-accent/50"
              }`}
            >
              <Link
                to="/chat/$threadId"
                params={{ threadId: t.id }}
                className="flex-1 min-w-0 py-2 text-sm truncate"
                title={t.title}
              >
                {t.title}
              </Link>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onDelete(t.id);
                }}
                aria-label="Delete thread"
                className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-destructive/10 hover:text-destructive transition"
              >
                <Trash2 className="size-3.5" />
              </button>
            </div>
          );
        })}
      </div>
      <div className="p-3 text-[11px] opacity-60 border-t border-sidebar-border">
        সব ডেটা এই ব্রাউজারে সংরক্ষিত। সম্পূর্ণ ফ্রি।
      </div>
    </aside>
  );
}

function ChatWindow({
  threadId,
  initialMessages,
  onPersist,
}: {
  threadId: string;
  initialMessages: UIMessage[];
  onPersist: (messages: UIMessage[]) => void;
}) {
  const [hasKey, setHasKey] = useState<boolean>(() => !!getBYOK());
  useEffect(() => {
    const check = () => setHasKey(!!getBYOK());
    window.addEventListener("storage", check);
    window.addEventListener("focus", check);
    return () => {
      window.removeEventListener("storage", check);
      window.removeEventListener("focus", check);
    };
  }, []);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        body: () => ({ apiKey: getBYOK()?.key ?? "" }),
      }),
    [],
  );

  const { messages, sendMessage, status, error } = useChat({
    id: threadId,
    messages: initialMessages,
    transport,
  });

  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Persist on message change once stream settles.
  useEffect(() => {
    if (status === "streaming" || status === "submitted") return;
    if (messages.length === 0 && initialMessages.length === 0) return;
    onPersist(messages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, status]);

  // Autofocus composer.
  useEffect(() => {
    textareaRef.current?.focus();
  }, [threadId, status]);

  const isLoading = status === "submitted" || status === "streaming";

  const handleSubmit = async (message?: { text?: string }) => {
    const text = (message?.text ?? input).trim();
    if (!text || isLoading) return;
    if (!hasKey) return;
    setInput("");
    await sendMessage({ text });
  };

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <header className="border-b border-border px-4 py-3 flex items-center gap-3 md:hidden">
        <img src={logo} alt="AI" width={32} height={32} />
        <div className="font-bold">AI — English Tutor</div>
      </header>

      <Conversation className="flex-1 min-h-0">
        <ConversationContent className="max-w-3xl mx-auto w-full px-4 py-6">
          {!hasKey && (
            <div className="mb-6 rounded-2xl border border-primary/30 bg-primary/8 p-5">
              <div className="flex items-start gap-3">
                <KeyRound className="size-5 text-primary shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="font-bangla font-semibold text-base mb-1">
                    প্রথমে Google Gemini API key যোগ করো
                  </div>
                  <p className="font-bangla text-sm text-foreground/75 leading-relaxed">
                    AI টিচার চালাতে তোমার নিজের একটা <b>ফ্রি Gemini key</b> লাগবে (ক্রেডিট কার্ড
                    ছাড়াই)। Settings পেজে গিয়ে ৩ ধাপে যোগ করো — তারপর এখানে ফিরে এসো।
                  </p>
                  <Link
                    to="/settings"
                    className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-primary transition"
                  >
                    <SettingsIcon className="size-4" /> Settings-এ যাও
                  </Link>
                </div>
              </div>
            </div>
          )}

          {messages.length === 0 ? (
            <EmptyState onPick={(prompt) => hasKey && sendMessage({ text: prompt })} />
          ) : (
            messages.map((m) => (
              <Message key={m.id} from={m.role}>
                <MessageContent>
                  {m.parts.map((part, i) => {
                    if (part.type === "text") {
                      return m.role === "assistant" ? (
                        <MessageResponse key={i}>{part.text}</MessageResponse>
                      ) : (
                        <span key={i} className="whitespace-pre-wrap">
                          {part.text}
                        </span>
                      );
                    }
                    return null;
                  })}
                </MessageContent>
              </Message>
            ))
          )}

          {status === "submitted" && (
            <Message from="assistant">
              <MessageContent>
                <Shimmer>AI ভাবছেন...</Shimmer>
              </MessageContent>
            </Message>
          )}

          {error && (
            <div className="mt-4 rounded-xl border border-destructive/40 bg-destructive/10 text-destructive px-4 py-3 text-sm font-bangla">
              {/MISSING_API_KEY/i.test(error.message)
                ? "প্রথমে Settings-এ গিয়ে Google Gemini API key যোগ করো।"
                : /RATE_LIMIT|429|quota/i.test(error.message)
                  ? "Google Gemini-এর ফ্রি লিমিট শেষ। কিছুক্ষণ পরে চেষ্টা করো, অথবা Settings-এ গিয়ে আরেকটা key দাও।"
                  : "দুঃখিত, কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করো।"}
              <Link to="/settings" className="ml-2 underline">
                Settings খোলো
              </Link>
            </div>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <div className="border-t border-border bg-background/80 backdrop-blur px-4 py-4">
        <div className="max-w-3xl mx-auto w-full">
          <PromptInput onSubmit={handleSubmit}>
            <PromptInputTextarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="বাংলা বা ইংরেজিতে লিখো... উদাহরণ: 'আমি একদম শূন্য থেকে শুরু করতে চাই'"
              disabled={isLoading}
            />
            <PromptInputFooter className="justify-between">
              <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                <BookOpen className="size-3.5" />
                Enter দিয়ে পাঠাও • Shift+Enter নতুন লাইন
              </div>
              <PromptInputSubmit status={status} disabled={!input.trim() || isLoading}>
                <Send className="size-4" />
              </PromptInputSubmit>
            </PromptInputFooter>
          </PromptInput>
        </div>
      </div>
    </div>
  );
}

const STARTERS = [
  "আমি একদম শূন্য থেকে ইংরেজি শিখতে চাই। কোথা থেকে শুরু করবো?",
  "আমি A B C জানি কিন্তু বাক্য বানাতে পারি না।",
  "আমাকে daily conversation শেখাও।",
  "Grammar-এর tense বুঝিয়ে দাও।",
];

function EmptyState({ onPick }: { onPick: (text: string) => void }) {
  return (
    <ConversationEmptyState
      className="py-12"
      icon={<img src={logo} alt="AI" width={96} height={96} className="mx-auto" />}
      title="আসসালামু আলাইকুম! আমি AI 👋"
      description="তোমার personal English teacher। বাংলায় বুঝিয়ে ইংরেজি শেখাবো — একদম শূন্য থেকে প্রফেশনাল লেভেল পর্যন্ত। শুরু করতে নিচের একটা বেছে নাও বা নিজে লিখো।"
    >
      <div className="grid sm:grid-cols-2 gap-2 mt-6 max-w-xl mx-auto">
        {STARTERS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => onPick(s)}
            className="text-left text-sm rounded-lg border border-border bg-card hover:bg-accent hover:border-primary/40 px-3 py-2.5 transition"
          >
            {s}
          </button>
        ))}
      </div>
    </ConversationEmptyState>
  );
}
