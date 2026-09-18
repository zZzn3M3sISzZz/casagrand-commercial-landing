"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { ParallaxFrame } from "@/components/parallax-frame";
import { PROJECTS } from "@/lib/projects";
import { cn } from "@/lib/cn";

export function PortfolioCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const dragging = useRef<{ startX: number; startScroll: number } | null>(null);

  const go = useCallback((next: number) => {
    const node = scrollerRef.current;
    if (!node) return;
    const card = node.querySelector<HTMLElement>("[data-card]");
    const width = card ? card.offsetWidth + 24 : node.clientWidth * 0.8;
    const clamped = Math.max(0, Math.min(PROJECTS.length - 1, next));
    node.scrollTo({ left: clamped * width, behavior: "smooth" });
    setIndex(clamped);
  }, []);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;
    const onScroll = () => {
      const card = node.querySelector<HTMLElement>("[data-card]");
      const width = card ? card.offsetWidth + 24 : 1;
      setIndex(Math.round(node.scrollLeft / width));
    };
    node.addEventListener("scroll", onScroll, { passive: true });
    return () => node.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="portfolio"
      data-header-theme="dark"
      className="bg-charcoal py-20 text-white scroll-mt-24 sm:py-24"
    >
      <div className="mx-auto max-w-page px-gutter">
        <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-[clamp(32px,4.4vw,56px)] font-medium leading-[1.15]">
            Explore Our <span className="text-gold">Commercial Portfolio</span>
          </h2>
          <p className="max-w-[320px] text-[15px] leading-relaxed text-white/75">
            Eight distinctive destinations. One vision for better business.
          </p>
        </Reveal>

        <div
          ref={scrollerRef}
          className="mt-12 flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto pb-4 active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onPointerDown={(event) => {
            dragging.current = {
              startX: event.clientX,
              startScroll: scrollerRef.current?.scrollLeft ?? 0,
            };
          }}
          onPointerMove={(event) => {
            if (!dragging.current || !scrollerRef.current) return;
            scrollerRef.current.scrollLeft =
              dragging.current.startScroll - (event.clientX - dragging.current.startX);
          }}
          onPointerUp={() => {
            dragging.current = null;
          }}
          onPointerLeave={() => {
            dragging.current = null;
          }}
        >
          {PROJECTS.map((project) => (
            <article
              key={project.slug}
              id={`project-${project.slug}`}
              data-card
              className="w-[min(517px,82vw)] shrink-0 snap-start scroll-mt-28"
            >
              <ParallaxFrame
                src={project.image}
                alt={`${project.name} commercial development`}
                width={517}
                height={560}
                className="aspect-[517/560] w-full bg-[#d9d9d9]"
              />
              <h3 className="mt-5 text-[22px] font-normal text-white">{project.name}</h3>
              <p className="mt-1 text-[14px] text-white/65">{project.location}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex gap-2" role="tablist" aria-label="Portfolio slides">
            {PROJECTS.map((project, i) => (
              <button
                key={project.slug}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show ${project.name}`}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors duration-tap",
                  i === index ? "bg-gold" : "bg-white/25 hover:bg-white/50",
                )}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-opacity duration-tap hover:opacity-70"
              aria-label="Previous project"
              onClick={() => go(index - 1)}
            >
              <CaretLeft size={18} />
            </button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-opacity duration-tap hover:opacity-70"
              aria-label="Next project"
              onClick={() => go(index + 1)}
            >
              <CaretRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
