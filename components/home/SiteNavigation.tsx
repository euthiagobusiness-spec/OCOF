"use client";

import { useEffect, useRef } from "react";

const navigation = [
  ["Início", "#inicio"],
  ["OCOF", "#ocof"],
  ["Serviços", "#solucoes"],
  ["Método", "#como-atuamos"],
  ["Cultura", "#cultura"],
  ["Contato", "#contato"],
] as const;

export function SiteNavigation() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let frame = 0;

    const updateReveal = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const progress = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.75)));
        header.style.setProperty("--curtain-opacity", String(0.86 + progress * 0.14));
        header.style.setProperty("--curtain-offset", `${-2 * (1 - progress)}px`);
        header.style.setProperty("--curtain-glass", String(0.08 + progress * 0.3));
        header.style.setProperty("--curtain-glass-soft", String(0.05 + progress * 0.2));
      });
    };

    updateReveal();
    window.addEventListener("scroll", updateReveal, { passive: true });
    window.addEventListener("resize", updateReveal);

    return () => {
      window.removeEventListener("scroll", updateReveal);
      window.removeEventListener("resize", updateReveal);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header ref={headerRef} className="site-curtain">
      <div className="curtain-inner shell">
        <nav className="curtain-nav" aria-label="Navegação principal">
          {navigation.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
