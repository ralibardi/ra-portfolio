import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { generateManifest } from './manifestGenerator';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  assetsInclude: ['**/*.jpeg', '**/*.jpg'],
  plugins: [
    react(),
    tsconfigPaths(),
    {
      name: 'manifest-generator',
      enforce: 'post',
      writeBundle: () => {
        generateManifest();
      },
    },
  ]
});
