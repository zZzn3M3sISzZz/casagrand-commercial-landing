"use client";

import { GoldButton } from "@/components/gold-button";
import { Reveal } from "@/components/reveal";
import { useEnquire } from "@/components/enquire-dialog";

const STATS = [
  { value: "8 COMMERCIAL", label: "PROJECTS" },
  { value: "STRATEGIC", label: "LOCATIONS" },
  { value: "FUTURE-READY", label: "SPACES" },
];

export function Hero() {
  const { openEnquire } = useEnquire();

  return (
    <section className="bg-canvas pt-16">
      <div className="mx-auto flex max-w-page flex-col items-center justify-center px-gutter pb-10 pt-10 text-center sm:pb-14 sm:pt-16">
        <Reveal when="load">
          <h1 className="font-display text-[clamp(36px,5.4vw,72px)] font-medium leading-[1.12] tracking-[-0.02em] text-ink">
            Spaces Built for Business.
            <span className="mt-1 block text-gold">Designed for What’s Next.</span>
          </h1>
        </Reveal>
        <Reveal when="load" delay={1}>
          <p className="mx-auto mt-6 max-w-[640px] text-[17px] leading-[1.6] text-ink sm:text-[18px]">
            A curated portfolio of commercial developments created for ambitious
            businesses, progressive brands and long-term investors.
          </p>
        </Reveal>
        <Reveal when="load" delay={2} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <GoldButton href="/#portfolio" showArrow>
            Explore Our Projects
          </GoldButton>
          <GoldButton variant="outline" onClick={openEnquire}>
            Enquire Now
          </GoldButton>
        </Reveal>
        <Reveal when="load" delay={3} className="mt-12 flex w-full max-w-[720px] flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-2">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-center gap-3 text-center"
            >
              <img
                src="/assets/bracket-open.png"
                alt=""
                width={28}
                height={94}
                className="h-[52px] w-[16px] object-contain"
              />
              <p className="min-w-[120px] text-[12px] font-normal uppercase leading-[1.35] tracking-[0.08em] text-ink">
                {stat.value}
                <br />
                {stat.label}
              </p>
              <img
                src="/assets/bracket-close.png"
                alt=""
                width={28}
                height={94}
                className="h-[52px] w-[16px] object-contain"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
