 
import type { Config } from 'tailwindcss';
import { join } from 'node:path';
import { nextui, NextUIPluginConfig }  from '@nextui-org/react';
import tailwindTypography from '@tailwindcss/typography';

export interface DoobTailwindPreset {
  root?: string;
  nextConfig?: NextUIPluginConfig;
  typographyConfig?: Parameters<typeof tailwindTypography>[0];
}

export function doobTailwindPreset({
  root = process.cwd(),
  nextConfig = {},
  typographyConfig = {},
}: DoobTailwindPreset): Config & { content: string[] } {

  return {
    darkMode: 'class',
    content: [
      join(root, 'node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'),
    ],
    plugins: [
      nextui(nextConfig),
      tailwindTypography(typographyConfig),
    ],
    theme: {
      extend: {
        aspectRatio: {
          'photo': '3 / 2',
        },
        colors: {
          'waikawa-gray': {
            '50': '#f4f7fa',
            '100': '#e5ecf4',
            '200': '#d1dfec',
            '300': '#b2cade',
            '400': '#8caece',
            '500': '#7194c0',
            '600': '#5e7eb2',
            '700': '#536da2',
            '800': '#485a85',
            '900': '#3d4c6b',
            '950': '#293142',
          },
          'fuzzy-wuzzy-brown': {
            '50': '#fcf5f4',
            '100': '#faeae9',
            '200': '#f4d8d7',
            '300': '#ecb5b5',
            '400': '#e08c8e',
            '500': '#d16267',
            '600': '#bf4d58',
            '700': '#9d3340',
            '800': '#842d3a',
            '900': '#712a37',
            '950': '#3e131a',
          },
          'primary': {
            foreground: '#fff',
            DEFAULT: '#7194c0',
            '50': '#f4f7fa',
            '100': '#e5ecf4',
            '200': '#d1dfec',
            '300': '#b2cade',
            '400': '#8caece',
            '500': '#7194c0',
            '600': '#5e7eb2',
            '700': '#536da2',
            '800': '#485a85',
            '900': '#3d4c6b',
            '950': '#293142',
          },
          'secondary': {
            foreground: '#fff',
            DEFAULT: '#d16267',
            '50': '#fcf5f4',
            '100': '#faeae9',
            '200': '#f4d8d7',
            '300': '#ecb5b5',
            '400': '#e08c8e',
            '500': '#d16267',
            '600': '#bf4d58',
            '700': '#9d3340',
            '800': '#842d3a',
            '900': '#712a37',
            '950': '#3e131a',
          },
        }
      }
    }
  };
  
};
