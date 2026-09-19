import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductFeatures } from "@/components/product/product-features";
import { ProductHero } from "@/components/product/product-hero";
import { ProductNext } from "@/components/product/product-next";
import { ProductPerform } from "@/components/product/product-perform";
import { ProductWorkplace } from "@/components/product/product-workplace";
import { SiteFooter } from "@/components/site-footer";
import { PROJECTS, getProject } from "@/lib/projects";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Project" };
  return {
    title: project.name,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <>
      <main id="main">
        <ProductHero project={project} />
        <ProductWorkplace project={project} />
        <ProductFeatures project={project} />
        <ProductPerform project={project} />
        <ProductNext project={project} />
      </main>
      <SiteFooter />
    </>
  );
}
