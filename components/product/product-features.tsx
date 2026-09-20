import { Reveal } from "@/components/reveal";
import type { Project } from "@/lib/projects";

export function ProductFeatures({ project }: { project: Project }) {
  return (
    <section className="bg-[#fff8ee] px-gutter py-14 lg:px-[64px] lg:py-[52px] lg:pl-[116px]">
      <Reveal className="mx-auto grid max-w-page grid-cols-1 gap-x-5 gap-y-16 sm:grid-cols-2 xl:grid-cols-4 xl:gap-y-20">
        {project.features.map((feature) => (
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
