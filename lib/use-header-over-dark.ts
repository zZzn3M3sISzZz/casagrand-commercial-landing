"use client";

import { useEffect, useState, type RefObject } from "react";

export function useHeaderOverDark(
  headerRef: RefObject<HTMLElement | null>,
  enabled = true,
) {
  const [overDark, setOverDark] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setOverDark(false);
      return;
    }

    let raf = 0;

    const measure = () => {
      raf = 0;
      const headerBottom = headerRef.current?.getBoundingClientRect().bottom ?? 64;
      const zones = document.querySelectorAll("[data-header-theme='dark']");
      let hit = false;
      for (const zone of zones) {
        const rect = zone.getBoundingClientRect();
        if (rect.top < headerBottom && rect.bottom > 0) {
          hit = true;
          break;
        }
      }
      setOverDark(hit);
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [headerRef, enabled]);

  return overDark;
}
