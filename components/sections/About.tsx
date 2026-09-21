const pillars = [
  ["O", "Ousadia", "Coragem para questionar o automático."],
  ["C", "Constância", "Cadência que transforma plano em prática."],
  ["O", "Organização", "Sistemas claros para crescer sem improviso."],
  ["F", "Foco", "Energia direcionada ao que move o negócio."],
] as const;

export function About() {
  return (
    <section className="section about section-dark" id="ocof">
      <div className="shell about-grid">
        <div className="about-copy">
          <p className="eyebrow light">Sobre a OCOF</p>
          <h2>Crescimento não acontece por acaso. <em>Ele é construído.</em></h2>
          <p>A OCOF integra estratégia, criatividade, tecnologia e disciplina operacional para construir caminhos de crescimento mais claros, conectados e sustentáveis.</p>
        </div>
        <figure className="brand-image">
          <div className="brand-monogram" aria-hidden="true">
            <span>O</span><span>C</span><span>O</span><span>F</span>
          </div>
          <figcaption>Quatro princípios. Uma operação conectada.</figcaption>
        </figure>
      </div>
      <div className="pillars shell">
        {pillars.map(([letter, title, text]) => <article key={title}><span>{letter}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
  );
}
