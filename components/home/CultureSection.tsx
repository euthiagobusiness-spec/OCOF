import { principles } from "@/components/content/site-content";
import { InteractiveCTA } from "@/components/ui/InteractiveCTA";

export function CultureSection() {
  return (
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
        <div className="closing-layout">
          <div className="closing glass-panel" id="contato" data-reveal>
            <p className="closing-question">Seu negócio já provou que tem valor. A pergunta é: até quando você vai aceitar crescer abaixo do potencial que construiu?</p>
            <p>Descubra o que está limitando seu crescimento e construa com a OCOF o que falta para ir além.</p>
            <InteractiveCTA />
          </div>
          <div className="intro-statement glass-panel" data-reveal>
            <p>Ousadia • Constância • Organização • Foco</p>
            <p>Este é o ambiente de construção da OCOF.</p>
            <p>Aqui valorizamos execução acima de intenção, responsabilidade acima de desculpas e crescimento acima da zona de conforto.</p>
            <p>Cada projeto, lançamento e operação deve refletir os princípios que sustentam a empresa: ousadia para criar, constância para evoluir, organização para escalar e foco para entregar resultados.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
