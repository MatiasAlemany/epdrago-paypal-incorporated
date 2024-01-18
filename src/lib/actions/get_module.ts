"use server";
import { currentUser } from "@clerk/nextjs/server";
import { userBoughtThisCourse } from "./get_courses";
import { db } from "../db";
import { eq } from "drizzle-orm";
import { modules_items } from "../db/schema/modules_items";

export async function getModule(moduleId: string, courseId: string) {
    // const user = await currentUser();
    // if (user == null) {
    //     throw Error('User not logged in.')
    // };
    // const userHasCourse = await userBoughtThisCourse(courseId);
    // if (userHasCourse == false) {
    //     throw Error('User didnt bought this course')
    // }

    const moduleFromDb = await db.query.modules_items.findFirst({
        where: eq(modules_items.id, moduleId),
        with: {

        }
    })

    if (moduleFromDb == undefined) {
        throw Error("Module not found")
    }

    if (moduleFromDb.type == 'pdf') {

    }

    return moduleFromDb;
}