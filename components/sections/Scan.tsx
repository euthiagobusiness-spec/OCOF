import { Arrow } from "@/components/ui/Arrow";

const dimensions = ["Presença", "Oferta", "Páginas", "Funil", "Experiência", "Aquisição", "Automações", "Estrutura digital"];

export function Scan() {
  return (
    <section className="section scan" id="scan">
      <div className="shell scan-shell">
        <div className="scan-copy">
          <p className="eyebrow">Produto de entrada</p>
          <span className="scan-code">PROTOCOLO / OCOF–SCAN</span>
          <h2>Descubra onde seu crescimento está travando.</h2>
          <p>O OCOF SCAN analisa presença, oferta, páginas, funil, experiência, aquisição, automações e estrutura digital para identificar gargalos e oportunidades.</p>
          <a className="button button-dark" href="#contato">Executar OCOF SCAN <Arrow direction="right" /></a>
        </div>
        <div className="scan-matrix" aria-label="Dimensões analisadas pelo OCOF Scan">
          <div className="matrix-header"><span>DIMENSÃO</span><span>LEITURA</span></div>
          {dimensions.map((item, index) => (
            <div key={item}><span>{String(index + 1).padStart(2, "0")} / {item}</span><i aria-hidden="true"><b style={{ width: `${38 + index * 6}%` }} /></i></div>
          ))}
          <p>O gráfico é ilustrativo do protocolo, não representa dados de cliente.</p>
        </div>
      </div>
    </section>
  );
}
