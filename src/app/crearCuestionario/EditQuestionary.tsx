"use client";
import { padding } from "@/components/styles/padding";
import { PageParams } from "@/lib/types/params";
import { cn } from "@/lib/utils";
import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import {
  Option,
  QuestionGet,
  QuestionaryGet,
  Questions,
} from "@/lib/actions/questionary_actionst";
import QuestionContainer from "@/components/questionary/QuestionContainer";
import EditDialog from "@/components/edit/EditDialog";
import { PlusIcon } from "lucide-react";

const CrearCuestionario = ({
  createQuestionary,
  module_item_id,
}: {
  createQuestionary: (module_item_id: string, questions: Questions) => void;
  module_item_id: string;
}) => {
  const [questionary, setquestionary] = useState<Questions>([]);

  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    questionary.map(() => "")
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [questionTitle, setQuestionTitle] = useState("");
  const [index, setIndex] = useState(0);

  return (
    <div className={cn("min-h-screen pt-40", padding)}>
      <div className="rounded-lg bg-neutral-900 w-full min-h-[60vh] max-w-[1000px] p-6 mx-auto flex flex-col">
        {questionary.length == 0 ? (
          <div> </div>
        ) : (
          <QuestionContainer
            onCreateResponse={(questionId: string, option: Option) => {
              const questionaryNew = questionary.map((e) => {
                if (questionId == e.id) {
                  return {
                    ...e,
                    options: [...e.options, option],
                  };
                }

                return e;
              });

              setquestionary(questionaryNew);
            }}
            onClick={(questionId) => {
              let updatedQuestions = selectedOptions.map((e) => e);
              updatedQuestions[index] = questionId;
              setSelectedOptions(updatedQuestions);
            }}
            question={questionary[index]!}
            currentQuestionSelected={selectedOptions[index]!}
          />
        )}

        <div className="flex mt-auto justify-between pt-3">
          <Button
            variant="ghost"
            disabled={index == 0}
            onClick={() => {
              if (index != 0) {
                setIndex((i) => i - 1);
              }
            }}
          >
            Anterior
          </Button>
          <Button
            variant="solid"
            color="success"
            onClick={() => {
              if (index < questionary.length - 1) {
                setIndex((i) => i + 1);
              }
            }}
          >
            Siguiente
          </Button>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        {" "}
        <Button
          onPress={onOpen}
          className="mr-2"
          color="success"
          variant="bordered"
        >
          <PlusIcon /> Agregar pregunta
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>Agregar pregunta</ModalHeader>
                <ModalBody>
                  <Input
                    value={questionTitle}
                    onChange={(e) => {
                      setQuestionTitle(e.target.value);
                    }}
                    label="Pregunta"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    onClick={() => {
                      const newQuestion: QuestionGet = {
                        id: crypto.randomUUID(),
                        options: [],
                        title: questionTitle,
                        exam_id: null,
                        questionary_id: "module_id",
                      };
                      setquestionary((q) => [...q, newQuestion]);
                      setSelectedOptions((prev) => [...prev, ""]);
                      onClose();
                    }}
                  >
                    Agregar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <Button
          color="success"
          onClick={() => {
            createQuestionary(module_item_id, questionary);
          }}
        >
          Guardar cuestionario
        </Button>
      </div>
    </div>
  );
};

export default CrearCuestionario;
