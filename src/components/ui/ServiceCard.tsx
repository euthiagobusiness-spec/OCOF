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
        <figure className="relative h-44 overflow-hidden border-b border-[var(--line)] bg-[var(--ivory)] sm:h-52">
          <Image
            alt={image.alt}
            className="object-cover grayscale opacity-90 transition duration-500 group-hover:scale-[1.025]"
            fill
            loading="eager"
            sizes="(min-width: 768px) 46vw, 92vw"
            src={image.src}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_22%,rgb(var(--ivory-rgb)_/_0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgb(var(--wine-rgb)_/_0.18),transparent_28rem)]" />
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
