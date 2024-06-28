'use client';

import React from 'react';
import {
  Popover as AriaPopover,
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger,
  // OverlayArrow as AriaOverlayArrow
} from 'react-aria-components';
import { fillStyles, cn } from '@do-ob/ui/utility';
// import { ArrowUpIcon } from '@do-ob/ui/icons-hero-solid';

export interface PopoverProps {
  /**
   * The content of the popover.
   */
  content: React.ReactNode;
  /**
   * The trigger element of the popover.
   */
  trigger: React.ReactNode;
  /**
   * The placement of the popover.
   */
  placement?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * The offset of the popover.
   */
  offset?: number;
}

export function Popover({
  content,
  trigger,
  placement = 'bottom',
  offset = 8,
}: PopoverProps) {
  return (
    <AriaDialogTrigger>
      {trigger}
      <AriaPopover
        placement={placement}
        offset={offset}
        className="min-w-56 origin-top-left overflow-auto rounded bg-background p-1 shadow-lg ring-1 ring-background-fg/30 fill-mode-forwards entering:animate-in entering:fade-in entering:zoom-in-95 exiting:animate-out exiting:fade-out exiting:zoom-out-95 dark:bg-background-dark dark:ring-background-dark-fg/30"
      >
        {/* <AriaOverlayArrow>
          <ArrowUpIcon className="block size-4 bg-red-500 fill-black" />
        </AriaOverlayArrow> */}
        <AriaDialog
          className={cn(
            'p-2 focus-visible:outline-none',
            fillStyles.background,
          )}
        >
          {content}
        </AriaDialog>
      </AriaPopover>
    </AriaDialogTrigger>
  );
}
