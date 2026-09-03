import { useReveal } from "@/animations/useReveal";
import { TextReveal } from "@/components/TextReveal";
import { SectionId, MicroLabel, TechRule } from "@/components/system/TechLayer";

/** Off-grid editorial about block — text drives the composition, not a portrait. */
export function About() {
  const root = useReveal<HTMLDivElement>({ start: "top 78%" });

  return (
    <section id="sobre" className="section-ag relative bg-paper text-ink" data-parallax-scope>
      <div ref={root} className="container-ag">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-ink/50">
          <SectionId id="003" />
          <p className="label-ag"><span className="section-num">03</span> — Sobre</p>
          <MicroLabel className="ml-auto hidden md:inline">Design Engineering</MicroLabel>
        </div>
        <TechRule className="mt-6 text-ink" />

        <div className="mt-[6vh] grid gap-[6vh] md:grid-cols-12">
          <TextReveal
            as="h2"
            className="display-xl md:col-span-12 text-left"
            lines={["Design,", "código e", "inteligência."]}
          />
        </div>

        <div className="mt-[10vh] grid gap-[4vh] md:grid-cols-12">
          <div className="label-ag md:col-span-3 text-ink/50">
            <p>Bauru, SP · Brasil</p>
            <p>Trabalho remoto worldwide</p>
          </div>
          <div className="md:col-span-6 md:col-start-6 space-y-6 body-ag">
            <p>
              Construo interfaces que unem estética e funcionalidade. Cada projeto começa no
              design — estrutura, ritmo visual e identidade — e evolui em código limpo, rápido e
              escalável.
            </p>
            <p className="text-ink/70">
              Uso inteligência artificial como acelerador real: produtos com LLM, automações
              conectadas a APIs, chatbots com memória e fluxos que reduzem trabalho manual sem
              perder o controle humano.
            </p>
            <p className="text-ink/70">
              O resultado são websites, web apps e produtos digitais que não apenas parecem
              premium, mas operam com propósito: convertem, integram e crescem junto com o negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
