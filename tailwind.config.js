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
          100: '#7A7CCC',
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
          300: '#CCCCCC',
          400: '#859099',
          500: '#9CA9B3',
        }
      },
      transitionProperty: {
        'height': 'height',
      },
      boxShadow: {
        'card-testimonials-light': '0 0 8px 0 rgb(0 0 0 / 10%)'
      },
      gridTemplateColumns: {
        'sm-feature': 'minmax(350px, 450px)'
      },
      backgroundImage: {
        'decoration-header': 'url("/src/assets/decoration-header.svg")',
        'decoration-workflows-right-dark': 'url("/src/assets/decoration-workflow-right-dark.svg")',
        'decoration-workflows-left-dark': 'url("/src/assets/decoration-workflow-left-dark.svg")',
        'decoration-workflows-right-light': 'url("/src/assets/decoration-workflow-right-light.svg")',
        'decoration-workflows-left-light': 'url("/src/assets/decoration-workflow-left-light.svg")',
        'decoration-contact': 'url("/src/assets/decoration-bg-contact.svg")'
      }
    },
  },
  plugins: [],
}
