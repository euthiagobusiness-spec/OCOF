"use client";

import Image from "next/image";
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

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactLayout = window.matchMedia("(max-width: 640px)");
    let frame = 0;

    const updateReveal = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const scrollY = window.scrollY;
        const progress = reduceMotion.matches
          ? Number(scrollY > 0)
          : Math.min(1, Math.max(0, scrollY / 180));

        header.style.opacity = String(progress);
        header.style.transform = `translateY(${(1 - progress) * -10}px)`;
        header.style.backgroundColor = `rgba(8, 8, 8, ${progress * 0.72})`;
        header.style.backdropFilter = `blur(${progress * (compactLayout.matches ? 12 : 18)}px)`;
        header.style.borderBottomColor = `rgba(255, 255, 255, ${progress * 0.16})`;
        header.style.pointerEvents = progress > 0.02 ? "auto" : "none";
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
        <a className="curtain-brand" href="#inicio" aria-label="OCOF — início">
          <Image src="/brand/ocof-wordmark.avif" alt="" width={590} height={205} priority />
        </a>
        <nav className="curtain-nav" aria-label="Navegação principal">
          {navigation.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
      </div>
    </header>
  );
}
