import { ParallaxFrame } from "@/components/parallax-frame";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/lib/projects";

export function ProductHero({ project }: { project: Project }) {
  return (
    <section className="px-4 pb-4 pt-28 sm:px-6 lg:px-4">
      <Reveal when="load" className="mx-auto max-w-[1600px] text-center">
        <h1 className="font-display font-medium leading-[1.3] tracking-[-0.05em]">
          <span className="block text-[clamp(36px,4.2vw,72px)] text-[#0a0a0a]">
            {project.name}, {project.location.split(",")[0]}.
          </span>
          <span className="mt-1 block text-[clamp(28px,3.2vw,55px)] text-[#fcbb55]">
            {project.tagline}
          </span>
        </h1>
      </Reveal>

      <Reveal delay={1} className="mx-auto mt-10 max-w-[1696px] overflow-hidden rounded-[36px] bg-[#fff8ee] sm:mt-12">
        <ParallaxFrame
          src={project.image}
          alt={`${project.name} commercial development`}
          width={1696}
          height={801}
          rounded={false}
          className="aspect-[1696/801] w-full"
          imgClassName="object-center"
        />
      </Reveal>
    </section>
  );
}
