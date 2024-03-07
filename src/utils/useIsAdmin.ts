"use server";

import { db } from "@/lib/db";
import { users } from "@/lib/db/schema/users";
import { User, currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";


export async function useIsAdmin(): Promise<User | null> {
    const session = await currentUser();
    if (session == null) return null;
    const user = (
        await db.select().from(users).where(eq(users.email, session.emailAddresses[0]?.emailAddress!))
    )[0];
    if (user == undefined) {
        throw Error('User not found in DB');
    }
    if (user!.role == "admin") return session;

    return null;
}