import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Input, Kbd } from '@nextui-org/react';

/**
 * Navigation Search component
 */
export function SearchFormInputs() {

  return (
    <Input
      name="query"
      classNames={{
        base: 'max-w-full h-12',
        mainWrapper: 'h-full',
        input: 'text-xl',
        inputWrapper: 'h-full font-normal text-default-500 bg-transparent shadow-none',
      }}
      placeholder="Search website..."
      size="lg"
      startContent={<MagnifyingGlassIcon className="size-7" />}
      endContent={
        <Kbd>ESC</Kbd>
      }
      type="search"
    />);
}
