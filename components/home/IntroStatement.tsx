type IntroStatementProps = {
  className: string;
};

export function IntroStatement({ className }: IntroStatementProps) {
  return (
    <div className={`intro-statement glass-panel ${className}`} data-reveal>
      <p>Ousadia • Constância • Organização • Foco</p>
      <p>Este é o ambiente de construção da OCOF.</p>
      <p>Aqui valorizamos execução acima de intenção, responsabilidade acima de desculpas e crescimento acima da zona de conforto.</p>
      <p>Cada projeto, lançamento e operação deve refletir os princípios que sustentam a empresa: ousadia para criar, constância para evoluir, organização para escalar e foco para entregar resultados.</p>
    </div>
  );
}
