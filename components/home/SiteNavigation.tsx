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
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let frame = 0;

    const updateReveal = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const nextPage = document.getElementById("ocof");
        const scrollOffset = nextPage
          ? (Number.parseFloat(window.getComputedStyle(nextPage).scrollMarginTop) || 0)
            + (Number.parseFloat(window.getComputedStyle(document.documentElement).scrollPaddingTop) || 0)
          : 0;
        const expanded = nextPage
          ? nextPage.getBoundingClientRect().top <= scrollOffset + 16
          : window.scrollY >= window.innerHeight * 0.9;

        setIsExpanded((current) => current === expanded ? current : expanded);
      });
    };

    updateReveal();
    const settleTimer = window.setTimeout(updateReveal, 300);
    window.addEventListener("scroll", updateReveal, { passive: true });
    window.addEventListener("resize", updateReveal);
    window.addEventListener("hashchange", updateReveal);
    window.addEventListener("pageshow", updateReveal);

    return () => {
      window.removeEventListener("scroll", updateReveal);
      window.removeEventListener("resize", updateReveal);
      window.removeEventListener("hashchange", updateReveal);
      window.removeEventListener("pageshow", updateReveal);
      window.clearTimeout(settleTimer);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header ref={headerRef} className={`site-curtain${isExpanded ? " is-expanded" : ""}`}>
      <div className="curtain-inner shell">
        <a className="curtain-brand" href="#inicio" aria-label="OCOF — início">
          <Image src="/brand/ocof-wordmark.avif" alt="" width={590} height={205} priority />
        </a>
        <nav className="curtain-nav" aria-label="Navegação principal">
          {navigation.map(([label, href], index) => {
            const appearsOnSecondPage = index >= 3;
            const hidden = appearsOnSecondPage && !isExpanded;

            return (
              <a
                key={label}
                className={appearsOnSecondPage ? "curtain-link-later" : undefined}
                href={href}
                aria-hidden={hidden || undefined}
                tabIndex={hidden ? -1 : undefined}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
