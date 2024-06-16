import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Button, Modal, ModalHeader, ModalBody, useDisclosure, ModalContent, Input, Kbd } from '@nextui-org/react';

/**
 * Navigation Brand properties
 */
export interface SearchButtonProps {
  /**
   * The search form action URL.
   * 
   * @default '#'
   */
  action?: string;

  /**
   * The search form method.
   * 
   * @default 'get'
   */
  method?: 'post' | 'get';

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
  action = '#',
  method = 'get',
  size = 'md',
}: SearchButtonProps) {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (<>
    <Button isIconOnly onPress={onOpen} size="sm">
      <MagnifyingGlassIcon className="size-5" />
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
          <form action={action} method={method} className="w-full">
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
              endContent={
                <Kbd>ESC</Kbd>
              }
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
