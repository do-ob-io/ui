import doob from '@do-ob/eslint-config';
import reactCompiler from 'eslint-plugin-react-compiler';

export default [
  ...doob.configs.recommended,

  {
    plugins: {
      'react-compiler': reactCompiler,
    },
    rules: {
      ...reactCompiler.rules.recommended,
      'react-compiler/react-compiler': 'error',
    },
  },
];
