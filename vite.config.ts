import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '#': path.resolve(__dirname, './public'),
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@template': path.resolve(__dirname, './src/template'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@mock': path.resolve(__dirname, './src/mock'),
      '@store': path.resolve(__dirname, './src/store'),
      '@icomoon': path.resolve(__dirname, './src/icomoon'),
    }
  }
})
