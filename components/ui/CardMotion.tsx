"use client";

import { useEffect } from "react";

export function CardMotion() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".glass-panel, .motion-video-card"));
    const phone = window.matchMedia("(max-width: 640px)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    let pointerFrame = 0;
    let pressedCard: HTMLElement | undefined;

    const moveLight = (event: PointerEvent) => {
      if (!finePointer.matches || event.pointerType !== "mouse") return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const card = target.closest<HTMLElement>(".glass-panel");
      if (!card) return;

      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        const bounds = card.getBoundingClientRect();
        card.style.setProperty("--card-x", `${event.clientX - bounds.left}px`);
        card.style.setProperty("--card-y", `${event.clientY - bounds.top}px`);
      });
    };

    const press = (event: PointerEvent) => {
      if (event.pointerType === "mouse") return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      pressedCard = target.closest<HTMLElement>(".glass-panel, .motion-video-card") ?? undefined;
      pressedCard?.classList.add("is-pressed");
    };

    const release = () => {
      pressedCard?.classList.remove("is-pressed");
      pressedCard = undefined;
    };

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
    document.addEventListener("pointermove", moveLight, { passive: true });
    document.addEventListener("pointerdown", press, { passive: true });
    document.addEventListener("pointerup", release);
    document.addEventListener("pointercancel", release);
    phone.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(pointerFrame);
      release();
      document.removeEventListener("pointermove", moveLight);
      document.removeEventListener("pointerdown", press);
      document.removeEventListener("pointerup", release);
      document.removeEventListener("pointercancel", release);
      phone.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  return null;
}
