import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return <><Header /><main className="not-found shell"><p className="eyebrow">OCOF / 404</p><h1>Página não encontrada.</h1><p>Este endereço não está disponível. Continue pela página inicial.</p><a className="button" href="/">Voltar ao início ↗</a></main><Footer /></>;
}
