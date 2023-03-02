import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { cloneElement, ReactNode, useRef } from 'react';

import { Button } from '../button';

export type AlertProps = {
  triggerButton: JSX.Element;
  title: ReactNode;
  message: ReactNode;
  onCancel?: () => void;
  action: ({ onClose }: { onClose: () => void }) => void;
  actionLabel?: string;
  actionIsLoading?: boolean;
};

export const Alert = ({
  triggerButton,
  title,
  message,
  onCancel,
  action,
  actionLabel = 'Confirm',
  actionIsLoading,
}: AlertProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      {cloneElement(triggerButton, {
        onClick: () => {
          triggerButton.props.onClick &&
            triggerButton.props.onClick();
          onOpen();
        },
      })}

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>

            <AlertDialogBody>{message}</AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={() => {
                  onCancel && onCancel();
                  onClose();
                }}
                variant="outline"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  action({ onClose });
                }}
                isDisabled={actionIsLoading}
                isLoading={actionIsLoading}
                ml={3}
              >
                {actionLabel}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
