import type { Section } from "./types";

export const article = {
  slug: `gaming-genres-map`,
  title: `A Map of Gaming Genres in 2026`,
  description: `From cozy farm sims to soulslikes — a quick guide to the genre tags you'll see everywhere.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `gaming`,
  tags: [`gaming`, `video games`, `game genres`, `indie games`],
  content: [
    { type: "h2", text: `The big genre families` },
    { type: "list", ordered: false, items: [`Cozy — low stakes, gentle progression (Stardew Valley, Cozy Grove)`, `Indie RPG — small teams, story-first (Disco Elysium, Sea of Stars)`, `Soulslike — punishing combat, intricate level design`, `Roguelite — short runs, permanent upgrades (Hades, Balatro)`, `Sandbox — emergent play (Minecraft, Terraria)`] },
    { type: "h2", text: `Where indies live now` },
    { type: "p", text: `itch.io is the open garden, Steam Next Fest is the discovery moment, and Game Pass / PlayStation Plus pick up the breakout hits. Following a few curators beats scrolling the Steam front page.` },
  ] as Section[],
};

export default article;
