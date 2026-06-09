import { BrandShowcase } from "@/components/brand/BrandShowcase";
import { Button } from "@/components/ui/Button";
import { MetricCard } from "@/components/ui/MetricCard";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-12 pt-24 sm:pb-14 sm:pt-28" id="inicio">
      <div className="absolute inset-0 -z-20 bg-[var(--background)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgb(var(--ivory-rgb)_/_0.96)_0%,rgb(var(--nude-rgb)_/_0.22)_54%,rgb(var(--rose-rgb)_/_0.10)_100%)]" />
      <div className="absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-[rgb(var(--wine-rgb)_/_0.10)] blur-3xl" />
      <div className="absolute -right-28 top-24 -z-10 h-96 w-96 rounded-full bg-[rgb(var(--nude-rgb)_/_0.22)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-[linear-gradient(90deg,transparent,var(--line-strong),transparent)]" />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal className="relative z-10 min-w-0">
            <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase text-[rgb(var(--wine-rgb)_/_0.52)]">
              <span className="h-px w-16 bg-[var(--line-strong)]" />
              Operação estratégica digital
            </div>
            <p className="text-sm font-semibold uppercase text-[var(--muted)]">
              {site.hero.eyebrow}
            </p>
            <h1 className="font-display mt-7 max-w-full text-balance text-[2.45rem] font-semibold uppercase leading-[1.05] text-[var(--wine)] sm:text-6xl lg:text-7xl">
              <span className="metal-text hidden sm:inline">{site.hero.headline}</span>
              <span className="sm:hidden">
                {site.hero.mobileHeadlineLines.map((line) => (
                  <span className="metal-text block" key={line}>
                    {line}
                  </span>
                ))}
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[rgb(var(--wine-rgb)_/_0.76)] sm:text-xl">
              {site.hero.subheadline}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[rgb(var(--wine-rgb)_/_0.58)]">
              {site.hero.supporting}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={site.links.primaryCta}>{site.hero.primaryCta}</Button>
              <Button href={site.links.method} variant="secondary">
                {site.hero.secondaryCta}
              </Button>
            </div>
          </MotionReveal>

          <MotionReveal className="relative" delay={0.1}>
            <BrandShowcase />
          </MotionReveal>
        </div>

        <MotionReveal delay={0.16}>
          <div className="grid grid-cols-3 gap-3 border-y border-[var(--line)] py-5">
            {site.hero.metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
