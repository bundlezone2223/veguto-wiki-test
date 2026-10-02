import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader, SiteFooter, Divider } from "@/components/site-chrome";
import { LetterFilter, firstLetter } from "@/components/letter-filter";
import { ArticleCard } from "@/components/article-card";
import { ARTICLES, CATEGORY_LIST } from "@/content/articles";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "All Articles — Veguto Wiki" },
      {
        name: "description",
        content:
          "Browse every Veguto Wiki article alphabetically — anime, manga, cozy gaming, VTubers, aesthetics, MBTI, OCs and more.",
      },
      { property: "og:title", content: "All Articles — Veguto Wiki" },
      { property: "og:url", content: "/articles" },
    ],
    links: [{ rel: "canonical", href: "/articles" }],
  }),
  component: AllArticlesPage,
});

function AllArticlesPage() {
  const [letter, setLetter] = useState("ALL");
  const [category, setCategory] = useState<string>("ALL");

  const sorted = useMemo(
    () => [...ARTICLES].sort((a, b) => a.title.localeCompare(b.title)),
    [],
  );
  const available = useMemo(
    () => new Set(sorted.map((a) => firstLetter(a.title))),
    [sorted],
  );
  const filtered = useMemo(
    () =>
      sorted.filter((a) => {
        if (category !== "ALL" && a.category !== category) return false;
        if (letter !== "ALL" && firstLetter(a.title) !== letter) return false;
        return true;
      }),
    [sorted, letter, category],
  );

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Divider>📚 All Articles</Divider>
      <main className="mx-auto max-w-5xl px-4 pb-16">
        <p className="text-center text-sm text-muted-foreground">
          {ARTICLES.length} articles · pick a letter or a category.
        </p>

        <div className="mt-6">
          <LetterFilter active={letter} onChange={setLetter} available={available} />
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setCategory("ALL")}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
              category === "ALL"
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary"
            }`}
          >
            All categories
          </button>
          {CATEGORY_LIST.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                category === c.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary"
              }`}
            >
              {c.emoji} {c.title}
            </button>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Showing {filtered.length} of {ARTICLES.length}
        </p>

        <section className="mt-6 grid gap-5 sm:grid-cols-2">
          {filtered.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </section>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            No articles match this filter.{" "}
            <Link to="/articles" className="text-primary hover:underline">
              Reset
            </Link>
          </p>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
