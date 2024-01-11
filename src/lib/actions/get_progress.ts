import { currentUser } from "@clerk/nextjs/server";
import { db } from "../db";
import { eq } from "drizzle-orm";
import { course_progress } from "../db/schema/course_progress";



export type CourseProgress = AwaitedReturn<typeof getProgress>;
export async function getProgress() {
    // const user = await currentUser();
    // if (user == null) {
    //     throw Error('No user logged')
    // };

    // const userProgress = await db.query.course_progress.findMany({
    //     where: eq(course_progress.user_id, user.id)
    //     ,
    //     with: {
    //         course: {
    //             with: {
    //                 modules: true
    //             }
    //         }
    //     }
    // })

    // const userTotalProgress = userProgress.map((progress) => {
    //     const moduleLength: number = progress.course.modules.length;
    //     const { course_id, id, module_id, module_number, user_id } = progress
    //     return {
    //         ...progress, currentPercentage: progress.module_number / moduleLength * 100
    //     }
    // })
    // return userTotalProgress;

}