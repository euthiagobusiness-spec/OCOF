import { MotionReveal } from "@/components/ui/MotionReveal";
import { PillarCard } from "@/components/ui/PillarCard";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export function Pillars() {
  return (
    <Section
      className="border-y border-[var(--line)] bg-[var(--surface)]"
      eyebrow={site.pillars.eyebrow}
      title={site.pillars.title}
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {site.pillars.items.map((pillar, index) => (
          <MotionReveal delay={index * 0.04} key={pillar.title}>
            <PillarCard {...pillar} />
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}
