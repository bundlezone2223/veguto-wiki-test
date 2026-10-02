import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, Divider } from "@/components/site-chrome";
import { SearchBar } from "@/components/search-bar";
import { ArticleCard } from "@/components/article-card";
import { searchArticles } from "@/content/articles";

type SearchParams = { q: string };

export const Route = createFileRoute("/search")({
  validateSearch: (s: Record<string, unknown>): SearchParams => ({
    q: typeof s.q === "string" ? s.q : "",
  }),
  head: () => ({
    meta: [
      { title: "Search — Veguto Wiki" },
      { name: "description", content: "Search articles across Veguto Wiki." },
      { name: "robots", content: "noindex,follow" },
    ],
  }),

  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const results = searchArticles(q);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Divider>🔍 Search</Divider>
      <main className="mx-auto max-w-4xl px-4 pb-16">
        <SearchBar initial={q} size="lg" />

        {q ? (
          <>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              {results.length} result{results.length === 1 ? "" : "s"} for{" "}
              <span className="font-semibold text-foreground">"{q}"</span>
            </p>

            {results.length === 0 ? (
              <div className="mt-10 text-center">
                <p className="text-base text-muted-foreground">
                  Nothing yet. Try a softer word — like "kawaii", "vtuber" or "isekai".
                </p>
                <Link to="/categories" className="veg-pill mt-6">
                  Browse categories
                </Link>
              </div>
            ) : (
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {results.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            )}
          </>
        ) : (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Type something above to search across {/* */} all articles, tags and categories.
          </p>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
