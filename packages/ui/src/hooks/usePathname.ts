import { useEffect, useState } from 'react';

/**
 * A simple hook to get the current pathname
 */
export function usePathname(override?: string): string {
  const [ pathname, setPathname ] = useState<string>(override ?? window.location.pathname);

  useEffect(() => {
    if(override) {
      setPathname(override);
      return;
    }

    const handleLocationChange = () => {
      setPathname(window.location.pathname);
    };

    // Function to wrap history methods to dispatch events
    const wrapHistoryMethod = (method: 'pushState' | 'replaceState') => {
      const originalMethod = history[method];

      return function (this: History, ...args: never[]) {
        const result = originalMethod.apply(this, args as unknown as Parameters<typeof originalMethod>);
        window.dispatchEvent(new Event('locationchange'));
        return result;
      };
    };

    // Wrap the pushState and replaceState methods
    history.pushState = wrapHistoryMethod('pushState');
    history.replaceState = wrapHistoryMethod('replaceState');

    // Listen for popstate and custom locationchange events
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('locationchange', handleLocationChange);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('locationchange', handleLocationChange);
    };
  }, [ override ]);

  return pathname;
};
