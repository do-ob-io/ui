import { useTypewriter } from '@do-ob/ui/hooks';
import { Input, InputProps } from '@nextui-org/react';

export interface TypewriterInputProps extends InputProps {
  /**
   * The words to type
   */
  words: string | string[];

  /**
   * Number of times to loop through the words.
   */
  loop?: number;

  /**
   * The speed of the typing
   */
  typeSpeed?: number;

  /**
   * The speed of the backspacing
   */
  deleteSpeed?: number;

  /**
   * The deltay between typing the next word.
   */
  wordDelay?: number;
}


export function TypewriterInput({
  words: wordsProp,
  loop = 0,
  typeSpeed = 80,
  deleteSpeed = 50,
  wordDelay = 1500,
  ...props
}: TypewriterInputProps) {

  const words = Array.isArray(wordsProp) ? wordsProp : [ wordsProp ];

  const [ text ] = useTypewriter({
    words,
    loop,
    typeSpeed,
    deleteSpeed,
    wordDelay
  });

  return (
    <Input
      {...props}
      placeholder={text}
    />
  );
}
