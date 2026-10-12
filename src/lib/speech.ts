let cachedVoice: SpeechSynthesisVoice | null = null;
let voicesLoaded = false;

const VOICE_PREFERENCE: (string | RegExp)[] = [
  // Chrome / Edge on modern OS — natural neural voices
  /Google US English/i,
  /Google UK English Female/i,
  /Microsoft Aria Online \(Natural\)/i,
  /Microsoft Jenny Online \(Natural\)/i,
  /Microsoft Guy Online \(Natural\)/i,
  /Microsoft Aria/i,
  /Microsoft Jenny/i,
  /Microsoft Guy/i,
  // Safari / macOS / iOS — high-quality Siri voices
  /Samantha/i,
  /Ava/i,
  /Allison/i,
  /Karen/i,
  // Older but decent fallbacks
  /Microsoft Zira/i,
  /Microsoft David/i,
  /English \(United States\)/i,
];

function pickBestVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  // Try preference list in order.
  for (const pref of VOICE_PREFERENCE) {
    const found = voices.find((v) =>
      typeof pref === "string" ? v.name === pref : pref.test(v.name),
    );
    if (found) return found;
  }
  // Fallback: any en-US voice, then any English voice.
  return (
    voices.find((v) => v.lang === "en-US") ??
    voices.find((v) => v.lang.startsWith("en")) ??
    voices[0] ??
    null
  );
}

function ensureVoicesLoaded(cb: () => void) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length) {
    voicesLoaded = true;
    cachedVoice = pickBestVoice();
    cb();
    return;
  }
  // Voices load asynchronously on Chrome — wait for the event.
  const handler = () => {
    voicesLoaded = true;
    cachedVoice = pickBestVoice();
    window.speechSynthesis.removeEventListener("voiceschanged", handler);
    cb();
  };
  window.speechSynthesis.addEventListener("voiceschanged", handler);
  // Trigger load on some browsers.
  window.speechSynthesis.getVoices();
}

export function speak(text: string, opts?: { lang?: string; rate?: number; pitch?: number }) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const run = () => {
    try {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = opts?.lang ?? "en-US";
      u.rate = opts?.rate ?? 0.92;
      u.pitch = opts?.pitch ?? 1;
      if (cachedVoice) u.voice = cachedVoice;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch {
      /* ignore */
    }
  };
  if (voicesLoaded) run();
  else ensureVoicesLoaded(run);
}

export function speechSupported() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

/** Returns the currently selected voice name, for UI display. */
export function currentVoiceName(): string | null {
  if (!voicesLoaded) {
    ensureVoicesLoaded(() => {});
    return null;
  }
  return cachedVoice?.name ?? null;
}
