import { GoldButton } from "@/components/gold-button";
import { Reveal } from "@/components/reveal";

export function AboutHero() {
  return (
    <section className="bg-canvas px-gutter pb-12 pt-28 sm:pb-16 sm:pt-32">
      <Reveal when="load" className="mx-auto flex max-w-[938px] flex-col items-center gap-8 text-center">
        <h1 className="font-display text-[clamp(40px,5vw,72px)] font-medium leading-[1.1] tracking-[-0.05em]">
          <span className="text-[#0a0a0a]">Built for Business.</span>
          <span className="block text-[#fcbb55]">Backed by Experience.</span>
        </h1>
        <p className="max-w-[899px] font-satoshi text-[24px] font-medium leading-[1.5] tracking-[-0.01em] text-[#1b1b1b]">
          Discover the experience behind Casagrand Commercial, the advantages
          built into every development and the team ready to help you find your
          next business address.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <GoldButton href="#about" showArrow className="!h-14 !min-h-14 !rounded !px-6">
            About Us
          </GoldButton>
          <GoldButton
            href="#advantage"
            variant="outline"
            className="!h-14 !min-h-14 !rounded !border-[#fcbb55] !px-6"
          >
            Commercial Advantage
          </GoldButton>
        </div>
      </Reveal>
    </section>
  );
}
