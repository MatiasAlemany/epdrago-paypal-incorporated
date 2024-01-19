import { Option, Questions } from "@/lib/actions/questionary_actionst";
import { redirect } from "next/navigation";
import React from "react";

const FinishedExam = ({
  questions,
  selectedOptions,
}: {
  questions: Questions;
  selectedOptions: string[];
}) => {
  let initialOptions: Option[] = [];
  for (const question of questions) {
    [...initialOptions, ...question.options];
  }
  let correctAnswers = 0;

  return (
    <div className="flex flex-col items-center justify-center  mx-auto px-8 md:px-16  overflow-y-scroll py-8 md:py-16 rounded-lg bg-neutral-900 max-w-[1000px] w-full min-h-[60vh] ">
      <h1 className="text-green-500 font-bold text-3xl mb-2">
        {3}/{questions.length}
      </h1>
      <h1 className="font-bold text-xl">Aprobaste!!</h1>
      <form>
        <button className="bg-purple-800 font-bold rounded-xl mt-8 px-4 py-2 ">
          Obtener certificado
        </button>
      </form>
    </div>
  );
};

export default FinishedExam;
