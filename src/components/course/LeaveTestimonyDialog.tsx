"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { Rating } from "./Rating";
import { useAction } from "next-safe-action/hooks";
import { createTestimony } from "@/lib/actions/testimony";

interface TestimonyDialog {
  course_id: string;
}

const LeaveTestimonyDialog = ({ course_id }: TestimonyDialog) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [starsValue, setStarsValue] = useState<number>(0);
  const { execute, status } = useAction(createTestimony);
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
                {status == "executing" ? (
                  <Spinner color="success" />
                ) : (
                  <>
                    {" "}
                    <Button variant="ghost">Cancelar</Button>
                    <Button
                      onClick={() => {
                        execute({ course_id: course_id, rating: starsValue });
                      }}
                      color="success"
                    >
                      Guardar
                    </Button>
                  </>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default LeaveTestimonyDialog;
