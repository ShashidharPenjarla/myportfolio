/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        copperplate: ['Copperplate', 'Copperplate Gothic Light', 'Arial', 'sans-serif'],
      },
      colors: {
        ...colors,
        backclor: '#FFFAFA',
      },
      animation: {
        borderLeftRight: 'borderLeftRight 1s ease-in-out 1',
      },
      keyframes: {
        'border-left-right': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
