import type { Section } from "./types";

export const article = {
  slug: `mbti-personality`,
  title: `MBTI & Enneagram: Personality Typing for OCs and Self`,
  description: `MBTI and the Enneagram are personality systems people use to understand themselves — and to make their OCs feel consistent.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `community`,
  tags: [`mbti`, `enneagram`, `personality types`, `16 personalities`],
  content: [
    { type: "h2", text: `MBTI in one breath` },
    { type: "p", text: `Four axes: Introvert/Extravert, Sensing/Intuition, Thinking/Feeling, Judging/Perceiving. Combine them and you get 16 types (INFP, ESTJ, ENTP and so on). Not science — but a useful vocabulary for talking about how someone processes the world.` },
    { type: "h2", text: `Enneagram in one breath` },
    { type: "p", text: `Nine core types, each driven by a specific fear and desire. Type 4 fears being ordinary; type 6 fears being unsafe; type 8 fears being controlled. Once you know an OC's number, their reactions write themselves.` },
    { type: "h2", text: `Using them for characters` },
    { type: "p", text: `Don't pick a type and write to the stereotype. Write the character first, then find the type that fits — and use the type's blind spots to push them into interesting conflict.` },
    { type: "callout", title: `💡 Note`, text: `Personality types describe patterns, not destiny. People grow out of them, and so do good characters.` },
  ] as Section[],
};

export default article;
