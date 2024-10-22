/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#222222",
        mintCream: "#F1F7ED",
        anitFlashWhite: "#EBEBEB",
        darkGreen: "#093A3E",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, .5)",
          "0 0px 65px rgba(255, 255,255, .2)",
        ],
      },
    },
  },
  plugins: [],
};
