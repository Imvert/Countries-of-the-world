import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//configuracion importate incluir base
export default defineConfig({
  base: "https://Imvert.github.io/Countries-of-the-world/",
  plugins: [react()],
})
