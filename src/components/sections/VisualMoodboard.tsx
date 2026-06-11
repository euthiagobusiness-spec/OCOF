import { MotionReveal } from "@/components/ui/MotionReveal";
import { Section } from "@/components/ui/Section";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { site } from "@/data/site";

export function VisualMoodboard() {
  const [dashboard, planning, materials, meeting] = site.visuals.gallery;

  return (
    <Section
      className="border-y border-[var(--line)] bg-[rgb(var(--wine-rgb)_/_0.035)]"
      eyebrow={site.visuals.eyebrow}
      subtitle={site.visuals.subtitle}
      title={site.visuals.title}
    >
      <MotionReveal>
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <VisualFrame
            alt={dashboard.alt}
            className="aspect-[4/5] min-h-[420px] sm:aspect-[16/10] sm:min-h-[480px] lg:aspect-auto lg:min-h-[620px]"
            priority
            quality={86}
            sizes="(min-width: 1024px) 58vw, 92vw"
            src={dashboard.src}
          />
          <div className="grid gap-3 sm:gap-4">
            <VisualFrame
              alt={planning.alt}
              className="aspect-[16/10] min-h-[210px] sm:min-h-[240px] lg:min-h-[220px]"
              quality={86}
              sizes="(min-width: 1024px) 34vw, 92vw"
              src={planning.src}
            />
            <VisualFrame
              alt={materials.alt}
              className="aspect-[16/10] min-h-[210px] sm:min-h-[240px] lg:min-h-[190px]"
              quality={86}
              sizes="(min-width: 1024px) 34vw, 92vw"
              src={materials.src}
            />
            <VisualFrame
              alt={meeting.alt}
              className="aspect-[16/10] min-h-[210px] sm:min-h-[240px] lg:min-h-[190px]"
              quality={86}
              sizes="(min-width: 1024px) 34vw, 92vw"
              src={meeting.src}
            />
          </div>
        </div>
      </MotionReveal>
    </Section>
  );
}
