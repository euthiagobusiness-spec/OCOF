import { Compass, Target } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export function About() {
  return (
    <Section
      eyebrow={site.about.eyebrow}
      id="ocof"
      title={site.about.title}
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <MotionReveal className="space-y-6 text-lg leading-8 text-[rgb(var(--wine-rgb)_/_0.70)]">
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="border-l border-[var(--rose)]/55 pl-5">
            <p className="font-display text-3xl font-semibold uppercase leading-tight text-[var(--wine)]">
              {site.about.highlight}
            </p>
          </div>
        </MotionReveal>

        <div className="grid gap-4">
          <MotionReveal delay={0.06}>
            <Card className="min-h-[220px]">
              <Compass aria-hidden="true" className="size-7 text-[var(--muted)]" />
              <h3 className="mt-6 text-xl font-semibold text-[var(--wine)]">Missão</h3>
              <p className="mt-4 text-base leading-7 text-[rgb(var(--wine-rgb)_/_0.66)]">
                {site.about.mission}
              </p>
            </Card>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <Card className="min-h-[220px]">
              <Target aria-hidden="true" className="size-7 text-[var(--muted)]" />
              <h3 className="mt-6 text-xl font-semibold text-[var(--wine)]">Visão</h3>
              <p className="mt-4 text-base leading-7 text-[rgb(var(--wine-rgb)_/_0.66)]">
                {site.about.vision}
              </p>
            </Card>
          </MotionReveal>
        </div>
      </div>
    </Section>
  );
}
