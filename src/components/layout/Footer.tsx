import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--background)] py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo className="mb-6" />
          <p className="max-w-sm text-sm leading-6 text-[rgb(var(--wine-rgb)_/_0.62)]">
            {site.footer.note}
          </p>
          <p className="mt-3 text-xs font-semibold uppercase text-[var(--muted)]">
            {site.signature}
          </p>
          <p className="mt-8 text-xs text-[rgb(var(--wine-rgb)_/_0.42)]">
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[var(--wine)]">Links rápidos</h2>
          <nav aria-label="Links do rodapé" className="mt-4 grid gap-3">
            {navigation.map((item) => (
              <Link
                className="text-sm text-[rgb(var(--wine-rgb)_/_0.62)] transition hover:text-[var(--wine)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--rose)]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[var(--wine)]">Contato</h2>
          <p className="mt-4 text-sm leading-6 text-[rgb(var(--wine-rgb)_/_0.62)]">
            Conversas comerciais qualificadas para negócios que querem crescer com estrutura.
          </p>
          <Button className="mt-5 w-full" href={site.links.primaryCta}>
            Fale com a OCOF
          </Button>
          <nav aria-label="Documentos legais" className="mt-6 grid gap-3 border-t border-[var(--line)] pt-5">
            <Link
              className="text-sm text-[rgb(var(--wine-rgb)_/_0.62)] transition hover:text-[var(--wine)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--rose)]"
              href={site.links.privacy}
            >
              Política de Privacidade
            </Link>
            <Link
              className="text-sm text-[rgb(var(--wine-rgb)_/_0.62)] transition hover:text-[var(--wine)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--rose)]"
              href={site.links.terms}
            >
              Termos de Uso
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
