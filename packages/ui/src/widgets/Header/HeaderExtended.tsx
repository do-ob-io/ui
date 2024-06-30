import { cn } from '@do-ob/ui/utility';
import { Toolbar } from 'react-aria-components';
import { Brand, Navigation, SocialButtons } from '@do-ob/ui/widgets';
import type { HeaderProps } from './Header.types';
import { Divider } from '@do-ob/ui/components';

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
        'flex w-full items-center justify-center gap-4 md:px-6 md:py-4',
        className
      )}
      {...props}
    >
      <div className={cn(
        'grid w-full grid-cols-2 grid-rows-2 items-center justify-center [grid-template-areas:"brand_brand""nav_tools"] md:[grid-template-areas:"brand_tools""nav_nav"]',
        maxWidthScreenStyles[maxWidth]
      )}>
        <div className="flex justify-center [grid-area:brand] md:justify-start">
          <Brand href={brand?.href ?? '/'} {...brand}/>
        </div>
        <div className="flex justify-start [grid-area:nav] md:px-6">
          <Navigation {...navigation}/>
        </div>
        <div className="flex justify-end [grid-area:tools]">
          <Toolbar className="flex flex-row">
            <SocialButtons socials={socials} size="sm" />
            <Divider orientation="vertical" className="mx-2"/>
            <SocialButtons socials={socials?.slice(0,2)} size="sm" />
          </Toolbar>
        </div>
      </div>
    </header>
  );
}
