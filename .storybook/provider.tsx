import React from 'react';
import { DoobUiProvider } from '../packages/ui/src/provider';

export const withDoob = (Story) => (
  <DoobUiProvider navigate={(path) => { history.pushState({}, '', path); }}>
    <div style={{ minHeight: '100vh' }}>
      {Story()}
    </div>
  </DoobUiProvider>
);
