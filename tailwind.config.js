/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        carltime: ["custom-font", "sans-serif"],
        carltimeThin: ["custom-font2", "sans-serif"],
        poetsen: ["Poetsen One", "sans-serif"],
        sourceCode : ["Source Code Pro", "sans-serif"]
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
};
