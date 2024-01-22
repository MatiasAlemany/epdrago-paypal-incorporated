import { moduleTimeline } from "@/lib/actions/edit/modules_actions";
import { db } from "@/lib/db";
import { course_progress } from "@/lib/db/schema/course_progress";
import { modules_items } from "@/lib/db/schema/modules_items";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@nextui-org/react";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { redirect } from "next/navigation";
import ButtonAsync from "./ButtonAsync";
import { action } from "../../lib/actions/safe_action";
import {
  setExamModuleProgress,
  setNextModuleProgress,
} from "@/lib/actions/course_progress_actions";

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
