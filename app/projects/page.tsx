import type { Metadata } from "next";
import { ParallaxFrame } from "@/components/parallax-frame";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { PROJECTS, projectHref } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Casagrand Commercial destinations — office and retail environments planned for ambitious businesses.",
};

export default function ProjectsPage() {
  return (
    <>
      <main id="main">
        <section
          id="portfolio"
          data-header-theme="dark"
          className="bg-charcoal pb-20 pt-28 text-white sm:pb-24 sm:pt-32"
        >
          <div className="mx-auto max-w-page px-gutter">
            <Reveal when="load" className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <h1 className="font-display text-[clamp(32px,4.4vw,56px)] font-medium leading-[1.15]">
                Explore Our <span className="text-gold">Commercial Portfolio</span>
              </h1>
              <p className="max-w-[320px] text-[15px] leading-relaxed text-white/75">
                Seven distinctive destinations. One vision for better business.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {PROJECTS.map((project) => (
                <Reveal key={project.slug}>
                  <a href={projectHref(project.slug)} className="group block">
                    <ParallaxFrame
                      src={project.image}
                      alt={`${project.name} commercial development`}
                      width={517}
                      height={560}
                      className="aspect-[517/560] w-full bg-[#d9d9d9]"
                    />
                    <h2 className="mt-5 text-[22px] font-normal text-white group-hover:opacity-80">
                      {project.name}
                    </h2>
                    <p className="mt-1 text-[14px] text-white/65">{project.location}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
