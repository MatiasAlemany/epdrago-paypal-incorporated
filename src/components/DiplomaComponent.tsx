"use client";
import { Certificate } from "@/app/certificados/[id]/page";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { padding } from "./styles/padding";
import { Button, Input, user } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { toPng } from "html-to-image";
import EpdragoIcon from "./navbar/EpdragoIcon";
import DiplomaParticipant from "./DiplomaParticipant";
import EpdragoOutlinedIcon from "./EpdragoOutilined";
import LeaveTestimonyDialog from "./course/LeaveTestimonyDialog";
import Firmas from "./course/FirmasSvg";

interface DiplomaComponentProps {
  certificate: NonNullable<Certificate>;
  canCreate: boolean;
}

const DiplomaComponent: React.FC<DiplomaComponentProps> = ({
  certificate,
  canCreate,
}) => {
  const elementRef = useRef(null);
  const [testimonySent, setTestimonySent] = useState(false);
  const [username, setUsername] = useState("");
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
        " h-screen pt-32 flex flex-col justify-center items-center",
        padding
      )}
    >
      {/* <Input
        color="success"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        label="Tu nombre"
        className="max-w-[300px] "
        variant="bordered"
      /> */}
      <div
        ref={elementRef}
        className="h-[300px]  w-[420px] md:h-[600px] md:w-[840px] bg-neutral-400 relative border-black border-[9px]"
      >
        <Image
          src={"/fondo_diploma.webp"}
          alt="Fondo"
          fill={true}
          className="object-cover"
        />
        <div className="font-bold w-full text-black flex absolute flex-col text-center px-2 mt-2">
          <h2 className="text-[0.6rem] md:text-lg text-neutral-700 mt-2 font-medium">
            Se otorga el presente certificado de
          </h2>
          <h1 className="mt-1  font-extrabold text-center md:text-3xl">
            {certificate.course.title.toUpperCase()}
          </h1>{" "}
          <h2 className="text-[0.6rem]  md:text-lg mt-2 font-medium">a </h2>
          <h1 className=" border-b-4 border-black mt-3 md:mt-10 md:text-4xl">
            {username}
          </h1>
          <p className="mt-1 text-[0.4rem] md:text-[0.8rem] text-neutral-800 md:text-md">
            CERTIFICADO ID: {certificate.id}
          </p>
          <div className="flex mt-1 md:mt-6 relative">
            <div className="flex flex-col">
              <Firmas />

              <div className="flex justify-between ">
                <DiplomaParticipant
                  name="Leandro Drago"
                  occupation="Director Epdrago"
                />
                <DiplomaParticipant
                  name="AXEL DUBIN"
                  occupation="INSTRUCTOR DE CALISTENIA Y PERSONAL TRAINER"
                />
                <DiplomaParticipant
                  name="ARIEL CABRERA"
                  occupation="INSTRUCTOR DE CALISTENIA Y PERSONAL TRAINER"
                />
              </div>
            </div>
            <div className="flex justify-center items-center flex-1">
              <div className="flex flex-col justify-center items-center">
                <EpdragoOutlinedIcon />
                <h1 className="font-[900] text-sm  md:text-4xl">EPDRAGO</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-12 space-x-2 items-center">
        <Button
          onClick={() => {
            htmlToImageConvert();
          }}
          className=""
          variant="bordered"
          color="success"
        >
          Descargar
        </Button>
        {canCreate && !testimonySent ? (
          <LeaveTestimonyDialog
            onSent={() => {
              setTestimonySent(true);
            }}
            course_id={certificate.course_id}
          />
        ) : (
          <h1 className="text-neutral-400 text-sm">Testimonio realizado!</h1>
        )}
      </div>
    </div>
  );
};

export default DiplomaComponent;
