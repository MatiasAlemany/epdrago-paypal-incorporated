import { currentUser } from "@clerk/nextjs/server";
import { db } from "../db";
import { courses } from "../db/schema/course";
import { eq } from "drizzle-orm";
import { MetadataPreference, PreferenceInputType, createPreferenceResponse } from "./create_preference";
import { redirect } from "next/navigation";


export async function buyCourse(course_id: string) {
    const user = await currentUser();
    if (user == null) return;
    const course = (await db.select().from(courses).where(eq(courses.id, course_id)))[0]
    if (!course) {
        throw new Error('Course not found');
    }

    const metadata: MetadataPreference = {
        user_email: user.emailAddresses[0]!.emailAddress!,
        user_id: user.id,
        product_id: course.id,
        product_title: course.title
    };
    const preferenceInput: PreferenceInputType = {
        metadata: metadata,
        descripcion: course.title,
        item_id: course.id,
        price: 1000,
        title: course.title,
    }

    const response = await createPreferenceResponse(preferenceInput);
    redirect(response.init_point!)

}