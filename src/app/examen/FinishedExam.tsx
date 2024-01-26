"use client";
import { createCertification } from "@/lib/actions/certifications";
import { Option, Questions } from "@/lib/actions/questionary_actionst";
import { useUser } from "@clerk/nextjs";
import { Spinner } from "@nextui-org/react";
import { useAction } from "next-safe-action/hooks";
import { redirect } from "next/navigation";
import React from "react";

const FinishedExam = ({
  questions,
  selectedOptions,
  courseId

}: {
  questions: Questions;
  selectedOptions: string[];
  courseId: string
}) => {
  const { isSignedIn, user, isLoaded } = useUser();

  const {execute, status} = useAction(createCertification);
  
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

      {status == 'executing' ? <Spinner color="success"/> :  <button
      onClick={() => {
        
        execute({user_id: user?.id!,course_id: courseId})
      }}
      className="bg-purple-800 font-bold rounded-xl mt-8 px-4 py-2 ">
          Obtener certificado
        </button>}
  

    </div>
  );
};

export default FinishedExam;
