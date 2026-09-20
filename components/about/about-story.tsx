import { GoldButton } from "@/components/gold-button";
import { Reveal } from "@/components/reveal";

const STATS = [
  {
    title: "22+ Years of Experience",
    body: "More than two decades of experience creating meaningful spaces and enduring landmarks.",
    label: "A Legacy Built on Experience",
    href: "#legacy",
    cta: "Our Journey",
  },
  {
    title: "180+ Landmarks",
    body: "A growing portfolio of developments created across cities, communities and diverse real estate segments.",
    label: "Landmarks Created for the Future",
    href: "https://www.casagrand.co.in",
    cta: "Know More",
  },
];

export function AboutStory() {
  return (
    <section
      id="about"
      data-header-theme="dark"
      className="relative min-h-[720px] scroll-mt-24 overflow-hidden text-white lg:min-h-[900px]"
    >
      <img
        src="/images/about/story-paragon.jpg"
        alt="Casagrand The Paragon at night"
        className="absolute inset-0 size-full object-cover object-[center_40%]"
      />
      <div className="relative ml-auto flex min-h-[720px] w-full max-w-[789px] flex-col justify-center bg-black/80 px-6 py-16 sm:px-10 lg:min-h-[900px] lg:px-16 lg:py-20">
        <Reveal className="flex w-full max-w-[653px] flex-col gap-12 lg:gap-[72px]">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[clamp(36px,4vw,56px)] font-medium leading-[1.1] tracking-[-0.05em]">
              About Us.
              <span className="block text-[#fcbb55]">A Legacy Built for Business.</span>
            </h2>
            <p className="font-satoshi text-[24px] font-medium leading-[1.5] tracking-[-0.01em] text-white/70">
              Established in 2003, Casagrand has grown into one of India’s
              leading real estate developers, creating recognised landmarks
              across major Indian cities and Dubai.
            </p>
            <p className="font-satoshi text-[24px] font-medium leading-[1.5] tracking-[-0.01em] text-white/70">
              Casagrand Commercial carries this experience forward through
              thoughtfully planned office and retail destinations that bring
              together strategic locations, intelligent design, modern
              infrastructure and dependable execution.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {STATS.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-6 rounded-lg border border-white/16 p-6 sm:p-8"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="font-satoshi text-[24px] font-bold leading-[1.5] tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <p className="font-satoshi text-[18px] font-normal leading-normal text-[#f5f5f5]/70">
                    {item.body}
                  </p>
                  <p className="font-satoshi text-[10px] font-bold uppercase tracking-[0.1em] text-white/70">
                    {item.label}
                  </p>
                </div>
                <GoldButton
                  href={item.href}
                  showArrow
                  className="!h-8 !min-h-8 w-fit !rounded !px-2 !py-1 !text-[14px]"
                >
                  {item.cta}
                </GoldButton>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
