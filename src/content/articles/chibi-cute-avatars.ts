import type { Section } from "./types";

export const article = {
  slug: `chibi-cute-avatars`,
  title: `Chibi & Cute Avatar Styles`,
  description: `Chibi is the art of squishing a character down to giant head, tiny body — pure cute distilled.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `art`,
  tags: [`chibi`, `cute avatars`, `chibi style`, `kawaii art`],
  content: [
    { type: "h2", text: `Chibi proportions` },
    { type: "p", text: `Standard chibi is roughly 2-3 heads tall (vs 7-8 for realistic). The face takes up most of the head, eyes take up most of the face, and limbs are short and rounded. Exaggerate everything cute, simplify everything else.` },
    { type: "h2", text: `Where chibis shine` },
    { type: "list", ordered: false, items: [`Twitch/Discord emotes (readable at 28px)`, `Sticker packs`, `Profile pictures and PNGTuber alt models`, `Merch — pins, keychains, charms`] },
  ] as Section[],
};

export default article;
