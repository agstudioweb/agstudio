import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useReveal } from "@/animations/useReveal";
import { TextReveal } from "@/components/TextReveal";
import { SectionId, TechRule, MicroLabel } from "@/components/system/TechLayer";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";

const WHATSAPP = "https://wa.me/5514996800019";

type Package = {
  index: string;
  name: string;
  time: string;
  body: string;
  items: string[];
  featured?: boolean;
  slug?: string;
};

const PACKAGES: Package[] = [
  {
    index: "01",
    name: "Landing Page",
    time: "3 a 7 dias",
    body: "Uma página feita para converter: narrativa, prova social e captura de contato.",
    items: ["Design autoral", "Copy estruturada", "Responsivo", "SEO técnico", "Deploy incluído"],
    slug: "landing-pages",
  },
  {
    index: "02",
    name: "Site Institucional",
    time: "7 a 15 dias",
    body: "Presença completa da marca, com múltiplas páginas, blog opcional e painel de conteúdo.",
    items: ["Até 6 páginas", "Motion e transições", "Blog / CMS", "Analytics", "1 mês de suporte"],
    featured: true,
    slug: "sites-institucionais",
  },
  {
    index: "03",
    name: "Web App / IA",
    time: "15 dias +",
    body: "Produto sob medida com login, banco de dados, integrações e recursos de IA.",
    items: ["Autenticação", "Banco de dados", "Integrações e APIs", "Recursos de IA", "Evolução contínua"],
    slug: "web-apps",
  },
];


/** Investment tiers — what a client actually needs to decide. */
export function Packages() {
  const root = useReveal<HTMLDivElement>({ start: "top 80%" });
  const cardsRef = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    if (!cardsRef.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".package-card",
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    }, cardsRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="pacotes" className="section-ag relative bg-ink">
      <div ref={root} className="container-ag">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-ag">
          <SectionId id="005" />
          <p className="label-ag"><span className="section-num">05</span> — Escopo</p>
          <MicroLabel className="ml-auto hidden md:inline">Escopo fechado — sem surpresa</MicroLabel>
        </div>
        <TechRule className="mt-6 text-bone" />

        <div className="mt-[5vh] grid gap-8 md:grid-cols-12 md:items-end">
          <TextReveal
            as="h2"
            className="display-xl md:col-span-8 text-left"
            lines={["Prazos menores,", "entrega no ritmo certo"]}
          />
          <p className="body-ag md:col-span-4 md:col-start-9 max-w-[38ch] text-muted-ag">
            Começamos em 3 a 7 dias. Cada projeto recebe uma proposta própria, com escopo e etapas
            definidos antes de qualquer linha de código.
          </p>
        </div>

        <div ref={cardsRef} className="mt-[8vh] grid gap-6 md:grid-cols-3 md:items-stretch">
          {PACKAGES.map((p) => (
            <article
              key={p.name}
              className={`package-card group flex flex-col border p-6 transition-all duration-500 md:p-8 ${
                p.featured
                  ? "border-accent-ag/60 bg-secondary/40 hover:border-accent-ag"
                  : "border-border hover:border-bone/30 hover:-translate-y-1"
              }`}
            >
              <div className="flex items-baseline justify-between label-ag text-muted-ag">
                <span>{p.index}</span>
                <span className="text-accent-ag">{p.time}</span>
              </div>
              <h3 className="display-lg mt-6">{p.name}</h3>
              <p className="mt-4 body-ag text-muted-ag">{p.body}</p>
              <ul className="mt-auto space-y-2 border-t border-border pt-5 text-[0.95rem] text-muted-ag">
                {p.items.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span aria-hidden className="text-accent-ag">
                      /
                    </span>
                    {i}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                {p.slug ? (
                  <Link
                    to="/servicos/$slug"
                    params={{ slug: p.slug }}
                    className="inline-flex items-center gap-2 label-ag text-bone transition-all duration-300 hover:gap-3 hover:opacity-70"
                  >
                    Ver detalhes <span aria-hidden>&rarr;</span>
                  </Link>
                ) : (
                  <a
                    href={`${WHATSAPP}?text=${encodeURIComponent(`Olá Augusto! Quero um orçamento de ${p.name}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 label-ag text-bone transition-all duration-300 hover:gap-3 hover:opacity-70"
                  >
                    Pedir orçamento <span aria-hidden>&rarr;</span>
                  </a>
                )}
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
