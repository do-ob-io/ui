'use client';

import { useContext } from 'react';
import { Button, ButtonProps } from '@nextui-org/react';
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

  const { mode, modeToggle } = useContext(DoobUiContext);

  return (
    <Button
      onClick={modeToggle}
      startContent={mode === 'dark' ? <MoonIcon className="size-2/3" /> : <SunIcon className="size-2/3" />}
      isIconOnly={!children}
      aria-label="Toggle theme"
      {...props}
    >
      {children}
    </Button>
  );
}
