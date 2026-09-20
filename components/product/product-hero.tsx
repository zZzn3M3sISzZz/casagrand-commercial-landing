"use client";

import { GoldButton } from "@/components/gold-button";
import { ParallaxFrame } from "@/components/parallax-frame";
import { ProductBack } from "@/components/product/product-back";
import { Reveal } from "@/components/reveal";
import { useEnquire } from "@/components/enquire-dialog";
import type { Project } from "@/lib/projects";

export function ProductHero({ project }: { project: Project }) {
  const { openEnquire } = useEnquire();

  return (
    <section className="px-4 pb-4 pt-28 sm:px-6 lg:px-4">
      <div className="mx-auto max-w-[1600px]">
        <ProductBack slug={project.slug} />
      </div>
      <Reveal when="load" className="mx-auto flex max-w-[1600px] flex-col items-center gap-[30px] text-center">
        <h1 className="font-display font-medium leading-[1.3] tracking-[-0.05em]">
          <span className="block text-[clamp(36px,4.2vw,72px)] text-[#0a0a0a]">
            {project.name}, {project.location.split(",")[0]}.
          </span>
          <span className="mt-1 block text-[clamp(28px,3.2vw,55px)] text-[#fcbb55]">
            {project.tagline}
          </span>
        </h1>
        <p className="max-w-[778px] font-satoshi text-[24px] font-medium leading-[1.5] tracking-[-0.01em] text-[#1b1b1b]">
          {project.summary}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <GoldButton
            href={project.mapsUrl}
            showArrow
            className="!h-14 !min-h-14 !rounded !px-6"
          >
            View Location
          </GoldButton>
          <GoldButton
            variant="outline"
            onClick={() => openEnquire(project.slug)}
            className="!h-14 !min-h-14 !rounded !border-[#fcbb55] !px-6"
          >
            Enquire Now
          </GoldButton>
        </div>
      </Reveal>

      <Reveal delay={1} className="mx-auto mt-10 max-w-[1696px] overflow-hidden rounded-[36px] bg-[#fff8ee] sm:mt-12">
        <ParallaxFrame
          src={project.heroImage}
          alt={`${project.name} commercial development`}
          width={1696}
          height={801}
          rounded={false}
          className="aspect-[1696/801] w-full"
          imgClassName="object-center"
        />
      </Reveal>
    </section>
  );
}
