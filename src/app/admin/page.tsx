import CourseContainer from "@/components/course/CourseContainer";
import CrearteCourseModal from "@/components/course/CreateCourseModal";
import { padding } from "@/components/styles/padding";
import { Dialog } from "@/components/ui/dialog";
import { getCourses } from "@/lib/actions/get_courses";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { DialogContent, DialogTrigger } from "@radix-ui/react-dialog";

async function Admin() {
  const courses = await getCourses();
  return (
    <div className={cn("min-h-screen pt-40", padding)}>
      <h1 className="font-bold text-xl">Dashboard</h1>
      <CrearteCourseModal />
      {courses.map((e) => (
        <CourseContainer isAdmin={true} {...e} key={e.id} />
      ))}
    </div>
  );
}

export default Admin;
