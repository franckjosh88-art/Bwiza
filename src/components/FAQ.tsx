import { useRef, useState } from "react";
import { FAQ_ITEMS } from "../data/content";
import { useScrollReveal } from "./useScrollReveal";
import RevealText from "./RevealText";

function FaqRow({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-row border-b border-[#16241d]/10 py-6">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 text-left"
      >
        <span className="font-display text-base font-medium text-[#16241d] sm:text-lg">
          <span className="mr-3 text-[#1f4d3a]/40">0{index + 1}</span>
          {question}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#16241d]/20 text-[#1f4d3a] transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="mt-4 max-w-2xl pr-10 text-sm leading-relaxed text-[#16241d]/70 sm:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, ".faq-row", { stagger: 0.06, y: 18 });

  return (
    <section id="faq" ref={ref} className="grain-texture bg-[#faf6ef] py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f4d3a]/70">
            Questions fréquentes
          </span>
          <RevealText as="h2" className="font-display mt-4 text-3xl font-semibold text-[#16241d] sm:text-4xl">
            Tout ce qu'il faut savoir
          </RevealText>
        </div>

        <div className="mt-12 border-t border-[#16241d]/10">
          {FAQ_ITEMS.map((item, i) => (
            <FaqRow key={item.question} question={item.question} answer={item.answer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
