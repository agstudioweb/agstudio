import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { IntroWords } from "@/components/sections/IntroWords";
import { Capabilities } from "@/components/sections/Capabilities";
import { About } from "@/components/sections/About";

import { Process } from "@/components/sections/Process";
import { Packages } from "@/components/sections/Packages";
import { Faq } from "@/components/sections/Faq";

import { CtaFinal } from "@/components/sections/CtaFinal";

import { Footer } from "@/components/sections/Footer";
import { SectionProgress } from "@/components/system/TechLayer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Augusto Vargas — Creative Developer & Web Designer" },
      {
        name: "description",
        content:
          "Portfólio de Augusto Vargas (AG): design, desenvolvimento criativo e IA para produtos digitais com motion de verdade.",
      },
      { property: "og:title", content: "Augusto Vargas — Creative Developer" },
      {
        property: "og:description",
        content: "Design, desenvolvimento e IA para produtos digitais que não parecem templates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const INTRO_KEY = "ag_intro_played";

function Home() {
  const [introDone, setIntroDone] = useState(false);
  // "pending" until we know (client-only) whether the preloader already ran.
  const [mode, setMode] = useState<"pending" | "loader" | "skip">("pending");

  useEffect(() => {
    const seen = sessionStorage.getItem(INTRO_KEY) === "1";
    if (seen) {
      setMode("skip");
      setIntroDone(true);
    } else {
      sessionStorage.setItem(INTRO_KEY, "1");
      setMode("loader");
    }
  }, []);

  return (
    <>
      {mode === "loader" && <Loader onDone={() => setIntroDone(true)} />}
      <Header visible={introDone} />
      {introDone && <SectionProgress total={7} />}

      <main>
        <Hero start={introDone} />
        <IntroWords />
        <Capabilities />
        <About />
        
        <Process />
        <Packages />
        <Faq />
        <CtaFinal />
      </main>

      <Footer />
    </>
  );
}
