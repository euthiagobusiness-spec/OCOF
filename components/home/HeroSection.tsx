"use client";

import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || video.ended) {
      video.pause();
      setFinished(true);
      return;
    }

    void video.play().catch(() => setFinished(true));
  }, []);

  return (
    <section className="chapter chapter-intro" id="inicio">
      <div className="hero-film" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => setFinished(true)}
          onError={() => setFinished(true)}
        >
          <source src="/ocof/motion/003-mobile.mp4" media="(orientation: portrait)" type="video/mp4" />
          <source src="/ocof/motion/004.mp4" type="video/mp4" />
        </video>
        <picture className={`hero-final-frame${finished ? " is-visible" : ""}`}>
          <source srcSet="/ocof/motion/003-mobile-final.webp" media="(orientation: portrait)" />
          <img src="/ocof/motion/004-final.webp" alt="" />
        </picture>
      </div>
      <div className={`hero-inner shell${finished ? " is-ready" : ""}`}>
        <h1>Transformamos o valor que existe em crescimento exponencial</h1>
      </div>
    </section>
  );
}
