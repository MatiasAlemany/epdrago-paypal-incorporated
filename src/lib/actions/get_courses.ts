import { eq } from "drizzle-orm";
import { db } from "../db";
import { courses } from "../db/schema/course";
import { currentUser } from "@clerk/nextjs/server";

const courses_query = db.query.courses.findMany({
    with: {
        modules: true,
        testimonials: true
    }
}).prepare('courses_query');

export const getCourses = async () => await courses_query.execute();

export const getCourse = async (course_id: string) => await db.query.courses.findFirst({
    where: eq(courses.id, course_id),

});


export const userBoughtThisCourse = async (course_id: string): Promise<boolean> => {
    const user = await currentUser();
    if (user == null) return false;

    const course = await db.query.courses.findFirst({
        where: eq(courses.id, course_id),
        with: {
            payments: true
        }
    });

    if (course == undefined) return false;

    let bougthCourse = false;

    for (const payment of course.payments) {
        if (payment.user_id == user.id) {
            bougthCourse = true;
        }
    }


    return bougthCourse





}