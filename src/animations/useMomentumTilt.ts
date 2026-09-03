import { useRef } from "react";
import { gsap, eases, useIsoLayoutEffect, isFinePointer, prefersReducedMotion } from "@/lib/gsap";

/**
 * Elements react to cursor *velocity*, not just position: a fast sweep
 * tilts them a few degrees, then they settle back.
 */
export function useMomentumTilt<T extends HTMLElement = HTMLDivElement>(max = 3) {
  const ref = useRef<T>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || !isFinePointer() || prefersReducedMotion()) return;

    let last = { x: 0, y: 0, t: 0 };
    let settle: number | undefined;

    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      const dt = Math.max(16, now - last.t);
      const vx = (e.clientX - last.x) / dt;
      const vy = (e.clientY - last.y) / dt;
      last = { x: e.clientX, y: e.clientY, t: now };

      gsap.to(el, {
        rotate: gsap.utils.clamp(-max, max, vx * 2.4),
        x: gsap.utils.clamp(-8, 8, vx * 6),
        y: gsap.utils.clamp(-8, 8, vy * 6),
        duration: 0.5,
        ease: eases.smooth,
      });

      window.clearTimeout(settle);
      settle = window.setTimeout(() => {
        gsap.to(el, { rotate: 0, x: 0, y: 0, duration: 1, ease: eases.elastic });
      }, 120);
    };

    const onLeave = () => gsap.to(el, { rotate: 0, x: 0, y: 0, duration: 0.9, ease: eases.elastic });

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      window.clearTimeout(settle);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      gsap.killTweensOf(el);
    };
  }, [max]);

  return ref;
}
