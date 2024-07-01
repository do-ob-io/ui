'use client';

import { useId, useRef } from 'react';
import { cn } from '@do-ob/ui/utility';
import { Button, Drawer } from '@do-ob/ui/components';
import { useOverflow } from '@do-ob/ui/hooks';
import { Bars3Icon } from '@do-ob/ui/icons';
import { NavigationProps } from './Navigation.types';
import { NavigationTabs } from './NavigationTabs';
import { useDialogControl } from '@do-ob/ui/hooks';
import { NavigationPopovers } from './NavigationPopovers';

export function Navigation(props: NavigationProps & React.HTMLAttributes<HTMLDivElement>) {

  const {
    label = 'Site Navigation',
    orientation = 'horizontal',
    links: _,
    className,
    ...divProps
  } = props;

  const id = useId();
  const drawerId = `${id}-drawer`;
  const ref = useRef<HTMLDivElement>(null);
  const overflowing = useOverflow(ref, 'x');

  const drawerControl = useDialogControl(drawerId);

  const handleSelectionChange = () => {
    drawerControl.close();
  };

  return (
    <div ref={ref} className={cn(
      'relative overflow-hidden p-2',
      className
    )} {...divProps}>
      <NavigationTabs id={id} overflowing={overflowing} base={props} />

      <div className="absolute left-0 top-0 flex h-full items-center p-2">
        <Button
          aria-label="Show navigation items"
          variant="faded"
          color="background"
          dialog={drawerId}
          iconify
          className={cn(
            overflowing ? '' : 'hidden',
          )}
        >
          <Bars3Icon />
        </Button>
      </div>

      {orientation === 'horizontal' ? (<>
        <Drawer id={drawerId} title={label} direction="left">
          <NavigationTabs
            base={{
              ...props,
              orientation: 'vertical'
            }}
            id={id}
            overflowing={false}
            onSelectionChange={handleSelectionChange}
          />
        </Drawer>
        <NavigationPopovers base={props} id={id} />
      </>) :null}

    </div>
  );
}
