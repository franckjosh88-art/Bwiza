import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialise le défilement fluide Lenis et le synchronise avec l'horloge
 * de GSAP (ticker) afin que ScrollTrigger reste toujours parfaitement
 * à jour. Respecte "prefers-reduced-motion" : dans ce cas, on laisse le
 * scroll natif du navigateur (pas de lissage superflu).
 */
export function useLenis() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Gère nativement le clic sur les liens d'ancre (#section) du menu,
      // avec un décalage pour ne pas masquer le titre sous le header fixe.
      anchors: { offset: -84 },
    });

    // Chaque scroll Lenis déclenche une mise à jour de ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // L'horloge GSAP pilote la boucle de rendu de Lenis (une seule horloge)
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);
}
