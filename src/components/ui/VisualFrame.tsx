import Image from "next/image";
import { cn } from "@/lib/utils";

type VisualFrameProps = {
  alt: string;
  children?: React.ReactNode;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  priority?: boolean;
  quality?: number;
  sizes: string;
  src: string;
};

export function VisualFrame({
  alt,
  children,
  className,
  imageClassName,
  overlayClassName,
  priority = false,
  quality = 84,
  sizes,
  src,
}: VisualFrameProps) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-[8px] border border-[var(--line)] bg-[var(--ivory)] shadow-[0_32px_120px_rgba(0,0,0,0.34)]",
        className,
      )}
    >
      <Image
        alt={alt}
        className={cn(
          "object-cover transition duration-300 hover:scale-[1.015]",
          imageClassName,
        )}
        fill
        priority={priority}
        quality={quality}
        sizes={sizes}
        src={src}
      />
      <div
        className={cn(
          "absolute inset-0 bg-[linear-gradient(180deg,rgb(var(--ivory-rgb)_/_0.04)_0%,transparent_58%,rgb(var(--ivory-rgb)_/_0.48)_100%)]",
          overlayClassName,
        )}
      />
      {children}
    </figure>
  );
}
