/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "var(--font-montserrat)",
        body: "var(--font-mulish)",
      },
      colors: {
        "deep-blue": "#000443",
        "dory-blue": "#414bf9",
        "ocean-blue": "#009ceb",
        "sea-glass": "#00c6b3",
        "yellow-tang": "#f4cc3f",
        "flashtalking-pink": "#ec286b",
      },
      screens: {
        'xs':'500px',
        ...defaultTheme.screens,
      }
    },
  },
  plugins: [],
};
