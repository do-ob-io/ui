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
    <header className="flex flex-row items-end gap-4 border border-red-500 p-4">
      <div className="flex">
        <Brand {...brand} />
      </div>
      <div className="col-span-2" style={{ flexGrow: 2 }}>
        <Navigation {...navigation} />
      </div>
    </header>
  );
}
