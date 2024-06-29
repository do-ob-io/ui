export type DrawerAction = {
  type: 'drawer/register',
  payload: {
    id: string;
  }
} | {
  type: 'drawer/unregister',
  payload: {
    id: string;
  }
} | {
  type: 'drawer/open',
  payload: {
    id: string;
  }
} | {
  type: 'drawer/close',
  payload: {
    id: string;
  }
};

/**
 * Registers a drawer.
 */
export function register(id: string): DrawerAction {
  return {
    type: 'drawer/register',
    payload: {
      id,
    }
  };
}

/**
 * Unregisters a drawer.
 */
export function unregister(id: string): DrawerAction {
  return {
    type: 'drawer/unregister',
    payload: {
      id,
    }
  };
}

/**
 * Opens a drawer.
 */
export function open(id: string): DrawerAction {
  return {
    type: 'drawer/open',
    payload: {
      id,
    }
  };
}

/**
 * Closes a drawer.
 */
export function close(id: string): DrawerAction {
  return {
    type: 'drawer/close',
    payload: {
      id,
    }
  };
}
