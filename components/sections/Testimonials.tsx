type Testimonial = {
  quote: string;
  name: string;
  company: string;
  service?: string;
  result?: string;
};

export function Testimonials({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null;

  return (
    <section className="section testimonials" aria-labelledby="testimonial-title">
      <div className="shell">
        <p className="eyebrow">Prova social</p>
        <h2 id="testimonial-title">Quem viveu a operação, conta.</h2>
        <div className="testimonial-list">
          {items.map((item) => (
            <figure key={`${item.name}-${item.company}`}>
              <blockquote>“{item.quote}”</blockquote>
              <figcaption><strong>{item.name}</strong><span>{item.company}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
