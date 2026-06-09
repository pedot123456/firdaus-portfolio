import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Prioritise TypeScript/TSX files so new .tsx files win over old .jsx files
    // when an import has no explicit extension.
    extensions: ['.mts', '.ts', '.tsx', '.mjs', '.mjs', '.js', '.jsx', '.json'],
  },
  server: {
    port: 3000,
    open: true,
  },
})
