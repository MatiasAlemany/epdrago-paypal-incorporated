import { eq } from "drizzle-orm";
import { db } from "../db";
import { courses } from "../db/schema/course";
import { currentUser } from "@clerk/nextjs/server";

const courses_query = db.query.courses.findMany({
    with: {
        testimonials: true,
        modules: true,
        instructors: true
    }
}).prepare('courses_query');


export type Course = AwaitedReturn<typeof getCourses>[0];
export const getCourses = async () => await courses_query.execute();

export type CourseGet = AwaitedReturn<typeof getCourse>;

export const getCourse = async (course_id: string) => {
    try {
        const course = await db.query.courses.findFirst({
            where: eq(courses.id, course_id),
            with: {
                modules: {
                    with: {
                        items: true
                    }
                }, instructors: true
            }

        });
        if (course == undefined) {
            throw Error('Course not found');
        }
        return course;
    } catch (error) {
        console.log(error);
        throw Error('Course not found');
    }
}


export const userBoughtThisCourse = async (course_id: string): Promise<boolean> => {
    const user = await currentUser();
    if (user == null) return false;

    const course = await db.query.courses.findFirst({
        where: eq(courses.id, course_id),
        with: {
            payments: true,
            modules: {
                with: { items: true }
            }
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