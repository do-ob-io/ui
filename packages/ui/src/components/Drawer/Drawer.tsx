'use client';

import { ModalOverlay, Modal, Dialog } from 'react-aria-components';
// import { cn } from '@do-ob/ui/utility';
import type { DrawerProps } from './Drawer.types';
import { nop } from '@do-ob/core';
import { dialogActions } from '@do-ob/ui/reducer';
import { useDebounce, useDispatch, useSelector } from '@do-ob/ui/hooks';
import { useEffect } from 'react';

export function Drawer({
  name,
  dismissable = true,
  onClose = nop,
  onOpen = nop,
  onOpenChange = nop,
  children,
  // className,
  // ...props
}: DrawerProps & React.HTMLAttributes<HTMLElement>) {

  const id = `drawer/${name}`;
  const drawer = useSelector((state) => state.dialog.items[id]) ?? { id, open: false };
  const dispatch = useDispatch();
  const isOpen = useDebounce(!!drawer.open, 300);

  const handleOpenChange = (next: boolean) => {
    onOpenChange(next);
    if (!next) {
      if (dismissable && drawer.open) {
        dispatch(dialogActions.close(id));
      }
      onClose();
    } else {
      onOpen();
    }
  };

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
        className="fixed w-1/3 min-w-80 bg-white shadow-md transition-all duration-500 entering:translate-x-full exiting:translate-x-full"
        style={{
          top: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Dialog>
          {children}
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
}
