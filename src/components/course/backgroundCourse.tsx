"use client";
import Image from "next/image";
import React from "react";
import { Rating } from "./Rating";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import MercadoPagoIcon from "../MercadoPago_Icon";

interface BackGroundCourseProps {
  imgUrl: string;
}

const BackGroundCourse: React.FC<BackGroundCourseProps> = ({}) => {
  return (
    <div className="relative flex aspect-[18/6] flex-col justify-end opacity-80">
      <Image
        className="absolute object-cover"
        fill={true}
        alt="Image"
        src="/imagen-prueba-2.jpg"
      />
      <div className="relative flex flex-row items-end justify-between bg-transparent">
        <div className="flex-col  p-4">
          <h1 className="mb-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Curso instructor
          </h1>
          <Rating
            initialValue={4.5}
            readonly={true}
            size="small"
            showValue={true}
          />

          <h1 className="md:text-md text-sm mt-1 text-neutral-200">
            Duracion: 10 modulos
          </h1>
        </div>
        <div className="flex w-48 flex-col items-center  rounded-tl-xl  bg-[rgb(0,0,0,0.8)] p-3 py-2 text-sm  md:w-60 md:p-6 md:py-4 md:text-lg lg:w-80">
          <h1 className=" text-lg md:text-2xl my-2 font-bold text-white">
            Precio - 24.000$
          </h1>
          <Button color="primary" className="font-bold">
            <MercadoPagoIcon /> Comprar
          </Button>

        </div>
      </div>
    </div>
  );
};

export default BackGroundCourse;
