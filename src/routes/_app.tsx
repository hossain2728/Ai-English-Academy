import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { Flame, Menu, X, ChevronDown, Settings as SettingsIcon, MessageSquare } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/tutor-logo.png";
import { getProgress, levelFromXp } from "@/lib/progress";

const FEEDBACK_URL = "https://t.me/AiEnglishAcademy";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

type NavItem = { to: string; label: string; labelEn: string };
type NavGroup = { title: string; items: NavItem[] };

const NAV: NavGroup[] = [
  {
    title: "শুরু",
    items: [
      { to: "/why-english", label: "কেন ইংরেজি", labelEn: "Why English" },
      { to: "/roadmap", label: "রোডম্যাপ", labelEn: "24-Week Plan" },
      { to: "/help", label: "সহায়িকা", labelEn: "Help" },
    ],
  },
  {
    title: "শেখো",
    items: [
      { to: "/pronunciation", label: "উচ্চারণ", labelEn: "Pronunciation" },
      { to: "/vocab-plan", label: "৩০ দিনে শব্দ", labelEn: "Vocab Plan" },
      { to: "/grammar", label: "৩০টি ফর্মুলা", labelEn: "Grammar" },
      { to: "/vocabulary", label: "শব্দ ঘাঁটি", labelEn: "Vocabulary" },
      { to: "/connectors", label: "জোড়া-শব্দ", labelEn: "Connectors" },
      { to: "/prepositions", label: "সম্পর্ক-শব্দ", labelEn: "Prepositions" },
    ],
  },
  {
    title: "চর্চা",
    items: [
      { to: "/speak", label: "বলার চর্চা 🎤", labelEn: "Speak & Score" },
      { to: "/write", label: "লেখার চর্চা ✍️", labelEn: "Write & Check" },
      { to: "/shadowing", label: "Shadowing", labelEn: "Mimic & Record" },
      { to: "/stories", label: "গল্প পড়ি", labelEn: "Stories" },
      { to: "/chunks", label: "শব্দগুচ্ছ", labelEn: "Chunks" },
      { to: "/review", label: "রিভিউ (SRS)", labelEn: "Spaced Repetition" },
      { to: "/listen", label: "শোনার চর্চা", labelEn: "Listening" },
      { to: "/scenarios", label: "বাস্তব পরিস্থিতি", labelEn: "Scenarios" },
      { to: "/mistakes", label: "সাধারণ ভুল", labelEn: "Mistakes" },
      { to: "/practice", label: "দৈনিক কুইজ", labelEn: "Daily Quiz" },
      { to: "/phrases", label: "দৈনন্দিন বাক্য", labelEn: "Phrases" },
      { to: "/kids", label: "বাচ্চাদের", labelEn: "Kids" },
    ],
  },
];

const CHAT: NavItem = { to: "/chat", label: "AI টিচার", labelEn: "Chat" };

function AppLayout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [progress, setProgress] = useState(() => getProgress());
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setProgress(getProgress());
  }, [location.pathname]);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    if (openMenu) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [openMenu]);

  const level = levelFromXp(progress.xp);
  const xpPct = Math.min(100, ((progress.xp % 50) / 50) * 100);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ===== Top Nav — sticky, editorial ===== */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-lg">
        {/* Beta warning bar — সাইট এখনো পুরোপুরি প্রস্তুত না */}
        <div className="border-b border-border/50 bg-gold text-gold-foreground">
          <div className="max-w-7xl mx-auto px-5 py-2 flex items-center justify-between gap-3 text-[11px] md:text-xs">
            <div className="font-bangla leading-snug">
              ⚠️ <b>বিটা সংস্করণ</b> — এই সাইট এখনো পুরোপুরি প্রস্তুত নয়, ভুল-ত্রুটি থাকতে পারে।
              আপনার মতামত আমাদের সবচেয়ে বড় সাহায্য।
            </div>
            <a
              href={FEEDBACK_URL}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-foreground/90 text-gold font-semibold hover:bg-gold-foreground transition"
            >
              <MessageSquare className="size-3" />
              <span className="font-bangla">মতামত দিন</span>
            </a>
          </div>
        </div>

        {/* Main nav row */}
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center gap-6" ref={menuRef}>
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <img
              src={logo}
              alt="AI"
              width={36}
              height={36}
              className="rounded-lg bg-card shadow-soft group-hover:scale-105 transition"
            />
            <div>
              <div className="font-display text-2xl leading-none italic tracking-tight">AI</div>
              <div className="text-[9px] uppercase tracking-[0.24em] opacity-55 mt-1">
                English Academy
              </div>
            </div>
          </Link>

          {/* Desktop nav — mega-menu style */}
          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {NAV.map((group) => {
              const hasActive = group.items.some((i) => isActive(i.to));
              const isOpen = openMenu === group.title;
              return (
                <div key={group.title} className="relative">
                  <button
                    onClick={() => setOpenMenu(isOpen ? null : group.title)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition ${
                      hasActive || isOpen
                        ? "text-primary bg-primary/8"
                        : "text-foreground/75 hover:text-foreground hover:bg-accent/60"
                    }`}
                  >
                    <span className="font-bangla">{group.title}</span>
                    <ChevronDown className={`size-3.5 transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-border bg-card p-2 shadow-elevated origin-top animate-in fade-in slide-in-from-top-1">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-primary/70 font-bold px-3 pt-2 pb-1.5">
                        {group.title}
                      </div>
                      {group.items.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition ${
                            isActive(item.to)
                              ? "bg-primary/10 text-primary font-semibold"
                              : "hover:bg-accent text-foreground/85"
                          }`}
                        >
                          <span className="font-bangla">{item.label}</span>
                          <span className="text-[10px] uppercase tracking-wider opacity-45">
                            {item.labelEn}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right rail — Settings + CTA */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <Link
              to="/settings"
              aria-label="Settings"
              title="Settings — API Key"
              className={`p-2 rounded-full transition ${
                isActive("/settings")
                  ? "bg-primary/12 text-primary"
                  : "text-foreground/70 hover:text-foreground hover:bg-accent"
              }`}
            >
              <SettingsIcon className="size-4" />
            </Link>
            <Link
              to={CHAT.to}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition shadow-soft ${
                isActive(CHAT.to)
                  ? "bg-primary text-primary-foreground"
                  : "bg-foreground text-background hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              <span className="font-bangla">{CHAT.label}</span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden ml-auto p-2 -mr-2 rounded-lg hover:bg-accent"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="max-w-7xl mx-auto px-5 py-4 space-y-5">
              <div className="flex items-center justify-between p-3 rounded-xl bg-primary/6 border border-primary/15">
                <div className="flex items-center gap-2 text-xs">
                  <Flame className="size-4 text-gold-foreground" />
                  <span className="font-semibold">{progress.streak} দিন streak</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="opacity-60">Level {level}</span>
                  <div className="h-1.5 w-20 rounded-full bg-primary/12 overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: `${xpPct}%` }}
                    />
                  </div>
                </div>
              </div>
              {NAV.map((group) => (
                <div key={group.title}>
                  <div className="eyebrow font-bangla mb-2 px-1">{group.title}</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {group.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`px-3 py-2.5 rounded-lg text-sm transition ${
                          isActive(item.to)
                            ? "bg-primary text-primary-foreground font-semibold"
                            : "bg-accent/50 hover:bg-accent text-foreground/85"
                        }`}
                      >
                        <div className="font-bangla text-sm">{item.label}</div>
                        <div className="text-[10px] uppercase tracking-wider opacity-60 mt-0.5">
                          {item.labelEn}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/settings"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border font-semibold"
                >
                  <SettingsIcon className="size-4" />
                  <span className="font-bangla">Settings</span>
                </Link>
                <Link
                  to={CHAT.to}
                  className="text-center px-4 py-3 rounded-xl bg-foreground text-background font-semibold"
                >
                  <span className="font-bangla">{CHAT.label}</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="flex-1 min-w-0">
        <Outlet />
      </div>

      {/* ===== Editorial footer ===== */}
      <footer className="border-t border-border/60 mt-16 py-10 bg-card/50">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="" width={32} height={32} className="rounded-lg bg-card" />
              <div className="font-display text-2xl italic">AI</div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 font-bangla max-w-xs leading-relaxed">
              বাংলা মাধ্যমের প্রতিটি মানুষের জন্য — শূন্য থেকে প্রফেশনাল ইংরেজি। সম্পূর্ণ ফ্রি, কোনো
              লগইন নেই।
            </p>
          </div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/80 font-semibold flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/roadmap" className="hover:text-primary">
              Roadmap
            </Link>
            <Link to="/why-english" className="hover:text-primary">
              Why English
            </Link>
            <Link to="/help" className="hover:text-primary">
              Help
            </Link>
            <Link to="/review" className="hover:text-primary">
              SRS Review
            </Link>
            <Link to="/chat" className="hover:text-primary">
              AI Tutor
            </Link>
            <Link to="/settings" className="hover:text-primary">
              Settings
            </Link>
          </div>

          <div className="text-xs text-muted-foreground font-bangla md:text-right">
            © {new Date().getFullYear()} AI. একটি ভালোবাসার প্রকল্প।
          </div>
        </div>
      </footer>
    </div>
  );
}
