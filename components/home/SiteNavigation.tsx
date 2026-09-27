"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
  const [isScrolled, setIsScrolled] = useState(false);

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
        header.style.setProperty("--curtain-glass", String(0.12 + progress * 0.82));
        header.style.setProperty("--curtain-glass-soft", String(0.06 + progress * 0.78));

        const compact = window.scrollY >= window.innerHeight * 0.65;
        setIsScrolled((current) => current === compact ? current : compact);
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
    <header ref={headerRef} className={`site-curtain${isScrolled ? " is-scrolled" : ""}`}>
      <div className="curtain-inner shell">
        <nav className="curtain-nav" aria-label="Navegação principal">
          {navigation.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>
        <a
          className="curtain-brand"
          href="#inicio"
          aria-label="OCOF — início"
          aria-hidden={!isScrolled || undefined}
          tabIndex={isScrolled ? 0 : -1}
        >
          <Image src="/brand/ocof-wordmark.avif" alt="" width={590} height={205} priority />
        </a>
      </div>
    </header>
  );
}
