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
} 

export function Header({
  brand,
  navigation,
}: HeaderProps) {
  return (
    <header className="flex w-full flex-row items-center gap-4 border border-red-500 p-4">
      <Brand {...brand} style={{ flex: 1 }} />
      <Navigation {...navigation} style={{ flex: 2 }}/>
      <div className="size-full bg-green-500" style={{ flex: 1 }}>&nbsp;</div>
    </header>
  );
}
