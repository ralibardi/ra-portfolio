import { ConfigEnv, UserConfig, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { generateManifest } from './manifestGenerator';
import path from 'path';

// Function to generate environment-specific configurations
export default ({ mode }: ConfigEnv) => {
  // Base configuration common to both development and production
  let baseConfig: UserConfig = {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
      },
    },
    assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.svg'],
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
    ],
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  };

  // Extend or override the base configuration for production
  if (mode === 'production') {
    baseConfig = {
      ...baseConfig,
      build: {
        ...baseConfig.build,
        // Production-specific configurations
        rollupOptions: {
          output: {
            chunkFileNames: 'static/js/[name]-[hash].js',
            entryFileNames: 'static/js/[name]-[hash].js',
            assetFileNames: 'static/assets/[name]-[hash].[ext]',
          },
        },
        sourcemap: true, // Enable sourcemaps in production for debugging
      },
    };
  }

  // Extend or override the base configuration for development
  if (mode === 'development') {
    baseConfig = {
      ...baseConfig,
      // Development-specific configurations
    };
  }

  return defineConfig(baseConfig);
};
