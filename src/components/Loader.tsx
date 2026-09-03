import { useRef, useState } from "react";
import { gsap, eases, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";

const DISCIPLINES = ["DESIGN", "CODE", "MOTION", "AI"];

/** AGSTUDIO system-boot preloader. Leaves upward and hands off to the hero. */
export function Loader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [gone, setGone] = useState(false);

  useIsoLayoutEffect(() => {
    if (prefersReducedMotion()) {
      setCount(100);
      setGone(true);
      onDone();
      return;
    }

    document.body.style.overflow = "hidden";
    const counter = { v: 0 };
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const speed = mobile ? 0.85 : 1;

    const tick = () => {
      const v = counter.v;
      setCount(Math.round(v));
      setCoords({
        x: Math.round(v * 9.99),
        y: Math.round((100 - v) * 9.99),
      });
    };

    const tl = gsap.timeline();

    tl.fromTo(
      ".loader-meta",
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: eases.smooth },
    )

      .to(
        counter,
        { v: 42, duration: 0.75 * speed, ease: "power2.out", onUpdate: tick },
        0.1,
      )
      .to(counter, { v: 68, duration: 0.45 * speed, ease: "power1.inOut", onUpdate: tick })
      .to(counter, { v: 91, duration: 0.6 * speed, ease: "power3.inOut", onUpdate: tick })
      .to(counter, { v: 100, duration: 0.5 * speed, ease: "expo.out", onUpdate: tick })
      .to({}, { duration: 0.2 })
      .to(".loader-fade", {
        opacity: 0,
        y: -26,
        duration: 0.5,
        stagger: 0.03,
        ease: "power3.out",
      })
      .to(
        root.current,
        {
          yPercent: -100,
          duration: 1.15,
          ease: "power4.inOut",
          onStart: () => {
            document.body.style.overflow = "";
            onDone();
          },
          onComplete: () => setGone(true),
        },
        "-=0.15",
      );

    return () => {
      document.body.style.overflow = "";
      tl.kill();
    };
  }, []);

  if (gone) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[9997] h-[100svh] w-screen overflow-hidden bg-ink"
      aria-hidden
    >
      <div className="relative flex h-full w-full flex-col justify-between px-[5vw] py-[6vh] md:px-[3vw] md:py-[3vw]">
        <div className="flex items-start justify-between gap-6">
          <div className="loader-meta loader-fade">
            <div className="display-lg leading-none">AGSTUDIO®</div>
            <div className="label-ag mt-3 leading-relaxed text-muted-ag">
              CREATIVE SYSTEM
              <br />
              BRAZIL / 2026
            </div>
          </div>
          <div className="loader-meta loader-fade label-ag text-right leading-relaxed text-muted-ag">
            SYSTEM
            <br />
            INITIALIZING
          </div>
        </div>

        <div className="loader-fade pointer-events-none relative flex flex-1 flex-col items-center justify-center">
          <div
            className="relative flex items-baseline tabular-nums leading-none"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              fontSize: "clamp(3rem, 11vw, 8rem)",
            }}
          >
            {String(Math.min(count, 100))
              .padStart(3, "0")
              .split("")
              .map((d, i) => (
                <span key={`${i}-${d}`} className="loader-digit-box">
                  <span className="loader-digit">{d}</span>
                </span>
              ))}
            <span
              className="ml-[0.1em] text-accent-ag"
              style={{ fontSize: "0.22em", transform: "skewX(-8deg)", display: "inline-block" }}
            >
              %
            </span>
          </div>

          <div className="mt-7 h-px w-[min(58vw,420px)] overflow-hidden bg-paper/12">
            <div
              className="h-full bg-accent-ag"
              style={{ width: `${Math.min(count, 100)}%` }}
            />
          </div>

          <div className="label-ag mt-3 flex w-[min(58vw,420px)] justify-between text-muted-ag">
            <span>LOADING ASSETS</span>
            <span className="tabular-nums">{String(Math.min(count, 100)).padStart(3, "0")}/100</span>
          </div>
        </div>


        <div className="flex items-end justify-between gap-6">
          <div className="loader-meta loader-fade label-ag flex flex-wrap gap-x-4 gap-y-1 text-muted-ag md:flex-col md:gap-1">
            {DISCIPLINES.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="loader-meta loader-fade label-ag hidden text-right tabular-nums leading-relaxed text-muted-ag md:block">
            X {String(coords.x).padStart(3, "0")}
            <br />
            Y {String(coords.y).padStart(3, "0")}
          </div>
        </div>
      </div>
    </div>
  );
}
