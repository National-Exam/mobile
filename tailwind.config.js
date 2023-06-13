// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./App.{js,ts,jsx,tsx}",
    "./navigator.{js,ts,jsx,tsx}",
    "./**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f49e06",
        },
      },
    },
  },
  plugins: [],
};