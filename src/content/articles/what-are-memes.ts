import type { Section } from "./types";

export const article = {
  slug: `what-are-memes`,
  title: `What Are Memes? A Tiny Cultural Field Guide`,
  description: `Memes are the shared inside jokes of the internet — little images, phrases and formats that mutate as they travel.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `community`,
  tags: [`memes`, `internet culture`, `meme formats`, `viral images`],
  content: [
    { type: "h2", text: `Where memes come from` },
    { type: "p", text: `A meme is any tiny unit of culture — an image macro, a reaction GIF, a copypasta or a sound — that people remix and pass on. The fastest-spreading ones are usually simple shapes (a template) carrying a feeling (the punchline).` },
    { type: "h2", text: `Why they spread` },
    { type: "p", text: `Memes are reaction shortcuts. They compress a whole mood into one screenshot, which is why they thrive on Twitter/X, TikTok, Discord and Tumblr where speed matters more than polish.` },
    { type: "h2", text: `Anatomy of a good meme` },
    { type: "list", ordered: false, items: [`A recognizable template anyone can reuse`, `A specific, relatable feeling (not a generic joke)`, `Room to remix — the format must survive edits`, `Perfect timing inside a current moment`] },
    { type: "callout", title: `💡 Note`, text: `Memes age in dog years — what slaps on Monday can feel cringe by Friday. That's the fun.` },
  ] as Section[],
};

export default article;
