import type { MetadataRoute } from "next";
import { events } from "@/data/events";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    ...events.map((event) => ({
      url: `${site.url}/events/${event.slug}`,
      priority: 0.8,
    })),
  ];
}
