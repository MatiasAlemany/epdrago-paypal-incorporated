"use client";
import { Certificate } from "@/app/certificados/[id]/page";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { padding } from "./styles/padding";
import { Button } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { toPng } from "html-to-image";
import EpdragoIcon from "./navbar/EpdragoIcon";
import DiplomaParticipant from "./DiplomaParticipant";
import EpdragoOutlinedIcon from "./EpdragoOutilined";
import LeaveTestimonyDialog from "./course/LeaveTestimonyDialog";

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
        className="h-[300px]  w-[420px] md:h-[600px] md:w-[840px] bg-neutral-400 relative border-black border-[9px]"
      >
        <Image
          src={"/fondo_diploma.jpg"}
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
            Rodrigo Otrera
          </h1>
          <p className="mt-1 text-[0.4rem] md:text-[0.8rem] text-neutral-800 md:text-md">
            CERTIFICADO ID: {certificate.id}
          </p>
          <div className="flex mt-1 md:mt-6 relative">
            <div className="h-[80px] w-[240px] mx-4 md:w-[480px] md:h-[160px]  relative flex flex-col">
              <Image src="/Firmas.png" fill={true} alt="Firmas" />
              <div className="flex justify-between mt-[85px] md:mt-[170px]">
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
      <div className="flex mt-12 space-x-2">
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
        {canCreate && !testimonySent && (
          <LeaveTestimonyDialog onSent={()=> {
            setTestimonySent(true);
          }} course_id={certificate.course_id} />
        )}
      </div>
    </div>
  );
};

export default DiplomaComponent;
