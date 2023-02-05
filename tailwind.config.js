/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const newScreens = Object.entries(defaultTheme.screens).reduce(
  (breakpoints, [label, value]) => {
    if (label == "lg") {
      breakpoints["xmd"] = "850px";
    }
    breakpoints[label] = value;
    return breakpoints;
  },
  {}
);

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: newScreens,
    },
  },
  plugins: [],
}
