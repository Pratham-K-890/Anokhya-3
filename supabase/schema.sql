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
  leader_usn text not null,
  leader_department text not null,
  leader_year_sem text not null,
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

-- Tables created by an earlier copy of this file still have college and an optional USN.
alter table public.registrations add column if not exists leader_department text;
alter table public.registrations add column if not exists leader_year_sem text;

do $$
begin
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'registrations'
      and column_name = 'leader_college'
  ) then
    alter table public.registrations alter column leader_college drop not null;
  end if;
end $$;
