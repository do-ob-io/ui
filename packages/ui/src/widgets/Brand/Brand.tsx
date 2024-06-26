import { Image } from '@do-ob/ui/components';
import { twMerge } from '@do-ob/ui/utility';

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
   * The brand image.
   */
  image?: string | null;

  /**
   * Size of the branding
   */
  size?: 'sm' | 'md' | 'lg';

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
  image = null,
  size = 'md',
  classNames = {},
  ...props
}: BrandProps & React.HTMLAttributes<HTMLDivElement>) {

  return (
    <div className="flex size-full items-center gap-4" {...props}>
      {image && <Image
        src={image}
        alt="Brand"
        width={imageSizes[size]}
        height={imageSizes[size]}
        loading="eager"
        className={twMerge(
          imageSizeStyles[size],
          classNames.image
        )}
      />}
      {(name && name?.length) ? (<h1 className={twMerge(
        'tracking-tight hidden lg:inline',
        textSizes[size],
        'leading-none whitespace-nowrap',
        classNames.name,
      )}>
        {name}
      </h1>) : null}
      {(name && name?.length) ? (<h1 className={twMerge(
        'tracking-tight leading-tight inline lg:hidden whitespace-nowrap',
        textSizes[size],
        classNames.name,
      )}>
        {nameShort ?? name}
      </h1>) : null}
    </div>
  );
}

