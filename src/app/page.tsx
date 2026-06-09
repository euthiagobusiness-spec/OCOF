import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Clients } from "@/components/sections/Clients";
import { Culture } from "@/components/sections/Culture";
import { Differentials } from "@/components/sections/Differentials";
import { FinalCta } from "@/components/sections/FinalCta";
import { Goals } from "@/components/sections/Goals";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Method } from "@/components/sections/Method";
import { Operations } from "@/components/sections/Operations";
import { Pillars } from "@/components/sections/Pillars";
import { Services } from "@/components/sections/Services";
import { VisualMoodboard } from "@/components/sections/VisualMoodboard";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VisualMoodboard />
        <About />
        <Pillars />
        <Services />
        <Differentials />
        <Method />
        <Clients />
        <Culture />
        <Operations />
        <Goals />
        <Manifesto />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
