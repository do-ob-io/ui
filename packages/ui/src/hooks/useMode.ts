import React from 'react';
import type { ThemeMode } from '@do-ob/ui/types';

/**
 * Provide methods to manage the mode of the application
 */
export function useMode(prefer: ThemeMode = 'light') {
  const [ mode, modeSet ] = React.useState<ThemeMode>(prefer);

  React.useLayoutEffect(() => {
    // Observe the theme mode class name of the html element
    const observer = new MutationObserver(() => {
      const next = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      if (next !== mode) {
        modeSet(next);
      }
    });
    // Start observing the theme mode class name of the html element
    observer.observe(document.documentElement, { attributes: true, attributeFilter: [ 'class' ] });

    // Check if the html element already has a mode class name.
    if (document.documentElement.classList.contains('light') || document.documentElement.classList.contains('dark')) {
      const documentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      modeSet(documentTheme);
    }

    // Clean up the observer
    return () => observer.disconnect();
  }, []);

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