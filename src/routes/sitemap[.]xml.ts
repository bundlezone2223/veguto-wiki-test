import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ARTICLES, CATEGORY_LIST, allTags, tagSlug } from "@/content/articles";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/articles", changefreq: "weekly", priority: "0.9" },
          { path: "/categories", changefreq: "weekly", priority: "0.8" },
          { path: "/tags", changefreq: "weekly", priority: "0.7" },
          { path: "/about", changefreq: "monthly", priority: "0.5" },
          ...CATEGORY_LIST.map((c) => ({
            path: `/category/${c.id}`,
            changefreq: "weekly" as const,
            priority: "0.7",
          })),
          ...allTags().map((t) => ({
            path: `/tag/${tagSlug(t.tag)}`,
            changefreq: "weekly" as const,
            priority: "0.5",
          })),
          ...ARTICLES.map((a) => ({
            path: `/wiki/${a.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
        ];


        const urls = paths
          .map(
            (e) =>
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
