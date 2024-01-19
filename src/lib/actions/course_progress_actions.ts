import { currentUser } from "@clerk/nextjs/server";
import { db } from "../db";
import { CourseProgressSelect, course_progress } from '../db/schema/course_progress';
import { eq } from "drizzle-orm";
import { getCourse } from "./get_courses";
import { getModulesOfCourse } from "./edit/modules_actions";
import { users } from "../db/schema/users";
import { getModule } from "./get_module";

export async function updateCourseProgress(courseId: string, newModuleId: string) {
    const user = await currentUser();
    if (user == null) {
        throw Error('Not logged in')
    };

    const { modules: allModules, course } = await getModulesOfCourse(courseId)

    const courseProgress = await db.select().from(course_progress).where(eq(course_progress.user_id, user.id))
    const selectedCourseProgress = courseProgress.find((e) => e.course_id == courseId);

    console.log(selectedCourseProgress);

}


export type CourseProgressSelection = AwaitedReturn<typeof getUserCourseProgress>[0]
export async function getUserCourseProgress(): Promise<CourseProgressSelect[]> {
    const user = await currentUser();
    if (user == null) {
        throw Error('Not logged in')
    };
    // const courses = await userCourses();
    const progress = await db.select().from(course_progress).where(eq(course_progress.user_id, user.id))

    let progressWithRating: CourseProgressSelect[] = [];

    for (const courseProgress of progress) {
        const { modules, course } = await getModulesOfCourse(courseProgress.course_id);
        const indexOfModule = modules.findIndex((e) => e.id == courseProgress.module_id);
        const progressRating = courseProgress.isFinished ? 1 : indexOfModule / modules.length;
        progressWithRating.push({ ...courseProgress, rating: progressRating, courseTitle: course.title, moduleTitle: modules[indexOfModule] ? modules[indexOfModule]!.title : "" });
    }


    return progressWithRating;
}


export async function userCourses() {
    const user = await currentUser();
    if (user == null) {
        throw Error('Not logged in')
    };
    const userDB = await db.query.users.findFirst({
        where: eq(users.id, user.id),
        with: {
            users_to_courses: {
                with: {
                    course: {
                        with: {
                            modules: true,

                        }
                    }
                }
            }
        }
    })
    if (userDB == undefined) {
        throw Error('User not found in DB')
    };
    const coursesFromUser = userDB.users_to_courses.map((e) => e.course);

    return coursesFromUser;
}
