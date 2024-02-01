"use server"

import { redirect } from "next/navigation";
import { db } from "../db";
import { certificationInsertZod, certifications } from "../db/schema/certifications";
import { action } from "./safe_action";
import z from 'zod';
import { getCertificate } from "@/app/certificados/[id]/page";

export const verifyCertificate = action(z.object({
    id: z.string()
}), async ({ id }) => {

    try {
        const certificate = await getCertificate(id)
        return certificate;

    } catch (error) {
        return undefined;
    }


})





export const createCertification = action(certificationInsertZod, async ({ course_id, user_id }) => {
    const certificationDB = await db.insert(certifications).values({ course_id, user_id }).returning();
    const obtainedCertification = certificationDB[0]!;
    redirect(`/certificados/${obtainedCertification.id}`)
});