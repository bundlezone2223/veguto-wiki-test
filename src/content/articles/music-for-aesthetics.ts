import type { Section } from "./types";

export const article = {
  slug: `music-for-aesthetics`,
  title: `Music for Every Aesthetic`,
  description: `An aesthetic without a soundtrack is half-finished. Here's the music that pairs with each vibe.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `aesthetics`,
  tags: [`music`, `lofi`, `playlist`, `soundtrack`],
  content: [
    { type: "h2", text: `Pairings` },
    { type: "list", ordered: false, items: [`Kawaii → future funk, J-pop, Kero Kero Bonito`, `Lofi → ChilledCow / Lofi Girl radio, Nujabes`, `Goth → Sisters of Mercy, Bauhaus, Type O Negative`, `Cyber goth → Combichrist, Aesthetic Perfection`, `Y2K → 2000s pop, French electro`, `Cozy → studio Ghibli soundtracks, neoclassical piano`] },
    { type: "h2", text: `Building your own playlist` },
    { type: "p", text: `Start with 3 anchor songs that feel exactly like the aesthetic. Then look at the 'fans also like' section — that's how you find the next 30 tracks without losing the mood.` },
  ] as Section[],
};

export default article;
