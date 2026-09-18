"use client";

import { GoldButton } from "@/components/gold-button";
import { PROJECTS } from "@/lib/projects";

export function AddressHero() {
  const featured = PROJECTS.slice(0, 2);

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-page px-gutter py-4 sm:py-6">
        <div
          data-header-theme="dark"
          className="relative isolate overflow-hidden rounded-photo bg-charcoal text-white [transform:translateZ(0)]"
        >
          <div className="absolute inset-0">
            <img
              src="/images/building-dusk.jpg"
              alt=""
              width={2400}
              height={1400}
              className="size-full object-cover opacity-70 media-kenburns"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/20" />
          </div>
          <div className="relative grid gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-16 lg:py-28">
            <div>
              <h2 className="font-display text-[clamp(36px,4.6vw,64px)] leading-[1.12] text-gold">
                An Address That
                <br />
                Means Business.
              </h2>
              <p className="mt-5 max-w-[460px] text-[16px] leading-[1.7] text-white/85">
                Discover a premium commercial destination where architectural
                presence, strategic connectivity and business possibilities come
                together.
              </p>
              <div className="mt-10 flex flex-col gap-5">
                {featured.map((project) => (
                  <article
                    key={project.slug}
                    className="rounded-sm border border-white/15 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <h3 className="text-[16px] font-semibold">{project.name}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-white/75">
                      {project.summary}
                    </p>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.12em] text-white/55">
                      {project.specs}
                    </p>
                    <GoldButton href={`/#project-${project.slug}`} showArrow className="mt-4">
                      Explore
                    </GoldButton>
                  </article>
                ))}
              </div>
            </div>
            <div className="hidden min-h-[420px] lg:block" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
