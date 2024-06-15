import { Input } from '@nextui-org/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

/**
 * SearchInput properties
 */
export interface SearchInputProps {
  /**
   * The placeholder text to display.
   */
  placeholder?: string;
}

/**
 * SearchInput component
 */
export function SearchInput({
  placeholder = 'Type to search...',
}: SearchInputProps) {
  return (
    <Input
      classNames={{
        base: 'max-w-full h-10',
        mainWrapper: 'h-full',
        input: 'text-small',
        inputWrapper: 'h-full font-normal text-default-500 bg-default-400/30 dark:bg-default-500/30',
      }}
      placeholder={placeholder}
      size="sm"
      startContent={<MagnifyingGlassIcon className="size-6" />}
      type="search"
    />
  );
}
