import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        slateblue: "#3C2B71",
        footer_color: "#E7E7E7",
        footer_color_s: "#D9D9D9",
        footer_border:"#ABABAB",
        section_back: "#fafafa",
        footer_back: "#4B3D78",
        btn_clr: "#982536",
        card_bg: "#939C4D",
        video_hover: "#939C4D",
      },
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        open_sans: ['var(--font-open-sans)'],
        notable: ['var(--font-notable)'],
        Poiret: ['var(--font-poiret)'],
        montserrat: ['var(--font-montserrat)'],
      }
    },
  },
  plugins: [],
} satisfies Config;
