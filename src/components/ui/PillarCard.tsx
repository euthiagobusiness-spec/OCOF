import { Card } from "@/components/ui/Card";

type PillarCardProps = {
  letter: string;
  title: string;
  description: string;
};

export function PillarCard({ letter, title, description }: PillarCardProps) {
  return (
    <Card className="grid h-full min-h-[300px] grid-rows-[auto_1fr] p-7">
      <div className="grid grid-cols-[auto_1fr] items-center gap-5">
        <span className="font-display min-w-14 text-6xl font-semibold leading-none text-[var(--wine)]">
          {letter}
        </span>
        <span className="h-px flex-1 bg-[var(--line-strong)]" />
      </div>
      <div className="mt-16 flex flex-col">
        <h3 className="text-xl font-semibold leading-7 text-[var(--wine)]">
          {title}
        </h3>
        <p className="mt-5 text-base leading-7 text-[rgb(var(--wine-rgb)_/_0.64)]">
          {description}
        </p>
      </div>
    </Card>
  );
}
