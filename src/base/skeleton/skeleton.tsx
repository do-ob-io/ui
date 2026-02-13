import { cn } from '@do-ob/core/web';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('bg-muted rounded-md animate-pulse', className)}
      {...props}
    />
  );
}

export { Skeleton };
