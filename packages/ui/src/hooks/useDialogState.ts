import { use } from 'react';
import { DialogContext } from '@do-ob/ui/context';

/**
 * Gets the dialog state for the given id
 */
export function useDialogState(id: string) {
  return use(DialogContext).items[id] ?? { id, open: false };
};
