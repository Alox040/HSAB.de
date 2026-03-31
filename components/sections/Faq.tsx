"use client";

import { useState } from "react";
import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { faqs } from "@/lib/content";

export default function Faq(): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionContainer variant="white" id="faq">
      <ContentContainer>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            badge="FAQ"
            heading="Häufig gestellte Fragen"
            description="Antworten auf die wichtigsten Fragen zur Seniorenbetreuung bei HSA."
            centered
          />

          <div className="mt-12 flex flex-col divide-y divide-[var(--border-soft)]">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4">
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-[var(--primary)] leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className="mt-0.5 flex-shrink-0 text-[var(--secondary)] transition-transform duration-200"
                    style={{
                      transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {openIndex === index && (
                  <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}
