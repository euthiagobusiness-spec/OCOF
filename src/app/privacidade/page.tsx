import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LegalDocument } from "@/components/sections/LegalDocument";
import { legal } from "@/data/legal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Política de Privacidade | ${site.name}`,
  description: legal.privacy.description,
  alternates: {
    canonical: `${site.url}/privacidade`,
  },
  openGraph: {
    title: `Política de Privacidade | ${site.name}`,
    description: legal.privacy.description,
    url: `${site.url}/privacidade`,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <LegalDocument document={legal.privacy} />
      <Footer />
    </>
  );
}
