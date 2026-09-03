import { useMagnetic } from "@/animations/useMagnetic";
import { RollText } from "@/components/RollText";
import { cn } from "@/lib/utils";

export function MagneticButton({
  label,
  href = "#contato",
  target,
  className,
  onClick,
}: {
  label: string;
  href?: string;
  target?: string;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useMagnetic<HTMLAnchorElement>(10);

  return (
    <a
      ref={ref}
      href={href}
      {...(target ? { target, rel: "noreferrer" } : {})}
      onClick={onClick}
      data-cursor="open"
      className={cn(
        "ag-btn inline-flex items-center gap-3 rounded-full border border-current",
        "px-7 py-4 label-ag leading-none",
        "hover:text-ink hover:border-transparent",
        className,
      )}
    >
      <RollText>{label}</RollText>
      <span aria-hidden className="ag-btn-arrow text-[0.9em]">
        ↗
      </span>
    </a>
  );
}
