import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";
import { WHATSAPP_ORDER_URL } from "../data/content";

const LINKS = [
  { href: "#produit", label: "Produit" },
  { href: "#ingredients", label: "Ingrédients" },
  { href: "#faq", label: "FAQ" },
  { href: "#livraison", label: "Livraison" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#faf6ef]/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight text-[#16241d]">
          Ubwiza
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium uppercase tracking-wide text-[#16241d]/75 transition-colors duration-300 hover:text-[#1f4d3a]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <MagneticButton
          href={WHATSAPP_ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[#1f4d3a] px-5 py-2.5 text-sm font-semibold text-[#faf6ef] transition-colors duration-300 hover:bg-[#163a2b] md:inline-flex"
        >
          Commander
        </MagneticButton>

        <button
          aria-label="Ouvrir le menu"
          className="inline-flex h-10 w-10 items-center justify-center text-[#16241d] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#16241d]/10 bg-[#faf6ef] px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium uppercase tracking-wide text-[#16241d]/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-full bg-[#1f4d3a] px-5 py-3 text-center text-sm font-semibold text-[#faf6ef]"
            >
              Commander sur WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
