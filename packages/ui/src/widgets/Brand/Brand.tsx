import { Button, Image } from '@do-ob/ui/components';
import { cn } from '@do-ob/ui/utility';

/**
 * Brand properties.
 */
export interface BrandProps {
  /**
   * The brand name.
   */
  name?: string;

  /**
   * Shortened brand name.
   */
  nameShort?: string;

  /**
   * The brand logo.
   */
  logo?: string | null;

  /**
   * The dimensions of the logo.
   */
  logoSize?: [number, number];

  /**
   * Size of the branding
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Hyperlink for the branding.
   */
  href?: string;

  /**
   * Class names for the slots.
   */
  classNames?: {
    name?: string;
    image?: string;
  }
}

const imageSizes = {
  sm: 40,
  md: 64,
  lg: 128,
};

const imageSizeStyles = {
  sm: 'w-8 h-8',
  md: 'w-11 h-11',
  lg: 'w-14 h-14',
};

const textSizes = {
  sm: 'text-2xl',
  md: 'text-3xl',
  lg: 'text-4xl',
};

/**
 * Brand
 */
export function Brand({
  name,
  nameShort,
  logo = null,
  logoSize,
  size = 'md',
  href,
  className,
  classNames = {},
  ...props
}: BrandProps & React.HTMLAttributes<HTMLDivElement>) {
  console.log('test');

  const Tag = href?.length ? Button : 'div' as React.ElementType;
  console.log('Tag', Tag);

  return (
    <Tag className={cn(
      'flex flex-row flex-nowrap items-center gap-4 whitespace-nowrap p-0',
      className
    )} variant={href ? 'light' : undefined} {...props}>
      {logo && <Image
        src={logo}
        alt="Brand"
        width={logoSize?.[0] ?? imageSizes[size]}
        height={logoSize?.[1] ?? imageSizes[size]}
        objectFit="contain"
        priority
        className={cn(
          imageSizeStyles[size],
          classNames.image
        )}
      />}
      {(name && name?.length) ? (<h1 className={cn(
        'hidden tracking-tight text-background-fg dark:text-background-dark-fg lg:inline',
        textSizes[size],
        'whitespace-nowrap leading-none',
        classNames.name,
      )}>
        {name}
      </h1>) : null}
      {(name && name?.length) ? (<h1 className={cn(
        'inline whitespace-nowrap leading-tight tracking-tight text-background-fg dark:text-background-dark-fg lg:hidden',
        textSizes[size],
        classNames.name,
      )}>
        {nameShort ?? name}
      </h1>) : null}
    </Tag>
  );
}

