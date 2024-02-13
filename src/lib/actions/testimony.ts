"use server";
import { currentUser } from "@clerk/nextjs/server"
import { db } from "../db";
import { testimonials } from "../db/schema/testimonials";
import { action } from "./safe_action";
import z from 'zod';
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";


export const createTestimony = action(z.object({
    course_id: z.string(),
    rating: z.number(),
    

}), async ({ course_id, rating }) => {
    const user = await currentUser();
    if (user == undefined) {
        throw Error('Usario no esta loggeado para dar el testimonio')
    }

    const newTestimony = await db.insert(testimonials).values({
        course_id: course_id,
        user_id: user.id,
        rating: `${rating}`
    }).returning()
    revalidatePath(``)
    console.log(newTestimony);
})

export async function checkTestimony(course_id: string) {
    const user = await currentUser();
    if (user == undefined) {
        throw Error('User not logged to do the testimony')
    }

    const testimonysFromCourse = await db.select().from(testimonials).where(and(eq(testimonials.course_id, course_id), eq(testimonials.user_id, user.id)))
    return testimonysFromCourse[0];
}