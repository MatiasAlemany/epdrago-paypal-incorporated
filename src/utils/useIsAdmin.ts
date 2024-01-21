import { db } from "@/lib/db";
import { users } from "@/lib/db/schema/users";
import { User, currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";


export async function useIsAdmin(): Promise<User | null> {
    "use server";
    const session = await currentUser();
    if (session == null) return null;
    const user = (
        await db.select().from(users).where(eq(users.id, session.id))
    )[0];
    if (user!.role == "admin") return session;

    return null;
}