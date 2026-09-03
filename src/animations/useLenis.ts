import { useEffect, useState } from "react";
import type LenisType from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

let lenisInstance: LenisType | null = null;

export const getLenis = () => lenisInstance;

/**
 * Global smooth scroll. Mounted once from the root shell.
 * Lenis drives ScrollTrigger through gsap.ticker so scroll-linked
 * animations stay perfectly in sync with the interpolated scroll position.
 */
export function useSmoothScroll() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setReady(true);
      return;
    }

    let lenis: LenisType | null = null;
    let raf: (time: number) => void;
    let cancelled = false;

    void (async () => {
      const Lenis = (await import("lenis")).default;
      if (cancelled) return;

      lenis = new Lenis({
        lerp: 0.085,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
        syncTouch: true,
        syncTouchLerp: 0.09,
      });
      lenisInstance = lenis;

      lenis.on("scroll", ScrollTrigger.update);

      raf = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      ScrollTrigger.refresh();
      setReady(true);
    })();

    return () => {
      cancelled = true;
      if (raf) gsap.ticker.remove(raf);
      lenis?.destroy();
      if (lenisInstance === lenis) lenisInstance = null;
    };
  }, []);

  return ready;
}
