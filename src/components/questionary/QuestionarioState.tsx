"use client";
import QuestionContainer from "@/components/questionary/QuestionContainer";
import {
  Option,
  Questions
} from "@/lib/actions/questionary_actionst";
import {
  Button
} from "@nextui-org/react";
import { Check } from "lucide-react";
import { useState } from "react";
import OptionAnswer from "./OptionAnswer";

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
        <div className="flex flex-col mx-auto px-8 md:px-16  overflow-y-scroll py-8 md:py-16 rounded-xl bg-neutral-900 max-w-[1000px] w-full min-h-[60vh] max-h-[50vh] ">
          <h1 className="text-green-500 font-bold text-3xl mb-2">
            Terminaste...
          </h1>
          <div className="flex flex-col">
            {questionary.map((e, index) => (
              <div key={e.id} className="py-2">
                <h1 className="text-lg font-bold">
                  <span className="font-bold text-neutral-500 mr-2">
                    {index + 1}.
                  </span>
                  {e.title}
                </h1>
                <div className="flex mt-1">
                  <Check className="mr-2 text-green-400" />
                  {e.options.find((option) => option.isCorrect)?.title}
                </div>

                <OptionAnswer
                  option={e.options.find(
                    (option) => option.id == selectedOptions[index]
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-lg bg-neutral-900 w-full min-h-[60vh] max-w-[1000px] p-6 mx-auto flex flex-col">
          <QuestionContainer
            onDeleteOption={() => {}}
            isAdmin={false}
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
