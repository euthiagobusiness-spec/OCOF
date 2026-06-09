import { Check, Minus } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export function Differentials() {
  return (
    <Section
      className="border-y border-[var(--line)] bg-[var(--surface)]"
      eyebrow={site.differential.eyebrow}
      title={site.differential.title}
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <MotionReveal>
          <ComparisonList
            icon="minus"
            items={site.differential.isolated.items}
            title={site.differential.isolated.title}
          />
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <ComparisonList
            icon="check"
            items={site.differential.operation.items}
            title={site.differential.operation.title}
            tone="strong"
          />
        </MotionReveal>
      </div>
      <MotionReveal delay={0.12}>
        <div className="mt-5 rounded-[8px] border border-[var(--rose)]/35 bg-[var(--wine)]/22 px-6 py-5 text-lg font-semibold leading-7 text-[var(--wine)]">
          {site.differential.impact}
        </div>
      </MotionReveal>
    </Section>
  );
}

function ComparisonList({
  title,
  items,
  icon,
  tone = "muted",
}: {
  title: string;
  items: readonly string[];
  icon: "check" | "minus";
  tone?: "muted" | "strong";
}) {
  const Icon = icon === "check" ? Check : Minus;

  return (
    <Card className="h-full">
      <h3 className="font-display text-3xl font-semibold uppercase leading-tight text-[var(--wine)]">
        {title}
      </h3>
      <ul className="mt-7 grid gap-4">
        {items.map((item) => (
          <li className="flex items-start gap-3 text-[rgb(var(--wine-rgb)_/_0.70)]" key={item}>
            <span
              className={
                tone === "strong"
                  ? "mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-[4px] bg-[var(--highlight)] text-[var(--ivory)]"
                  : "mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-[4px] bg-[rgb(var(--ivory-rgb)_/_0.06)] text-[rgb(var(--wine-rgb)_/_0.54)]"
              }
            >
              <Icon aria-hidden="true" className="size-4" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
