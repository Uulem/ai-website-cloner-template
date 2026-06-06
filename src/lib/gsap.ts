/**
 * Central GSAP setup. Registers ScrollTrigger exactly once (client-side) and
 * re-exports the instances so every component shares the same singleton.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
