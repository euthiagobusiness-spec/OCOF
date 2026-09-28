import type { ReactNode } from "react";

type Item = readonly [title: string, description: string];

type CardGridSectionProps = {
  id: string;
  title: string;
  gridClassName: string;
  items: readonly Item[];
  children?: ReactNode;
};

export function CardGridSection({ id, title, gridClassName, items, children }: CardGridSectionProps) {
  return (
    <section className="chapter" id={id}>
      <div className="shell">
        <h2 data-reveal>{title}</h2>
        <div className={gridClassName} data-reveal-group>
          {items.map(([itemTitle, description]) => (
            <article className="text-block glass-panel" key={itemTitle}>
              <h3>{itemTitle}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}
