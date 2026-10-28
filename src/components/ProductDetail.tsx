import { useRef } from "react";
import {
  COMPOSITION,
  PRICE_LABEL,
  PRODUCT_FACTS,
  USAGE_STEPS,
  WHATSAPP_ORDER_URL,
} from "../data/content";
import { useScrollReveal } from "./useScrollReveal";
import RevealText from "./RevealText";
import MagneticButton from "./MagneticButton";

export default function ProductDetail() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, ".pd-reveal", { stagger: 0.1, y: 26 });

  return (
    <section id="produit" ref={ref} className="grain-texture bg-[#faf6ef] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* En-tête du produit */}
        <div className="pd-reveal max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f4d3a]/70">
            Le produit
          </span>
          <RevealText as="h2" className="font-display mt-4 text-3xl font-semibold text-[#16241d] sm:text-4xl">
            Ubwiza Nourish
          </RevealText>
          <p className="mt-2 text-base text-[#16241d]/70">
            Pommade visage hydratante &middot; pot de 50 ml
          </p>
        </div>

        {/* Bloc principal : image + composition / prix */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="pd-reveal aspect-[4/5] w-full overflow-hidden rounded-sm bg-[#efe6d0]">
            <img
              src="/images/pot-ouvert.jpg"
              alt="Pot de pommade Ubwiza Nourish ouvert, texture crémeuse"
              width={900}
              height={1125}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="pd-reveal flex flex-col justify-center">
            <p className="font-display text-3xl font-bold text-[#1f4d3a] sm:text-4xl">
              {PRICE_LABEL}
            </p>
            <p className="mt-1 text-sm text-[#16241d]/55">Pot de 50 ml</p>

            <h3 className="font-display mt-8 text-sm font-semibold uppercase tracking-[0.15em] text-[#16241d]">
              Composition
            </h3>
            <ul className="mt-4 space-y-3 border-t border-[#16241d]/10 pt-4">
              {COMPOSITION.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#16241d]/80">
                  <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-[#1f4d3a]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-[#16241d]/10 pt-6 sm:grid-cols-3 sm:gap-6">
              {PRODUCT_FACTS.map((f) => (
                <div key={f.label}>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-[#16241d]/50">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm text-[#16241d]/85">{f.value}</dd>
                </div>
              ))}
            </dl>

            <MagneticButton
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 w-fit rounded-full bg-[#1f4d3a] px-8 py-4 text-base font-semibold text-[#faf6ef] shadow-[0_10px_24px_-8px_rgba(31,77,58,0.5)] transition-colors duration-300 hover:bg-[#163a2b]"
            >
              Commander maintenant
            </MagneticButton>
            <p className="mt-4 text-sm text-[#16241d]/55">
              Livraison rapide à Kigali &middot; Paiement à la livraison
            </p>
          </div>
        </div>

        {/* Mode d'emploi */}
        <div className="mt-28 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="pd-reveal order-2 lg:order-1">
            <h3 className="font-display text-2xl font-semibold text-[#16241d] sm:text-3xl">
              Mode d'emploi
            </h3>
            <ol className="mt-8 space-y-8 border-t border-[#16241d]/10 pt-8">
              {USAGE_STEPS.map((s) => (
                <li key={s.step} className="flex gap-5">
                  <span className="font-display text-2xl font-semibold text-[#1f4d3a]/40">
                    {s.step}
                  </span>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-[#16241d]">{s.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-[#16241d]/70 sm:text-base">
                      {s.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="pd-reveal order-1 aspect-square w-full overflow-hidden rounded-sm bg-[#efe6d0] lg:order-2">
            <img
              src="/images/pot-main.jpg"
              alt="Application de la pommade Ubwiza Nourish sur la peau"
              width={900}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
