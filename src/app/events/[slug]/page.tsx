import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Camera, Users } from "lucide-react";
import { events, getEventBySlug } from "@/data/events";
import { categoryColor, eventIcons } from "@/lib/event-visuals";
import { RegisterForm } from "@/components/register-form";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return {
    title: event.name,
    description: event.eventType,
  };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const Icon = eventIcons[event.slug] ?? Camera;
  const color = categoryColor[event.category];
  const teamLabel = event.teamSize.max === 1 ? "Solo participation" : `Teams of ${event.teamSize.max}`;

  const details: { label: string; value: string }[] = [
    { label: "Format", value: event.format },
    ...(event.task ? [{ label: "Task", value: event.task }] : []),
    ...(event.rules ? [{ label: "Rules", value: event.rules }] : []),
    ...(event.judging ? [{ label: "Judging criteria", value: event.judging }] : []),
  ];

  return (
    <section className="section py-14 sm:py-20">
      <Link
        href="/#events"
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
      >
        <ArrowLeft size={16} aria-hidden />
        All events
      </Link>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div>
          <div
            className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{ backgroundColor: `${color}1a`, color }}
          >
            <Icon size={24} aria-hidden />
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{event.name}</h1>
          <p className="mt-3 text-lg text-[var(--color-muted-foreground)]">{event.eventType}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="chip" style={{ color, borderColor: `${color}40` }}>
              <Users size={14} aria-hidden />
              {teamLabel}
            </span>
            {event.capacityNote && <span className="chip">{event.capacityNote}</span>}
          </div>

          <dl className="mt-8 space-y-6">
            {details.map((detail) => (
              <div key={detail.label}>
                <dt className="eyebrow mb-1.5">{detail.label}</dt>
                <dd className="leading-relaxed text-[var(--color-foreground)]">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:sticky lg:top-24">
          <h2 className="mb-4 text-xl font-semibold">Register for {event.name}</h2>
          <RegisterForm event={event} />
        </div>
      </div>
    </section>
  );
}
