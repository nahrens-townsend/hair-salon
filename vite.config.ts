import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        // Split vendor libs into separate chunks to improve caching
        manualChunks(id: string) {
          if (!id.includes('node_modules')) return undefined;
          if (id.includes('framer-motion')) return 'motion';
          if (id.includes('@chakra-ui') || id.includes('@emotion')) return 'chakra';
          if (id.includes('react')) return 'vendor';
          return undefined;
        },
      },
    },
  },
})
