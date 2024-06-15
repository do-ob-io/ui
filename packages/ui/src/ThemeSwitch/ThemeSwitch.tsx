'use client';

import { useContext } from 'react';
import { Switch } from '@nextui-org/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

import { DoobUiContext } from '@do-ob/ui/context';

/**
 * This switch is used to toggle the theme of the application. It toggles between 'light' and 'dark'
 * class names that are applied to the html element of the document.
 */
export function ThemeSwitch() {

  const { mode, modeToggle } = useContext(DoobUiContext);

  return (
    <Switch
      isSelected={mode === 'dark'}
      onClick={modeToggle}
      startContent={<MoonIcon />}
      endContent={<SunIcon />}
    >
      Theme
    </Switch>
  );
}

export default ThemeSwitch;
