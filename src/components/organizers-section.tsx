import Image from "next/image";
import { site } from "@/data/site";

export function OrganizersSection() {
  return (
    <section id="organizers" className="section py-20 sm:py-28">
      <div
        data-enter="reveal"
        className="glass-panel-raised flex flex-col items-center gap-8 p-8 text-center sm:p-12"
      >
        <p className="eyebrow">Organized under the aegis of {site.organizer.aegis}</p>
        <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          {site.organizer.department}, {site.organizer.college}
        </h2>

        <div className="w-full max-w-3xl rounded-2xl bg-black/40 p-4">
          <Image
            src="/brand/organizers-banner.png"
            alt="Institution's Innovation Council, Anokhya, DSCE, ACM, DSCE IQAC and CodeZero logos"
            width={2200}
            height={356}
            className="h-auto w-full"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
