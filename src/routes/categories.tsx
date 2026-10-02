import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, Divider } from "@/components/site-chrome";
import { ARTICLES, CATEGORY_LIST, articlesByCategory } from "@/content/articles";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "All Categories — Veguto Wiki" },
      {
        name: "description",
        content:
          "Browse every Veguto Wiki category: anime & manga, gaming, aesthetics, art, streaming, community, cute animals and dark aesthetics.",
      },
      { property: "og:title", content: "All Categories — Veguto Wiki" },
      {
        property: "og:description",
        content:
          "Browse every Veguto Wiki category: anime, gaming, aesthetics, art, VTubers, roleplay, MBTI and more.",
      },
      { property: "og:url", content: "/categories" },
    ],
    links: [{ rel: "canonical", href: "/categories" }],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Divider>All Categories</Divider>
      <main className="mx-auto max-w-4xl px-4 pb-16">
        <div className="space-y-12">
          {CATEGORY_LIST.map((c) => {
            const items = articlesByCategory(c.id);
            return (
              <section key={c.id}>
                <div className="flex items-baseline justify-between gap-3 border-b border-border pb-2">
                  <h2 className="font-display text-3xl">
                    {c.emoji} {c.title}
                  </h2>
                  <Link
                    to="/category/$id"
                    params={{ id: c.id }}
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    View all →
                  </Link>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{c.blurb}</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {items.map((a) => (
                    <li key={a.slug}>
                      <Link
                        to="/wiki/$slug"
                        params={{ slug: a.slug }}
                        className="block rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-primary"
                      >
                        <img src={a.thumbnail} alt="" className="mr-2 inline-block h-8 w-12 rounded object-cover align-middle" />
                        <span className="font-medium text-foreground">{a.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground">
          {ARTICLES.length} articles and growing 🌸
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
