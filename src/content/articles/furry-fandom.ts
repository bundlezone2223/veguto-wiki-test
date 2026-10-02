import type { Section } from "./types";

export const article = {
  slug: `furry-fandom`,
  title: `The Furry Fandom: A Friendly Overview`,
  description: `Furries are people who love anthropomorphic animal characters — and have built one of the most creative, art-driven fandoms online.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `community`,
  tags: [`furry`, `furries`, `fursona`, `anthro art`],
  content: [
    { type: "h2", text: `What's a fursona` },
    { type: "p", text: `A fursona is your personal anthro character — usually one species, a signature color palette and a small set of traits. It's a creative self-portrait, not a costume requirement.` },
    { type: "h2", text: `How the fandom works` },
    { type: "p", text: `It's mostly an art and writing community. Conventions, Telegram and Discord servers, and platforms like FurAffinity and Bluesky are the main hubs. Commissions from furry artists fund a huge chunk of the indie illustration economy.` },
    { type: "h2", text: `Common misconceptions` },
    { type: "p", text: `Most furries never own a fursuit — suits are expensive and optional. The core of the fandom is character design, storytelling and supporting each other's art.` },
  ] as Section[],
};

export default article;
