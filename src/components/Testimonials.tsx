import { useRef } from "react";
import { TESTIMONIALS } from "../data/content";
import { useScrollReveal } from "./useScrollReveal";
import RevealText from "./RevealText";

/**
 * Section "Avis clientes". Son affichage est contrôlé par le drapeau
 * SHOW_TESTIMONIALS dans src/data/content.ts — voir ce fichier pour le
 * réactiver dès que vous disposez de vrais avis vérifiés.
 */
export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, ".testimonial-card", { stagger: 0.12 });

  return (
    <section id="avis" ref={ref} className="grain-texture bg-[#faf6ef] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f4d3a]/70">
            Avis clientes
          </span>
          <RevealText as="h2" className="font-display mt-4 text-3xl font-semibold text-[#16241d] sm:text-4xl">
            Elles ont adopté Ubwiza Nourish
          </RevealText>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-[#16241d]/10 pt-10 md:grid-cols-3 md:gap-12">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="testimonial-card flex h-full flex-col justify-between">
              <blockquote className="font-display text-lg italic leading-relaxed text-[#16241d]/85">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="block font-semibold text-[#16241d]">{t.name}</span>
                <span className="text-[#16241d]/55">{t.city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
