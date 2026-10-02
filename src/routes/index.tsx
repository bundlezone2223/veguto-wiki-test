import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, Divider } from "@/components/site-chrome";
import { SearchBar } from "@/components/search-bar";
import { ArticleCard } from "@/components/article-card";
import discordIconUrl from "@/assets/icons/discord.svg";
import {
  ARTICLES,
  CATEGORY_LIST,
  DISCORD_URL,
  allTags,
  articlesByCategory,
  featuredArticles,
  latestArticles,
  tagSlug,
} from "@/content/articles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veguto Wiki — Tiny guides for the internet we love" },
      {
        name: "description",
        content:
          "A cozy wiki about anime, manga, cozy gaming, kawaii & dark aesthetics, drawing, cosplay, VTubers, roleplay, MBTI and more.",
      },
      { property: "og:title", content: "Veguto Wiki" },
      {
        property: "og:description",
        content:
          "A cozy wiki about anime, manga, cozy gaming, kawaii & dark aesthetics, drawing, VTubers, roleplay and more.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Sidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-border bg-card p-5 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
        <h2 className="font-display text-3xl text-primary">Veguto Wiki</h2>

        <p className="veg-sidebar-heading">Quick nav</p>
        <nav className="flex flex-col gap-1">
          <Link to="/" className="veg-sidebar-link">🏠 Home</Link>
          <Link to="/articles" className="veg-sidebar-link">📚 All articles</Link>
          <Link to="/tags" className="veg-sidebar-link">🏷️ Tags</Link>
          <Link to="/about" className="veg-sidebar-link">✨ About the wiki</Link>
        </nav>

        <p className="veg-sidebar-heading">Categories</p>
        <nav className="flex flex-col gap-1">
          {CATEGORY_LIST.filter((c) => !["aesthetics", "dark-side", "community"].includes(c.id)).map((c) => (
            <Link
              key={c.id}
              to="/category/$id"
              params={{ id: c.id }}
              className="veg-sidebar-link"
            >
              <span>{c.emoji}</span>
              <span>{c.title}</span>
            </Link>
          ))}
        </nav>

        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#5865F2] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
        >
          <img src={discordIconUrl} alt="" className="h-5 w-5 [filter:brightness(0)_invert(1)]" />
          Join our Discord
        </a>
      </div>
    </aside>
  );
}

function Index() {
  const featured = featuredArticles();
  const latest = latestArticles(6);
  const anime = articlesByCategory("anime-manga").slice(0, 3);
  const gaming = articlesByCategory("gaming").slice(0, 3);
  const aesthetics = articlesByCategory("aesthetics").slice(0, 3);
  const tags = allTags().slice(0, 24);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 lg:grid-cols-[1fr_280px] lg:px-8">
        {/* Main column */}
        <main>
          {/* Hero card */}
          <section className="veg-hero">
            <p className="font-display text-2xl text-primary">welcome to</p>
            <h1 className="mx-auto mt-1 max-w-2xl font-display text-5xl leading-tight md:text-6xl">
              Veguto Wiki
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base text-foreground/70">
              Your cozy guide to anime, VTubing, cozy games, kawaii & dark aesthetics,
              and the soft little community in between. 🌸
            </p>
            <div className="mx-auto mt-6 max-w-md">
              <SearchBar size="lg" />
            </div>
          </section>

          {/* Stats */}
          <section className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="veg-stat">
              <div className="veg-stat-num">{ARTICLES.length}+</div>
              <div className="veg-stat-label">articles & guides</div>
            </div>
            <div className="veg-stat">
              <div className="veg-stat-num">{CATEGORY_LIST.length}</div>
              <div className="veg-stat-label">cozy categories</div>
            </div>
            <div className="veg-stat">
              <div className="veg-stat-num">{allTags().length}+</div>
              <div className="veg-stat-label">tags to explore</div>
            </div>
            <div className="veg-stat">
              <div className="veg-stat-num">∞</div>
              <div className="veg-stat-label">soft vibes</div>
            </div>
          </section>

          {/* Categories */}
          <h2 className="veg-section-title">Browse by category</h2>
          <section className="grid gap-4 sm:grid-cols-2">
            {CATEGORY_LIST.map((c) => (
              <Link
                key={c.id}
                to="/category/$id"
                params={{ id: c.id }}
                className="veg-card flex flex-col text-left"
              >
                <div className="text-4xl">{c.emoji}</div>
                <h3 className="mt-3 text-xl">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{c.blurb}</p>
              </Link>
            ))}
          </section>

          {/* Featured */}
          <h2 className="veg-section-title">✨ Featured articles</h2>
          <section className="grid gap-5 sm:grid-cols-2">
            {featured.map((a) => (
              <ArticleCard key={a.slug} article={a} compact />
            ))}
          </section>

          {/* Latest */}
          <h2 className="veg-section-title">🆕 Latest articles</h2>
          <section className="grid gap-5 sm:grid-cols-2">
            {latest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </section>

          {/* Anime spotlight */}
          <h2 className="veg-section-title">🌙 From Anime & Manga</h2>
          <section className="grid gap-5 sm:grid-cols-2">
            {anime.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </section>
          <div className="mt-4 text-right">
            <Link
              to="/category/$id"
              params={{ id: "anime-manga" }}
              className="text-sm font-semibold text-primary hover:underline"
            >
              See all anime & manga articles →
            </Link>
          </div>

          {/* Gaming spotlight */}
          <h2 className="veg-section-title">🎮 Cozy & Indie Gaming</h2>
          <section className="grid gap-5 sm:grid-cols-2">
            {gaming.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </section>

          {/* Aesthetics spotlight */}
          <h2 className="veg-section-title">🌸 Aesthetics Spotlight</h2>
          <section className="grid gap-5 sm:grid-cols-2">
            {aesthetics.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </section>

          {/* Discord banner */}
          <section className="mt-10">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#5865F2] via-[#7983f5] to-[#a78bfa] p-8 text-center text-white shadow-xl">
              <div className="text-4xl">💬</div>
              <h2 className="mt-2 font-display text-3xl text-white md:text-4xl">
                Join the Veguto Discord
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm opacity-90">
                Chat about anime, cozy games, art, OCs, VTubers and aesthetics.
              </p>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block rounded-full bg-white px-7 py-2.5 text-sm font-bold text-[#5865F2] shadow-md transition-transform hover:scale-105"
              >
                Open the invite →
              </a>
            </div>
          </section>

          {/* Tags */}
          <h2 className="veg-section-title">🏷️ Popular tags</h2>
          <section>
            <div className="flex flex-wrap gap-2">
              {tags.map(({ tag, count }) => (
                <Link
                  key={tag}
                  to="/tag/$slug"
                  params={{ slug: tagSlug(tag) }}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  #{tag} <span className="text-xs opacity-60">{count}</span>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-right">
              <Link to="/tags" className="text-sm font-semibold text-primary hover:underline">
                See all tags →
              </Link>
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <Sidebar />
      </div>

      <SiteFooter />
    </div>
  );
}
