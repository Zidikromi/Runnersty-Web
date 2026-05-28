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
        pirata: ['Pirata One', 'cursive'],
      },},
  },
  plugins: [],
}

