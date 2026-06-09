import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  titleClassName?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  headerClassName,
  titleClassName,
}: SectionProps) {
  return (
    <section
      className={cn("relative scroll-mt-24 py-20 sm:py-24", className)}
      id={id}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        {(eyebrow || title || subtitle) && (
          <div className={cn("mb-10 max-w-3xl", headerClassName)}>
            {eyebrow ? <Badge>{eyebrow}</Badge> : null}
            {title ? (
              <h2
                className={cn(
                  "font-display mt-5 text-balance text-4xl font-semibold uppercase leading-[1.02] text-[var(--wine)] sm:text-5xl lg:text-6xl",
                  titleClassName,
                )}
              >
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className="mt-5 text-pretty text-base leading-7 text-[rgb(var(--wine-rgb)_/_0.66)] sm:text-lg">
                {subtitle}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
