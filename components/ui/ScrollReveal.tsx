"use client";

import { useEffect } from "react";
import { animate } from "framer-motion/dom/mini";

const revealDuration = 5;
const revealEase = [0.16, 1, 0.3, 1] as const;

function initialTransform(element: HTMLElement, index = 0) {
  if (element.parentElement?.classList.contains("forces-list")) {
    const x = index % 2 === 0 ? -80 : 80;
    return `translate3d(${x}px, 40px, 0)`;
  }

  if (element.matches(".hero-intro-lockup > p")) {
    return "translate3d(0, -64px, 0)";
  }

  return "translate3d(0, 56px, 0)";
}

function settle(element: HTMLElement) {
  element.classList.add("is-visible");
  element.style.removeProperty("opacity");
  element.style.removeProperty("transform");
  element.style.removeProperty("filter");
  element.style.removeProperty("will-change");
}

export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const groups = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal-group]"));
    groups.forEach((group) => {
      Array.from(group.children).forEach((child) => {
        (child as HTMLElement).dataset.revealChild = "true";
      });
    });

    const repeaters = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal-repeat]"));
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const groupItems = groups.flatMap((group) => Array.from(group.children) as HTMLElement[]);
    const revealTargets = Array.from(new Set([...elements, ...groupItems])).filter(
      (element) => !element.hasAttribute("data-reveal-repeat"),
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const running = new Set<ReturnType<typeof animate>>();

    const reveal = (element: HTMLElement, delay = 0, index = 0) => {
      element.style.willChange = "opacity, transform, filter";
      const controls = animate(
        element,
        {
          opacity: [0, 1],
          transform: [initialTransform(element, index), "translate3d(0, 0, 0)"],
          filter: ["blur(8px)", "blur(0px)"],
        },
        { duration: element.matches(".glass-panel, .motion-video-card") ? 1.2 : revealDuration, delay, ease: revealEase },
      );
      running.add(controls);
      void controls.then(() => {
        running.delete(controls);
        settle(element);
      });
    };

    const showImmediately = () => {
      elements.forEach(settle);
      groups.forEach((group) => {
        group.classList.add("is-visible");
        Array.from(group.children).forEach((child) => settle(child as HTMLElement));
      });
      repeaters.forEach((element) => {
        element.classList.add("is-in-view");
        settle(element);
      });
    };

    if (reducedMotion || !("IntersectionObserver" in window)) {
      showImmediately();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          const group = element.parentElement?.closest<HTMLElement>("[data-reveal-group]");
          group?.classList.add("is-visible");
          reveal(element);
          observer.unobserve(element);
        });
      },
      { threshold: 0, rootMargin: "0px" },
    );

    revealTargets.forEach((element) => observer.observe(element));

    const repeatControls = new Map<HTMLElement, ReturnType<typeof animate>>();
    const repeatObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          const previous = repeatControls.get(element);
          previous?.stop();
          if (previous) running.delete(previous);

          if (!entry.isIntersecting) {
            element.classList.remove("is-in-view", "is-visible");
            element.style.opacity = "0";
            element.style.transform = "translate3d(0, 40px, 0) scale(0.82)";
            element.style.filter = "blur(12px)";
            return;
          }

          element.classList.add("is-in-view");
          element.style.willChange = "opacity, transform, filter";
          const controls = animate(
            element,
            {
              opacity: [0, 1],
              transform: [
                "translate3d(0, 40px, 0) scale(0.82)",
                "translate3d(0, 0, 0) scale(1)",
              ],
              filter: ["blur(12px)", "blur(0px)"],
            },
            { duration: revealDuration, ease: revealEase },
          );
          repeatControls.set(element, controls);
          running.add(controls);
          void controls.then(() => {
            running.delete(controls);
            settle(element);
          });
        });
      },
      { threshold: 0, rootMargin: "0px" },
    );

    repeaters.forEach((element) => repeatObserver.observe(element));

    return () => {
      observer.disconnect();
      repeatObserver.disconnect();
      running.forEach((controls) => controls.stop());
      repeatControls.clear();
    };
  }, []);

  return null;
}
