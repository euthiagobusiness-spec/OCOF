"use client";

import { useEffect } from "react";

export function CardMotion() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".glass-panel, .motion-video-card"));
    const phone = window.matchMedia("(max-width: 640px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;

    const update = () => {
      observer?.disconnect();
      cards.forEach((card) => card.classList.remove("is-in-focus"));
      if (!phone.matches || reducedMotion.matches) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle("is-in-focus", entry.isIntersecting);
          });
        },
        { rootMargin: "-30% 0px -30% 0px", threshold: 0 },
      );
      cards.forEach((card) => observer?.observe(card));
    };

    update();
    phone.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      observer?.disconnect();
      phone.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  return null;
}
