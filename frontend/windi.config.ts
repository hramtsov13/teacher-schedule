import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      colors: {
        primary: '#4f83cc',
        'primary-dark': '#355a8d',
        'primary-light': '#60a5fa',
        success: '#67C23A',
        warning: '#E6A23C',
        danger: '#F56C6C',
        grey: '#909399',
        'grey-light': '#F2F6FC',
        'grey-middle': '#EBEEF5',
        'grey-darker': '#d4d4d4',
        black: '#303133',
        orange: '#fb923c'
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        serif: ['Rubik', 'sans-serif']
      },
      fontSize: {
        21: '21px',
        middle: '22px',
        24: '24px',
        30: '2rem',
        package: '32px',
        h1: '36px',
        student_name: '2rem'
      },
      transitionProperty: {
        width: 'width'
      }
    }
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {}
      addUtilities(newUtilities)
    })
  ]
})
