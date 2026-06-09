import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconBadgeProps = {
  icon: LucideIcon;
  className?: string;
};

export function IconBadge({ icon: Icon, className }: IconBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex size-12 shrink-0 items-center justify-center rounded-[6px] border border-[var(--line-strong)] bg-[rgb(var(--wine-rgb)_/_0.06)] text-[var(--wine)]",
        className,
      )}
    >
      <Icon aria-hidden="true" className="size-5" />
    </span>
  );
}
