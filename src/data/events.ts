export type EventCategory = "AI" | "Gaming" | "Outdoor" | "Creative";

export type EventDetail = {
  slug: string;
  name: string;
  category: EventCategory;
  eventType: string;
  format: string;
  rules?: string;
  judging?: string;
  task?: string;
  /** Exact team size required. 1 means solo. */
  teamSize: { min: number; max: number };
  /** Extra constraint shown alongside team size, e.g. a cap on slots. */
  capacityNote?: string;
};

/**
 * All 6 Anokhya 3.0 events, transcribed from the official sponsorship deck.
 * `slug` is used in URLs and as the `event_slug` value stored in Supabase —
 * keep it stable once registrations are live.
 */
export const events: EventDetail[] = [
  {
    slug: "picture-to-prompt",
    name: "Picture to Prompt",
    category: "AI",
    eventType: "AI-powered image-to-text prompt generation competition.",
    format:
      "Participants are shown an image and must create a prompt that accurately describes or recreates it using AI tools.",
    judging:
      "Based on prompt accuracy, creativity, clarity, and how closely the AI-generated output matches the given image.",
    teamSize: { min: 1, max: 1 },
  },
  {
    slug: "ai-or-a-lie",
    name: "AI or a Lie",
    category: "AI",
    eventType: "Artificial Intelligence identification and awareness competition.",
    format:
      "Participants are presented with different images, statements, or content and must identify whether they are AI-generated or real.",
    judging: "Based on correct identification, accuracy, and response time.",
    teamSize: { min: 1, max: 1 },
  },
  {
    slug: "bgmi",
    name: "BGMI",
    category: "Gaming",
    eventType: "Mobile-only BGMI tournament.",
    format: "Teams of 4 players compete in battle royale matches.",
    rules: "Strict fair-play rules ensure a competitive environment.",
    teamSize: { min: 4, max: 4 },
    capacityNote: "Limited to 4 teams",
  },
  {
    slug: "radiant-clash",
    name: "Radiant Clash — Valorant Showdown",
    category: "Gaming",
    eventType: "PC-based Valorant tournament for competitive gaming enthusiasts.",
    format:
      "32 teams of 5 players compete through online qualifiers, with the top 8 advancing to offline finals.",
    rules: "Strict fair-play ensured for a competitive environment.",
    teamSize: { min: 5, max: 5 },
    capacityNote: "Limited to 32 teams",
  },
  {
    slug: "treasure-hunt",
    name: "Treasure Hunt",
    category: "Outdoor",
    eventType: "Campus-wide puzzle and clue-solving hunt.",
    format: "Teams solve puzzles and decipher clues to uncover a hidden treasure.",
    task: "Follow clues and complete challenges to find the hidden treasure.",
    judging: "Based on problem-solving, strategy, and teamwork.",
    teamSize: { min: 3, max: 3 },
  },
  {
    slug: "capture-x",
    name: "Capture X",
    category: "Creative",
    eventType: "Photography competition.",
    format: "Capture creative photos based on the given theme.",
    task: "Click and submit your best photograph showcasing creativity and perspective.",
    judging: "Based on creativity, composition, and originality.",
    teamSize: { min: 1, max: 1 },
  },
];

export function getEventBySlug(slug: string): EventDetail | undefined {
  return events.find((event) => event.slug === slug);
}
