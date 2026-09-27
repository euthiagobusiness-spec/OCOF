import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Política de privacidade | OCOF",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de privacidade"
      intro="Informações sobre os dados envolvidos na navegação neste site."
      sections={[
        {
          id: "dados-do-site",
          title: "Dados neste site",
          content: (
            <>
              <p>
                No código atual, o site não oferece cadastro, área autenticada ou formulário de envio,
                e não inclui ferramenta própria de analytics, pixel ou armazenamento local.
              </p>
              <p>
                Isso descreve os recursos encontrados nesta versão do site. A infraestrutura de
                hospedagem pode tratar dados técnicos necessários à entrega dos serviços.
              </p>
            </>
          ),
        },
        {
          id: "hospedagem",
          title: "Infraestrutura de hospedagem",
          content: (
            <p>
              O site é hospedado pela Vercel. A Vercel informa que seus serviços podem processar
              dados técnicos como endereço IP, arquivos de registro, informações de dispositivo e
              telemetria. Consulte o <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noreferrer">Aviso de Privacidade da Vercel</a> para conhecer as práticas do provedor.
            </p>
          ),
        },
        {
          id: "identificacao",
          title: "Identificação e contato",
          content: (
            <p>
              OCOF é o nome de marca apresentado neste site. A razão social, o CNPJ, o endereço e
              um canal oficial de privacidade não foram informados. Por isso, esta página não
              identifica a pessoa jurídica responsável nem oferece um canal para solicitações.
            </p>
          ),
        },
        {
          id: "direitos",
          title: "Direitos sobre dados pessoais",
          content: (
            <p>
              A legislação brasileira prevê direitos dos titulares de dados pessoais, observadas
              as condições legais. Consulte a <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm" target="_blank" rel="noreferrer">Lei Geral de Proteção de Dados Pessoais</a>. Como não foi fornecido um canal oficial da OCOF, esta página não consegue indicar onde enviar uma solicitação.
            </p>
          ),
        },
      ]}
    />
  );
}
