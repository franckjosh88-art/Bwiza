/**
 * Contenu éditorial centralisé du site Ubwiza.
 * Modifier les textes/prix/liens ici suffit à les répercuter partout.
 */

export const WHATSAPP_NUMBER = "250786577760";
export const WHATSAPP_MESSAGE =
  "Bonjour, je voudrais commander la pommade Ubwiza Nourish.";
export const WHATSAPP_ORDER_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
export const WHATSAPP_CONTACT_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const PRICE_LABEL = "8 500 RWF";

// ---------------------------------------------------------------------------
// Bascule d'affichage de la section "Avis clientes". Passez à `true` dès que
// vous disposez de vrais témoignages vérifiés (nom, ville, avis authentique).
// Les données restent plus bas dans TESTIMONIALS, prêtes à être réutilisées.
// ---------------------------------------------------------------------------
export const SHOW_TESTIMONIALS = false;

export const INGREDIENTS = [
  {
    key: "karite",
    name: "Beurre de karité",
    description: "Nourrit et protège",
    image: "/images/karite.jpg",
    fallbackColor: "#e4d3b0",
  },
  {
    key: "aloe",
    name: "Aloe vera",
    description: "Apaise les peaux irritées",
    image: "/images/aloe.jpg",
    fallbackColor: "#9fc3a6",
  },
  {
    key: "vitamineE",
    name: "Vitamine E",
    description: "Riche en antioxydants",
    image: "/images/vitamine-e.jpg",
    fallbackColor: "#d8b872",
  },
  {
    key: "coco",
    name: "Huile de coco",
    description: "Hydratation profonde",
    image: "/images/coco.jpg",
    fallbackColor: "#f1ebd9",
  },
] as const;

export const BENEFITS = [
  {
    key: "hydratation",
    title: "Hydratation profonde",
    description: "La peau retrouve souplesse et confort dès les premières applications.",
  },
  {
    key: "apaise",
    title: "Apaise les peaux irritées",
    description: "L'aloe vera calme les tiraillements et les rougeurs passagères.",
  },
  {
    key: "cicatrisation",
    title: "Favorise la cicatrisation",
    description: "Une formule réparatrice qui soutient le renouvellement cutané.",
  },
  {
    key: "antioxydant",
    title: "Riche en antioxydants",
    description: "La vitamine E protège la peau face aux agressions du quotidien.",
  },
] as const;

export const GUARANTEES = [
  { key: "naturel", label: "Ingrédients naturels" },
  { key: "livraison", label: "Livraison à Kigali" },
  { key: "paiement", label: "Paiement à la livraison" },
] as const;

export const COMPOSITION = [
  "Beurre de karité",
  "Aloe vera",
  "Vitamine E",
  "Huile de coco",
  "Base émolliente douce, sans parfum ajouté agressif",
];

export const USAGE_STEPS = [
  {
    step: "01",
    title: "Nettoyez",
    description: "Appliquez sur une peau propre et légèrement humide, matin ou soir.",
  },
  {
    step: "02",
    title: "Appliquez",
    description: "Prélevez une noisette de pommade et massez en mouvements circulaires.",
  },
  {
    step: "03",
    title: "Laissez pénétrer",
    description: "Laissez la peau absorber le soin avant d'exposer au soleil ou au maquillage.",
  },
];

export const PRODUCT_FACTS = [
  { label: "Contenance", value: "50 ml" },
  { label: "Type de peau", value: "Tous types de peau" },
  { label: "Conservation", value: "12 mois après ouverture, à l'abri de la chaleur" },
];

export const FAQ_ITEMS = [
  {
    question: "Ubwiza Nourish convient-il aux peaux sensibles ?",
    answer:
      "Oui. La formule est conçue pour être douce et apaisante, sans parfum agressif. Comme pour tout nouveau soin, nous recommandons un test sur une petite zone de peau avant la première utilisation complète.",
  },
  {
    question: "Au bout de combien de temps voit-on les premiers résultats ?",
    answer:
      "La plupart des clientes ressentent un confort immédiat dès l'application. Pour une peau visiblement plus hydratée et apaisée, comptez en général 1 à 2 semaines d'utilisation régulière, matin et soir.",
  },
  {
    question: "Comment se passe la livraison à Kigali ?",
    answer:
      "Vous commandez directement sur WhatsApp, nous confirmons votre adresse et votre commande est livrée rapidement, en général le jour même ou le lendemain selon votre secteur.",
  },
  {
    question: "Dois-je payer à l'avance ?",
    answer:
      "Non. Le paiement se fait à la livraison, en espèces ou par Mobile Money, directement auprès du livreur, une fois que vous avez reçu votre pot d'Ubwiza Nourish.",
  },
  {
    question: "Combien de temps dure un pot de 50 ml ?",
    answer:
      "Utilisé matin et soir sur le visage, un pot de 50 ml dure en moyenne 6 à 8 semaines, selon la quantité appliquée à chaque usage.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Ma peau était sèche et irritée. Après deux semaines avec Ubwiza, elle est enfin douce et confortable.",
    name: "Aline",
    city: "Kigali",
  },
  {
    quote:
      "Une texture riche mais qui ne laisse pas de film gras. Je l'utilise matin et soir.",
    name: "Grace",
    city: "Kigali",
  },
  {
    quote:
      "Je l'ai offerte à ma sœur, elle ne veut plus s'en passer. L'odeur est naturelle et très agréable.",
    name: "Divine",
    city: "Huye",
  },
] as const;
