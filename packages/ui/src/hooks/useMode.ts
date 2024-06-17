import React from 'react';
import type { ThemeMode } from '@do-ob/ui/types';

/**
 * Provide methods to manage the mode of the application
 */
export function useMode(prefer: ThemeMode = 'light') {
  const [ mode, modeSet ] = React.useState<ThemeMode>(prefer);

  const modeToggle = () => {
    const next = mode === 'light' ? 'dark' : 'light';
    modeSet(next);
  };

  // Every time the mode changes, store it in the local storage
  React.useEffect(() => {
    document.documentElement.classList.remove(mode === 'light' ? 'dark' : 'light');
    document.documentElement.classList.add(mode);
  }, [ mode ]);

  return {
    mode,
    modeSet,
    modeToggle
  };
}

export default useMode;
