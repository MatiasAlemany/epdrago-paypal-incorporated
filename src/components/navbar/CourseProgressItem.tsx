"use client";
import { CourseProgressSelection } from "@/lib/actions/course_progress_actions";
import { useRouter } from "next/navigation";
import HorizontalProgressBar from "../course/HorizontalProgressBar";

export const CourseProgressItem = ({
  customWidth,
  courseProgress,
}: {
  customWidth?: number;
  courseProgress: CourseProgressSelection;
}) => {
  const router = useRouter();
  return (
    <div>
      <button
        className="w-full   py-4 hover:bg-neutral-900 px-4 rounded-large"
        onClick={() => {
          router.push(
            `/module/${courseProgress.module_id}?course=${courseProgress.course_id}`
          );
        }}
      >
        <div>
          <div className="flex flex-col items-start">
         
            <h1 className="font-bold">{courseProgress.courseTitle}</h1>
            <h2 className=" text-neutral-400 text-sm  pb-2">
              Modulo - {courseProgress.moduleTitle}
            </h2>
          </div>

          <div>
            <HorizontalProgressBar
              maxWidth={customWidth}
              percentage={courseProgress.rating}
              thickness={8}
            />
          </div>
        </div>
      </button>
      {courseProgress.isFinished && !courseProgress.certification_id && (
        <div className="flex justify-center">
          <button
            onClick={() => {
              if (courseProgress.exam_id == null) {
                throw Error("No se ha creado ningun examen para este curso");
              }
              router.push(
                `/examen?exam_id=${courseProgress.exam_id}&course_id=${courseProgress.course_id}`
              );
            }}
            className="bg-purple-600 transition-colors mx-auto px-2 py-1 text-sm rounded-lg z-10 hover:bg-purple-500"
          >
            Dar examen
          </button>
        </div>
      )}
      {!!courseProgress.certification_id && (
        <div className="flex justify-center">
          <button
            onClick={() => {
              if (courseProgress.exam_id == null) {
                throw Error("No se ha creado ningun examen para este curso");
              }
              router.push(`/certificados/${courseProgress.certification_id}`);
            }}
            className="bg-purple-600 transition-colors mx-auto px-2 py-1 text-sm rounded-lg z-10 hover:bg-purple-500"
          >
            Obtener certificado
          </button>
        </div>
      )}
    </div>
  );
};
