import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: "**/*.tsx",
  })],

  server: {
    host:"0.0.0.0",
    port:3000,
    hmr: {
        port: 3000,
        host: '0.0.0.0',

    },

    watch: {
      usePolling: true
    }
  },

})
