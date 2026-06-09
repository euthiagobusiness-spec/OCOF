import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export function Clients() {
  return (
    <Section
      className="border-y border-[var(--line)] bg-[var(--surface)]"
      eyebrow={site.clients.eyebrow}
      subtitle={site.clients.intro}
      title={site.clients.title}
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {site.clients.items.map((item, index) => (
          <MotionReveal delay={index * 0.025} key={item}>
            <Card className="flex min-h-24 items-center justify-between gap-4 p-5">
              <span className="font-semibold text-[var(--wine)]">{item}</span>
              <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-[var(--muted)]" />
            </Card>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}
