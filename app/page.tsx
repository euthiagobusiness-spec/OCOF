import Image from "next/image";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { Arrow } from "@/components/ui/Arrow";
import { ServicesAccordion } from "@/components/sections/ServicesAccordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { audiences, blockers, method, principles, solutions } from "@/components/content/site-content";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <ScrollReveal />
      <main id="conteudo">
        <section className="hero hero-intro" id="inicio">
          <div className="shell hero-intro-inner" data-reveal>
            <div className="hero-intro-lockup">
              <span className="hero-intro-wordmark brand-mark" aria-label="OCOF" />
              <p>Transformamos o valor que existe em crescimento exponencial</p>
            </div>
          </div>
        </section>

        <section className="section forces-section" id="ocof">
          <div className="shell forces-grid" data-reveal>
            <div className="forces-copy">
              <div className="section-kicker">Duas forças</div>
              <h2>Crescimento exige duas forças: <em>um mercado que escolhe e uma empresa que sustenta.</em></h2>
              <div className="forces-list" data-reveal-group>
                <article className="force-card"><span className="card-index">01</span><h3>Mercado</h3><p>Fazemos o mercado escolher você.</p><small>Posicionamento, produto, oferta, aquisição e vendas.</small></article>
                <article className="force-card"><span className="card-index">02</span><h3>Empresa</h3><p>Construímos a estrutura que sustenta o crescimento.</p><small>Processos, pessoas, gestão, dados, tecnologia e execução.</small></article>
              </div>
            </div>
            <div className="forces-visual" data-reveal-group aria-label="Imagens da identidade OCOF">
              <div className="hero-image hero-image-main"><Image src="/ocof/hero-collage.jpg" alt="Composição de identidade OCOF em tons escuros" fill priority sizes="(max-width: 800px) 100vw, 48vw" /></div>
              <div className="hero-image hero-image-small hero-image-small-one"><Image src="/ocof/logo-dark.jpg" alt="Logo OCOF em fundo escuro" fill sizes="(max-width: 800px) 45vw, 18vw" /></div>
              <div className="hero-image hero-image-small hero-image-small-two"><Image src="/ocof/logo-stone.jpg" alt="Logo OCOF em textura de pedra" fill sizes="(max-width: 800px) 45vw, 18vw" /></div>
              <div className="stat-card stat-card-top"><strong>04</strong><span>frentes integradas</span></div>
              <div className="stat-card stat-card-bottom"><strong>100%</strong><span>foco em previsibilidade</span></div>
            </div>
          </div>
        </section>

        <section className="section dark-section diagnostic-section">
          <div className="shell" data-reveal>
            <div className="section-kicker">Como encontramos o problema</div>
            <div className="section-heading-grid"><h2>Primeiro achamos o gargalo. <em>Depois resolvemos.</em></h2><p className="section-copy">O problema pode estar no mercado: ninguém entende, deseja ou compra. Ou na operação: a empresa vende, mas não consegue entregar, repetir e crescer. A OCOF descobre onde agir primeiro.</p></div>
            <ol className="diagnostic-steps" data-reveal-group aria-label="Etapas do diagnóstico"><li className="diagnostic-step is-active"><span>01</span><div><strong>Mercado</strong><p>As pessoas entendem e querem comprar?</p></div></li><li className="diagnostic-step"><span>02</span><div><strong>Gargalo</strong><p>O que está impedindo o próximo passo?</p></div></li><li className="diagnostic-step"><span>03</span><div><strong>Operação</strong><p>Quem faz, como faz e como mede?</p></div></li><li className="diagnostic-step"><span>04</span><div><strong>Próximo estágio</strong><p>O que muda primeiro para avançar?</p></div></li></ol>
          </div>
        </section>

        <section className="section audience-section" id="publico">
          <div className="shell" data-reveal>
            <div className="section-kicker">Para quem construímos</div>
            <div className="section-heading-grid"><h2>Você já sabe fazer algo valioso. <em>Agora isso precisa virar negócio.</em></h2><p className="section-copy">Chegamos com conhecimento, audiência, produto ou clientes. Organizamos tudo para vender, entregar e crescer.</p></div>
            <div className="audience-grid" data-reveal-group>{audiences.map(([index, title, text]) => <article className="audience-card" key={title}><span className="card-index">{index}</span><h3>{title}</h3><p>{text}</p><span className="card-arrow" aria-hidden="true">↗</span></article>)}</div>
          </div>
        </section>

        <section className="section dark-section blockers-section" id="gargalos">
          <div className="shell" data-reveal>
            <div className="section-kicker">O que resolvemos</div>
            <div className="section-heading-grid"><h2>Encontramos o ponto que trava. <em>E resolvemos primeiro.</em></h2><p className="section-copy">Às vezes faltam clientes. Às vezes há clientes, mas o negócio perde vendas, tempo ou controle. Começamos pelo problema que mais custa ao negócio.</p></div>
            <div className="blockers-grid" data-reveal-group>{blockers.map(([title, text, focus, index]) => <article className="blocker-card" key={title}><span className="card-index">{index}</span><h3>{title}</h3><p>{text}</p><div className="blocker-focus"><small>FOCO OCOF</small><strong>{focus}</strong></div><span className="card-arrow" aria-hidden="true">↗</span></article>)}</div>
          </div>
        </section>

        <section className="section services-section" id="servicos">
          <div className="shell" data-reveal>
            <div className="section-kicker">Produtos OCOF</div>
            <div className="section-heading-grid"><h2>Do diagnóstico à execução. <em>A ajuda acompanha o problema.</em></h2><p className="section-copy">Você pode aprender, implementar, decidir conosco, delegar uma área ou construir em parceria.</p></div>
            <ServicesAccordion items={solutions} />
          </div>
        </section>

        <section className="section method-section" id="metodo">
          <div className="shell" data-reveal>
            <div className="section-kicker">Como trabalhamos</div>
            <div className="section-heading-grid"><h2>Você escolhe quanto da operação a OCOF assume. <em>A ajuda acompanha a necessidade.</em></h2><p className="section-copy">Mostramos o caminho, fazemos com você, assumimos uma frente ou entramos como parceiros.</p></div>
            <ol className="method-grid" data-reveal-group>{method.map(([index, title, text]) => <li className="method-card" key={index}><span className="method-number">{index}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
          </div>
        </section>

        <section className="section differential-section dark-section">
          <div className="shell" data-reveal>
            <div className="section-kicker">Diferencial</div>
            <div className="section-heading-grid"><h2>Não começamos por um serviço. <em>Começamos pelo problema.</em></h2><p className="section-copy">Primeiro entendemos onde o negócio perde receita, tempo ou controle. Só depois definimos o trabalho.</p></div>
            <div className="comparison-grid" data-reveal-group><article className="comparison-card comparison-muted"><span className="card-index">ANTES</span><h3>Serviço isolado</h3><ul><li>Campanhas sem integração</li><li>Conteúdo sem conversão</li><li>Tráfego sem estrutura</li><li>Páginas sem estratégia</li></ul></article><article className="comparison-card comparison-highlight"><span className="card-index">DEPOIS</span><h3>Operação OCOF</h3><ul><li>Diagnóstico</li><li>Posicionamento</li><li>Oferta</li><li>Funil</li><li>Dados e escala</li></ul></article></div>
            <p className="comparison-close">Mais ações não consertam um negócio travado. É preciso resolver o gargalo certo.</p>
          </div>
        </section>

        <section className="section culture-section" id="cultura">
          <div className="shell culture-grid" data-reveal>
            <div className="culture-copy"><div className="section-kicker">Cultura OCOF</div><h2>Talento importa. <em>Execução sustenta.</em></h2><p>Na OCOF, valorizamos clareza, responsabilidade e postura profissional em cada etapa da operação.</p><div className="principles-list" data-reveal-group>{principles.map(([letter, title, text]) => <article key={title}><span>{letter}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
            <div className="culture-image"><Image src="/ocof/logo-wall.jpg" alt="Logo OCOF em ambiente institucional escuro" fill sizes="(max-width: 800px) 100vw, 42vw" /></div>
          </div>
        </section>

        <section className="section closing-section" id="contato">
          <div className="shell closing-inner" data-reveal><div className="section-kicker">Próximo estágio</div><h2>Seu negócio não precisa de mais uma ação.<br /><em>Precisa funcionar melhor.</em></h2><p>Encontramos o que trava, organizamos o que falta e construímos o próximo resultado.</p><a className="button button-light" href="mailto:contato@ocof.com.br">Descobrir o que trava <Arrow direction="right" /></a></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
