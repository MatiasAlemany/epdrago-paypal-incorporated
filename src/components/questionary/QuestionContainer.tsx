"use client";
import { Option, QuestionGet } from "@/lib/actions/questionary_actionst";
import { cn } from "@/lib/utils";
import {
  Button,
  Checkbox,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Check, DeleteIcon, PlusIcon, Trash } from "lucide-react";
import React, { useState } from "react";
import OptionContainer from "./OptionsContainer";
import OptionContainerExam from "./OptionExamAnswer";

const QuestionContainer = ({
  question,
  currentQuestionSelected,
  onClick,
  onCreateResponse,
  type = 'questionary'
}: {
  question: QuestionGet;
  currentQuestionSelected: string;
  onClick: (questionId: string) => void;
  onCreateResponse: (questionId: string, option: Option) => void;
  type?: 'exam' | "questionary"
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [optionTitle, setoptionTitle] = useState("");
  const [newResponseIsCorrect, setNewResponseIsCorrect] = useState(false);
  return (
    <div className="">
      <h1 className="font-bold text-2xl text-center">{question.title}</h1>
      <Divider className="my-3" />
      { type == 
       "questionary" &&  question.options.map((e, index) => (
        <OptionContainer
          key={e.id}
          option={e}
          currentQuestionSelected={currentQuestionSelected}
          onClick={onClick}
        />
      ))}
           { type == 
       "exam" &&  question.options.map((e, index) => (
        <OptionContainerExam
          key={e.id}
          option={e}
          currentQuestionSelected={currentQuestionSelected}
          onClick={onClick}
        />
      ))}
      <Button onPress={onOpen} color="success" variant="bordered">
        <PlusIcon /> Respuesta
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Agregar pregunta</ModalHeader>
              <ModalBody>
                <Input
                  value={optionTitle}
                  onChange={(e) => {
                    setoptionTitle(e.target.value);
                  }}
                  label="Respuesa"
                />
                <Checkbox
                  className="mx-auto"
                  isSelected={newResponseIsCorrect}
                  onChange={() => {
                    setNewResponseIsCorrect(!newResponseIsCorrect);
                  }}
                  color="success"
                >
                  Es correcta
                </Checkbox>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={() => {
                    const newResponse: Option = {
                      id: crypto.randomUUID(),
                      isCorrect: newResponseIsCorrect,
                      question_id: question.id,
                      title: optionTitle,
                    };
                    onCreateResponse(question.id, newResponse);
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
    </div>
  );
};

export default QuestionContainer;
