import { useRef } from "react";
import { gsap, eases, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import { SectionId, MicroLabel } from "@/components/system/TechLayer";

/** Short positioning statement between the hero and the capabilities catalogue. */
export function IntroWords() {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".intro-line");
      if (prefersReducedMotion()) {
        gsap.set(lines, { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        lines,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: eases.smooth,
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 70%", toggleActions: "play none none none" },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="section-ag relative bg-paper text-ink">
      <div className="container-ag">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-ink/50">
          <SectionId id="001" />
          <p className="label-ag"><span className="section-num">01</span> — Posicionamento</p>
          <MicroLabel className="ml-auto hidden md:inline">Estúdio de um só — escopo fechado</MicroLabel>
        </div>

        <div className="mt-[6vh] grid gap-[4vh] md:grid-cols-12">
          <h2 className="display-xl md:col-span-8 text-left text-[clamp(2rem,5vw,4.4rem)] leading-[1.02]">
            <span className="intro-line block">Um projeto por vez,</span>
            <span className="intro-line block">do conceito ao deploy.</span>
          </h2>
          <p className="intro-line lead-ag md:col-span-4 md:col-start-9 max-w-[40ch] text-ink/60">
            Sem terceirização e sem etapa perdida no meio do caminho: quem desenha é quem
            constrói, publica e acompanha o resultado.
          </p>
        </div>
      </div>
    </section>
  );
}
