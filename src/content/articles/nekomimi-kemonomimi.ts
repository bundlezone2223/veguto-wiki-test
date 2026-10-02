import type { Section } from "./types";

export const article = {
  slug: `nekomimi-kemonomimi`,
  title: `Nekomimi & Kemonomimi: Animal-Ear Characters`,
  description: `Cat ears, fox ears, wolf tails — kemonomimi is the design language of part-human, part-animal characters.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `cute-animals`,
  tags: [`nekomimi`, `kemonomimi`, `catgirl`, `anime cat ears`],
  content: [
    { type: "h2", text: `The vocabulary` },
    { type: "list", ordered: false, items: [`Nekomimi — cat ears (and usually a tail)`, `Kitsunemimi — fox ears, often with multiple tails`, `Inumimi — dog ears, very loyal energy`, `Usagimimi — bunny ears, soft & shy archetype`] },
    { type: "h2", text: `Design tips` },
    { type: "p", text: `Animal ears replace human ears — they sit on top of the head, not the sides. Match fur color to hair color (or contrast it deliberately). A matching tail sells the whole design; without it, the ears can look like a headband.` },
  ] as Section[],
};

export default article;
