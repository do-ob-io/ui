'use client';

import React from 'react';
import { twMerge } from '@do-ob/ui/utility';

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

  const Tag = as ?? 'img';

  return (
    <picture className="relative">
      <div className="absolute inset-0 size-full animate-pulse bg-gray-500" />
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
