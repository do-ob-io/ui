import { HeroProps } from '../data/HeroProps';
import { Button } from '@do-ob/ui/components';

export function HeroPart_Typewriter({ base: {
  actionText
} }: { base: HeroProps }) {
  return (
    <div className="flex gap-4">
      {actionText ? (
        <Button
          color="primary"
          size="lg"
          className="text-lg font-bold tracking-wide"
        >
          {actionText}
        </Button>
      ) : null}
    </div>
  );
}
