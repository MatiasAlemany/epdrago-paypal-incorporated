import CourseContainer from "@/components/course/CourseContainer";
import CrearteCourseModal from "@/components/course/CreateCourseModal";
import { padding } from "@/components/styles/padding";
import { Dialog } from "@/components/ui/dialog";
import { getCourses } from "@/lib/actions/get_courses";
import { cn } from "@/lib/utils";
import { useIsAdmin } from "@/utils/useIsAdmin";
import { Button } from "@nextui-org/react";
import { DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { redirect } from "next/navigation";

async function Admin() {
  const courses = await getCourses();
  const admin = await useIsAdmin();
  if (admin == null) {
    redirect("/");
  }
  return (
    <div className={cn("min-h-screen pt-40", padding)}>
      <h1 className="font-bold text-3xl mb-2">Dashboard</h1>
      <CrearteCourseModal />
      {courses.map((e) => (
        <CourseContainer isAdmin={true} {...e} key={e.id} />
      ))}
      <div className="h-40"></div>
    </div>
  );
}

export default Admin;
