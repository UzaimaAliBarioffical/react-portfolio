/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        "background-alt": "#F8F8F8",
        surface: "#FFFFFF",
        "surface-hover": "#F8F8F8",
        border: "#E5E5E5",
        foreground: "#000000",
        muted: "#555555",
        "muted-2": "#888888",
        accent: "#000000",
        "accent-hover": "#222222",
        "accent-dim": "rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["'Space Grotesk'", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.25s ease-out forwards",
      },
    },
  },
  plugins: [],
  safelist: ["object-[center_20%]"],
};
