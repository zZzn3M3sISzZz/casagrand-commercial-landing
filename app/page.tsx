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
      </main>
      <SiteFooter />
    </>
  );
}
