import { z } from "zod";
import type { EventDetail } from "@/data/events";

const phoneRegex = /^[0-9+\-\s()]{7,16}$/;

const participantSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  usn: z.string().trim().min(3, "Enter your USN").max(20),
  phone: z.string().trim().regex(phoneRegex, "Enter a valid phone number"),
  email: z.email("Enter a valid email ID"),
  department: z.string().trim().min(2, "Enter your department").max(80),
  yearSem: z.string().trim().min(1, "Enter your year and semester").max(40),
});

export type Participant = z.infer<typeof participantSchema>;

/** Builds the registration schema for one event, sized to its team rules. */
export function buildRegistrationSchema(event: EventDetail) {
  const extraMembers = event.teamSize.max - 1;

  return z.object({
    eventSlug: z.literal(event.slug),
    teamName: extraMembers > 0 ? z.string().trim().min(2, "Enter a team name").max(80) : z.string().optional(),
    leader: participantSchema,
    members: z.array(participantSchema).length(extraMembers),
  });
}

export type RegistrationInput = z.infer<ReturnType<typeof buildRegistrationSchema>>;
