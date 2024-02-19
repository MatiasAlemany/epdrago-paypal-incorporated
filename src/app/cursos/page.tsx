import CourseContainer from "@/components/course/CourseContainer";
import { Rating } from "@/components/course/Rating";
import { padding } from "@/components/styles/padding";
import { getCourses } from "@/lib/actions/get_courses";
import { cn } from "@/lib/utils";

export default async function CursosPage() {
  const courses = await getCourses();
   

  return (
    <div className={cn("pt-36 pb-36 min-h-screen", padding)}>
      {courses.map((e) => (
        <CourseContainer isAdmin={false} {...e} key={e.id} />
      ))}
    </div>
  );
}
