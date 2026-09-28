import { principles } from "@/components/content/site-content";
import { InteractiveCTA } from "@/components/ui/InteractiveCTA";
import { ScrollVideoCard } from "@/components/ui/ScrollVideoCard";
import { IntroStatement } from "@/components/home/IntroStatement";

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
          <div className="closing-side">
            <IntroStatement className="intro-statement--mobile" />
            <ScrollVideoCard src="/ocof/motion/002.mp4" poster="/ocof/motion/002-poster.webp" className="motion-video-card--culture" />
          </div>
        </div>
      </div>
    </section>
  );
}
