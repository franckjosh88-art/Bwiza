import HeroSalesIntro from "./hero/HeroSalesIntro";
import HeroAnimated from "./hero/HeroAnimated";
import HeroStatic from "./hero/HeroStatic";
import { usePrefersReducedMotion } from "../lib/usePrefersReducedMotion";

/**
 * Hero complet : le bloc de vente (toujours visible, sans scroll) suivi de
 * la mise en scène du pot. Celle-ci est pilotée par le scroll (pin + GSAP)
 * sauf si l'utilisateur préfère réduire les animations, auquel cas une
 * version statique équivalente est affichée.
 */
export default function Hero() {
  const reduceMotion = usePrefersReducedMotion();
  return (
    <div id="top">
      <HeroSalesIntro />
      {reduceMotion ? <HeroStatic /> : <HeroAnimated />}
    </div>
  );
}
