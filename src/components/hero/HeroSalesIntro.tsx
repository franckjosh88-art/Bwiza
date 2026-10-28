import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import RevealText from "../RevealText";
import MagneticButton from "../MagneticButton";
import { GUARANTEES, PRICE_LABEL, WHATSAPP_ORDER_URL } from "../../data/content";
import { usePrefersReducedMotion } from "../../lib/usePrefersReducedMotion";

/**
 * Premier écran du hero : le "vrai bloc de vente", visible immédiatement
 * sans avoir besoin de faire défiler la page. Juste en dessous arrive la
 * mise en scène animée du pot (voir HeroAnimated / HeroStatic).
 */
export default function HeroSalesIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      gsap.set(".sales-intro-fade", { opacity: 0, y: 18 });
      gsap.to(".sales-intro-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.1,
      });
    }, ref);
    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <div ref={ref} className="grain-texture relative bg-[#faf6ef] px-5 pb-10 pt-28 text-center sm:px-8 sm:pt-36">
      <span className="sales-intro-fade inline-flex items-center gap-2 rounded-full bg-[#1f4d3a]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#1f4d3a] sm:text-xs">
        Soin visage 100% naturel
      </span>

      <RevealText
        as="h1"
        trigger="mount"
        className="font-display mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight text-[#16241d] sm:text-5xl md:text-6xl"
      >
        La douceur de la nature pour votre peau
      </RevealText>

      <p className="sales-intro-fade mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#16241d]/70 sm:text-base">
        Ubwiza Nourish nourrit, apaise et protège votre peau au quotidien
        grâce à une formule 100% naturelle.
      </p>

      <div className="sales-intro-fade mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-5">
        <span className="font-display text-xl font-bold text-[#1f4d3a] sm:text-2xl">
          {PRICE_LABEL}
        </span>
        <MagneticButton
          href={WHATSAPP_ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#1f4d3a] px-7 py-3.5 text-sm font-semibold text-[#faf6ef] shadow-[0_10px_24px_-8px_rgba(31,77,58,0.5)] transition-colors duration-300 hover:bg-[#163a2b] sm:text-base"
        >
          Commander sur WhatsApp
        </MagneticButton>
      </div>

      <ul className="sales-intro-fade mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[11px] font-medium text-[#16241d]/70 sm:text-xs">
        {GUARANTEES.map((g) => (
          <li key={g.key} className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1f4d3a]" />
            {g.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
