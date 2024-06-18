import { configUI } from '@do-ob/ui/config';
import { Image as NextUIImage, ImageProps } from '@nextui-org/react';

export function Image(props: ImageProps) {

  const image = configUI.get('image');

  return (
    <NextUIImage
      as={image}
      {...props}
    />
  );
}
