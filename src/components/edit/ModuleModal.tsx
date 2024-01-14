"use client";
import React, { useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { UploadButton } from "@/utils/uploadthing";
import { ModuleDB } from "@/lib/db/schema/modules";
import { type OurFileRouter } from "@/app/api/uploadthing/core";
import { ModuleEnums, moduleValues } from "../../lib/db/schema/modules_items";
import { crearModuleItem } from "@/lib/actions/edit/modules_actions";

const ModuleModal = ({ module }: { module: ModuleDB }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [moduleType, setModuleType] = useState<ModuleEnums>("video");
  const [pdfUrl, setpdfUrl] = useState<string | undefined>(undefined);

  return (
    <>
      <Button onPress={onOpen}>Agregar Capitulo</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <form action={crearModuleItem}>
                <input hidden name="module_id" value={module.id} />
                <input hidden name="course_id" value={module.course_id} />

                <input type="hidden" value={pdfUrl} name="pdf_url" />

                <ModalHeader className="flex flex-col gap-1">
                  Nuevo Capitulo de Modulo
                </ModalHeader>
                <ModalBody>
                  <Input name="title" label="Nombre del modulo" />
                  <Select
                    value={moduleType}
                    label="Tipo de modulo"
                    name="module_type"
                  >
                    {moduleValues.map((e) => (
                      <SelectItem
                        key={e}
                        value={e}
                        onClick={() => {
                          setModuleType(e);
                        }}
                      >
                        {e.charAt(0).toUpperCase() + e.slice(1)}
                      </SelectItem>
                    ))}
                  </Select>
                  {moduleType == "pdf" && (
                    <>
                      {pdfUrl != undefined ? (
                        <h1 className="pl-2 text-sm text-green-400 font-semibold">
                          PDF subido!
                        </h1>
                      ) : (
                        <div>
                          {/* @ts-ignore */}

                          <UploadButton<OurFileRouter>
                            endpoint="pdfUploader"
                            content={{
                              button: "SUBIR PDF",
                              allowedContent: "16MB MAXIMO",
                            }}
                            appearance={{
                              button: "bg-red-600 px-4 font-bold text-sm py-2",
                              clearBtn: "bg-red-700",
                            }}
                            onClientUploadComplete={(res) => {
                              if (res) {
                                setpdfUrl(res[0]!.url);
                              }
                            }}
                            onUploadError={(error) => {
                              console.log(error);
                            }}
                          />
                        </div>
                      )}
                    </>
                  )}
                  {moduleType == "video" && (
                    <>
                      <Input label="Video url" type="url" name="video_url" />
                    </>
                  )}
                </ModalBody>

                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancelar
                  </Button>
                  <Button
                    onClick={() => {
                      setpdfUrl(undefined);
                      onClose();
                    }}
                    variant="solid"
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

export default ModuleModal;
