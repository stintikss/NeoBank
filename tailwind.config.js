/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          Rubik: ['Rubik', 'sans-serif'], // Это должно работать
          Montserrat: ['Montserrat', 'sans-serif'],
          Roboto: ['Roboto', 'sans-serif'],
          sans: ['Open Sans', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  