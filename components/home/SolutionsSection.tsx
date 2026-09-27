import { solutions } from "@/components/content/site-content";

export function SolutionsSection() {
  return (
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
  );
}
