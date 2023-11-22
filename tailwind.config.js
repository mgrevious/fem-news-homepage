/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      fontFamily: ["Inter", ...defaultTheme.fontFamily.sans],
      fontSize: { "3xl": "2rem" },
      colors: {
        header: "#00001A",
        primary: "#5E607A",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        p: {
          color: theme("colors.primary"),
          fontSize: "15px",
          lineHeight: "26px",
          fontWeight: theme("fontWeight.light"),
        },
        h2: {
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "24px",
          marginBottom: "8px",
        },
      });
    }),
  ],
};
