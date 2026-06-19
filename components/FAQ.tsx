"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/api";

interface FAQProps {
  title: string;
  items: FaqItem[];
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
  isFirst,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  isFirst: boolean;
}) {
  return (
    <div className={`accordion ${isFirst ? "accordion--first" : ""}`}>
      <button
        type="button"
        className="accordion__header"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <p className="accordion__title">{item.question}</p>
        <span className={`accordion__icon ${isOpen ? "accordion__icon--open" : ""}`} />
      </button>
      <div
        className={`accordion__content ${isOpen ? "accordion__content--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div
          className="accordion__text rich-text"
          dangerouslySetInnerHTML={{ __html: item.answer }}
        />
      </div>
    </div>
  );
}

export default function FAQ({ title, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq section-gap">
      <div className="container">
        <h2 className="faq__title title-main">{title}</h2>
        <div className="faq__list">
          {items.map((item, index) => (
            <AccordionItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              isFirst={index === 0}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
