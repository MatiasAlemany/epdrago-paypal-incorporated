"use server";

import { redirect } from "next/navigation";
import { db } from "../db";
import { courses } from "../db/schema/course";

export async function createCourse(formData: FormData) {
    const cursoNombre: string = formData.get('title') as string
const course =
    (await db.insert(courses).values({ title: cursoNombre }).returning()).at(0);
    redirect(`/editarCurso/${course!.id}`)
}