import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className }: LogoProps) {
  return (
    <Link
      aria-label="Voltar ao início"
      className={cn(
        "group inline-flex items-center gap-3 rounded-[6px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--rose)]",
        className,
      )}
      href="/#inicio"
    >
      <span className="flex min-w-0 flex-col">
        <Image
          alt="OCOF"
          className={compact ? "h-auto w-28" : "h-auto w-36"}
          height={120}
          loading="eager"
          src={site.assets.logo}
          width={420}
        />
        {compact ? null : (
          <span className="mt-1 hidden text-[0.64rem] font-semibold uppercase leading-4 text-[var(--muted)] sm:block">
            {site.signature}
          </span>
        )}
      </span>
    </Link>
  );
}
