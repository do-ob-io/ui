import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Button, ButtonProps, Modal, ModalHeader, ModalBody, useDisclosure, ModalContent } from '@nextui-org/react';
import { SearchAction, search } from '@do-ob/ui/actions';
import { SearchForm } from '../SearchForm/SearchForm';

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
  action = search,
  ...props
}: SearchButtonProps) {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (<>
    <Button isIconOnly onPress={onOpen} aria-label="Search website" {...props}>
      <MagnifyingGlassIcon className="size-5"  />
    </Button>
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Search"
      size="lg"
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
