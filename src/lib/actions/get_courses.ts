import { eq } from "drizzle-orm";
import { db } from "../db";
import { courses } from "../db/schema/course";
import { currentUser } from "@clerk/nextjs/server";
import { userCourses } from "./course_progress_actions";

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
                frequentlyAskedQuestions: true,

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
    try {
        const courses = await userCourses();
        return !!courses.find((c) => c.id == course_id);

    } catch (error) {
        return false;
    }




}