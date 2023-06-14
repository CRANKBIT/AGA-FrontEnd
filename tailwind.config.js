/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#03111B',
        primary: '#007AD3',
        textColorBlack: '#1E1E1E',
      },
      borderColor: {
        primary: '#007AD3',
        secondary: '#03111B',
      },
      maxWidth: {
        container: '1280px',
      },
      width: {
        container: '1280px',
        authHeroLogoWidth: '80px',
      },
      height: {
        authHeroLogoHeight: '100px'
      }
    },
  },
  plugins: [],
}
