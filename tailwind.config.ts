import type { Config } from "tailwindcss";

/* Styling lives in app/globals.css (section-based). Tailwind supplies preflight + the palette. */
const config: Config = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      sky: "#0099FF",
      snow: "#FDFDFE",
      amber: "#E0F354",
      ink: "#0B1B2C",
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {},
  },
  plugins: [],
};

export default config;
