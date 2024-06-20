import type { Config } from 'tailwindcss';
import path from 'node:path';
import fs from 'node:fs';
import { nextui }  from '@nextui-org/react';
import tailwindTypography from '@tailwindcss/typography';

const nextuiContent = path.join(
  fs.realpathSync('./node_modules/@nextui-org/theme'),
  'dist/**/*.{js,ts,jsx,tsx}'
);

console.log(nextuiContent);

const config: Config = {
  darkMode: 'class',
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        'photo': '3 / 2',
      },
    }
  },
  plugins: [
    nextui(),
    tailwindTypography,
  ],
};
export default config;
