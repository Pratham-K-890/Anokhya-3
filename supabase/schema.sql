-- Anokhya 3.0 — registrations table
-- Run this once in the Supabase SQL editor for your project.

create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  event_slug text not null check (
    event_slug in (
      'picture-to-prompt',
      'ai-or-a-lie',
      'bgmi',
      'radiant-clash',
      'treasure-hunt',
      'capture-x'
    )
  ),
  team_name text,
  leader_name text not null,
  leader_email text not null,
  leader_phone text not null,
  leader_usn text,
  leader_college text not null,
  -- Additional team members (excludes the leader). Empty array for solo events.
  members jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  unique (event_slug, leader_email)
);

alter table public.registrations enable row level security;

-- Public visitors may only ever INSERT a registration — never read, update,
-- or delete one back out. Organizers read data from the Supabase dashboard
-- (or the service role key) instead.
drop policy if exists "public can register" on public.registrations;
create policy "public can register"
  on public.registrations
  for insert
  to anon
  with check (true);

create index if not exists registrations_event_slug_idx on public.registrations (event_slug);
