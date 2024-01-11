import CourseContainer from "@/components/course/CourseContainer";
import { Rating } from "@/components/course/Rating";
import { padding } from "@/components/styles/padding";
import { cn } from "@/lib/utils";

export default async function CursosPage() {
  return (
    <div className={cn("pt-36 min-h-screen", padding)}>
      <CourseContainer />
    </div>
  );
}
