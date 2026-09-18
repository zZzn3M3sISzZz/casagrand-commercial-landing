"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CaretDown, List, X } from "@phosphor-icons/react";
import { GoldButton } from "@/components/gold-button";
import { useEnquire } from "@/components/enquire-dialog";
import { cn } from "@/lib/cn";
import { PROJECTS } from "@/lib/projects";
import { useHeaderOverDark } from "@/lib/use-header-over-dark";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/#portfolio", label: "Projects", hasMenu: true },
  { href: "/#about", label: "About Us" },
  { href: "/#advantage", label: "Commercial Advantage" },
] as const;

function Chevron({ open, onDark }: { open: boolean; onDark: boolean }) {
  return (
    <CaretDown
      size={12}
      weight="bold"
      aria-hidden
      className={cn(
        "shrink-0 transition-transform duration-tap",
        onDark ? "text-white/80" : "text-ink/70",
        open && "rotate-180",
      )}
    />
  );
}

export function Header() {
  const { openEnquire } = useEnquire();
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const overDark = useHeaderOverDark(headerRef, !open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!projectsOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!projectsRef.current?.contains(event.target as Node)) {
        setProjectsOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProjectsOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [projectsOpen]);

  useEffect(() => {
    if (!open) setMobileProjectsOpen(false);
  }, [open]);

  const navClass = cn(
    "transition-colors duration-tap",
    overDark ? "text-white hover:opacity-80" : "text-ink hover:opacity-70",
  );

  return (
    <header
      ref={headerRef}
      data-on-dark={overDark}
      className={cn(
        "fixed inset-x-0 top-0 z-header transition-[background-color,box-shadow,color] duration-tap",
        overDark
          ? "bg-[rgba(17,17,17,0.88)] text-white shadow-none backdrop-blur-sm"
          : "bg-[rgba(255,255,255,0.95)] text-ink",
        scrolled && !overDark && "shadow-[0_1px_0_rgba(0,0,0,0.06)]",
        scrolled && overDark && "shadow-[0_1px_0_rgba(255,255,255,0.08)]",
      )}
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-gutter">
        <a href="/" className="flex items-center" aria-label="Casagrand Commercial home">
          <span className="relative block h-[36px] w-[148px] overflow-hidden lg:h-[42px] lg:w-[172px]">
            <img
              src="/assets/logo-header.png"
              alt=""
              width={1024}
              height={279}
              className={cn(
                "absolute inset-0 size-full object-contain object-left transition-opacity duration-tap",
                overDark && "opacity-0",
              )}
            />
            <img
              src="/assets/logo-footer.png"
              alt=""
              width={1024}
              height={279}
              className={cn(
                "absolute inset-0 size-full object-contain object-left transition-opacity duration-tap",
                !overDark && "opacity-0",
              )}
            />
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {NAV.map((item) =>
            "hasMenu" in item && item.hasMenu ? (
              <div
                key={item.label}
                ref={projectsRef}
                className="relative"
                onMouseEnter={() => setProjectsOpen(true)}
                onMouseLeave={() => setProjectsOpen(false)}
              >
                <button
                  type="button"
                  className={cn(
                    "inline-flex min-h-11 items-center gap-1.5 px-3 py-2 text-[14px]",
                    navClass,
                  )}
                  aria-expanded={projectsOpen}
                  aria-haspopup="menu"
                  aria-controls={menuId}
                  onClick={() => setProjectsOpen(true)}
                >
                  {item.label}
                  <Chevron open={projectsOpen} onDark={overDark} />
                </button>
                <div
                  id={menuId}
                  role="menu"
                  className="dropdown-panel absolute left-0 top-full z-dropdown min-w-[280px] pt-2"
                  data-open={projectsOpen}
                  hidden={!projectsOpen}
                >
                  <div className="border border-line bg-canvas py-2 shadow-lg">
                    {PROJECTS.map((project) => (
                      <a
                        key={project.slug}
                        href={`/#project-${project.slug}`}
                        role="menuitem"
                        className="block px-4 py-2.5 text-[14px] text-ink transition-opacity duration-tap hover:opacity-70"
                        onClick={() => setProjectsOpen(false)}
                      >
                        {project.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={cn("px-3 py-2 text-[14px]", navClass)}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <GoldButton href="/#contact" variant="outline" onDark={overDark}>
            Contact
          </GoldButton>
          <GoldButton showArrow onDark={overDark} onClick={openEnquire}>
            Enquire Now
          </GoldButton>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex size-11 items-center justify-center xl:hidden",
            overDark ? "text-white" : "text-ink",
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-canvas px-gutter py-6 xl:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {NAV.map((item) =>
            "hasMenu" in item && item.hasMenu ? (
              <div key={item.label}>
                <button
                  type="button"
                  className="flex min-h-11 w-full items-center justify-between text-base text-ink"
                  aria-expanded={mobileProjectsOpen}
                  onClick={() => setMobileProjectsOpen((value) => !value)}
                >
                  {item.label}
                  <Chevron open={mobileProjectsOpen} onDark={false} />
                </button>
                {mobileProjectsOpen ? (
                  <div className="mb-1 ml-3 flex flex-col border-l border-line pl-3">
                    {PROJECTS.map((project) => (
                      <a
                        key={project.slug}
                        href={`/#project-${project.slug}`}
                        className="flex min-h-11 items-center text-[15px] text-ink/85"
                        onClick={() => setOpen(false)}
                      >
                        {project.name}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center text-base text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ),
          )}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <GoldButton href="/#contact" variant="outline" onClick={() => setOpen(false)}>
              Contact
            </GoldButton>
            <GoldButton
              showArrow
              onClick={() => {
                setOpen(false);
                openEnquire();
              }}
            >
              Enquire Now
            </GoldButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
