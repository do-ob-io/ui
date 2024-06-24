'use client';

import React from 'react';
import { twMerge } from '@do-ob/ui/utility';
import { DoobUiContext } from '@do-ob/ui/context';

export interface ImageProps<
  Element extends React.ElementType = 'img'
> extends React.ImgHTMLAttributes<HTMLImageElement> {
  as?: Element;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  objectPosition?: string;
}

export function Image<
  Element extends React.ElementType
>({
  as,
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  style,
  objectFit = 'cover',
  objectPosition = 'center',
  ...props
}: ImageProps<Element> & React.ComponentPropsWithoutRef<Element>) {

  const { image } = React.useContext(DoobUiContext);
  const [ loaded, loadedSet ] = React.useState(false);

  const Tag = as ?? image ?? 'img';

  return (
    <picture className="relative flex items-center justify-center" style={{ width: width, height: height }}>
      <div className={twMerge('absolute inset-0 size-full animate-pulse bg-background-fg/50 dark:bg-background-dark-fg/50 rounded-md',  loaded && 'hidden')} />
      <Tag
        className={twMerge(
          'object-cover relative',
          className
        )}
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => loadedSet(true)}
        style={{
          objectFit,
          objectPosition,
          ...style,
        }}
        {...props}
      />
    </picture>
  );
}
