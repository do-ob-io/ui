import path from 'node:path';

import { defineConfig, mergeConfig } from 'vite';

import mainConfig from '../../vite.config.js';

// https://vite.dev/config/
export default mergeConfig(
  mainConfig,
  defineConfig({
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'UI',
        fileName: 'index',
        formats: [ 'es' ],
      },
      rollupOptions: {
        external: [ 'react', 'react-dom', 'lucide-react' ],
      },
    },
  }),
);
