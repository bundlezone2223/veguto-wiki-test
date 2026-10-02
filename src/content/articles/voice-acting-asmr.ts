import type { Section } from "./types";

export const article = {
  slug: `voice-acting-asmr`,
  title: `Voice Acting & ASMR for Beginners`,
  description: `Whether you want to voice an OC or run an ASMR channel, the entry point is the same: clean audio and consistent reps.`,
  thumbnail: `/__l5e/assets-v1/dccf27e8-c71d-4cce-b693-23e691432d89/article-placeholder.jpg`,
  category: `streaming`,
  tags: [`voice acting`, `asmr`, `voiceover`, `microphone`],
  content: [
    { type: "h2", text: `Your starter setup` },
    { type: "list", ordered: false, items: [`A USB cardioid mic (e.g. Samson Q2U, Fifine K669)`, `A treated corner — blankets, pillows, a closet works`, `Audacity or Reaper for editing (both free / cheap)`, `A consistent recording time — same room, same distance`] },
    { type: "h2", text: `Practice loops` },
    { type: "p", text: `Read 10 minutes of fanfic aloud, daily. Record one short character monologue per week. Re-listen to your work from 30 days ago — the gap is where you'll hear your progress.` },
  ] as Section[],
};

export default article;
