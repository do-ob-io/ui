import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Button, Modal, ModalHeader, ModalBody, useDisclosure, ModalContent } from '@nextui-org/react';
import { SearchAction, search } from '@do-ob/ui/actions';
import { SearchForm } from '../SearchForm/SearchForm';

/**
 * Navigation Brand properties
 */
export interface SearchButtonProps {
  /**
   * The search action
   * 
   * @default '#'
   */
  action?: SearchAction;

  /**
   * The size of the search button.
   * 
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Navigation Search component
 */
export function SearchButton({
  action = search,
  size = 'md',
}: SearchButtonProps) {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (<>
    <Button isIconOnly onPress={onOpen} size="sm" aria-label="Search website" variant="faded">
      <MagnifyingGlassIcon className="size-5"  />
    </Button>
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Search"
      size={size}
      hideCloseButton
    >
      <ModalContent>
        <ModalHeader className="p-1">
          <SearchForm action={action} />
        </ModalHeader>
        <ModalBody className="p-2">
          &nbsp;
        </ModalBody>
      </ModalContent>
    </Modal>
  </>);
}
