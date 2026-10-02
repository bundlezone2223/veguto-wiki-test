import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader, SiteFooter, Divider } from "@/components/site-chrome";
import { LetterFilter, firstLetter } from "@/components/letter-filter";
import { allTags, tagSlug } from "@/content/articles";

export const Route = createFileRoute("/tags")({
  head: () => ({
    meta: [
      { title: "All Tags — Veguto Wiki" },
      {
        name: "description",
        content:
          "Browse all tags on Veguto Wiki — anime, kawaii, cozy gaming, VTubers, MBTI, gothic, pixel art and more.",
      },
      { property: "og:title", content: "All Tags — Veguto Wiki" },
      { property: "og:url", content: "/tags" },
    ],
    links: [{ rel: "canonical", href: "/tags" }],
  }),
  component: TagsPage,
});

function TagsPage() {
  const tags = allTags();
  const [letter, setLetter] = useState("ALL");

  const available = useMemo(
    () => new Set(tags.map((t) => firstLetter(t.tag))),
    [tags],
  );
  const filtered = useMemo(
    () => (letter === "ALL" ? tags : tags.filter((t) => firstLetter(t.tag) === letter)),
    [tags, letter],
  );

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Divider>🏷️ All Tags</Divider>
      <main className="mx-auto max-w-4xl px-4 pb-16">
        <p className="text-center text-sm text-muted-foreground">
          {tags.length} tags across all articles. Pick a vibe.
        </p>

        <div className="mt-6">
          <LetterFilter active={letter} onChange={setLetter} available={available} />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filtered.map(({ tag, count }) => (
            <Link
              key={tag}
              to="/tag/$slug"
              params={{ slug: tagSlug(tag) }}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              style={{ fontSize: `${Math.min(18, 12 + count * 1.5)}px` }}
            >
              #{tag} <span className="text-xs opacity-60">{count}</span>
            </Link>
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-muted-foreground">No tags starting with “{letter}”.</p>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
