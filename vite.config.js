// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/forum/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        orange: resolve(__dirname, 'orange/index.html'),
      },
    },
  },
})
