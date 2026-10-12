import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useDeferredValue } from "react";
import { Search, Volume2, Shuffle } from "lucide-react";
import { OXFORD_3000 } from "@/data/oxford3000";

type WordEntry = {
  word: string;
  level: "a1" | "a2" | "b1" | "b2";
  pos: string;
  bn?: string;
  pron?: string;
  syn?: string[];
  ex?: string;
};

const ALL_WORDS: WordEntry[] = OXFORD_3000.map((w) => ({
  word: w.w,
  level: w.level.toLowerCase() as WordEntry["level"],
  pos: w.pos,
  bn: w.bn || undefined,
  pron: w.pron,
  syn: w.syn,
  ex: w.ex,
}));

const POS_LABEL: Record<string, string> = {
  noun: "বিশেষ্য",
  verb: "ক্রিয়া",
  adjective: "বিশেষণ",
  adverb: "ক্রিয়া-বিশেষণ",
  pronoun: "সর্বনাম",
  preposition: "সম্বন্ধবাচক",
  conjunction: "সংযোজক",
  "indefinite article": "অনির্দিষ্ট article",
  "definite article": "নির্দিষ্ট article",
  determiner: "নির্দেশক",
  number: "সংখ্যা",
  exclamation: "বিস্ময়সূচক",
  modal: "সহায়ক",
  auxiliary: "সহায়ক",
};

export const Route = createFileRoute("/_app/vocabulary/")({
  head: () => ({
    meta: [
      { title: "Oxford ৩০০০ শব্দ — বাংলা অর্থ ও সমার্থক" },
      {
        name: "description",
        content:
          "অক্সফোর্ডের ৩০০০ শব্দ CEFR লেভেলসহ — প্রতিটার বাংলা অর্থ, উচ্চারণ, সমার্থক শব্দ ও উদাহরণ বাক্য।",
      },
    ],
  }),
  component: Vocabulary,
});

const LEVELS = ["all", "a1", "a2", "b1", "b2"] as const;
type LevelFilter = (typeof LEVELS)[number];

const PAGE = 60;

function Vocabulary() {
  const [q, setQ] = useState("");
  const [level, setLevel] = useState<LevelFilter>("all");
  const [visible, setVisible] = useState(PAGE);
  const deferredQ = useDeferredValue(q);

  const filtered = useMemo(() => {
    const query = deferredQ.trim().toLowerCase();
    return ALL_WORDS.filter((w) => {
      if (level !== "all" && w.level !== level) return false;
      if (!query) return true;
      if (w.word.toLowerCase().includes(query)) return true;
      if (w.bn?.includes(query)) return true;
      if (w.syn?.some((s) => s.toLowerCase().includes(query))) return true;
      return false;
    });
  }, [deferredQ, level]);

  const shown = filtered.slice(0, visible);
  const empty = ALL_WORDS.length === 0;

  const speak = (text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  };

  const random = () => {
    if (filtered.length === 0) return;
    const w = filtered[Math.floor(Math.random() * filtered.length)];
    const el = document.getElementById(`w-${w.word}`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
    el?.classList.add("ring-2", "ring-gold");
    setTimeout(() => el?.classList.remove("ring-2", "ring-gold"), 1500);
  };

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-6">
          <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Vocabulary
          </div>
          <h1 className="font-display text-4xl md:text-6xl mt-3">Oxford ৩০০০ শব্দ</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            প্রতিদিন কয়েকটা শব্দ মুখস্থ করো — উচ্চারণ শুনো, বাংলা অর্থ ও সমার্থক শব্দ পড়ো, উদাহরণ
            বাক্য নিজে বানানোর চেষ্টা করো।
          </p>
        </div>

        {/* Controls */}
        <div className="sticky top-0 md:top-2 z-10 py-3 -mx-6 px-6 md:mx-0 md:px-0 bg-background/80 backdrop-blur">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setVisible(PAGE);
                }}
                placeholder="ইংরেজি বা বাংলা লিখে খোঁজো..."
                className="w-full pl-10 pr-3 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {LEVELS.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLevel(l);
                    setVisible(PAGE);
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold border transition ${
                    level === l
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border hover:border-primary/40"
                  }`}
                >
                  {l === "all" ? "সব" : l.toUpperCase()}
                </button>
              ))}
              <button
                onClick={random}
                className="px-3 py-2 rounded-lg text-sm font-semibold border border-gold/40 bg-gold/15 text-gold-foreground hover:bg-gold/25 transition flex items-center gap-1.5"
                title="Random word"
              >
                <Shuffle className="size-4" /> র‍্যান্ডম
              </button>
            </div>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            {empty
              ? "শব্দকোষ লোড হচ্ছে... একটু পরে refresh করো।"
              : `মোট ${ALL_WORDS.length.toLocaleString("bn-BD")} শব্দ • মিলেছে ${filtered.length.toLocaleString("bn-BD")}`}
          </div>
        </div>

        {/* Grid */}
        {empty ? (
          <div className="mt-16 p-12 text-center rounded-2xl border border-dashed border-border bg-card">
            <div className="font-display text-2xl">শব্দকোষ তৈরি হচ্ছে</div>
            <p className="text-muted-foreground text-sm mt-2">
              Oxford 3000 এর বাংলা অনুবাদ AI দিয়ে generate হচ্ছে। কয়েক মিনিট পর পেজটা রিফ্রেশ করলে
              সব শব্দ দেখতে পাবে।
            </p>
          </div>
        ) : (
          <>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {shown.map((w) => (
                <WordCard key={w.word} w={w} onSpeak={() => speak(w.word)} />
              ))}
            </div>

            {visible < filtered.length && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setVisible((v) => v + PAGE)}
                  className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-elevated transition"
                >
                  আরও দেখাও ({(filtered.length - visible).toLocaleString("bn-BD")})
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

function WordCard({ w, onSpeak }: { w: WordEntry; onSpeak: () => void }) {
  const posLabel = POS_LABEL[w.pos] || w.pos;
  return (
    <article
      id={`w-${w.word}`}
      className="rounded-2xl bg-card border border-border p-5 shadow-soft hover:shadow-elevated hover:border-primary/30 transition"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-2xl text-primary leading-tight truncate">{w.word}</h3>
            <button
              onClick={onSpeak}
              aria-label="Listen"
              className="p-1 rounded hover:bg-accent text-muted-foreground hover:text-primary transition"
            >
              <Volume2 className="size-4" />
            </button>
          </div>
          {w.pron && <div className="text-sm text-muted-foreground font-bangla">{w.pron}</div>}
        </div>
        <span
          className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded level-badge-${w.level}`}
        >
          {w.level}
        </span>
      </div>
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
        {posLabel}
      </div>

      {w.bn && <div className="mt-3 font-bangla text-lg font-medium">{w.bn}</div>}

      {w.syn && w.syn.length > 0 && (
        <div className="mt-3">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
            Synonyms
          </div>
          <div className="flex flex-wrap gap-1">
            {w.syn.map((s) => (
              <span
                key={s}
                className="text-xs px-2 py-0.5 rounded-md bg-accent border border-border"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      {w.ex && (
        <div className="mt-3 pt-3 border-t border-border">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
            Example
          </div>
          <p className="text-sm italic text-foreground/80">"{w.ex}"</p>
        </div>
      )}
    </article>
  );
}
