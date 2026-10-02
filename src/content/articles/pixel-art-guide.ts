import type { Section } from "./types";

export const article = {
  slug: `pixel-art-guide`,
  title: `Pixel Art: Tiny Canvases, Huge Vibes`,
  description: `Pixel art is drawing with limits — small canvas, limited palette, deliberate placement of every dot.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `art`,
  tags: [`pixel art`, `sprite art`, `aseprite`, `8bit`],
  content: [
    { type: "h2", text: `Why constraints help` },
    { type: "p", text: `When every pixel costs you something, you stop fussing. Pixel art forces you to find the silhouette first, the value second, the color third — exactly the order good illustration teaches anyway.` },
    { type: "h2", text: `Tools` },
    { type: "p", text: `Aseprite is the standard. Pixilart is great in-browser. LibreSprite is the free fork. Start at 32x32 — bigger canvases hide weaknesses for longer, which slows learning.` },
    { type: "h2", text: `Palettes` },
    { type: "p", text: `Borrow a palette before you make one. Lospec has thousands of curated ones. Pick a 16-color palette, finish 10 sprites in it, then start customizing.` },
  ] as Section[],
};

export default article;
