/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      fontSize: { "3xl": "2rem" },
    },
  },
  plugins: [],
};
