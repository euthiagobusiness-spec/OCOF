import Image from "next/image";

export function BrandSection() {
  return (
    <section className="chapter" id="ocof">
      <div className="shell">
        <div className="manifesto-layout">
          <div className="intro-statement glass-panel" data-reveal>
            <p>Ousadia • Constância • Organização • Foco</p>
            <p>Este é o ambiente de construção da OCOF.</p>
            <p>Aqui valorizamos execução acima de intenção, responsabilidade acima de desculpas e crescimento acima da zona de conforto.</p>
            <p>Cada projeto, lançamento e operação deve refletir os princípios que sustentam a empresa: ousadia para criar, constância para evoluir, organização para escalar e foco para entregar resultados.</p>
          </div>
          <div className="artifact-showcase">
            <div className="artifact-gallery" aria-hidden="true">
              <div className="artifact artifact-primary"><Image src="/ocof/hero-collage.jpg" alt="" fill sizes="(max-width: 700px) 70vw, 27vw" /></div>
              <div className="artifact artifact-secondary"><Image src="/brand/ocof-agenda.jpg" alt="" fill sizes="(max-width: 700px) 35vw, 13vw" /></div>
              <div className="artifact artifact-tertiary"><Image src="/ocof/logo-wall.jpg" alt="" fill sizes="(max-width: 700px) 35vw, 13vw" /></div>
            </div>
            <a className="closing-action page-two-action" href="#contato" data-reveal>Construir com a OCOF</a>
          </div>
        </div>
        <h2 data-reveal>Crescimento exige duas forças: um mercado que escolhe e uma empresa que sustenta.</h2>
        <div className="two-column" data-reveal-group>
          <article className="text-block glass-panel">
            <h3>Mercado</h3>
            <p>Fazemos o mercado escolher você.</p>
            <p>Posicionamento, produto, oferta, aquisição e vendas.</p>
          </article>
          <article className="text-block glass-panel">
            <h3>Empresa</h3>
            <p>Construímos a estrutura que sustenta o crescimento.</p>
            <p>Processos, pessoas, gestão, dados, tecnologia e execução.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
