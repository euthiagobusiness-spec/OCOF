const problems = [
  ["Estratégia", "Muito esforço. Pouca direção."],
  ["Marketing", "Conteúdo e tráfego sem conexão comercial."],
  ["Tecnologia", "Ferramentas que não conversam."],
  ["Operação", "O crescimento depende de improviso."],
] as const;

export function Problems() {
  return (
    <section className="section problems" id="problema">
      <div className="shell">
        <div className="section-intro split-intro">
          <p className="eyebrow">O problema</p>
          <h2>Crescimento trava quando cada parte do negócio trabalha sozinha.</h2>
        </div>
        <div className="problem-ledger">
          {problems.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><i aria-hidden="true" />
            </article>
          ))}
        </div>
        <p className="resolution-line"><span>A OCOF</span> conecta as peças.</p>
      </div>
    </section>
  );
}
