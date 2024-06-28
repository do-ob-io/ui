import type { StorybookConfig } from '@storybook/nextjs';
import { resolve } from 'node:path';
import { globSync } from 'glob';

const tsFiles = globSync(resolve(__dirname, '../packages/ui/src/*.ts'));
const tsFilesObject = tsFiles.reduce((acc, filePath) => {
  const fileName = filePath.split('/').pop()?.replace('.ts', '');
  if (fileName) {
    acc[`@do-ob/ui/${fileName}`] = filePath;
  }
  return acc;
}, {});

const config: StorybookConfig = {
  stories: [
    '../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },

  features: {
    experimentalRSC: true,
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },

  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // 👇 Internal modules
        ...tsFilesObject,
      };
    }
 
    return config;
  },

};

export default config;
