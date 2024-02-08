"use server";
import { currentUser } from "@clerk/nextjs/server"
import { db } from "../db";
import { testimonials } from "../db/schema/testimonials";
import { action } from "./safe_action";
import z from 'zod';


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
    console.log(newTestimony);
})