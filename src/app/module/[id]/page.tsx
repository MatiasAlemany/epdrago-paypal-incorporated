import { padding } from "@/components/styles/padding";
import { PageParams } from "@/lib/types/params";
import { cn } from "@/lib/utils";
const ModuleItemPage = ({ params: { id } }: PageParams<{ id: string }>) => {
  console.log(id);

  return <div className={cn("min-h-screen pt-40", padding)}>{id}</div>;
};
export default ModuleItemPage;
