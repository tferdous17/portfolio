import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(158, 123, 237, 0.45)",
          "0 0px 67px rgba(158, 123, 237, 0.45)"
        ]
      }
    },
  },
  plugins: [],
} satisfies Config;
