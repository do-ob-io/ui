import { cn } from '@do-ob/ui/utility';
import { Toolbar } from 'react-aria-components';
import { Brand, Navigation } from '@do-ob/ui/widgets';
import type { HeaderProps } from './Header.types';
import { SocialButtons } from '../SocialButtons/SocialButtons';

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
  socials,
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
        <div className="flex justify-end [grid-area:tools]">
          <Toolbar>
            <SocialButtons socials={socials} />
          </Toolbar>
        </div>
      </div>
    </header>
  );
}
