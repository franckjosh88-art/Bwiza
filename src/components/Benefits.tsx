import { useRef } from "react";
import { BENEFITS } from "../data/content";
import { useScrollReveal } from "./useScrollReveal";
import RevealText from "./RevealText";

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, ".benefit-row", { stagger: 0.1, y: 24 });

  return (
    <section ref={ref} className="bg-[#1f4d3a] py-24 text-[#faf6ef] sm:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#faf6ef]/60">
            Bénéfices
          </span>
          <RevealText as="h2" className="font-display mt-4 text-3xl font-semibold sm:text-4xl">
            Ce que votre peau va ressentir
          </RevealText>
        </div>

        <div className="mt-14 divide-y divide-[#faf6ef]/15 border-t border-[#faf6ef]/15">
          {BENEFITS.map((b, i) => (
            <div
              key={b.key}
              className="benefit-row grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 py-7 sm:grid-cols-[3rem_1fr_1.4fr] sm:items-center sm:gap-x-10"
            >
              <span className="font-display text-sm text-[#faf6ef]/45">0{i + 1}</span>
              <h3 className="font-display text-xl font-medium sm:text-2xl">{b.title}</h3>
              <p className="col-span-2 text-sm leading-relaxed text-[#faf6ef]/70 sm:col-span-1 sm:text-base">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
