import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BookOpen, Volume2, Sparkles, Clock, ChevronRight } from "lucide-react";
import { STORIES, type Story, type GlossItem } from "@/data/stories";
import { speak } from "@/lib/speech";
import { addXp } from "@/lib/progress";

export const Route = createFileRoute("/_app/stories/")({
  head: () => ({
    meta: [
      { title: "Story Reader — AI English Academy" },
      {
        name: "description",
        content:
          "Stephen Krashen-এর Comprehensible Input পদ্ধতি — ছোট গল্প পড়ে ইংরেজি শেখো। কঠিন শব্দে click করলেই বাংলা অর্থ। ব্যাকরণ শেখানো ছাড়াই ভাষা ঢুকে যায়।",
      },
    ],
  }),
  component: StoriesIndex,
});

function StoriesIndex() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = useMemo(() => STORIES.find((s) => s.id === activeId) ?? null, [activeId]);

  if (active) return <StoryView story={active} onBack={() => setActiveId(null)} />;

  return (
    <main className="flex-1 overflow-y-auto">
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-medium text-primary/80 mb-4">
          <Sparkles className="size-3.5" />
          Krashen's Comprehensible Input
        </div>
        <h1 className="font-display text-4xl md:text-5xl leading-tight">
          গল্প পড়ে ইংরেজি শিখি — <span className="italic text-primary">ব্যাকরণ ছাড়াই</span>
        </h1>
        <p className="mt-5 text-muted-foreground font-bangla leading-relaxed max-w-2xl">
          বিশ্ববিখ্যাত ভাষাবিদ Stephen Krashen বলেছেন — ভাষা শেখার শ্রেষ্ঠ উপায় হচ্ছে{" "}
          <b>একটু-একটু চ্যালেঞ্জিং</b> content বোঝা। প্রতিটা গল্পে কঠিন শব্দের নিচে dotted line
          থাকবে — <b>click করলেই বাংলা অর্থ</b>। কোনো dictionary লাগবে না।
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20 grid gap-4 md:grid-cols-2">
        {STORIES.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveId(s.id)}
            className="group text-left rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-elevated hover:border-primary/40 transition"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="text-4xl">{s.emoji}</div>
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider">
                <span
                  className={`px-1.5 py-0.5 rounded font-bold level-badge-${s.level.toLowerCase()}`}
                >
                  {s.level}
                </span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <Clock className="size-3" /> {s.minutes}m
                </span>
              </div>
            </div>
            <div className="mt-3 font-display text-2xl leading-tight">{s.title}</div>
            <div className="text-xs font-bangla text-primary/70 italic">{s.titleBn}</div>
            <p className="mt-3 text-sm font-bangla text-muted-foreground">{s.summaryBn}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-xs text-primary font-semibold group-hover:gap-2 transition-all">
              পড়া শুরু করি <ChevronRight className="size-3.5" />
            </div>
          </button>
        ))}
      </section>
    </main>
  );
}

function StoryView({ story, onBack }: { story: Story; onBack: () => void }) {
  const [openIdx, setOpenIdx] = useState<string | null>(null);
  const [showQ, setShowQ] = useState<Record<number, boolean>>({});
  const [done, setDone] = useState(false);

  const finish = () => {
    if (done) return;
    setDone(true);
    addXp(5);
  };

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <button
          onClick={onBack}
          className="text-xs text-muted-foreground hover:text-primary transition inline-flex items-center gap-1 mb-6"
        >
          ← সব গল্পে ফিরি
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="text-5xl">{story.emoji}</div>
          <div>
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded level-badge-${story.level.toLowerCase()}`}
            >
              {story.level}
            </span>
            <span className="ml-2 text-xs text-muted-foreground">{story.minutes} মিনিট</span>
          </div>
        </div>

        <h1 className="font-display text-4xl md:text-5xl leading-tight">{story.title}</h1>
        <div className="mt-1 font-bangla text-lg text-primary/70 italic">{story.titleBn}</div>

        <div className="mt-3 p-3 rounded-lg bg-primary/5 border border-primary/15 text-xs font-bangla flex items-start gap-2">
          <BookOpen className="size-4 text-primary shrink-0 mt-0.5" />
          <span>
            <b>টিপ:</b> underline করা শব্দে tap করলে বাংলা অর্থ পাবে। বাক্যের পাশে 🔊 এ click করলে
            শুনতে পাবে।
          </span>
        </div>

        <article className="mt-8 space-y-6">
          {story.paragraphs.map((para, pi) => {
            const plain = para.map((t) => (typeof t === "string" ? t : t.w)).join("");
            return (
              <div key={pi} className="group relative">
                <p className="text-xl leading-[1.9]">
                  {para.map((tok, ti) => {
                    if (typeof tok === "string") return <span key={ti}>{tok}</span>;
                    const key = `${pi}-${ti}`;
                    const open = openIdx === key;
                    return (
                      <button
                        key={ti}
                        onClick={() => setOpenIdx(open ? null : key)}
                        className="relative inline-flex items-baseline border-b-2 border-dotted border-primary/50 text-primary hover:border-primary hover:bg-primary/10 rounded px-0.5 transition"
                      >
                        {tok.w}
                        {open && <GlossPopover g={tok} />}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => speak(plain, { rate: 0.85 })}
                    aria-label="শুনি"
                    className="ml-2 inline-flex align-middle size-7 rounded-full bg-primary/10 text-primary items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
                  >
                    <Volume2 className="size-3.5" />
                  </button>
                </p>
              </div>
            );
          })}
        </article>

        {story.moral && (
          <div className="mt-10 p-5 rounded-2xl bg-gold/10 border border-gold/30">
            <div className="text-xs uppercase tracking-wider text-gold-foreground font-bold mb-1">
              🌟 শিক্ষা / Moral
            </div>
            <div className="font-bangla text-base">{story.moral}</div>
          </div>
        )}

        <div className="mt-10">
          <div className="text-xs uppercase tracking-wider text-primary font-bold mb-3">
            Comprehension Check
          </div>
          <div className="space-y-2">
            {story.questions.map((qa, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-4">
                <div className="font-medium">{qa.q}</div>
                <button
                  onClick={() => setShowQ((s) => ({ ...s, [i]: !s[i] }))}
                  className="mt-1 text-xs text-primary hover:underline"
                >
                  {showQ[i] ? "লুকাই" : "উত্তর দেখি"}
                </button>
                {showQ[i] && (
                  <div className="mt-2 text-sm text-muted-foreground italic">→ {qa.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={finish}
          disabled={done}
          className={`mt-10 w-full py-4 rounded-2xl font-semibold text-sm transition ${
            done
              ? "bg-primary/10 text-primary cursor-default"
              : "bg-foreground text-background hover:bg-primary"
          }`}
        >
          {done ? "✓ শেষ! +5 XP পেয়েছ" : "গল্প শেষ করলাম — +5 XP নাও"}
        </button>
      </div>
    </main>
  );
}

function GlossPopover({ g }: { g: GlossItem }) {
  return (
    <span
      role="tooltip"
      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20 min-w-[160px] max-w-[240px] rounded-lg bg-foreground text-background p-2.5 shadow-elevated text-xs font-normal not-italic"
    >
      <span className="block font-bangla text-sm text-gold">{g.bn}</span>
      {g.note && <span className="block mt-1 opacity-70 text-[10px] italic">{g.note}</span>}
      <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
    </span>
  );
}
