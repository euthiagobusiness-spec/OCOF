import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { legal } from "@/data/legal";

type LegalDocumentProps = {
  document: typeof legal.privacy | typeof legal.terms;
};

export function LegalDocument({ document }: LegalDocumentProps) {
  return (
    <main className="pt-24">
      <section className="relative border-b border-[var(--line)] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <Badge>Base LGPD</Badge>
          <h1 className="font-display mt-6 text-balance text-4xl font-semibold uppercase leading-tight text-[var(--wine)] sm:text-6xl">
            {document.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[rgb(var(--wine-rgb)_/_0.76)]">
            {document.description}
          </p>
          <p className="mt-6 max-w-3xl border-l border-[var(--rose)] pl-5 text-base leading-7 text-[var(--muted)]">
            {document.intro}
          </p>
          <p className="mt-6 text-sm font-semibold uppercase text-[var(--rose)]">
            Última atualização: {legal.updatedAt}
          </p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-4">
          {document.sections.map((section) => (
            <Card className="p-6 sm:p-8" key={section.title}>
              <h2 className="font-display text-2xl font-semibold uppercase leading-tight text-[var(--wine)]">
                {section.title}
              </h2>
              <div className="mt-5 grid gap-4 text-base leading-7 text-[rgb(var(--wine-rgb)_/_0.72)]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
