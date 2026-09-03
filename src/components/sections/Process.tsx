import { useRef, useState } from "react";
import { gsap, useIsoLayoutEffect } from "@/lib/gsap";
import { SectionId } from "@/components/system/TechLayer";

const STEPS = [
  { title: "Ideia", body: "Entender o problema real antes de desenhar qualquer tela." },
  { title: "Estratégia", body: "Definir escopo, hierarquia e o que precisa ser memorável." },
  { title: "Design", body: "Sistema tipográfico, grid fluido e direção de arte." },
  { title: "Build", body: "Front-end limpo, componentizado e rápido." },
  { title: "Motion", body: "Timing, easing e continuidade — a camada que dá peso." },
  { title: "Launch", body: "Performance, acessibilidade e medição." },
];

/** Sticky process with an active-step progress rail. */
export function Process() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, i) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActive(i),
            onEnterBack: () => setActive(i),
          },
        });
      });

      gsap.fromTo(
        ".process-rail-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: { trigger: el, start: "top center", end: "bottom center", scrub: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="section-ag relative bg-paper text-ink">
      <div className="container-ag grid gap-[6vh] md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-[18vh]">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-ink/50">
              <SectionId id="004" />
              <p className="label-ag"><span className="section-num">04</span> — Processo</p>
            </div>
            <h2 className="display-xl mt-[3vh] text-[clamp(2.6rem,6.5vw,6.5rem)]">
              Como eu
              <br />
              construo
            </h2>
            <p className="label-ag mt-[6vh] text-ink/50">
              Etapa {String(active + 1).padStart(2, "0")} / {String(STEPS.length).padStart(2, "0")}
            </p>
          </div>
        </div>

        <div className="relative md:col-span-6 md:col-start-7">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-ink/15 md:block">
            <div className="process-rail-fill h-full w-px bg-ink" />
          </div>

          <div className="md:pl-[clamp(1.5rem,4vw,5rem)]">
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                className="process-step border-t border-ink/15 py-[clamp(2rem,5vw,5rem)] transition-opacity duration-700"
                style={{ opacity: active === i ? 1 : 0.35 }}
              >
                <div className="flex items-baseline gap-6">
                  <span className="label-ag text-ink/50">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display-lg text-[clamp(1.7rem,3.4vw,3.2rem)]">{s.title}</h3>
                </div>
                <p className="body-ag mt-4 max-w-[42ch] text-ink/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
