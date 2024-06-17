/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from 'tailwindcss';
import { join } from 'node:path';
import { nextui, NextUIPluginConfig }  from '@nextui-org/react';
import tailwindTypography from '@tailwindcss/typography';

export interface DoobTailwindConfig {
  root?: string;
  config?: Config;
  nextConfig?: NextUIPluginConfig;
  typographyConfig?: Parameters<typeof tailwindTypography>[0];
}

export function tailwindConfig({
  root = process.cwd(),
  config = { content: [] },
  nextConfig = {},
  typographyConfig = {},
}: DoobTailwindConfig): Config {

  return {
    ...config,
    darkMode: 'class',
    content: [
      join(root, 'node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'),
      join(root, 'node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'),
      ...config.content as string[],
    ],
    plugins: [
      nextui(nextConfig),
      tailwindTypography(typographyConfig),
      ...config.plugins as any[],
    ],
  };
  
};
