import { cn } from '@do-ob/ui/utility';
import { Brand, Navigation } from '@do-ob/ui/widgets';
import type { HeaderProps } from './Header.types';
import { Toolbar } from 'react-aria-components';
import { SocialButtons } from '../SocialButtons/SocialButtons';

const maxWidthScreenStyles = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
};

export function HeaderStandard({
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
        'flex w-full items-center justify-center',
        className
      )}
      {...props}
    >
      <div className={cn(
        'flex w-full flex-wrap items-center justify-center gap-4 px-6 py-4',
        maxWidthScreenStyles[maxWidth]
      )}>
        <Brand href={brand?.href ?? '/'} {...brand}/>
        <Navigation {...navigation} style={{ flex: 2 }}/>
        <Toolbar>
          <SocialButtons socials={socials} />
        </Toolbar>
      </div>
    </header>
  );
}
