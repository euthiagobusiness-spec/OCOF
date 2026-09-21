import { Arrow } from "@/components/ui/Arrow";

export function Cases() {
  return (
    <section className="section cases" id="cases">
      <div className="shell">
        <div className="section-intro cases-heading">
          <p className="eyebrow">Cases</p>
          <h2>Operações são demonstradas pelo que conectam — e pelo que transformam.</h2>
        </div>
        <div className="case-placeholder" data-content-needed="case-real">
          <div className="case-visual" aria-hidden="true">
            <span>PROBLEMA</span><i /><span>OPERAÇÃO</span><i /><span>RESULTADO</span>
          </div>
          <div className="case-copy">
            <span className="status-tag">Conteúdo em curadoria</span>
            <h3>Estrutura pronta para receber cases reais.</h3>
            <p>Cliente, contexto, diagnóstico, estratégia, entregas e métricas entram aqui somente após validação e autorização.</p>
            <span className="text-link muted" aria-disabled="true">Case será publicado após validação <Arrow direction="up-right" /></span>
          </div>
        </div>
      </div>
    </section>
  );
}
