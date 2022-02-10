import { defineConfig } from 'windicss/helpers'

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
        primary: '#409EFF',
        'primary-dark': '#218EFF',
        success: '#67C23A',
        warning: '#E6A23C',
        danger: '#F56C6C',
        grey: '#909399',
        'grey-light': '#F2F6FC',
        'grey-middle': '#EBEEF5',
        black: '#303133',
        orange: '#fb923c'
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'sans-serif']
      }
    }
  }
})
