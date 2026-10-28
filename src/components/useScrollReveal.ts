import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Applies a simple fade-up reveal animation, staggered, to every element
 * matching `selector` inside the given container ref, as it scrolls into view.
 */
export function useScrollReveal(
  containerRef: React.RefObject<HTMLElement | null>,
  selector: string,
  options?: { y?: number; stagger?: number; start?: string }
) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>(selector);
      if (!els.length) return;
      gsap.set(els, { opacity: 0, y: options?.y ?? 36 });
      els.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: options?.start ?? "top 85%",
          onEnter: () =>
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              delay: (i % 4) * (options?.stagger ?? 0.1),
            }),
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, [containerRef, selector, options?.y, options?.stagger, options?.start]);
}
