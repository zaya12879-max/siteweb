import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/adsdo-agency/', // Hada huwa l-koud lli kiy-fekk l-mouchkil
})
