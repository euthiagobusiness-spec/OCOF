import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export function Goals() {
  return (
    <Section eyebrow={site.goals.eyebrow} title={site.goals.title}>
      <div className="grid gap-4 lg:grid-cols-3">
        {site.goals.items.map((goal, index) => (
          <MotionReveal delay={index * 0.05} key={goal.title}>
            <Card className="h-full min-h-[300px]">
              <p className="font-display text-3xl font-semibold uppercase leading-tight text-[var(--wine)]">
                {goal.title}
              </p>
              <ul className="mt-7 grid gap-4">
                {goal.items.map((item) => (
                  <li className="flex items-start gap-3 text-[rgb(var(--wine-rgb)_/_0.68)]" key={item}>
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-[4px] border border-[var(--line-strong)] text-[var(--muted)]">
                      <Check aria-hidden="true" className="size-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}
