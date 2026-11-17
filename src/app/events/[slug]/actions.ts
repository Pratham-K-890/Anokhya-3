"use server";

import { getEventBySlug } from "@/data/events";
import { buildRegistrationSchema, type Participant } from "@/lib/validation";
import { getSupabaseServerClient } from "@/lib/supabase-server";
import type { RegisterActionState } from "@/lib/register-state";

function readParticipant(formData: FormData, prefix: string): Participant {
  return {
    name: String(formData.get(`${prefix}.name`) ?? ""),
    email: String(formData.get(`${prefix}.email`) ?? ""),
    phone: String(formData.get(`${prefix}.phone`) ?? ""),
    usn: String(formData.get(`${prefix}.usn`) ?? ""),
    college: String(formData.get(`${prefix}.college`) ?? ""),
  };
}

export async function registerForEvent(
  _prevState: RegisterActionState,
  formData: FormData,
): Promise<RegisterActionState> {
  const slug = String(formData.get("eventSlug") ?? "");
  const event = getEventBySlug(slug);

  if (!event) {
    return { status: "error", message: "Unknown event." };
  }

  const extraMembers = event.teamSize.max - 1;
  const members = Array.from({ length: extraMembers }, (_, i) => readParticipant(formData, `member.${i}`));

  const schema = buildRegistrationSchema(event);
  const parsed = schema.safeParse({
    eventSlug: event.slug,
    teamName: String(formData.get("teamName") ?? ""),
    leader: readParticipant(formData, "leader"),
    members,
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const path = issue.path.join(".");
      if (!fieldErrors[path]) fieldErrors[path] = issue.message;
    }
    return { status: "error", message: "Check the highlighted fields.", fieldErrors };
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return {
      status: "error",
      message: "Registrations aren't open yet — the backend isn't connected. Please check back soon.",
    };
  }

  const { eventSlug, teamName, leader, members: parsedMembers } = parsed.data;

  const { error } = await supabase.from("registrations").insert({
    event_slug: eventSlug,
    team_name: teamName || null,
    leader_name: leader.name,
    leader_email: leader.email,
    leader_phone: leader.phone,
    leader_usn: leader.usn || null,
    leader_college: leader.college,
    members: parsedMembers,
  });

  if (error) {
    if (error.code === "23505") {
      return {
        status: "error",
        message: "This email is already registered for this event.",
        fieldErrors: { "leader.email": "Already registered for this event" },
      };
    }
    return { status: "error", message: "Something went wrong. Please try again." };
  }

  return { status: "success", message: "You're registered! See you at Anokhya 3.0." };
}
