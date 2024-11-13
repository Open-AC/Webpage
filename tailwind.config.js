/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,css,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "jetbrains-mono": ["JetBrains Mono", "mono"],
        "playfair-display": ["Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [],
}
