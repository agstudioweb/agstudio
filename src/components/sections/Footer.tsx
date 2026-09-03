import { useEffect, useState } from "react";
import { RollText } from "@/components/RollText";

const SOCIAL = [
  { label: "X — Soon" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/augusto-vargas-p%C3%B3voa/" },
  { label: "GitHub", href: "https://github.com/agstudioweb" },
  { label: "Email", href: "mailto:augustov.arise@gmail.com" },
];

export function Footer() {
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () =>
      setClock(
        new Intl.DateTimeFormat("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "America/Sao_Paulo",
        }).format(new Date()),
      );
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <footer className="bg-ink pb-[8vh] pt-[12vh]">
      <div className="container-ag">
        <div className="grid gap-[4vh] border-t border-border pt-8 label-ag text-muted-ag md:grid-cols-4">
          <div>
            <p className="text-bone">Augusto Vargas</p>
            <p>Creative Developer</p>
            <p>Brazil</p>
          </div>

          <div className="flex flex-col gap-1 md:col-start-3">
            {SOCIAL.map((s) => (
              s.href ? (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="roll-group w-fit">
                  <RollText>{s.label}</RollText>
                </a>
              ) : (
                <span key={s.label} className="w-fit cursor-default">
                  {s.label}
                </span>
              )
            ))}
          </div>

          <div className="flex flex-col justify-between md:items-end">
            <span suppressHydrationWarning>São Paulo {clock}</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
