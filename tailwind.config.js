/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '1/2': '50%',
        '3/4': '75%',
        '1/4': '25%',
        '1/3': '33%',
        '2/3': '66%',
        '1/6': '16.5%',
        '1/8': '12.5%',
      },
      minWidth: {
        '1/2': '50%',
        '3/4': '75%',
        '1/4': '25%',
        '1/3': '33%',
        '2/3': '66%',

      },
    },
  },
  plugins: [],
}