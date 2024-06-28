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
        <div className="[grid-area:brand]">
          <Brand href={brand?.href ?? '/'} {...brand}/>
        </div>
        <div className="px-6 [grid-area:nav]">
          <Navigation {...navigation} style={{ flex: 2 }}/>
        </div>
        <div className="[grid-area:tools]">
          <div className="flex size-full items-center justify-end">
            <button className="bg-blue-500">Test</button>
          </div>
        </div>
      </div>
    </header>
  );
}
