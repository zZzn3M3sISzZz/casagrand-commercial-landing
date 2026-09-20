import type { Metadata } from "next";
import { AboutAdvantage } from "@/components/about/about-advantage";
import { AboutContact } from "@/components/about/about-contact";
import { AboutDetails } from "@/components/about/about-details";
import { AboutFeatures } from "@/components/about/about-features";
import { AboutHero } from "@/components/about/about-hero";
import { AboutLegacy } from "@/components/about/about-legacy";
import { AboutStory } from "@/components/about/about-story";
import { AboutWorkplace } from "@/components/about/about-workplace";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the experience behind Casagrand Commercial — the advantages built into every development and the team ready to help you find your next business address.",
};

export default function AboutPage() {
  return (
    <>
      <main id="main">
        <AboutHero />
        <AboutStory />
        <AboutAdvantage />
        <AboutWorkplace />
        <AboutFeatures />
        <AboutContact />
        <AboutDetails />
        <AboutLegacy />
      </main>
      <SiteFooter />
    </>
  );
}
