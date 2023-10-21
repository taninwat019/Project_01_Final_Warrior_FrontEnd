/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}

module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.vue'],
  theme: {
    extend: {
      backgroundColor: {
        '65451F': '#65451F',
        '8D7B68': '#8D7B68',
        'C8AE7D': '#C8AE7D',
        'EAC696': '#EAC696',
        'FFC288': '#FFC288',
        'FCECDD': '#FCECDD'
      },
    },
  },
  variants: {},
  plugins: [],
}