import { useRef, useState } from "react";
import { gsap, eases, useIsoLayoutEffect, isFinePointer } from "@/lib/gsap";
import { StarMark } from "@/components/Logo";

const LABELS: Record<string, string> = {
  view: "Ver",
  drag: "↔ Arraste",
  open: "Abrir",
  next: "Próximo",
};

/**
 * Interpolated custom cursor. Position is lerped on the GSAP ticker
 * (never assigned directly), and states come from `data-cursor` attributes.
 */
export function Cursor() {
  const root = useRef<HTMLDivElement>(null);
  const mark = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useIsoLayoutEffect(() => {
    if (!isFinePointer()) return;
    setEnabled(true);

    const el = root.current;
    if (!el) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...mouse };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const tick = () => {
      pos.x += (mouse.x - pos.x) * 0.35;
      pos.y += (mouse.y - pos.y) * 0.35;
      gsap.set(el, { x: pos.x, y: pos.y });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const zone = target?.closest?.("[data-cursor]") as HTMLElement | null;
      if (zone) {
        setState(zone.dataset['cursor'] ?? null);
        return;
      }
      const link = target?.closest?.("a, button");
      setState(link ? "link" : null);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      gsap.ticker.remove(tick);
    };
  }, []);

  useIsoLayoutEffect(() => {
    if (!enabled) return;
    const big = state && state in LABELS;

    gsap.to(mark.current, {
      scale: big ? 0 : state === "link" ? 1.25 : 1,
      rotation: state === "link" ? -8 : 0,
      opacity: big ? 0 : 1,
      duration: 0.5,
      ease: eases.smooth,
    });

    gsap.to(label.current, {
      scale: big ? 1 : 0,
      duration: 0.6,
      ease: big ? eases.elastic : eases.smooth,
    });
  }, [state, enabled]);

  return (
    <div
      ref={root}
      className={`cursor${enabled ? " cursor-enabled" : ""}`}
      aria-hidden
    >
      <div ref={mark} className="cursor-mark">
        <StarMark className="cursor-mark-svg" />
      </div>
      <div ref={label} className="cursor-label">
        <span>{state && LABELS[state] ? LABELS[state] : ""}</span>
      </div>
    </div>
  );
}
