'use client';

import React from 'react';
import { DoobUiContext } from '@do-ob/ui/context';
import { Image as NextUIImage, ImageProps } from '@nextui-org/react';

export function Image(props: ImageProps) {

  const { image } = React.useContext(DoobUiContext);

  return (
    <NextUIImage
      as={image}
      {...props}
    />
  );
}
