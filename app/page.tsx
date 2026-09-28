import { audiences, blockers, method } from "@/components/content/site-content";
import { BrandSection } from "@/components/home/BrandSection";
import { CardGridSection } from "@/components/home/CardGridSection";
import { CultureSection } from "@/components/home/CultureSection";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { SiteNavigation } from "@/components/home/SiteNavigation";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ScrollVideoCard } from "@/components/ui/ScrollVideoCard";
import { CardMotion } from "@/components/ui/CardMotion";

export default function HomePage() {
  return (
    <>
      <SiteNavigation />
      <ScrollReveal />
      <CardMotion />
      <main>
        <HeroSection />
        <div className="office-backdrop" aria-hidden="true" />
        <div className="story">
          <BrandSection />
          <CardGridSection id="para-quem" title="Para quem já construiu algo de valor." gridClassName="audience-grid" items={audiences} />
          <CardGridSection id="gargalos" title="Resolvemos os gargalos que limitam o crescimento." gridClassName="blockers-grid" items={blockers} />
          <SolutionsSection />
          <CardGridSection id="como-atuamos" title="Desenvolvemos o que cada realidade exige." gridClassName="method-grid" items={method}>
            <ScrollVideoCard src="/ocof/motion/001.mp4" poster="/ocof/motion/001-poster.webp" className="motion-video-card--method" />
          </CardGridSection>
          <CultureSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
