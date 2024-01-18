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

const CuestionarioState = ({ questions }: { questions: Questions }) => {
  const [questionary, setquestionary] = useState<Questions>(questions);

  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    questionary.map(() => "")
  );

  const [index, setIndex] = useState(0);
  const [finishedQuestionary, setFinishedQuestionary] = useState(false);

  return (
    <div>
      {finishedQuestionary ? (
        <h1>Terminaste...</h1>
      ) : (
        <div className="rounded-lg bg-neutral-900 w-full min-h-[60vh] max-w-[1000px] p-6 mx-auto flex flex-col">
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
                if (questionary.length - 1 == index) {
                  setFinishedQuestionary(true);
                }
                if (index < questionary.length - 1) {
                  setIndex((i) => i + 1);
                }
              }}
            >
              {questionary.length - 1 == index
                ? "Terminar cuestionario"
                : "Siguiente"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CuestionarioState;
