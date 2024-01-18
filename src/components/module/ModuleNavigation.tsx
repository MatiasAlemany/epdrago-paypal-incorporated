import { moduleTimeline } from "@/lib/actions/edit/modules_actions";
import { db } from "@/lib/db";
import { course_progress } from "@/lib/db/schema/course_progress";
import { modules_items } from "@/lib/db/schema/modules_items";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@nextui-org/react";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { redirect } from "next/navigation";

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
  console.log(navigationTimeline);
  return (
    <div className="flex flex-row justify-between pt-4">
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
        <form
          action={async () => {
            "use server";
            await db
              .update(course_progress)
              .set({ module_id: navigationTimeline.nextModuleId })
              .where(
                eq(course_progress.course_id, navigationTimeline.course_id)
              );
            redirect(
              `/module/${navigationTimeline.nextModuleId}?course=${navigationTimeline.course_id}`
            );
          }}
        >
          <Button type="submit" color="success">
            Siguiente Modulo
          </Button>
        </form>
      )}
      {navigationTimeline.isLastModule &&
        !navigationTimeline.exam_id != null && (
          <form
            action={async () => {
              "use server";
              redirect(
                `/module/${navigationTimeline.nextModuleId}?course=${navigationTimeline.course_id}`
              );
            }}
          >
            <Button type="submit" className="self-end" color="success">
              Realizar examen final
            </Button>
          </form>
        )}
    </div>
  );
};

export default ModuleNavigationTimeline;
