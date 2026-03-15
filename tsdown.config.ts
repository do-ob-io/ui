import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: [ 'src/index.ts', 'src/base/index.ts' ],
  exports: true,
  minify: true,
  dts: true,
});
