import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { Mic, Play, Square, Volume2, Repeat, ChevronDown, Sparkles } from "lucide-react";
import { SHADOW_SETS, type ShadowSet } from "@/data/shadowing";
import { speak } from "@/lib/speech";
import { addXp } from "@/lib/progress";

export const Route = createFileRoute("/_app/shadowing/")({
  head: () => ({
    meta: [
      { title: "Shadowing Trainer — AI English Academy" },
      {
        name: "description",
        content:
          "Alexander Arguelles-এর proven shadowing পদ্ধতি — শোনো, সাথে সাথে বলো, নিজে record করো, নিজের কণ্ঠ শুনে ঠিক করো। Native accent-এর সবচেয়ে দ্রুত পথ।",
      },
    ],
  }),
  component: ShadowingPage,
});

function ShadowingPage() {
  const [setId, setSetId] = useState(SHADOW_SETS[0].id);
  const set = useMemo<ShadowSet>(
    () => SHADOW_SETS.find((s) => s.id === setId) ?? SHADOW_SETS[0],
    [setId],
  );

  return (
    <main className="flex-1 overflow-y-auto">
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-medium text-primary/80 mb-4">
          <Sparkles className="size-3.5" />
          Proven Method
        </div>
        <h1 className="font-display text-4xl md:text-5xl leading-tight">
          Shadowing — <span className="italic text-primary">Native accent-এর</span> সবচেয়ে দ্রুত পথ
        </h1>
        <p className="mt-5 text-muted-foreground font-bangla leading-relaxed max-w-2xl">
          পলিগ্লট Alexander Arguelles এই পদ্ধতিতে ৫০+ ভাষা শিখেছেন। নিয়ম সহজ —{" "}
          <b>শোনো → সাথে সাথে বলো → record করো → নিজের কণ্ঠ শোনো</b>। প্রতিটা বাক্য ৫ বার repeat
          করলেই মুখে বসে যাবে।
        </p>

        {/* Set selector */}
        <div className="mt-8 flex flex-wrap gap-2">
          {SHADOW_SETS.map((s) => (
            <button
              key={s.id}
              onClick={() => setSetId(s.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
                s.id === setId
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/40"
              }`}
            >
              <span className="mr-1">{s.emoji}</span>
              <span className="font-bangla">{s.titleBn}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-6">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 text-sm font-bangla leading-relaxed">
          <div className="text-xs uppercase tracking-wider font-bold text-primary mb-1.5">
            {set.emoji} {set.title}
          </div>
          {set.intro}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20 space-y-4">
        {set.lines.map((line, i) => (
          <ShadowRow key={line.id} n={i + 1} text={line.text} bn={line.bn} focus={line.focus} />
        ))}

        <div className="mt-8 rounded-2xl bg-gradient-to-br from-primary/10 to-gold/10 border border-primary/20 p-6">
          <div className="font-display text-2xl">শেষ হয়েছে?</div>
          <p className="mt-1 font-bangla text-sm text-muted-foreground">
            চমৎকার! মনে রাখো — একবার শোনা <b>শেখা নয়</b>। কাল আবার এসো, পুনরায় repeat করো। এভাবেই
            accent বদলাবে।
          </p>
        </div>
      </section>
    </main>
  );
}

function ShadowRow({ n, text, bn, focus }: { n: number; text: string; bn: string; focus: string }) {
  const [rate, setRate] = useState(0.92);
  const [recording, setRecording] = useState(false);
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);
  const [showFocus, setShowFocus] = useState(false);
  const mediaRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const start = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      mediaRef.current = mr;
      chunksRef.current = [];
      mr.ondataavailable = (e) => e.data.size > 0 && chunksRef.current.push(e.data);
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setRecordedUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((t) => t.stop());
        addXp(1);
      };
      mr.start();
      setRecording(true);
    } catch (err) {
      alert("Microphone-এ access দিতে হবে। Browser settings চেক করো।");
      console.error(err);
    }
  };

  const stop = () => {
    mediaRef.current?.stop();
    setRecording(false);
  };

  return (
    <article className="rounded-2xl border border-border bg-card p-5 md:p-6 shadow-soft">
      <div className="flex items-start gap-4">
        <div className="font-display text-3xl text-primary/25 leading-none w-10 shrink-0">
          {String(n).padStart(2, "0")}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-lg md:text-xl font-medium leading-snug">{text}</div>
          <div className="mt-1.5 text-sm font-bangla text-muted-foreground">{bn}</div>

          {/* Controls */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              onClick={() => speak(text, { rate })}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              <Volume2 className="size-3.5" /> শুনি
            </button>
            <button
              onClick={() => speak(text, { rate: 0.6 })}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-accent border border-border hover:border-primary/40 transition"
            >
              <Repeat className="size-3.5" /> ধীরে
            </button>
            {!recording ? (
              <button
                onClick={start}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-destructive/10 text-destructive border border-destructive/30 hover:bg-destructive/15 transition"
              >
                <Mic className="size-3.5" /> Record করি
              </button>
            ) : (
              <button
                onClick={stop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-destructive text-destructive-foreground animate-pulse transition"
              >
                <Square className="size-3.5" /> থামি
              </button>
            )}
            {recordedUrl && (
              <>
                <audio src={recordedUrl} controls className="h-8 max-w-[220px]" />
                <span className="text-[10px] text-primary font-semibold">
                  নিজের কণ্ঠ শুনে তুলনা করো!
                </span>
              </>
            )}
            <button
              onClick={() => setShowFocus((x) => !x)}
              className="ml-auto inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-primary transition"
            >
              উচ্চারণ tip
              <ChevronDown className={`size-3 transition ${showFocus ? "rotate-180" : ""}`} />
            </button>
          </div>

          {showFocus && (
            <div className="mt-3 p-3 rounded-lg bg-gold/10 border border-gold/25 text-xs font-bangla">
              🎯 <b>Focus:</b> {focus}
            </div>
          )}

          {/* rate slider */}
          <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
            <span>Speed</span>
            <input
              type="range"
              min="0.5"
              max="1.1"
              step="0.05"
              value={rate}
              onChange={(e) => setRate(parseFloat(e.target.value))}
              className="flex-1 max-w-[180px] accent-primary"
            />
            <span>{rate.toFixed(2)}x</span>
          </div>
        </div>
      </div>
    </article>
  );
}
