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

/**
 * Brand
 */
export function Brand({
  name,
  nameShort,
  image = null,
  size = 'md',
  classNames = {},
}: BrandProps) {

  const imageSizes = {
    sm: 40,
    md: 64,
    lg: 128,
  };

  const textSizes = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-6xl',
  };

  return (
    <div className="inline-flex w-full items-center gap-4 @container">
      {image && <Image
        src={image}
        alt="Brand"
        width={imageSizes[size]}
        height={imageSizes[size]}
        loading="eager"
        className={classNames.image}
      />}
      {(name && name?.length) ? (<h1 className={twMerge(
        'tracking-tight hidden @md:inline',
        textSizes[size],
        'leading-none',
        classNames.name,
      )}>
        {name}
      </h1>) : null}
      {(name && name?.length) ? (<h1 className={twMerge(
        'tracking-tight leading-tight inline @md:hidden',
        textSizes[size],
        classNames.name,
      )}>
        {nameShort ?? name}
      </h1>) : null}
    </div>
  );
}

