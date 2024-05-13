"use server";

import { db } from "../db";
import { course_progress } from "../db/schema/course_progress";
import { usersToCourses } from "../db/schema/users_to_courses";
import { getFirstModuleOfCourse } from "./edit/modules_actions";

export async function manualBuyCourse(form: FormData) {
    const course_id = form.get("course_id") as string;
    const user_id = form.get("user_id") as string;

    await db.insert(usersToCourses).values({ course_id: course_id, user_id: user_id });
    const firstModule = await getFirstModuleOfCourse(course_id);

    await db.insert(course_progress).values({
        isFinished: false,
        module_number: 0,
        user_id: user_id,
        course_id: course_id,
        module_id: firstModule!.id
    })

    console.log("Curso comprado! artificialmente")
    return;

}