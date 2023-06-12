/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#03111B',
        primary: '#007AD3',
      },
      borderColor: {},
      maxWidth: {
        container: '1280px',
      },
      width: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
