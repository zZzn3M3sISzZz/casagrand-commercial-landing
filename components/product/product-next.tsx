"use client";

import { GoldButton } from "@/components/gold-button";
import { Reveal } from "@/components/reveal";
import { useEnquire } from "@/components/enquire-dialog";
import type { Project } from "@/lib/projects";

export function ProductNext({ project }: { project: Project }) {
  const { openEnquire } = useEnquire();

  return (
    <section className="bg-canvas px-gutter pb-20 lg:px-16 lg:pl-[137px] lg:pb-8">
      <Reveal className="mx-auto flex max-w-page flex-col items-start gap-10 py-12 lg:flex-row lg:items-center lg:gap-12 lg:py-[67px]">
        <h2 className="font-display w-full max-w-[774px] text-[clamp(40px,4vw,69px)] font-medium leading-[1.1] tracking-[-0.05em] text-[#0a0a0a]">
          Your Next Chapter.
          <span className="text-[#fdbf5b]">
            <br />
            At {project.name}.
          </span>
        </h2>

        <div className="flex w-full max-w-[658px] flex-col items-start gap-8">
          <div className="font-satoshi text-[24px] font-medium leading-[1.5] tracking-[-0.01em] text-[#1b1b1b]/70">
            <p>{project.nextCopy[0]}</p>
            <p className="mt-6">{project.nextCopy[1]}</p>
          </div>
          <GoldButton
            showArrow
            onClick={() => openEnquire(project.slug)}
            className="!h-14 !min-h-14 !rounded !px-6"
          >
            Enquire Now
          </GoldButton>
        </div>
      </Reveal>
    </section>
  );
}
