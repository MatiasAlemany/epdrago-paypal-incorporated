import { redirect } from "next/navigation";
import HorizontalProgressBar from "../course/HorizontalProgressBar";

export const CourseProgressItem = () => {
  return (
    <form
      action={async () => {
        "use server";
        redirect("/cursos");
      }}
    >
      <button className="w-full">
        <div className="px-4 rounded-large py-4 cursor-pointer hover:bg-neutral-900 ">
          <div className="flex flex-col items-start">
            {" "}
            <h1 className="font-bold">Curso entrenador de tu madre</h1>
            <h2 className=" text-neutral-400 text-sm  pb-2">
              Modulo - Conocimientos bastos en Front
            </h2>
          </div>

          <div>
            <HorizontalProgressBar
              maxWidth={315}
              percentage={1}
              thickness={8}
            />
          </div>
        </div>
      </button>
    </form>
  );
};
