import { cn } from "@/lib/utils";

type MetricCardProps = {
  value: string;
  label: string;
  className?: string;
};

export function MetricCard({ value, label, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        "min-h-24 rounded-[8px] border border-[var(--line)] bg-[rgb(var(--wine-rgb)_/_0.045)] p-3 sm:min-h-28 sm:p-5",
        className,
      )}
    >
      <p className="font-display text-3xl font-semibold leading-none text-[var(--wine)] sm:text-4xl">
        {value}
      </p>
      <p className="mt-3 text-[0.68rem] font-medium uppercase leading-4 text-[var(--muted)] sm:text-sm sm:leading-5">
        {label}
      </p>
    </div>
  );
}
