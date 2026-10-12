import type { UIMessage } from "ai";

const THREADS_KEY = "guruji-threads-v1";

export type Thread = {
  id: string;
  title: string;
  updatedAt: number;
  messages: UIMessage[];
};

export function loadThreads(): Thread[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(THREADS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Thread[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveThreads(threads: Thread[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(THREADS_KEY, JSON.stringify(threads));
  } catch {
    /* ignore quota errors */
  }
}

export function newThreadId(): string {
  return `t_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export function upsertThread(next: Thread) {
  const all = loadThreads();
  const idx = all.findIndex((t) => t.id === next.id);
  if (idx === -1) all.unshift(next);
  else all[idx] = next;
  all.sort((a, b) => b.updatedAt - a.updatedAt);
  saveThreads(all);
}

export function deleteThread(id: string) {
  const remaining = loadThreads().filter((t) => t.id !== id);
  saveThreads(remaining);
  return remaining;
}

export function deriveTitle(messages: UIMessage[]): string {
  const firstUser = messages.find((m) => m.role === "user");
  if (!firstUser) return "নতুন পাঠ";
  const text = firstUser.parts
    .map((p) => (p.type === "text" ? p.text : ""))
    .join(" ")
    .trim();
  if (!text) return "নতুন পাঠ";
  return text.length > 40 ? text.slice(0, 40) + "…" : text;
}
