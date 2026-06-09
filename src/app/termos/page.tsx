import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LegalDocument } from "@/components/sections/LegalDocument";
import { legal } from "@/data/legal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Termos de Uso | ${site.name}`,
  description: legal.terms.description,
  alternates: {
    canonical: `${site.url}/termos`,
  },
  openGraph: {
    title: `Termos de Uso | ${site.name}`,
    description: legal.terms.description,
    url: `${site.url}/termos`,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <LegalDocument document={legal.terms} />
      <Footer />
    </>
  );
}
