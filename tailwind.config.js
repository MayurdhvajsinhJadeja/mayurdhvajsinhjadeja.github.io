/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#f9ffe2", // 240,86,199
        primaryDark: "#050009", // 80,230,217
      },
    },
    screens: {
      // "2xl": { min: "1535px" },
      // // => @media (min-width: 1535px) { ... }

      xl: { min: "1024px" },
      // => @media (min-width: 1279px) { ... }

      // lg: { min: "1023px" },
      // // => @media (min-width: 1023px) { ... }

      // md: { min: "767px" },
      // // => @media (min-width: 767px) { ... }

      // sm: { min: "639px" },
      // // => @media (min-width: 639px) { ... }

      xs: { min: "375" },
      // => @media (min-width: 479px) { ... }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
};
