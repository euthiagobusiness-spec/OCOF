"use client";

import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [finished, setFinished] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    if (finished) {
      video.currentTime = 0;
      video.muted = false;
      video.volume = 1;
      setSoundEnabled(true);
      setFinished(false);
      void video.play().catch(() => {
        video.pause();
        video.muted = true;
        setSoundEnabled(false);
        setFinished(true);
      });
      return;
    }

    const enableSound = !soundEnabled;
    video.muted = !enableSound;
    video.volume = enableSound ? 1 : 0;
    setSoundEnabled(enableSound);

    if (enableSound) {
      void video.play().catch(() => {
        video.muted = true;
        setSoundEnabled(false);
        setFinished(true);
      });
    }
  };

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
          muted={!soundEnabled}
          playsInline
          preload="auto"
          onEnded={() => setFinished(true)}
          onError={() => setFinished(true)}
        >
          <source src="/ocof/motion/003-mobile.mp4" media="(orientation: portrait)" type="video/mp4" />
          <source src="/ocof/motion/002.mp4" type="video/mp4" />
        </video>
        <picture className={`hero-final-frame${finished ? " is-visible" : ""}`}>
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
      <button
        className="hero-sound-toggle"
        type="button"
        onClick={toggleSound}
        aria-label={finished ? "Reproduzir vídeo com som" : soundEnabled ? "Desativar som do vídeo" : "Ativar som do vídeo"}
        aria-pressed={!finished && soundEnabled}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 5 6 9H3v6h3l5 4V5Z" />
          {soundEnabled && !finished ? (
            <>
              <path d="M15.5 8.5a5 5 0 0 1 0 7" />
              <path d="M19 5a10 10 0 0 1 0 14" />
            </>
          ) : (
            <path d="m16 9 5 6m0-6-5 6" />
          )}
        </svg>
      </button>
    </section>
  );
}
