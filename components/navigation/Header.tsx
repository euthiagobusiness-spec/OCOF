"use client";

import { useEffect, useState } from "react";
import { Arrow } from "@/components/ui/Arrow";

const navItems = [
  ["Início", "/#inicio"],
  ["OCOF", "/#ocof"],
  ["Serviços", "/#servicos"],
  ["Método", "/#metodo"],
  ["Cultura", "/#cultura"],
  ["Contato", "/#contato"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner shell">
        <a className="brand" href="/#inicio" aria-label="OCOF — voltar ao início">
          <span className="brand-mark" aria-hidden="true" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="button button-small header-cta" href="/#contato">
          Fale com a OCOF <Arrow direction="right" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
        </button>
      </div>
      <div className={`mobile-menu${open ? " is-open" : ""}`} id="mobile-menu" aria-hidden={!open}>
        <nav className="shell" aria-label="Navegação mobile">
          {navItems.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{label}<Arrow direction="up-right" />
            </a>
          ))}
          <a className="button" href="/#scan" onClick={() => setOpen(false)}>
            Fale com a OCOF <Arrow direction="right" />
          </a>
        </nav>
      </div>
    </header>
  );
}
