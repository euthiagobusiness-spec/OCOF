"use client";

import Image from "next/image";
import { useRef } from "react";
import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import { div as MotionDiv } from "framer-motion/m";

export function HeroFloatGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const leftY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const centerY = useTransform(scrollYProgress, [0, 1], [0, -190]);
  const rightX = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const rightY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div className="hero-float-gallery" ref={targetRef} aria-hidden="true">
      <MotionDiv
        className="hero-float hero-float-left"
        style={reducedMotion ? undefined : { x: leftX, y: leftY }}
      >
        <Image src="/brand/ocof-agenda.jpg" alt="" fill sizes="(max-width: 700px) 36vw, 20vw" priority />
      </MotionDiv>
      <MotionDiv
        className="hero-float hero-float-center"
        style={reducedMotion ? undefined : { y: centerY }}
      >
        <Image src="/ocof/hero-collage.jpg" alt="" fill sizes="(max-width: 700px) 48vw, 28vw" priority />
      </MotionDiv>
      <MotionDiv
        className="hero-float hero-float-right"
        style={reducedMotion ? undefined : { x: rightX, y: rightY }}
      >
        <Image src="/ocof/logo-wall.jpg" alt="" fill sizes="(max-width: 700px) 32vw, 16vw" priority />
      </MotionDiv>
    </div>
  );
}
