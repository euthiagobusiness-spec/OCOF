import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Termos de uso e licença | OCOF",
  alternates: { canonical: "/termos" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Termos de uso e licença"
      intro="Condições de acesso e uso do conteúdo apresentado no site OCOF."
      sections={[
        {
          id: "identificacao",
          title: "Identificação",
          content: (
            <p>
              OCOF é a marca apresentada neste site. A razão social, o CNPJ, o endereço e a
              identificação jurídica do titular dos materiais não foram informados.
            </p>
          ),
        },
        {
          id: "uso-do-site",
          title: "Uso do site",
          content: (
            <p>
              O acesso ao site permite a visualização do conteúdo no navegador. Este site não
              concede licença pública para copiar, distribuir, adaptar ou explorar comercialmente
              seus textos, marca ou materiais visuais. Autorizações específicas dependem de
              confirmação do titular dos direitos.
            </p>
          ),
        },
        {
          id: "direitos-reservados",
          title: "Direitos reservados",
          content: (
            <p>© {new Date().getFullYear()} OCOF. Todos os direitos reservados.</p>
          ),
        },
        {
          id: "autorizacoes",
          title: "Autorizações e dúvidas",
          content: (
            <p>
              Um canal oficial para solicitações de licença ou dúvidas sobre estes termos não foi
              informado. A identificação jurídica do titular também precisa ser confirmada para
              que este documento seja completado.
            </p>
          ),
        },
      ]}
    />
  );
}
