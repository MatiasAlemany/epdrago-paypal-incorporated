"use server";

import { db } from "@/lib/db";
import { ModuleEnums, ModuleItemSelect, ModuleZod, modules_items } from "@/lib/db/schema/modules_items";
import { revalidatePath } from "next/cache";
import { questionary } from '../../db/schema/exams';
import { redirect } from "next/navigation";
import { getCourse } from "../get_courses";
import { ModuleNavigationI } from "@/components/module/ModuleNavigation";

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
        revalidatePath(`/editarCurso/${courseId}`);

    }
    if (moduleType == 'video') {
        await db.insert(modules_items).values({
            module_id: moduleId,
            title: title,
            type: moduleType,
            position: 0,
            video_url: form.get('video_url') as string
        })
        revalidatePath(`/editarCurso/${courseId}`);

    }

    if (moduleType == 'questionario') {
        const questionaryModuleItem = await db.insert(modules_items).values({
            module_id: moduleId,
            title: title,
            type: moduleType,
            position: 0,

        }).returning()
        redirect(`/crearCuestionario?module_id=${questionaryModuleItem[0]?.id}`)

    }





}


export async function moduleTimeline(courseId: string, module_id: string) {
    const {modules: allModules, course} = await getModulesOfCourse(courseId)
    const currentModule: ModuleItemSelect | undefined = allModules.find((e) => e.id == module_id);
    if (currentModule == undefined) {
        throw Error('Module not found')
    };
    const index = allModules.findIndex((e) => e.id == currentModule.id);
    const hasNext = allModules.length - 1 > index;
    const hasPrevios = index != 0;


    const timeline: ModuleNavigationI = {
        currentModule: currentModule.id,
        nextModuleId: hasNext ? allModules[index + 1]?.id : undefined,
        previous: hasPrevios ? allModules[index - 1]?.id : undefined,
        exam_id: course.exam_id,
        isLastModule: index == allModules.length - 1,
        course_id: course.id
    }

    return timeline;
}

export async function getModulesOfCourse(courseId: string) {
    const course = await getCourse(courseId);

    let allModules: ModuleItemSelect[] = [];

    for (const moduleDB of course.modules) {
        allModules = [...allModules, ...moduleDB.items]

    }
    return {modules: allModules, course};
}

export async function getFirstModuleOfCourse (courseId: string) {
    const {modules} =  await getModulesOfCourse(courseId);
    return modules[0];
}