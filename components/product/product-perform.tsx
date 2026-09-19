import { ParallaxFrame } from "@/components/parallax-frame";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/lib/projects";

export function ProductPerform({ project }: { project: Project }) {
  return (
    <section className="bg-canvas px-gutter py-20 lg:px-16 lg:py-[120px]">
      <div className="mx-auto flex max-w-page flex-col items-start gap-12 lg:flex-row lg:gap-[87px]">
        <Reveal className="w-full lg:w-[min(792px,54%)]">
          <ParallaxFrame
            src={project.performImage}
            alt={`${project.name} interior`}
            width={792}
            height={696}
            className="aspect-[792/696] w-full bg-[#f5f5f5]"
          />
        </Reveal>

        <Reveal delay={1} className="flex w-full max-w-[517px] flex-col justify-between gap-16 self-stretch lg:min-h-[696px]">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[clamp(36px,4vw,56px)] font-medium leading-[1.1] tracking-[-0.05em] text-[#0a0a0a]">
              Space to Perform.
              <span className="text-[#fcbb55]">
                <br />
                Room to Thrive.
              </span>
            </h2>
            <p className="font-satoshi text-[24px] font-medium leading-[1.5] tracking-[-0.01em] text-[#1b1b1b]/70">
              {project.performSubtitle}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {project.performOptions.map((option) => (
              <div key={option.title} className="flex flex-col gap-2">
                <h3 className="font-satoshi text-[24px] font-bold leading-[1.5] tracking-[-0.01em] text-[#0a0a0a]">
                  {option.title}
                </h3>
                <p className="font-satoshi text-[18px] font-normal leading-normal text-[#1b1b1b]/70">
                  {option.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
