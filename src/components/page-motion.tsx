"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function PageMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        motion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        if (context.conditions?.reduceMotion) return;

        const mark = gsap.utils.toArray<HTMLElement>("[data-enter='mark']");
        if (mark.length) {
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
          tl.fromTo(mark, { autoAlpha: 0, y: 16, scale: 0.96 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.8 })
            .fromTo(
              "[data-enter='copy']",
              { autoAlpha: 0, y: 22 },
              { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 },
              "-=0.5",
            )
            .fromTo(
              "[data-enter='chip']",
              { autoAlpha: 0, y: 14 },
              { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.06 },
              "-=0.4",
            )
            .fromTo(
              "[data-enter='cta']",
              { autoAlpha: 0, y: 14 },
              { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.08 },
              "-=0.35",
            );
        }

        const reveals = gsap.utils.toArray<HTMLElement>("[data-enter='reveal']");
        if (reveals.length) {
          gsap.set(reveals, { autoAlpha: 0, y: 28 });
          ScrollTrigger.batch(reveals, {
            start: "top bottom",
            once: true,
            onEnter: (batch) => {
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.75,
                ease: "power3.out",
                stagger: 0.08,
                overwrite: true,
              });
            },
          });
        }

        let alive = true;
        document.fonts?.ready.then(() => {
          if (alive) ScrollTrigger.refresh();
        });

        return () => {
          alive = false;
        };
      },
    );

    return () => mm.revert();
  }, { scope: root });

  return (
    <div ref={root} className="contents">
      {children}
    </div>
  );
}
