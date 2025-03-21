/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kansei: ["Kaisei Decol", "serif"],
      },
      colors: {
        bg: "#f4f5f4",
        base: "#f4f5f4",
        green: {
          50: "#f3f6f5",
          100: "#e1eae4",
          200: "#c5d4cc",
          300: "#9fb6ab",
          400: "#749386",
          500: "#547568",
          600: "#3f5c51",
          700: "#334941",
          800: "#2a3b35",
          900: "#23312c",
          950: "#131b18",
        },
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "120%" }],
        sm: ["0.875rem", { lineHeight: "120%" }],
        base: ["1rem", { lineHeight: "120%" }],
        h6: ["1.25rem", { lineHeight: "120%" }],
        h5: ["1.563rem", { lineHeight: "120%" }],
        h4: ["1.75rem", { lineHeight: "120%" }],
        h3: ["2.438rem", { lineHeight: "120%" }],
        h2: ["3rem", { lineHeight: "120%" }],
        h1: ["3.813rem", { lineHeight: "120%" }],
      },
    },
  },
  plugins: [],
};
