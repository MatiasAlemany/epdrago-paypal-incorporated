"use client";
import QuestionContainer from "@/components/questionary/QuestionContainer";
import { padding } from "@/components/styles/padding";
import {
  Option,
  QuestionGet,
  Questions,
} from "@/lib/actions/questionary_actionst";
import { cn } from "@/lib/utils";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

const CrearExamen = ({
  createQuestionary,
  course_id,
}: {
  createQuestionary: (questions: Questions) => void;
  course_id: string;
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
      {questionary.length == 0 ? (
        <h1 className="text-center min-h-36">No se han creado preguntas!</h1>
      ) : (
        <div className="rounded-lg bg-neutral-900 w-full min-h-[60vh] max-w-[1000px] p-6 mx-auto flex flex-col">
          <QuestionContainer
            onDeleteOption={(questionId: string, option: Option) => {
              const questionaryNew = questionary.map((e) => {
                if (questionId == e.id) {
                  return {
                    ...e,
                    options: e.options.filter((o) => o.id != option.id),
                  };
                }

                return e;
              });

              setquestionary(questionaryNew);
            }}
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
      )}

      <div className="flex justify-center mt-2">
        {" "}
        <Button
          onPress={onOpen}
          color="success"
          variant="bordered"
          className="mr-2"
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
          onClick={() => {
            createQuestionary(questionary);
          }}
        >
          Guardar
        </Button>
      </div>
    </div>
  );
};

export default CrearExamen;
