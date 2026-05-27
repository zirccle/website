import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "muted-strong": "#4f434e",
        primary: {
          DEFAULT: "#591162",
          container: "#732c7b",
          fixed: "#ffd6fc",
          "fixed-dim": "#fcaaff",
          glow: "#fcaaff",
        },
        background: "#fcf9f8",
        surface: {
          DEFAULT: "#fcf9f8",
          dim: "#dcd9d9",
          bright: "#fcf9f8",
          container: {
            lowest: "#ffffff",
            low: "#f6f3f2",
            DEFAULT: "#f0eded",
            high: "#eae7e7",
            highest: "#e5e2e1",
          },
          tint: "#8a4191",
          variant: "#e5e2e1",
        },
        on: {
          background: "#1c1b1b",
          surface: {
            DEFAULT: "#1c1b1b",
            variant: "#4f434e",
          },
          primary: {
            DEFAULT: "#ffffff",
            container: "#f09df4",
            fixed: "#36003e",
            "fixed-variant": "#6f2877",
          },
          secondary: {
            DEFAULT: "#ffffff",
            container: "#656369",
            fixed: "#1c1b1f",
            "fixed-variant": "#47464b",
          },
          tertiary: {
            DEFAULT: "#ffffff",
            container: "#cdb1d2",
            fixed: "#27142d",
            "fixed-variant": "#553f5a",
          },
        },
        secondary: {
          DEFAULT: "#5f5e63",
          container: "#e5e1e7",
          fixed: "#e5e1e7",
          "fixed-dim": "#c8c5cb",
        },
        tertiary: {
          DEFAULT: "#412d46",
          container: "#59435e",
          fixed: "#f7d9fb",
          "fixed-dim": "#dabdde",
        },
        error: {
          DEFAULT: "#ba1a1a",
          container: "#ffdad6",
        },
        outline: {
          DEFAULT: "#81737f",
          variant: "#d3c2cf",
        },
      },
      borderRadius: {
        DEFAULT: "0.25rem", // 4px
        lg: "0.5rem", // 8px
        xl: "0.75rem", // 12px
        "2xl": "1rem", // 16px
        "3xl": "1.5rem", // 24px
      },
      spacing: {
        "margin-desktop": "64px",
        "margin-mobile": "20px",
        "section-gap": "72px",
        "stack-sm": "8px",
        "stack-md": "16px",
        "stack-lg": "32px",
        gutter: "24px",
        "container-max": "1280px",
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(115, 44, 123, 0.05)",
        strong: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      fontSize: {
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "label-sm": ["0.875rem", { lineHeight: "1" }],
        "headline-sm": ["1.5rem", { lineHeight: "1.3" }],
        "headline-md": ["2.5rem", { lineHeight: "1.12" }],
        "display-lg-mobile": ["3rem", { lineHeight: "1.08" }],
        "display-lg": ["4rem", { lineHeight: "1.1" }],
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
