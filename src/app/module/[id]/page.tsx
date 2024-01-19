import ModuleChecker from "@/components/module/ModuleChecker";
import ModuleNavigationTimeline from "@/components/module/ModuleNavigation";
import { padding } from "@/components/styles/padding";
import { moduleTimeline } from "@/lib/actions/edit/modules_actions";
import { getModule } from "@/lib/actions/get_module";
import { moduleZodIntersecttion } from "@/lib/db/schema/modules_items";
import { PageParams } from "@/lib/types/params";
import { cn } from "@/lib/utils";
const ModuleItemPage = async ({
  params: { id },
  searchParams: { course },
}: PageParams<{ id: string }, { course: string }>) => {
  const moduleDb = await getModule(id, course);
  const moduleParsed = moduleZodIntersecttion.parse(moduleDb);

  return (
    <div className={cn("min-h-screen pt-40", padding)}>
      <ModuleChecker moduleDB={moduleParsed} />
      <div className=" w-full max-w-[1000px] mx-auto ">
        <ModuleNavigationTimeline module_id={id} course_id={course} />
      </div>
    </div>
  );
};
export default ModuleItemPage;
