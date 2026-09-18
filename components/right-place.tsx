import { MediaFrame } from "@/components/media-frame";
import { Reveal } from "@/components/reveal";

export function RightPlace() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto grid max-w-page items-center gap-10 px-gutter py-16 lg:grid-cols-[0.9fr_1.1fr_0.9fr] lg:py-24">
        <Reveal>
          <h2 className="font-display text-[clamp(32px,3.6vw,48px)] leading-[1.15] text-ink">
            Put Your Business
            <span className="block text-gold">in the Right Place.</span>
          </h2>
          <p className="mt-5 max-w-[360px] text-[15px] leading-relaxed text-muted">
            Whether you are establishing, expanding or investing, discover a
            Casagrand commercial space aligned with your next move.
          </p>
        </Reveal>
        <Reveal delay={1}>
          <MediaFrame
            src="/images/conference.jpg"
            alt="Long conference table in a Casagrand commercial workspace with yellow chairs and hanging plants"
            width={1200}
            height={1500}
            className="aspect-[3/4] w-full"
          />
        </Reveal>
        <Reveal delay={2} className="flex flex-col gap-10">
          <div>
            <h3 className="text-[16px] font-semibold text-ink">Built for Businesses</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">
              Flexible office and retail spaces designed around different
              operational needs and growth ambitions.
            </p>
          </div>
          <div className="border-t border-line pt-8">
            <h3 className="text-[16px] font-semibold text-ink">Positioned for Growth</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">
              Strategic locations, modern infrastructure and thoughtfully planned
              environments that support long-term business potential.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
