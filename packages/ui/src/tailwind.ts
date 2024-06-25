 
import type { Config } from 'tailwindcss';
import tailwindPlugin from 'tailwindcss/plugin';
import tailwindColors from 'tailwindcss/colors';
import { join } from 'node:path';
import { nextui, NextUIPluginConfig }  from '@nextui-org/react';
import tailwindReactAria from 'tailwindcss-react-aria-components';
import tailwindContainerQueries from '@tailwindcss/container-queries';
import tailwindAnimate from 'tailwindcss-animate';
import tailwindTypography from '@tailwindcss/typography';

/**
 * Set of preset colors
 */
export const colors = {
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
};

const extendedColors = {
  'background': {
    DEFAULT: tailwindColors.gray[50],
    ...tailwindColors.gray,
  },
  'background-dark': {
    DEFAULT: tailwindColors.gray[800],
    ...tailwindColors.gray,
  },
  'primary': {
    DEFAULT: colors['waikawa-gray'][700],
    ...colors['waikawa-gray'],
  },
  'primary-dark': {
    DEFAULT: colors['waikawa-gray'][500],
    ...colors['waikawa-gray'],
  },
  'secondary': {
    DEFAULT: colors['fuzzy-wuzzy-brown'][500],
    ...colors['fuzzy-wuzzy-brown'],
  },
  'secondary-dark': {
    DEFAULT: colors['fuzzy-wuzzy-brown'][500],
    ...colors['fuzzy-wuzzy-brown'],
  },
  'success': {
    DEFAULT: colors['emerald'][500],
    ...colors['emerald'],
  },
  'success-dark': {
    DEFAULT: colors['emerald'][500],
    ...colors['emerald'],
  },
  'warning': {
    DEFAULT: colors['web-orange'][500],
    ...colors['web-orange'],
  },
  'warning-dark': {
    DEFAULT: colors['web-orange'][500],
    ...colors['web-orange'],
  },
  'danger': {
    DEFAULT: colors['cerise-red'][500],
    ...colors['cerise-red'],
  },
  'danger-dark': {
    DEFAULT: colors['cerise-red'][500],
    ...colors['cerise-red'],
  },
};

function isDarkColor(hex: string): boolean {
  // Helper function to convert hex to RGB
  function hexToRgb(hex: string): { r: number; g: number; b: number } {
    // Remove the leading # if present
    if (hex.startsWith('#')) {
      hex = hex.slice(1);
    }
    // Parse the r, g, b values
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }

  // Helper function to calculate luminance
  function luminance(r: number, g: number, b: number): number {
    // Normalize the RGB values to the range [0, 1]
    r /= 255;
    g /= 255;
    b /= 255;
    // Calculate luminance using the formula
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  // Get the RGB values from the hex color
  const { r, g, b } = hexToRgb(hex);

  // Calculate the luminance
  const lum = luminance(r, g, b);

  // Return true if the luminance is less than 0.5 (indicating a dark color)
  return lum < 0.5;
}

// function invertHexColor(hex: string): string {
//   // Helper function to convert hex to RGB
//   function hexToRgb(hex: string): { r: number; g: number; b: number } {
//     // Remove the leading # if present
//     if (hex.startsWith('#')) {
//       hex = hex.slice(1);
//     }

//     // Parse the r, g, b values
//     const bigint = parseInt(hex, 16);
//     const r = (bigint >> 16) & 255;
//     const g = (bigint >> 8) & 255;
//     const b = bigint & 255;

//     return { r, g, b };
//   }

//   // Helper function to convert RGB to hex
//   function rgbToHex(r: number, g: number, b: number): string {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
//   }

//   // Get the RGB values from the hex color
//   let { r, g, b } = hexToRgb(hex);

//   // Invert the RGB values
//   r = 255 - r;
//   g = 255 - g;
//   b = 255 - b;

//   // Convert the inverted RGB values back to a hex string
//   return rgbToHex(r, g, b);
// }

export function doobTailwindPlugin() {

  return tailwindPlugin(({ addBase }) => {

    addBase({
      ['body']: {
        ['@apply bg-background text-background-fg dark:bg-background-dark dark:text-background-dark-fg']: {},
      },
    });
  });

}

/**
 * Applies foreground colors based on the default colors of the theme
 */
export function applyForegroundColors(initialColors: Record<string, { DEFAULT: string, fg?: string }>) {
  return Object.keys(initialColors).reduce((acc, key) => {
    const color = initialColors[key];
    const isDark = isDarkColor(color.DEFAULT);
    color.fg = isDark ? '#f0f0f0' : '#0f0f0f';

    return {
      ...acc,
      [key]: color,
    };
  }, {});
}

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
      tailwindContainerQueries,
      tailwindReactAria,
      tailwindAnimate,
      doobTailwindPlugin(),
    ],
    theme: {
      extend: {
        aspectRatio: {
          'photo': '3 / 2',
        },
        colors: applyForegroundColors(extendedColors),
      }
    }
  };
  
};
