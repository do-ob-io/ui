'use client';

import { ModalOverlay, Modal, Dialog } from 'react-aria-components';
// import { cn } from '@do-ob/ui/utility';
import type { DrawerProps } from './Drawer.types';
import { nop } from '@do-ob/core';
import { useDebounce } from '@do-ob/ui/hooks';

export function Drawer({
  open = false,
  dismissable = true,
  onClose = nop,
  onOpen = nop,
  onOpenChange = nop,
  children,
  // className,
  // ...props
}: DrawerProps & React.HTMLAttributes<HTMLElement>) {

  const isOpen = useDebounce(open, 300);

  const handleOpenChange = (next: boolean) => {
    onOpenChange(next);
    if (!next) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <ModalOverlay
      className="fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-all duration-300 entering:bg-transparent entering:backdrop-blur-0 exiting:bg-transparent exiting:backdrop-blur-0"
      isOpen={open}
      isDismissable={dismissable}
      isEntering={!open}
      isExiting={!open && isOpen}
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
