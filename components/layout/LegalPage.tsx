import type { ReactNode } from "react";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";

type LegalSection = { id: string; title: string; content: ReactNode };

export function LegalPage({ title, intro, sections, notice }: {
  title: string;
  intro: string;
  sections: LegalSection[];
  notice?: ReactNode;
}) {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <div className="legal-hero">
          <div className="shell">
            <p className="eyebrow light">OCOF / Transparência</p>
            <h1>{title}</h1>
            <p>{intro}</p>
            <p>Versão de <time dateTime="2026-09-20">20 de setembro de 2026</time></p>
          </div>
        </div>
        <div className="shell legal-grid">
          <nav className="legal-index" aria-label="Nesta página">
            <h2>Nesta página</h2>
            {sections.map((section, index) => <a key={section.id} href={`#${section.id}`}>{String(index + 1).padStart(2, "0")} — {section.title}</a>)}
            <a href="/">Voltar ao site OCOF ↗</a>
          </nav>
          <div className="legal-content">
            {notice ? <aside className="legal-notice">{notice}</aside> : null}
            {sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-titulo`}>
                <h2 id={`${section.id}-titulo`}>{section.title}</h2>
                {section.content}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
