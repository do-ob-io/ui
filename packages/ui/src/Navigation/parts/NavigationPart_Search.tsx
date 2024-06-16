import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Button, Modal, ModalHeader, ModalBody, useDisclosure, ModalContent, Input, Kbd } from '@nextui-org/react';

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

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (<>
    <Button isIconOnly onPress={onOpen} size="sm">
      <MagnifyingGlassIcon className="size-5" />
    </Button>
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Search"
      size="md"
      hideCloseButton
    >
      <ModalContent>
        <ModalHeader className="p-1">
          <form action={search} method="get" className="w-full">
            <Input
              classNames={{
                base: 'max-w-full h-12',
                mainWrapper: 'h-full',
                input: 'text-xl',
                inputWrapper: 'h-full font-normal text-default-500 bg-transparent shadow-none',
              }}
              placeholder="Search website..."
              size="lg"
              startContent={<MagnifyingGlassIcon className="size-7" />}
              endContent={<Kbd onClick={onClose} className="cursor-pointer">ESC</Kbd>}
              type="search"
            />
          </form>
        </ModalHeader>
        <ModalBody className="p-2">
          &nbsp;
        </ModalBody>
      </ModalContent>
    </Modal>
  </>);
}
