import Image from "next/image";
import { type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";

type ServiceCardProps = {
  title: string;
  description: string;
  details: string;
  image?: {
    src: string;
    alt: string;
  };
  icon: LucideIcon;
};

export function ServiceCard({
  title,
  description,
  details,
  image,
  icon,
}: ServiceCardProps) {
  return (
    <Card className="group flex h-full min-h-[460px] flex-col overflow-hidden p-0">
      {image ? (
        <figure className="relative aspect-[16/10] min-h-44 overflow-hidden border-b border-[var(--line)] bg-[var(--ivory)] sm:min-h-52">
          <Image
            alt={image.alt}
            className="object-cover transition duration-500 group-hover:scale-[1.025]"
            fill
            quality={84}
            sizes="(min-width: 1024px) 23vw, (min-width: 768px) 46vw, 92vw"
            src={image.src}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(var(--ivory-rgb)_/_0.02)_0%,transparent_34%,rgb(var(--ivory-rgb)_/_0.62)_100%)]" />
        </figure>
      ) : null}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-5">
          <IconBadge className="size-14" icon={icon} />
          <span className="h-px flex-1 bg-[var(--line)] transition duration-300 group-hover:bg-[var(--rose)]/45" />
        </div>
        <h3 className="font-display mt-7 text-2xl font-semibold uppercase leading-tight text-[var(--wine)] sm:text-3xl">
          {title}
        </h3>
        <p className="mt-5 text-base leading-7 text-[rgb(var(--wine-rgb)_/_0.70)]">
          {description}
        </p>
        <p className="mt-auto border-t border-[var(--line)] pt-5 text-sm leading-6 text-[var(--muted)]">
          {details}
        </p>
      </div>
    </Card>
  );
}
