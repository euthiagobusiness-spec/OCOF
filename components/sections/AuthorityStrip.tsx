const capabilities = ["Estratégia", "Branding", "Performance", "Web", "IA", "Automação", "Dados"];

export function AuthorityStrip() {
  return (
    <section className="authority" aria-label="Capacidades conectadas">
      <div className="shell authority-inner">
        <p><span>Uma operação.</span> Sete capacidades conectadas.</p>
        <ul>{capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </section>
  );
}
