import { HeroProps } from '../data/HeroProps';

export function HeroAction_Buttons({ base: {
  actionText
} }: { base: HeroProps }) {
  return (
    <div className="flex gap-4">
      {actionText ? (
        <input
          placeholder={actionText}
        />
      ) : null}
    </div>
  );
}
