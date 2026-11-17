import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { EventsSection } from "@/components/events-section";
import { ScheduleSection } from "@/components/schedule-section";
import { OrganizersSection } from "@/components/organizers-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <EventsSection />
      <ScheduleSection />
      <OrganizersSection />
    </>
  );
}
