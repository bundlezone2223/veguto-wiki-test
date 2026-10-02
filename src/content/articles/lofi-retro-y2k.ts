import type { Section } from "./types";

export const article = {
  slug: `lofi-retro-y2k`,
  title: `Lofi, Retro & Y2K Cyberpunk Aesthetics`,
  description: `Three nostalgia engines: lofi study vibes, retro pixel warmth, and chrome-y Y2K cyberpunk.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `aesthetics`,
  tags: [`lofi`, `retro aesthetic`, `y2k`, `cyberpunk`],
  content: [
    { type: "h2", text: `Lofi` },
    { type: "p", text: `Warm tape hiss, jazz chords, slow drums, a single looping anime gif. Lofi is studio comfort food — designed to put you in a soft focus state without demanding attention.` },
    { type: "h2", text: `Retro` },
    { type: "p", text: `CRT scanlines, 80s sunset gradients, pixel fonts, VHS noise. Retro aesthetics borrow specific decade signals — usually 80s arcade or 90s anime — and lean into the artifacts as features.` },
    { type: "h2", text: `Y2K Cyberpunk` },
    { type: "p", text: `Chrome text, frosted blue, butterfly clips, low-rise everything, neon city skylines. Y2K is the millennium-bug optimism remixed with cyberpunk's neon decay — equal parts shiny and uneasy.` },
  ] as Section[],
};

export default article;
