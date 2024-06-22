import { HeroProps } from '../data/HeroProps';
import { Input } from '@nextui-org/react';

export function HeroAction_Buttons({ base: {
  actionText
} }: { base: HeroProps }) {
  return (
    <div className="flex gap-4">
      {actionText ? (
        <Input
          placeholder={actionText}
        />
      ) : null}
    </div>
  );
}
