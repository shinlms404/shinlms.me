import { resolve } from 'node:path'
import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '~/', replacement: `${resolve(__dirname, 'src')}/` }]
  },
  plugins: [
    Vue({ include: [/\.vue$/, /\.md$/] }),

    Pages({
      extensions: ['vue', 'md'],
      dirs: ['src/pages', 'posts']
    }),

    Markdown({
      headEnabled: true
    })
  ]
})
