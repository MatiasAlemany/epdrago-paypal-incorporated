import { redirect } from "next/navigation";
import { db } from "../db";
import { certificationInsertZod, certifications } from "../db/schema/certifications";
import { action } from "./safe_action";
import z from 'zod';

export const createCertification = action(certificationInsertZod, async (certificationValues) => {
  const certificationDB = await db.insert(certifications).values(certificationValues).returning();
  const obtainedCertification = certificationDB[0]!;
  redirect(`/certifications/${obtainedCertification.id}`)
});