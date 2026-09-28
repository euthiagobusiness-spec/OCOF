import Image from "next/image";
import { IntroStatement } from "@/components/home/IntroStatement";

export function BrandSection() {
  return (
    <section className="chapter" id="ocof">
      <div className="shell">
        <div className="manifesto-layout manifesto-layout--showcase">
          <IntroStatement className="intro-statement--desktop" />
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
