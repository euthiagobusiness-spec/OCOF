type Item = readonly [title: string, description: string];

type CardGridSectionProps = {
  id: string;
  title: string;
  gridClassName: string;
  items: readonly Item[];
};

export function CardGridSection({ id, title, gridClassName, items }: CardGridSectionProps) {
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
      </div>
    </section>
  );
}
