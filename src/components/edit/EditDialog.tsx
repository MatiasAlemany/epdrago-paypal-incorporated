"use client";
import React, { ReactNode } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
interface EditDialogInterface {
  buttonTitle: string;
  dialogTitle: string;
  children: ReactNode;
  classname?: string;
}
const EditDialog = ({
  buttonTitle,
  children,
  dialogTitle,
  classname,
}: EditDialogInterface) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className={classname}>
      <Button color="success" onPress={onOpen}>
        {buttonTitle}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{dialogTitle}</ModalHeader>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EditDialog;
