import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import CourseContainer from "../course/CourseContainer";
import { CourseProgressContainer } from "./CourseProgressContainer";
import { CourseProgressItem } from "./CourseProgressItem";
import { getUserCourseProgress } from "@/lib/actions/course_progress_actions";

export default async function DrawerCourses({}) {
  const progress = await getUserCourseProgress();
  if (progress == undefined) {
    return (
      <div className=" flex justify-center items-center text-neutral-500  h-20">
        No tienes ningun curso comprado
      </div>
    );
  }

  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <Button variant="outline" className="mr-2">
            Mis cursos
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Mis cursos</DrawerTitle>
            <DrawerDescription>
              Aqui encontraras todos los cursos que hayas comprado
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-2">
            {progress.map((e) => (
              <CourseProgressItem
                key={e.id}
                customWidth={315}
                courseProgress={e}
              />
            ))}
          </div>

          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
