import { useRef } from "react";
import { gsap, useIsoLayoutEffect, isFinePointer, prefersReducedMotion } from "@/lib/gsap";
import "./StarField.css";

/**
 * Fixed, very low opacity starfield behind the whole site.
 * Drifts subtly with the pointer (fine pointers only).
 */
export function BackgroundTexture() {
  const el = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return;
    const node = el.current;
    if (!node) return;

    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 18;
      target.y = (e.clientY / window.innerHeight - 0.5) * 18;
    };

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.04;
      pos.y += (target.y - pos.y) * 0.04;
      gsap.set(node, { x: pos.x, y: pos.y });
    };

    window.addEventListener("mousemove", onMove);
    gsap.ticker.add(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <div className="bg-texture" aria-hidden>
      <div ref={el} className="bg-texture-layer starfield">
        <div className="stars" />
        <div className="stars2" />
        <div className="stars3" />
      </div>
    </div>
  );
}
