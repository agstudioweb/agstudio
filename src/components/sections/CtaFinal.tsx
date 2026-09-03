import { useRef } from "react";
import { gsap, eases, useIsoLayoutEffect, isFinePointer } from "@/lib/gsap";
import { useReveal } from "@/animations/useReveal";
import { TextReveal } from "@/components/TextReveal";
import { MagneticButton } from "@/components/MagneticButton";
import { Marquee } from "@/components/Marquee";
import { SectionId, Coordinates, MicroLabel } from "@/components/system/TechLayer";

export function CtaFinal() {
  const root = useReveal<HTMLDivElement>({ start: "top 80%" });
  const headline = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const el = headline.current;
    if (!el || !isFinePointer()) return;

    const xTo = gsap.quickTo(el, "x", { duration: 1.2, ease: eases.smooth });
    const yTo = gsap.quickTo(el, "y", { duration: 1.2, ease: eases.smooth });

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      xTo(((e.clientX - (r.left + r.width / 2)) / r.width) * 18);
      yTo(((e.clientY - (r.top + r.height / 2)) / r.height) * 12);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section id="contato" className="relative overflow-hidden bg-paper text-ink">
      <Marquee text="Let's build something" className="border-y border-ink/15 py-[3vh]" />

      <div ref={root} className="container-ag py-[clamp(6rem,14vw,16rem)]">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-ink/50">
          <SectionId id="007" />
          <p className="label-ag"><span className="section-num">07</span> — Contato</p>
          <Coordinates className="ml-auto hidden md:inline-flex" />
        </div>

        <div ref={headline} className="mt-[6vh]">
          <TextReveal
            as="h2"
            className="display-xl"
            lines={["Tem uma ideia?", <span className="pl-[12vw]">Vamos</span>, "construir."]}
          />
        </div>

        <div className="mt-[10vh] flex flex-wrap items-center justify-between gap-8">
          <MagneticButton
            label="Iniciar um projeto"
            href="https://wa.me/5514996800019"
            target="_blank"
            className="border-ink bg-ink text-paper hover:text-ink"
          />
          <MicroLabel className="basis-full text-ink/50">AGSTUDIO® — Creative Development — BR → Worldwide</MicroLabel>
        </div>
      </div>
    </section>
  );
}
