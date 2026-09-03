import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { useEffect, useLayoutEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Draggable);
}

/** Global easing vocabulary — timing is the whole product here. */
export const eases = {
  smooth: "power3.out",
  reveal: "power4.out",
  transition: "power4.inOut",
  elastic: "elastic.out(1, 0.4)",
} as const;

/** SSR-safe layout effect (GSAP setup must run before paint on the client). */
export const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const isFinePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

export { gsap, ScrollTrigger, Draggable };
