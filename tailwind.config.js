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
        sm: ['14px', '22px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '30px'],
        '2xl': ['24px', '34px'],
        '3xl': ['32px', '42px'],
        '4xl': ['44px', '54px'],
        '5xl': ['52px', '62px']
      },
      borderRadius: {
        DEFAULT: '2px',
        'circle': '50%',
      },
      colors: {
        'purple': {
          500: '#6163FF',
          600: '#5658DD'
        },
        'green': {
          500: '#1CB68B'
        },
        'zinc': {
          200: '#25282C',
          300: '#222529',
          400: '#1A1C1F',
          500: '#151719'
        },
        'gray': {
          100: '#ECEDED',
          200: '#EBEBEB',
          300: '#E0E0E0',
          400: '#859099',
          500: '#9CA9B3',
        }
      },
      transitionProperty: {
        'height': 'height',
      },
      boxShadow: {
        'image': '0 24px 64px rgb(21 23 25 / 64%)'
      },
      gridTemplateColumns: {
        'sm-feature': 'minmax(350px, 450px)'
      },
      backgroundImage: {
        'decoration-header': 'url("/src/assets/decoration-header.svg")',
        'decoration-workflows-right': 'url("/src/assets/decoration-workflow-right.svg")',
        'decoration-workflows-left': 'url("/src/assets/decoration-workflow-left.svg")',
        'decoration-contact': 'url("/src/assets/decoration-bg-contact.svg")'
      }
    },
  },
  plugins: [],
}
