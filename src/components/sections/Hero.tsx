import { useRef } from "react";
import { gsap, eases, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import { getLenis } from "@/animations/useLenis";
import { ScrollCue } from "@/components/system/TechLayer";
import { LogoMark } from "@/components/Logo";

/** Fullscreen editorial hero, centered/kinetic. Intro runs once the loader clears. */
export function Hero({ start }: { start: boolean }) {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    if (!start || !root.current) return;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion()) {
        const tl = gsap.timeline({ defaults: { ease: eases.reveal } });

        tl.fromTo(
          ".hero-meta > *",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 },
        )
          .fromTo(
            ".hero-title .reveal-line > span",
            { yPercent: 110, y: 0 },
            { yPercent: 0, y: 0, duration: 1.25, stagger: 0.09 },
            0.15,
          )
          .fromTo(".hero-lead", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.75")
          .fromTo(
            ".hero-chip",
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.06 },
            "-=0.55",
          )
          .fromTo(
            ".hero-cta > *",
            { y: 22, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 },
            "-=0.45",
          )
          .fromTo(".hero-watermark", { opacity: 0 }, { opacity: 1, duration: 1.4 }, 0.2);
      } else {
        gsap.set(".hero-title .reveal-line > span", { yPercent: 0, y: 0 });
      }

      // Parallax on the giant watermarks + type drift on exit.
      gsap.to(".hero-watermark-ag", {
        xPercent: 6,
        yPercent: -6,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-watermark-studios", {
        xPercent: -6,
        yPercent: 6,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-title", {
        scale: 1.06,
        yPercent: -6,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.fromTo(
        ".hero-meta, .hero-cta, .hero-lead",
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -40,
          ease: "none",
          immediateRender: false,
          scrollTrigger: { trigger: root.current, start: "top top", end: "60% top", scrub: true },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [start]);

  const jump = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#criacoes") as HTMLElement | null;
    if (!target) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(target);
    else target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={root}
      className="hero relative flex items-center overflow-hidden pt-[10vh] pb-[8vh] md:min-h-[100svh] md:pt-[18vh] md:pb-[10vh]"
    >
      {/* decorative layers */}
      <div aria-hidden className="hero-deco pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0" />
        <LogoMark className="hero-watermark hero-watermark-ag" />
        <LogoMark className="hero-watermark hero-watermark-studios" />
        <div className="hero-glow" />
      </div>

      <div className="container-ag relative z-10 flex flex-col items-center text-center">
        <div className="hero-meta flex flex-wrap items-center justify-center gap-x-7 gap-y-3 label-ag text-muted-ag">
          <span className="flex items-center gap-2">
            <span className="ag-status-dot" />
            Augusto Vargas — Creative Developer
          </span>
          <span className="flex items-center gap-2">
            <span className="ag-status-dot" />
            BR → Worldwide
          </span>
          <span className="flex items-center gap-2 text-accent-ag">
            <span className="ag-status-dot" />
            Disponível / Set 2026
          </span>
        </div>

        <h1 className="hero-title display-xl mt-[4vh] max-w-[22ch] text-balance md:mt-[6vh]">
          <span className="reveal-line">
            <span>Sites que</span>
          </span>
          <span className="reveal-line">
            <span>
              <em className="hero-accent">vendem</em> e
            </span>
          </span>
          <span className="reveal-line">
            <span>impressionam.</span>
          </span>
        </h1>

        <p className="hero-lead lead-ag mt-[3vh] max-w-[46ch] text-bone/75 md:mt-[5vh]">
          Sites, landing pages e web apps sob medida — design autoral, performance real e entrega em
          semanas, não em meses.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
          {["Web Design", "Creative Code", "Motion", "IA"].map((t) => (
            <span
              key={t}
              className="hero-chip rounded-full border border-border px-3.5 py-1.5 label-ag text-muted-ag"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="hero-cta mt-[4vh] flex w-full flex-wrap items-center justify-center gap-4 md:mt-[6vh] md:gap-5">
          <a
            href="https://wa.me/5514996800019"
            target="_blank"
            rel="noreferrer"
            className="ag-btn-solid label-ag rounded-full border border-accent-ag bg-accent-ag px-6 py-3 text-ink md:px-8 md:py-4"
          >
            Iniciar projeto
          </a>
          <a href="#criacoes" onClick={jump} data-cursor="next" className="roll-group label-ag text-muted-ag">
            Ver o que faço ↓
          </a>
        </div>
      </div>

      <ScrollCue className="absolute bottom-[3vh] left-1/2 -translate-x-1/2 text-muted-ag" />
    </section>
  );
}
