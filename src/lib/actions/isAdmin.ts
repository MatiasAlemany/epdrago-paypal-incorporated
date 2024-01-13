'use server';

import { currentUser } from "@clerk/nextjs/server";
import { db } from "../db";
import { users } from "../db/schema/users";
import { eq } from "drizzle-orm";

export async function isAdmin () : Promise<boolean> {
    const user = await currentUser()
    if (user == undefined) {
        return false;
    }

    const userDB = (await db.select().from(users).where(eq(users.id, user.id)))[0];
    if (userDB == undefined) return false;
    

    return userDB.role == 'admin';
}
