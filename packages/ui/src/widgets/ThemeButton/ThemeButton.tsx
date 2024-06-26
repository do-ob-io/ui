'use client';

import { use } from 'react';
import { Button, ButtonProps } from '@do-ob/ui/components';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

import { DoobUiContext } from '@do-ob/ui/context';

/**
 * Theme switch properties.
 */
export interface ThemeButtonProps extends ButtonProps {
  /**
   * The theme switch label.
   */
  children?: string;
}

/**
 * This button is used to toggle the theme of the application. It toggles between 'light' and 'dark'
 * class names that are applied to the html element of the document.
 */
export function ThemeButton({
  children,
  ...props
}: ThemeButtonProps) {

  const { mode, modeToggle } = use(DoobUiContext);

  return (
    <Button
      onPress={modeToggle}
      startContent={mode === 'dark' ? <MoonIcon className="size-2/3" /> : <SunIcon className="size-2/3" />}
      aria-label="Toggle theme"
      {...props}
    >
      {children}
    </Button>
  );
}
