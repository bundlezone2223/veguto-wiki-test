import type { Section } from "./types";

export const article = {
  slug: `kawaii-aesthetic`,
  title: `The Kawaii Aesthetic, Explained`,
  description: `Kawaii means 'cute' in Japanese, but as an aesthetic it's a whole philosophy of softness, pastels and tiny joys.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `aesthetics`,
  tags: [`kawaii`, `cute aesthetic`, `pastel`, `soft aesthetic`],
  content: [
    { type: "h2", text: `Core ingredients` },
    { type: "list", ordered: false, items: [`Pastel palette — soft pink, mint, lavender, butter yellow`, `Rounded shapes — no sharp corners, ever`, `Tiny mascots — bunnies, cats, ghosts, frogs`, `Hand-drawn type, hearts, sparkles ✨`] },
    { type: "h2", text: `Kawaii vs cutecore vs fairycore` },
    { type: "p", text: `Kawaii leans Japanese-pop and graphic. Cutecore is louder, kidcore-adjacent, with primary colors. Fairycore swaps the pop palette for mossy greens and mushroom illustrations. They share DNA but feel very different in a moodboard.` },
  ] as Section[],
};

export default article;
