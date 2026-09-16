/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#050611",
        navy: "#0a0e1f",
        panel: "#0d1226",
        violet: "#6c5ce7",
        lavender: "#a29bfe",
        cyan: "#5ee7ff",
        mint: "#9be8e0",
      },
      fontFamily: {
        display: ["Outfit", "ui-sans-serif", "sans-serif"],
        serif: ["Spectral", "serif"],
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: 0.15 },
          "50%": { opacity: 0.8 },
        },
        modalIn: {
          from: { opacity: 0, transform: "translateY(8px) scale(0.98)" },
          to: { opacity: 1, transform: "translateY(0) scale(1)" },
        },
        floatGlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        twinkle: "twinkle 4s ease-in-out infinite",
        modalIn: "modalIn 0.25s ease-out",
        floatGlow: "floatGlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
