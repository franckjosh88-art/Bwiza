import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IngredientBubble from "./IngredientBubble";
import { HERO_BUBBLES, POT_ANCHOR, POT_MASK_STYLE } from "./heroData";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================================
   RÉGLAGES DE L'ANIMATION — modifiez ces valeurs pour accélérer, ralentir
   ou réorganiser une étape de la séquence.
   ----------------------------------------------------------------------------
   Les 4 phases de scroll (PHASE_*) sont des pourcentages du scroll total de
   la section et doivent toujours sommer à 100.
   ============================================================================ */
const PHASE_GROW = 20; // 0%   -> 20% : le pot grossit (effet d'entrée en scène)
const PHASE_SHRINK = 25; // 20%  -> 45% : le pot rétrécit et remonte légèrement
const PHASE_BUBBLES_OUT = 35; // 45%  -> 80% : les bulles sortent une à une
const PHASE_TRANSITION = 20; // 80%  -> 100% : transition vers la section Bénéfices

// Lissage du scrub (secondes de rattrapage derrière le scroll réel)
const SCRUB_LISSAGE = 1;

// Longueur de scroll nécessaire pour dérouler toute la séquence
const SCROLL_DISTANCE_DESKTOP = "+=350%";
const SCROLL_DISTANCE_MOBILE = "+=260%";

// Opacité maximale du mot "NOURISH" derrière le pot (reste toujours discret)
const NOURISH_MAX_OPACITY = 0.1;

// --- Temps cumulés dérivés des phases ci-dessus ---
const T0 = 0;
const T1 = T0 + PHASE_GROW;
const T2 = T1 + PHASE_SHRINK;
const T3 = T2 + PHASE_BUBBLES_OUT;
const T4 = T3 + PHASE_TRANSITION; // doit valoir 100
if (T4 !== 100) {
  // Garde-fou : les 4 phases doivent couvrir 100% du scroll de la section.
  console.warn(`[Hero] La somme des phases vaut ${T4}, elle devrait être égale à 100.`);
}

export default function HeroAnimated() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      /* ----------------------------------------------------------------
         ÉTAT INITIAL (avant toute animation, pour éviter un flash)
         ---------------------------------------------------------------- */
      gsap.set(".nourish-text", { opacity: 0, scale: 1.06 });
      gsap.set(".jar-inner", { opacity: 0, y: 60, rotate: -7, scale: 0.94 });
      gsap.set(".ingredient-bubble-inner", { opacity: 0, scale: 0.4, x: 0, y: 0 });
      gsap.set(".connector-line", { opacity: 0 });
      gsap.set(".benefit-teaser-item", { opacity: 0, x: -30 });

      /* ----------------------------------------------------------------
         ANIMATION D'ENTRÉE — se joue une seule fois lorsque la scène
         entre dans le viewport (et non au chargement, puisque cette
         section arrive après le bloc de vente).
         NOURISH se révèle -> le pot monte avec une légère rotation ->
         les bulles apparaissent en cascade.
         ---------------------------------------------------------------- */
      const intro = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });
      intro
        .to(".nourish-text", { opacity: NOURISH_MAX_OPACITY, scale: 1, duration: 1 })
        .to(".jar-inner", { opacity: 1, y: 0, rotate: 0, scale: 1, duration: 1.1 }, "-=0.55")
        .to(".connector-line", { opacity: 1, duration: 0.6 }, "-=0.5")
        .to(
          ".ingredient-bubble-inner",
          { opacity: 1, scale: 1, duration: 0.7, stagger: 0.12, ease: "back.out(1.6)" },
          "-=0.5"
        );

      ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        once: true,
        onEnter: () => intro.play(),
      });

      /* ----------------------------------------------------------------
         TIMELINE LIÉE AU SCROLL (pin + scrub) — construite séparément
         pour desktop et mobile via gsap.matchMedia.
         ---------------------------------------------------------------- */
      const mm = gsap.matchMedia();

      const buildScrollTimeline = (isMobile: boolean) => {
        const scrollDistance = isMobile ? SCROLL_DISTANCE_MOBILE : SCROLL_DISTANCE_DESKTOP;

        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: scrollDistance,
            scrub: SCRUB_LISSAGE,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 0% -> 20% : le pot grossit légèrement (il prend toute la place)
        tl.to(".jar-inner", { scale: 1.16, duration: PHASE_GROW, ease: "power2.out" }, T0).to(
          ".scroll-hint",
          { opacity: 0, duration: PHASE_GROW * 0.5 },
          T0
        );

        // 20% -> 45% : le pot rétrécit et remonte légèrement (parallaxe)
        tl.to(
          ".jar-inner",
          { scale: 0.7, yPercent: -6, duration: PHASE_SHRINK, ease: "power2.out" },
          T1
        );

        // 45% -> 80% : les bulles sortent une à une le long de leur axe,
        // avec un léger mouvement de parallaxe différent du pot.
        const bubbleStep = PHASE_BUBBLES_OUT / HERO_BUBBLES.length;
        HERO_BUBBLES.forEach((b, i) => {
          const startAt = T2 + i * bubbleStep * 0.85;
          tl.to(
            `.ingredient-bubble-inner-${i}`,
            {
              x: `${b.offsetX * 1.9}vw`,
              y: `${b.offsetY * 1.9}vh`,
              opacity: 0,
              scale: 0.5,
              duration: bubbleStep,
              ease: "power3.inOut",
            },
            startAt
          ).to(`.connector-line-${i}`, { opacity: 0, duration: bubbleStep * 0.6 }, startAt);
        });

        // 80% -> 100% : transition vers la section Bénéfices.
        tl.to(
          ".jar-inner",
          {
            yPercent: isMobile ? -14 : -10,
            opacity: 0,
            scale: 0.6,
            duration: PHASE_TRANSITION,
            ease: "power3.inOut",
          },
          T3
        )
          .to(".nourish-text", { opacity: 0, duration: PHASE_TRANSITION * 0.6, ease: "power2.out" }, T3)
          .to(
            ".benefit-teaser-item",
            { opacity: 1, x: 0, duration: PHASE_TRANSITION * 0.7, stagger: 0.12, ease: "power2.out" },
            T3 + PHASE_TRANSITION * 0.15
          );

        return tl;
      };

      mm.add("(min-width: 768px)", () => {
        const tl = buildScrollTimeline(false);
        return () => tl.scrollTrigger?.kill();
      });
      mm.add("(max-width: 767.98px)", () => {
        const tl = buildScrollTimeline(true);
        return () => tl.scrollTrigger?.kill();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="grain-texture relative h-screen w-full overflow-hidden bg-[#faf6ef]"
    >
      {/* Formes douces en arrière-plan (dégradés radiaux très discrets) */}
      <div className="pointer-events-none absolute -left-32 top-0 z-0 h-[60vh] w-[60vh] rounded-full bg-[#1f4d3a]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 z-0 h-[55vh] w-[55vh] rounded-full bg-[#c9a65d]/[0.08] blur-3xl" />

      {/* "NOURISH" — tient toujours en entier à l'écran, opacité très faible */}
      <h2
        className="nourish-text pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 select-none whitespace-nowrap text-center font-display font-normal leading-none text-[#16241d]"
        style={{ fontSize: "clamp(3rem, 15vw, 10.5rem)", letterSpacing: "0.01em" }}
        aria-hidden="true"
      >
        NOURISH
      </h2>

      {/* Fines lignes reliant chaque bulle au centre du pot */}
      <svg
        className="pointer-events-none absolute inset-0 z-10 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {HERO_BUBBLES.map((b, i) => (
          <line
            key={b.key}
            className={`connector-line connector-line-${i}`}
            x1={POT_ANCHOR.left}
            y1={POT_ANCHOR.top}
            x2={POT_ANCHOR.left + b.offsetX * 0.9}
            y2={POT_ANCHOR.top + b.offsetY * 0.9}
            stroke="#1f4d3a"
            strokeWidth="0.12"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* Pot — héros visuel, grand, sans cadre, avec ombre et reflet */}
      <div
        className="absolute z-20"
        style={{ top: `${POT_ANCHOR.top}%`, left: `${POT_ANCHOR.left}%` }}
      >
        <div
          className="jar-inner relative flex -translate-x-1/2 -translate-y-1/2 flex-col items-center [will-change:transform]"
          style={{ height: "min(52vh, 68vw)" }}
        >
          {/* Ombre douce et réaliste sous le pot */}
          <div
            className="pointer-events-none absolute bottom-[4%] left-1/2 -z-10 h-[9%] w-[58%] -translate-x-1/2 rounded-[50%] bg-[#0b1f16]/35 blur-xl"
            aria-hidden="true"
          />
          <img
            src="/images/pot-face.png"
            alt="Pot de pommade Ubwiza Nourish, 50 ml"
            width={700}
            height={700}
            loading="eager"
            className="h-full w-auto select-none object-contain"
            style={{ ...POT_MASK_STYLE, filter: "drop-shadow(0 26px 30px rgba(11,31,22,0.22))" }}
          />
          {/* Léger reflet sous le pot */}
          <div
            className="pointer-events-none h-[34%] w-auto overflow-hidden opacity-[0.14]"
            style={{ maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)", WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)" }}
          >
            <img
              src="/images/pot-face.png"
              aria-hidden="true"
              width={700}
              height={700}
              className="w-auto -scale-y-100 select-none object-contain"
              style={{ ...POT_MASK_STYLE, height: "min(52vh, 68vw)" }}
            />
          </div>
        </div>
      </div>

      {/* Bulles d'ingrédients en diamant, tailles variées, proches du pot */}
      <div className="pointer-events-none absolute inset-0 z-30">
        {HERO_BUBBLES.map((b, i) => (
          <div
            key={b.key}
            className="absolute"
            style={{
              top: `${POT_ANCHOR.top}%`,
              left: `${POT_ANCHOR.left}%`,
              transform: `translate(calc(-50% + ${b.offsetX}vw), calc(-50% + ${b.offsetY}vh))`,
            }}
          >
            <div className={`ingredient-bubble-inner ingredient-bubble-inner-${i} [will-change:transform]`}>
              <IngredientBubble name={b.name} image={b.image} fallbackColor={b.fallbackColor} size={b.size} />
            </div>
          </div>
        ))}
      </div>

      {/* Aperçu discret des bénéfices, révélé juste avant la transition */}
      <div className="pointer-events-none absolute left-[6%] top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        <div className="benefit-teaser-item rounded-xl bg-white/70 px-4 py-2 text-xs font-medium text-[#16241d] shadow-sm backdrop-blur">
          Hydratation profonde
        </div>
        <div className="benefit-teaser-item rounded-xl bg-white/70 px-4 py-2 text-xs font-medium text-[#16241d] shadow-sm backdrop-blur">
          Apaise les peaux irritées
        </div>
      </div>

      {/* Indice de défilement */}
      <div className="scroll-hint pointer-events-none absolute bottom-6 left-1/2 z-40 -translate-x-1/2 text-[10px] uppercase tracking-widest text-[#1f4d3a]/50">
        Faites défiler ↓
      </div>
    </section>
  );
}
