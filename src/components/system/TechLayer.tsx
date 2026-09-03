import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, eases, useIsoLayoutEffect, prefersReducedMotion, isFinePointer } from "@/lib/gsap";

/**
 * AG SYSTEM — second art-direction layer.
 * Micro typographic markers, coordinates, status and rules. All discreet,
 * all built on top of existing tokens (label-ag, accent-ag, hairline).
 */

/** Shared reveal: opacity + 8px lift + letter-spacing settle, on viewport enter. */
function useMicroReveal(ref: React.RefObject<HTMLElement | null>, delay = 0) {
  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }
    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 8, letterSpacing: "0.34em" },
      {
        opacity: 1,
        y: 0,
        letterSpacing: "0.16em",
        duration: 0.9,
        delay,
        ease: eases.smooth,
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);
}

/** AG / 001 — module identifier placed near a section start. */
export function SectionId({ id, className = "" }: { id: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useMicroReveal(ref);
  return (
    <span
      ref={ref}
      aria-hidden
      className={`label-ag inline-flex items-center gap-2 text-[0.625rem] opacity-60 ${className}`}
      style={{ opacity: 0 }}
    >
      <span className="inline-block h-[1px] w-4 bg-current opacity-50" />
      AG / {id}
    </span>
  );
}

/** Small editorial label — art direction, not copy. */
export function MicroLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useMicroReveal(ref);
  return (
    <span
      ref={ref}
      aria-hidden
      className={`label-ag text-[0.625rem] opacity-50 ${className}`}
      style={{ opacity: 0 }}
    >
      {children}
    </span>
  );
}

/** ● SYSTEM ONLINE — dot uses the existing accent, pulse is barely there. */
export function StatusTag({
  label = "System",
  value = "Online",
  className = "",
}: {
  label?: string;
  value?: string;
  className?: string;
}) {
  return (
    <span aria-hidden className={`label-ag inline-flex items-center gap-2 text-[0.625rem] opacity-65 ${className}`}>
      <span className="ag-status-dot" />
      {label} / {value}
    </span>
  );
}

/** X / Y readout. Follows the pointer on desktop (single rAF loop), static on mobile. */
export function Coordinates({ className = "", live = true }: { className?: string; live?: boolean }) {
  const xRef = useRef<HTMLSpanElement>(null);
  const yRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!live || !isFinePointer() || prefersReducedMotion()) return;
    let raf = 0;
    let px = 0;
    let py = 0;
    let dirty = false;

    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (!dirty) {
        dirty = true;
        raf = requestAnimationFrame(paint);
      }
    };
    const paint = () => {
      dirty = false;
      const pad = (n: number) => String(Math.round(n)).padStart(3, "0").slice(-3);
      if (xRef.current) xRef.current.textContent = pad(px);
      if (yRef.current) yRef.current.textContent = pad(py);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [live]);

  return (
    <span aria-hidden className={`label-ag inline-flex gap-3 text-[0.625rem] opacity-45 ${className}`}>
      <span>
        X <span ref={xRef}>021</span>
      </span>
      <span>
        Y <span ref={yRef}>044</span>
      </span>
    </span>
  );
}

/** 1px rule that draws itself from the left when it enters the viewport. */
export function TechRule({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      gsap.set(el, { scaleX: 1 });
      return;
    }
    const tween = gsap.fromTo(
      el,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.1,
        ease: eases.transition,
        scrollTrigger: { trigger: el, start: "top 94%", once: true },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className={`hairline w-full origin-left ${className}`}
      style={{ transform: "scaleX(0)" }}
    />
  );
}

/** Engineering-style corner brackets for large empty containers. */
export function CornerMarks({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <span className="ag-corner ag-corner--tl" />
      <span className="ag-corner ag-corner--tr" />
      <span className="ag-corner ag-corner--bl" />
      <span className="ag-corner ag-corner--br" />
    </div>
  );
}

/** Hero scroll cue — fades away once the page moves. */
export function ScrollCue({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      gsap.to(el, { opacity: window.scrollY > 40 ? 0 : 0.6, duration: 0.5, ease: eases.smooth });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div ref={ref} aria-hidden className={`label-ag text-[0.625rem] opacity-60 ${className}`}>
      <span className="ag-scroll-cue">Scroll ↓</span>
    </div>
  );
}

/** Desktop-only 01 / 07 position readout pinned to the viewport edge. */
export function SectionProgress({ total = 7 }: { total?: number }) {
  const [current, setCurrent] = useState(1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isFinePointer()) return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    if (!sections.length) return;

    const triggers = sections.map((s, i) =>
      ScrollTrigger.create({
        trigger: s,
        start: "top 45%",
        end: "bottom 45%",
        onToggle: (self) => {
          if (self.isActive) setCurrent(Math.min(i + 1, total));
        },
      }),
    );
    return () => triggers.forEach((t) => t.kill());
  }, [total]);

  useIsoLayoutEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;
    gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.6, ease: eases.smooth });
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed right-[max(1rem,2vw)] top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-2 label-ag text-[0.625rem] text-muted-ag mix-blend-difference md:flex"
      style={{ opacity: 0 }}
    >
      <span key={current} className="ag-progress-num text-current">
        {pad(current)}
      </span>
      <span className="h-6 w-[1px] bg-current opacity-40" />
      <span className="opacity-50">{pad(total)}</span>
    </div>
  );
}
