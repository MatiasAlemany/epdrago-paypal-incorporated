"use server";

import { userBoughtThisCourse } from "./get_courses";

export async function actionOnServer(course_id: string, module_id: string) {
    const userCourse = await userBoughtThisCourse(course_id);
    console.log(`Este usario compro el curso: ${userCourse}`)


}