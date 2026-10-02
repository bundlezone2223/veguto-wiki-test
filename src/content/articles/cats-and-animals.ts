import type { Section } from "./types";

export const article = {
  slug: `cats-and-animals`,
  title: `Cats & Animals: Soft Companions of the Internet`,
  description: `From neighborhood strays to the Shiba Inus of meme history, animals are the warm center of internet culture.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `cute-animals`,
  tags: [`cats`, `animals`, `kittens`, `pet care`, `cute animals`],
  content: [
    { type: "h2", text: `Why we love cat content` },
    { type: "p", text: `Cats are tiny, expressive and unpredictable — a perfect format for short videos. Watching a cat solve a problem (or refuse to) gives the same satisfaction as a 30-second story with a punchline.` },
    { type: "h2", text: `Basic kitten care` },
    { type: "list", ordered: false, items: [`Fresh water daily, in a wide bowl away from food`, `Two safe sleeping spots — one high, one hidden`, `Daily play time, even just 10 minutes with a wand toy`, `A vet visit within the first week of adoption`] },
    { type: "h2", text: `The aesthetic of animal blogs` },
    { type: "p", text: `Cottagecore, fairycore and softcore aesthetics all lean heavily on animals — a sleepy cat on a windowsill, a frog under a leaf. The animal isn't a prop; it's the heart of the mood.` },
    { type: "callout", title: `💡 Note`, text: `If you find a stray kitten, warmth first, food second, vet third. Never give cow's milk.` },
  ] as Section[],
};

export default article;
