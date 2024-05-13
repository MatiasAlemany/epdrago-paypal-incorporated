import { Button } from "@nextui-org/react";
import Image from "next/image";

export function GridBackgroundDemo() {
  return (
    <div className="h-[50rem] justify-start w-full dark:bg-black bg-white px-40  dark:bg-grid-white/[0.10] bg-grid-black/[0.2] relative flex items-center ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex flex-col max-w-[700px] z-10 ">
        {" "}
        <h1 className="text-6xl  font-extrabold leading-snug">
          ACCEDE A LOS MEJORES CURSOS DE{" "}
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-green-500 to-green-300">
            CALISTENIA
          </span>
        </h1>
        <h2 className="mt-4 text-lg text-neutral-300">
          Cursos con los mejores coaches del pais
        </h2>
        <Button
          className="mt-8 max-w-20 px-16 font-bold "
          color="success"
          size="lg"
        >
          Ver cursos
        </Button>
      </div>
    </div>
  );
}
