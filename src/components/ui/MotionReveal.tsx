"use client";

import { motion, useReducedMotion } from "framer-motion";

type MotionRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
};

export function MotionReveal({
  children,
  className,
  delay = 0,
  immediate = false,
}: MotionRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const shouldShowImmediately = shouldReduceMotion || immediate;

  return (
    <motion.div
      className={className}
      initial={shouldShowImmediately ? false : { opacity: 0, y: 22 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={shouldShowImmediately ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
