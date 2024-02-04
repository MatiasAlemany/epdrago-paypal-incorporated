import DiplomaComponent from "@/components/DiplomaComponent";
import { db } from "@/lib/db";
import { certifications } from "@/lib/db/schema/certifications";
import { PageParams } from "@/lib/types/params";
import { eq } from "drizzle-orm";

export async function getCertificate(id: string) {
  "use server";
  return await db.query.certifications.findFirst({
    where: eq(certifications.id, id),
    with: {
      course: true,
      user: true,
    },
  });
}

export type Certificate = AwaitedReturn<typeof getCertificate>;

export default async function Certificado({
  params: { id },
}: PageParams<{ id: string }>) {
  const certificado = await getCertificate(id);

  if (certificado == undefined) {
    return (
      <div className="h-screen flex justify-end items-center">
        El certificado no existe
      </div>
    );
  }
  return (
    <div>
      <DiplomaComponent certificate={certificado} />;
    </div>
  );
}
