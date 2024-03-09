"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "../db";
import { modules_items } from "../db/schema/modules_items";
import { userBoughtThisCourse } from "./get_courses";

export async function actionOnServer(course_id: string, module_id: string) {
    const userCourse = await userBoughtThisCourse(course_id);
    if (userCourse) {
        redirect(`/module/${module_id}?course=${course_id}&fromHome=true`)

    }

    return;


}


export const deleteModuleItem = async (formData: FormData) => {
    await db
        .delete(modules_items)
        .where(eq(modules_items.id, formData.get('module_id') as string));
    revalidatePath(`/editarCurso/${formData.get('course_id') as string}`);
}