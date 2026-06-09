"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        isScrolled || isOpen
          ? "fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[rgb(var(--nude-rgb)_/_0.76)] backdrop-blur-xl transition duration-300"
          : "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-[rgb(var(--nude-rgb)_/_0.34)] backdrop-blur-md transition duration-300"
      }
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo compact />

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              className="text-sm font-medium text-[rgb(var(--wine-rgb)_/_0.68)] transition hover:text-[var(--wine)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--rose)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={site.links.primaryCta} variant="primary">
            Fale com a OCOF
          </Button>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="inline-flex size-11 items-center justify-center rounded-[6px] border border-[var(--line-strong)] text-[var(--wine)] transition hover:border-[var(--rose)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--rose)] lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[var(--line)] bg-[var(--surface)] px-5 py-5 lg:hidden">
          <nav aria-label="Navegação mobile" className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <Link
                className="rounded-[6px] px-3 py-3 text-base text-[rgb(var(--wine-rgb)_/_0.76)] transition hover:bg-[rgb(var(--wine-rgb)_/_0.06)] hover:text-[var(--wine)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rose)]"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              className="mt-3 w-full"
              href={site.links.primaryCta}
              variant="primary"
            >
              Fale com a OCOF
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
