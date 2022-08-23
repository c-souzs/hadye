/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      },
      fontSize: {
        xxl: ['44px', '54px'],
        xl: ['24px', '34px'],
        lg: ['20px', '30px']
      },
      borderRadius: {
        DEFAULT: '2px'
      },
      colors: {
        'purple': {
          500: '#6163FF',
          600: '#5658DD'
        },
        'green': {
          500: '1CB68B'
        },
        'zinc': {
          200: '#25282C',
          300: '#25282C',
          400: '#1A1C1F',
          500: '#151719'
        },
        'gray': {
          100: '#EBEBEB',
          200: '#E0E0E0',
          300: '#859099',
          600: '#9CA9B3'
        }
      }
    },
  },
  plugins: [],
}
