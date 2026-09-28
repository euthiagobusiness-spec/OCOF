"use client";

import { useEffect, useRef, useState } from "react";

type ScrollVideoCardProps = {
  src: string;
  poster: string;
  className?: string;
  soundOnDesktop?: boolean;
  freezeAtEnd?: boolean;
};

export function ScrollVideoCard({ src, poster, className = "", soundOnDesktop = false, freezeAtEnd = false }: ScrollVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const userChangedSound = useRef(false);
  const soundPreference = useRef(false);
  const ended = useRef(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    userChangedSound.current = true;
    const enableSound = !soundEnabled;
    soundPreference.current = enableSound;
    video.muted = !enableSound;
    video.volume = enableSound ? 1 : 0;
    setSoundEnabled(enableSound);

    if (enableSound && !(freezeAtEnd && ended.current)) {
      void video.play().catch(() => {
        video.muted = true;
        video.volume = 0;
        soundPreference.current = false;
        setSoundEnabled(false);
      });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const desktopLayout = window.matchMedia("(min-width: 1041px)").matches;
    const shouldTrySound = soundOnDesktop && desktopLayout;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (freezeAtEnd && ended.current) {
            video.pause();
            return;
          }

          const playWithSound = shouldTrySound && (!userChangedSound.current || soundPreference.current);
          video.muted = !playWithSound;
          video.volume = playWithSound ? 1 : 0;
          if (playWithSound) {
            soundPreference.current = true;
            setSoundEnabled(true);
          }

          void video.play().catch(() => {
            if (playWithSound) {
              video.muted = true;
              video.volume = 0;
              soundPreference.current = false;
              setSoundEnabled(false);
              void video.play().catch(() => {});
            }
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [freezeAtEnd, soundOnDesktop]);

  const handleEnded = () => {
    ended.current = true;
  };

  return (
    <div className={`motion-video-card ${className}`} data-reveal>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={!soundEnabled}
        playsInline
        loop={!freezeAtEnd}
        preload="none"
        aria-label="Animação da marca OCOF"
        onEnded={freezeAtEnd ? handleEnded : undefined}
      />
      {soundOnDesktop && (
        <button
          className="motion-video-sound-toggle"
          type="button"
          onClick={toggleSound}
          aria-label={soundEnabled ? "Desativar som do vídeo" : "Ativar som do vídeo"}
          aria-pressed={soundEnabled}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M11 5 6 9H3v6h3l5 4V5Z" />
            {soundEnabled ? <><path d="M15.5 8.5a5 5 0 0 1 0 7" /><path d="M19 5a10 10 0 0 1 0 14" /></> : <path d="m16 9 5 6m0-6-5 6" />}
          </svg>
        </button>
      )}
    </div>
  );
}
