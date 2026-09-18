import { ReadyCta } from "@/components/ready-cta";
import { SiteFooter } from "@/components/site-footer";

type LegalPageProps = {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
};

export function LegalPage({
  title,
  lastUpdated = "September 2026",
  children,
}: LegalPageProps) {
  return (
    <>
      <main id="main" className="bg-canvas">
        <article className="mx-auto max-w-content px-gutter pb-12 pt-28">
          <h1 className="font-display text-[clamp(32px,4.5vw,48px)] font-medium leading-[1.15] text-ink">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted">Last updated: {lastUpdated}</p>
          <div className="mt-10 flex max-w-[760px] flex-col gap-9 text-[15px] leading-[1.7] text-ink">
            {children}
          </div>
        </article>
        <ReadyCta />
      </main>
      <SiteFooter />
    </>
  );
}

export function LegalSection({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="flex flex-col gap-3 scroll-mt-24">
      <h2 className="font-display text-[18px] font-medium text-ink">{title}</h2>
      <div className="flex flex-col gap-3 text-muted [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-2 [&_a]:transition-opacity [&_a]:duration-tap [&_a]:hover:opacity-70 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
