import { cn } from '@do-ob/ui/utility';
import { Brand, BrandProps, Navigation, NavigationProps } from '@do-ob/ui/widgets';

export interface HeaderProps {
  /**
   * Branding properties.
   */
  brand?: BrandProps;

  /**
   * Navigation properties.
   */
  navigation?: NavigationProps;

  /**
   * Maximum width of the header.
   */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const maxWidthScreenStyles = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
};

export function Header({
  brand,
  navigation,
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
        'flex w-full items-center justify-center gap-4 px-6 py-4',
        maxWidthScreenStyles[maxWidth]
      )}>
        <Brand {...brand}/>
        <Navigation {...navigation} style={{ flex: 2 }}/>
        <div className="size-full bg-green-500" style={{ flex: 1 }}>&nbsp;</div>
      </div>
    </header>
  );
}
