import Image from "next/image";
import { site } from "@/data/site";

export function BrandShowcase() {
  const [lounge, studio, materials] = site.visuals.gallery;

  return (
    <div className="grid min-h-[520px] gap-3 rounded-[8px] border border-[var(--line-strong)] bg-[rgb(var(--wine-rgb)_/_0.05)] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.42)] sm:grid-cols-2">
      <div className="relative min-h-64 overflow-hidden rounded-[6px] border border-[var(--line)] bg-[var(--ivory)] sm:col-span-2">
        <Image
          alt={lounge.alt}
          className="object-cover"
          fill
          priority
          sizes="(min-width: 1024px) 46vw, 90vw"
          src={lounge.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_36%,rgb(var(--ivory-rgb)_/_0.82)_100%)]" />
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5">
          <Image
            alt="Logo OCOF em aplicacao institucional"
            className="h-auto w-32 sm:w-40"
            height={120}
            loading="eager"
            src={site.assets.logo}
            width={420}
          />
          <p className="hidden max-w-52 text-right text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[var(--muted)] sm:block">
            {site.signature}
          </p>
        </div>
      </div>

      <div className="relative min-h-56 overflow-hidden rounded-[6px] border border-[var(--line)] bg-[var(--ivory)]">
        <Image
          alt={studio.alt}
          className="object-cover"
          fill
          sizes="(min-width: 1024px) 22vw, 45vw"
          src={studio.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgb(var(--ivory-rgb)_/_0.46)_100%)]" />
      </div>

      <div className="relative min-h-56 overflow-hidden rounded-[6px] border border-[var(--line)] bg-[var(--ivory)]">
        <Image
          alt={materials.alt}
          className="object-cover"
          fill
          sizes="(min-width: 1024px) 22vw, 45vw"
          src={materials.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgb(var(--ivory-rgb)_/_0.30)_100%)]" />
      </div>
    </div>
  );
}
