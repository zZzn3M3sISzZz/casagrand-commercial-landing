"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import { useScrollLift } from "@/lib/use-scroll-lift";

type MediaFrameProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  kenBurns?: boolean;
  lift?: boolean;
  priority?: boolean;
};

export function MediaFrame({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
  kenBurns = false,
  lift = true,
  priority = false,
}: MediaFrameProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  useScrollLift(wrapRef, frameRef, lift ? undefined : { lift: 0, grow: 0 });

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("is-in");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-in");
          observer.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className={cn("overflow-hidden rounded-photo [transform:translateZ(0)]", className)}
    >
      <div ref={frameRef} className="media-in size-full">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn(
            "size-full object-cover",
            kenBurns && "media-kenburns",
            imgClassName,
          )}
        />
      </div>
    </div>
  );
}
