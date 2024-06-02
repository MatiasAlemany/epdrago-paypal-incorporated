
"use server";
import { eq } from "drizzle-orm";
import { db } from "../db";
import { courses } from "../db/schema/course";
import { currentUser } from "@clerk/nextjs/server";
import { userCourses } from "./course_progress_actions";

const courses_query = db.query.courses.findMany({
    where: eq(courses.is_public, true),

    with: {
        testimonials: true,
        modules: true,
        instructors: true
    }
}).prepare('courses_query');

export const getCoursesAdmin = async () => {
    const courses2 = await db.query.courses.findMany({

        with: {
            testimonials: true,
            modules: true,
            instructors: true
        }
    }).execute();
    const ratings = courses2.map((e) => {
        const testimonialsCourse = e.testimonials;
        let testimonialValue = 0;
        for (const testimonial of testimonialsCourse) {
            testimonialValue = testimonialValue + parseFloat(testimonial.rating);
        }
        return testimonialValue / testimonialsCourse.length;
    })
    return courses2.map((e, index) => ({ ...e, rating: ratings[index] }))
};
export type Course = AwaitedReturn<typeof getCourses>[0];
export const getCourses = async () => {
    const courses = await courses_query.execute();
    const ratings = courses.map((e) => {
        const testimonialsCourse = e.testimonials;
        let testimonialValue = 0;
        for (const testimonial of testimonialsCourse) {
            testimonialValue = testimonialValue + parseFloat(testimonial.rating);
        }
        return testimonialValue / testimonialsCourse.length;
    })
    return courses.map((e, index) => ({ ...e, rating: ratings[index] }))
};

export type CourseGet = AwaitedReturn<typeof getCourse>;
export type TestimonialSelectWithCourse = CourseGet['testimonials'][number]
export const getCourse = async (course_id: string) => {
    const course = await db.query.courses.findFirst({
        where: eq(courses.id, course_id),
        with: {
            frequentlyAskedQuestions: true,
            testimonials: {
                with: {
                    user: true
                }
            },
            modules: {
                with: {
                    items: true
                }
            }, instructors: true, certifications: true
        }

    });
    if (course == undefined) {
        throw Error('Course not found');
    }
    const testimonialsCourse = course.testimonials;
    let testimonialValue = 0;
    for (const testimonial of testimonialsCourse) {
        testimonialValue = testimonialValue + parseFloat(testimonial.rating);
    }



    return { ...course, rating: testimonialValue / testimonialsCourse.length };

}


export const userBoughtThisCourse = async (course_id: string): Promise<boolean> => {
    try {
        const courses = await userCourses();
        return !!courses.find((c) => c.id == course_id);

    } catch (error) {
        return false;
    }




}