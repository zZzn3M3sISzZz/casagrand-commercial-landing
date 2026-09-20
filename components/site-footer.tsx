import { PROJECTS, projectHref } from "@/lib/projects";

const COMPANY = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Our Projects" },
  { href: "/#advantage", label: "Commercial Advantage" },
  { href: "/#advantage", label: "Amenities" },
  { href: "/#portfolio", label: "Gallery" },
  { href: "https://www.casagrand.co.in/careers", label: "Careers", external: true },
  { href: "/#contact", label: "Contact Us" },
];

const INFORMATION = [
  { href: "/#portfolio", label: "Download Brochures" },
  { href: "/#contact", label: "Schedule a Visit" },
  { href: "/#contact", label: "Leasing Enquiries" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/terms#disclaimer", label: "Disclaimer" },
];

const SOCIAL = [
  { href: "https://www.instagram.com/casagrand/", label: "Instagram" },
  { href: "https://www.facebook.com/casagrand/", label: "Facebook" },
  { href: "https://www.youtube.com/@casagrand", label: "YouTube" },
  { href: "https://www.linkedin.com/company/casagrand-builder-private-limited/", label: "LinkedIn" },
];

export function SiteFooter() {
  return (
    <footer id="contact" data-header-theme="dark" className="bg-footer text-white scroll-mt-24">
      <div className="mx-auto max-w-page px-gutter py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.9fr_0.7fr_0.7fr]">
          <div>
            <a href="/" aria-label="Casagrand Commercial home">
              <span className="relative block h-[48px] w-[210px] overflow-hidden">
                <img
                  src="/assets/logo-footer.png"
                  alt=""
                  width={1024}
                  height={279}
                  className="absolute inset-0 size-full object-contain object-left"
                />
              </span>
            </a>
            <p className="mt-6 text-[14px] font-normal">Contact Details</p>
            <p className="mt-2 text-[14px] leading-relaxed text-white/80">
              Phone:{" "}
              <a className="transition-opacity duration-tap hover:opacity-70" href="tel:+919047375555">
                90473 75555
              </a>
              <br />
              Email:{" "}
              <a
                className="transition-opacity duration-tap hover:opacity-70"
                href="mailto:leasing@casagrand.co.in"
              >
                leasing@casagrand.co.in
              </a>
              <br />
              Website:{" "}
              <a
                className="transition-opacity duration-tap hover:opacity-70"
                href="https://www.casagrand.co.in"
                target="_blank"
                rel="noreferrer"
              >
                www.casagrand.co.in
              </a>
            </p>
            <p className="mt-6 max-w-[360px] text-[12px] leading-relaxed text-white/55">
              This website is intended solely for conceptual purposes and does not
              constitute a legally binding offer. The promoters retain the right to
              modify the elevations, specifications, plans and other details as
              deemed appropriate.
            </p>
          </div>

          <FooterColumn title="Projects">
            {PROJECTS.map((project) => (
              <li key={project.slug}>
                <a
                  href={projectHref(project.slug)}
                  className="transition-opacity duration-tap hover:opacity-70"
                >
                  {project.name}
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            {COMPANY.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-opacity duration-tap hover:opacity-70"
                  {...("external" in item && item.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Information">
            {INFORMATION.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-opacity duration-tap hover:opacity-70"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-[13px] text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Casagrand Commercial. All rights reserved.</p>
          <p className="flex flex-wrap gap-x-3 gap-y-1">
            {SOCIAL.map((item, index) => (
              <span key={item.label} className="inline-flex items-center gap-3">
                {index > 0 ? <span aria-hidden>|</span> : null}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-opacity duration-tap hover:opacity-70"
                >
                  {item.label}
                </a>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-[15px] font-normal">{title}</p>
      <ul className="mt-4 flex flex-col gap-2.5 text-[14px] text-white/80">{children}</ul>
    </div>
  );
}
