const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        munro: ["Munro-main", "sans-serif"],
        munroNarrow: ["Munro-narrow", "sans-serif"],
        munroLye: ["Munro-2lye", "sans-serif"],
        poetsen: ["Poetsen One", "sans-serif"],
        sourceCode: ["Source Code Pro", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
