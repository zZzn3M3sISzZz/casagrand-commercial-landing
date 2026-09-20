import { ReadyCta } from "@/components/ready-cta";
import { SiteFooter } from "@/components/site-footer";

type LegalPageProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <>
      <main id="main" className="bg-canvas">
        <article className="bg-gradient-to-b from-[#f5f5f5] to-transparent px-gutter pb-[60px] pt-[160px] lg:pt-[240px]">
          <div className="mx-auto flex w-full max-w-[1471px] flex-col gap-8">
            <h1 className="font-display text-[clamp(40px,5vw,72px)] font-medium leading-[1.1] tracking-[-0.05em] text-[#0a0a0a]">
              {title}
            </h1>
            <div className="flex flex-col gap-8 font-satoshi text-[24px] font-medium leading-[1.5] tracking-[-0.01em] text-[#1b1b1b] [&_a]:underline [&_a]:underline-offset-4 [&_a]:transition-opacity [&_a]:duration-tap [&_a]:hover:opacity-70 [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-9">
              {children}
            </div>
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
    <section id={id} className="flex flex-col gap-8 scroll-mt-24">
      <h2 className="font-display text-[clamp(28px,3.5vw,40px)] font-medium leading-[1.1] tracking-[-0.05em] text-[#0a0a0a]">
        {title}
      </h2>
      <div className="flex flex-col gap-6">{children}</div>
    </section>
  );
}
