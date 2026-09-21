import { Arrow } from "@/components/ui/Arrow";

const solutions = [
  { number: "01", title: "Estratégia & Crescimento", lead: "Transformamos intenção em uma direção comercial clara.", items: ["Oferta", "Lançamento", "Funil", "Posicionamento", "Planejamento", "Aquisição"] },
  { number: "02", title: "Branding & Conteúdo", lead: "Alinhamos o que a marca é, diz e faz em cada canal.", items: ["Marca", "Narrativa", "Identidade", "Copy", "Conteúdo", "Comunicação"] },
  { number: "03", title: "Performance & Conversão", lead: "Conectamos mídia, página e leitura de dados para converter melhor.", items: ["Tráfego", "Landing pages", "CRO", "Campanhas", "Métricas", "Otimização"] },
  { number: "04", title: "Web, Automação & IA", lead: "Construímos a infraestrutura que reduz fricção e amplia capacidade.", items: ["Sites", "Integrações", "Agentes", "Automação", "CRM", "WhatsApp", "Infraestrutura digital"] },
];

export function Solutions() {
  return (
    <section className="section solutions section-tint" id="solucoes">
      <div className="shell">
        <div className="section-intro solutions-heading">
          <p className="eyebrow">Soluções conectadas</p>
          <h2>Quatro frentes. <em>Uma única operação.</em></h2>
          <p>As disciplinas não competem por atenção. Elas trabalham em sequência, com objetivos e indicadores compartilhados.</p>
        </div>
        <div className="solution-list">
          {solutions.map((solution, index) => (
            <details key={solution.number} open={index === 0}>
              <summary>
                <span className="solution-number">{solution.number}</span>
                <span className="solution-title">{solution.title}</span>
                <span className="solution-toggle"><Arrow direction="down" /></span>
              </summary>
              <div className="solution-body">
                <p>{solution.lead}</p>
                <ul>{solution.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
