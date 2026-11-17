# Anokhya 3.0

Event website for **Anokhya 3.0** — *"Where tech meets the unforeseen"*, the tech fest run by the
Department of Artificial Intelligence & Machine Learning, Dayananda Sagar College of Engineering.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). That's it for browsing the site — registration
forms need Supabase (below) before they can actually save anyone.

### Connect Supabase (for registrations to work)

1. Create a project at [supabase.com](https://supabase.com).
2. Open the SQL editor and run [`supabase/schema.sql`](./supabase/schema.sql) once. It creates the
   `registrations` table and locks it down with RLS so the public can only ever *insert* a row —
   never read, edit, or delete one back out.
3. Copy `.env.example` to `.env.local` and fill in your project's URL and **anon** key
   (Project Settings → API):

   ```bash
   cp .env.example .env.local
   ```

4. Restart `npm run dev`. Submit a test registration on any `/events/<slug>` page, then check the
   `registrations` table in the Supabase dashboard (that's also how organizers read entries — there's
   no admin page here on purpose, keep participant data out of the public bundle).

### Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket (or `vercel` CLI → `vercel`).
2. Import it in [Vercel](https://vercel.com/new). Framework preset `Next.js` is auto-detected.
3. Add the two env vars from `.env.example` under Project Settings → Environment Variables
   (`SUPABASE_URL`, `SUPABASE_ANON_KEY`).
4. Deploy. No other config needed — `next.config.ts` has no custom build steps.

---

## What's here

- **Next.js 16** (App Router, TypeScript, Turbopack), **Tailwind CSS v4**, **Supabase JS**, **Zod**.
  No UI kit, no animation library, no extra state manager — the site is small enough not to need one.
- One dark, glassmorphic theme matching the official Anokhya branding (not light/dark — the fest has a
  fixed visual identity, so a theme toggle would fight the brand rather than serve it).
- Content (event rules, dates, prize pool) is transcribed from the official sponsorship deck and the
  "Final" poster. Two assumptions worth double-checking against the organizing team:
  - **Date**: the sponsorship deck says "02–03 December 2026", but the final poster says
    **Saturday, 28 November 2026**. The site uses the poster date (`src/data/site.ts`) since it's the
    more recent asset — confirm and fix if that's wrong.
  - **Schedule times**: the deck has no per-event timings, so `src/data/schedule.ts` has a placeholder
    run-of-day, clearly labeled "Tentative" on the page. Edit that file once real timings exist.
- No personal contact details (student coordinator names/phone numbers from the sponsorship deck) are
  on the site — only the public `@_anokhya` Instagram and the AIML Dept. DSCE LinkedIn page.

### Editing content

- `src/data/site.ts` — dates, venue, prize pool, socials.
- `src/data/events.ts` — the 6 events, rules, team sizes. `slug` doubles as the Supabase `event_slug`
  value, so changing a slug after registrations start means old rows won't match the new one.
- `src/data/schedule.ts` — the day-of timeline shown on the homepage.
- `public/brand/` — vector chip mark (`mark.svg`) plus PNG exports for favicons and Open Graph (`node scripts/generate-brand-mark.mjs`).

### Structure

```
src/
  app/            routes: home, /events/[slug] (details + register), sitemap, robots
  components/     UI (header, hero, event cards, schedule grid, register form, ...)
  data/           site/events/schedule content — the single source of truth
  lib/            supabase client, zod validation, small utils
supabase/
  schema.sql      registrations table + RLS policy
```
