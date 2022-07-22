/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#34495E",
        accent: "#41B883",
        defaultBackground: "#D9D9D9"
      }
    }
  },
  plugins: []
}
