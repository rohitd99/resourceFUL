/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors : {
        buttonBg: "#7251B5",
        primaryFont: "#B185DB",
        secondaryBg: "#D2B7E5",
        cardBg: "#C6A4DE",
        hoverBg: "#451A8A"
      },
      fontFamily: {
        VT323 : ['VT323', 'monospace'],
        Nunito: ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

