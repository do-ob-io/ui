import doob from '@do-ob/eslint-config';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactCompiler from 'eslint-plugin-react-compiler';
import { fixupPluginRules } from '@eslint/compat';

export default [
  ...doob.configs.recommended,

  {
    settings: {
      tailwindcss: {
        callees: [ 'classnames', 'clsx', 'ctl', 'cn' ],
      }
    }
  },

  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          'args': 'all',
          'argsIgnorePattern': '^_',
          'caughtErrors': 'all',
          'caughtErrorsIgnorePattern': '^_',
          'destructuredArrayIgnorePattern': '^_',
          'varsIgnorePattern': '^_',
          'ignoreRestSiblings': true
        }
      ]
    }
  },

  {
    files: [ '**/*.{jsx,tsx}' ],
    plugins: {
      'react': fixupPluginRules(react),
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    plugins: {
      'react-hooks': fixupPluginRules(reactHooks),
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    plugins: {
      'react-compiler': fixupPluginRules(reactCompiler),
    },
    rules: {
      'react-compiler/react-compiler': 'error',
    },
  },
];
