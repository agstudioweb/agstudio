import { useRef } from "react";
import { gsap, eases, useIsoLayoutEffect, isFinePointer, prefersReducedMotion } from "@/lib/gsap";

/**
 * Magnetic pull: the element leans toward the cursor within a capped
 * radius, then snaps home with an elastic release.
 */
export function useMagnetic<T extends HTMLElement = HTMLAnchorElement>(strength = 12) {
  const ref = useRef<T>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || !isFinePointer() || prefersReducedMotion()) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: eases.smooth });
    const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: eases.smooth });

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      xTo(gsap.utils.clamp(-strength, strength, dx * strength));
      yTo(gsap.utils.clamp(-strength, strength, dy * strength));
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: eases.elastic });
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      gsap.killTweensOf(el);
    };
  }, [strength]);

  return ref;
}
