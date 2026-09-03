import { useRef } from "react";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";

/**
 * Scrub-linked vertical parallax with a scale settle — the reveal
 * language used for every piece of media on the site.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  amount = 8,
  scaleFrom = 1.08,
) {
  const target = useRef<T>(null);

  useIsoLayoutEffect(() => {
    const el = target.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -amount, scale: scaleFrom },
        {
          yPercent: amount,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el.closest("[data-parallax-scope]") ?? el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, [amount, scaleFrom]);

  return target;
}
