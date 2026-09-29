"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AudioPlaybackPrompt } from "@/components/ui/AudioPlaybackPrompt";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [finished, setFinished] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [mobileFallback, setMobileFallback] = useState(false);
  const [audioBlocked, setAudioBlocked] = useState(false);
  const [gateRevealing, setGateRevealing] = useState(false);
  const [orientation, setOrientation] = useState<"portrait" | "landscape" | null>(null);

  const playWithSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    video.muted = false;
    video.volume = 1;
    void video.play().then(() => {
      setFinished(false);
      setVideoFailed(false);
      setMobileFallback(false);
      setGateRevealing(true);
      window.setTimeout(() => {
        setAudioBlocked(false);
        setGateRevealing(false);
      }, 850);
    }).catch(() => {
      setAudioBlocked(true);
      setGateRevealing(false);
      video.pause();
      video.currentTime = 0;
    });
  };

  useLayoutEffect(() => {
    setOrientation(window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape");
  }, []);

  useEffect(() => {
    if (!mobileFallback) return;
    const revealTimer = window.setTimeout(() => setFinished(true), 5500);
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
    if (!video || !orientation) return;

    const resetOpeningPosition = () => {
      if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.history.scrollRestoration = "manual";
    resetOpeningPosition();
    window.addEventListener("pageshow", resetOpeningPosition);

    video.currentTime = 0;
    const mobileOpening = orientation === "portrait";
    video.muted = false;
    video.volume = 1;
    void video.play().catch(() => {
      video.pause();
      video.currentTime = 0;
      setAudioBlocked(true);
    });

    const stallTimer = window.setTimeout(() => {
      if (mobileOpening && !video.paused && !video.ended && video.currentTime < 0.25) {
        setMobileFallback(true);
      }
    }, 2000);

    return () => {
      window.removeEventListener("pageshow", resetOpeningPosition);
      window.clearTimeout(stallTimer);
    };
  }, [orientation]);

  return (
    <section className="chapter chapter-intro" id="inicio">
      <div className="hero-film" aria-hidden="true">
        {orientation && <video
          ref={videoRef}
          className="hero-video"
          src={orientation === "portrait" ? "/ocof/motion/003-mobile.mp4" : "/ocof/motion/002.mp4"}
          autoPlay
          playsInline
          preload="auto"
          onPlaying={() => setMobileFallback(false)}
          onTimeUpdate={(event) => {
            const video = event.currentTarget;
            if (video.duration - video.currentTime <= 2.5) setFinished(true);
          }}
          onEnded={() => setFinished(true)}
          onError={() => {
            if (orientation === "portrait") setMobileFallback(true);
            else { setVideoFailed(true); setFinished(true); }
          }}
        />}
        {mobileFallback && <img className="hero-mobile-fallback" src="/ocof/motion/003-mobile-fallback.gif" alt="" />}
        <picture className={`hero-final-frame${videoFailed ? " is-visible" : ""}`}>
          <source srcSet="/ocof/motion/003-mobile-final.webp" media="(orientation: portrait)" />
          <img src="/ocof/motion/004-final.webp" alt="" />
        </picture>
      </div>
      {audioBlocked && createPortal(
        <div className={`hero-audio-gate${gateRevealing ? " is-revealing" : ""}`}>
          <AudioPlaybackPrompt
            className="hero-audio-prompt"
            label="Conheça a OCOF"
            ariaLabel="Conheça a OCOF com som"
            onClick={playWithSound}
          />
        </div>,
        document.body
      )}
      <div className={`hero-inner shell${finished ? " is-ready" : ""}`}>
        <h1>
          Transformamos o valor que existe em crescimento exponencial
          <span aria-hidden="true">Transformamos o valor que existe em crescimento exponencial</span>
        </h1>
      </div>
    </section>
  );
}
