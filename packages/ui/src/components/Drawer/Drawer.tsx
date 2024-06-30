'use client';

import { ModalOverlay, Modal, Dialog, Heading } from 'react-aria-components';
// import { cn } from '@do-ob/ui/utility';
import type { DrawerProps } from './Drawer.types';
import { nop } from '@do-ob/core';
import { dialogActions } from '@do-ob/ui/reducer';
import { useDebounce, useDialogControl } from '@do-ob/ui/hooks';
import { Button, Divider } from '@do-ob/ui/components';
import { use, useCallback, useEffect } from 'react';
import { DialogContext, DialogDispatchContext } from '@do-ob/ui/context';
import { cn } from '@do-ob/ui/utility';
import { XMarkIcon } from '@do-ob/ui/icons';

/**
 * Map of direction tailwind classes.
 */
const directionStyles = {
  top: 'top-0 left-0 right-0 entering:translate-y-[-100%] exiting:translate-y-[-100%]',
  right: 'top-0 right-0 bottom-0 entering:translate-x-full exiting:translate-x-full',
  bottom: 'left-0 right-0 bottom-0 entering:translate-y-full exiting:translate-y-full',
  left: 'top-0 left-0 bottom-0 entering:translate-x-[-100%] exiting:translate-x-[-100%]',
};

export function Drawer({
  id,
  title,
  hideTitle = false,
  dismissable = true,
  length = '33%',
  direction = 'right',
  onClose = nop,
  onOpen = nop,
  onOpenChange = nop,
  children,
  // className,
  // ...props
}: DrawerProps & React.HTMLAttributes<HTMLElement>) {

  const drawer = use(DialogContext).items[id] ?? { id, open: false };
  const dispatch = use(DialogDispatchContext);
  const isOpen = useDebounce(!!drawer.open, 300);

  const controls = useDialogControl(id);

  const handleOpenChange = useCallback((next: boolean) => {
    onOpenChange(next);
    if (!next) {
      if (dismissable && drawer.open) {
        controls.close();
      }
      onClose();
    } else {
      onOpen();
    }
  }, [ onOpenChange, onClose, onOpen, dismissable, drawer.open, controls ]);

  useEffect(() => {
    dispatch(dialogActions.register(id));
    return () => {
      dispatch(dialogActions.unregister(id));
    };
  }, [ dispatch, id ]);

  return (
    <ModalOverlay
      className="fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-all duration-300 entering:bg-transparent entering:backdrop-blur-0 exiting:bg-transparent exiting:backdrop-blur-0"
      isOpen={drawer.open}
      isDismissable={dismissable}
      isEntering={!drawer.open}
      isExiting={!drawer.open && isOpen}
      onOpenChange={handleOpenChange}
    >
      <Modal
        
        className={cn(
          'fixed min-w-80 transform-gpu bg-white shadow-md transition-all duration-500',
          directionStyles[direction],
        )}
        style={{
          width: direction === 'top' || direction === 'bottom' ? '100%' : length,
          height: direction === 'top' || direction === 'bottom' ? length : '100%',
        }}
      >
        <Dialog className="p-4 focus-visible:outline-none" aria-label={hideTitle ? title : undefined}>
          {!hideTitle ? (
            <Heading slot="title" className="mb-2 flex flex-row items-center text-xl">
              <div style={{ flex: 1 }}>{title}</div>
              <Button
                color="background"
                iconify
                aria-label="Close"
                onPress={() => controls.close()}
              >
                <XMarkIcon />
              </Button>
            </Heading>
          ): null}
          <Divider className="mb-2" />
          {children}
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
}
