import Image from "next/image";
import React from "react";
import { Rating } from "./Rating";
import { Course, CourseGet } from "@/lib/actions/get_courses";
import { currentUser } from "@clerk/nextjs/server";
import ClientButtons from "./clientButtons";
const BackGroundCourse: React.FC<CourseGet> = async ({
  img_url,
  price,
  duracion,
  id,
  title,
}) => {
  const user = await currentUser();

  return (
    <>
      <div className="relative flex aspect-[18/6] flex-col justify-end opacity-80">
        <Image
          className="absolute object-cover"
          fill={true}
          alt="Image"
          src={img_url == null ? "/imagen-prueba-2.jpg" : img_url}
        />
        <div className="relative flex flex-row items-end justify-between bg-transparent">
          <div className="flex-col  p-4">
            <h1 className="mb-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              {title}
            </h1>
            <Rating
              initialValue={4.5}
              readonly={true}
              size="small"
              showValue={true}
            />

            <h1 className="md:text-md text-sm mt-1 text-neutral-200">
              Duracion: {duracion}
            </h1>
          </div>
          <div className="flex w-48 flex-col items-center rounded-tl-xl backdrop-blur-xl p-3 py-2 text-sm md:w-60 md:p-6 md:py-4 md:text-lg lg:w-80">
            <h1 className="text-lg md:text-2xl my-2 font-bold text-white">
              Precio - {price}$
            </h1>

            {/* Renderiza los botones en el cliente */}
            <ClientButtons user={!!user} id={id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BackGroundCourse;
