import Link from "next/link";
import { CalendarDays, MapPin, Trophy } from "lucide-react";
import { Mark } from "@/components/mark";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(232,116,15,0.22) 0%, rgba(232,116,15,0) 60%), radial-gradient(40% 35% at 85% 20%, rgba(246,211,122,0.12) 0%, rgba(246,211,122,0) 70%)",
        }}
      />

      <div className="section relative flex min-h-[92svh] flex-col items-center justify-center py-24 text-center">
        <Mark size={104} className="mb-8 drop-shadow-[0_0_40px_rgba(232,116,15,0.35)]" />

        <p className="eyebrow mb-4">Dept. of AI &amp; ML · DSCE</p>

        <h1 className="font-script text-glow text-7xl leading-none text-[var(--color-gold)] sm:text-8xl">
          {site.name}
        </h1>

        <p className="mt-5 max-w-xl text-lg text-[var(--color-muted-foreground)] sm:text-xl">{site.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="chip">
            <CalendarDays size={14} className="text-[var(--color-brand)]" aria-hidden />
            {site.date.display}
          </span>
          <span className="chip">
            <MapPin size={14} className="text-[var(--color-brand)]" aria-hidden />
            {site.venue.name}
          </span>
          <span className="chip">
            <Trophy size={14} className="text-[var(--color-brand)]" aria-hidden />
            Prize pool {site.prizePool}
          </span>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/#events" className="btn-primary px-8">
            Explore events
          </Link>
          <Link href="/#schedule" className="btn-ghost px-8">
            View schedule
          </Link>
        </div>
      </div>
    </section>
  );
}
