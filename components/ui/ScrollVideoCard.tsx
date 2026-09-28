"use client";

import { useEffect, useRef, useState } from "react";
import { AudioPlaybackPrompt } from "@/components/ui/AudioPlaybackPrompt";

type ScrollVideoCardProps = {
  src: string;
  poster: string;
  className?: string;
  freezeAtEnd?: boolean;
};

export function ScrollVideoCard({ src, poster, className = "", freezeAtEnd = false }: ScrollVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const ended = useRef(false);
  const [audioBlocked, setAudioBlocked] = useState(false);

  const playWithSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = 1;
    void video.play().then(() => {
      setAudioBlocked(false);
    }).catch(() => {
      setAudioBlocked(true);
    });
  };

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

          video.muted = false;
          video.volume = 1;
          void video.play().then(() => {
            setAudioBlocked(false);
          }).catch(() => {
            setAudioBlocked(true);
          });
        } else {
          video.pause();
          setAudioBlocked(false);
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
        loop={!freezeAtEnd}
        preload="none"
        aria-label="Animação da marca OCOF com som"
        onEnded={freezeAtEnd ? handleEnded : undefined}
      />
      {audioBlocked && (
        <AudioPlaybackPrompt className="motion-video-audio-prompt" onClick={playWithSound} />
      )}
    </div>
  );
}
