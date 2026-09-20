import { Reveal } from "@/components/reveal";

const DETAILS = [
  { label: "Phone", value: "+91 90473 75555", href: "tel:+919047375555" },
  { label: "Email", value: "leasing@casagrand.co.in", href: "mailto:leasing@casagrand.co.in" },
  { label: "Website", value: "www.casagrand.co.in", href: "https://www.casagrand.co.in" },
  {
    label: "Corporate Office",
    value: "5th Floor, NPL Devi, New No. 111, Old No. 59, L.B. Road, Thiruvanmiyur, Chennai – 600041",
  },
];

export function AboutDetails() {
  return (
    <section className="bg-canvas px-gutter pb-16 lg:px-16 lg:pb-20">
      <Reveal className="mx-auto flex max-w-page flex-col items-start justify-between gap-16 lg:flex-row lg:items-center">
        <div className="flex w-full max-w-[517px] flex-col">
          {DETAILS.map((item) => (
            <div key={item.label} className="border-b border-black/10 py-6 first:pt-0">
              <p className="font-satoshi text-[18px] font-normal leading-normal text-[#1b1b1b]/70">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-2 block font-satoshi text-[24px] font-bold leading-[1.5] tracking-[-0.01em] text-[#0a0a0a] transition-opacity duration-tap hover:opacity-70"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 font-satoshi text-[24px] font-bold leading-[1.5] tracking-[-0.01em] text-[#0a0a0a]">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>
        <img
          src="/assets/logo-find-space.png"
          alt=""
          width={472}
          height={472}
          className="mx-auto h-auto w-[min(472px,70vw)] object-contain"
        />
      </Reveal>
    </section>
  );
}
