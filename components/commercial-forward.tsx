"use client";

import { ParallaxFrame } from "@/components/parallax-frame";
import { Reveal } from "@/components/reveal";

export function HeroImage() {
  return (
    <section aria-label="Casagrand commercial destination" className="bg-canvas">
      <div className="mx-auto max-w-page px-gutter pb-4">
        <ParallaxFrame
          src="/assets/hero-home.jpg"
          alt="Sunset view of a Casagrand commercial tower entrance with a sculpted canopy and glass facade"
          width={1330}
          height={760}
          priority
          className="mx-auto aspect-[1330/760] h-auto w-full max-w-[1330px]"
          imgClassName="object-center"
        />
      </div>
    </section>
  );
}

export function CommercialForward() {
  return (
    <section id="about" className="bg-canvas scroll-mt-24">
      <div className="mx-auto max-w-page px-gutter py-20 sm:py-28">
        <Reveal className="mx-auto max-w-[880px] text-center">
          <h2 className="font-display text-[clamp(32px,4.2vw,56px)] font-medium leading-[1.15] text-ink">
            Commercial spaces that
            <span className="block text-gold">move business forward.</span>
          </h2>
          <p className="font-satoshi mx-auto mt-6 text-[24px] font-medium leading-[1.7] text-muted">
            <span className="whitespace-nowrap max-md:whitespace-normal">
              From intelligent planning and modern infrastructure to strategic
              locations, every
            </span>
            <br />
            Casagrand commercial development is created to support lasting
            business growth.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:divide-x sm:divide-line">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-[0.16em] text-ink">
                Chennai &amp; Coimbatore
              </p>
              <p className="mt-2 text-[12px] uppercase tracking-[0.12em] text-muted">
                Strategic commercial locations
              </p>
            </div>
            <div>
              <p className="text-[13px] font-normal uppercase tracking-[0.16em] text-ink">
                Grade-A &amp; Certified
              </p>
              <p className="mt-2 text-[12px] uppercase tracking-[0.12em] text-muted">
                IGBC, LEED and WELL across select projects
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
