"use client";

import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [finished, setFinished] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const resetOpeningPosition = () => {
      if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.history.scrollRestoration = "manual";
    resetOpeningPosition();
    window.addEventListener("pageshow", resetOpeningPosition);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      video.pause();
      setFinished(true);
      setVideoFailed(true);
      return () => window.removeEventListener("pageshow", resetOpeningPosition);
    }

    video.currentTime = 0;
    video.muted = false;
    video.volume = 1;
    void video.play().catch(() => {
      video.muted = true;
      void video.play().catch(() => {
        setVideoFailed(true);
        setFinished(true);
      });
    });

    const enableSound = () => {
      video.muted = false;
      window.removeEventListener("pointerdown", enableSound);
      window.removeEventListener("keydown", enableSound);
    };
    window.addEventListener("pointerdown", enableSound);
    window.addEventListener("keydown", enableSound);

    return () => {
      window.removeEventListener("pageshow", resetOpeningPosition);
      window.removeEventListener("pointerdown", enableSound);
      window.removeEventListener("keydown", enableSound);
    };
  }, []);

  return (
    <section className="chapter chapter-intro" id="inicio">
      <div className="hero-film" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          playsInline
          preload="auto"
          onEnded={() => setFinished(true)}
          onError={() => { setVideoFailed(true); setFinished(true); }}
        >
          <source src="/ocof/motion/003-mobile.mp4" media="(orientation: portrait)" type="video/mp4" />
          <source src="/ocof/motion/002.mp4" media="(orientation: landscape)" type="video/mp4" />
        </video>
        <picture className={`hero-final-frame${videoFailed ? " is-visible" : ""}`}>
          <source srcSet="/ocof/motion/003-mobile-final.webp" media="(orientation: portrait)" />
          <img src="/ocof/motion/004-final.webp" alt="" />
        </picture>
      </div>
      <div className={`hero-inner shell${finished ? " is-ready" : ""}`}>
        <h1>
          Transformamos o valor que existe em crescimento exponencial
          <span aria-hidden="true">Transformamos o valor que existe em crescimento exponencial</span>
        </h1>
      </div>
    </section>
  );
}
