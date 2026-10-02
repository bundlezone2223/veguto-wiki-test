/**
 * Content generator.
 *
 *   bun run content:gen
 *
 * Reads every article in src/content/articles/*.ts, extracts unique
 * `category` and `tags` values, then:
 *   1. writes a definition file src/content/tags/<slug>.ts for every new tag
 *   2. adds any missing category id + meta to src/content/categories/categories.ts
 *
 * Existing files are never overwritten, so hand-tuned titles/blurbs survive.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const ARTICLES_DIR = join(ROOT, "src/content/articles");
const TAGS_DIR = join(ROOT, "src/content/tags");
const CATEGORIES_FILE = join(ROOT, "src/content/categories/categories.ts");

const slugify = (v: string) =>
  v.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

const titleize = (v: string) =>
  v
    .trim()
    .split(/\s+/)
    .map((w) => (w.length > 3 ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ")
    .replace(/^./, (c) => c.toUpperCase());

// ---- 1. scan articles ----
const articleFiles = readdirSync(ARTICLES_DIR).filter(
  (f) => f.endsWith(".ts") && f !== "index.ts" && f !== "types.ts",
);

const tags = new Map<string, string>(); // slug -> original label
const categories = new Set<string>();

for (const file of articleFiles) {
  const src = readFileSync(join(ARTICLES_DIR, file), "utf8");

  const cat = src.match(/category:\s*[`'"]([^`'"]+)[`'"]/)?.[1];
  if (cat) categories.add(cat.trim());

  const tagBlock = src.match(/tags:\s*\[([\s\S]*?)\]/)?.[1] ?? "";
  for (const m of tagBlock.matchAll(/[`'"]([^`'"]+)[`'"]/g)) {
    const label = m[1].trim();
    const slug = slugify(label);
    if (slug && !tags.has(slug)) tags.set(slug, label);
  }
}

// ---- 2. generate tag definition files ----
mkdirSync(TAGS_DIR, { recursive: true });
const createdTags: string[] = [];

for (const [slug, label] of [...tags.entries()].sort()) {
  const path = join(TAGS_DIR, `${slug}.ts`);
  if (existsSync(path)) continue;
  const body = `import type { TagMeta } from "./types";

export const tag: TagMeta = {
  slug: \`${slug}\`,
  label: \`${label}\`,
  title: \`${titleize(label)}\`,
  blurb: \`Everything tagged ${label} — guides, explainers and related articles.\`,
};

export default tag;
`;
  writeFileSync(path, body, "utf8");
  createdTags.push(slug);
}

// ---- 3. sync categories ----
let catSrc = readFileSync(CATEGORIES_FILE, "utf8");
const knownCats = new Set(
  [...(catSrc.match(/export const CATEGORIES = \[([\s\S]*?)\] as const;/)?.[1] ?? "").matchAll(
    /"([^"]+)"/g,
  )].map((m) => m[1]),
);
const missingCats = [...categories].filter((c) => !knownCats.has(c)).sort();

if (missingCats.length) {
  catSrc = catSrc.replace(
    /(export const CATEGORIES = \[)([\s\S]*?)(\] as const;)/,
    (_all, open: string, body: string, close: string) =>
      `${open}${body}${missingCats.map((c) => `  "${c}",\n`).join("")}${close}`,
  );
  catSrc = catSrc.replace(
    /(export const CATEGORY_META: Record<CategoryId, Omit<CategoryMeta, "id">> = \{)/,
    (all) =>
      `${all}\n${missingCats
        .map(
          (c) =>
            `  "${c}": { title: "${titleize(c.replace(/-/g, " "))}", emoji: "✨", blurb: "Articles in ${titleize(
              c.replace(/-/g, " "),
            )}." },`,
        )
        .join("\n")}`,
  );
  writeFileSync(CATEGORIES_FILE, catSrc, "utf8");
}

console.log(
  `content:gen — ${articleFiles.length} articles, ${tags.size} tags (${createdTags.length} new), ` +
    `${categories.size} categories (${missingCats.length} added)`,
);