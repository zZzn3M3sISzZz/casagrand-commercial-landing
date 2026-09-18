import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        ink: "var(--color-ink)",
        gold: {
          DEFAULT: "var(--color-gold)",
          deep: "var(--color-gold-deep)",
          soft: "var(--color-gold-soft)",
        },
        charcoal: "var(--color-charcoal)",
        muted: "var(--color-muted)",
        line: "var(--color-line)",
        surface: "var(--color-surface)",
        footer: "var(--color-footer)",
        error: "var(--color-error)",
      },
      fontFamily: {
        display: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        satoshi: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        serif: ["var(--font-lora)", "Georgia", "serif"],
      },
      maxWidth: {
        page: "1728px",
        content: "1280px",
      },
      spacing: {
        gutter: "var(--space-gutter)",
      },
      borderRadius: {
        photo: "var(--radius-photo)",
      },
      transitionDuration: {
        tap: "180ms",
        reveal: "520ms",
      },
      zIndex: {
        header: "50",
        dropdown: "60",
        skip: "70",
      },
    },
  },
  plugins: [],
};

export default config;
