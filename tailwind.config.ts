import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryLight: "#A2D2FF",
        primaryDark: "#003049",
        charcoal: "#212529",
        dull: "#c4c4c4",
        secondaryDark: "#3A0CA3",
        secondaryLight: "#C8B6FF"
      },
    },
  },
  plugins: [],
} satisfies Config;
