import { Ambition } from "@/components/ambition";
import { AddressHero } from "@/components/address-hero";
import { CommercialForward, HeroImage } from "@/components/commercial-forward";
import { Hero } from "@/components/hero";
import { PortfolioCarousel } from "@/components/portfolio-carousel";
import { ReadyCta } from "@/components/ready-cta";
import { RightPlace } from "@/components/right-place";
import { SiteFooter } from "@/components/site-footer";
import { Steps } from "@/components/steps";
import { Workspaces } from "@/components/workspaces";

export default function HomePage() {
  return (
    <>
      <main id="main">
        <Hero />
        <HeroImage />
        <CommercialForward />
        <PortfolioCarousel />
        <Workspaces />
        <AddressHero />
        <Ambition />
        <Steps />
        <RightPlace />
        <ReadyCta />
        <img
          src="/assets/ready-space-band.png"
          alt="Casagrand commercial facade with the gold brand mark cut through the sky"
          width={1024}
          height={740}
          className="block h-auto w-full bg-transparent object-contain object-top"
        />
      </main>
      <SiteFooter />
    </>
  );
}
