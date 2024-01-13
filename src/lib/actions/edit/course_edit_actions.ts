"use server";
import { db } from "@/lib/db";
import { Instructor, InstructorCreate, instructors } from "@/lib/db/schema/instructors";

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
    console.log('instructor created')
}