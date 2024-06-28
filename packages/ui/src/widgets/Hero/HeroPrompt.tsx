import { HeroProps } from './data/HeroProps';
import { clsx, clmg } from '@do-ob/core';
import { HeroAction_PromptInput } from './parts/HeroAction_PromptInput';

export function HeroPrompt(props: HeroProps) {

  const {
    title,
    subtitle,
    className,
    classNames
  } = props;

  return (
    <section
      aria-label="Introduction"
      className={clmg(clsx(
        'flex w-full flex-row items-center justify-center',
        className
      ))}
    >
      <div className="flex flex-col gap-4 p-8">
        <h1 className={clsx(
          'text-6xl font-bold tracking-tight',
          classNames?.title
        )}>
          {title}
        </h1>
        <h2 className={clsx('text-3xl font-light text-background-fg dark:text-background-dark-fg', classNames?.subtitle)}>
          {subtitle}
        </h2>

        <div className="h-6" />

        <HeroAction_PromptInput base={props} />

      </div>
    </section>
  );
};
