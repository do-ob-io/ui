
import { HeroProps, HeroProvider } from './data/HeroProvider';
import { clsx, clmg } from '@do-ob/core';

export function Hero(props: HeroProps) {

  const { title, subtitle, className } = props;

  return (
    <HeroProvider {...props}>
      <section
        aria-label="Introduction"
        className={clmg(clsx('flex w-full flex-col items-center justify-center', className))}>
        <div>
          <h1 className="text-center text-4xl font-bold">{title}</h1>
          <p className="text-center text-lg">{subtitle}</p>
        </div>
      </section>
    </HeroProvider>
  );
};
