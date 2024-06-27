'use client';

import { DoobUiContext } from '@do-ob/ui/context';
import { cn } from '@do-ob/ui/utility';
import { useState, CSSProperties, use } from 'react';

export interface ImageProps<
  Element extends React.ElementType = 'img'
> extends React.ImgHTMLAttributes<HTMLImageElement> {
  as?: Element;
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill';
  objectFit?: CSSProperties['objectFit'];
  objectPosition?: CSSProperties['objectPosition'];
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  className?: string;
  onLoadingComplete?: (result: { naturalWidth: number; naturalHeight: number }) => void;
}

export function Image<
  Element extends React.ElementType
>({
  as,
  src,
  alt,
  width,
  height,
  layout = 'intrinsic',
  objectFit,
  objectPosition,
  priority,
  // quality,
  // placeholder,
  // blurDataURL,
  className,
  onLoadingComplete,
  ...props
}: ImageProps<Element> & React.ComponentPropsWithoutRef<Element>) {
  const { image } = use(DoobUiContext);
  const [ isLoading, setIsLoading ] = useState(!priority);

  const Tag = as ?? image ?? 'img';

  const style: CSSProperties = {
    width: layout === 'fill' ? '100%' : width,
    height: layout === 'fill' ? '100%' : height,
    objectFit,
    objectPosition,
  };

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    const target = event.target as HTMLImageElement;
    if (onLoadingComplete) {
      onLoadingComplete({ naturalWidth: target.naturalWidth, naturalHeight: target.naturalHeight });
    }
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded',
        layout === 'fill' && 'size-full',
        className
      )}
      style={{
        width: layout !== 'fill' && layout !== 'responsive' ? width : undefined,
        height: layout !== 'fill' && layout !== 'responsive' ? height : undefined
      }}
    >
      {isLoading ? (
        <div className="absolute inset-0 size-full animate-pulse bg-gray-500 opacity-50" />
      ) : null}
      <Tag
        src={src}
        alt={alt}
        className={`absolute inset-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={style}
        onLoad={handleLoad}
        height={height}
        width={width}
        decoding={priority ? 'sync' : 'async'}
        loading={priority ? 'eager' : 'lazy'}
        {...props}
      />
    </div>
  );
};
