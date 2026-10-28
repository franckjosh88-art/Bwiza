import { useRef, useState } from "react";
import { INGREDIENTS } from "../data/content";
import { useScrollReveal } from "./useScrollReveal";
import RevealText from "./RevealText";

/** Photo d'ingrédient recadrée en cercle, avec repli couleur unie si l'image manque. */
function IngredientPhoto({ image, fallbackColor, name }: { image: string; fallbackColor: string; name: string }) {
  const [errored, setErrored] = useState(false);
  return (
    <div className="h-28 w-28 overflow-hidden rounded-full ring-1 ring-[#16241d]/10 sm:h-32 sm:w-32">
      {errored ? (
        <div className="flex h-full w-full items-center justify-center text-center" style={{ backgroundColor: fallbackColor }}>
          <span className="px-2 text-[11px] font-semibold uppercase tracking-wide text-[#16241d]/70">{name}</span>
        </div>
      ) : (
        <img
          src={image}
          alt={name}
          width={256}
          height={256}
          loading="lazy"
          onError={() => setErrored(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}

export default function Ingredients() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, ".ingredient-card", { stagger: 0.12 });

  return (
    <section id="ingredients" ref={ref} className="grain-texture bg-[#faf6ef] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f4d3a]/70">
            Composition
          </span>
          <RevealText
            as="h2"
            className="font-display mt-4 text-3xl font-semibold text-[#16241d] sm:text-4xl"
          >
            Quatre actifs naturels, rien de superflu
          </RevealText>
          <p className="mt-5 text-[#16241d]/70">
            Une formule simple et transparente, choisie pour sa pureté et son
            efficacité sur tous les types de peau.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-4 sm:gap-x-8">
          {INGREDIENTS.map((ing, i) => (
            <div key={ing.key} className="ingredient-card flex flex-col items-center text-center">
              <span className="mb-4 font-display text-xs text-[#1f4d3a]/50">0{i + 1}</span>
              <IngredientPhoto image={ing.image} fallbackColor={ing.fallbackColor} name={ing.name} />
              <h3 className="font-display mt-5 text-base font-semibold text-[#16241d] sm:text-lg">
                {ing.name}
              </h3>
              <p className="mt-1.5 text-sm text-[#16241d]/65">{ing.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
