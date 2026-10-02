import type { Section } from "./types";

export const article = {
  slug: `vtubers-pngtubers`,
  title: `VTubers, PNGTubers & Streamer Aesthetics`,
  description: `Streaming as an animated character — from a single static PNG to a fully rigged Live2D model.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `streaming`,
  tags: [`vtubers`, `pngtubers`, `live2d`, `streamer aesthetics`, `custom overlays`],
  content: [
    { type: "h2", text: `PNGTuber vs VTuber` },
    { type: "p", text: `A PNGTuber uses two PNGs — mouth open and mouth closed — that swap when you talk. A VTuber uses a rigged Live2D or 3D model that tracks your face, blinks, and emotes. PNG is the cheapest, fastest entry; Live2D is the production upgrade.` },
    { type: "h2", text: `Streamer aesthetics` },
    { type: "list", ordered: false, items: [`Cohesive overlay — same fonts, palette, frame style on every scene`, `Branded alerts — short, soft, on-character`, `A starting / BRB / ending scene with looping art`, `Emotes and chat badges that match the model`] },
    { type: "h2", text: `Where to commission` },
    { type: "p", text: `Twitter/X and VGen are the main marketplaces for model artists and riggers. Expect $200-500 for a starter PNGTuber set, $1000+ for a rigged Live2D. Always read the artist's TOS before paying.` },
  ] as Section[],
};

export default article;
