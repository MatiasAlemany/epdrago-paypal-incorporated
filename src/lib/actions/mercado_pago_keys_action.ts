"use server";

import { eq } from "drizzle-orm";
import { db } from "../db";
import { courses } from "../db/schema/course";
import { action } from "./safe_action";
import z from 'zod';
import { mercadopago_accesskeys } from "../db/schema/mp_access_keys";


export const createOrUpdateKeysMercadoPago = action(z.object({
    value: z.string(),
    course_id: z.string()
}), async ({ course_id, value }) => {

    await db.update(courses).set({ mp_access_token: value }).where(eq(courses.id, course_id));

    const key = await db.select().from(mercadopago_accesskeys).where(eq(mercadopago_accesskeys.value, value))

    if (key[0] == undefined) {
        console.log("Key doesnt exist so create one");
        await db.insert(mercadopago_accesskeys).values({ value });
        return "Llave creada y actualizada!";
    }

    return "Llave actualizada";




})