import BeneficiosCurso from "@/components/course/BeneficiosCurso";
import DescripcionCuso from "@/components/course/DescripcionCurso";
import ImageModal from "@/components/course/ImageModal";
import ModuleItemContainer from "@/components/course/ModuleItemContainer";
import Testimonials from "@/components/course/Testimonials";
import YoutubePlayerCourse from "@/components/course/YoutubePlayer";
import BackGroundCourse from "@/components/course/backgroundCourse";
import InstructorContainer from "@/components/course/instructorContainer";
import ActualizarDatosModal from "@/components/edit/ActualizarDatos";
import EditDialog from "@/components/edit/EditDialog";
import InstructorModal from "@/components/edit/InstructorModal";
import ModuleModal from "@/components/edit/ModuleModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getCourse } from "@/lib/actions/get_courses";
import { isAdmin } from "@/lib/actions/isAdmin";
import { db } from "@/lib/db";
import { courses } from "@/lib/db/schema/course";
import { modules } from "@/lib/db/schema/modules";
import { modules_items } from "@/lib/db/schema/modules_items";
import { youtube_parser } from "@/lib/helpers/youtube_parser";
import { type PageParams } from "@/lib/types/params";
import { Button, Input, ModalFooter } from "@nextui-org/react";
import { PlayCircleIcon, YoutubeIcon } from "lucide-react";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const EditarCursoPage = async ({
  params: { id },
}: PageParams<{ id: string }>) => {
  // const admin = await isAdmin();
  // if (admin == false) {
  //     redirect('/');
  // }
  const course = await getCourse(id);

  return (
    <div>
      <BackGroundCourse
        onBuy={async () => {
          "use server";
        }}
        {...course}
      />
      <div className="flex-col flex items-center justify-center space-y-2">
        <ImageModal course_id={id} />
        <ActualizarDatosModal course={course} />
      </div>
      <h1 className="mt-8 text-center text-4xl">Instructores</h1>
      <div className="mt-8 flex-wrap flex justify-center ">
        {course.instructors.map((i) => (
          <InstructorContainer {...i} key={i.id} />
        ))}
      </div>
      <div className="flex justify-center">
        {" "}
        <InstructorModal course_id={course.id} />
      </div>

      <h1 className="mt-8 text-center text-4xl">Video Introduccion</h1>
      <div className="p-8 lg:px-16 xl:px-96 ">
        <div className="flex aspect-[18/9] items-center justify-center rounded-lg bg-container">
          <div className="flex flex-col items-center">
            {course.introductory_video != null ? (
              <YoutubePlayerCourse
                videoId={youtube_parser(course.introductory_video) as string}
              />
            ) : (
              <YoutubeIcon className="w-20 h-20" />
            )}
            <EditDialog
              classname="mt-2"
              buttonTitle="Agregar Video"
              dialogTitle="Video Introductorio"
            >
              <form
                action={async (formData: FormData) => {
                  "use server";
                  await db.update(courses).set({
                    introductory_video: formData.get("video_url") as string,
                  });
                  revalidatePath(`/editarCurso/${course.id}`);
                }}
              >
                <Input label="Video Url" name="video_url" />
                <ModalFooter>
                  <Button type="submit" color="primary">
                    Actualizar
                  </Button>
                </ModalFooter>
              </form>
            </EditDialog>
          </div>
        </div>
      </div>
      <h1 className="mt-4 text-center text-4xl">Clases</h1>
      <div className="mx-auto mt-4 max-w-4xl p-4">
        {course.modules.map((e, index) => (
          <Accordion type="single" collapsible key={e.id}>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Modulo {index + 1}: {e.title}
              </AccordionTrigger>
              <AccordionContent>
                {e.items.map((e, itemIndex) => (
                  <ModuleItemContainer
                    course_id={course.id}
                    module_index={index + 1}
                    index={itemIndex + 1}
                    key={e.id}
                    module_item={e}
                  />
                ))}
                <ModuleModal module={e} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
        <div className="flex justify-center">
          <EditDialog
            classname="mt-2 "
            buttonTitle="Crear Modulo"
            dialogTitle="Nuevo Modulo"
          >
            <form
              action={async (formData: FormData) => {
                "use server";
                await db.insert(modules).values({
                  course_id: course.id,
                  title: formData.get("name") as string,
                });
                revalidatePath(`/editarCurso/${course.id}`);
              }}
            >
              <Input label="Nombre del modulo" name="name" />
              <ModalFooter>
                <Button type="submit" color="primary">
                  Crear
                </Button>
              </ModalFooter>
            </form>
          </EditDialog>
        </div>
        <div className="flex justify-center">
          <form
            action={async () => {
              "use server";
              redirect(`/crearExamen?course_id=${course.id}&`);
            }}
          >
            <button className="bg-purple-800 rounded-xl mt-2 px-4 py-2 ">
              Crear Examen
            </button>
          </form>
        </div>
        {course.exam_id != null && (
          <div className="flex justify-center">
            <form
              action={async () => {
                "use server";
                redirect(
                  `/examen?course_id=${course.id}&exam_id=${course.exam_id}`
                );
              }}
            >
              <button className="bg-purple-800 rounded-xl mt-2 px-4 py-2 ">
                Ver Examen
              </button>
            </form>
          </div>
        )}
      </div>
      <DescripcionCuso content={course.descripcion} />
      <BeneficiosCurso content={course.beneficios} />
      <div className="fade-in-view">
        {" "}
        <h1 className="mt-12 mb-8 text-center text-2xl font-bold lg:text-4xl">
          Testimonios
        </h1>
      </div>

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
      {/* <h1 className="mt-12 mb-12 text-center text-2xl font-bold lg:text-4xl">
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
      </div> */}
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-bl my-4 mx-auto rounded-full bg-green-500 px-12 py-4 text-xl font-bold text-black"
        >
          Comprar Curso
        </button>
      </div>
    </div>
  );
};

export default EditarCursoPage;
