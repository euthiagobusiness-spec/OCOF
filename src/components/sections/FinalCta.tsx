import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { site } from "@/data/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24" id="contato">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--line-strong),transparent)]" />
      <MotionReveal className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative grid items-center gap-8 overflow-hidden rounded-[8px] border border-[var(--line-strong)] bg-[linear-gradient(135deg,rgb(var(--ivory-rgb)_/_0.34),rgb(var(--nude-rgb)_/_0.54),rgb(var(--rose-rgb)_/_0.12))] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.12)] sm:p-8 lg:grid-cols-[auto_1fr_auto]">
          <Image
            alt=""
            aria-hidden="true"
            className="absolute inset-0 z-0 object-cover opacity-25 grayscale"
            fill
            loading="eager"
            sizes="92vw"
            src={site.finalCta.image.src}
          />
          <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgb(var(--ivory-rgb)_/_0.92),rgb(var(--ivory-rgb)_/_0.76),rgb(var(--ivory-rgb)_/_0.88))]" />
          <span className="relative z-10 grid size-16 place-items-center rounded-[8px] border border-[rgb(var(--rose-rgb)_/_0.48)] text-[var(--rose)]">
            <MessageCircle aria-hidden="true" className="size-8" />
          </span>
          <div className="relative z-10">
            <h2 className="font-display max-w-3xl text-balance text-4xl font-semibold uppercase leading-tight text-[var(--wine)] sm:text-5xl">
              {site.finalCta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[rgb(var(--wine-rgb)_/_0.68)]">
              {site.finalCta.body}
            </p>
          </div>
          <Button className="relative z-10 w-full lg:w-auto" href={site.links.primaryCta}>
            {site.finalCta.cta}
          </Button>
        </div>
      </MotionReveal>
    </section>
  );
}
