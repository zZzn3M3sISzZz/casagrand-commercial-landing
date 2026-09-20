"use client";

import { useState } from "react";
import { ParallaxFrame } from "@/components/parallax-frame";
import { Reveal } from "@/components/reveal";

const PHOTO_COLS = ["1fr 1fr 1fr", "1.22fr 0.89fr 0.89fr", "0.89fr 1.22fr 0.89fr", "0.89fr 0.89fr 1.22fr"] as const;

const AMENITIES = [
  {
    title: "",
    body: "Thoughtful amenities designed to improve productivity, well-being and everyday convenience.",
  },
  {
    title: "Wellness & Fitness",
    body: "Gyms, yoga areas, sports amenities and dedicated wellness spaces.",
  },
  {
    title: "Food & Social Spaces",
    body: "Modern cafés, food courts, common dining areas and informal gathering spaces.",
  },
  {
    title: "Meet & Collaborate",
    body: "Conference rooms, shared spaces and outdoor seating created for meaningful interaction.",
  },
  {
    title: "Everyday Convenience",
    body: "EV charging, organised parking, valet services and ambulance support.",
  },
  {
    title: "Green & Open Spaces",
    body: "Landscaped and biophilic environments created for healthier workdays.",
  },
];

const PHOTOS = [
  {
    src: "/images/about/workplace-yoga.png",
    alt: "Person practising yoga on a mat outdoors",
  },
  {
    src: "/images/about/workplace-cycle.png",
    alt: "Cyclist riding along an open path",
  },
  {
    src: "/images/about/workplace-run.png",
    alt: "Runner on a landscaped path",
  },
];

export function AboutWorkplace() {
  const [hovered, setHovered] = useState<number | null>(null);
  const photoCols = PHOTO_COLS[hovered === null ? 0 : hovered + 1];

  return (
    <section
      id="workplace"
      data-header-theme="dark"
      className="scroll-mt-24 bg-[#161616] px-gutter py-20 text-white lg:px-16 lg:py-[120px]"
    >
      <div className="mx-auto max-w-page">
        <Reveal>
          <h2 className="max-w-[670px] font-display text-[clamp(36px,4vw,56px)] font-medium leading-[1.1] tracking-[-0.05em]">
            More Than a Workplace.
            <span className="block text-[#fcbb55]"> Built Around People.</span>
          </h2>
        </Reveal>

        <Reveal delay={1} className="mt-16 flex flex-col items-stretch gap-8 xl:flex-row xl:items-center xl:gap-4">
          <div className="flex w-full max-w-[460px] flex-col">
            {AMENITIES.map((item) => (
              <div key={item.body} className="border-t border-white/10 py-8 first:border-t-0 first:pt-0">
                <p className="font-satoshi text-[18px] font-medium leading-normal text-white">
                  {item.title ? `${item.title} — ${item.body}` : item.body}
                </p>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>

          <div
            className="grid flex-1 grid-cols-1 gap-4 sm:h-[min(640px,68vh)] sm:grid-cols-[var(--photo-cols)] sm:transition-[grid-template-columns] sm:duration-500 sm:ease-out"
            style={{ ["--photo-cols" as string]: photoCols }}
          >
            {PHOTOS.map((photo, index) => (
              <ParallaxFrame
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={378}
                height={648}
                interactive
                className="workplace-photo aspect-[378/648] min-w-0 w-full bg-[#161616] sm:aspect-auto sm:h-full"
                onPointerEnter={() => setHovered(index)}
                onPointerLeave={(event) => {
                  const next = event.relatedTarget as Node | null;
                  if (next && event.currentTarget.parentElement?.contains(next)) return;
                  setHovered(null);
                }}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
