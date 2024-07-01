'use client';

import React, { useCallback, useRef } from 'react';
import {
  Popover as AriaPopover,
  Dialog as AriaDialog,
  OverlayArrow as AriaOverlayArrow
} from 'react-aria-components';
import { fillStyles, cn } from '@do-ob/ui/utility';
import { PopoverProps } from './Popover.types';
import { useDialogState, useDialogControl, useDialogRegister, useOutsidePress } from '@do-ob/ui/hooks';

export function Popover({
  id,
  placement = 'bottom',
  offset = 8,
  nonmodal = false,
  hideArrow = false,
  children,
}: React.PropsWithChildren<PopoverProps>) {

  const popoverRef = useRef<HTMLDivElement>(null);

  // Get the popover dialog state.
  const popover = useDialogState(id);

  // Get the popover dialog control.
  const controls = useDialogControl(id);

  const handleOutsidePress = useCallback(() => {
    if(nonmodal) {
      controls.close();
    }
  }, [ controls, nonmodal ]);

  useOutsidePress(popoverRef, handleOutsidePress);

  // Register the popover dialog.
  useDialogRegister(id, 'popover');

  const handleOpenChange = useCallback((next: boolean) => {
    if (!next) {
      controls.close();
    }
  }, [ controls ]);
  
  return (
    <AriaPopover
      ref={popoverRef}
      isOpen={popover.open && !!(popover.triggerRef?.current)}
      triggerRef={popover.triggerRef ?? { current: null }}
      onOpenChange={handleOpenChange}
      placement={placement}
      offset={offset}
      isNonModal={nonmodal}
      shouldCloseOnInteractOutside={(element) => {
        return !!popover.triggerRef && !element.contains(popover.triggerRef?.current);
      }}
      className="min-w-56 origin-top-left rounded bg-background p-1 shadow-lg ring-1 ring-background-fg/30 fill-mode-forwards entering:animate-in entering:fade-in entering:zoom-in-95 exiting:animate-out exiting:fade-out exiting:zoom-out-95 dark:bg-background-dark dark:ring-background-dark-fg/30"
    >
      <AriaOverlayArrow
        className={({ placement }) => cn(
          'absolute left-1/2 z-10 size-[12px] -translate-x-1/2 [&_svg]:fill-background-fg/50 dark:[&_svg]:fill-background-dark-fg/30',
          hideArrow && 'hidden',
          placement === 'top' && '[&_svg]:rotate-0',
          placement === 'bottom' && '[&_svg]:rotate-180',
          placement === 'left' && '[&_svg]:rotate-90',
          placement === 'right' && '[&_svg]:-rotate-90',
        )}
      >
        <svg width={12} height={12} viewBox="0 0 12 12" fill="gray">
          <path d="M0 0 L6 6 L12 0" />
        </svg>
      </AriaOverlayArrow>
      <AriaDialog
        aria-label={id}
        className={cn(
          'p-2 focus-visible:outline-none',
          fillStyles.background,
        )}
      >
        {children}
      </AriaDialog>
    </AriaPopover>
  );
}
