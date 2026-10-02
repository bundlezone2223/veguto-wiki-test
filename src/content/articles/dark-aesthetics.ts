import type { Section } from "./types";

export const article = {
  slug: `dark-aesthetics`,
  title: `Dark Aesthetics: Gothic, Emo, Grunge & Cyber Goth`,
  description: `The 'darkness side' of online aesthetics is a whole family — gothic romance, emo, grunge and cyber goth — each with its own visual grammar.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `dark-side`,
  tags: [`dark aesthetics`, `gothic`, `emo`, `grunge`, `cyber goth`],
  content: [
    { type: "h2", text: `The family tree` },
    { type: "list", ordered: false, items: [`Gothic — Victorian silhouettes, lace, candlelight, romantic melancholy`, `Emo — band tees, side-swept fringe, eyeliner, heart-on-sleeve lyrics`, `Grunge — thrifted layers, faded plaid, 90s alt-rock energy`, `Cyber Goth — neon UV, latex, rave goggles, industrial bass`] },
    { type: "h2", text: `Building your palette` },
    { type: "p", text: `Most dark aesthetics start from a near-black base and pick one accent: blood red for gothic, neon green for cyber, washed pastel for soft goth. Pick the accent first; it controls the whole mood.` },
    { type: "h2", text: `Soundtrack & rituals` },
    { type: "p", text: `Aesthetic without a soundtrack feels hollow. Goth has post-punk and darkwave, emo has 2000s alt-rock, grunge lives in Seattle, cyber goth runs on EBM and aggrotech.` },
  ] as Section[],
};

export default article;
