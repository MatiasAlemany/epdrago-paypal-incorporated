"use client";
import React from "react";
import { Rating } from "./Rating";
import { useRouter } from "next/navigation";

const CourseContainer = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/cursos/kashdfklha")}
      className="hover:bg-neutral-800 transition-colors cursor-pointer bg-neutral-900 rounded-xl p-6 flex flex-col lg:flex-row h-96 lg:h-56 w-full"
    >
      <div className="relative bg-neutral-800 aspect-[18/6] rounded-xl"></div>
      <div className="flex flex-col ml-0 lg:ml-4">
        <h1 className="font-bold text-lg mt-2 lg:mt-0 ">
          Curso entrenador: Nivel principiante
        </h1>
        <Rating
          readonly={true}
          initialValue={4.5}
          size="small"
          showValue={true}
        />
        <h3 className="text-neutral-400 text-sm mt-1">Duracion: 3 meses</h3>
        <p className="text-gray-300 text-sm max-h-[180px] mt-2 overflow-hidden">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words whicok even slightly believable. If you
          are going to use a passage of Lorem Ipsum, you need to be sure
          thereything embarrassing hidden in th
        </p>
      </div>
    </div>
  );
};

export default CourseContainer;
