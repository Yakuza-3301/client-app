import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      external: ['@web3modal/wagmi'],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('wagmi') || id.includes('viem')) {
              return 'web3'
            }
            return 'vendor'
          }
        }
      }
    }
  }
})