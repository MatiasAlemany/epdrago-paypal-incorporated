"use client";
import { db } from "@/lib/db";
import { news } from "@/lib/db/schema/news";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";
import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { createEvent } from "@/lib/actions/get_events";
import ImageUploader from "@/components/uploaders/ImageUploader";

export default function EventModal({}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);
  return (
    <div>
      <>
        <Button color="success" onPress={onOpen}>
          <PlusIcon /> Agregar evento
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <form action={createEvent}>
                  <ModalHeader className="flex flex-col gap-1">
                    Creacion de evento
                  </ModalHeader>
                  <ModalBody>
                    <Input name="title" label="Titular" />
                    <Textarea label="Contenido" name="content" />

                    <ImageUploader
                      onUploadComplete={(image) => {
                        setImgUrl(image);
                      }}
                    />
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
    </div>
  );
}
