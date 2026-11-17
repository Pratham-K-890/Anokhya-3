import Link from "next/link";
import { CalendarDays, MapPin, Trophy } from "lucide-react";
import { Mark } from "@/components/mark";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="section relative flex min-h-[92svh] flex-col items-center justify-center py-24 text-center">
        <div data-enter="mark" className="mb-8">
          <Mark size={104} className="drop-shadow-[0_0_40px_rgba(232,116,15,0.35)]" />
        </div>

        <p data-enter="copy" className="eyebrow mb-4">
          Dept. of AI &amp; ML · DSCE
        </p>

        <h1
          data-enter="copy"
          className="font-script text-glow text-7xl leading-none text-[var(--color-gold)] sm:text-8xl"
        >
          {site.name}
        </h1>

        <p data-enter="copy" className="mt-5 max-w-xl text-lg text-[var(--color-muted-foreground)] sm:text-xl">
          {site.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span data-enter="chip" className="chip">
            <CalendarDays size={14} className="text-[var(--color-electric)]" aria-hidden />
            {site.date.display}
          </span>
          <span data-enter="chip" className="chip">
            <MapPin size={14} className="text-[var(--color-electric)]" aria-hidden />
            {site.venue.name}
          </span>
          <span data-enter="chip" className="chip">
            <Trophy size={14} className="text-[var(--color-electric)]" aria-hidden />
            Prize pool {site.prizePool}
          </span>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#events"
            data-enter="cta"
            className="btn bg-[var(--color-electric)] px-8 text-[var(--color-electric-ink)] shadow-[0_8px_24px_-8px_rgba(2,151,222,0.65)] hover:bg-[var(--color-electric-hover)] hover:shadow-[0_8px_28px_-6px_rgba(58,180,234,0.55)] focus-visible:outline-[var(--color-electric)] active:scale-[0.97]"
          >
            Explore events
          </Link>
          <Link
            href="/#schedule"
            data-enter="cta"
            className="btn border border-[var(--color-electric)]/50 bg-[var(--color-electric)]/10 px-8 text-[var(--color-electric)] hover:bg-[var(--color-electric)]/18 focus-visible:outline-[var(--color-electric)] active:scale-[0.97]"
          >
            View schedule
          </Link>
        </div>
      </div>
    </section>
  );
}
