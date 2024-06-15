import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Button, Modal, useDisclosure } from '@nextui-org/react';

/**
 * Navigation Brand properties
 */
export interface NavigationPart_SearchProps {
  /**
   * The search form action URL.
   */
  search?: string;
}

/**
 * Navigation Search component
 */
export function NavigationPart_Search({
  search = '#'
}: NavigationPart_SearchProps) {

  const { isOpen, onOpen } = useDisclosure();

  return (
    <Button isIconOnly onClick={onOpen}>
      <MagnifyingGlassIcon className="size-6" />
    </Button>
  );
}
