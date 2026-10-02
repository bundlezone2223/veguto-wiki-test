import type { Section } from "./types";

export const article = {
  slug: `intro-to-anime`,
  title: `An Intro to Anime for Brand-New Fans`,
  description: `Anime is Japanese animation, but it's also a whole library of genres — from cozy slice-of-life to isekai fantasy and dark psychological thrillers.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `anime-manga`,
  tags: [`anime`, `isekai`, `slice of life`, `shonen`, `shoujo`],
  content: [
    { type: "h2", text: `What counts as anime` },
    { type: "p", text: `Technically, anime just means animation made in Japan. Culturally it has become shorthand for a recognizable visual style — expressive eyes, dynamic motion lines, vivid color palettes — and a willingness to tell long, character-driven stories.` },
    { type: "h2", text: `Genres to start with` },
    { type: "list", ordered: false, items: [`Shonen — action and friendship arcs (Naruto, Demon Slayer)`, `Shoujo — romance and emotional growth (Fruits Basket)`, `Isekai — getting transported to a fantasy world`, `Iyashikei — healing, slow-paced slice of life`, `Seinen — darker, adult-oriented stories`] },
    { type: "h2", text: `How to watch` },
    { type: "p", text: `Pick a 12-episode series first. Single-cour shows are designed to land a complete arc fast, which makes them perfect for figuring out which genres click with you before committing to a 200+ episode shonen.` },
  ] as Section[],
};

export default article;
