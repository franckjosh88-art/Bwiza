import { useRef } from "react";
import { TruckIcon, CoinIcon, WhatsAppIcon } from "./MiscIcons";
import { WHATSAPP_CONTACT_URL } from "../data/content";
import { useScrollReveal } from "./useScrollReveal";
import RevealText from "./RevealText";
import MagneticButton from "./MagneticButton";

export default function DeliveryContact() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, ".dc-reveal", { stagger: 0.1 });

  return (
    <div ref={ref}>
      {/* Livraison */}
      <section id="livraison" className="grain-texture bg-[#faf6ef] py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <div className="max-w-xl">
            <span className="dc-reveal text-xs font-semibold uppercase tracking-[0.2em] text-[#1f4d3a]/70">
              Livraison
            </span>
            <RevealText as="h2" className="font-display mt-4 text-3xl font-semibold text-[#16241d] sm:text-4xl">
              Rapide, simple et sans risque
            </RevealText>
            <p className="dc-reveal mt-4 max-w-md text-base text-[#16241d]/70">
              Livraison rapide à Kigali. Commandez sur WhatsApp, payez à la
              réception.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 border-t border-[#16241d]/10 pt-10 sm:grid-cols-2 sm:gap-16">
            <div className="dc-reveal flex gap-5">
              <TruckIcon className="h-8 w-8 shrink-0 text-[#1f4d3a]" />
              <div>
                <h3 className="font-display text-lg font-semibold text-[#16241d]">
                  Livraison à Kigali
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#16241d]/65">
                  Nous livrons rapidement partout à Kigali, directement chez
                  vous.
                </p>
              </div>
            </div>
            <div className="dc-reveal flex gap-5">
              <CoinIcon className="h-8 w-8 shrink-0 text-[#1f4d3a]" />
              <div>
                <h3 className="font-display text-lg font-semibold text-[#16241d]">
                  Paiement à la livraison
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#16241d]/65">
                  Payez en toute confiance seulement à la réception de votre
                  commande.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#1f4d3a] py-24 text-[#faf6ef] sm:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center sm:px-10">
          <span className="dc-reveal text-xs font-semibold uppercase tracking-[0.2em] text-[#faf6ef]/60">
            Contact
          </span>
          <RevealText as="h2" className="font-display mt-4 text-3xl font-semibold sm:text-4xl">
            Une question ? Écrivez-nous sur WhatsApp
          </RevealText>
          <p className="dc-reveal mt-5 text-[#faf6ef]/75">
            Notre équipe vous répond rapidement pour vous conseiller et prendre
            votre commande.
          </p>

          <MagneticButton
            href={WHATSAPP_CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="dc-reveal mt-9 items-center gap-3 rounded-full bg-[#faf6ef] px-8 py-4 text-base font-semibold text-[#1f4d3a] transition-colors duration-300 hover:bg-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
            0786 577 760
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
