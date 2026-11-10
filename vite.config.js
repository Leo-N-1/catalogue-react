import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// La configuration de Vite : ici, seulement le module qui lui apprend le JSX.
export default defineConfig({
  plugins: [react()],
});
