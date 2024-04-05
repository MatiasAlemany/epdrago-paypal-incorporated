"use server";
import { db } from "@/lib/db";
import { courses } from "@/lib/db/schema/course";
import { Instructor, InstructorCreate, instructors } from "@/lib/db/schema/instructors";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createInstructor(form: FormData) {
    const newInstructor: InstructorCreate = {
        course_id: form.get("course_id") as string,
        img_url: form.get('img_url') as string,
        instagram: form.get("instagram") as string,
        name: form.get('name') as string,
        qualities: form.get("qualities") as string,
    }
    console.log(newInstructor);
    await db.insert(instructors).values(newInstructor);
    revalidatePath(`/editarCurso/${form.get("course_id") as string}`);

    console.log('instructor created')
}

export async function updateImage(form: FormData) {
    const courseId = form.get("course_id") as string
    const img_url = form.get("img_url") as string | null;

    if (img_url == null) {
        throw Error("Img url doestn exists!")

    }
    await db.update(courses).set({ img_url: img_url }).where(eq(courses.id, courseId));
    revalidatePath(`/editarCurso/${courseId}`);


}

export async function updateData(form: FormData) {
    const courseId = form.get("course_id") as string
    const price = +(form.get("price") as string)
    const duracion = form.get('duration') as string
    const benefits = form.get('benefits') as string
    const descripcion = form.get("description") as string
    await db.update(courses).set({ price: price, beneficios: benefits, descripcion: descripcion, duracion: duracion, }).where(eq(courses.id, courseId))
    revalidatePath(`/editarCurso/${courseId}`);

}