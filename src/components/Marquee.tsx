import { useRef } from "react";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/**
 * Continuous GSAP marquee whose speed and direction react to scroll velocity.
 */
export function Marquee({
  text,
  className,
  baseSpeed = 60,
}: {
  text: string;
  className?: string;
  baseSpeed?: number;
}) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const trackEl = track.current;
    if (!trackEl || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const half = trackEl.scrollWidth / 2;
      const tween = gsap.to(trackEl, {
        x: -half,
        duration: half / baseSpeed,
        ease: "none",
        repeat: -1,
        modifiers: { x: (x) => `${gsap.utils.wrap(-half, 0, parseFloat(x))}px` },
      });

      let last = window.scrollY;
      let reset: number | undefined;

      const onScroll = () => {
        const y = window.scrollY;
        const v = y - last;
        last = y;
        tween.timeScale(gsap.utils.clamp(0.6, 5, 1 + Math.abs(v) * 0.12));
        if (Math.abs(v) > 1) {
          const dir = v > 0 ? 1 : -1;
          if (tween.reversed() === (dir > 0)) tween.reversed(dir < 0);
        }
        window.clearTimeout(reset);
        reset = window.setTimeout(() => tween.timeScale(1), 220);
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
        window.clearTimeout(reset);
        window.removeEventListener("scroll", onScroll);
      };
    }, root);

    return () => ctx.revert();
  }, [baseSpeed]);

  return (
    <div ref={root} className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div ref={track} className="flex w-max will-change-transform">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="display-xl pr-[0.25em]" aria-hidden={i > 0}>
            {text} —{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
