import { padding } from "@/components/styles/padding";
import { db } from "@/lib/db";
import { courses } from "@/lib/db/schema/course";
import { cn } from "@/lib/utils";
import UserManagement from "./UserManagement";
import { useIsAdmin } from "@/utils/useIsAdmin";
import { redirect } from "next/navigation";

export type UserDB = AwaitedReturn<typeof getUsers>[0];

async function getUsers() {
  "use server";
  const users = await db.query.users.findMany({
    with: {
      users_to_courses: true,
    },
  });
  return users;
}
export default async function ManualPage({}) {
  const users = await getUsers();
  const courses2 = await db.select().from(courses);
  const admin = await useIsAdmin();
  if (admin == null) {
    redirect("/");
  }
  return (
    <div className={cn("py-40 min-h-screen", padding)}>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r w-32  from-green-500 to-green-300 font-extrabold text-2xl">
        USUARIOS
      </h1>
      {users.map((user) => (
        <div key={user.id} className="my-4">
         
          <UserManagement user={user} cursos={courses2} />
        </div>
      ))}
    </div>
  );
}
