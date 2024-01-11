import { getProgress } from "@/lib/actions/get_progress";
import HorizontalProgressBar from "../course/HorizontalProgressBar";
import { redirect } from "next/navigation";
import { CourseProgressItem } from "./CourseProgressItem";

export async function CourseProgressContainer() {
  
  const progress = await getProgress();
  if (!(progress == undefined)) {
    return (
      <div className=" flex justify-center items-center text-neutral-500  h-20">
        No tienes ningun curso comprado
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <CourseProgressItem />
      <CourseProgressItem />
      <CourseProgressItem />
    </div>
  );
}
