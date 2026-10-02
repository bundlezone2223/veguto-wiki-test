import type { Section } from "./types";

export const article = {
  slug: `drawing-fundamentals`,
  title: `Drawing Fundamentals: Where to Actually Start`,
  description: `Drawing isn't talent — it's a stack of small skills you can practice in any order. Here's a sane place to start.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `art`,
  tags: [`drawing`, `art fundamentals`, `sketching`, `line art`],
  content: [
    { type: "h2", text: `The five fundamentals` },
    { type: "list", ordered: false, items: [`Line confidence — long, single strokes`, `Shape & gesture — capturing motion in 30 seconds`, `Perspective — how lines collapse into a vanishing point`, `Value — the light-to-dark map of a scene`, `Anatomy — bones first, muscles later`] },
    { type: "h2", text: `A 30-day starter loop` },
    { type: "p", text: `10 minutes of gesture sketches, 10 minutes of one fundamental drill, 10 minutes of drawing whatever you want. The 'fun' block is non-negotiable — that's what keeps you coming back tomorrow.` },
    { type: "h2", text: `Tools don't matter (yet)` },
    { type: "p", text: `A ballpoint pen and printer paper will take you incredibly far. Upgrade your tools when a specific limitation actually frustrates you, not before.` },
  ] as Section[],
};

export default article;
