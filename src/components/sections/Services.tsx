import { MotionReveal } from "@/components/ui/MotionReveal";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { site } from "@/data/site";

export function Services() {
  return (
    <Section
      eyebrow={site.services.eyebrow}
      id="servicos"
      subtitle={site.services.subtitle}
      title={site.services.title}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {site.services.items.map((service, index) => (
          <MotionReveal delay={index * 0.04} key={service.title}>
            <ServiceCard {...service} />
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}
