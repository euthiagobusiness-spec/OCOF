import Image from "next/image";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export function VisualMoodboard() {
  const [lounge, studio, materials, workspace] = site.visuals.gallery;

  return (
    <Section
      className="border-y border-[var(--line)] bg-[rgb(var(--wine-rgb)_/_0.035)]"
      eyebrow={site.visuals.eyebrow}
      subtitle={site.visuals.subtitle}
      title={site.visuals.title}
    >
      <MotionReveal>
        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <VisualPanel
            alt={lounge.alt}
            className="min-h-[430px] lg:min-h-[620px]"
            priority
            sizes="(min-width: 1024px) 58vw, 92vw"
            src={lounge.src}
          />
          <div className="grid gap-4">
            <VisualPanel
              alt={studio.alt}
              className="min-h-[220px]"
              sizes="(min-width: 1024px) 34vw, 92vw"
              src={studio.src}
            />
            <VisualPanel
              alt={materials.alt}
              className="min-h-[196px] lg:min-h-[190px]"
              sizes="(min-width: 1024px) 34vw, 92vw"
              src={materials.src}
            />
            <VisualPanel
              alt={workspace.alt}
              className="min-h-[196px] lg:min-h-[190px]"
              sizes="(min-width: 1024px) 34vw, 92vw"
              src={workspace.src}
            />
          </div>
        </div>
      </MotionReveal>
    </Section>
  );
}

type VisualPanelProps = {
  alt: string;
  className: string;
  priority?: boolean;
  sizes: string;
  src: string;
};

function VisualPanel({
  alt,
  className,
  priority = false,
  sizes,
  src,
}: VisualPanelProps) {
  return (
    <figure
      className={`relative overflow-hidden rounded-[8px] border border-[var(--line)] bg-[var(--ivory)] shadow-[0_32px_120px_rgba(0,0,0,0.34)] ${className}`}
    >
      <Image
        alt={alt}
        className="object-cover grayscale transition duration-300 hover:scale-[1.015]"
        fill
        priority={priority}
        sizes={sizes}
        src={src}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgb(var(--ivory-rgb)_/_0.55)_100%)]" />
    </figure>
  );
}
