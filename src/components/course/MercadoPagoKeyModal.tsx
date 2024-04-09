"use client";
import { type OurFileRouter } from "@/app/api/uploadthing/core";
import {
  createInstructor,
  updateImage,
} from "@/lib/actions/edit/course_edit_actions";
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
  Spinner,
} from "@nextui-org/react";
import { ImageIcon, KeyIcon } from "lucide-react";
import React, { useState } from "react";
import MercadoPagoIcon from "../MercadoPago_Icon";
import { useAction } from "next-safe-action/hooks";
import { createOrUpdateKeysMercadoPago } from "@/lib/actions/mercado_pago_keys_action";

const MercadoPagoKeyModal = ({
  course_id,
  mpKey,
}: {
  course_id: string;
  mpKey: string | null;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [uploading, setUploading] = useState(false);

  const [mercadoPagoKey, setMercadoPagoKey] = useState(mpKey ?? "");
  const { execute, status, result } = useAction(createOrUpdateKeysMercadoPago);
  return (
    <>
      <Button
        onPress={onOpen}
        type="submit"
        color="primary"
        className="font-bold disabled:bg-gray-800 disabled:text-gray-400"
      >
        <MercadoPagoIcon /> Llave de MercadoPago
        <KeyIcon />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Actualizar Llave de mercadoPago
              </ModalHeader>
              <ModalBody>
                <Input
                  onChange={(e) => {
                    setMercadoPagoKey(e.target.value);
                  }}
                  value={mercadoPagoKey}
                  label="Llave"
                />
                <p className="ml-2 text-sm text-blue-300">
                  {status == "hasSucceeded" && result.data}
                </p>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>

                {status == "executing" ? (
                  <Spinner color="primary" />
                ) : (
                  <Button
                    onClick={() => {
                      execute({
                        course_id: course_id,
                        value: mercadoPagoKey.trim(),
                      });
                      // setTimeout(() => {
                      //     onClose();
                      // }, 2000);
                    }}
                    variant="solid"
                    type="submit"
                    color="primary"
                  >
                    Subir
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MercadoPagoKeyModal;
