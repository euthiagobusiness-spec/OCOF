import Image from "next/image";
import { site } from "@/data/site";
import { VisualFrame } from "@/components/ui/VisualFrame";

export function BrandShowcase() {
  const [dashboard, planning, materials] = site.visuals.gallery;

  return (
    <div className="grid gap-3 rounded-[8px] border border-[var(--line-strong)] bg-[rgb(var(--wine-rgb)_/_0.05)] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.42)] sm:grid-cols-2 sm:p-3">
      <VisualFrame
        alt={dashboard.alt}
        className="aspect-[1.12/1] min-h-[330px] rounded-[6px] sm:col-span-2 sm:aspect-[16/9] sm:min-h-[300px] lg:min-h-[360px]"
        overlayClassName="bg-[linear-gradient(180deg,rgb(var(--ivory-rgb)_/_0.02)_0%,transparent_42%,rgb(var(--ivory-rgb)_/_0.72)_100%)]"
        priority
        quality={88}
        sizes="(min-width: 1024px) 46vw, 90vw"
        src={dashboard.src}
      >
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 sm:bottom-5 sm:left-5 sm:right-5 sm:gap-5">
          <Image
            alt="Logo OCOF em aplicacao institucional"
            className="h-auto w-32 object-contain mix-blend-screen sm:w-40"
            height={205}
            loading="eager"
            src={site.assets.logo}
            width={590}
          />
          <p className="hidden max-w-52 text-right text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[var(--wine)] sm:block">
            {site.signature}
          </p>
        </div>
      </VisualFrame>

      <VisualFrame
        alt={planning.alt}
        className="aspect-[4/3] min-h-[200px] rounded-[6px] sm:min-h-[220px]"
        overlayClassName="bg-[linear-gradient(180deg,transparent_54%,rgb(var(--ivory-rgb)_/_0.34)_100%)]"
        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
        src={planning.src}
      />

      <VisualFrame
        alt={materials.alt}
        className="aspect-[4/3] min-h-[200px] rounded-[6px] sm:min-h-[220px]"
        overlayClassName="bg-[linear-gradient(180deg,transparent_54%,rgb(var(--ivory-rgb)_/_0.26)_100%)]"
        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
        src={materials.src}
      />
    </div>
  );
}
