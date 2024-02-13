import React from "react";

interface DiplomaParticipantProps {
  name: string;
  occupation: string;
}

const DiplomaParticipant: React.FC<DiplomaParticipantProps> = ({
  name,
  occupation,
}) => {
  return (
    <div className="flex  flex-1 justify-start flex-col text-[12px] leading-none md:text-xl md:mx-3  font-extrabold ">
      <h1>{name.toUpperCase()}</h1>
      <p className="text-[6px] leading-none font-semibold  md:text-[14px]  text-neutral-800 md:leading-tight  px-2 mt-1 md:mt-2 ">
        {occupation.toUpperCase()}
      </p>
    </div>
  );
};

export default DiplomaParticipant;
