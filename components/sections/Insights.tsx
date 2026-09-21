import { Arrow } from "@/components/ui/Arrow";

const pillars = [
  ["Growth", "Estratégia que organiza aquisição, conversão e retenção."],
  ["IA & Automação", "Tecnologia aplicada a gargalos reais da operação."],
  ["Web & Conversão", "Experiências digitais feitas para orientar decisões."],
] as const;

export function Insights() {
  return (
    <section className="section insights" id="insights">
      <div className="shell">
        <div className="section-intro insights-heading">
          <p className="eyebrow">Insights</p>
          <h2>Conhecimento para quem trata crescimento como operação.</h2>
          <p>A base editorial está pronta. Os artigos entram após definição do calendário e publicação dos conteúdos reais.</p>
        </div>
        <div className="insight-list">
          {pillars.map(([category, text], index) => (
            <article key={category}>
              <span>0{index + 1}</span><p className="insight-category">{category}</p><h3>{text}</h3><span className="text-link muted" aria-disabled="true">Em preparação <Arrow direction="up-right" /></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
