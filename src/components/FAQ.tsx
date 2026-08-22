"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { faqs as defaultFaqs, type FaqItem } from "@/lib/data";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import ContactForm from "./ContactForm";

export default function FAQ({
  compact = false,
  withContact = false,
  items = defaultFaqs,
  eyebrow = "FAQ",
  title = "Questions Fréquentes",
  description = "Les réponses aux questions que nous recevons le plus souvent.",
}: {
  compact?: boolean;
  withContact?: boolean;
  items?: FaqItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = items;

  const list = (
    <div className="flex w-full flex-col gap-3">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-xl border border-border bg-white"
          >
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-sm font-bold text-foreground sm:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  className={clsx(
                    "h-5 w-5 shrink-0 text-muted transition-transform duration-300",
                    isOpen && "rotate-180 text-blue"
                  )}
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              className={clsx("grid transition-all duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm leading-relaxed text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section id="faq" className={compact ? "bg-surface py-16 sm:py-24" : "bg-surface py-12 sm:py-16"}>
      <Container className="flex flex-col gap-12">
        {compact && (
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        )}

        {withContact ? (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">{list}</div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
                <h3 className="text-xl font-extrabold text-foreground">Besoin d&apos;aide ?</h3>
                <p className="mt-1 text-sm text-muted">
                  Envoyez-nous un message, notre équipe vous répond rapidement.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto w-full max-w-3xl">{list}</div>
        )}
      </Container>
    </section>
  );
}
