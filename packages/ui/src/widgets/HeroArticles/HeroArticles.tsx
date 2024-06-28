import { clsx } from '@do-ob/core';
import { HeroArticlesProps } from './data/HeroArticlesProps';
import { Button, Image, Link } from '@do-ob/ui/components';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
// import { configUI } from '@do-ob/ui/config';

function truncateToWordBoundary(text: string, maxLength = 120): string {

  // If the text is already within the limit, return it as is
  if (text.length <= maxLength) {
    return text;
  }

  // Find the last space within the allowed range
  const trimmedText = text.slice(0, maxLength);
  const lastSpaceIndex = trimmedText.lastIndexOf(' ');

  // If no space is found, we should still cut off the string at maxLength
  if (lastSpaceIndex === -1) {
    return trimmedText;
  }

  // Otherwise, return the string truncated at the last space
  return trimmedText.slice(0, lastSpaceIndex);
}

export type HeroVariant = 'standard' | 'prompt';

export function HeroArticles({
  ...props
}: HeroArticlesProps) {

  // const image = configUI.get('image');

  const {
    className,
    articles,
    announcement,
    latest,
    radius,
    imageNode,
  } = props;

  let roundedClass = '';
  switch (radius) {
    case 'sm':
      roundedClass = 'rounded-s,';
      break;
    case 'md':
      roundedClass = 'rounded-md';
      break;
    case 'lg':
      roundedClass = 'rounded-lg';
      break;
    case 'none':
      roundedClass = 'rounded-none';
      break;
    default:
      roundedClass = 'rounded-md';
      break;
  }

  return (
    <section
      aria-label="Articles"
      className="flex flex-col"
    >
      {announcement || latest ? (
        <div className="mb-4 flex flex-row gap-4 p-2">
          {announcement ? (
            <Button
              as={Link}
              variant="bordered"
              color="primary"
              // radius={radius}
              href={announcement.url}
              onClick={announcement.onCall}
            >
              {announcement.title}
            </Button>
          ): null}
          {latest ? (
            <Button
              as={Link}
              variant="light"
              // radius={radius}
              className="flex items-center justify-center"
              endContent={<ArrowRightIcon className="size-4" />}
              href={latest.url}
              onClick={latest.onCall}
            >
              {latest.title}
            </Button>
          ): null}
        </div>
      ) : null}
      <div className={clsx('grid grid-cols-1 items-center gap-8 lg:grid-cols-2', className)}>
        {articles.map((article, index) => (
          <Link
            key={article.title}
            href={article.url}
            aria-label="Read More"
            className={clsx('dark group relative block w-full cursor-pointer text-clip border-none shadow-[0_0_12px_2px_rgba(0,0,0,0.5)] hover:opacity-100 hover:!brightness-100 dark:border dark:border-white', index === 0 && 'lg:col-span-2', roundedClass)}    
          >
            <div className={clsx('relative m-2 overflow-hidden backdrop-blur-md', roundedClass)}>
              <Image
                as={imageNode}
                alt={article.title}
                width={2048}
                height={1365}
                className="aspect-[3/2] h-auto w-full object-cover"
                layout="fill"
                radius={radius}
                src={article.image}
              />
              <div className={clsx(index === 0 ? 'w-11/12 lg:w-4/5' : 'w-11/12','absolute top-2 z-20 ml-2 flex flex-col items-start gap-4 overflow-hidden px-8 py-4 lg:gap-6')}>
                <article className="float-left flex flex-col items-start justify-center gap-4 lg:gap-6">
                  <h1 className={clsx(index === 0 ? 'text-3xl lg:text-5xl' : 'text-3xl lg:text-3xl', 'font-bold tracking-tight text-white drop-shadow-[0_0_2px_rgba(0,0,0,1)]')}>{article.title}</h1>
                  {index === 0 ? (
                    <h2 className={clsx(index === 0 ? 'text-base lg:text-2xl' : 'text-base lg:text-lg', 'hidden text-white/60 drop-shadow-[0_0_2px_rgba(0,0,0,1)] lg:inline')}>{truncateToWordBoundary(article.subtitle) + ' ...'}</h2>
                  ) : null}
                </article>
                <Button
                  as="div"
                  size="lg"
                  color="primary"
                  variant="bordered"
                >
                Read More
                </Button>
              </div>
          
              <div className="absolute left-0 top-0 z-10 size-full bg-gradient-to-br from-black/80 from-20% to-transparent to-60%" />
              <div className="absolute left-0 top-0 z-10 size-full bg-black/40 transition-opacity group-hover:opacity-0 group-focus:opacity-0" />
            </div>
          </Link>
        ))}
      </div>

    </section>
  );

};
