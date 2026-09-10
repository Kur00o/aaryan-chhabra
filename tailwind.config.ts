import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      /* Backgrounds */
      bg:       "#0a0a0a",
      surface:  "#111111",
      surface2: "#1a1a1a",

      /* Borders */
      border:       "#2a2a2a",
      "border-bright": "#3a3a3a",

      /* Legacy aliases */
      paper: "#111111",
      ink:   "#e8e6e0",

      /* Accents */
      coral:     "#ff5a36",
      blue:      "#4f7cff",
      sunflower: "#ffc93c",
      mint:      "#00c2a0",

      /* Utilities */
      transparent: "transparent",
      white:  "#ffffff",
      black:  "#000000",
    },
    fontFamily: {
      display: ["var(--font-space-grotesk)", "sans-serif"],
      body:    ["var(--font-work-sans)", "sans-serif"],
      mono:    ["var(--font-jetbrains-mono)", "monospace"],
    },
    fontSize: {
      xs:   ["0.75rem",  { lineHeight: "1rem" }],
      sm:   ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem",     { lineHeight: "1.6" }],
      lg:   ["1.125rem", { lineHeight: "1.75rem" }],
      xl:   ["1.25rem",  { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem",  { lineHeight: "1.3" }],
      "3xl": ["1.875rem",{ lineHeight: "1.2" }],
      "4xl": ["2.25rem", { lineHeight: "1.1" }],
      "5xl": ["3rem",    { lineHeight: "1.05" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem",  { lineHeight: "1" }],
      "8xl": ["6rem",    { lineHeight: "0.95" }],
      "9xl": ["8rem",    { lineHeight: "0.9" }],
    },
    extend: {
      borderWidth: {
        3: "3px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      backgroundImage: {
        "gloss": "radial-gradient(ellipse 80% 40% at 50% -10%, rgba(255,255,255,0.04) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
