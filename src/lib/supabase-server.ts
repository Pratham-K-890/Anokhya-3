import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client for writing registrations.
 *
 * Intentionally NOT exposed to the client bundle (no `NEXT_PUBLIC_` prefix):
 * every insert happens inside a server action. The anon key only ever grants
 * `insert` on `registrations` per supabase/schema.sql's RLS policy, so it
 * cannot read or modify existing rows even if it leaked.
 *
 * Returns `null` when the project hasn't configured Supabase yet, so the
 * site still builds and renders before real keys are added.
 */
export function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (!url || !key) return null;

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}
