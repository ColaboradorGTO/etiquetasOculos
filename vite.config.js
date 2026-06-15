import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    origin: 'http://localhost:6001',
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa bibliotecas grandes em chunks separados
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          query: ['react-query'],
          primereact: ['primereact/datatable', 'primereact/column', 'primereact/inputtext'],
          utils: ['jspdf', 'jspdf-autotable', 'xlsx']
        }
      }
    },
    // Otimizações adicionais
    chunkSizeWarningLimit: 1000,
    sourcemap: false, // Reduz tamanho em produção
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom', 
      'react-router-dom',
      'react-query',
      'primereact/datatable',
      'primereact/column'
    ]
  }
})
