import { HeroProps } from '../data/HeroProps';
import { TypewriterInput } from '@do-ob/ui/components';

export function HeroAction_PromptInput({ base: {
  actionText
} }: { base: HeroProps }) {

  const words = actionText ? actionText.split(';').map(word => word.trim()) : [];

  return (
    <div className="flex gap-4">
      {actionText ? (
        <TypewriterInput
          label="Prompt"
          labelPlacement="outside"
          loop={words.length > 1 ? 0 : 1}
          words={words}
          typeSpeed={40}
          deleteSpeed={20}
          variant="bordered"
          color="primary"
          size="lg"
          classNames={{
            input: 'text-xl'
          
          }}
        />
      ) : null}
    </div>
  );
}
