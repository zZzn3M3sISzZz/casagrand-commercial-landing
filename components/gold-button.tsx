"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";

type GoldButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  variant?: "fill" | "outline";
  onDark?: boolean;
  showArrow?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

export function GoldButton({
  children,
  href,
  type = "button",
  className,
  variant = "fill",
  onDark = false,
  showArrow = false,
  disabled = false,
  onClick,
}: GoldButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-[2px] px-5 py-2.5 text-[14px] font-normal tracking-[0.01em] transition-colors duration-tap",
    variant === "fill"
      ? "bg-gold-soft text-ink hover:bg-gold"
      : onDark
        ? "border border-white/80 bg-transparent text-white hover:bg-white/10"
        : "border border-gold-soft bg-transparent text-ink hover:bg-gold-soft/20",
    disabled && "pointer-events-none opacity-70",
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <ArrowUpRight size={16} weight="bold" aria-hidden /> : null}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}
