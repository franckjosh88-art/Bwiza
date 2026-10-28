import { useLayoutEffect, useRef, type ElementType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { usePrefersReducedMotion } from "../lib/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface RevealTextProps {
  children: string;
  as?: ElementType;
  className?: string;
  /** Déclenche l'animation au scroll (par défaut) ou immédiatement au montage */
  trigger?: "scroll" | "mount";
  delay?: number;
}

/**
 * Révèle un texte ligne par ligne : chaque ligne est masquée (overflow caché)
 * puis remonte depuis le bas avec un léger fondu, à la manière des sites de
 * cosmétique haut de gamme. Utilise GSAP SplitText pour découper le texte en
 * lignes réelles (en tenant compte du retour à la ligne du navigateur).
 */
export default function RevealText({
  children,
  as: Tag = "div",
  className = "",
  trigger = "scroll",
  delay = 0,
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduceMotion) {
      gsap.set(el, { opacity: 1 });
      return;
    }

    let split: SplitText | undefined;
    const ctx = gsap.context(() => {
      split = new SplitText(el, { type: "lines", linesClass: "reveal-line-mask" });
      gsap.set(split.lines, { yPercent: 110, opacity: 0 });

      const anim = gsap.to(split.lines, {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        delay,
      });

      if (trigger === "scroll") {
        anim.pause();
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          once: true,
          onEnter: () => anim.play(),
        });
      }
    }, ref);

    return () => {
      ctx.revert();
      split?.revert();
    };
  }, [reduceMotion, trigger, delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
