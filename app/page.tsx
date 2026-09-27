import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { audiences, blockers, method, principles, solutions } from "@/components/content/site-content";

const navigation = [
  ["Início", "#inicio"],
  ["OCOF", "#ocof"],
  ["Serviços", "#solucoes"],
  ["Método", "#como-atuamos"],
  ["Cultura", "#cultura"],
  ["Contato", "#contato"],
] as const;

export default function HomePage() {
  return (
    <>
      <header className="site-curtain">
        <nav className="curtain-nav shell" aria-label="Navegação principal">
          {navigation.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
      </header>
      <ScrollReveal />
      <main>
        <section className="chapter chapter-intro" id="inicio">
          <div className="hero-inner shell">
            <Image className="hero-logo" src="/brand/ocof-wordmark.avif" alt="OCOF" width={590} height={205} priority />
            <h1>Transformamos o valor que existe em crescimento exponencial</h1>
          </div>
        </section>

        <div className="office-backdrop" aria-hidden="true" />
        <div className="story">
          <section className="chapter" id="ocof">
            <div className="shell">
              <div className="manifesto-layout">
                <div className="intro-statement glass-panel" data-reveal>
                  <p>Ousadia • Constância • Organização • Foco</p>
                  <p>Este é o ambiente de construção da OCOF.</p>
                  <p>Aqui valorizamos execução acima de intenção, responsabilidade acima de desculpas e crescimento acima da zona de conforto.</p>
                  <p>Cada projeto, lançamento e operação deve refletir os princípios que sustentam a empresa: ousadia para criar, constância para evoluir, organização para escalar e foco para entregar resultados.</p>
                </div>
                <div className="artifact-gallery" aria-hidden="true">
                  <div className="artifact artifact-primary"><Image src="/ocof/hero-collage.jpg" alt="" fill sizes="(max-width: 700px) 70vw, 27vw" /></div>
                  <div className="artifact artifact-secondary"><Image src="/brand/ocof-agenda.jpg" alt="" fill sizes="(max-width: 700px) 35vw, 13vw" /></div>
                  <div className="artifact artifact-tertiary"><Image src="/ocof/logo-wall.jpg" alt="" fill sizes="(max-width: 700px) 35vw, 13vw" /></div>
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

          <section className="chapter" id="para-quem">
            <div className="shell">
              <h2 data-reveal>Para quem já construiu algo de valor.</h2>
              <div className="audience-grid" data-reveal-group>
                {audiences.map(([title, description]) => (
                  <article className="text-block glass-panel" key={title}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="chapter" id="gargalos">
            <div className="shell">
              <h2 data-reveal>Resolvemos os gargalos que limitam o crescimento.</h2>
              <div className="blockers-grid" data-reveal-group>
                {blockers.map(([title, description]) => (
                  <article className="text-block glass-panel" key={title}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="chapter" id="solucoes">
            <div className="shell">
              <h2 data-reveal>Atuamos conforme a realidade.</h2>
              <div className="solutions-list" data-reveal-group>
                {solutions.map(([title, description]) => (
                  <article className="solution-row glass-panel" key={title}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="chapter" id="como-atuamos">
            <div className="shell">
              <h2 data-reveal>Desenvolvemos o que cada realidade exige.</h2>
              <div className="method-grid" data-reveal-group>
                {method.map(([title, description]) => (
                  <article className="text-block glass-panel" key={title}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="chapter chapter-final" id="cultura">
            <div className="shell">
              <h2 data-reveal>Nossa cultura está no nosso nome.</h2>
              <div className="principles-grid" data-reveal-group>
                {principles.map(([title, description]) => (
                  <article className="text-block glass-panel" key={title}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
              <div className="closing glass-panel" id="contato" data-reveal>
                <p className="closing-question">Seu negócio já provou que tem valor. A pergunta é: até quando você vai aceitar crescer abaixo do potencial que construiu?</p>
                <p>Descubra o que está limitando seu crescimento e construa com a OCOF o que falta para ir além.</p>
                <button className="closing-action" type="button" disabled>Construir com a OCOF</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}