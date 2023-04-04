/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          100: '#722F37',
          200: '#722F47',
          300: '#722F57'
        },
        advice: {
          100: 'hsl(193, 38%, 86%)',
          200: 'hsl(150, 100%, 66%)',
          300: 'hsl(217, 19%, 38%)',
          400: 'hsl(217, 19%, 24%)',
          500: 'hsl(218, 23%, 16%)',
        },
      },
      fontSize: {
        '10xl': '16rem'
      },
      fontFamily: {
        new1: ['Libre Baskerville']
      },
    },
  },
  plugins: [],
}

