import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Termos de uso | OCOF",
  description: "Condições de uso do site institucional OCOF e informações sobre seu conteúdo.",
  alternates: { canonical: "/termos" },
  openGraph: { title: "Termos de uso | OCOF", url: "/termos" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Termos de uso"
      intro="As condições para navegar e conhecer a operação OCOF."
      notice={<><strong>Documento em revisão</strong><p>Estes termos precisam de validação pela OCOF Company e da definição de um canal oficial de contato antes da publicação definitiva.</p></>}
      sections={[
        { id: "finalidade", title: "Finalidade do site", content: <p>O site apresenta a OCOF Company, sob a marca OCOF, sua abordagem e seus serviços de operações de crescimento digital. Seu conteúdo é informativo e não constitui, por si só, proposta comercial, contratação ou promessa de resultados.</p> },
        { id: "servicos", title: "Serviços e contratação", content: <><p>Escopo, entregas, prazos, valores e responsabilidades dependem de proposta e contrato próprios, acordados entre as partes. A navegação ou o clique em um botão não inicia a prestação de serviços.</p><p>Diagramas e elementos visuais ilustram a metodologia. Não representam monitoramento ao vivo, métricas de clientes ou garantia de desempenho. Resultados dependem do contexto, das condições de mercado e da execução de cada projeto.</p></> },
        { id: "uso", title: "Uso responsável", content: <p>Utilize o site para fins lícitos. Não tente comprometer sua segurança, explorar vulnerabilidades sem autorização, sobrecarregar a infraestrutura ou apresentar conteúdos da OCOF como se fossem de sua autoria. Essas condições não impedem usos permitidos pela legislação.</p> },
        { id: "propriedade", title: "Propriedade intelectual", content: <><p>A marca e os conteúdos originais da OCOF são protegidos pela legislação aplicável. Sua reprodução ou exploração comercial exige autorização, salvo exceções legais. Marcas, fontes e outros materiais de terceiros permanecem sujeitos aos direitos e às licenças de seus respectivos titulares.</p><p>© {new Date().getFullYear()} OCOF. Todos os direitos reservados.</p></> },
        { id: "disponibilidade", title: "Conteúdo e disponibilidade", content: <p>As informações podem ser revisadas e o site pode passar por manutenção. Eventuais referências externas são oferecidas para consulta e possuem condições próprias. Nada nestes termos exclui responsabilidades que não possam ser afastadas pela legislação, nem direitos assegurados aos consumidores.</p> },
        { id: "privacidade", title: "Privacidade", content: <p>Consulte a <a href="/privacidade">Política de privacidade</a> para conhecer os recursos desta versão, os dados técnicos envolvidos na navegação e as informações ainda pendentes de confirmação antes da publicação definitiva.</p> },
        { id: "contato", title: "Contato e alterações", content: <><p>A OCOF Company ainda não possui CNPJ nem e-mail oficial. Esta versão não disponibiliza formulário de contato. O canal oficial de atendimento será informado quando estiver disponível. Não envie informações confidenciais por canais não verificados.</p><p>Estes termos poderão ser atualizados para refletir mudanças do site. A data no início da página identifica a versão. Aplica-se a legislação brasileira, preservadas as regras obrigatórias de proteção de dados, defesa do consumidor e competência legal.</p></> },
      ]}
    />
  );
}
