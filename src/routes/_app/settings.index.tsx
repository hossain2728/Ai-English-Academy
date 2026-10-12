import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Key,
  ExternalLink,
  Save,
  Trash2,
  ShieldCheck,
  Info,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { getBYOK, saveBYOK, clearBYOK, type BYOK } from "@/lib/settings";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export const Route = createFileRoute("/_app/settings/")({
  head: () => ({
    meta: [
      { title: "Settings — Google Gemini API Key" },
      {
        name: "description",
        content:
          "নিজের Google Gemini API Key দিয়ে AI চ্যাট চালাও। কী শুধু তোমার ব্রাউজারে থাকে — আমাদের সার্ভারে সংরক্ষণ হয় না।",
      },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const [byok, setByok] = useState<BYOK | null>(null);
  const [key, setKey] = useState("");
  const [saved, setSaved] = useState(false);
  // 2-step reset dialog: closed → confirm1 → confirm2 → success toast
  const [resetStep, setResetStep] = useState<"closed" | "confirm1" | "confirm2">("closed");
  const [resetDone, setResetDone] = useState(false);

  useEffect(() => {
    const b = getBYOK();
    if (b) {
      setByok(b);
      setKey(b.key);
    }
  }, []);

  const onSave = () => {
    if (!key.trim()) return;
    const b: BYOK = { provider: "gemini", key: key.trim() };
    saveBYOK(b);
    setByok(b);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };
  const onClear = () => {
    clearBYOK();
    setByok(null);
    setKey("");
  };

  const performReset = () => {
    try {
      localStorage.clear();
    } catch {
      /* ignore */
    }
    setResetStep("closed");
    setResetDone(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 1600);
  };

  return (
    <main className="max-w-2xl mx-auto px-5 py-12">
      <div className="eyebrow font-bangla flex items-center gap-1.5">
        <Key className="size-3.5" /> Settings · Google Gemini
      </div>
      <h1 className="font-display text-4xl md:text-5xl mt-2 leading-tight">
        নিজের <span className="italic text-primary">Gemini Key</span> দিয়ে চালাও।
      </h1>
      <p className="mt-4 text-foreground/70 font-bangla">
        AI চ্যাট চালাতে Google Gemini-এর একটা <b>ফ্রি API key</b> লাগবে (ক্রেডিট কার্ড ছাড়াই পাওয়া
        যায়)। এতে <b>শুধু তোমার</b> চ্যাট চলবে, খরচ যাবে <b>তোমার</b> Google account থেকে — সাইট
        সবার জন্য খোলা থাকবে।
      </p>

      <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-5 flex gap-3">
        <ShieldCheck className="size-5 text-primary shrink-0 mt-0.5" />
        <div className="text-sm font-bangla">
          <b>প্রাইভেসি:</b> তোমার key <u>এই ব্রাউজারেই</u> সেভ হয় (localStorage)। প্রতিটা মেসেজে
          সেটা সরাসরি Google-এ যায়, আমাদের সার্ভারে সংরক্ষণ হয় না।
        </div>
      </div>

      {/* Form */}
      <div className="mt-8 rounded-3xl border border-border bg-card p-6 space-y-5">
        <div className="rounded-xl border border-border bg-background/50 p-4">
          <div className="text-xs uppercase tracking-wider opacity-70">Provider</div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-lg">🟢</span>
            <div>
              <div className="font-semibold">Google Gemini</div>
              <div className="text-[11px] opacity-70">gemini-2.5-flash · ফ্রি টিয়ার আছে</div>
            </div>
          </div>
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider opacity-70">Gemini API Key</label>
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="AIza..."
            className="mt-2 w-full font-mono text-sm rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary"
          />
          <div className="mt-2 text-xs opacity-70 font-bangla flex items-center gap-1.5">
            <Info className="size-3.5" />
            <span>
              ফ্রি Key নিতে যাও —{" "}
              <a
                href="https://aistudio.google.com/apikey"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-0.5"
              >
                aistudio.google.com/apikey <ExternalLink className="size-3" />
              </a>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={onSave}
            disabled={!key.trim()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-primary transition disabled:opacity-40"
          >
            <Save className="size-4" /> সেভ করি
          </button>
          {byok && (
            <button
              onClick={onClear}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border text-sm hover:border-destructive/40 hover:text-destructive transition"
            >
              <Trash2 className="size-4" /> মুছে দাও
            </button>
          )}
          {saved && <span className="text-xs text-primary font-bangla">✓ সেভ হয়েছে</span>}
        </div>
      </div>

      {/* Steps */}
      <div className="mt-10 rounded-2xl border border-border bg-card p-6">
        <div className="font-display text-2xl mb-4">Key নেওয়ার ৩ ধাপ</div>
        <ol className="space-y-3 text-sm font-bangla list-decimal list-inside">
          <li>
            <a
              href="https://aistudio.google.com/apikey"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              aistudio.google.com/apikey
            </a>{" "}
            — এখানে যাও (Google account দিয়ে লগইন)।
          </li>
          <li>“Create API key” বাটনে ক্লিক করো। কোনো ক্রেডিট কার্ড লাগবে না।</li>
          <li>লম্বা key-টা (AIza... দিয়ে শুরু) কপি করে উপরের বাক্সে বসাও ও সেভ করো।</li>
        </ol>
      </div>

      {/* Danger zone — সব তথ্য মুছে ফ্রেশ শুরু */}
      <div className="mt-10 rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="size-6 text-destructive flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <div className="font-display text-xl text-destructive mb-1">বিপদ অঞ্চল</div>
            <p className="text-sm font-bangla text-foreground/80 leading-relaxed mb-4">
              এই বাটন চাপলে <strong>সব তথ্য মুছে যাবে</strong> — আপনার সব শব্দের টিক, প্রগ্রেস, থিম,
              দিনের হিসাব, AI key, সব। ওয়েবসাইট একদম নতুনের মতো হয়ে যাবে। যা মুছে যাবে তা{" "}
              <strong>আর ফেরত আনা যাবে না</strong>।
            </p>
            <p className="text-xs font-bangla text-muted-foreground mb-4">
              💡 কখন ব্যবহার করবেন? — অন্যকে ডিভাইস দিচ্ছেন, নতুন করে শুরু করতে চান, অথবা কোনো
              সমস্যা হচ্ছে।
            </p>
            <button
              onClick={() => setResetStep("confirm1")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-destructive text-destructive-foreground font-semibold text-sm hover:bg-destructive/90 transition"
            >
              <Trash2 className="size-4" /> সব তথ্য মুছে ফ্রেশ শুরু করি
            </button>
          </div>
        </div>
      </div>

      {/* Step 1 — নরম সতর্কতা */}
      <AlertDialog
        open={resetStep === "confirm1"}
        onOpenChange={(o) => !o && setResetStep("closed")}
      >
        <AlertDialogContent className="font-bangla">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="size-5" />
              সব তথ্য মুছে ফেলবেন?
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="text-sm text-foreground/80 leading-relaxed space-y-2 pt-1">
                <div>এটা চাপলে নিচের সবকিছু মুছে যাবে —</div>
                <ul className="list-disc list-inside space-y-0.5 text-foreground/75">
                  <li>সব শব্দের ✓ টিক ও progress</li>
                  <li>থিম / দিন / প্ল্যান সেটিংস</li>
                  <li>AI API key</li>
                  <li>রিভিশন queue</li>
                </ul>
                <div className="text-muted-foreground text-xs pt-1">
                  ওয়েবসাইট একদম নতুনের মতো হয়ে যাবে।
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="font-bangla">বাতিল</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => setResetStep("confirm2")}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-bangla"
            >
              হ্যাঁ, এগিয়ে যাই
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Step 2 — শেষ সতর্কতা */}
      <AlertDialog
        open={resetStep === "confirm2"}
        onOpenChange={(o) => !o && setResetStep("closed")}
      >
        <AlertDialogContent className="font-bangla border-destructive/40">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="size-5" />
              একদম শেষ প্রশ্ন
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm text-foreground/80 leading-relaxed pt-1">
              সব progress হারিয়ে যাবে, আর <strong>ফেরত আনা যাবে না</strong>। এখনো নিশ্চিত?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="font-bangla">না, থাক</AlertDialogCancel>
            <AlertDialogAction
              onClick={performReset}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-bangla"
            >
              <Trash2 className="size-4 mr-1.5" /> সব মুছে ফেলো
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Success toast — floating, নিচে ডান দিকে */}
      {resetDone && (
        <div
          role="status"
          className="fixed bottom-6 right-6 z-[100] flex items-start gap-3 rounded-2xl border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50 dark:bg-emerald-950/60 backdrop-blur px-5 py-4 shadow-lg font-bangla animate-in slide-in-from-bottom-4 fade-in duration-300 max-w-sm"
        >
          <CheckCircle2 className="size-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-sm text-emerald-900 dark:text-emerald-100">
            <div className="font-semibold">সব তথ্য মুছে দেওয়া হয়েছে</div>
            <div className="text-xs opacity-80 mt-0.5">হোম পেজে ফিরিয়ে নিয়ে যাচ্ছি…</div>
          </div>
        </div>
      )}
    </main>
  );
}
