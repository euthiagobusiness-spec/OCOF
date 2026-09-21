const isolated = ["campanha", "post", "tráfego", "landing page", "automação", "CRM"];
const operation = ["diagnóstico", "posicionamento", "oferta", "aquisição", "conversão", "vendas", "dados", "otimização"];

export function OperationComparison() {
  return (
    <section className="section comparison section-dark" id="operacao">
      <div className="shell">
        <div className="section-intro comparison-heading">
          <p className="eyebrow light">Diferencial OCOF</p>
          <h2>A maioria vende serviços. <em>A OCOF constrói operações.</em></h2>
        </div>
        <div className="comparison-grid">
          <article className="isolated-side">
            <div className="comparison-label"><span>ANTES</span> Serviços isolados</div>
            <div className="scattered-pieces" aria-label="Exemplos de serviços isolados">
              {isolated.map((item, index) => <span key={item} style={{ "--offset": index } as React.CSSProperties}>{item}</span>)}
            </div>
            <p>Entregas que existem, mas não formam um sistema.</p>
          </article>
          <article className="operation-side">
            <div className="comparison-label"><span>DEPOIS</span> Operação OCOF</div>
            <ol>
              {operation.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
            </ol>
          </article>
        </div>
        <p className="comparison-statement">Não entregamos apenas peças. <span>Construímos o sistema que conecta as peças.</span></p>
      </div>
    </section>
  );
}
