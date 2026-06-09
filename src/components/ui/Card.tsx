import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[8px] border border-[var(--line)] bg-[linear-gradient(145deg,rgb(var(--wine-rgb)_/_0.06),rgb(var(--nude-rgb)_/_0.22))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.30)] transition duration-300 hover:border-[var(--line-strong)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
