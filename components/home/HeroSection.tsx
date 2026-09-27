import Image from "next/image";

export function HeroSection() {
  return (
    <section className="chapter chapter-intro" id="inicio">
      <div className="hero-inner shell">
        <Image className="hero-logo" src="/brand/ocof-wordmark.avif" alt="OCOF" width={590} height={205} priority />
        <h1>Transformamos o valor que existe em crescimento exponencial</h1>
      </div>
    </section>
  );
}
