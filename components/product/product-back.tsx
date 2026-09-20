"use client";

import { useEffect } from "react";
import { CaretLeft } from "@phosphor-icons/react";
import { PORTFOLIO_RETURN_KEY } from "@/lib/projects";

export function ProductBack({ slug }: { slug: string }) {
  useEffect(() => {
    try {
      sessionStorage.setItem(PORTFOLIO_RETURN_KEY, slug);
    } catch {
      // Ignore private-mode or blocked storage.
    }
  }, [slug]);

  return (
    <a
      href="/#portfolio"
      className="inline-flex min-h-11 items-center gap-1.5 text-[14px] text-ink/70 transition-opacity duration-tap hover:opacity-100 hover:text-ink"
    >
      <CaretLeft size={16} weight="bold" aria-hidden />
      Projects
    </a>
  );
}
