import Header from "./components/Header";
import Hero from "./components/Hero";
import Ingredients from "./components/Ingredients";
import Benefits from "./components/Benefits";
import ProductDetail from "./components/ProductDetail";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import DeliveryContact from "./components/DeliveryContact";
import Footer from "./components/Footer";
import MagneticButton from "./components/MagneticButton";
import { WhatsAppIcon } from "./components/MiscIcons";
import { SHOW_TESTIMONIALS, WHATSAPP_ORDER_URL } from "./data/content";
import { useLenis } from "./lib/useLenis";

export default function App() {
  // Défilement fluide (Lenis) synchronisé avec GSAP ScrollTrigger.
  useLenis();

  return (
    <div className="min-h-screen bg-[#faf6ef] font-sans text-[#16241d]">
      <Header />
      <main>
        <Hero />
        <Ingredients />
        <Benefits />
        <ProductDetail />

        {/*
          Section "Avis clientes" : affichée uniquement si SHOW_TESTIMONIALS
          vaut `true` dans src/data/content.ts. Passez cette constante à
          `true` dès que vous disposez de vrais avis clients vérifiés.
        */}
        {SHOW_TESTIMONIALS && <Testimonials />}

        <FAQ />
        <DeliveryContact />
      </main>
      <Footer />

      <MagneticButton
        href={WHATSAPP_ORDER_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Commander sur WhatsApp"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 sm:bottom-8 sm:right-8"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </MagneticButton>
    </div>
  );
}
