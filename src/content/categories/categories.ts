// Single source of truth for allowable category identifiers.
// An article appears under a category only if its `meta.category`
// explicitly references one of these ids.

export const CATEGORIES = [
  "anime-manga",
  "gaming",
  "aesthetics",
  "art",
  "streaming",
  "community",
  "cute-animals",
  "dark-side",
] as const;

export type CategoryId = (typeof CATEGORIES)[number];

export type CategoryMeta = {
  id: CategoryId;
  title: string;
  emoji: string;
  blurb: string;
};

// Display metadata for each category id. Keys must be a subset of CATEGORIES.
export const CATEGORY_META: Record<CategoryId, Omit<CategoryMeta, "id">> = {
  "anime-manga": { title: "Anime & Manga", emoji: "🌙", blurb: "Anime, manga, manhwa, webtoons & light novels." },
  gaming: { title: "Gaming", emoji: "🎮", blurb: "Cozy games, indie RPGs, modding & virtual assets." },
  aesthetics: { title: "Aesthetics", emoji: "🌸", blurb: "Kawaii, lofi, Y2K, cyberpunk & dark gothic vibes." },
  art: { title: "Art & Drawing", emoji: "🎨", blurb: "Drawing, pixel art, chibi, custom brushes & fanart." },
  streaming: { title: "Streaming & VTubers", emoji: "🎀", blurb: "VTubers, PNGTubers, streamer aesthetics & overlays." },
  community: { title: "Community & Personality", emoji: "💌", blurb: "Roleplay, OCs, MBTI, Enneagram & Discord servers." },
  "cute-animals": { title: "Cats & Cute Creatures", emoji: "🐾", blurb: "Cats, kemonomimi, nekomimi & soft animal lore." },
  "dark-side": { title: "Darkness Side", emoji: "🖤", blurb: "Dark aesthetics, emo, creepypasta & cyber goth." },
};

// Enriched list, useful for iteration in UI.
export const CATEGORY_LIST: CategoryMeta[] = CATEGORIES.map((id) => ({
  id,
  ...CATEGORY_META[id],
}));

export const isCategoryId = (v: string): v is CategoryId =>
  (CATEGORIES as readonly string[]).includes(v);

export const getCategoryMeta = (id: string): CategoryMeta | undefined =>
  isCategoryId(id) ? { id, ...CATEGORY_META[id] } : undefined;

// ---- Cover gradients (placeholder visuals — swap for real images later) ----
const CATEGORY_GRADIENTS: Record<string, string> = {
  "anime-manga": "linear-gradient(135deg,#fbcfe8 0%,#c4b5fd 60%,#818cf8 100%)",
  gaming: "linear-gradient(135deg,#bbf7d0 0%,#7dd3fc 60%,#a78bfa 100%)",
  aesthetics: "linear-gradient(135deg,#fde2e4 0%,#ffd6a5 50%,#caffbf 100%)",
  art: "linear-gradient(135deg,#fef3c7 0%,#fbcfe8 60%,#a5b4fc 100%)",
  streaming: "linear-gradient(135deg,#fbcfe8 0%,#f9a8d4 60%,#fda4af 100%)",
  community: "linear-gradient(135deg,#e0e7ff 0%,#fbcfe8 60%,#fda4af 100%)",
  "cute-animals": "linear-gradient(135deg,#fff1f2 0%,#ffe4e6 50%,#fbcfe8 100%)",
  "dark-side": "linear-gradient(135deg,#1f2937 0%,#312e81 60%,#831843 100%)",
};

export const coverFor = (article: { category: string }) =>
  CATEGORY_GRADIENTS[article.category] ??
  "linear-gradient(135deg,#fbcfe8 0%,#c4b5fd 100%)";

