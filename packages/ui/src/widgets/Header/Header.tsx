import type { HeaderProps } from './Header.types';

const variants: Record<NonNullable<HeaderProps['variant']>, () => Promise<React.ComponentType<HeaderProps>>> = {
  standard: async () => (await import('./HeaderStandard')).HeaderStandard,
  extended: async () => (await import('./HeaderExtended')).HeaderExtended,
};

const getVariant = async (variant: NonNullable<HeaderProps['variant']>) => {
  return (await variants[variant]());
};

export async function Header({
  variant = 'standard',
  ...props
}: HeaderProps & React.HTMLAttributes<HTMLDivElement>) {

  const HeaderComponent = await getVariant(variant);

  return <HeaderComponent {...props} />;
}
