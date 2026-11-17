import Link from "next/link";
import { Globe } from "lucide-react";
import { Mark } from "@/components/mark";
import { InstagramIcon } from "@/components/icons";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-[var(--color-border)]">
      <div className="section py-16 text-center">
        <p className="eyebrow mb-3">Get in touch</p>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Questions, or want to sponsor {site.name}?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[var(--color-muted-foreground)]">
          Reach out on Instagram — we reply fast.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link href={site.instagram} target="_blank" rel="noreferrer" className="btn-primary">
            <InstagramIcon size={16} />
            {site.instagramHandle}
          </Link>
          <Link href={site.url} target="_blank" rel="noreferrer" className="btn-ghost">
            <Globe size={16} aria-hidden />
            anokhya.site
          </Link>
        </div>
      </div>

      <div className="section flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] py-6 text-sm text-[var(--color-muted-foreground)] sm:flex-row">
        <div className="flex items-center gap-2">
          <Mark size={20} />
          <span>
            © {new Date().getFullYear()} {site.name} · {site.organizer.college}
          </span>
        </div>
        <span>{site.venue.full}</span>
      </div>
    </footer>
  );
}
