'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Button, ButtonProps, Modal, ModalHeader, ModalBody, useDisclosure, ModalContent } from '@nextui-org/react';
import { SearchForm } from '../SearchForm/SearchForm';
import { SearchAction } from '@do-ob/ui/types';
import React from 'react';

/**
 * Navigation Brand properties
 */
export interface SearchButtonProps extends ButtonProps {
  /**
   * The search action
   * 
   * @default '#'
   */
  action?: SearchAction;
}

/**
 * Navigation Search component
 */
export function SearchButton({
  action = async () => [],
  ...props
}: SearchButtonProps) {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [ results, resultsSet ] = React.useState<Awaited<ReturnType<SearchAction>>>([]);

  return (<>
    <Button isIconOnly onPress={onOpen} aria-label="Search website" {...props}>
      <MagnifyingGlassIcon className="size-5"  />
    </Button>
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Search"
      size="xl"
      hideCloseButton
    >
      <ModalContent>
        <ModalHeader className="p-1">
          <SearchForm action={action} onResult={resultsSet} />
        </ModalHeader>
        <ModalBody className="p-2">
          {results.map((result, index) => (
            <div key={index}>{result.title}</div>
          ))}
          {results.length === 0 && <p className="p-8 text-foreground/60">Use the input above to build a search query. Results from the query will display here.</p>}
        </ModalBody>
      </ModalContent>
    </Modal>
  </>);
}
