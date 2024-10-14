import MercadoPagoIcon from "@/components/MercadoPago_Icon";
import BeneficiosCurso from "@/components/course/BeneficiosCurso";
import DescripcionCuso from "@/components/course/DescripcionCurso";
import ImageModal from "@/components/course/ImageModal";
import MercadoPagoKeyModal from "@/components/course/MercadoPagoKeyModal";
import ModuleItemContainer from "@/components/course/ModuleItemContainer";
import PreguntaFrecuenteContainer from "@/components/course/PreguntaFrecuenteContainer";
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
import { buyCourse } from "@/lib/actions/buy_course";
import { getCourse } from "@/lib/actions/get_courses";
import { isAdmin } from "@/lib/actions/isAdmin";
import { deleteModuleItem } from "@/lib/actions/test_action";
import { db } from "@/lib/db";
import { courses } from "@/lib/db/schema/course";
import { frequentlyAskedQuestions } from "@/lib/db/schema/frequently_questions";
import { modules } from "@/lib/db/schema/modules";
import { modules_items } from "@/lib/db/schema/modules_items";
import { youtube_parser } from "@/lib/helpers/youtube_parser";
import { type PageParams } from "@/lib/types/params";
import { useIsAdmin } from "@/utils/useIsAdmin";
import { Button, Input, ModalFooter, Textarea } from "@nextui-org/react";
import { eq } from "drizzle-orm";
import { KeyIcon, TrashIcon, YoutubeIcon } from "lucide-react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const EditarCursoPage = async ({
  params: { id },
}: PageParams<{ id: string }>) => {
  const admin = await useIsAdmin();
  if (admin == null) {
    redirect("/");
  }
  const course = await getCourse(id);

  return (
    <div>
      <BackGroundCourse {...course} />
      <div className="flex-col flex items-center justify-center space-y-2">
        <ImageModal course_id={id} />
        <ActualizarDatosModal course={course} />
        <MercadoPagoKeyModal
          course_id={course.id}
          mpKey={course.mp_access_token}
        />
      </div>
      <h1 className="mt-8 text-center text-4xl">Instructores</h1>
      <div className="mt-8 flex-wrap flex justify-center ">
        {course.instructors.map((i) => (
          <InstructorContainer admin={true} {...i} key={i.id} />
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
                  await db
                    .update(courses)
                    .set({
                      introductory_video: formData.get("video_url") as string,
                    })
                    .where(eq(courses.id, course.id));
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
              <AccordionTrigger>{e.title}</AccordionTrigger>
              <AccordionContent>
                {e.items.map((e, itemIndex) => (
                  <div className="flex items-center" key={e.id}>
                    <ModuleItemContainer
                      admin={true}
                      course_id={course.id}
                      module_index={index + 1}
                      index={itemIndex + 1}
                      module_item={e}
                    />
                    <form action={deleteModuleItem}>
                      <Button
                        className="ml-1"
                        variant="ghost"
                        isIconOnly={true}
                        type="submit"
                      >
                        <TrashIcon />
                      </Button>
                      <input hidden={true} name="module_id" value={e.id} />
                      <input hidden={true} name="course_id" value={course.id} />
                    </form>
                  </div>
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

      <div className="m-2 grid grid-cols-1 content-center justify-center gap-8 md:grid-cols-2 md:px-12 lg:px-32 xl:grid-cols-3"></div>
      <h1 className="mt-12 mb-8 text-green-400  text-center text-2xl font-extrabold lg:text-4xl">
        Preguntas Frecuentes
      </h1>

      <div className="flex flex-col items-center">
        {course.frequentlyAskedQuestions.map((e) => (
          <PreguntaFrecuenteContainer item={e} key={e.id} />
        ))}
        <EditDialog
          classname="mt-2"
          buttonTitle="Agregar Pregunta Frecuente"
          dialogTitle="Nueva Pregunta frecuente"
        >
          <form
            action={async (formData: FormData) => {
              "use server";
              const question = formData.get("question") as string;
              const response = formData.get("response") as string;

              await db.insert(frequentlyAskedQuestions).values({
                course_id: course.id,
                question,
                response,
              });
              revalidatePath(`/editarCurso/${course.id}`);
            }}
          >
            <Input className="mb-2" label="Pregunta" name="question" />
            <Textarea name="response" label="Respuesta ">
              Respuesta
            </Textarea>
            <ModalFooter>
              <Button type="submit" color="success">
                Agregar
              </Button>
            </ModalFooter>
          </form>
        </EditDialog>
      </div>
    </div>
  );
};

export default EditarCursoPage;
