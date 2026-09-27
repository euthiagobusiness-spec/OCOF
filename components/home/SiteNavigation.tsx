const navigation = [
  ["Início", "#inicio"],
  ["OCOF", "#ocof"],
  ["Serviços", "#solucoes"],
  ["Método", "#como-atuamos"],
  ["Cultura", "#cultura"],
  ["Contato", "#contato"],
] as const;

export function SiteNavigation() {
  return (
    <header className="site-curtain">
      <nav className="curtain-nav shell" aria-label="Navegação principal">
        {navigation.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </nav>
    </header>
  );
}
