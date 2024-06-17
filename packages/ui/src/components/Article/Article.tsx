import { HTMLAttributes, PropsWithChildren } from 'react';
import { clsx, clmg } from '@do-ob/core';

export function Article({ children, className, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <article className={clmg(clsx('prose dark:prose-invert', className))} {...props}>
      {children}
    </article>
  );
}
