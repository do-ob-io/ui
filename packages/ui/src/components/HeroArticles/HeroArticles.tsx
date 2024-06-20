import { clsx } from '@do-ob/core';
import { HeroArticlesProps } from './data/HeroArticlesProps';
import { Button, Card, CardFooter, Image } from '@nextui-org/react';
// import { configUI } from '@do-ob/ui/config';

export type HeroVariant = 'standard' | 'prompt';

export function HeroArticles({
  ...props
}: HeroArticlesProps) {

  // const image = configUI.get('image');

  const {
    className,
    articles,
  } = props;

  return (
    <section
      aria-label="Introduction"
      className={clsx('grid grid-cols-1 items-center gap-8 md:grid-cols-2', className)}
    >
      {articles.slice(0, 3).map((article, index) => (
        <Card
          key={article.title}
          className={clsx('group relative w-full cursor-pointer border-none', index === 0 && 'md:col-span-2')}
          radius="lg"
        >
          <Image
            width={2048}
            height={1365}
            className="aspect-video h-auto w-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
            src={article.image}
          />
          <CardFooter className="absolute top-2 z-20 ml-2 flex w-3/5 flex-col items-start gap-8 overflow-hidden px-8 py-4">
            <article className="float-left flex flex-col items-center justify-center gap-8">
              <h1 className={clsx(index === 0 ? 'text-5xl' : 'text-2xl', 'font-bold tracking-tight text-white')}>{article.title}</h1>
            </article>
            <Button
              size={index === 0 ? 'lg' : 'md'}
              color="primary"
              variant="solid"
              className={clsx(index === 0 && 'text-lg', 'font-bold')}
            >
              Read More
            </Button>
          </CardFooter>
          
          <div className="absolute left-0 top-0 z-10 size-full bg-gradient-to-br from-black/80 from-20% to-transparent to-60%" />
          <div className="absolute left-0 top-0 z-10 size-full bg-black/40 transition-opacity group-hover:opacity-0" />
        </Card>
      ))}

    </section>
  );

};
