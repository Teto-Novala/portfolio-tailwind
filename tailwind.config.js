/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '8px',
    },
    extend: {
      colors: {
        primary: '#10b981',
        dark: '#0f172a',
      },
      screens: {
        'xs': '320px',
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
