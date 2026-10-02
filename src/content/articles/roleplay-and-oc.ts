import type { Section } from "./types";

export const article = {
  slug: `roleplay-and-oc`,
  title: `Roleplay, OCs & Character Lore`,
  description: `Original characters and roleplay are the engine of every fandom — here's how to build a character that actually feels alive.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `community`,
  tags: [`roleplay`, `oc`, `original character`, `character lore`],
  content: [
    { type: "h2", text: `Building an OC` },
    { type: "list", ordered: false, items: [`One clear desire — what do they want this week?`, `One clear fear — what would they refuse to do?`, `A specific visual hook — one accessory you'd recognize in silhouette`, `A voice — three words they'd actually say`] },
    { type: "h2", text: `Roleplay etiquette` },
    { type: "p", text: `Match your partner's post length. Don't godmode (controlling someone else's character). Talk OOC about heavy topics before you write them. Roleplay is collaborative fiction — the writer next to you matters more than the plot.` },
  ] as Section[],
};

export default article;
