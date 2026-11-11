import type { Config } from "tailwindcss";

/* Styling lives in app/globals.css (section-based). Tailwind supplies preflight + the palette. */
const config: Config = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      red: "#F42902",
      snow: "#FDFDFF",
      lime: "#83FD80",
      ink: "#140B08",
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {},
  },
  plugins: [],
};

export default config;
