"use client";

import { useState } from "react";
import { Arrow } from "@/components/ui/Arrow";

type Service = readonly [string, string, string, string];

type ServicesAccordionProps = {
  items: readonly Service[];
};

export function ServicesAccordion({ items }: ServicesAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="services-grid" data-reveal-group aria-label="Produtos OCOF">
      {items.map(([title, subtitle, text, label], index) => {
        const isActive = activeIndex === index;
        const panelId = `service-panel-${index + 1}`;

        return (
          <article className={`service-card${isActive ? " is-active" : ""}`} key={title}>
            <button
              className="service-summary"
              type="button"
              aria-expanded={isActive}
              aria-controls={panelId}
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <span className="card-index">0{index + 1}</span>
              <span>
                <strong>{title}</strong>
                <small>{label}</small>
              </span>
              <span className="summary-icon" aria-hidden="true">+</span>
            </button>
            <div className={`service-panel${isActive ? " is-open" : ""}`} id={panelId} aria-hidden={!isActive}>
              <div className="service-panel-inner">
                <span className="service-deliverable">O que você recebe</span>
                <h3>{subtitle}</h3>
                <p>{text}</p>
                <a className="text-link" href="#contato" tabIndex={isActive ? 0 : -1}>
                  Conversar sobre isso <Arrow direction="up-right" />
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
