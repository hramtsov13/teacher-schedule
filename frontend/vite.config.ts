import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

const plugins = [
  vue(),
  vueI18n({ include: resolve(__dirname, './src/i18n/**') }),
  WindiCSS(),
  eslintPlugin({ fix: true })
]

export default defineConfig(() => {
  return {
    build: {
      target: 'es2015'
    },

    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '~': resolve(__dirname, 'src')
      }
    },
    plugins
  }
})
