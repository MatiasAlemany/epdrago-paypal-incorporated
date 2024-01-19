import { PageParams } from "@/lib/types/params";
import {
  createExam,
  createQuestionary,
} from "@/lib/actions/questionary_actionst";
import CrearExamen from "./CrearExamen";
import { db } from "@/lib/db";
import { courses } from "@/lib/db/schema/course";
import { exams } from "@/lib/db/schema/exams";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function CrearExamenPage({
  searchParams: { course_id },
}: PageParams<{}, { course_id: string }>) {
  return (
    <div>
      <CrearExamen
        course_id={course_id}
        createQuestionary={async (questions) => {
          "use server";
          await createExam(course_id, questions);
          revalidatePath("/cursos");
          redirect(`/editarCurso/${course_id}`);
        }}
      />
      {/* <CrearCuestionario
        module_item_id={module_id}
        createQuestionary={async (moduleId, questions) => {
          "use server";
          await createQuestionary(module_id, questions);
          return;
        }}
      /> */}
    </div>
  );
}
