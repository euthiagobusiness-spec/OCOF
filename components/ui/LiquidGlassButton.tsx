"use client";

import type { ReactNode } from "react";
import { useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { a as MotionAnchor } from "framer-motion/m";

type LiquidGlassButtonProps = HTMLMotionProps<"a"> & {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
};

export function LiquidGlassButton({
  href,
  children,
  className = "",
  tone = "light",
  ...props
}: LiquidGlassButtonProps) {
  const reducedMotion = useReducedMotion();

  return (
    <MotionAnchor
      href={href}
      className={`liquid-glass-button liquid-glass-button--${tone} ${className}`.trim()}
      whileHover={reducedMotion ? undefined : { y: -2 }}
      whileTap={reducedMotion ? undefined : { y: 1, scale: 0.985 }}
      transition={{ type: "spring", stiffness: 280, damping: 24, mass: 0.45 }}
      {...props}
    >
      <span className="liquid-glass-button__surface" aria-hidden="true" />
      <span className="liquid-glass-button__content">{children}</span>
    </MotionAnchor>
  );
}
