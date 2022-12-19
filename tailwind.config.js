/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'white': '#ffffff',
      'veryLightRed': 'hsl(13, 100%, 72%)',
      'lightRed': 'hsl(353, 100%, 62%)',
      'veryDarkBlue': 'hsl(208, 49%, 24%)',
      'grayishBlue': 'hsl(240, 2%, 79%)',
      'darkGrayishBlue': 'hsl(207, 13%, 34%)',
      'darkGrayBlue': 'hsl(237, 17%, 21%)',
      'darkDesaturatedBlue': 'hsl(237, 23%, 32%)',
      'darkBlackBlue': 'hsl(240, 10%, 16%)'
    },
    fontFamily: {
      overpass: ['Overpass', 'sans-serif'],
      ubuntu: ['Ubuntu', 'sans-serif'],
    },
    extend: {
      keyframes: {
        upRotate: {
          '0%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-0.6rem) rotate(0)' },
          '100%': { transform: 'translateY(-0.6rem) rotate(-45deg)' },
        },
        downRotate: {
          '0%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(0.6rem) rotate(0)' },
          '100%': { transform: 'translateY(0.6rem) rotate(45deg)' },
        },
        upRotateReverse: {
          '0%': { transform: 'translateY(-0.6rem) rotate(-45deg)' },
          '50%': { transform: 'translateY(-0.6rem) rotate(0)' },
          '100%': { transform: 'translateY(0) rotate(0)' },
        },
        downRotateReverse: {
          '0%': { transform: 'translateY(0.6rem) rotate(45deg)' },
          '50%': { transform: 'translateY(0.6rem) rotate(0)' },
          '100%': { transform: 'translateY(0) rotate(0)' },
        },
      },
      animation: {
        'upperOpen': 'downRotate 0.5s linear forwards',
        'lowerOpen': 'upRotate 0.5s linear forwards',
        'upperClose': 'downRotateReverse 0.5s linear forwards',
        'lowerClose': 'upRotateReverse 0.5s linear forwards',
        'spinOnce': 'spin 0.5s 0.35s cubic-bezier(0.4, 0, 0.6, 1) forwards'
      },
    },
  },
  plugins: [],
}
