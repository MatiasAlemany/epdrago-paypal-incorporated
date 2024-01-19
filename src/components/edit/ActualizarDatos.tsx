"use client";
import { type OurFileRouter } from "@/app/api/uploadthing/core";
import {
  createInstructor,
  updateData,
} from "@/lib/actions/edit/course_edit_actions";
import { CourseGet } from "@/lib/actions/get_courses";
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
  Textarea,
} from "@nextui-org/react";
import { AlignLeftIcon, InfoIcon } from "lucide-react";
import React, { useState } from "react";

const ActualizarDatosModal = ({ course }: { course: CourseGet }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [duracion, setduracion] = useState(course.duracion);
  const [data, setData] = useState({
    duration: course.duracion ?? "",
    description: course.descripcion ?? "",
    benefits: course.beneficios ?? "",
    price: course.price,
  });
  const updateDataFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <Button onPress={onOpen}>
        <AlignLeftIcon /> Actualizar Datos
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <form action={updateData}>
                <input hidden name="course_id" value={course.id} />
                <ModalHeader className="flex flex-col gap-1">
                  ModificarDatos
                </ModalHeader>
                <ModalBody>
                  <Input
                    value={data.duration}
                    onChange={updateDataFields}
                    name="duration"
                    label="Duracion (dias, meses, etc...)"
                    placeholder={course.duracion ?? ""}
                  />
                  <Textarea
                    value={data.description}
                    onChange={updateDataFields}
                    name="description"
                    label="Description"
                    placeholder={course.descripcion ?? ""}
                  />
                  <Textarea
                    value={data.benefits}
                    onChange={updateDataFields}
                    name="benefits"
                    label="Beneficios"
                    placeholder={course.beneficios ?? ""}
                  />

                  <Input
                    value={data.price.toString()}
                    onChange={updateDataFields}
                    name="price"
                    label="Precio"
                    placeholder={course.price ? `${course.price}` : ""}
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
                    type="submit"
                    color="primary"
                  >
                    Actualizar
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

export default ActualizarDatosModal;
