import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'
import eslintPlugin from 'vite-plugin-eslint'

const plugins = [vue(), WindiCSS(), eslintPlugin({ fix: true })]

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
