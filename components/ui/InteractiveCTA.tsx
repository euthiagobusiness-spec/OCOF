"use client";

import type { PointerEvent } from "react";

export function InteractiveCTA() {
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const offsetX = (x / bounds.width - 0.5) * 8;
    const offsetY = (y / bounds.height - 0.5) * 5;

    event.currentTarget.style.setProperty("--cta-pointer-x", `${x}px`);
    event.currentTarget.style.setProperty("--cta-pointer-y", `${y}px`);
    event.currentTarget.style.setProperty("--cta-offset-x", `${offsetX}px`);
    event.currentTarget.style.setProperty("--cta-offset-y", `${offsetY}px`);
  };

  const resetPointer = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--cta-offset-x", "0px");
    event.currentTarget.style.setProperty("--cta-offset-y", "0px");
  };

  return (
    <div
      className="closing-action-track"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <button className="closing-action" type="button" disabled>
        <span>Construir com a OCOF</span>
      </button>
    </div>
  );
}
