import { InstagramIcon, WhatsAppIcon } from "./MiscIcons";
import { WHATSAPP_CONTACT_URL } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-[#123226] py-16 text-[#faf6ef]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-7 px-6 text-center sm:px-10">
        <span className="font-display text-2xl font-semibold tracking-tight">Ubwiza</span>

        <p className="font-display text-base italic text-[#faf6ef]/75">
          « La douceur de la nature pour votre peau »
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/ubwiza.skin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Ubwiza"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#faf6ef]/20 transition-colors duration-300 hover:border-[#faf6ef]/50"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={WHATSAPP_CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Ubwiza"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#faf6ef]/20 transition-colors duration-300 hover:border-[#faf6ef]/50"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </div>

        <a
          href="https://instagram.com/ubwiza.skin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#faf6ef]/60 transition-colors hover:text-[#faf6ef]"
        >
          @ubwiza.skin
        </a>

        <div className="mt-2 h-px w-full max-w-xs bg-[#faf6ef]/15" />

        <p className="text-xs text-[#faf6ef]/50">© 2026 Ubwiza. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
