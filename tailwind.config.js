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
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        marquee:         'marquee 30s linear infinite',
        'marquee-slow':  'marquee 80s linear infinite',
        'marquee-rev':   'marquee-reverse 30s linear infinite',
      },
    },
  },
  plugins: [],
}

