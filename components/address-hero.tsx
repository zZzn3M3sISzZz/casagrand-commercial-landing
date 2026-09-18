"use client";

import { GoldButton } from "@/components/gold-button";
import { ParallaxFrame } from "@/components/parallax-frame";
import { PROJECTS } from "@/lib/projects";

export function AddressHero() {
  const featured = PROJECTS.slice(0, 2);

  return (
    <section data-header-theme="dark" className="relative w-full text-white">
      <div className="relative w-full min-h-min lg:aspect-[1728/1025]">
        <ParallaxFrame
          src="/assets/address-business.jpg"
          alt="Dusk view of a Casagrand commercial building along a city boulevard"
          width={1728}
          height={1025}
          rounded={false}
          className="absolute inset-0 size-full"
          imgClassName="object-center"
        />

        <div className="relative z-10 grid h-full lg:grid-cols-[minmax(0,45.65%)_minmax(0,1fr)]">
          <div className="flex h-full flex-col justify-center bg-black/70 px-6 py-10 sm:px-10 lg:justify-start lg:bg-black/80 lg:px-[clamp(24px,3.7vw,64px)] lg:py-[clamp(32px,4.5vw,64px)]">
            <div className="flex w-full max-w-[653px] flex-col gap-6 lg:h-full lg:justify-between lg:gap-8">
              <div className="flex flex-col gap-3 lg:gap-4">
                <h2 className="font-display text-[clamp(28px,3.24vw,56px)] font-medium leading-[1.1] tracking-[-0.05em] text-[#fcbb55]">
                  An Address That
                  <br />
                  Means Business.
                </h2>
                <p className="font-satoshi max-w-[640px] text-[24px] font-normal leading-[1.5] tracking-[-0.01em] text-white/70">
                  Discover a premium commercial destination where architectural
                  presence, strategic connectivity and business possibilities come
                  together.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:gap-4">
                {featured.map((project) => (
                  <article
                    key={project.slug}
                    className="flex flex-col gap-3 rounded-lg border border-white/15 p-4 lg:gap-4 lg:p-5"
                  >
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-satoshi text-[24px] font-bold tracking-[-0.01em]">
                        {project.name}
                      </h3>
                      <p className="font-satoshi text-[18px] font-normal leading-[1.5] text-[#f5f5f5]/70">
                        {project.summary}
                      </p>
                      <p className="text-[10px] font-normal uppercase tracking-[0.1em] text-white/70">
                        {project.specs}
                      </p>
                    </div>
                    <GoldButton
                      href={`/#project-${project.slug}`}
                      showArrow
                      className="!h-8 !min-h-8 w-fit !rounded !px-2 !py-1"
                    >
                      Explore
                    </GoldButton>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:block" aria-hidden />
        </div>
      </div>
    </section>
  );
}
