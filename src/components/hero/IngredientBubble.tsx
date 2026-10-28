import { useState } from "react";

interface IngredientBubbleProps {
  name: string;
  image: string;
  fallbackColor: string;
  size: string;
}

/**
 * Bulle ronde affichant la photo d'un ingrédient. Si l'image est absente ou
 * ne charge pas (404), on retombe proprement sur un disque de couleur unie
 * avec le nom de l'ingrédient — jamais d'icône approximative.
 */
export default function IngredientBubble({ name, image, fallbackColor, size }: IngredientBubbleProps) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="overflow-hidden rounded-full ring-1 ring-black/5 shadow-[0_8px_24px_-8px_rgba(18,50,38,0.35)]"
        style={{ width: size, height: size }}
      >
        {errored ? (
          <div
            className="flex h-full w-full items-center justify-center text-center"
            style={{ backgroundColor: fallbackColor }}
          >
            <span className="px-1 text-[9px] font-semibold uppercase leading-tight tracking-wide text-[#16241d]/70">
              {name}
            </span>
          </div>
        ) : (
          <img
            src={image}
            alt={name}
            width={160}
            height={160}
            loading="lazy"
            onError={() => setErrored(true)}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <span className="whitespace-nowrap rounded-full bg-[#faf6ef]/90 px-2.5 py-1 text-[10px] font-semibold text-[#16241d] shadow-sm sm:text-[11px]">
        {name}
      </span>
    </div>
  );
}
