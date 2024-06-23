 
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
      join(root, 'node_modules/@do-ob/ui/dist/**/*.{js,ts,jsx,tsx}'),
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
          /**
           * The default Primary color for the theme
           */
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
          /**
           * The default Secondary color for the theme
           */
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
          /**
           * The default Success color for the theme
           */
          'emerald': {
            '50': '#effef5',
            '100': '#dafee8',
            '200': '#b7fbd3',
            '300': '#7ff6b2',
            '400': '#41e788',
            '500': '#17c964',
            '600': '#0dac52',
            '700': '#0e8743',
            '800': '#116a39',
            '900': '#105731',
            '950': '#023119',
          },
          /**
           * The default Warning color for the theme
           */
          'web-orange': {
            '50': '#fef9ec',
            '100': '#fdedc8',
            '200': '#fad98d',
            '300': '#f7c052',
            '400': '#f5a524',
            '500': '#ef8511',
            '600': '#d3620c',
            '700': '#af430e',
            '800': '#8e3412',
            '900': '#752c12',
            '950': '#431505',
          },
          /**
           * The default danger color for the theme
           */
          'cerise-red': {
            '50': '#fff0f3',
            '100': '#ffe2e8',
            '200': '#ffc9d7',
            '300': '#ff9cb6',
            '400': '#ff6591',
            '500': '#ff306e',
            '600': '#f31260',
            '700': '#cd034e',
            '800': '#ab0649',
            '900': '#920944',
            '950': '#520020',
          },

          /**
           * Primary color definition
           */
          'primary': {
            DEFAULT: '#536da2',
            light: {
              bg: '#536da2',
              fg: '#fff',
            },
            dark: {
              bg: '#8caece',
              fg: '#000',
            },
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

          /**
           * Secondary color definition
           */
          'secondary': {
            DEFAULT: '#d16267',
            light: {
              bg: '#d16267',
              fg: '#fff',
            },
            dark: {
              bg: '#ecb5b5',
              fg: '#000',
            },
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

          /**
           * Success color definition
           */
          'success': {
            DEFAULT: '#17c964',
            light: {
              bg: '#17c964',
              fg: '#fff',
            },
            dark: {
              bg: '#41e788',
              fg: '#000',
            },
            '50': '#effef5',
            '100': '#dafee8',
            '200': '#b7fbd3',
            '300': '#7ff6b2',
            '400': '#41e788',
            '500': '#17c964',
            '600': '#0dac52',
            '700': '#0e8743',
            '800': '#116a39',
            '900': '#105731',
            '950': '#023119',
          },
          
          /**
            * Warning color definition
            */
          'warning': {
            DEFAULT: '#ef8511',
            light: {
              bg: '#ef8511',
              fg: '#fff',
            },
            dark: {
              bg: '#f7c052',
              fg: '#000',
            },
            '50': '#fef9ec',
            '100': '#fdedc8',
            '200': '#fad98d',
            '300': '#f7c052',
            '400': '#f5a524',
            '500': '#ef8511',
            '600': '#d3620c',
            '700': '#af430e',
            '800': '#8e3412',
            '900': '#752c12',
            '950': '#431505',
          },
  
          /**
            * Danger color definition
            */
          'danger': {
            DEFAULT: '#ff306e',
            light: {
              bg: '#ff306e',
              fg: '#fff',
            },
            dark: {
              bg: '#ff9cb6',
              fg: '#000',
            },
            '50': '#fff0f3',
            '100': '#ffe2e8',
            '200': '#ffc9d7',
            '300': '#ff9cb6',
            '400': '#ff6591',
            '500': '#ff306e',
            '600': '#f31260',
            '700': '#cd034e',
            '800': '#ab0649',
            '900': '#920944',
            '950': '#520020',
          },
        },
      }
    }
  };
  
};
