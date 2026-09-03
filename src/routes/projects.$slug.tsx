import { createFileRoute, notFound } from "@tanstack/react-router";
import { useRef } from "react";
import { gsap, eases, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import { TextReveal } from "@/components/TextReveal";
import { usePageTransition } from "@/components/PageTransition";
import { useReveal } from "@/animations/useReveal";
import { useParallax } from "@/animations/useParallax";
import { getNextProject, getProject } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project, next: getNextProject(params.slug) };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — ${p.subtitle} | AG` : "Projeto | AG";
    const description = p
      ? `${p.title}: ${p.subtitle}. ${p.tags.join(", ")} — ${p.year}. Case de Augusto Vargas.`
      : "Case de Augusto Vargas.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project, next } = Route.useLoaderData();
  const { go } = usePageTransition();
  const hero = useRef<HTMLElement>(null);
  const heroImg = useParallax<HTMLImageElement>(6, 1.12);
  const body = useReveal<HTMLDivElement>({ start: "top 85%" });

  useIsoLayoutEffect(() => {
    if (!hero.current) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(".detail-line > span", { yPercent: 0 });
        return;
      }
      gsap
        .timeline({ defaults: { ease: eases.reveal } })
        .fromTo(".detail-line > span", { yPercent: 110 }, { yPercent: 0, duration: 1.2, stagger: 0.08 }, 0.15)
        .fromTo(
          ".detail-hero-media",
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: eases.transition },
          0.35,
        );
    }, hero);

    return () => ctx.revert();
  }, [project.slug]);

  return (
    <>
      <Header />
      <main>
        <section ref={hero} className="pt-[24vh]" data-parallax-scope>
          <div className="container-ag">
            <div className="flex flex-wrap items-end justify-between gap-6 label-ag text-muted-ag">
              <span>{project.tags.join(" / ")}</span>
              <span>{project.year}</span>
            </div>

            <h1 className="display-xl mt-[4vh]">
              <span className="detail-line line-mask">
                <span>{project.title}</span>
              </span>
            </h1>
            <p className="detail-line line-mask body-ag mt-4 text-muted-ag">
              <span>{project.subtitle}</span>
            </p>
          </div>

          <div className="detail-hero-media media-wrap mt-[10vh] h-[70svh] w-full md:h-[86svh]">
            <img
              ref={heroImg}
              src={project.image}
              alt={`${project.title} — imagem principal`}
              width={1600}
              height={1100}
            />
          </div>
        </section>

        <section className="section-ag">
          <div ref={body} className="container-ag grid gap-[8vh] md:grid-cols-12">
            {project.sections.map((s, i) => (
              <div key={s.label} className="contents">
                <p className="label-ag text-muted-ag md:col-span-2">
                  {String(i + 1).padStart(2, "0")} — {s.label}
                </p>
                <div className="md:col-span-8 md:col-start-4">
                  <TextReveal
                    as="h2"
                    className="display-lg text-[clamp(1.7rem,3.2vw,3rem)]"
                    lines={[s.title]}
                  />
                  <p className="body-ag mt-5 max-w-[52ch] text-muted-ag">{s.body}</p>
                </div>

                {i % 2 === 1 && (
                  <div className="media-wrap h-[52vh] md:col-span-12 md:h-[80vh]" data-parallax-scope>
                    <img
                      src={project.gallery[(i - 1) / 2 === 0 ? 0 : 1] ?? project.image}
                      alt={`${project.title} — ${s.label}`}
                      loading="lazy"
                      width={1600}
                      height={1100}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section
          onClick={() => go(`/projects/${next.slug}`, next.title)}
          data-cursor="next"
          className="group cursor-none border-t border-border py-[clamp(6rem,12vw,12rem)]"
        >
          <div className="container-ag">
            <p className="label-ag text-muted-ag">Próximo projeto</p>
            <h2 className="display-xl mt-[3vh] transition-transform duration-700 ease-[var(--ease-out)] group-hover:translate-x-[2vw]">
              {next.title} →
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
