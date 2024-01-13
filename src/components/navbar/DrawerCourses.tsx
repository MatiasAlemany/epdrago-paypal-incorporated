"use client";
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

const DrawerCourses = () => {
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
          <div>
            <CourseProgressItem />
            <CourseProgressItem />
            <CourseProgressItem />
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
};

export default DrawerCourses;
