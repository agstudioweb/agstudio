import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useReveal } from "@/animations/useReveal";
import { TextReveal } from "@/components/TextReveal";
import dashboardSaaS from "@/assets/dashboard-saas.png.asset.json";
import capAi from "@/assets/cap-ai.jpg";
import brandIdentity from "@/assets/brand-identity.png.asset.json";
import landingTrafego from "@/assets/landing-trafego.png.asset.json";
import capMotion from "@/assets/cap-motion.jpg";
import capAutomations from "@/assets/cap-automations.jpg";
import { SectionId, CornerMarks } from "@/components/system/TechLayer";
import "./Capabilities3d.css";

type Capability = {
  index: string;
  kind: string;
  title: string;
  body: string;
  examples: string[];
  image: string;
  slug: string;
};

const CAPABILITIES: Capability[] = [
  {
    index: "01",
    kind: "Web Apps",
    image: dashboardSaaS.url,
    title: "Dashboards e painéis em tempo real",
    body: "Exemplo: painel de controle de SaaS com métricas de receita, funil de vendas, lista de clientes e gráficos atualizados — tudo em uma interface escura, limpa e pronta para escalar.",
    examples: ["SaaS dashboard", "CRM interno", "Marketplace", "Área de membros", "Full-stack"],
    slug: "web-apps",
  },
  {
    index: "02",
    kind: "AI Products",
    image: capAi,
    title: "Copiloto de atendimento",
    body: "Exemplo: um inbox de suporte com IA que lê o histórico do ticket, sugere a resposta pronta e cita a fonte na base de conhecimento. O time só revisa e envia.",
    examples: ["Copiloto de suporte", "Busca semântica", "Gerador de conteúdo", "LLMs & agentes"],
    slug: "produtos-ia",
  },
  {
    index: "03",
    kind: "Web Design",
    image: brandIdentity.url,
    title: "Identidade visual e design de marca",
    body: "Exemplo: sistema de identidade completo — logomarca, ícone, aplicações em dispositivos e redes sociais — com direção visual coesa, tipografia própria e paleta que comunica confiança.",
    examples: ["Site de estúdio", "Portfólio", "Site institucional", "Design system", "Interface"],
    slug: "web-design",
  },
  {
    index: "04",
    kind: "Landing Pages",
    image: landingTrafego.url,
    title: "Landing pages de alta conversão",
    body: "Exemplo: página de captura para lançamento com hero claro, formulário de e-mail, prova social, faixa de urgência e CTA acima da dobra — tudo otimizado para gerar lead e vender.",
    examples: ["Lançamento de produto", "Captura de leads", "Evento", "Pré-venda", "CRO"],
    slug: "landing-pages",
  },
  {
    index: "05",
    kind: "Motion & Interaction",
    image: capMotion,
    title: "Movimento como linguagem",
    body: "Exemplo: transição de página quadro a quadro — início, meio com máscara em movimento e fim — controlada por curva de easing customizada.",
    examples: ["Scroll narrativo", "Cursor interativo", "Transições de rota", "Micro-interações"],
    slug: "motion",
  },
  {
    index: "06",
    kind: "Automations",
    image: capAutomations,
    title: "Fluxos que rodam sozinhos",
    body: "Exemplo: chatbot no WhatsApp qualifica o lead, e o fluxo por trás dispara webhook, checa a condição e envia o e-mail certo — sem ninguém no meio.",
    examples: ["Chatbot de WhatsApp", "Integração de APIs", "E-mails automáticos", "Relatórios"],
    slug: "automacoes",
  },
];

/** "O que podemos criar" — horizontal expanding image cards with details below. */
export function Capabilities() {
  const titleRef = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<number>(0);
  const item = CAPABILITIES[active] ?? CAPABILITIES[0]!;

  return (
    <section id="criacoes" className="section-ag relative overflow-hidden">
      <div className="container-ag">
        <div ref={titleRef} className="mb-[3.5vh] flex flex-wrap items-end justify-between gap-5 md:mb-[4vh]">
          <div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-ag">
              <SectionId id="002" />
              <p className="label-ag"><span className="section-num">02</span> — Capacidades</p>
            </div>
            <TextReveal
              as="h2"
              className="display-xl mt-4 text-left"
              lines={["O que", "podemos criar"]}
            />
          </div>
          <span className="max-w-[34ch] text-[0.95rem] leading-relaxed text-muted-ag">
            Casos em produção chegam em breve. Enquanto isso, estes são os tipos de produto que construo
            de ponta a ponta — do conceito ao deploy.
          </span>
        </div>
      </div>

      <div className="expand-gallery">
        {CAPABILITIES.map((cap, i) => {
          const isActive = active === i;
          return (
            <article
              key={cap.kind}
              className={`expand-card expand-card--${cap.slug} ${isActive ? "active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
              aria-label={`${cap.kind} — ${cap.title}`}
            >
              <div className="expand-card__media">
                <img src={cap.image} alt={`${cap.kind} — ${cap.title}`} loading="lazy" />
                <div className="expand-card__overlay" />
              </div>

              <div className="expand-card__index">{cap.index}</div>

              <div className="expand-card__collapsed-title">
                <span>{cap.kind}</span>
              </div>
            </article>
          );
        })}
      </div>

      <div className="container-ag mt-[4vh]">
        <div className="cap-details relative border-t border-border pt-10 md:pt-14">
          <CornerMarks className="text-bone" />
          <div className="flex items-baseline justify-between label-ag text-muted-ag">
            <span>{item.index}</span>
            <span>{item.kind}</span>
          </div>
          <h3 className="display-lg mt-4 text-[clamp(1.5rem,3vw,2.6rem)]">{item.title}</h3>
          <p className="mt-3 max-w-[54ch] text-[0.95rem] leading-relaxed text-muted-ag">{item.body}</p>

          <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2 label-ag text-muted-ag">
            {item.examples.map((e) => (
              <li key={e} className="rounded-full border border-border px-3 py-1">
                {e}
              </li>
            ))}
          </ul>

          <Link
            to="/servicos/$slug"
            params={{ slug: item.slug }}
            className="mt-8 inline-flex items-center gap-2 label-ag text-accent-ag transition-opacity duration-300 hover:opacity-70 md:mt-10"
          >
            Ver a página do serviço <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
