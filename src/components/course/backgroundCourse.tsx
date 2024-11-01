import Image from "next/image";
import React from "react";
import { Rating } from "./Rating";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import MercadoPagoIcon from "../MercadoPago_Icon";
import { Course, CourseGet } from "@/lib/actions/get_courses";
import { buyCourse } from "@/lib/actions/buy_course";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { currentUser } from "@clerk/nextjs/server";
const BackGroundCourse: React.FC<CourseGet> = async ({
  img_url,
  price,
  duracion,
  id,
  title,
}) => {
  const user = await currentUser();
  return (
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
        <div className="flex w-48 flex-col items-center  rounded-tl-xl backdrop-blur-xl   p-3 py-2 text-sm  md:w-60 md:p-6 md:py-4 md:text-lg lg:w-80">
          <h1 className=" text-lg md:text-2xl my-2 font-bold text-white">
            Precio - {price}$
          </h1>

          <form action={buyCourse}>
            <input type="hidden" name="course_id" defaultValue={id} />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    type="submit"
                    disabled={!user}
                    color="primary"
                    className="font-bold disabled:bg-gray-800 disabled:text-gray-400"
                  >
                    <MercadoPagoIcon /> Comprar
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Para poder comprar debes estar registrado!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BackGroundCourse;
