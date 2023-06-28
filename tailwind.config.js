/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
    },
    colors:{
      dark: "#1b1b1b",
      light: "#f5f5f5",
      primary: "#f9ffe2", // 240,86,199
      primaryDark: "#050009", // 80,230,217
    },
  },
},
  plugins: [],
}

