import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Clock, MessageCircle } from "lucide-react";
import { LESSONS, LESSONS_BY_SLUG } from "@/data/lessons";

export const Route = createFileRoute("/_app/lessons/$slug")({
  loader: ({ params }) => {
    const lesson = LESSONS_BY_SLUG[params.slug];
    if (!lesson) throw notFound();
    return { lesson };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.lesson.title} — AI` },
          { name: "description", content: loaderData.lesson.description },
          { property: "og:title", content: loaderData.lesson.title },
          { property: "og:description", content: loaderData.lesson.description },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="flex-1 flex items-center justify-center text-center p-8">
      <div>
        <h1 className="font-display text-4xl">পাঠটি খুঁজে পাওয়া যায়নি</h1>
        <Link to="/lessons" className="text-primary mt-4 inline-block">
          ← পাঠসমূহে ফিরে যাও
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => <div className="p-8 text-destructive">{String(error)}</div>,
  component: LessonPage,
});

function LessonPage() {
  const { slug } = useParams({ from: "/_app/lessons/$slug" });
  const lesson = LESSONS_BY_SLUG[slug]!;
  const idx = LESSONS.findIndex((l) => l.slug === slug);
  const prev = idx > 0 ? LESSONS[idx - 1] : null;
  const next = idx < LESSONS.length - 1 ? LESSONS[idx + 1] : null;

  return (
    <main className="flex-1 overflow-y-auto">
      <article className="max-w-3xl mx-auto px-6 py-10">
        <Link
          to="/lessons"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition mb-6"
        >
          <ArrowLeft className="size-4" /> সব পাঠ
        </Link>

        <div className="flex items-center gap-2 mb-3">
          <span
            className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded level-badge-${lesson.level}`}
          >
            {lesson.level}
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="size-3" /> {lesson.minutes} মিনিট
          </span>
          <span className="text-xs text-muted-foreground">পাঠ {lesson.order}</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl leading-tight">{lesson.title}</h1>
        <div className="text-lg text-muted-foreground italic mt-1">{lesson.titleEn}</div>

        <div className="lesson-body mt-8">
          <ReactMarkdown>{lesson.content}</ReactMarkdown>
        </div>

        <div className="mt-12 p-5 rounded-2xl bg-accent border border-border">
          <div className="flex items-start gap-3">
            <MessageCircle className="size-5 text-primary shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold">এই পাঠ নিয়ে প্রশ্ন আছে?</div>
              <p className="text-sm text-muted-foreground mt-1">
                AI-কে জিজ্ঞেস করো। সে ধৈর্য নিয়ে বুঝিয়ে দেবে।
              </p>
              <Link
                to="/chat"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                AI-কে জিজ্ঞেস করো →
              </Link>
            </div>
          </div>
        </div>

        <nav className="mt-10 grid sm:grid-cols-2 gap-3">
          {prev ? (
            <Link
              to="/lessons/$slug"
              params={{ slug: prev.slug }}
              className="p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition"
            >
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                ← পূর্ববর্তী
              </div>
              <div className="font-display text-lg mt-1">{prev.title}</div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to="/lessons/$slug"
              params={{ slug: next.slug }}
              className="p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition text-right"
            >
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                পরবর্তী →
              </div>
              <div className="font-display text-lg mt-1">{next.title}</div>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>
    </main>
  );
}
