import { Reveal } from "@/components/reveal";

const FEATURES = [
  {
    title: "7 Commercial Projects",
    body: "A growing portfolio of office and retail destinations",
  },
  {
    title: "Strategic Locations",
    body: "Across established and emerging business corridors",
  },
  {
    title: "Flexible Spaces",
    body: "Designed for different business requirements",
  },
  {
    title: "Future-Ready Design",
    body: "Modern environments planned for lasting growth",
  },
];

export function AboutFeatures() {
  return (
    <section className="bg-canvas px-gutter py-16 lg:px-[64px] lg:py-[100px] lg:pl-[116px]">
      <Reveal className="mx-auto grid max-w-page grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
        {FEATURES.map((feature) => (
          <article key={feature.title} className="flex max-w-[380px] flex-col gap-2">
            <h3 className="font-satoshi text-[24px] font-bold leading-[1.5] tracking-[-0.01em] text-[#0a0a0a]">
              {feature.title}
            </h3>
            <p className="font-satoshi text-[18px] font-medium leading-[1.5] tracking-[-0.01em] text-[#1b1b1b]/70">
              {feature.body}
            </p>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
