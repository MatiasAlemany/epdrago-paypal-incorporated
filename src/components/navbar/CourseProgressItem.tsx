"use client";
import { useRouter } from "next/navigation";
import HorizontalProgressBar from "../course/HorizontalProgressBar";
import useWindowDimensions from "@/lib/hook/useWindowDimensions";
import { CourseProgressSelection } from "@/lib/actions/course_progress_actions";

export const CourseProgressItem = ({
  customWidth,
  courseProgress,
}: {
  customWidth?: number;
  courseProgress: CourseProgressSelection;
}) => {
  const router = useRouter();
  return (
    <button
      className="w-full"
      onClick={() => {
        router.push(
          `/module/${courseProgress.module_id}?course=${courseProgress.course_id}`
        );
      }}
    >
      <div className="px-4 rounded-large py-4 cursor-pointer hover:bg-neutral-900 ">
        <div className="flex flex-col items-start">
          {" "}
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
  );
};
