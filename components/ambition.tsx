import { ParallaxFrame } from "@/components/parallax-frame";
import { Reveal } from "@/components/reveal";

export function Ambition() {
  return (
    <section id="advantage" className="bg-canvas scroll-mt-24">
      <div className="mx-auto grid max-w-page items-center gap-12 px-gutter py-20 lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
        <Reveal>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium leading-[1.15] text-ink">
            Commercial Spaces
            <br />
            for <span className="text-gold">Every Ambition.</span>
          </h2>
          <p className="mt-4 text-[16px] text-muted">
            Work better. Connect more. Grow further.
          </p>
          <div className="mt-12 flex flex-col gap-8">
            <div>
              <h3 className="text-[16px] font-normal text-ink">
                Workspaces Built to Perform
              </h3>
              <p className="mt-2 max-w-[420px] text-[14px] leading-relaxed text-muted">
                Flexible floor plates, intelligent planning and modern
                infrastructure create efficient environments for businesses of
                every scale.
              </p>
            </div>
            <div>
              <h3 className="text-[16px] font-normal text-ink">
                Workdays Designed Around People
              </h3>
              <p className="mt-2 max-w-[420px] text-[14px] leading-relaxed text-muted">
                Wellness spaces, dining, collaboration zones and everyday
                conveniences create a more complete workplace experience.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <ParallaxFrame
            src="/assets/ambition-workspace.jpg"
            alt="Open office with hanging dome lights, a yellow indoor tree, and wooden desks with grey chairs"
            width={1001}
            height={760}
            className="aspect-[1001/760] max-w-[1001px] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
