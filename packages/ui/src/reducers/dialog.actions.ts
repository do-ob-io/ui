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
  }
} | {
  type: 'dialog/open',
  payload: {
    id: string;
  }
} | {
  type: 'dialog/close',
  payload: {
    id: string;
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
export function toggle(id: string): DialogAction {
  return {
    type: 'dialog/toggle',
    payload: {
      id,
    }
  };
}

/**
 * Opens a dialog.
 */
export function open(id: string): DialogAction {
  return {
    type: 'dialog/open',
    payload: {
      id,
    }
  };
}

/**
 * Closes a dialog.
 */
export function close(id: string): DialogAction {
  return {
    type: 'dialog/close',
    payload: {
      id,
    }
  };
}
