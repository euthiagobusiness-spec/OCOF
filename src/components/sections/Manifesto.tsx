import { MotionReveal } from "@/components/ui/MotionReveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export function Manifesto() {
  return (
    <Section
      className="border-y border-[var(--line)] bg-[var(--background)]"
      eyebrow={site.manifesto.eyebrow}
      id="manifesto"
      title={site.manifesto.title}
      headerClassName="mx-auto text-center"
    >
      <MotionReveal className="mx-auto max-w-4xl text-center">
        <div className="space-y-4 text-pretty text-xl leading-9 text-[rgb(var(--wine-rgb)_/_0.74)] sm:text-2xl sm:leading-10">
          {site.manifesto.lines.map((line) => {
            const isImpact = line === site.manifesto.impactLine;

            return (
              <p
                className={
                  isImpact
                    ? "font-display py-4 text-4xl font-semibold uppercase leading-tight text-[var(--wine)] sm:text-6xl"
                    : undefined
                }
                key={line}
              >
                {line}
              </p>
            );
          })}
        </div>
      </MotionReveal>
    </Section>
  );
}
