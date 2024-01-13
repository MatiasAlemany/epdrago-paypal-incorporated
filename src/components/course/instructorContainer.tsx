import Image from "next/image";
import React from "react";
import styles from "./course.module.css";
import { cn } from "@/lib/utils";
import { Instructor } from "@/lib/db/schema/instructors";

const InstructorContainer = ({qualities, instagram,img_url,name} : Instructor) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-6 px-4 text-center sm:px-8 md:px-12 lg:px-20",
        styles.testimonials
      )}
    >
      <h1 className="mb-4 font-bold">{name}</h1>
      <div className="relative mb-3 h-24 w-24 overflow-hidden rounded-full  sm:h-32 sm:w-32 lg:h-40 lg:w-40 ">
        <Image
          fill={true}
          className=" object-cover"
          src={img_url}
          alt="Profile Image"
        />
      </div>
      <div className="">
        <h1 className="text-sm">{qualities}</h1>
        <h1 className="text-sm">Instagram: @{instagram}</h1>
      </div>
    </div>
  );
};

export default InstructorContainer;
