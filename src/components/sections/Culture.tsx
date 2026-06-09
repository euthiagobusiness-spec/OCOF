import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export function Culture() {
  return (
    <Section
      eyebrow={site.culture.eyebrow}
      id="cultura"
      subtitle={site.culture.body}
      title={site.culture.title}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {site.culture.values.map((value, index) => (
            <MotionReveal delay={index * 0.035} key={value.title}>
              <Card className="h-full min-h-[170px]">
                <h3 className="text-lg font-semibold text-[var(--wine)]">{value.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[rgb(var(--wine-rgb)_/_0.64)]">
                  {value.description}
                </p>
              </Card>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={0.1}>
          <Card className="h-full">
            <p className="text-sm font-semibold uppercase text-[var(--muted)]">
              Esperamos
            </p>
            <ul className="mt-6 grid gap-4">
              {site.culture.expected.map((item) => (
                <li className="flex items-start gap-3 text-[rgb(var(--wine-rgb)_/_0.70)]" key={item}>
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-[var(--muted)]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </MotionReveal>
      </div>
    </Section>
  );
}
