import { type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";

type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ProcessStep({
  number,
  title,
  description,
  icon,
}: ProcessStepProps) {
  return (
    <Card className="relative isolate flex h-full min-h-[300px] flex-col overflow-hidden bg-[linear-gradient(145deg,rgb(var(--wine-rgb)_/_0.075),rgb(var(--nude-rgb)_/_0.24))]">
      <div className="absolute inset-x-6 top-24 -z-10 h-px bg-[linear-gradient(90deg,var(--line-strong),transparent)]" />
      <div className="absolute right-5 top-5 -z-10 font-display text-6xl font-semibold leading-none text-[rgb(var(--wine-rgb)_/_0.045)]">
        {number}
      </div>
      <div className="relative z-10 w-fit bg-[rgb(var(--ivory-rgb)_/_0.68)]">
        <IconBadge icon={icon} />
      </div>
      <p className="mt-8 text-sm font-semibold uppercase text-[var(--muted)]">
        Etapa {number}
      </p>
      <h3 className="font-display mt-3 text-3xl font-semibold uppercase leading-tight text-[var(--wine)]">
        {title}
      </h3>
      <p className="mt-5 text-base leading-7 text-[rgb(var(--wine-rgb)_/_0.66)]">
        {description}
      </p>
    </Card>
  );
}
