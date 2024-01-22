import { PageParams } from "@/lib/types/params";
import { Button } from "@nextui-org/react";
import { redirect } from "next/navigation";
import React from "react";

const DarExamenPage = ({
  searchParams: { course_id, exam_id },
}: PageParams<
  {},
  {
    course_id: string;
    exam_id: string;
  }
>) => {
  console.log(course_id, exam_id);
  if (exam_id == null) {
    throw Error("No hay examen!");
  }
  return (
    <div className=" px-4 items-center flex flex-col min-h-screen justify-center">
      <h1 className="text-center font-extrabold  text-5xl text-green-400">
        Felicitaciones! Terminaste el curso
      </h1>
      <p className="text-center text-neutral-300 text-lg mt-4">
        Ahora el ultimo paso para obtener el cerficado es realizar el examen
      </p>
      <form
        action={async () => {
          "use server";
          redirect(`/examen?course_id=${course_id}&exam_id=${exam_id}`);
        }}
      >
        <Button type="submit" color="success" className="mt-4 font-bold">
          Dar examen
        </Button>
      </form>
    </div>
  );
};

export default DarExamenPage;
