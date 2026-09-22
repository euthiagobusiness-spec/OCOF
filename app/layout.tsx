import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { MotionProvider } from "@/components/ui/MotionProvider";
import "./globals.css";

const manrope = localFont({
  src: "../public/fonts/Manrope-Variable.ttf",
  weight: "200 800",
  variable: "--font-manrope",
  display: "swap",
});

const archivo = localFont({
  src: "../public/fonts/Archivo-Variable.ttf",
  weight: "100 900",
  variable: "--font-archivo",
  display: "swap",
});

const jakarta = localFont({
  src: "../public/fonts/PlusJakartaSans-Variable.ttf",
  weight: "200 800",
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ocof.vercel.app"),
  title: "OCOF | Operações de Crescimento Digital",
  description:
    "Entendemos onde o crescimento está travando e construímos a solução necessária para o próximo estágio.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "OCOF | Operações de Crescimento Digital",
    description:
      "Não construímos ações isoladas. Construímos operações de crescimento.",
    url: "/",
    siteName: "OCOF",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "OCOF | Operações de Crescimento Digital",
    description:
      "Não construímos ações isoladas. Construímos operações de crescimento.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E0E0E",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${archivo.variable} ${jakarta.variable}`}>
      <body><MotionProvider>{children}</MotionProvider></body>
    </html>
  );
}
