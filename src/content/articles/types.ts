export type Section =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "callout"; title: string; text: string };

export type ArticleData = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  tags: readonly string[];
  content: Section[];
};
