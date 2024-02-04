import {
  setExamModuleProgress,
  setNextModuleProgress,
} from "@/lib/actions/course_progress_actions";
import { moduleTimeline } from "@/lib/actions/edit/modules_actions";
import { Button } from "@nextui-org/react";
import { redirect } from "next/navigation";
import ButtonAsync from "./ButtonAsync";

export type ModuleNavigationI = {
  previous: string | undefined;
  currentModule: string;
  nextModuleId: string | undefined;
  isLastModule: boolean;
  exam_id: string | null;
  course_id: string;
};

const ModuleNavigationTimeline = async ({
  module_id,
  course_id,
}: {
  module_id: string;
  course_id: string;
}) => {
  const navigationTimeline = await moduleTimeline(course_id, module_id);
  return (
    <div className="flex flex-row justify-between items-center pt-4">
      <form
        action={async () => {
          "use server";
          if (navigationTimeline.previous != undefined) {
            redirect(
              `/module/${navigationTimeline.previous}?course=${navigationTimeline.course_id}`
            );
          }
        }}
      >
        <Button type="submit" variant="ghost">
          Anterior Modulo
        </Button>
      </form>

      {!navigationTimeline.isLastModule && (
        <ButtonAsync
          argument={navigationTimeline}
          title="Siguiente modulo"
          onClick={setNextModuleProgress}
        />
      )}
      {navigationTimeline.isLastModule &&
        !navigationTimeline.exam_id != null && (
          <ButtonAsync
            argument={navigationTimeline}
            title="Realizar Examen"
            onClick={setExamModuleProgress}
          />
        )}
    </div>
  );
};

export default ModuleNavigationTimeline;
