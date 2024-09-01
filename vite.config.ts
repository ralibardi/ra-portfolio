import { ConfigEnv, UserConfig, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { generateManifest } from './manifestGenerator';
import path from 'path';

export default ({ mode }: ConfigEnv) => {
  let baseConfig: UserConfig = {
    publicDir: 'public',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
      },
    },
    assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.svg', '**/*.png'],
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
      outDir: 'dist',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  };

  if (mode === 'production') {
    baseConfig = {
      ...baseConfig,
      build: {
        ...baseConfig.build,
        rollupOptions: {
          output: {
            chunkFileNames: 'static/js/[name]-[hash].js',
            entryFileNames: 'static/js/[name]-[hash].js',
            assetFileNames: 'static/assets/[name]-[hash].[ext]',
          },
        },
        sourcemap: true,
      },
    };
  }

  if (mode === 'development') {
    baseConfig = {
      ...baseConfig,
      build: {
        ...baseConfig.build,
        sourcemap: true,
      },
    };
  }

  return defineConfig(baseConfig);
};
