"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";
import { useScrollLift } from "@/lib/use-scroll-lift";

type ParallaxFrameProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  rounded?: boolean;
};

export function ParallaxFrame({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
  priority = false,
  rounded = true,
}: ParallaxFrameProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  useScrollLift(wrapRef, imgRef, {
    from: 40,
    lift: -88,
    scale: 1.2,
    grow: 0.05,
  });

  return (
    <div
      ref={wrapRef}
      className={cn(
        "overflow-hidden [transform:translateZ(0)]",
        rounded && "rounded-photo",
        className,
      )}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn("size-full origin-center object-cover object-[center_42%]", imgClassName)}
      />
    </div>
  );
}
