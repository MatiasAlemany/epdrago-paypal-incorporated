"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db";
import { userBoughtThisCourse } from "./get_courses";
import { modules_items } from "../db/schema/modules_items";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function actionOnServer(course_id: string, module_id: string) {
    const userCourse = await userBoughtThisCourse(course_id);
    console.log(`Este usario compro el curso: ${userCourse}`)
    redirect(`/module/${module_id}?course=${course_id}&fromHome=true`)


}


export const deleteModuleItem = async (formData: FormData) => {
    "use server";
    await db
        .delete(modules_items)
        .where(eq(modules_items.id, formData.get('module_id') as string));
    revalidatePath(`/editarCurso/${formData.get('course_id') as string}`);
}