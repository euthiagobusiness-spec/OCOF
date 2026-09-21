import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Política de privacidade | OCOF",
  description: "Informações sobre privacidade, navegação e dados pessoais no site OCOF.",
  alternates: { canonical: "/privacidade" },
  openGraph: { title: "Política de privacidade | OCOF", url: "/privacidade" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de privacidade"
      intro="Clareza sobre os dados e os recursos desta versão do site."
      notice={<><strong>Documento em revisão</strong><p>A OCOF Company ainda não possui um canal oficial para solicitações sobre dados pessoais. Esse canal e as práticas da hospedagem devem ser definidos e este documento validado antes da publicação definitiva.</p></>}
      sections={[
        { id: "responsavel", title: "Responsável pelo site", content: <><p>Este é o site institucional da OCOF Company, apresentada pela marca OCOF. Conforme informado pela responsável pelo projeto, a OCOF Company ainda não possui CNPJ nem e-mail oficial.</p><p>O canal de atendimento para questões de privacidade ainda não está disponível. Sua definição e a identificação do responsável pelo tratamento são pendências para a publicação definitiva.</p></> },
        { id: "dados", title: "Dados e navegação", content: <><p>Esta versão apresenta serviços e informações institucionais. Não possui cadastro, formulário de envio de dados, área de clientes ou pagamento on-line. O OCOF SCAN é apresentado como serviço, mas não realiza coleta automática de informações pelo site.</p><p>O acesso às páginas exige a transmissão de informações técnicas, como endereço IP, recurso solicitado e informações do navegador. A infraestrutura de hospedagem pode manter registros de acesso e segurança. A configuração e os prazos desses registros devem ser confirmados com o provedor antes da publicação.</p></> },
        { id: "finalidades", title: "Finalidades e bases legais", content: <><p>Os dados técnicos necessários à conexão são utilizados para entregar as páginas e preservar a segurança do serviço. A OCOF deverá documentar os registros efetivamente mantidos, suas finalidades e as bases legais aplicáveis, considerando necessidade, proporcionalidade e os direitos dos visitantes.</p><p>A navegação não representa consentimento genérico para publicidade. Caso sejam adicionados formulários, campanhas ou integrações, este documento deverá informar previamente os dados, as finalidades e a base legal de cada tratamento.</p></> },
        { id: "cookies", title: "Cookies e fontes", content: <><p>O código desta versão não instala cookies de publicidade, pixels de campanhas ou ferramentas de análise de audiência. As fontes são servidas pelo próprio site, sem requisições do visitante ao Google Fonts.</p><p>Serviços da infraestrutura podem utilizar recursos técnicos próprios; seu comportamento deverá ser verificado na hospedagem definitiva. Você pode gerenciar cookies nas configurações do navegador. Recursos opcionais que dependam de consentimento não devem ser ativados antes da sua escolha.</p></> },
        { id: "compartilhamento", title: "Compartilhamento e conservação", content: <><p>A infraestrutura que entrega o site pode processar dados técnicos para disponibilizar as páginas. Não existe, nesta implementação, integração para venda de dados ou envio a plataformas de publicidade.</p><p>A empresa deverá confirmar os fornecedores, os locais de processamento, eventuais transferências internacionais e os períodos de retenção. A conservação deverá limitar-se ao necessário para as finalidades informadas e às obrigações aplicáveis, com medidas de segurança adequadas.</p></> },
        { id: "direitos", title: "Seus direitos", content: <><p>Nos casos previstos na LGPD, você pode solicitar confirmação do tratamento, acesso, correção, informações sobre compartilhamento, anonimização, bloqueio, eliminação ou portabilidade, além de revogar consentimento e se opor a tratamentos nas hipóteses legais. Esses direitos não são absolutos e dependem das condições previstas na lei.</p><p>O canal oficial para receber e verificar essas solicitações está pendente de confirmação pela OCOF. Não envie documentos ou dados sensíveis por canais não verificados.</p><p>Consulte o texto da <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm">Lei Geral de Proteção de Dados Pessoais</a>.</p></> },
        { id: "atualizacoes", title: "Atualizações", content: <p>Esta política deve acompanhar as funcionalidades e práticas reais do site. Mudanças materiais serão identificadas por uma nova data de versão. Leia também os <a href="/termos">Termos de uso</a>.</p> },
      ]}
    />
  );
}
