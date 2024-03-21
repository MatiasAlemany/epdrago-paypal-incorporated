"use client";
import React from "react";
import { UserDB } from "./page";
import { Accordion, AccordionItem, Avatar, Badge } from "@nextui-org/react";
import { CourseOnly } from "@/lib/db/schema/course";
import Image from "next/image";
import { CheckIcon, CrossIcon, VerifiedIcon, XIcon } from "lucide-react";

interface UserManagementProps {
  user: UserDB;
  cursos: CourseOnly[];
}

const UserManagement: React.FC<UserManagementProps> = ({ user, cursos }) => {
  return (
    <Accordion className="my-4">
      <AccordionItem
        startContent={<Avatar isBordered radius="lg" src={user.img_url!} />}
        key="1"
        isCompact={true}
        aria-label="Accordion 1"
        subtitle={user.name}
        title={` ${user.email}`}
      >
        <div>
          <h1 className="font-bold mb-4">CURSOS</h1>{" "}
          <div className="flex flex-wrap space-x-2">
            {" "}
            {cursos.map((curso) => (
              <Badge
                shape="circle"
                key={curso.id}
                color={
                  !!user.users_to_courses.find((e) => e.course_id == curso.id)
                    ? "success"
                    : "danger"
                }
                content={
                  !!user.users_to_courses.find(
                    (e) => e.course_id == curso.id
                  ) ? (
                    <CheckIcon color="white" />
                  ) : (
                    <XIcon />
                  )
                }
                placement="bottom-right"
                size="sm"
              >
                <div className="relative bg-neutral-800 w-[300px] h-[100px] rounded-xl overflow-hidden ">
                  {" "}
                  <Image
                    src={curso.img_url ?? "imagen-prueba-2.jpg"}
                    fill={true}
                    alt={curso.title}
                    className="object-cover"
                  />
                </div>
              </Badge>
            ))}
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default UserManagement;
