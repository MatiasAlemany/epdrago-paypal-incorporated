import Image from "next/image";
import React from "react";
import styles from "./course.module.css";
import { cn } from "@/lib/utils";
import { Instructor, instructors } from "@/lib/db/schema/instructors";
import { Button } from "../ui/button";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

const InstructorContainer = ({
  qualities,
  instagram,
  img_url,
  name,
  id,
  course_id,
  admin = false,
}: Instructor & {
  admin?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-6 px-4 text-center sm:px-6 md:px-6 lg:px-12",
        styles.testimonials
      )}
    >
      <h1 className="mb-4 font-bold text-neutral-200">{name}</h1>
      <div className="relative mb-3 h-24 w-24 overflow-hidden rounded-full  sm:h-32 sm:w-32 lg:h-40 lg:w-40 ">
        <Image
          fill={true}
          className=" object-cover"
          src={img_url}
          alt="Profile Image"
        />
      </div>
      <div className="text-neutral-300">
        <h1 className="text-sm">{qualities}</h1>
        <h1 className="text-sm">Instagram: @{instagram}</h1>
      </div>
      <form
        action={async () => {
          "use server";
          await db.delete(instructors).where(eq(instructors.id, id));
          revalidatePath(`/editarCurso/${course_id}`);
        }}
      >
        <Button className="mt-2" variant="destructive">
          Eliminar
        </Button>
      </form>
    </div>
  );
};

export default InstructorContainer;
