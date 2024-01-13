"use client";
import React from "react";
import { Rating } from "./Rating";
import { useRouter } from "next/navigation";
import { Course } from "@/lib/actions/get_courses";
import { isAdmin } from "@/lib/actions/isAdmin";

const CourseContainer = ({
  id,
  introductory_video,
  price,
  is_public,
  title,
  descripcion,
  duracion,
  isAdmin,
}: Course & { isAdmin: boolean }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        if (!isAdmin) {
          router.push(`/cursos/${id}`);
        } else {
          router.push(`/editarCurso/${id}`);
        }
      }}
      className="my-4 hover:scale-105 transition-all ease-in-out hover:bg-neutral-800  cursor-pointer bg-neutral-900 rounded-xl p-6 flex flex-col lg:flex-row h-96 lg:h-56 w-full"
    >
      <div className="relative bg-neutral-800 aspect-[18/6] rounded-xl"></div>
      <div className="flex flex-col ml-0 lg:ml-4">
        <h1 className="font-bold text-lg mt-2 lg:mt-0 ">{title}</h1>
        <Rating
          readonly={true}
          initialValue={4.5}
          size="small"
          showValue={true}
        />
        <h3 className="text-neutral-400 text-sm mt-1">Duracion:{duracion}</h3>
        <p className="text-gray-300 text-sm max-h-[180px] mt-2 overflow-hidden">
          {descripcion}
        </p>
      </div>
    </div>
  );
};

export default CourseContainer;
