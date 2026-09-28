"use client";

import { useEffect, useRef } from "react";

type ScrollVideoCardProps = {
  src: string;
  poster: string;
  className?: string;
};

export function ScrollVideoCard({ src, poster, className = "" }: ScrollVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
  }, []);

  return (
    <div className={`motion-video-card ${className}`} data-reveal aria-hidden="true">
      <video ref={videoRef} src={src} poster={poster} muted playsInline loop preload="none" />
    </div>
  );
}
