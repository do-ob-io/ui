import { HeroProps } from '../data/HeroProps';
import { TypewriterInput } from '@do-ob/ui/widgets';

export function HeroAction_PromptInput({ base: {
  actionText
} }: { base: HeroProps }) {

  const words = actionText ? actionText.split(';').map(word => word.trim()) : [];

  return (
    <div className="flex gap-4">
      {actionText ? (
        <TypewriterInput
          loop={words.length > 1 ? 0 : 1}
          words={words}
          typeSpeed={40}
          deleteSpeed={20}
          color="primary"
        />
      ) : null}
    </div>
  );
}
