/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "2px 3px 5px rgba(0, 0, 0, 0.25)"
      }
    }
  },
  plugins: []
}
