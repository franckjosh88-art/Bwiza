import type { CSSProperties } from "react";
import { INGREDIENTS } from "../../data/content";

/**
 * Configuration géométrique de l'arc d'ingrédients autour du pot.
 * `offsetX`/`offsetY` : décalage (en vw / vh) par rapport au centre du pot,
 * utilisé à la fois pour la position de repos (statique) et comme direction
 * de sortie lors de la séquence de scroll. `size` utilise clamp() pour
 * rester lisible sur mobile sans jamais écraser la composition desktop.
 */
export const HERO_BUBBLES = INGREDIENTS.map((ing, i) => {
  // Disposition "en diamant" (haut-gauche, haut-droite, bas-gauche, bas-droite)
  // volontairement dégagée de la bande horizontale occupée par le mot
  // "NOURISH" derrière le pot, pour qu'aucune étiquette ne le chevauche.
  const positions = [
    { offsetX: -17, offsetY: -22, size: "clamp(52px, 7.6vw, 90px)" }, // karité : haut-gauche
    { offsetX: 18, offsetY: -20, size: "clamp(42px, 6vw, 72px)" }, // aloe : haut-droite
    { offsetX: -19, offsetY: 21, size: "clamp(38px, 5.4vw, 64px)" }, // vitamine E : bas-gauche
    { offsetX: 20, offsetY: 23, size: "clamp(56px, 8.2vw, 98px)" }, // coco : bas-droite
  ];
  return { ...ing, ...positions[i] };
});

/** Position du centre du pot, en pourcentage de la hauteur/largeur du hero. */
export const POT_ANCHOR = { top: 50, left: 50 };

/**
 * Masque en dégradé radial appliqué sur la photo du pot : il efface en
 * douceur le fond carré de la photo (studio) pour que seul le produit
 * flotte sur le fond crème de la page, sans aucun cadre ni carte visible.
 */
const POT_MASK_GRADIENT =
  "radial-gradient(ellipse 62% 66% at 50% 48%, black 58%, black 66%, transparent 94%)";
export const POT_MASK_STYLE: CSSProperties = {
  maskImage: POT_MASK_GRADIENT,
  WebkitMaskImage: POT_MASK_GRADIENT,
};
