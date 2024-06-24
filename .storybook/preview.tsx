import React from 'react';
import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { DoobUiProvider } from '../packages/ui/src/provider';
import '../global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  }
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
  (Story) => (
    <DoobUiProvider navigate={() => { console.log('prevented'); }}>
      <div style={{ minHeight: '100vh' }}>
        <Story />
      </div>
    </DoobUiProvider>
  ),
];

export default preview;
