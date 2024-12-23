import BeneficiosCurso from "@/components/course/BeneficiosCurso";
import DescripcionCuso from "@/components/course/DescripcionCurso";
import ModuleItemContainer from "@/components/course/ModuleItemContainer";
import PreguntaFrecuenteContainer from "@/components/course/PreguntaFrecuenteContainer";
import Testimonials from "@/components/course/Testimonials";
import YoutubePlayerCourse from "@/components/course/YoutubePlayer";
import BackGroundCourse from "@/components/course/backgroundCourse";
import InstructorContainer from "@/components/course/instructorContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buyCourse } from "@/lib/actions/buy_course";
import { getCourse } from "@/lib/actions/get_courses";
import { youtube_parser } from "@/lib/helpers/youtube_parser";
import { type PageParams } from "@/lib/types/params";
import { currentUser } from "@clerk/nextjs/server";
import { YoutubeIcon } from "lucide-react";

const EditarCursoPage = async ({
  params: { id },
}: PageParams<{ id: string }>) => {
  const course = await getCourse(id);
  const user = await currentUser();

  return (
    <div>
      <BackGroundCourse {...course} id={id} />
      <h1 className="mt-12 mb-8 text-green-400  text-center text-2xl font-extrabold lg:text-4xl">
        Instructores{" "}
      </h1>
      <div className="mt-8 flex-wrap flex justify-center ">
        {course.instructors.map((i) => (
          <InstructorContainer {...i} key={i.id} />
        ))}
      </div>
      <h1 className="mt-12 mb-8 text-green-400  text-center text-2xl font-extrabold lg:text-4xl">
        Video introduccion
      </h1>{" "}
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
          </div>
        </div>
      </div>
      <h1 className="mt-12 mb-8 text-green-400  text-center text-2xl font-extrabold lg:text-4xl">
        Clases
      </h1>{" "}
      <div className="mx-auto mt-4 max-w-4xl p-4">
        {course.modules
          .sort(
            (a, b) =>
              new Date(a.createdAt!).getTime() -
              new Date(b.createdAt!).getTime()
          )
          .map((e, index) => (
            <Accordion type="single" collapsible key={e.id}>
              <AccordionItem value="item-1">
                <AccordionTrigger>{e.title}</AccordionTrigger>
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
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
      </div>
      <DescripcionCuso content={course.descripcion} />
      <BeneficiosCurso content={course.beneficios} />
      <div className="fade-in-view">
        {" "}
        <h1 className="mt-12 mb-8 text-neutral-300 text-center text-3xl font-bold lg:text-4xl">
          Testimonios
        </h1>
      </div>
      <div className="m-2 grid grid-cols-1 content-center justify-center gap-8 md:grid-cols-2 md:px-12 lg:px-32 xl:grid-cols-3">
        {course.testimonials.map((e) => (
          <Testimonials testimonial={e} key={e.id} />
        ))}
      </div>
      <h1 className="mt-12 mb-8 text-green-400  text-center text-2xl font-extrabold lg:text-4xl">
        Preguntas Frecuentes
      </h1>
      <div className="flex flex-col items-center">
        {course.frequentlyAskedQuestions.map((e) => (
          <PreguntaFrecuenteContainer item={e} key={e.id} />
        ))}
      </div>
      <form action={buyCourse} className="flex justify-center pb-40">
        <input type="hidden" name="course_id" defaultValue={id} />
        <button
          type="submit"
          className="bg-bl my-4 mx-auto rounded-full bg-green-500 px-12 py-4 text-xl font-bold text-black"
        >
          Comprar Curso
        </button>
      </form>
    </div>
  );
};

export default EditarCursoPage;
