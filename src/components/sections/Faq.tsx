import { useState } from "react";
import { useReveal } from "@/animations/useReveal";
import { TextReveal } from "@/components/TextReveal";
import { SectionId, TechRule } from "@/components/system/TechLayer";

const FAQ = [
  {
    q: "Como o escopo é definido?",
    a: "Antes de qualquer linha de código você recebe uma proposta com entregas, etapas e prazo fechados — os prazos por tipo de projeto estão na seção Escopo, acima. Nada entra depois sem combinar antes.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "50% na aprovação do escopo e 50% na entrega. Projetos maiores são divididos em etapas mensais. Tudo registrado em proposta antes de começar.",
  },
  {
    q: "Você cuida do texto e das imagens?",
    a: "Sim. Estruturo a copy junto com o design e faço a direção de arte. Se você já tem material de marca, eu adapto ao sistema visual do site.",
  },
  {
    q: "O site é fácil de atualizar depois?",
    a: "Sim. Entrego com painel de conteúdo quando faz sentido, além de documentação curta em vídeo. Também ofereço manutenção mensal opcional.",
  },
  {
    q: "Você trabalha com quem está fora do Brasil?",
    a: "Sim — atendo em português e inglês, remoto, com reuniões gravadas e acompanhamento assíncrono.",
  },
];

/** Objection-handling block: the last thing a client reads before contacting. */
export function Faq() {
  const root = useReveal<HTMLDivElement>({ start: "top 82%" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-ag relative bg-paper text-ink">
      <div ref={root} className="container-ag">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-ink/50">
          <SectionId id="006" />
          <p className="label-ag"><span className="section-num">06</span> — Dúvidas</p>
        </div>
        <TechRule className="mt-6 text-ink" />

        <div className="mt-[5vh] grid gap-[5vh] md:grid-cols-12">
          <TextReveal
            as="h2"
            className="display-xl md:col-span-5 text-[clamp(1.9rem,3.6vw,3.2rem)]"
            lines={["Perguntas", <span>frequentes</span>]}
          />

          <div className="md:col-span-7 md:col-start-6">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-t border-ink/15">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-baseline gap-6 py-[clamp(1.1rem,2vw,1.6rem)] text-left"
                  >
                    <span className="label-ag text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                    <span className="body-ag flex-1 font-medium">{item.q}</span>
                    <span aria-hidden className="label-ag text-ink/50">
                      {isOpen ? "—" : "+"}
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height,opacity] duration-500 ease-[var(--ease-out)]"
                    style={{ maxHeight: isOpen ? 320 : 0, opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="body-ag max-w-[58ch] pb-[clamp(1.2rem,2vw,2rem)] pl-[3.5rem] text-ink/70">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="border-t border-ink/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
