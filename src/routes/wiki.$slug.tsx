import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, Divider } from "@/components/site-chrome";
import { getCategoryMeta, getArticle, ARTICLES, tagSlug } from "@/content/articles";
import { ArticleBody } from "@/components/article-renderer";

export const Route = createFileRoute("/wiki/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    const article = loaderData?.article;
    if (!article) {
      return { meta: [{ title: "Article — Veguto Wiki" }] };
    }
    return {
      meta: [
        { title: `${article.title} — Veguto Wiki` },
        { name: "description", content: article.description },
        { name: "keywords", content: article.tags.join(", ") },
        { property: "og:title", content: `${article.title} — Veguto Wiki` },
        { property: "og:description", content: article.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/wiki/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/wiki/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            keywords: article.tags.join(", "),
            articleSection: getCategoryMeta(article.category)?.title,
            author: { "@type": "Organization", name: "Veguto Wiki" },
          }),
        },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-5xl text-primary">Article not found</h1>
        <p className="mt-3 text-muted-foreground">
          This little article doesn't exist (yet).
        </p>
        <Link to="/" className="veg-pill mt-6">Back home</Link>
      </div>
      <SiteFooter />
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl">Couldn't load this article</h1>
        <Link to="/" className="veg-pill mt-6">Back home</Link>
      </div>
      <SiteFooter />
    </div>
  ),
});

function ArticlePage() {
  const data = Route.useLoaderData() as { article: ReturnType<typeof getArticle> };
  const article = data.article!;
  const category = getCategoryMeta(article.category);
  const related = ARTICLES.filter(
    (other) => other.category === article.category && other.slug !== article.slug,
  ).slice(0, 3);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Divider>{category?.title ?? "Article"}</Divider>

      <main className="mx-auto max-w-2xl px-4 pb-16">
        <Link to="/articles" className="mb-4 inline-block text-sm font-semibold text-primary hover:underline">
          ← All articles
        </Link>

        <article className="rounded-2xl border border-border bg-card p-6 shadow-[0_4px_15px_rgba(0,0,0,0.05)] md:p-10">
          <ArticleBody article={article} />

          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-xs">
            {article.tags.map((k) => (
              <Link
                key={k}
                to="/tag/$slug"
                params={{ slug: tagSlug(k) }}
                className="rounded-full border border-border bg-card px-3 py-1 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                #{k}
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/categories" className="veg-pill">Explore more articles</Link>
          </div>
        </article>

        {related.length > 0 && (
          <>
            <Divider>More like this</Divider>
            <div className="grid gap-5 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/wiki/$slug"
                  params={{ slug: r.slug }}
                  className="veg-card"
                >
                  <img src={r.thumbnail} alt="" className="h-28 w-full rounded-xl border border-border object-cover" />
                  <h3 className="mt-2 text-xl">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.description}</p>
                </Link>
              ))}
            </div>
          </>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
