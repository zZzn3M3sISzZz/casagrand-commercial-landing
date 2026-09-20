"use client";

import { GoldButton } from "@/components/gold-button";
import { Reveal } from "@/components/reveal";
import { useEnquire } from "@/components/enquire-dialog";

export function AboutLegacy() {
  const { openEnquire } = useEnquire();

  return (
    <section id="legacy" className="scroll-mt-24 bg-[#f6f6f6] px-gutter py-16 lg:px-16 lg:pl-[137px] lg:py-[90px]">
      <Reveal className="mx-auto flex max-w-page flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-12">
        <h2 className="w-full max-w-[774px] font-display text-[clamp(40px,4vw,69px)] font-medium leading-[1.1] tracking-[-0.05em] text-[#0a0a0a]">
          Discover the Legacy
          <span className="block text-[#fdbf5b]">Behind Every Landmark.</span>
        </h2>
        <div className="flex w-full max-w-[658px] flex-col items-start gap-8">
          <p className="font-satoshi text-[24px] font-medium leading-[1.5] tracking-[-0.01em] text-[#1b1b1b]/70">
            Share your requirements with our commercial team and discover an
            office or retail space aligned with your next stage of growth.
          </p>
          <GoldButton showArrow onClick={openEnquire} className="!h-14 !min-h-14 !rounded !px-6">
            Enquire Now
          </GoldButton>
        </div>
      </Reveal>
    </section>
  );
}
