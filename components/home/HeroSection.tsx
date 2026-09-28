"use client";

import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [finished, setFinished] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [mobileFallback, setMobileFallback] = useState(false);

  useEffect(() => {
    if (!mobileFallback) return;
    const revealTimer = window.setTimeout(() => setFinished(true), 6800);
    const timer = window.setTimeout(() => {
      setMobileFallback(false);
      setVideoFailed(true);
      setFinished(true);
    }, 8000);
    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(timer);
    };
  }, [mobileFallback]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const resetOpeningPosition = () => {
      if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.history.scrollRestoration = "manual";
    resetOpeningPosition();
    window.addEventListener("pageshow", resetOpeningPosition);

    video.currentTime = 0;
    const mobileOpening = window.matchMedia("(orientation: portrait)").matches;
    video.muted = mobileOpening;
    video.volume = 1;
    void video.play().catch(() => {
      video.muted = true;
      void video.play().catch(() => {
        if (mobileOpening) setMobileFallback(true);
        else {
          setVideoFailed(true);
          setFinished(true);
        }
      });
    });

    const stallTimer = window.setTimeout(() => {
      if (mobileOpening && !video.ended && video.currentTime < 0.25) {
        setMobileFallback(true);
      }
    }, 2000);

    const enableSound = () => {
      video.muted = false;
      if (video.paused && !video.ended) {
        video.currentTime = 0;
        void video.play().then(() => setMobileFallback(false)).catch(() => {
          video.muted = true;
        });
      }
      window.removeEventListener("pointerdown", enableSound);
      window.removeEventListener("keydown", enableSound);
    };
    window.addEventListener("pointerdown", enableSound);
    window.addEventListener("keydown", enableSound);

    return () => {
      window.removeEventListener("pageshow", resetOpeningPosition);
      window.removeEventListener("pointerdown", enableSound);
      window.removeEventListener("keydown", enableSound);
      window.clearTimeout(stallTimer);
    };
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
          onPlaying={() => setMobileFallback(false)}
          onTimeUpdate={(event) => {
            const video = event.currentTarget;
            if (video.duration - video.currentTime <= 1.2) setFinished(true);
          }}
          onEnded={() => setFinished(true)}
          onError={() => {
            if (window.matchMedia("(orientation: portrait)").matches) setMobileFallback(true);
            else { setVideoFailed(true); setFinished(true); }
          }}
        >
          <source src="/ocof/motion/003-mobile.mp4" media="(orientation: portrait)" type="video/mp4" />
          <source src="/ocof/motion/002.mp4" media="(orientation: landscape)" type="video/mp4" />
        </video>
        {mobileFallback && <img className="hero-mobile-fallback" src="/ocof/motion/003-mobile-fallback.gif" alt="" />}
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
