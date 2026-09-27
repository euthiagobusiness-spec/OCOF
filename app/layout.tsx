import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://ocof.vercel.app"),
  title: "OCOF",
  description: "Transformamos o valor que existe em crescimento exponencial",
  alternates: { canonical: "/" },
  openGraph: {
    title: "OCOF",
    description: "Transformamos o valor que existe em crescimento exponencial",
    url: "/",
    siteName: "OCOF",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "OCOF",
    description: "Transformamos o valor que existe em crescimento exponencial",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101214",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
