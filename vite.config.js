import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        '..',
        'C:/Users/91623/.gemini/antigravity/brain/ab71b0d4-5495-41af-ad45-d14476b67bcd'
      ]
    }
  }
})
