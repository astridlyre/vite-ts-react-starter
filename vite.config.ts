/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import html from 'vite-plugin-html'
import path from 'path'

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), html({ minify: true })],
  resolve: {
  alias: {
      '~': path.resolve(__dirname, './src')
    },
  },
  test: {
    global: true,
    environment: 'jsdom',
  },
})
