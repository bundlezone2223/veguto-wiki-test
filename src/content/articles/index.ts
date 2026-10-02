// AUTO-AGGREGATED data layer.
// Add a new article by creating ./<slug>.ts exporting `article` (raw data only).
import type { ArticleData, Section } from "./types";
import {
  TAGS,
  TAG_LIST,
  TAG_META,
  getTagMeta,
  isTagSlug,
  tagSlug,
  allTags,
  articlesByTagSlug,
  type TagMeta,
} from "@/content/tags/tags";
import {
  CATEGORIES,
  CATEGORY_LIST,
  CATEGORY_META,
  getCategoryMeta,
  isCategoryId,
  coverFor,
  type CategoryId,
  type CategoryMeta,
} from "@/content/categories/categories";

export type { Section, ArticleData };
export type Article = ArticleData;
export type ArticleMeta = ArticleData;

const modules = import.meta.glob<{ article: ArticleData }>("./*.ts", {
  eager: true,
});

export const ALL_ARTICLES: ArticleData[] = Object.entries(modules)
  .filter(([path]) => !/\.\/(index|types)\.ts$/.test(path))
  .map(([, mod]) => mod.article)
  .filter(Boolean);

export const ARTICLE_METAS: ArticleData[] = ALL_ARTICLES;

export {
  CATEGORIES,
  CATEGORY_LIST,
  CATEGORY_META,
  getCategoryMeta,
  isCategoryId,
  coverFor,
};
export type { CategoryId, CategoryMeta };

// ---- Tags (auto-derived from article data; see src/content/tags/) ----
export {
  TAGS,
  TAG_LIST,
  TAG_META,
  getTagMeta,
  isTagSlug,
  tagSlug,
  allTags,
};
export type { TagMeta };

export const ALL_TAGS = () => TAGS;
export const tagExists = (slug: string) => isTagSlug(slug);
export const articlesByTag = (slug: string) => articlesByTagSlug(slug);

// ---- Article registry (existence rule: only articles referencing a known category) ----
export const ARTICLES: Article[] = ALL_ARTICLES.filter((a) => isCategoryId(a.category));

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);

export const getArticleContent = (slug: string): Section[] =>
  getArticle(slug)?.content ?? [];

export const articlesByCategory = (cat: string) =>
  ARTICLES.filter((a) => a.category === cat);

// ---- Site-wide config ----
export const DISCORD_URL = "https://discord.gg/your-invite";

// ---- Featured / latest ----
export const FEATURED_SLUGS = [
  "kawaii-aesthetic",
  "cozy-gaming",
  "vtubers-pngtubers",
  "dark-aesthetics",
];

export const featuredArticles = () =>
  FEATURED_SLUGS.map((s) => ARTICLES.find((a) => a.slug === s)).filter(
    (a): a is Article => Boolean(a),
  );

export const latestArticles = (limit = 6) => ARTICLES.slice(0, limit);

// ---- Search ----
export const searchArticles = (query: string) => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return ARTICLES.filter((a) => {
    const hay = [a.title, a.description, a.category, ...a.tags].join(" ").toLowerCase();
    return hay.includes(q);
  });
};
