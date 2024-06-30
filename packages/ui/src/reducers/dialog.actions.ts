export type DialogAction = {
  type: 'dialog/register',
  payload: {
    id: string;
  }
} | {
  type: 'dialog/unregister',
  payload: {
    id: string;
  }
} | {
  type: 'dialog/toggle',
  payload: {
    id: string;
    triggerRef?: React.RefObject<HTMLElement | null>;
  }
} | {
  type: 'dialog/open',
  payload: {
    id: string;
    triggerRef?: React.RefObject<HTMLElement | null>;
  }
} | {
  type: 'dialog/close',
  payload: {
    id: string;
    triggerRef?: React.RefObject<HTMLElement | null>;
  }
};

/**
 * Registers a dialog.
 */
export function register(id: string): DialogAction {
  return {
    type: 'dialog/register',
    payload: {
      id,
    }
  };
}

/**
 * Unregisters a dialog.
 */
export function unregister(id: string): DialogAction {
  return {
    type: 'dialog/unregister',
    payload: {
      id,
    }
  };
}

/**
 * Toggles a dialog between open and closed.
 */
export function toggle(id: string, triggerRef?: React.RefObject<HTMLElement | null>): DialogAction {
  return {
    type: 'dialog/toggle',
    payload: {
      id,
      triggerRef,
    }
  };
}

/**
 * Opens a dialog.
 */
export function open(id: string, triggerRef?: React.RefObject<HTMLElement | null>): DialogAction {
  return {
    type: 'dialog/open',
    payload: {
      id,
      triggerRef,
    }
  };
}

/**
 * Closes a dialog.
 */
export function close(id: string, triggerRef?: React.RefObject<HTMLElement | null>): DialogAction {
  return {
    type: 'dialog/close',
    payload: {
      id,
      triggerRef,
    }
  };
}
