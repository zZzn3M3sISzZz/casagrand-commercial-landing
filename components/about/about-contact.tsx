"use client";

import { ParallaxFrame } from "@/components/parallax-frame";
import { Reveal } from "@/components/reveal";

export function AboutContact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-canvas px-gutter py-16 lg:px-16 lg:py-20">
      <div className="mx-auto flex max-w-page flex-col items-start gap-12 lg:flex-row lg:items-stretch lg:justify-between">
        <Reveal className="w-full lg:w-[min(1001px,62%)]">
          <ParallaxFrame
            src="/images/about/contact-dropoff.png"
            alt="Arrival drive at a Casagrand commercial development"
            width={1001}
            height={760}
            className="aspect-[1001/760] w-full bg-[#f5f5f5]"
          />
        </Reveal>

        <Reveal delay={1} className="flex w-full max-w-[517px] flex-col justify-between gap-16 self-stretch">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[clamp(36px,4vw,56px)] font-medium leading-[1.1] tracking-[-0.05em] text-[#0a0a0a]">
              Contact Us.
              <span className="block text-[#fcbb55]">Let’s Talk Business.</span>
            </h2>
            <p className="font-satoshi text-[24px] font-medium leading-[1.5] tracking-[-0.01em] text-[#1b1b1b]/70">
              Whether you are establishing, expanding or investing, our
              commercial leasing team is ready to help you identify the right
              opportunity.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-satoshi text-[24px] font-bold leading-[1.5] tracking-[-0.01em] text-[#0a0a0a]">
                Commercial Leasing
              </h3>
              <p className="font-satoshi text-[18px] font-normal leading-normal text-[#1b1b1b]/70">
                Speak with our team about available office and retail spaces
                across Casagrand Commercial projects.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-satoshi text-[24px] font-bold leading-[1.5] tracking-[-0.01em] text-[#0a0a0a]">
                Schedule a Site Visit
              </h3>
              <p className="font-satoshi text-[18px] font-normal leading-normal text-[#1b1b1b]/70">
                Visit our developments, explore available spaces and experience
                each location in person.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
