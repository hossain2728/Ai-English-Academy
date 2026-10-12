export type RecognitionResult = {
  transcript: string;
  confidence: number;
};

export function recognitionSupported(): boolean {
  if (typeof window === "undefined") return false;
  return "SpeechRecognition" in window || "webkitSpeechRecognition" in window;
}

type SpeechRecognitionEventLike = {
  resultIndex: number;
  results: {
    length: number;
    [index: number]: {
      isFinal: boolean;
      0: { transcript: string; confidence?: number };
    };
  };
};

type SpeechRecognitionErrorEventLike = {
  error?: string;
};

type SpeechRecognitionLike = {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  continuous: boolean;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((e: SpeechRecognitionEventLike) => void) | null;
  onerror: ((e: SpeechRecognitionErrorEventLike) => void) | null;
  onend: (() => void) | null;
  onstart: (() => void) | null;
};

type WindowWithSpeechRecognition = Window & {
  SpeechRecognition?: new () => SpeechRecognitionLike;
  webkitSpeechRecognition?: new () => SpeechRecognitionLike;
};

export function createRecognizer(opts?: {
  lang?: string;
  onPartial?: (text: string) => void;
  onFinal?: (result: RecognitionResult) => void;
  onError?: (err: string) => void;
  onEnd?: () => void;
  onStart?: () => void;
}): { start: () => void; stop: () => void; abort: () => void } | null {
  if (!recognitionSupported()) return null;
  const win = window as unknown as WindowWithSpeechRecognition;
  const Ctor = win.SpeechRecognition || win.webkitSpeechRecognition;
  if (!Ctor) return null;
  const r: SpeechRecognitionLike = new Ctor();
  r.lang = opts?.lang ?? "en-US";
  r.interimResults = true;
  r.maxAlternatives = 1;
  r.continuous = false;

  r.onresult = (e: SpeechRecognitionEventLike) => {
    let interim = "";
    let final = "";
    let conf = 0;
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const res = e.results[i];
      if (res.isFinal) {
        final += res[0].transcript;
        conf = res[0].confidence ?? 0;
      } else {
        interim += res[0].transcript;
      }
    }
    if (interim && opts?.onPartial) opts.onPartial(interim);
    if (final && opts?.onFinal) opts.onFinal({ transcript: final.trim(), confidence: conf });
  };

  r.onerror = (e: SpeechRecognitionErrorEventLike) => opts?.onError?.(e.error ?? "unknown");
  r.onend = () => opts?.onEnd?.();
  r.onstart = () => opts?.onStart?.();

  return {
    start: () => {
      try {
        r.start();
      } catch {
        /* already started */
      }
    },
    stop: () => {
      try {
        r.stop();
      } catch {
        /* not started */
      }
    },
    abort: () => {
      try {
        r.abort();
      } catch {
        /* not started */
      }
    },
  };
}
