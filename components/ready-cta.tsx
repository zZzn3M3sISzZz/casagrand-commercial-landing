"use client";

import { GoldButton } from "@/components/gold-button";
import { Reveal } from "@/components/reveal";
import { useEnquire } from "@/components/enquire-dialog";

export function ReadyCta() {
  const { openEnquire } = useEnquire();

  return (
    <section>
      <div className="bg-canvas">
        <Reveal className="mx-auto grid max-w-page items-center gap-10 px-gutter py-16 lg:grid-cols-2 lg:py-20">
          <h2 className="font-display text-[clamp(32px,4.2vw,56px)] font-medium leading-[1.15] text-ink">
            Ready to find the <span className="text-gold">right space for your business?</span>
          </h2>
          <div>
            <p className="text-[16px] leading-relaxed text-muted">
              Casagrand Commercial creates thoughtfully planned office and retail
              destinations for businesses ready to grow.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              Explore our portfolio or connect with our leasing team to discover
              the space that aligns with your ambition.
            </p>
            <GoldButton showArrow className="mt-8" onClick={openEnquire}>
              Enquire Now
            </GoldButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
