import IngredientBubble from "./IngredientBubble";
import { HERO_BUBBLES, POT_ANCHOR, POT_MASK_STYLE } from "./heroData";

/**
 * Version statique de la mise en scène du pot, affichée lorsque
 * l'utilisateur a activé "Réduire les animations" (prefers-reduced-motion).
 * Même composition visuelle que HeroAnimated, mais sans pin ni scroll.
 */
export default function HeroStatic() {
  return (
    <section className="grain-texture relative overflow-hidden bg-[#faf6ef] py-16 sm:py-24">
      <p
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-display font-normal leading-none text-[#16241d]"
        style={{ fontSize: "clamp(3rem, 15vw, 10.5rem)", opacity: 0.1 }}
        aria-hidden="true"
      >
        NOURISH
      </p>

      <div className="relative mx-auto" style={{ height: "min(46vh, 60vw)", width: "min(46vh, 60vw)" }}>
        <div
          className="pointer-events-none absolute bottom-[4%] left-1/2 h-[9%] w-[58%] -translate-x-1/2 rounded-[50%] bg-[#0b1f16]/35 blur-xl"
          aria-hidden="true"
        />
        <img
          src="/images/pot-face.png"
          alt="Pot de pommade Ubwiza Nourish, 50 ml"
          width={700}
          height={700}
          loading="eager"
          className="relative mx-auto h-full w-auto object-contain"
          style={{ ...POT_MASK_STYLE, filter: "drop-shadow(0 24px 28px rgba(11,31,22,0.2))" }}
        />

        {HERO_BUBBLES.map((b) => (
          <div
            key={b.key}
            className="absolute"
            style={{
              top: `${POT_ANCHOR.top}%`,
              left: `${POT_ANCHOR.left}%`,
              transform: `translate(calc(-50% + ${b.offsetX * 0.75}vw), calc(-50% + ${b.offsetY * 0.75}vh))`,
            }}
          >
            <IngredientBubble name={b.name} image={b.image} fallbackColor={b.fallbackColor} size={b.size} />
          </div>
        ))}
      </div>
    </section>
  );
}
