import ModuleChecker from "@/components/module/ModuleChecker";
import ModuleNavigationTimeline from "@/components/module/ModuleNavigation";
import { padding } from "@/components/styles/padding";
import { Button } from "@/components/ui/button";
import { moduleTimeline } from "@/lib/actions/edit/modules_actions";
import { getModule } from "@/lib/actions/get_module";
import { course_progress } from "@/lib/db/schema/course_progress";
import { moduleZodIntersecttion } from "@/lib/db/schema/modules_items";
import { PageParams } from "@/lib/types/params";
import { cn } from "@/lib/utils";
import { LogOutIcon } from "lucide-react";
import { redirect } from "next/navigation";
const ModuleItemPage = async ({
  params: { id },
  searchParams: { course, fromHome, course_progress_id },
}: PageParams<{ id: string }, { course: string; fromHome?: string, course_progress_id: string }>) => {
  const moduleDb = await getModule(id, course, course_progress_id);
  const moduleParsed = moduleZodIntersecttion.parse(moduleDb);

  return (
    <div className={cn("min-h-screen pt-40", padding)}>
      <ModuleChecker moduleDB={moduleParsed} />
      {fromHome != undefined ? (
        <form
          action={async () => {
            "use server";
            redirect(`/cursos/${course}`);
          }}
        >
          <div className="flex justify-center">
            <Button variant="secondary" className="mt-4">
              <LogOutIcon className="mr-2 w-4 h-4" />
              Volver al curso
            </Button>
          </div>
        </form>
      ) : (
        <div className=" w-full max-w-[1000px] mx-auto ">
          <ModuleNavigationTimeline module_id={id} course_id={course} />
        </div>
      )}
    </div>
  );
};
export default ModuleItemPage;
