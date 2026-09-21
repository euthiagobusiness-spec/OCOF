const columns = [
  ["OCOF", [["Início", "#inicio"], ["OCOF", "#ocof"], ["Serviços", "#servicos"]]],
  ["Operação", [["Método", "#metodo"], ["Cultura", "#cultura"], ["Contato", "#contato"]]],
] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-layout">
        <div className="footer-grid">
          <div className="footer-brand"><a href="/#inicio" aria-label="OCOF — voltar ao início"><span className="brand-mark" aria-hidden="true" /></a><p>Ousadia • Constância • Organização • Foco</p><p>Construímos operações de crescimento.</p></div>
          {columns.map(([title, links]) => (
            <nav key={title} aria-label={title}><h2>{title}</h2>{links.map(([label, href]) => <a key={label} href={`/${href}`}>{label}</a>)}</nav>
          ))}
          <div className="footer-contact"><h2>Contato</h2><p>Conversas comerciais qualificadas para negócios que querem crescer com estrutura.</p><a className="button button-light" href="/#contato">Fale com a OCOF <span aria-hidden="true">◌</span></a></div>
        </div>
        <div className="footer-meta">
          <div className="footer-legal">
            <p>© {new Date().getFullYear()} OCOF. Todos os direitos reservados.</p>
            <nav aria-label="Informações legais">
              <a href="/privacidade">Política de privacidade</a>
              <a href="/termos">Termos de uso</a>
            </nav>
          </div>
          <div className="footer-bottom"><p>OCOF · Operações de crescimento digital</p><p>Estrutura para transformar potencial em crescimento.</p></div>
        </div>
      </div>
    </footer>
  );
}
