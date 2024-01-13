import Testimonials from "@/components/course/Testimonials";
import BackGroundCourse from "@/components/course/backgroundCourse";
import InstructorContainer from "@/components/course/instructorContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getCourse } from "@/lib/actions/get_courses";
import { type PageParams } from "@/lib/types/params";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const CoursePage = async ({ params: { id } }: PageParams<{ id: string }>) => {
  const course = await getCourse(id);

  if (course == undefined) {
    redirect("/cursos");
  }
  return (
    <div>
      <BackGroundCourse imgUrl={""} />
      <h1 className="mt-8 text-center text-4xl">Instructores</h1>
      <div className="mt-8 flex-wrap flex justify-center ">
        {/* <InstructorContainer />
        <InstructorContainer />
        <InstructorContainer /> */}
      </div>
      <h1 className="mt-8 text-center text-4xl">Video Introduccion</h1>
      <div className="p-8 lg:px-16 xl:px-96 ">
        <div className="flex aspect-[18/9] items-center justify-center rounded-lg bg-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
        </div>
      </div>
      <h1 className="mt-4 text-center text-4xl">Clases</h1>
      <div className="mx-auto mt-4 max-w-4xl p-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Modulo 1: Principios de calistenia
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex py-2 px-4 my-2 bg-neutral-900 rounded-xl justify-between">
                Yes. It adheres to the WAI-ARIA design pattern.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>
              </div>
              <div className="  flex py-2 px-4 my-2 bg-neutral-900 rounded-xl justify-between">
                Yes. It adheres to the WAI-ARIA design pattern.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Modulo 2: Principios de calistenia
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex py-2 px-4 my-2 bg-neutral-900 rounded-xl justify-between">
                Yes. It adheres to the WAI-ARIA design pattern.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>
              </div>
              <div className="  flex py-2 px-4 my-2 bg-neutral-900 rounded-xl justify-between">
                Yes. It adheres to the WAI-ARIA design pattern.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* <Accordion disableGutters>
      <AccordionSummary
        expandIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        }
      >
        <h1 className="text-white">Clase 1</h1>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton disabled>
              <ListItemIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>
              </ListItemIcon>
              <ListItemText primary="Video Introductorio" />
            </ListItemButton>
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion> */}
      </div>
      <h1 className="mt-8 text-center text-2xl font-bold lg:text-4xl">
        Descripcion del curso
      </h1>
      <h1 className="mx-auto mt-2 max-w-5xl px-8 py-4 text-center text-text md:px-16 lg:px-32">
        Este curso cuenta con muchas posibilidades para expandir tus
        conocimientos, incluye informacion muy interesante sobre muchos aspectos
        de la calistenia, como lo son los basicos,estaticos y freestyle.
      </h1>
      <h1 className="mt-8 text-center text-2xl font-bold lg:text-4xl">
        Beneficios del curso
      </h1>
      <h1 className="mx-auto mt-2 max-w-5xl px-8 py-4 text-center text-text md:px-16 lg:px-32">
        Este curso cuenta con muchas posibilidades para expandir tus
        conocimientos, incluye informacion muy interesante sobre muchos aspectos
        de la calistenia, como lo son los basicos,estaticos y freestyle.
      </h1>
      <h1 className="mt-12 mb-8 text-center text-2xl font-bold lg:text-4xl">
        Testimonios
      </h1>
      <div className="m-2 grid grid-cols-1 content-center justify-center gap-8 md:grid-cols-2 md:px-12 lg:px-32 xl:grid-cols-3">
        <Testimonials
          content="Este curso cuenta con muchas posibilidades para expandir tus
    conocimientos, incluye informacion muy interesante sobre muchos aspectos
    de la calistenia, como lo son los basicos,estaticos y freestyle."
        />
        <Testimonials
          content="Este curso cuenta con muchas posibilidades para expandir tus
    conocimientos, incluye informacion muy int"
        />
        <Testimonials
          content="Este curso cuenta con muchas posibilidades para expandir tus
    conocimientos, incluye informacion muy interesante sobre muchos aspectos
    de la calistenia, como lo son los basicos,estaticos y freestyle."
        />
      </div>
      <h1 className="mt-12 mb-12 text-center text-2xl font-bold lg:text-4xl">
        Marcas y empresas que avalan nuestros cursos
      </h1>
      <div className="flex flex-wrap justify-center gap-8 px-8 md:px-16 lg:px-32">
        <div className="relative mb-16 h-16 w-16  overflow-hidden rounded-full md:h-24 md:w-24  ">
          <Image
            src="/burgerking-icon.png"
            className="object-cover"
            alt="burger"
            fill={true}
          />
        </div>
        <div className="relative h-16  w-16 overflow-hidden  rounded-full md:h-24 md:w-24  ">
          <Image
            src="/macdonal-icon.png"
            className="object-cover"
            alt="burger"
            fill={true}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-bl my-4 mx-auto rounded-full bg-amber-500 px-12 py-4 text-xl font-bold text-black"
        >
          Comprar Curso
        </button>
      </div>
    </div>
  );
};

export default CoursePage;
