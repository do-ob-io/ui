import { cn } from '@do-ob/ui/utility';
import { Brand, Navigation } from '@do-ob/ui/widgets';
import type { HeaderProps } from './Header.types';

const maxWidthScreenStyles = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
};

export function HeaderExtended({
  brand,
  navigation,
  maxWidth = '2xl',
  className,
  ...props
}: HeaderProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <header
      className={cn(
        'flex w-full items-center justify-center gap-4 px-6 py-4',
        className
      )}
      {...props}
    >
      <div className={cn(
        'grid w-full grid-cols-2 grid-rows-2 items-center justify-center [grid-template-areas:"brand_tools""nav_nav"]',
        maxWidthScreenStyles[maxWidth]
      )}>
        <Brand href={brand?.href ?? '/'} className="[grid-area:brand]" {...brand}/>
        <Navigation {...navigation} className="[grid-area:nav]" style={{ flex: 2 }}/>
        <div className="size-full bg-green-500 [grid-area:tools]" style={{ flex: 1 }}>&nbsp;</div>
      </div>
    </header>
  );
}
