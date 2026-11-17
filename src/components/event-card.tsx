import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import type { EventDetail } from "@/data/events";
import { categoryColor, eventIcons } from "@/lib/event-visuals";

export function EventCard({ event }: { event: EventDetail }) {
  const Icon = eventIcons[event.slug] ?? Camera;
  const color = categoryColor[event.category];
  const teamLabel =
    event.teamSize.max === 1 ? "Solo" : `Team of ${event.teamSize.max}`;

  return (
    <Link
      href={`/events/${event.slug}`}
      className="glass-panel group flex flex-col gap-4 p-6 transition-colors hover:bg-white/[0.06]"
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-2xl"
        style={{ backgroundColor: `${color}1a`, color }}
      >
        <Icon size={22} aria-hidden />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[var(--color-foreground)]">{event.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted-foreground)]">{event.eventType}</p>
      </div>

      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="chip" style={{ color, borderColor: `${color}40` }}>
          {teamLabel}
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-brand)] transition-transform group-hover:translate-x-0.5">
          Register
          <ArrowRight size={14} aria-hidden />
        </span>
      </div>
    </Link>
  );
}
