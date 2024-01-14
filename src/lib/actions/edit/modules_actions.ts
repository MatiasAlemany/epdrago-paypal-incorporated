"use server";

import { db } from "@/lib/db";
import { ModuleEnums, ModuleZod, modules_items } from "@/lib/db/schema/modules_items";
import { revalidatePath } from "next/cache";

export async function crearModuleItem(form: FormData) {
    const moduleType = form.get("module_type") as ModuleEnums
    const moduleId = form.get('module_id') as string;
    const courseId = form.get('course_id') as string;
    const title = form.get("title") as string;
    if (moduleType == 'pdf') {
        await db.insert(modules_items).values({
            module_id: moduleId,
            title: title,
            type: moduleType,
            position: 0,
            pdf_url: form.get('pdf_url') as string
        })

    }
    if (moduleType == 'video') {
        await db.insert(modules_items).values({
            module_id: moduleId,
            title: title,
            type: moduleType,
            position: 0,
            video_url: form.get('video_url') as string
        })

    }


    revalidatePath(`/editarCurso/${courseId}`);
}

export  async function crearModuleQuestionary () {

}
