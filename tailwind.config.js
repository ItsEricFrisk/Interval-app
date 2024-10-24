/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#222222",
        anitFlashWhite: "#EBEBEB",
        darkPuls1: "#262626",
        darkPuls2: "#292929",
        darkPuls3: "#2C2C2C",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, .5)",
          "0 0px 65px rgba(255, 255,255, .2)",
        ],
      },
      animation: {
        "smooth-pulse": "smoothPulse 5s ease-in-out infinite",
      },
      keyframes: {
        smoothPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};
