"use client";

import { useEffect, useRef } from "react";

type ScrollVideoCardProps = {
  src: string;
  poster: string;
  className?: string;
  freezeAtEnd?: boolean;
};

export function ScrollVideoCard({ src, poster, className = "", freezeAtEnd = false }: ScrollVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const ended = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (freezeAtEnd && ended.current) {
            video.pause();
            return;
          }

          video.muted = true;
          void video.play().catch(() => {});
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
  }, [freezeAtEnd]);

  const handleEnded = () => {
    ended.current = true;
  };

  return (
    <div className={`motion-video-card ${className}`} data-reveal>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        muted
        loop={!freezeAtEnd}
        preload="none"
        aria-label="Animação da marca OCOF sem som"
        onEnded={freezeAtEnd ? handleEnded : undefined}
      />
    </div>
  );
}
