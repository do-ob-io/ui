import type { Preview } from '@storybook/react';
// import { withThemeByClassName } from '@storybook/addon-themes';
import { withDoob } from './provider';
import '../global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  // tags: [ 'autodocs' ]
};

export const decorators = [
  // withThemeByClassName({
  //   themes: {
  //     light: 'light',
  //     dark: 'dark',
  //   },
  //   defaultTheme: 'light',
  // }),
  withDoob,
];

export default preview;
