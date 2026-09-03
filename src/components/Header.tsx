import { useEffect, useRef, useState } from "react";
import { gsap, eases, useIsoLayoutEffect } from "@/lib/gsap";
import { useRouter, useRouterState } from "@tanstack/react-router";
import Logo from "@/components/Logo";
import { RollText } from "@/components/RollText";
import { getLenis } from "@/animations/useLenis";

const LINKS = [
  { label: "Home", hash: "#home" },
  { label: "Serviços", hash: "#criacoes" },
  { label: "Sobre", hash: "#sobre" },
  { label: "Investimento", hash: "#pacotes" },
  { label: "Contato", hash: "#contato" },
];


/** Top navigation bar. Logo + AGSTUDIO sit at the right; links always visible. */
export function Header({ visible = true }: { visible?: boolean }) {
  const root = useRef<HTMLElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useIsoLayoutEffect(() => {
    const bar = line.current;
    if (bar) {
      gsap.fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: eases.smooth, delay: 0.2 });
    }
  }, []);

  useIsoLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    gsap.fromTo(
      nav,
      { y: -12, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: eases.smooth, delay: 0.35 }
    );
  }, []);

  const scrollToTop = () => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /** Waits for the home sections to mount after a route change, then scrolls. */
  const scrollWhenReady = (hash: string, attempts = 40) => {
    const target = document.querySelector(hash) as HTMLElement | null;
    if (!target) {
      if (attempts <= 0) return;
      requestAnimationFrame(() => scrollWhenReady(hash, attempts - 1));
      return;
    }
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(target, { offset: -72 });
    else target.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTo = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const onHome = pathname === "/";

    if (hash === "#home") {
      if (onHome) scrollToTop();
      else void router.navigate({ to: "/" }).then(() => scrollToTop());
      return;
    }

    if (!onHome) {
      void router.navigate({ to: "/" }).then(() => scrollWhenReady(hash));
      return;
    }
    scrollWhenReady(hash);
  };


  return (
    <header
      ref={root}
      className="site-header fixed inset-x-0 top-0 z-[60] border-b border-white/10 bg-ink/80 backdrop-blur-md"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div ref={line} className="header-line" />
      <div className="container-ag header-bar grid grid-cols-[auto_1fr] items-center gap-4 md:grid-cols-[1fr_auto] md:gap-6">
        <nav
          ref={navRef}
          className="hidden items-center gap-[clamp(1rem,2.5vw,2rem)] label-ag md:flex"
        >
          {LINKS.map((l) => (
            <a key={l.hash} href={l.hash} onClick={scrollTo(l.hash)} className="roll-group">
              <RollText>{l.label}</RollText>
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`nav-burger md:hidden ${open ? "is-open" : ""}`}
        >
          <span />
          <span />
        </button>

        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            if (pathname === "/") scrollToTop();
            else void router.navigate({ to: "/" }).then(() => scrollToTop());
          }}
          className="logo-bar justify-self-end"
        >
          <Logo className="h-[clamp(0.8rem,1.22vw,0.95rem)] w-auto" />
        </a>

      </div>

      <div className={`nav-sheet md:hidden ${open ? "is-open" : ""}`}>
        <nav className="container-ag flex flex-col py-5">
          {LINKS.map((l, i) => (
            <a
              key={l.hash}
              href={l.hash}
              onClick={(e) => {
                setOpen(false);
                scrollTo(l.hash)(e);
              }}
              className="nav-sheet__link display-lg"
              style={{ transitionDelay: open ? `${0.08 + i * 0.05}s` : "0s" }}
            >
              <span className="nav-sheet__idx">{String(i + 1).padStart(2, "0")}</span>
              <span>{l.label}</span>
            </a>
          ))}
          <a
            href="https://wa.me/5514996800019"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="nav-sheet__cta label-ag"
          >
            Iniciar projeto ↗
          </a>
        </nav>
      </div>
    </header>

  );
}
