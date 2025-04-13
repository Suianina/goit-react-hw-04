import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      // У цьому випадку можна видалити react-spinners, якщо не є необхідним
      external: [],
    },
  },
  base: '/goit-react-hw-04/', // Якщо проект розгортається під /goit-react-hw-04/
});