import { useRef } from "react";
import { gsap, eases, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";

type Options = {
  /** ScrollTrigger start position. */
  start?: string;
  /** Delay before the masked lines climb out. */
  delay?: number;
  stagger?: number;
  /** Skip the ScrollTrigger — used when a timeline owns the reveal. */
  enabled?: boolean;
};

/**
 * Masked line reveal: every `.line-mask > span` inside the root climbs
 * out of its own overflow box. Never a fade.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>({
  start = "top 85%",
  delay = 0,
  stagger = 0.07,
  enabled = true,
}: Options = {}) {
  const root = useRef<T>(null);

  useIsoLayoutEffect(() => {
    if (!root.current || !enabled) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".line-mask > span");
      if (!lines.length) return;

      gsap.fromTo(
        lines,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.2,
          delay,
          stagger,
          ease: eases.reveal,
          scrollTrigger: { trigger: root.current, start },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [start, delay, stagger, enabled]);

  return root;
}
