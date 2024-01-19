import { db } from "@/lib/db";
import { PageParams } from "@/lib/types/params";
import { exams } from "../../lib/db/schema/exams";
import { eq } from "drizzle-orm";
import ExamState from "./ExamState";

export default async function ExamenPage({
  searchParams: { course_id, exam_id },
}: PageParams<{}, { course_id: string; exam_id: string }>) {
  console.log(course_id, exam_id);
  const exam = await db.query.exams.findFirst({
    where: eq(exams.id, exam_id),
    with: {
      questions: {
        with: {
          options: true,
        },
      },
    },
  });

  console.log(exam);

  if (exam == undefined) {
    return <div>Examen no encontrado</div>;
  }

  return (
    <div className="min-h-screen pt-40 px-2">
      <ExamState questions={exam.questions} />
    </div>
  );
}
