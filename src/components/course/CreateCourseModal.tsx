"use client";
import React from "react";
import { createCourse } from "@/lib/actions/create_course";
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

export default function CrearteCourseModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Crear Curso</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <form action={createCourse}>
                <ModalHeader className="flex flex-col gap-1">
                  Crear Curso
                </ModalHeader>
                <ModalBody>
                  <Input name="title" label="Nombre del curso" />
                </ModalBody>

                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancelar
                  </Button>
                  <Button type="submit" color="primary">
                    Crear
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
