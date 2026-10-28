import { useRef, type ReactNode, type MouseEvent } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "../lib/usePrefersReducedMotion";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

/**
 * Bouton avec un léger effet "magnétique" au survol : il suit la souris sur
 * une faible amplitude puis revient à sa place avec une transition douce de
 * 300ms. Désactivé si l'utilisateur préfère réduire les animations.
 */
export default function MagneticButton({
  href,
  children,
  className = "",
  target,
  rel,
  "aria-label": ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    gsap.to(ref.current, {
      x: relX * 0.25,
      y: relY * 0.35,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.3, ease: "power3.out" });
  };

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex will-change-transform ${className}`}
    >
      {children}
    </a>
  );
}
