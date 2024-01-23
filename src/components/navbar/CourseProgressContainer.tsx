import HorizontalProgressBar from "../course/HorizontalProgressBar";
import { redirect } from "next/navigation";
import { CourseProgressItem } from "./CourseProgressItem";
import {
  getUserCourseProgress,
  userCourses,
} from "@/lib/actions/course_progress_actions";

export async function CourseProgressContainer({ userId }: { userId: string }) {
  const progress = await getUserCourseProgress(userId);
  if (progress == undefined) {
    return (
      <div className=" flex justify-center tems-center text-neutral-500  h-20">
        No tienes ningun curso comprado
      </div>
    );
  }

  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-center">
        {progress.length == 0 && (
          <h1 className="text-neutral-400 mt-3 text-sm text-center">
            No has comprado ningun curso todavia!
          </h1>
        )}
      </div>
      {progress.map((e) => (
        <CourseProgressItem key={e.id} customWidth={315} courseProgress={e} />
      ))}
    </div>
  );
}
