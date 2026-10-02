import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, Divider } from "@/components/site-chrome";
import { ArticleCard } from "@/components/article-card";
import { articlesByTag, allTags, tagSlug, type Article } from "@/content/articles";

export const Route = createFileRoute("/tag/$slug")({
  loader: ({ params }) => {
    const items = articlesByTag(params.slug);
    if (items.length === 0) throw notFound();
    const original =
      allTags().find((t) => tagSlug(t.tag) === params.slug)?.tag ?? params.slug;
    return { items, tag: original };
  },
  head: ({ params, loaderData }) => {
    const tag = loaderData?.tag ?? params.slug;
    return {
      meta: [
        { title: `#${tag} — Veguto Wiki` },
        {
          name: "description",
          content: `All Veguto Wiki articles tagged #${tag}.`,
        },
        { property: "og:title", content: `#${tag} — Veguto Wiki` },
        { property: "og:url", content: `/tag/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/tag/${params.slug}` }],
    };
  },
  component: TagPage,
  notFoundComponent: () => (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-5xl text-primary">Tag not found</h1>
        <Link to="/tags" className="veg-pill mt-6">
          See all tags
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
});

function TagPage() {
  const { items, tag } = Route.useLoaderData() as { items: Article[]; tag: string };
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Divider>#{tag}</Divider>
      <main className="mx-auto max-w-6xl px-4 pb-16">
        <p className="text-center text-sm text-muted-foreground">
          {items.length} article{items.length === 1 ? "" : "s"} tagged #{tag}
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/tags" className="text-sm font-semibold text-primary hover:underline">
            ← Browse all tags
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
