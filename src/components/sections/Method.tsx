import { MotionReveal } from "@/components/ui/MotionReveal";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export function Method() {
  return (
    <Section
      eyebrow={site.method.eyebrow}
      id="metodo"
      subtitle={site.method.subtitle}
      title={site.method.title}
    >
      <div className="relative">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {site.method.steps.map((step, index) => (
            <MotionReveal delay={index * 0.05} key={step.title}>
              <ProcessStep {...step} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
