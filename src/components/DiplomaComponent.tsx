"use client";
import { Certificate } from "@/app/certificados/[id]/page";
import Image from "next/image";
import React, { useRef } from "react";
import { padding } from "./styles/padding";
import { Button } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { toPng } from "html-to-image";

interface DiplomaComponentProps {
  certificate: NonNullable<Certificate>;
}

const DiplomaComponent: React.FC<DiplomaComponentProps> = ({ certificate }) => {
  const elementRef = useRef(null);
  const htmlToImageConvert = () => {
    toPng(elementRef.current!, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `Certificado ${certificate.course.title}`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className={cn(
        " h-screen flex flex-col justify-center items-center",
        padding
      )}
    >
      <div
        ref={elementRef}
        className="h-[300px] scale-100 w-[420px] bg-neutral-400 relative border-black border-[9px]"
      >
        <Image
          src={"/fondo_diploma.jpg"}
          alt="Fondo"
          fill={true}
          className="object-cover"
        />
        <div className="font-bold w-full text-black flex absolute flex-col text-center px-2 mt-2">
          <h2 className="text-[0.6rem] mt-2 font-medium">
            Se otorga el presente certificado de
          </h2>
          <h1 className="mt-1  font-extrabold text-center">
            INSTRUCTOR DE CALISTENIA Y STREET WORKOUT
          </h1>{" "}
          <h2 className="text-[0.6rem] mt-2 font-medium">a </h2>
          <h1 className=" border-b-4 border-black mt-3 ">Rodrigo Otrera</h1>
          <p className="mt-1 text-[0.4rem] text-neutral-800">
            {" "}
            CERTIFICADO ID: {certificate.id}
          </p>
          <div className="flex mt-1 relative">
            <div className="w-[240px] h-[80px] relative flex flex-col">
              <Image src="/Firmas.png" fill={true} alt="Firmas" />
              <div className="flex justify-between mt-[80px]">
                <div className="flex  flex-1  flex-col text-sm leading-[10px] text-[0.4rem] font-extrabold ">
                  <h1>
                    LEANDRO DRAGO <br />
                    <h1 className="text-[0.3rem]  px-2 mt-1 leading-[6px]">
                      {" "}
                      DIRECTOR EPDRAGO
                    </h1>
                  </h1>
                </div>
                <div className="flex  flex-1  flex-col text-sm leading-[10px] text-[0.4rem] font-extrabold ">
                  <h1>
                    AXEL DUBIN
                    <br />{" "}
                    <h1 className="text-[0.3rem] px-2 mt-1 leading-[6px]">
                      {" "}
                      INSTRUCTOR DE CALISTENIA Y PERSONAL TRAINER
                    </h1>
                  </h1>
                </div>
                <div className="flex flex-1 flex-col text-sm leading-[10px] text-[0.4rem] font-extrabold ">
                  <h1>
                    ARIEL CABRERA
                    <br />{" "}
                    <h1 className="text-[0.3rem]  px-2 mt-1 leading-[6px]">
                      {" "}
                      INSTRUCTOR DE CALISTENIA Y PERSONAL TRAINER
                    </h1>
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>

      <Button
        onClick={() => {
          htmlToImageConvert();
        }}
        className="mt-20"
        variant="bordered"
        color="success"
      >
        Descargar
      </Button>
    </div>
  );
};

export default DiplomaComponent;
