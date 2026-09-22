"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");

    const groups = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal-group]"));
    groups.forEach((group) => {
      Array.from(group.children).forEach((child, index) => {
        const element = child as HTMLElement;
        element.dataset.revealChild = "true";
        element.style.setProperty("--reveal-delay", `${index * 120}ms`);
      });
    });

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-group]"));
    const repeaters = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal-repeat]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      repeaters.forEach((element) => element.classList.add("is-in-view"));
      return;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      repeaters.forEach((element) => element.classList.add("is-in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 26% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    const repeatObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-in-view", entry.isIntersecting);
        });
      },
      { threshold: 0.28, rootMargin: "-8% 0px -8% 0px" },
    );
    repeaters.forEach((element) => repeatObserver.observe(element));

    return () => {
      observer.disconnect();
      repeatObserver.disconnect();
    };
  }, []);

  return null;
}
