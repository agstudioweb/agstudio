import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";
import { useRouter } from "@tanstack/react-router";
import { gsap, eases, prefersReducedMotion } from "@/lib/gsap";
import { getLenis } from "@/animations/useLenis";

type Ctx = { go: (to: string, label?: string) => void; busy: boolean };

const TransitionContext = createContext<Ctx>({ go: () => {}, busy: false });

export const usePageTransition = () => useContext(TransitionContext);

/**
 * Continuous route change: a panel climbs over the viewport carrying the
 * title of the target, the route swaps behind it, then it climbs away.
 */
export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const panel = useRef<HTMLDivElement>(null);
  const labelEl = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [busy, setBusy] = useState(false);

  const go = useCallback(
    (to: string, nextLabel = "") => {
      if (busy) return;

      if (prefersReducedMotion() || !panel.current) {
        void router.navigate({ to });
        return;
      }

      setBusy(true);
      setLabel(nextLabel);

      const reset = () => {
        gsap.set(panel.current, { yPercent: 100 });
        gsap.set(labelEl.current, { opacity: 0 });
        setBusy(false);
      };
      // Safety net: never leave the panel covering the page.
      const watchdog = window.setTimeout(reset, 4000);

      const tl = gsap.timeline({ onComplete: () => window.clearTimeout(watchdog) });
      tl.set(panel.current, { yPercent: 100 })
        .set(labelEl.current, { opacity: 0, yPercent: 30 })
        .to(panel.current, { yPercent: 0, duration: 0.9, ease: eases.transition })
        .to(labelEl.current, { opacity: 1, yPercent: 0, duration: 0.5, ease: eases.smooth }, "-=0.45")
        .add(() => {
          void router.navigate({ to }).then(() => {
            getLenis()?.scrollTo(0, { immediate: true });
            window.scrollTo(0, 0);
          });
        })
        .to({}, { duration: 0.25 })
        .to(labelEl.current, { opacity: 0, duration: 0.3, ease: eases.smooth })
        .to(panel.current, {
          yPercent: -100,
          duration: 1,
          ease: eases.transition,
          onComplete: () => {
            window.clearTimeout(watchdog);
            setBusy(false);
          },
        });
    },
    [busy, router],
  );

  return (
    <TransitionContext.Provider value={{ go, busy }}>
      {children}
      <div className="transition-layer" style={{ pointerEvents: busy ? "all" : "none" }} aria-hidden>
        <div ref={panel} className="transition-panel">
          <div ref={labelEl} className="transition-label">
            <span className="display-lg px-6 text-center">{label}</span>
          </div>
        </div>
      </div>
    </TransitionContext.Provider>
  );
}
