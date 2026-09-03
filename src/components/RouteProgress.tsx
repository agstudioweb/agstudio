import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

/** Slim top progress bar used instead of the full preloader after the first visit. */
export function RouteProgress() {
  const status = useRouterState({ select: (s) => s.status });
  const [visible, setVisible] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (status === "pending") {
      clearTimeout(timeout.current);
      setVisible(true);
      return;
    }
    timeout.current = setTimeout(() => setVisible(false), 320);
    return () => clearTimeout(timeout.current);
  }, [status]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[9998] h-[2px] overflow-hidden" aria-hidden>
      <div
        className="h-full w-1/3 bg-accent-ag"
        style={{
          animation: "route-progress 900ms cubic-bezier(0.4, 0, 0.2, 1) infinite",
          boxShadow: "0 0 12px currentColor",
        }}
      />
    </div>
  );
}
