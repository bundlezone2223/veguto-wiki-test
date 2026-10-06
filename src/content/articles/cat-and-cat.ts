export type Section =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "callout"; title: string; text: string };

export const article = {
  title: "cat and cat",
  description: "just cat but cat is cat",
  thumbnail: "data:image/jpeg;base64,/9j/4AA...etc
  category: "anime",
  tags: ["cat","cute","meow"],
  content: [
    { type: "p", text: `
Cats are animals that eat tuna, sleep, play, sleep, love, and sleep. ` },
    { type: "h2", text: `what about cat? ` },
    { type: "p", text: `cat is cat

` },
    { type: "h2", text: `zjjn` },
    { type: "p", text: `shjdnznn` },
    { type: "h3", text: `sjjxjx` },
    { type: "list", ordered: false, items: [`hdhxhx`, `dhhx`, `sjhdhd`] },
    { type: "quote", text: `yy`, cite: `hhhhbb` },
    { type: "h3", text: `jjjj` }
  ] as Section[],
};


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
