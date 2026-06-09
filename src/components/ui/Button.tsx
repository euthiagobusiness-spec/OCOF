import Link from "next/link";
import { ArrowUpRight, MessageCircle, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: LucideIcon;
  className?: string;
  ariaLabel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  icon: Icon,
  className,
  ariaLabel,
}: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const isWhatsApp = href.includes("wa.me");
  const ResolvedIcon = Icon ?? (isWhatsApp ? MessageCircle : ArrowUpRight);
  const resolvedAriaLabel =
    ariaLabel ?? (isWhatsApp ? "Falar com a OCOF pelo WhatsApp" : undefined);

  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] border px-5 py-3 text-center text-sm font-semibold uppercase transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--rose)]",
    variant === "primary" &&
      "border-[var(--highlight)] bg-[var(--highlight)] text-[var(--ivory)] shadow-[0_22px_70px_rgba(0,0,0,0.16)] hover:border-[var(--rose)] hover:bg-[var(--wine)]",
    variant === "secondary" &&
      "border-[var(--line-strong)] bg-[rgb(var(--wine-rgb)_/_0.06)] text-[var(--wine)] hover:border-[var(--rose)] hover:bg-[var(--rose)] hover:text-[var(--ivory)]",
    variant === "ghost" &&
      "min-h-0 border-transparent bg-transparent px-0 py-0 text-[var(--muted)] hover:text-[var(--wine)]",
    className,
  );

  const content = (
    <>
      <span className="min-w-0">{children}</span>
      <ResolvedIcon
        aria-hidden="true"
        className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </>
  );

  if (isExternal) {
    return (
      <a
        aria-label={resolvedAriaLabel}
        className={classes}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return (
    <Link aria-label={ariaLabel} className={classes} href={href}>
      {content}
    </Link>
  );
}
