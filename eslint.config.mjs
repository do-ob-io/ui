import { defineConfig, globalIgnores } from 'eslint/config';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

import config from '../../eslint.config.mjs';

const eslintConfig = defineConfig([
  ...config,
  globalIgnores([
    'dist/**',
  ]),
  {
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          project: [
            'tsconfig.json',
          ],
          alwaysTryTypes: true,
        }),
      ],
      react: {
        version: 'detect',
      },
    },
  },
]);

export default eslintConfig;
