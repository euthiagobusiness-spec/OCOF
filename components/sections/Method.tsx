const steps = [
  ["01", "Diagnóstico", "Mapeamento completo do cenário, marca, oferta, canais, operação, gargalos e oportunidades."],
  ["02", "Estruturação", "Organização de estratégia, posicionamento, processos, comunicação, funil e plano operacional."],
  ["03", "Execução", "Implementação coordenada das ações com acompanhamento de indicadores."],
  ["04", "Escala", "Otimização contínua para crescimento previsível e sustentável."],
] as const;

export function Method() {
  return (
    <section className="section method section-tint" id="metodo">
      <div className="shell">
        <div className="section-intro method-heading">
          <p className="eyebrow">Método OCOF</p>
          <h2>Da leitura do cenário à evolução contínua.</h2>
          <p>Quatro estados de uma mesma operação — com direção, cadência e aprendizagem.</p>
        </div>
        <ol className="method-flow">
          {steps.map(([number, title, text]) => (
            <li key={number}>
              <span className="method-number">{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
