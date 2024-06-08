import doob from '@do-ob/eslint-config';
import tailwind from 'eslint-plugin-tailwindcss';

export default [
  ...doob.configs.recommended,
  ...tailwind.configs['flat/recommended'],
];
