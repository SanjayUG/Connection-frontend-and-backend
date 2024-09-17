import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000",  // request thinks I am origined from here and allows the request
    }
  },
  plugins: [react()],
})
