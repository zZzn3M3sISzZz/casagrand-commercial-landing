import { GoldButton } from "@/components/gold-button";
import { ParallaxFrame } from "@/components/parallax-frame";
import { Reveal } from "@/components/reveal";

const ADVANTAGES = [
  {
    title: "Strategic Locations",
    body: "Positioned within established and emerging business corridors.",
  },
  {
    title: "Intelligent Planning",
    body: "Efficient layouts and floor plates created for different business requirements.",
  },
  {
    title: "Quality-Led Execution",
    body: "Dependable execution supported by experienced in-house teams.",
  },
  {
    title: "Future-Ready Design",
    body: "Modern building systems designed for evolving workplace requirements.",
  },
  {
    title: "People-First Spaces",
    body: "Wellness, dining and collaborative spaces that improve the workday.",
  },
  {
    title: "Flexible Spaces",
    body: "Office and retail formats designed for businesses of different scales.",
  },
  {
    title: "Seamless Connectivity",
    body: "Convenient access to major roads, airports, metros and business districts.",
  },
  {
    title: "Enduring Value",
    body: "Commercial destinations created with long-term growth in mind.",
  },
];

export function AboutAdvantage() {
  return (
    <section id="advantage" className="scroll-mt-24 bg-canvas px-gutter py-16 lg:py-[110px]">
      <div className="mx-auto max-w-page">
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[1180px]">
            <h2 className="font-display text-[clamp(36px,4vw,56px)] font-medium leading-[1.1] tracking-[-0.05em] text-[#0a0a0a]">
              Commercial Advantage.{" "}
              <span className="text-[#fcbb55]">Everything Business Needs.</span>
            </h2>
            <p className="mt-4 font-satoshi text-[24px] font-medium leading-[1.5] tracking-[-0.01em] text-[#1b1b1b]/70">
              Every Casagrand Commercial development combines location, planning,
              infrastructure and experience to help businesses perform today and
              grow tomorrow.
            </p>
          </div>
          <GoldButton href="#workplace" showArrow className="shrink-0 !rounded !px-4">
            Explore Our Advantage
          </GoldButton>
        </Reveal>

        <Reveal delay={1} className="mt-12 flex flex-col items-stretch gap-6 lg:flex-row lg:gap-6">
          <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
            {ADVANTAGES.map((item) => (
              <article
                key={item.title}
                className="flex min-h-[141px] flex-col justify-center rounded-lg border border-[#eaeaea] bg-white p-5"
              >
                <h3 className="font-satoshi text-[20px] font-bold leading-7 text-[#1b1b1b]">
                  {item.title}
                </h3>
                <p className="mt-1 font-satoshi text-[16px] font-normal leading-5 text-[#1b1b1b]/70">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <ParallaxFrame
            src="/images/about/advantage-interior.png"
            alt="Lounge seating in a Casagrand commercial interior"
            width={517}
            height={588}
            className="aspect-[517/588] w-full shrink-0 bg-[#f5f5f5] lg:w-[min(517px,36%)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
