type AudioPlaybackPromptProps = {
  className?: string;
  onClick: () => void;
};

export function AudioPlaybackPrompt({ className = "", onClick }: AudioPlaybackPromptProps) {
  return (
    <button
      className={`video-audio-prompt ${className}`.trim()}
      type="button"
      onClick={onClick}
      aria-label="Reproduzir vídeo com som"
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 5.75v12.5L18 12 8 5.75Z" fill="currentColor" />
        <path d="M19.25 8.5a5 5 0 0 1 0 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span>Reproduzir com som</span>
    </button>
  );
}
