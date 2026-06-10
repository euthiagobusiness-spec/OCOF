import Image from "next/image";
import { site } from "@/data/site";

export function BrandShowcase() {
  const [lounge, studio, materials] = site.visuals.gallery;

  return (
    <div className="grid gap-3 rounded-[8px] border border-[var(--line-strong)] bg-[rgb(var(--wine-rgb)_/_0.05)] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.42)] sm:grid-cols-2 sm:p-3">
      <div className="relative aspect-[1.12/1] min-h-[360px] overflow-hidden rounded-[6px] border border-[var(--line)] bg-[var(--ivory)] sm:col-span-2 sm:aspect-[16/9] sm:min-h-[300px] lg:min-h-[360px]">
        <Image
          alt={lounge.alt}
          className="object-cover"
          fill
          priority
          quality={88}
          sizes="(min-width: 1024px) 46vw, 90vw"
          src={lounge.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(var(--ivory-rgb)_/_0.02)_0%,transparent_42%,rgb(var(--ivory-rgb)_/_0.72)_100%)]" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 sm:bottom-5 sm:left-5 sm:right-5 sm:gap-5">
          <Image
            alt="Logo OCOF em aplicacao institucional"
            className="h-auto w-32 sm:w-40"
            height={120}
            loading="eager"
            src={site.assets.logo}
            width={420}
          />
          <p className="hidden max-w-52 text-right text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[var(--wine)] sm:block">
            {site.signature}
          </p>
        </div>
      </div>

      <div className="relative aspect-[4/3] min-h-[210px] overflow-hidden rounded-[6px] border border-[var(--line)] bg-[var(--ivory)] sm:min-h-[220px]">
        <Image
          alt={studio.alt}
          className="object-cover"
          fill
          quality={84}
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
          src={studio.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_54%,rgb(var(--ivory-rgb)_/_0.34)_100%)]" />
      </div>

      <div className="relative aspect-[4/3] min-h-[210px] overflow-hidden rounded-[6px] border border-[var(--line)] bg-[var(--ivory)] sm:min-h-[220px]">
        <Image
          alt={materials.alt}
          className="object-cover"
          fill
          quality={84}
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
          src={materials.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_54%,rgb(var(--ivory-rgb)_/_0.26)_100%)]" />
      </div>
    </div>
  );
}
