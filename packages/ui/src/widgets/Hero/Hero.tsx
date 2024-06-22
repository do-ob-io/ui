import { HeroPrompt } from './HeroPrompt';
import { HeroStandard } from './HeroStandard';
import { HeroProps } from './data/HeroProps';

export type HeroVariant = 'standard' | 'prompt';

export function Hero({
  variant = 'standard',
  ...props
}: HeroProps & { variant: HeroVariant }) {

  switch (variant) {
    case 'prompt':
      return <HeroPrompt {...props} />;
    default:
      return <HeroStandard {...props} />;
  }
};
