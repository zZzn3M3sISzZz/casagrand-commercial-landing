"use client";

import { useEffect, useRef, type PointerEvent, type PointerEventHandler } from "react";
import { cn } from "@/lib/cn";
import { useScrollLift } from "@/lib/use-scroll-lift";

const INTERACTIVE_PAN = 0.028;

type ParallaxFrameProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  rounded?: boolean;
  interactive?: boolean;
  onPointerEnter?: PointerEventHandler<HTMLDivElement>;
  onPointerLeave?: PointerEventHandler<HTMLDivElement>;
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
  interactive = false,
  onPointerEnter,
  onPointerLeave: onPointerLeaveProp,
}: ParallaxFrameProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const liftRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const motion = useRef({ tx: 0, ty: 0, cx: 0, cy: 0, raf: 0 });

  useScrollLift(wrapRef, imgRef, {
    from: 40,
    lift: -88,
    scale: 1.2,
    grow: 0.05,
    enabled: !interactive,
  });

  useEffect(() => {
    if (!interactive) return;
    const frame = liftRef.current;
    if (frame) frame.style.transform = "translate3d(0, 0, 0)";
    return () => {
      if (motion.current.raf) window.cancelAnimationFrame(motion.current.raf);
    };
  }, [interactive]);

  const tick = () => {
    const frame = liftRef.current;
    const state = motion.current;
    if (!frame) return;
    state.cx += (state.tx - state.cx) * 0.14;
    state.cy += (state.ty - state.cy) * 0.14;
    frame.style.transform = `translate3d(${state.cx}px, ${state.cy}px, 0)`;
    if (Math.abs(state.tx - state.cx) > 0.12 || Math.abs(state.ty - state.cy) > 0.12) {
      state.raf = window.requestAnimationFrame(tick);
    } else {
      state.raf = 0;
    }
  };

  const start = () => {
    if (!motion.current.raf) motion.current.raf = window.requestAnimationFrame(tick);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!interactive) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const nx = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;
    const ny = ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;
    motion.current.tx = Math.max(-1, Math.min(1, nx)) * rect.width * INTERACTIVE_PAN;
    motion.current.ty = Math.max(-1, Math.min(1, ny)) * rect.height * INTERACTIVE_PAN;
    start();
  };

  const onPointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    if (interactive) {
      motion.current.tx = 0;
      motion.current.ty = 0;
      start();
    }
    onPointerLeaveProp?.(event);
  };

  const image = (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={cn(
        "size-full object-cover object-[center_42%]",
        imgClassName,
      )}
    />
  );

  return (
    <div
      ref={wrapRef}
      onPointerEnter={onPointerEnter}
      onPointerMove={interactive ? onPointerMove : undefined}
      onPointerLeave={interactive || onPointerLeaveProp ? onPointerLeave : undefined}
      className={cn(
        "overflow-hidden [transform:translateZ(0)]",
        rounded && "rounded-photo",
        interactive && "relative",
        className,
      )}
    >
      {interactive ? (
        <div ref={liftRef} className="absolute -inset-[8%] will-change-transform">
          {image}
        </div>
      ) : (
        image
      )}
    </div>
  );
}
