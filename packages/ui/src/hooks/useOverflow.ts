import { useState, useEffect, useCallback } from 'react';

export function useOverflow(
  ref: React.RefObject<HTMLElement | null>,
  type: 'x' | 'y' | undefined = undefined
): boolean | undefined {
  const [ isOverflowing, setIsOverflowing ] = useState<boolean | undefined>();

  const checkOverflow = useCallback(() => {
    if (ref.current) {
      const { current } = ref;
      const overflowX = type === 'x' || type === undefined;
      const overflowY = type === 'y' || type === undefined;
      const hasOverflow =
        (overflowY && current.scrollHeight > current.clientHeight) ||
        (overflowX && current.scrollWidth > current.clientWidth);
      setIsOverflowing(hasOverflow);
    }
  }, [ ref, type ]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    window.addEventListener('resize', checkOverflow);

    // Create a mutation observer to detect changes in the children
    const observer = new MutationObserver(checkOverflow);

    // Start observing the target node for configured mutations
    observer.observe(node, {
      childList: true, // Observe changes to the children
      subtree: true, // Observe changes to all descendants
      attributes: true, // Observe attribute changes
      characterData: true, // Observe changes to the text of nodes
    });
    
    return () => {
      window.removeEventListener('resize', checkOverflow);
      observer.disconnect();
    };
  }, [ checkOverflow, ref ]);

  return isOverflowing;
};
