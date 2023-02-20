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

    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'bluish': '#66FCF1', teal-700
    //   'dark-bluish': '#45A29E', cyan-300
    //   'off-white': '#C5C6C7',
    // },

  },
  plugins: [require("@tailwindcss/typography")],
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
};
