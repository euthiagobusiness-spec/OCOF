import { Arrow } from "@/components/ui/Arrow";

export function FinalCTA() {
  return (
    <section className="final-cta section-dark" id="contato">
      <div className="shell final-cta-grid">
        <div>
          <p className="eyebrow light">Próxima etapa</p>
          <h2>Sua empresa não precisa de mais ações soltas. <em>Precisa de uma operação.</em></h2>
        </div>
        <div className="contact-panel" data-content-needed="contact-links">
          <p>O diagnóstico começa pela leitura do cenário atual e dos pontos de maior alavancagem.</p>
          <a className="button button-light" href="#scan">Conhecer o OCOF SCAN <Arrow direction="up-right" /></a>
          {/* TODO(ocof-content): adicionar WhatsApp/e-mail oficial quando validado. */}
        </div>
      </div>
    </section>
  );
}
