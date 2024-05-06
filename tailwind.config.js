/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          1200: "#0f031f",
          1000: "#25123d",
          1100: "#221038",
        },
        "magenta-pink": {
          DEFAULT: "#d6399e",
          200: "#ca3b9f",
        },
        gray: {
          200: "#D5DAE1",
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235",
        },
        blue: {
          500: "#2b77e7",
        },
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        carltime: ["custom-font", "sans-serif"],
        carltimeThin: ["custom-font2", "sans-serif"],
        poetsen: ["Poetsen One", "sans-serif"],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
};
