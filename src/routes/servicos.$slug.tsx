import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import { MagneticButton } from "@/components/MagneticButton";
import { useReveal } from "@/animations/useReveal";
import { SectionId, TechRule, MicroLabel, CornerMarks } from "@/components/system/TechLayer";
import { SERVICES, getService, type Service } from "@/data/services";

const WHATSAPP = "https://wa.me/5514996800019";
const SITE_URL = import.meta.env["VITE_SITE_URL"] ?? "https://agstudio.com.br";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Serviço não encontrado | AG" }, { name: "robots", content: "noindex" }],
      };
    }
    const { title, description, label } = loaderData.service;
    const url = `${SITE_URL}/servicos/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "AGSTUDIO" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: label,
            description,
            url,
            areaServed: "BR",
            provider: {
              "@type": "Organization",
              name: "AGSTUDIO",
              url: SITE_URL,
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  return <ServiceLayout service={service} />;
}

/** Shared layout — every service renders from src/data/services.ts. */
function ServiceLayout({ service }: { service: Service }) {
  const heroRef = useReveal<HTMLDivElement>({ start: "top 90%" });
  const listRef = useReveal<HTMLDivElement>({ start: "top 85%" });
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Header />
      <main className="pt-[14vh]">
        <section className="section-ag pt-0">
          <div ref={heroRef} className="container-ag">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-ag">
              <SectionId id={service.code} />
              <p className="label-ag">Serviço — {service.label}</p>
              <MicroLabel className="ml-auto hidden md:inline">{service.micro}</MicroLabel>
            </div>
            <TechRule className="mt-6 text-bone" />
          </div>
        </section>

        <section className="section-ag bg-ink">
          <div ref={listRef} className="container-ag">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-ag">
              <SectionId id="INC" />
              <p className="label-ag">O que está incluso</p>
            </div>
            <TechRule className="mt-6 text-bone" />

            <div className="mt-[6vh] grid gap-px border border-border bg-border md:grid-cols-2">
              {service.included.map((i) => (
                <article key={i.index} className="bg-ink p-7 md:p-9">
                  <span className="label-ag text-accent-ag">{i.index}</span>
                  <h2 className="display-lg mt-4 text-[clamp(1.25rem,2.2vw,1.9rem)]">{i.title}</h2>
                  <p className="mt-3 max-w-[46ch] text-[0.95rem] leading-relaxed text-muted-ag">
                    {i.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-ag">
          <div className="container-ag">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-ag">
              <SectionId id="FLW" />
              <p className="label-ag">Como funciona</p>
            </div>
            <TechRule className="mt-6 text-bone" />

            <ol className="mt-[6vh] space-y-0">
              {service.steps.map((s) => (
                <li
                  key={s.step}
                  className="grid gap-3 border-t border-border py-6 md:grid-cols-12 md:items-baseline"
                >
                  <span className="label-ag text-muted-ag md:col-span-1">{s.step}</span>
                  <h3 className="display-lg text-[clamp(1.1rem,1.8vw,1.5rem)] md:col-span-4">
                    {s.title}
                  </h3>
                  <p className="max-w-[52ch] text-[0.95rem] leading-relaxed text-muted-ag md:col-span-7">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-ag bg-ink">
          <div className="container-ag">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-ag">
              <SectionId id="FAQ" />
              <p className="label-ag">Perguntas frequentes</p>
            </div>
            <TechRule className="mt-6 text-bone" />

            <div className="mt-[6vh] divide-y divide-border border-y border-border">
              {service.faq.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6">
                    <span className="display-lg text-[clamp(1.05rem,1.7vw,1.4rem)]">{f.q}</span>
                    <span
                      aria-hidden
                      className="label-ag text-accent-ag transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[62ch] text-[0.95rem] leading-relaxed text-muted-ag">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-[10vh]">
              <p className="label-ag text-muted-ag">Outros serviços</p>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/servicos/$slug"
                      params={{ slug: s.slug }}
                      className="inline-flex rounded-full border border-border px-4 py-1.5 label-ag text-muted-ag transition-colors duration-300 hover:border-accent-ag hover:text-bone"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-[8vh] border border-border p-8 md:p-12">
              <CornerMarks className="text-bone" />
              <h2 className="display-lg text-[clamp(1.5rem,3vw,2.6rem)]">{service.cta.heading}</h2>
              <p className="mt-3 max-w-[50ch] body-ag text-muted-ag">{service.cta.body}</p>
              <MagneticButton
                className="mt-8"
                label="Falar comigo"
                href={`${WHATSAPP}?text=${encodeURIComponent(service.cta.whatsappMessage)}`}
                target="_blank"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ServiceNotFound() {
  return (
    <>
      <Header />
      <main className="pt-[20vh]">
        <div className="container-ag">
          <p className="label-ag text-muted-ag">Serviço não encontrado</p>
          <h1 className="display-xl mt-4">Esse serviço não existe (ainda).</h1>
          <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/servicos/$slug"
                  params={{ slug: s.slug }}
                  className="inline-flex rounded-full border border-border px-4 py-1.5 label-ag text-muted-ag transition-colors duration-300 hover:border-accent-ag hover:text-bone"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
