"use client";

import { useState } from "react";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import {
  article as MotionArticle,
  div as MotionDiv,
  span as MotionSpan,
} from "framer-motion/m";
import { Arrow } from "@/components/ui/Arrow";

type Service = readonly [string, string, string, string];

type ServicesAccordionProps = {
  items: readonly Service[];
};

export function ServicesAccordion({ items }: ServicesAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const reducedMotion = useReducedMotion();

  return (
    <div className="services-grid" data-reveal-group aria-label="Produtos OCOF">
      {items.map(([title, subtitle, text, label], index) => {
        const isActive = activeIndex === index;
        const panelId = `service-panel-${index + 1}`;

        return (
          <MotionArticle
            className={`service-card${isActive ? " is-active" : ""}`}
            key={title}
            layout={!reducedMotion}
            transition={{ layout: { duration: reducedMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] } }}
          >
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
              <MotionSpan
                className="summary-icon"
                aria-hidden="true"
                animate={{ rotate: isActive ? 45 : 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
              >+</MotionSpan>
            </button>
            <AnimatePresence initial={false}>
              {isActive ? (
                <MotionDiv
                  className="service-panel motion-panel"
                  id={panelId}
                  initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="service-panel-inner">
                    <span className="service-deliverable">O que você recebe</span>
                    <h3>{subtitle}</h3>
                    {text ? <p>{text}</p> : null}
                    <a className="text-link" href="#contato">
                      Conversar sobre isso <Arrow direction="up-right" />
                    </a>
                  </div>
                </MotionDiv>
              ) : null}
            </AnimatePresence>
          </MotionArticle>
        );
      })}
    </div>
  );
}
