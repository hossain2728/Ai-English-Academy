import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

// Safari's 5 MB is the smallest quota — use as safe ceiling for all browsers.
const SAFE_LIMIT_BYTES = 5 * 1024 * 1024; // 5 MB
const DANGER_THRESHOLD = 0.95; // 95% — auto-cleanup fires only here

// Keys we NEVER auto-delete (user's actual progress + settings)
const PROTECTED_PREFIXES = [
  "vp:", // vocab-plan progress (ticks, day, plan, mode)
  "settings:", // AI provider / key / model
  "guruji:", // future user data namespace
];

// This component's own bookkeeping keys — safe to reset
const OWN_KEYS = ["sg:last-cleanup", "sg:notice-shown"];

function calcLocalStorageBytes(): number {
  try {
    let total = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;
      const value = localStorage.getItem(key) || "";
      total += (key.length + value.length) * 2; // UTF-16 upper bound
    }
    return total;
  } catch {
    return 0;
  }
}

function isProtected(key: string): boolean {
  return PROTECTED_PREFIXES.some((p) => key.startsWith(p));
}

/** Silently remove non-essential keys. Returns bytes freed. */
function autoCleanup(): number {
  const before = calcLocalStorageBytes();
  try {
    const toRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k) continue;
      if (isProtected(k)) continue;
      if (OWN_KEYS.includes(k)) continue;
      toRemove.push(k); // any unknown / temp key
    }
    for (const k of toRemove) localStorage.removeItem(k);
    localStorage.setItem("sg:last-cleanup", String(Date.now()));
  } catch {
    /* ignore storage errors */
  }
  const after = calcLocalStorageBytes();
  return Math.max(0, before - after);
}

export function StorageGuard() {
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    const runCheck = () => {
      try {
        const used = calcLocalStorageBytes();
        const percent = used / SAFE_LIMIT_BYTES;
        if (percent < DANGER_THRESHOLD) return;

        // At/near limit — silently clear non-essential data
        const freed = autoCleanup();
        const stillHigh = calcLocalStorageBytes() / SAFE_LIMIT_BYTES >= DANGER_THRESHOLD;

        if (freed > 0 && !localStorage.getItem("sg:notice-shown")) {
          setNotice(
            stillHigh
              ? "ℹ️ ব্রাউজার storage প্রায় পূর্ণ। কিছু পুরনো তথ্য মুছে দিলাম — আপনার শেখার progress ঠিক আছে।"
              : "✅ জায়গা করে দিলাম — আপনার progress নিরাপদ।",
          );
          try {
            localStorage.setItem("sg:notice-shown", "1");
          } catch {
            /* ignore */
          }
        }
      } catch {
        /* ignore */
      }
    };

    // Also catch quota-exceeded errors on any write
    const onErr = (e: ErrorEvent) => {
      if (e.message && /quota|QuotaExceeded/i.test(e.message)) {
        const freed = autoCleanup();
        if (freed > 0) {
          setNotice("✅ জায়গা করে দিলাম — আপনার progress নিরাপদ।");
        }
      }
    };

    runCheck();
    const iv = setInterval(runCheck, 60_000);
    window.addEventListener("error", onErr);

    return () => {
      clearInterval(iv);
      window.removeEventListener("error", onErr);
    };
  }, []);

  // Auto-dismiss the notice after 6 seconds
  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(null), 6000);
    return () => clearTimeout(t);
  }, [notice]);

  if (!notice) return null;

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-md mx-4 rounded-xl shadow-lg border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/90 text-emerald-900 dark:text-emerald-100 p-3.5 font-bangla flex items-start gap-2.5 animate-in fade-in slide-in-from-bottom-4 duration-300"
      role="status"
    >
      <CheckCircle2 className="size-5 flex-shrink-0 mt-0.5 text-emerald-600" />
      <p className="text-sm leading-relaxed flex-1">{notice}</p>
    </div>
  );
}
