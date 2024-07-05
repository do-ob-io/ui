import { useMemo } from 'react';

type Flattened<T extends object> = T & {
  /**
   * Determines the depth the node was in the tree.
   */
  level: number;

  /**
   * The number of children the node has.
   */
  children: number;
};

function flattenTree<T extends object>(
  tree: T[],
  getChildren: (node: T) => T[] | undefined,
  level: number = 0
): Flattened<T>[] {
  return tree.reduce((acc: Flattened<T>[], node: T) => {
    const children = getChildren(node);
    acc.push({ ...node, level, children: children?.length || 0 });

    if (children && children.length > 0) {
      acc.push(...flattenTree(children, getChildren, level + 1));
    }

    return acc;
  }, []);
}


export function useTreeFlatten<T extends object>(
  tree: T[],
  getChildren: (node: T) => T[] | undefined
): Flattened<T>[] {

  const flattenedTree = useMemo(() => (
    flattenTree(tree, getChildren)
  ), [ tree, getChildren ]);

  return flattenedTree;
}
