"use client";

import { useState } from "react";
import { Minus, Plus } from "@phosphor-icons/react";
import { GoldButton } from "@/components/gold-button";
import { Reveal } from "@/components/reveal";

const STEPS = [
  {
    title: "Explore",
    body: "Browse our complete portfolio of office and retail developments.",
  },
  {
    title: "Compare",
    body: "Review locations, specifications, amenities and commercial formats.",
  },
  {
    title: "Experience",
    body: "Schedule a visit and explore the development in person.",
  },
  {
    title: "Select",
    body: "Choose the commercial space that aligns with your business requirements.",
  },
];

export function Steps() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-canvas">
      <div className="mx-auto grid max-w-page items-start gap-12 px-gutter py-16 lg:grid-cols-[1fr_0.9fr] lg:py-24">
        <Reveal>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium leading-[1.15] text-ink">
            Find the Right Space
            <br />
            in a Few Steps.
          </h2>
          <div className="mt-10 max-w-[700px]">
            {STEPS.map((step, index) => {
              const isOpen = open === index;
              return (
                <div key={step.title} className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? -1 : index)}
                    >
                      <span className="text-[18px] font-normal text-ink">
                        {step.title}
                      </span>
                      {isOpen ? (
                        <Minus size={18} aria-hidden />
                      ) : (
                        <Plus size={18} aria-hidden />
                      )}
                    </button>
                  </h3>
                  <div
                    className="accordion-body"
                    data-open={isOpen}
                    aria-hidden={!isOpen}
                  >
                    <div>
                      <p className="pb-4 text-[14px] leading-relaxed text-muted">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-8 max-w-[420px] text-[14px] leading-relaxed text-muted">
            From first enquiry to keys in hand, our team helps you evaluate,
            visit and secure the space that fits your business.
          </p>
          <GoldButton href="/#portfolio" showArrow className="mt-6">
            Explore All Projects
          </GoldButton>
        </Reveal>
        <Reveal
          delay={1}
          className="relative min-h-[280px] overflow-visible bg-transparent lg:sticky lg:top-28 lg:min-h-[560px] lg:self-start"
        >
          <img
            src="/assets/logo-find-space.png"
            alt=""
            width={1024}
            height={1023}
            className="ml-auto aspect-square h-auto w-full max-w-[560px] bg-transparent object-contain object-right lg:absolute lg:right-0 lg:top-0 lg:max-w-none lg:w-[min(100%,580px)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
