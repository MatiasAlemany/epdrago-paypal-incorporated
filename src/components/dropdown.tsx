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
  Select,
  SelectItem,
  Input,
} from "@nextui-org/react";
import { ModuleEnums, moduleValues } from "@/lib/db/schema/modules_items";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [moduleType, setModuleType] = useState<ModuleEnums>(moduleValues[0]);
  return (
    <>
      <Button onPress={onOpen} color="primary">
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Agregar modulo
              </ModalHeader>
              <ModalBody>
                <Input label="Nombre del modulo" />
                <Select value={moduleType} label="Tipo de modulo">
                  {moduleValues.map((value) => (
                    <SelectItem
                      key={value}
                      onClick={() => {
                        setModuleType(value);
                      }}
                      value={value}
                    >
                      {value.toLocaleUpperCase()}
                    </SelectItem>
                  ))}
                </Select>
                <InputsForModule moduleType={moduleType} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Agregar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

const InputsForModule = ({ moduleType }: { moduleType: ModuleEnums }) => {
  switch (moduleType) {
    case moduleValues[3]:
      return (
        <div className="flex flex-col">
          <Input label="Video url" />
        </div>
      );
    case moduleValues[2]:
      return (
        <div className="flex flex-col">
          <Input label="Pdf url" />
        </div>
      );
    default:
      break;
  }

  return <></>;
};
