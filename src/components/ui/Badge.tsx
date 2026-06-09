import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-[4px] border border-[var(--line-strong)] bg-[rgb(var(--wine-rgb)_/_0.06)] px-3 py-1 text-xs font-semibold uppercase text-[var(--muted)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
