import { HeroProps } from '../data/HeroProps';
import { Button } from '@nextui-org/react';

export function HeroAction_Buttons({ base: {
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
