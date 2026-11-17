/**
 * Day-of timeline shown on the schedule section.
 *
 * The sponsorship deck does not specify exact per-event timings, so these
 * slots are a reasonable placeholder draft, not confirmed times. Update
 * `start`/`end` (24h, minutes-from-midnight) once the organizing team locks
 * the real run sheet — nothing else needs to change.
 */
export type ScheduleItem = {
  slug: string;
  label: string;
  /** Minutes from midnight, e.g. 9:30 → 570 */
  start: number;
  end: number;
  lane: "general" | "ai" | "gaming" | "outdoor" | "creative";
};

export const dayStartMinutes = 9 * 60; // 09:00
export const dayEndMinutes = 18 * 60; // 18:00

export const scheduleItems: ScheduleItem[] = [
  { slug: "registration", label: "Registration & Inauguration", start: 9 * 60, end: 10 * 60, lane: "general" },
  { slug: "picture-to-prompt", label: "Picture to Prompt", start: 10 * 60, end: 12 * 60, lane: "ai" },
  { slug: "ai-or-a-lie", label: "AI or a Lie", start: 10 * 60, end: 12 * 60, lane: "ai" },
  { slug: "treasure-hunt", label: "Treasure Hunt", start: 11 * 60, end: 13 * 60, lane: "outdoor" },
  { slug: "capture-x", label: "Capture X", start: 10 * 60, end: 16 * 60, lane: "creative" },
  { slug: "bgmi", label: "BGMI", start: 12 * 60, end: 16 * 60, lane: "gaming" },
  { slug: "radiant-clash", label: "Radiant Clash — Valorant Finals", start: 13 * 60, end: 17 * 60, lane: "gaming" },
  { slug: "closing", label: "Prize Distribution & Closing", start: 17 * 60, end: 18 * 60, lane: "general" },
];
