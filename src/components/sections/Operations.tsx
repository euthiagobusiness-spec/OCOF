import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export function Operations() {
  return (
    <Section
      className="border-y border-[var(--line)] bg-[var(--surface)]"
      eyebrow={site.structure.eyebrow}
      title={site.structure.title}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {site.structure.roles.map((role, index) => {
          const Icon = role.icon;

          return (
            <MotionReveal delay={index * 0.05} key={role.title}>
              <Card className="h-full min-h-[360px]">
                <IconBadge icon={Icon} />
                {"person" in role ? (
                  <p className="mt-7 text-sm font-semibold uppercase text-[var(--muted)]">
                    {role.person}
                  </p>
                ) : null}
                <h3 className="font-display mt-3 text-3xl font-semibold uppercase leading-tight text-[var(--wine)]">
                  {role.title}
                </h3>
                <ul className="mt-7 grid gap-3">
                  {role.responsibilities.map((responsibility) => (
                    <li
                      className="flex items-start gap-3 text-sm leading-6 text-[rgb(var(--wine-rgb)_/_0.68)]"
                      key={responsibility}
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-[var(--muted)]"
                      />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </MotionReveal>
          );
        })}
      </div>
    </Section>
  );
}
