const navigation = [
  ["Início", "/#inicio"],
  ["OCOF", "/#ocof"],
  ["Serviços", "/#solucoes"],
  ["Método", "/#como-atuamos"],
  ["Cultura", "/#cultura"],
  ["Contato", "/#contato"],
] as const;

const legalLinks = [
  ["Política de privacidade", "/privacidade"],
  ["Termos de uso e licença", "/termos"],
] as const;

export function Footer() {
  return (
    <footer className="site-footer" id="rodape">
      <div className="shell footer-layout">
        <div className="footer-company">
          <a className="footer-wordmark" href="/#inicio" aria-label="OCOF — início">
            OCOF
          </a>
          <p>Ousadia • Constância • Organização • Foco</p>
          <p>Transformamos o valor que existe em crescimento exponencial</p>
        </div>

        <nav className="footer-nav" aria-label="Navegação no rodapé">
          <h2>Navegação</h2>
          {navigation.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>

        <nav className="footer-legal" aria-label="Informações legais">
          <h2>Privacidade e licença</h2>
          {legalLinks.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
      </div>

      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} OCOF. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
