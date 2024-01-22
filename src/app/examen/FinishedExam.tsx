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
  const options = questions.map((e) => {
    const okOptions = e.options.filter((e) => e.isCorrect);
    return okOptions[0]!;
  });

  const optionsCorrect = options
    .map((e, index) => {
      if (e.id === selectedOptions[index]!) {
        return e;
      }
    })
    .filter((e) => e);

  return (
    <div className="flex flex-col items-center justify-center  mx-auto px-8 md:px-16  overflow-y-scroll py-8 md:py-16 rounded-lg max-w-[1000px] w-full min-h-[60vh] ">
      <h1 className="text-green-500 font-bold text-5xl mb-2">
        {optionsCorrect.length}/{questions.length}
      </h1>
      <h1 className="font-bold text-2xl">Aprobaste el examen final!</h1>
      <h1 className="font-bold text-lg text-neutral-400">Curso -</h1>

      <form>
        <button className="bg-purple-800 font-bold rounded-xl mt-8 px-4 py-2 ">
          Obtener certificado
        </button>
      </form>
    </div>
  );
};

export default FinishedExam;
