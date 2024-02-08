"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { Rating } from "./Rating";

const LeaveTestimonyDialog = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [starsValue, setStarsValue] = useState<number>(0);
  return (
    <div>
      <Button color="success" onPress={onOpen}>
        Testimnio
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Testimonio</ModalHeader>
              <ModalBody className="overflow-hidden">
                <div className="flex justify-center scale-125 mb-2">
                  <Rating
                    onValueChanges={(value) => {
                      setStarsValue(value);
                      console.log("This is the new value");
                    }}
                    size="small"
                  />
                </div>
                <Textarea maxLength={140} label="Tu opinión" />
              </ModalBody>
              <ModalFooter>
                <Button variant="ghost">Cancelar</Button>
                <Button color="success">Guardar</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default LeaveTestimonyDialog;
