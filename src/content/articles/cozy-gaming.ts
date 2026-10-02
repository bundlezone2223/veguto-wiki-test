import type { Section } from "./types";

export const article = {
  slug: `cozy-gaming`,
  title: `Cozy Gaming: The Genre That Lets You Breathe`,
  description: `Cozy games are low-pressure, beautifully soft, and built for evenings when you just want to exist.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `gaming`,
  tags: [`cozy gaming`, `cozy games`, `wholesome games`, `farm sim`],
  content: [
    { type: "h2", text: `What makes a game cozy` },
    { type: "list", ordered: false, items: [`No fail states (or very soft ones)`, `A loop you can play at any pace`, `Warm color palette and soft music`, `Quiet stakes — a town, a farm, a shop`] },
    { type: "h2", text: `Starter shelf` },
    { type: "p", text: `Stardew Valley, Animal Crossing, A Short Hike, Cozy Grove, Spiritfarer, Dorfromantik, Coffee Talk. Each one teaches a slightly different shape of 'cozy' — try a couple before deciding which mood you actually want.` },
  ] as Section[],
};

export default article;
