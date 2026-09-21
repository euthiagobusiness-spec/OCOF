import { Arrow } from "@/components/ui/Arrow";

const operationNodes = ["Estratégia", "Oferta", "Conteúdo", "Aquisição", "Página", "CRM", "Venda", "Dados"];

export function Hero() {
  return (
    <section className="hero section-dark" id="inicio">
      <div className="hero-grid shell">
        <div className="hero-copy">
          <p className="eyebrow light">OCOF — Operações de Crescimento Digital</p>
          <h1>Marketing não deveria ser um conjunto de ações soltas. <em>Deveria funcionar como uma operação.</em></h1>
          <p className="hero-support">A OCOF conecta estratégia, posicionamento, aquisição, páginas, automações e dados para transformar atenção em crescimento estruturado.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#scan">Solicitar diagnóstico OCOF <Arrow direction="right" /></a>
            <a className="text-link light" href="#metodo">Entender como operamos <Arrow direction="down" /></a>
          </div>
          <p className="hero-mantra">Construímos operações de crescimento.</p>
        </div>
        <div className="operation-console" aria-label="Fluxo da operação OCOF">
          <div className="console-topline">
            <span>OPERAÇÃO / 01</span>
            <span className="live-state"><i /> FLUXO INTEGRADO</span>
          </div>
          <ol>
            {operationNodes.map((node, index) => (
              <li key={node} className={index === 0 || index === operationNodes.length - 1 ? "is-active" : ""}>
                <span className="node-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="node-name">{node}</span>
                <span className="node-signal" aria-hidden="true" />
              </li>
            ))}
          </ol>
          <div className="optimization-loop">
            <span>↺</span><strong>Otimização</strong><small>retroalimenta a operação</small>
          </div>
        </div>
      </div>
      <div className="hero-foot shell" aria-hidden="true">
        <span>ESTRATÉGIA</span><span>MARCA</span><span>PERFORMANCE</span><span>TECNOLOGIA</span>
      </div>
    </section>
  );
}
