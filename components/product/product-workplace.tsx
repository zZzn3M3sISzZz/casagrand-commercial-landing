import { ParallaxFrame } from "@/components/parallax-frame";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/lib/projects";

export function ProductWorkplace({ project }: { project: Project }) {
  return (
    <section className="bg-canvas px-gutter pb-[70px] pt-[80px] lg:pt-[120px]">
      <div className="mx-auto flex max-w-page flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-[72px] xl:gap-[110px]">
        <Reveal className="w-full shrink-0 lg:w-[352px]">
          <h2 className="font-display text-[clamp(36px,4vw,56px)] font-medium leading-[1.1] tracking-[-0.05em] text-[#0a0a0a]">
            {project.workplaceTitle[0]}
            <span className="text-[#fcbb55]">
              <br />
              {project.workplaceTitle[1]}
            </span>
          </h2>
        </Reveal>

        <Reveal delay={1} className="flex w-full max-w-[460px] flex-col gap-8">
          <p className="font-satoshi text-[18px] font-medium leading-normal text-[#1b1b1b]">
            {project.intro}
          </p>
          {project.highlights.map((item) => (
            <div key={item.title} className="border-t border-black/10 pt-8">
              <p className="font-satoshi text-[18px] font-medium leading-normal text-[#1b1b1b]">
                {item.title}{" "}
                <span className="font-medium">{item.body}</span>
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={2} className="w-full lg:ml-auto lg:max-w-[516px]">
          <ParallaxFrame
            src={project.workplaceImage}
            alt={`${project.name} workplace`}
            width={516}
            height={648}
            className="aspect-[516/648] w-full bg-[#f5f5f5]"
          />
        </Reveal>
      </div>
    </section>
  );
}
