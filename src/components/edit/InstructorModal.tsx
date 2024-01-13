"use client";
import { type OurFileRouter } from "@/app/api/uploadthing/core";
import { createInstructor } from "@/lib/actions/edit/course_edit_actions";
import { UploadButton } from "@/utils/uploadthing";
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
import React, { useState } from "react";

const InstructorModal = ({ course_id }: { course_id: string }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);

  return (
    <>
      <Button onPress={onOpen}>Agregar Instructor</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <form action={createInstructor}>
                <input hidden name="course_id" value={course_id} />
                <ModalHeader className="flex flex-col gap-1">
                  Agregar Instructor
                </ModalHeader>
                <ModalBody>
                  <Input name="name" label="Nombre del instructor" />
                  <Input name="instagram" label="Instagram @" />
                  <Input
                    name="qualities"
                    label="Cualidades (Entrenador, Atleta, etc...)"
                  />

                  {/* @ts-ignore */}
                  {imgUrl != undefined ? (
                    <h1 className="pl-2 text-sm text-green-400">
                      Imagen Subida!
                    </h1>
                  ) : (
                    //@ts-ignore
                    <UploadButton<OurFileRouter>
                      endpoint="imageUploader"
                      content={{
                        button: "SUBIR IMAGEN",

                        allowedContent: "4MB MAXIMO",
                      }}
                      appearance={{
                        button: "bg-green-600 px-4 font-bold text-sm py-2",
                      }}
                      onClientUploadComplete={(res) => {
                        if (res) {
                          setImgUrl(res[0]!.url);
                        }
                      }}
                      onUploadError={(error) => {
                        console.log(error);
                      }}
                    />
                  )}
                  <input hidden name="img_url" value={imgUrl} />
                </ModalBody>

                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancelar
                  </Button>
                  <Button
                    onClick={() => {
                      onClose();
                    }}
                    variant="solid"
                    disabled={imgUrl == undefined}
                    type="submit"
                    color="primary"
                  >
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
};

export default InstructorModal;
