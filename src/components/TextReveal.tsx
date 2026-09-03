import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Masked headline. Each line is its own overflow box so GSAP can push
 * the inner span out from underneath it.
 */
export function TextReveal({
  lines,
  as: Tag = "h2",
  className,
  lineClassName,
}: {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className={cn("line-mask", lineClassName)}>
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
