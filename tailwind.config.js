/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        hanken: ['Hanken Grotesk', 'sans-serif'],
        bricked: ['Bricked', 'sans-serif'],
        pirata: ['Pirata One', 'cursive'],
        carsenz: ['Carsenz', 'sans-serif'],
      },},
  },
  plugins: [],
}

