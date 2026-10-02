import type { Section } from "./types";

export const article = {
  slug: `discord-communities`,
  title: `Discord Communities: Finding (and Building) Your Server`,
  description: `Discord is where most fandoms actually hang out now. Here's how to find good servers — and start your own.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `community`,
  tags: [`discord`, `discord servers`, `online communities`, `fandom`],
  content: [
    { type: "h2", text: `Finding good servers` },
    { type: "list", ordered: false, items: [`Disboard and Top.gg list public servers by tag`, `Search 'official discord' + your favorite artist or game`, `Small servers (under 500 members) usually feel warmer than huge ones`] },
    { type: "h2", text: `Starting one` },
    { type: "p", text: `Pick a tight niche — not 'art server' but 'pastel chibi artists who sketch daily.' Write three clear rules. Make 5-10 starter channels (not 30). Invite 5 friends before posting it publicly. A server with 10 active people beats one with 1,000 silent ones.` },
  ] as Section[],
};

export default article;
