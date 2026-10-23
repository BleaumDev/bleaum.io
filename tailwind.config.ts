import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1550px",
      },
    },
    extend: {
      colors: {
        // Home page palette (Phase-2 design). `h-*` colors follow the theme through vars set in globals.css.
        navy: { 800: "#0F2F4C", 900: "#0B1E31", 950: "#071321" },
        copper: { 400: "#DF9770", 700: "#A4572C" },
        fog: { 100: "#EAF0F6", 200: "#C9D5E1", 300: "#A9B8C8" },
        h: {
          bg: "var(--h-bg)",
          surface: "var(--h-surface)",
          surface2: "var(--h-surface-2)",
          text: "var(--h-text)",
          muted: "var(--h-muted)",
          line: "var(--h-line)",
          accent: "var(--h-accent)",
          btn: "var(--h-btn)",
          "btn-text": "var(--h-btn-text)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      spacing: { gutter: "clamp(16px, 4vw, 32px)", pad: "clamp(56px, 8vw, 96px)", band: "clamp(48px, 7vw, 80px)", hero: "clamp(56px, 8vw, 112px)" },
      maxWidth: { wrap: "1200px" },
      fontSize: {
        h1: "clamp(2.25rem, 1.5rem + 3.4vw, 3.75rem)",
        h2: "clamp(1.75rem, 1.4rem + 1.2vw, 2.25rem)",
        quote: "clamp(1.25rem, 1rem + 1vw, 1.5rem)",
      },
      transitionTimingFunction: { soft: "cubic-bezier(.2, .7, .2, 1)" },
      transitionDuration: { 250: "250ms", 600: "600ms" },
      borderRadius: {
        card: "18px",
        ctl: "10px",
        chip: "6px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-plex)", "system-ui", "sans-serif"],
        code: ["var(--font-geist-mono)"],
        regular: ["var(--font-geist-sans)"],
      },
      keyframes: {
        rise: { from: { opacity: "0", transform: "translateY(18px)" } },
        grow: { from: { transform: "scale(0)" } },
        "menu-in": { from: { opacity: "0", transform: "translateY(-6px)" } },
      },
      animation: {
        rise: "rise .7s cubic-bezier(.2, .7, .2, 1) both",
        grow: "grow .8s cubic-bezier(.2, .8, .2, 1) both",
        "menu-in": "menu-in .18s cubic-bezier(.2, .7, .2, 1) both",
      },
    },
  },
  plugins: [animate, typography],
} satisfies Config;

export default config;
