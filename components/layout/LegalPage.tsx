import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";

type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="legal-header">
        <div className="shell legal-header-inner">
          <a className="legal-wordmark" href="/#inicio" aria-label="OCOF — início">OCOF</a>
          <a className="legal-back" href="/#inicio">Voltar ao site</a>
        </div>
      </header>
      <div className="office-backdrop" aria-hidden="true" />
      <main className="legal-main" id="conteudo">
        <article className="shell legal-document">
          <p className="legal-eyebrow">OCOF / Informações legais</p>
          <h1>{title}</h1>
          <p className="legal-intro">{intro}</p>
          <div className="legal-sections">
            {sections.map((section) => (
              <section className="legal-section" id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.content}
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
