import { Card } from "@/components/ui/Card";

type PillarCardProps = {
  letter: string;
  title: string;
  description: string;
};

export function PillarCard({ letter, title, description }: PillarCardProps) {
  return (
    <Card className="flex h-full min-h-[260px] flex-col justify-between">
      <div className="flex items-center justify-between gap-4">
        <span className="font-display text-6xl font-semibold leading-none text-[var(--wine)]">
          {letter}
        </span>
        <span className="h-px flex-1 bg-[var(--line-strong)]" />
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-[var(--wine)]">{title}</h3>
        <p className="mt-4 text-base leading-7 text-[rgb(var(--wine-rgb)_/_0.64)]">
          {description}
        </p>
      </div>
    </Card>
  );
}
