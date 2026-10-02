import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, Divider } from "@/components/site-chrome";
import { articlesByCategory, getCategoryMeta, type CategoryMeta } from "@/content/articles";

export const Route = createFileRoute("/category/$id")({
  loader: ({ params }) => {
    const category = getCategoryMeta(params.id);
    if (!category) throw notFound();
    return { category, articles: articlesByCategory(params.id) };
  },
  head: ({ params, loaderData }) => {
    const category = loaderData?.category;
    if (!category) return { meta: [{ title: "Category — Veguto Wiki" }] };
    return {
      meta: [
        { title: `${category.title} — Veguto Wiki` },
        { name: "description", content: category.blurb },
        { property: "og:title", content: `${category.title} — Veguto Wiki` },
        { property: "og:description", content: category.blurb },
        { property: "og:url", content: `/category/${params.id}` },
      ],
      links: [{ rel: "canonical", href: `/category/${params.id}` }],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-5xl text-primary">Category not found</h1>
        <Link to="/categories" className="veg-pill mt-6">All categories</Link>
      </div>
      <SiteFooter />
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl">Couldn't load this category</h1>
      </div>
      <SiteFooter />
    </div>
  ),
});

function CategoryPage() {
  const data = Route.useLoaderData() as {
    category: CategoryMeta;
    articles: ReturnType<typeof articlesByCategory>;
  };
  const { category, articles } = data;

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Divider>{category.title}</Divider>
      <main className="mx-auto max-w-3xl px-4 pb-16">
        <div className="text-center">
          <div className="text-5xl">{category.emoji}</div>
          <h1 className="mt-3 font-display text-5xl">{category.title}</h1>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{category.blurb}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {articles.map((a) => (
            <Link key={a.slug} to="/wiki/$slug" params={{ slug: a.slug }} className="veg-card">
              <img src={a.thumbnail} alt="" className="h-32 w-full rounded-xl border border-border object-cover" />
              <h2 className="mt-2 text-2xl">{a.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary">
                Read article →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/categories" className="veg-pill">All categories</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

